---
layout: layouts/base.html
title: Setting up a Django Development Environment
eleventyNavigation:
  key: Django Development Environment
  parent: Tutorial
  order: 3
---
# Part 3: Setting up a Django Development Environment

## What is Django?

Django is a software framework for writing web applications using the
Python programming language.

## What is a Software Framework?

A software framework is a set of software tools and libraries that helps
us write a certain kind of application. There are many software
frameworks for many different languages. Some examples you may have
heard of include React, Angular, Ruby on Rails and J2EE.

## What is Software Dependency Management?

Software that we write typically does not live on its own. Typical
software makes use of 3rd party libraries to do its work. The software
we write using Django, will, for example, depend on Django itself, as
well as many other software libraries that Django needs.

It is important to manage the versions of the libraries our software
uses, if we try to run our software with a wrong library version it may
not work at all or provide the wrong results.

There are many different ways to manage software dependencies, but the
trend in recent years has been for programming languages to include
dependency management tools for software that was written using them.
One popular dependency management tool that we will use in this course
is called “Pipenv”.

## Task 1: Install Pipenv

We’re going to install Pipenv in our development environment. Since our
development environment lives inside a Vagrant VM, we first need to
bring the VM up and enter it.

```shell
vagrant up
vagrant ssh
```

In the following tasks, unless we say otherwise, assume that all the
commands we mention need to be run from inside the Vagrant VM.

To install `Pipenv` in the Fedora operating system we have to install it
on our VM. We can use the following command to do that:

```shell
sudo dnf install pipenv
```

In this command:

-   We use `dnf`, the Fedora operating system’s package manager, to install
    `Pipenv`.
-   Since administrative (`root`) privileges are required to run `dnf`, we use
    `sudo` to obtain them (The Fedora Vagrant box comes with `sudo`
    preconfigured to allow us to do that).

Once `Pipenv` is installed we can run it to get some brief instructions
about how to use it:

```shell
pipenv
```

## Task 2: Setup Pipenv for our Project

The way `Pipenv` works is a bit similar to how Vagrant works. It creates
and uses two files, `Pipfile` and `Pipfile.lock`, to store information about
our software dependencies, and we push those files to our Git repository
to enable other developers to obtain and use the same dependencies that
we did.

### Why Two Files?

When managing information about software dependencies there are two
kinds of information we need to deal with.

One kind of information is the high-level knowledge developers have
about their software dependencies. For example, we know that to run our
software we need library X version 3 or above.

The other kind of information is the detailed lower-level knowledge that
software needs to keep behaving in exactly the same way when we run it
in different places and times. For example, the software needs to “know”
it runs with library X version 3.0.2, and that the library also needs
library Y version 1.20.3 and library Z version 2.3.0.

The `Pipfile` is used to store the high-level human friendly information
while the `Pipfile.lock` stores the detailed low-level information. We can
generally edit the `Pipfile` (`Pipenv` provides us with commands to do it,
so we don’t typically need to do it directly), while `Pipfile.lock` is
generated automatically and we should never need to alter it manually.

Both files need to be committed to Git in order to store the full
information we need about our software dependencies.

To generate initial versions of the Pipfile and Pipfile.lock, we need to
go to our repository directory and run a simple command:

```shell
cd /vagrant
pipenv --python 3
```

This command tells Pipenv that our project would be using Python 3. If
we now use the ls command to look at our project files, we will see that
a `Pipfile` was created for us. A `Pipfile.lock` file was not yet created
because we did not ask for any software dependencies yet.

## Task 3: Installing Django

To install Django for our project, we run the following command:

```shell
pipenv install django
```

This command will both install Django itself, and create the
Pipfile.lock file to store the information about which exact version was
installed.

We can verify that Django was installed successfully and see which
version was installed with the following command:

```shell
pipenv run python -m django --version
```

{% alert state="warning", title="Warning:" %}Any Python-based command we run in our project needs to be run via
Pipenv in order to have access to the dependencies it manages for us. If
we try to run the command above without the pipenv run part, it will
fail with an error like the following:

```
/usr/bin/python: No module named django
```
{% endalert %}

## Task 4: Bootstrapping a Django website

One of the things Django provides us with is the ability to quickly
bootstrap our website and generate a skeleton application with a single
command.

```shell
pipenv run django-admin startproject beyond_tutorial .
```

We provide Django with a name for our project (`beyond_tutorial`). That
name serves as the name of the directory Django generates. Since the
directory works as a Python module, the name must be a legal Python
identifier name and cannot include characters such as spaces or hyphens.

The second parameter we provide to the command (`.`), tells Django to
create the project files in the current directory (You can think of `.`
as a pointer to the current directory, and you should be in `/vagrant`,
the project’s repository directory, when you run the command above). If
we don’t provide it, Django would create an extra directory that we
don’t need.

If we look at the files we have right now, we will see that we indeed
have a new `beyond_tutorial` directory as well as a `manage.py` script. That
script is what we can use to interact with Django to develop and test
our application. We can ensure it works by asking it to display its help
message:

```shell
pipenv run ./manage.py --help
```

## Task 5: Providing HTTP access into our VM

Django is generally used to create web (HTTP) applications, since we’re
going to run our Django application on our Vagrant VM, we need to create
a way for us to access it from our machine.

Even though the Vagrant VM is just another software program running on
our computer, it has its own (virtual) networking hardware and its own
network software stack. From the point of view of other software running
on our computer it looks just as if it was a different machine connected
over the network. Therefore we need to use some advanced networking
techniques to gain access to it, but Vagrant mostly hides those away.

Vagrant enables us to use a technique called “port forwarding”, with
port forwarding we can make a network TCP port on our computer act as if
it was a port on another computer (In our case, the virtual machine).

To setup port forwarding for port 8000 (The default port Django runs in
at development time), we need to add the following lines to the
Vagrantfile, inside the `do - end` block:

```ini
config.vm.network(
  "forwarded_port", guest: 8000, host: 8000, host_ip: "127.0.0.1"
)
```

We need to reload our Vagrant configuration and restart the VM. Since we
are logged in to the VM at this point we need to first exit it with:

```shell
exit
```

Once we exit the VM and are back in our own machine’s command line (Note
what the prompt says!), we can run the following command to reload the
Vagrant configuration and restart the VM:

```shell
vagrant reload
```

Once the VM is done restarting, we can log back into it with:

```shell
vagrant ssh
```

Finally we go back to our project code directory with:

```shell
cd /vagrant
```

## Task 6: Running our Django application

To run our skeleton application, we use the following command:

```shell
pipenv run python manage.py runserver 0.0.0.0:8000
```

{% alert %}By default, Django tries to be secure when it runs in development mode
and blocks connections that do not originate from the machine it runs on. Since
we want to connect to Django from our host computer, which is considered to be
a remote machine from the virtual machine’s point of view, we need to add the
`0.0.0.0:8000` parameter to runserver.{% endalert %}

The application server will start up, print a few messages like the
following, and then stop and listen for user interaction.

```
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly
until you apply the migrations for app(s): admin, auth, contenttypes,
sessions.
Run 'python manage.py migrate' to apply them.
October 16, 2020 - 05:37:10
Django version 3.1.2, using settings 'beyond_tutorial.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

You can notice a warning about unapplied migrations. The migrations are used to
set up your application’s database. Since we did not create any data model
classes for our application, this is not important at this phase, and we can
ignore the warning.

We can now use the address Django displays to access our application. Open a
web browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

We will get back a page congratulating us on a successful Django installation.
If we look at the command-line window that runs Django, we will also see a log
line printed that notified us about the access that was made to the
application. Try moving the windows around so you can see both the browser
windows and the command line window and then refresh the browser. You should
see additional log lines getting added as you do the refresh.

We can shut down the Django application by pressing
<kbd>Ctrl</kbd>+<kbd>C</kbd> in the command-line window. After we do that, the
browser will show an error message if we try to refresh it.

## Task 8: Automating our environment

We’re going to set things up so that running vagrant up will be the only thing
we need to do to bring up a functional development environment before we can
start writing code.

Most of the settings we’ve made are saved as files into our repository and
therefore we do not need to re-make them if we shut down and delete our VM, or
start it on a different computer. There are a few things that we did that only
modified the VM, and therefore we will need to have our automation re-do them
as needed. Those things are:

-   Installing the Pipenv tool
-   Telling Pipenv to install our software dependencies (Pipenv did that
    automatically when we created the Pipfile and Pipfile.lock via the pipenv
    install commands, but a different command is needed when we already have
    the files and simply want to get the dependencies listed in them.
-   Starting out application

For automating VM setup, Vagrant provides us with the “provisioning” feature.
There are many ways to provision things in a vagrant VM, but one of the simple
ones is to have Vagrant simply run a shell script for us when the VM starts up
for the first time.

Let's create our provisioning script by writing the following content into a
file called `setup.sh`:

```bash
#!/bin/bash -ex
# The -e option would make our script exit with an error if any command
# fails while the -x option makes verbosely it output what it does

# Install Pipenv, the -n option makes sudo fail instead of asking for a
# password if we don’t have sufficient privileges to run it
sudo -n dnf install -y pipenv

cd /vagrant

# Install dependencies with Pipenv
pipenv sync --dev

# run our app. setsid, the parentheses and "&" are used to perform a
# "double fork" so that out app stays up after the setup script finishes.
# The app logs are redirected to the `runserver.log` file.
(setsid pipenv run \
    python manage.py runserver 0.0.0.0:8000 > runserver.log 2>&1 &)
```

To make vagrant run this file for us, we add the following line to the
`Vagrantfile`:

```ini
config.vm.provision "shell", path: "setup.sh", privileged: false
```

By default, vagrant runs provisioning scripts in privileges mode (With the
`root` user), since our script mostly needs to run unprivileged commands, we
set the privileged option to false.

The only thing left to do now is destroy our VM and recreate it, remember you
need to exit the VM back to your own operating system’s command line to do
that:

```shell
vagrant halt
vagrant destroy
vagrant up
```

If all goes well, when the VM comes back up you’ll be able to use your browser
to see the Django welcome page at
[http://127.0.0.1:8000/](http://127.0.0.1:8000/). You’ll also see the output of
your `setup.sh` script as part of the vagrant up output.

## Task 9: Commit push and merge your changes

It’s time to commit all the new files we’ve added and the changes we’ve made.
If you’re still logged into your VM via `vagrant ssh` don’t forget to exit it
before trying to run any Git commands.

Here is the brief reminder of the process that needs to be done:

1.  Create a new feature branch with `git checkout -b` (So far, we’ve always
    created the branch prior to making any changes, but it's also possible to
    do that afterwards, as long as we create the branch from the current
    commit).
2.  Examine which files had been changed or added with `git status`
3.  Stage the files for committing with `git add`
    - Note: Your project directory might include the `nohup.out` log file, it
      should not be committed, try to make Git ignore it!
    - Also note: adding a directory adds all the files in it, except the
      ignored ones
4.  Commit the changes
5.  Review your commits with git show and git log
6.  Push the branch to GitHub
7.  Follow the link displayed by the push command to create a PR
8.  Review and merge the PR
9.  Update the local main branch and delete the un-needed branches

Some of the files we’ve added have been created automatically by running
the tools. It's usually a good idea to separate auto-created changes
from manually written ones, by putting them in separate commits or even
separate PRs. In this case we made a fairly small amount of actual
changes, so it can be sufficient to include a commit message like the
following:

```md
Adding a Django development environment

- Setup [Pipenv][1] to install and manage Django and other Python dependencies
- Bootstrapped an empty [Django][2] application
- Setup Vagrant to automatically bring our application up as well as make it accessible from a web browser

After running `vagrant up` the application can be accessed at:

> http://127.0.0.1:8000/

{% alert %}Most changes had been auto-generated, only `Vagrantfile` and
`setup.sh` had been edited manually.{% endalert %}

[1]: https://github.com/pypa/pipenv
[2]: https://www.djangoproject.com/
```

[Next: Adding Some CI](../part-4/)
