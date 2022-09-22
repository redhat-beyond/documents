---
layout: layouts/base.html
title: Adding Features to our Website
eleventyNavigation:
  key: Adding Features
  parent: Tutorial
  order: 5
---
# Part 5: Adding Features to our Website

Now that we have our development environment set up and ready, we can add some
features to our website. We will create a (very) basic one-page message board
application where users can post messages and see messages by other users.

A Django website is built out of one or more “apps”. Each Django app typically
contains:

-   **Model classes** that describe the data model of the application
-   **Views** that describe the processes by which users view and interact with
    the data
-   **Templates** that describe how data is sent and displayed to users
-   **Routes** that describe how web addresses map to views

Additionally a Django app can contain:

-   **Migrations** that describe how to setup the database for the application
-   **Static files** that can be sent to the user’s browser along with content
    that is generated via templates. Such files may include image and CSS
    files.
-   **Form classes** that represent forms shown in the UI.

## Task 1: Bootstrapping a Django App

Just like it provided us with a command to get started with our website, Django
also provides us with a command to quickly get started with an application. To
run the command we must first connect to our VM:

```shell
vagrant ssh
```

And go to our application directory:

```shell
cd /vagrant
```

Now we can run the following command to bootstrap our app:

```shell
pipenv run python manage.py startapp msgboard
```

The command will create the msgboard directory and put a few files and
directories in it.

## Task 2: Registering our app with Django

After we generate our app, we need to tell our Django website about it. We do
that by modifying the `beyond_tutorial/settings.py` file. We modify the lines
that start with `INSTALLED_APPS` to add our app to the list of apps Django knows
about. The end result with our modification should look like the following:

```python
INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'msgboard.apps.MsgboardConfig',
]
```

## Task 3: Creating model classes for our app

Django model classes describe the structure of our application’s database. And
provide us with ways to access it. Each model class corresponds to a database
table, and it contains attributes that correspond to the table fields. When we
interact with the database we can use class methods to query it and get back
class instance objects that correspond to database records. We can also modify
the object to alter the database records or create new objects to create new
database records.

Our application model is going to be rather simple. We’ll have a single table
that stores the messages in our message board, so we’ll only need a single
model class.

To create our model class we’ll change the `msgboard/models.py` file to look like
the following:

```python
from django.db import models
from django.utils import timezone

class Message(models.Model):
      author = models.CharField(max_length=200)
      text = models.TextField()
      date = models.DateTimeField(default=timezone.now)
```

{% alert %}Like YAML, Python is an *indentation-sensitive* language. Make sure you
keep line indentation in your files similar to what you see in the examples
here and consistent.{% endalert %}

## Task 4: Creating database migrations

Before we can use our newly created model class, we need to create the database
table that stores the data it represents. In Django, this task is done via
“database migrations”. Database migrations are scripts that can create or alter
the database structure, and Django provides us with a way to run them as
needed. Django also provides us with the ability to automatically generate
database migrations that correspond to changes we make to our model classes.

To create the database migrations for our new model class, we run the following
command:

```shell
pipenv run python manage.py makemigrations msgboard
```

The command will create the `msgboard/migrations/0001_initial.py` file. If we
look inside it we can see the command for creating our database table.

{% alert %}If we did not register our app as specified in [Task 2][task2] above, the
command will fail with the following error message:{% endalert %}

```
No installed app with label 'msgboard'.
```

## Task 5: Adding test data

When developing an application it's useful to have some test data in it that we
can work with at development time.

We can create a custom database migration file that will automatically add some
test data for us. To do that, we’ll create the
`msgboard/migrations/0002_test_data.py` file and put the following contents in
it:

```python
from django.db import migrations, transaction

class Migration(migrations.Migration):
      dependencies = [
          ('msgboard', '0001_initial'),
      ]

      def generate_data(apps, schema_editor):
          from msgboard.models import Message

      test_data = [
          ('Test User1', 'A simple test message'),
          ('Test User2', 'Another simple test message'),
      ]

      with transaction.atomic():
          for author, text in test_data:
              Message(author=author, text=text).save()

      operations = [
          migrations.RunPython(generate_data),
      ]
```

## Task 6: Running the Database Migrations

To run the database migrations we’ve just created we run the following command:

```shell
pipenv run python manage.py migrate
```

In the output of the command we can see Django runs the migrations we’ve
created as well as several other migrations that are built-into Django and the
libraries it provides for us.

After we’ve run this command we can notice a file called `db.sqlite3` was
created in our project directory. That file stores our database data. We need
not and should not commit this file to Git, so it's a good idea to add it to
the list of files in the `.gitignore` file.

We can inspect our newly created database using the following command:

```shell
pipenv run python manage.py shell
```

That command runs an interactive Python shell that lets us interact with our
applicaiton’s objects.

We can type in the following Python commands to query our database data:

```python
from msgboard.models import Message
messages = Message.objects.all()
[(str(m.date), m.author, m.text) for m in messages]
```

The first line imports the `Message` class from our own `msgboard` module so we
can use it in the Python <abbr title="read execute print loop">REPL</abbr>. The
second line defines a global variable messages containing a list of messages
fetched from the Message model class. The third line is a [list
comprehension](https://en.wikipedia.org/wiki/Command-line_interface) which maps
each entry in the messages list into a
[triple](https://realpython.com/python-lists-tuples/) of strings: the message
date, author, and text.

Once we’re done with our interactive shell, we can exit it with:

```python
exit()
```

## Task 7: Creating a View for Displaying our Data

To let users view the messages we have stored in our database, we need to
create a view function that will query the data and send it to the users, a
template to generate <abbr title="hypertext markup language">HTML</abbr> from
the data and a route to direct user requests to the view function.

### Creating the View Function

We’ll edit the `msgboard/views.py` file so it looks like the following:

```python
from django.shortcuts import render
from .models import Message

def board(request):
    messages = Message.objects.order_by('-date')
    return render(request, 'msgboard/board.html', {'messages': messages})
```

### Creating the Template

To create the template we must first create a directory for it:

```shell
mkdir -p msgboard/templates/msgboard
```

(You can also create the directory in your operating system’s file manager or
from your text editor if it lets you do that)

Now we can create the `msgboard/templates/msgboard/board.html` template file:

```html{%raw%}
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Beyond message board</title>
  <style>
    .author,
    .eom {
      color: grey;
    }
    </style>
</head>

<body>
  <header>
    <h1>Beyond message board</h1>
  </header>
  <main>
    <ol>
      {% for message in messages %}
      <li class="message">
        <header class="author">
          Posted by {{ message.author }} at
          <time datetime="{{ message.date }}">{{ message.date }}</time>
        </header>
        <p>{{ message.text }}</p>
      </li>
      {% endfor %}
    </ol>
    <p class="eom">(End of messages)</p>
  </main>
</body>
</html>{%endraw%}
```

{% alert %}
This file contains both HTML elements (e.g. `<body>` or `<ol>`) as well
as liquid template tags (e.g. `{%raw%}{{ message.author }}{%endraw%}` or
`{%raw%}{% for message in messages %}{%endraw%}`).
{% endalert %}

### Creating the Route

To create the route, we edit the `beyond_tutorial/urls.py` file so it looks like
the following (Please note that the file resides in our site settings directory
and not in the app directory):

```python
from django.contrib import admin
from django.urls import path
from msgboard import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.board, name='board')
]
```

### Testing our Changes

If all goes well we should be able to refresh our browser window and see our
application page instead of the Django welcome page. The Django development
server monitors our code for changes and reloads it automatically.

Sometimes we can make code changes that can cause the server to crash when it
tries to load them. If that’s the case we will get a connection error in our
browser window instead of a proper web page. We can make Vagrant rerun our
setup script and restart our server by running the following command (Note that
this command must be run from the command line of our computer and not from
inside the VM!):

```shell
vagrant provision
```

## Task 8: Automating Migrations in Vagrant

Since we added a data model to our application, we must run the migrations as
part of the overall process of starting it up. To do that we'll alter the
`setup.sh` that Vagrant runs for us.

In the `setup.sh` file, we’ll add the line to run the migrations after we run
pipenv sync and before the final few lines that do the work of bringing up our
application. When were done the file should look like the following

```bash
#!/bin/bash -ex
# The -e option would make our script exit with an error if any command
# fails while the -x option makes verbosely it output what it does

# Install Pipenv, the -n option makes sudo fail instead of asking for a
# password if we don't have sufficient privileges to run it
sudo -n dnf install -y pipenv

cd /vagrant

# Install dependencies with Pipenv
pipenv sync --dev

# Run database migrations
pipenv run python manage.py migrate

# run our app. Nohup and "&" are used to let the setup script finish
# while our app stays up. The app logs will be collected in nohup.out
nohup pipenv run python manage.py runserver 0.0.0.0:8000 &
```

## Task 9: Allowing the Users to Post Messages

To allow our users to post new messages on the board we will need to add an
HTML form that sends user input to our application and a and a corresponding
Django form object which received that input and adds it to the database.

We will also need to alter our page template to display the message posting
form and our view to be able to accept form data and store it in the database.

### Adding a Form Object

The form objects of Django save us the trouble of writing code to perform
repetitive tasks such as generating HTML boilerplate to display forms,
validating form data and saving it to the database.

To create a form object for our message board messages, we will create the
`msgboard/forms.py` file, and put the following content in it:

```python
from django import forms
from .models import Message

class MessageForm(forms.ModelForm):
      class Meta:
            model = Message
            fields = ('author', 'text')
```

For the most part, Django can generate the object from our existing model
class, we just need to tell it which fields should be included in the form.

### Altering the View

We will alter our views file, `msgboard/views.py` to look like the following:

```python
from django.shortcuts import render, redirect
from .models import Message
from .forms import MessageForm

def board(request):
    messages = Message.objects.order_by('-date')
    if request.method == "POST":
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('board')
    else:
        form = MessageForm()
    return render(request, 'msgboard/board.html', {
        'messages': messages,
        'form': form,
    })
```

The new function code checks whether the incoming <abbr title="hypertext
transfer protocol">HTTP</abbr> request contains form `POST` data. If so, it
validates the data and stores it in the database, otherwise it just displays an
empty form.

Note the use of the `form.save()` method, which saves us the trouble of creating
the model object and filling it with form data on our own.

### Displaying the Form on the Page

To display the form on our message board page, all we need to do is add the
following code to the `msgboard/templates/msgboard/board.html` template file.
The code should be added after the `<main>` opening tag, before the `<ol>`
opening tag:

```html
{%raw%}<form class="newfrm" method="POST">
  {% csrf_token %}
  {{ form.as_p }}
  <label class="newmsg">
    New message:
    <input type="submit" value="Post">
  </label>
</form>{%endraw%}
```

### Testing our Changes

When we refresh the browser after making our changes, we should see a “new
message” form displayed at the top of our message board page. If we fill-in the
form fields and click “Post”, we should see our new message displayed on the
page. If we try to click on “Post” without filling-in the required details, we
should see an error message displayed.

Depending on how you edited your code, the test server may crash while you
work, and you will get a browser error page when you try to refresh. See the
comment near the end of [Task 7][task7] above for an explanation
about how to bring it back.

## Task 10: Checking our Code

Before sending our new code to GitHub, we should check it to find any issues.
The first check we can do is to run the Flake8 tool:

```shell
pipenv run flake8 --max-line-length 120
```

The tool might find a couple of issues in the files Django generated for us, we
can resolve those for now by commenting-out the unused import lines that cause
the issue.

```
./msgboard/tests.py:1:1: F401 'django.test.TestCase' imported but unused
./msgboard/admin.py:1:1: F401 'django.contrib.admin' imported but unused
```

Another test we should perform is to destroy our Vagrant VM, bring it up again
and make sure the app and all its features work. That way we can be sure we did
not ruin the work environment for other developers.

```shell
vagrant halt
vagrant destroy
vagrant up
```

{% alert %}To properly test everything you need to also delete the `db.sqlite3` file
before bringing the VM up again. Otherwise the same file will be reused by the
newly started VM, and the migrations will be skipped.{% endalert %}

When everything works well, the vagrant up output should show the migrations
running before the application server is started.

## Task 11: Committing and Pushing our Changes

It is now time to commit and push all the changes we’ve made. The resulting
commit and PR are going to be quite big. When developing in a team, it's a good
idea to split such large changes into smaller ones so that the review process
may be more efficient.

One way to split apart such a big change is along the lines by which we divided
it into tasks:

1.  First create and push the data model classes and the migrations
2.  Then create some read-only view functions and templates to show how the
data would ultimately be presented
3.  Finally add the ability to add or alter the data.

Each separate set of changes should be sent as a separate PR, reviewed and
merged before the next one is sent.

[task2]: #task-2
[task7]: #task-7
