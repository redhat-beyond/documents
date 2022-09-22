---
layout: layouts/base.html
title: Git and GitHub
eleventyNavigation:
  key: Git and GitHub
  parent: Tutorial
  order: 1
---

# Part 1: Git and GitHub

## What is Git?

Git belongs to a family of tools that are jointly called [<dfn id="SCM">Source
Code Management
(<abbr>SCM</abbr>)</dfn>](https://en.wikipedia.org/wiki/Version_control) tools.
The purpose of those tools is to allow teams of developers to collaborate on
the same code without inadvertently deleting each other's work and to enable
each developer to be aware of the code changes that his teammates make.

A basic way to understand Git is to think of it as a file-sharing tool
for sharing source code where it not only allows us to share the source
code files themselves but also metadata information about how the files
were changed over time, by who, and for what purpose.

To enable the tracking of changes to code Git introduces the concept of
a **commit**. A **commit** describes the way that our **code looks at a
particular point in time**, as well as some information about how we've
changed the code to make it look like it does.

The basic process for working with Git is:

1.  Start with an initial state of the code (For a brand new project the
    state can be simply having an empty folder with no files in it)

2.  Make code changes. Those can include:
    -   Creating new files
    -   Deleting files
    -   Moving and renaming files
    -   Changing the contents of files

3.  Tell Git about the changes you've made by using the git add command.

4.  Create a new commit tracking the changes you've made by using the
    git commit command and including a meaningful short **commit
    message**.

As we work on our code we will create a series of commits. The commits
serve two main purposes:

-   They allow us and other developers to learn how the code became the
    way it is and *why*.
-   We can *go back (revert)* to a particular commit in various ways to
    get the code the way it was in that commit.

The series of commits for a project is also called the project's *commit
history* or its "Git log".

Some more important basic Git concepts include:

-   A Git **branch** is a separate series of commits stored by Git. Git
    lets us keep several different versions of our code that can live
    side-by-side and have separate commit histories. The ability to have
    *multiple branches* and to bring them together is key to allowing
    multiple developers to work on the same project in parallel

-   A Git **repository** is represented by a directory that includes a
    particular set of files, commits and branches. There are two kinds
    of repositories:
    -   A **local repository** - A repository that is stored on our own computer
    -   A **remote repository** - A repository that is stored on another computer

Git provides us with ways to:

- *Download* (**pull**) commits from a remote repository to a local repository
- *Upload* (**push**) commits from the local repository to a remote repository.

## What is GitHub?

GitHub is a *website* that allows us to store Git repositories "in the
cloud" and make them accessible by other people. There are other
websites like GitHub but since GitHub is very popular and is used by
many developers and teams, we have picked it up in the course tech
stack.

## Task 1: Create a GitHub account

If you've never done so before, please go to [the GitHub sign up
page](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
and sign-up for a new GitHub account. Creating an account on GitHub is free.

The process for creating an account on GitHub is similar to creating an
account on any website, you fill-in a username, a desired password and
an email address. And then you verify that the email address works by
clicking a special link that is sent to you via Email.

You will need to type your account name and password in various commands
later so it's best to choose a name and a password that are easy for
you to remember and type. Please choose a secure password though, anyone
with access to your GitHub password may delete or change the source code
of all your projects or the project you're involved in.

## Task 2: Create a new repository in GitHub

While we can certainly create new repositories by using Git on our local
computer, when working with GitHub it's a little more convenient to
first create the repositories on the website. To do this:

1.  Go to [github.com](https://github.com/)
2.  If you haven't done so already - log into your account (If you are
    not logged-in the main GitHub page will show a sign-up form. To
    log-in you need to click the "**Sign in**" link at the top-right
    corner and fill-in your username and password.
3.  Once you're logged in, the left-column of the page will show your
    existing GitHub repositories. It might be empty at this point. There
    should be a green "**New**" button at the top. Click on it to go
    into the "**Create a new repository**" form.
4.  In the "**Create a new repository**" form, fill in a name and a
    description for your new repository. The *name* part is important
    since you will use it when interacting with the repository in the
    future. For the examples in this document, we will use the name
    "**beyond-tutorial**".
5.  We will create a public repository so make sure the "**Public**"
    option is selected.
6.  We will let GitHub automatically create the first commit in the repository
    for us so check all the following check boxes at the bottom of the form:
    - "**Add a README file**"
    - "**Add .gitignore**" - in the drop-down menu that appears, search and
      select "*Python*". This will make Git automatically ignore temporary
      files that are automatically created when Python software runs and should
      not be tracked along with our source code.
    - "**Choose a license**" - in the drop-down menu that appears, please
      choose the "*MIT License*" which is a very simple and permissive license.
7.  Finally, click the "**Create repository**" button.
8.  Once we click the button, GitHub may take a few seconds to create
    our repository. When it's done it should redirect our browser to the
    main page of our new repository. At this point the page should show
    the files that GitHub created for us and the (currently) very simple
    rendered contents of the "**README.md**" file.

## Task 3: Install Git on your Computer

In order to use Git to manage source code we need to have it installed
on our computer. There are many ways to have Git installed and the
available ways depend on the kind of operating system you have
installed.

[Git's getting started and installation
guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) describes
several ways to get Git installed on different operating systems. Please avoid
trying to install Git from source code!

You need a text editor to work with Git. By default git uses "vim" as the
default editor it launches. "Vim" can be a little hard to use for new users.
When you install Git in Windows it will ask you which editor to use. If you
don't have a text editor or an IDE you already know and prefer to work with, we
recommend you install [Notepad++](https://notepad-plus-plus.org/), which is a
basic, lightweight editor that is nevertheless good enough for programming.

## Task 4: Open a Command-line Window

While there are many Git graphical clients and most integrated
development environments (IDEs) can work with it, it is best to learn
Git by first using it from the [command
line](https://en.wikipedia.org/wiki/Command-line_interface).

If you've never used it before, the command line is a textual interface
for interacting with the computer. It works a little bit like a chat
where you type in text and the computer prints back the results of the
command you've typed.

{% alert %}Command-line interfaces might be frightening at first, but they
are a very efficient way to interact with the computer and many
development tools, including all the tools we use in this course, are
built for use from command line interfaces.{% endalert %}

Different operating systems have different command line interfaces, and most
operating systems these days have several different kinds of command line
interfaces. In this course we will focus on the basic `cmd` command-line
interface for *Windows*, the default `zsh` for *Mac*, and `bash` for *Linux*.

### Opening a `cmd` Window in Windows

Probably the quickest way to open a `cmd` window in Windows is:

1.  Hold down the <kbd>Windows</kbd> key (The one with the windows logo
    between <kbd>ctrl</kbd> and <kbd>alt</kbd> on the left side of the keyboard).
2.  Without releasing the <kbd>Windows</kbd> key press the <kbd>R</kbd> key.
3.  Release both keys - that should open the "Run" window.
4.  Type `cmd` into the test line in the "Run" window and press
    <kbd>Enter</kbd>

Another way you can open a `cmd` window by clicking the "start"
button, selecting "**search**" and typing `cmd`. The "**Command
Prompt**" option should show up in the search results and you can click
on it to open the window.

[Howtogeek's guide on the windows command
prompt](https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/)
lists several other ways to open `cmd`. It also mentions how to run it with
administrative privileges, but you don't have to do that.

### Accessing `zsh` on Mac

To access the `zsh` command-line interface on Mac, you need to open a
"**Terminal**" window. [Apple's support pages provide a
guide](https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)
with instructions on how to do that.

### Accessing `bash` on Linux

(If you're a Linux user it's unlikely you've never used the shell
before, but we're including some basic instructions just in case).

Different Linux distributions can look and feel very different so it's
impossible to provide a single way that will work on all of them. We will focus
on distributions that provide a [Gnome 3](https://www.gnome.org/gnome-3/) -
based interface. Those include the modern versions of Ubuntu, Debian, Fedora
and CentOS.

To access `bash` from the Gnome 3 desktop interface, you can click
on the "**Activities**" button at the top left, type "terminal" into the
search box and click on the "Terminal" icon.

### Learning to Use the Command Line

If you've never used a command-line interface before, we recommend reading
[Djangogirls'
tutorial](https://tutorial.djangogirls.org/en/intro_to_command_line/). It
mentions several ways to access the command line on different operating systems
and teaches some basic commands.

## Task 5: Tell Git about yourself

When we create commits with Git, it includes information about who
created them automatically. To do that it needs to know our name and
email address. We tell it those details by opening a command-line window
and typing in commands like the following:

```shell
git config --global user.email "john.doe@example.com"
git config --global user.name "John Doe"
```
(Please fill-in you actual name and email address)

{% alert %}we add quotes to ensure special characters included in the name
and email address such as space and the "@" sign do not influence the
execution of the command. They are not included in the final details
seen by Git.{% endalert %}

## Task 6: Clone your Remote Repository

In order to work with the repository we've created in GitHub, we need to
create a local copy of it, or *clone* it in Git terminology.

The repository will reside in a directory on your computer, since you
may work on many different projects, we recommend keeping things
organised by server, account and repository names and to keep all the
source code repositories under a common "src" directory (`C:\src` on
Windows or `~/src` in your home directory on Mac and Linux, where `\~`
is a shortcut for our home directory).

For example, if we've called our project in GitHub `beyond-tutorial` and
our GitHub account name is `usr1`, in Windows we will store our
repository in:

```
C:\src\github.com\usr1\beyond-tutorial
```

On Linux or Mac we will store our repository in:

```
~/src/github.com/usr1/beyond-tutorial
```

Git will create the project directory for us when we clone it, but we
still need to create the directory above it.

To create the directory structure we describe above in windows we can
use the following command in cmd:

```powershell
C:
md \src
md \src\github.com
md \src\github.com\usr1
```

To create a similar structure in Linux/Mac we can use the following
command:

```
mkdir -p ~/src/github.com/usr1
```

We now need to go into the directory we've just created using the `cd`
command, on Windows we type:

```powershell
cd \src\github.com\usr1
```

On Linux/Mac:

```shell
cd ~/src/github.com/usr1
```

Now we can clone our Git repository. To do this we will go into the main
page of our repository in GitHub, click on the green "Code" button on
the top-right, make sure "HTTPS" is selected and copy the URL shown to
us. We can use the convenient clipboard icon shown to the right on the
link.

Please do not try to use SSH or the GitHub CLI for now unless you know
what you are doing.

One we've copied the URL, we paste it as a parameter to a `git clone`
command (In Windows, to paste in the "cmd" window, you right-click on
it). For example, if our account name is `usr1` we will run the
following command:

```shell
git clone https://github.com/usr1/beyond-tutorial.git
```

Git will begin the process of cloning our repository. The output of the
process should look like the following:

```
Cloning into 'beyond-tutorial'...
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
```

When it's done we can look at the contents of the current directory by
using the `dir` command in Windows or the `ls -l` command in Linux/Mac, and
see a new `beyond-tutorial` directory was created. We should now go into
the new directory with the following command (Same on all operating
systems):

```shell
cd beyond-tutorial
```

{% alert %}To avoid having to type long directory names, you can type the first
few letters of the name and then hit the <kbd>tab</kbd> key.{% endalert %}

If we want to look the contents of the directory we just went into,
using the `dir` command in Windows or the `ls -l` command in Linux/Mac, we
will see the files from our repository like so (This example is from
Windows):

```
10/12/2020 01:01 PM <DIR> .
10/12/2020 01:01 PM <DIR> ..
10/12/2020 01:01 PM 1,928 .gitignore
10/12/2020 01:01 PM 1,090 LICENSE
10/12/2020 01:01 PM 76 README.md
3 File(s) 3,094 bytes
2 Dir(s) 451,720,884,224 bytes free
```

{% alert %}The `.gitignore` file will not be shown by default on Linux/Mac
because files which start with a dot are considered to be hidden. We can
see the file if we add the `-a` option to `ls`, but then we will also see
the hidden `.git` directory where Git stores the extra information about
commit, branches and other things. To see the hidden directory on
Windows we can add the `/a` option to `dir`.{% endalert %}

## Task 7: Editing, Comitting and Pushing

Git and GitHub are flexible tools and there are many ways in which they
could be used. In this course we try to teach a process where each code
change can get reviewed by team members, automatically checked by a CI
system and possibly be rejected. In this process:

-   There is one "main" version of the code that is the version that all
    the team members agreed on.
-   That "main" version is stored in the `main` branch in our repository
    in GitHub (In the past it used to be called the `master` branch, and
    you will find many repositories that still include such a branch)
-   When we make code changes, we don't push them directly into `main`.
    Instead, we create a "pull request" (PR) that contains the changes.
-   The other team members can use the GitHub UI to review the PR, add
    comments and request changes or approve it.
-   We can update the PR in various ways to adapt it according to the
    comments from the other team members.
-   When everybody is happy with the PR and approves it, we use the
    "merge" button in the GitHub UI to merge the change into `main`.
-   We can decide not to merge the PR at all and simply "close" it.

As changes from other developers can be merged into the `main` branch on
GitHub, it is a good idea to make sure that our local copy of it is
up-to-date. Otherwise changes that we make may be incompatible with the
most recent code.

### Updating the `main` Branch

To make sure our local `main` branch is in sync with the remote one, we
must first go into it by running the following command:

```shell
git checkout main
```

{% alert %}
-   If we're already in the `main` branch this command will simply tell us
    so and do nothing
-   If we made any changes to local files in the repository without
    committing them, this command might fail and display an error
    message
{% endalert %}

To fetch changes from the remote GitHub repository, we run the following
command:

```shell
git pull --ff-only
```

The `--ff-only` option is a precaution, if we made any changes to our
local `main` branch that are different then the changes that were made
on GitHub, Git will, by default try to merge all the changes together
locally. This is probably not what we want, so `--ff-only` tells Git to
avoid trying to merge and instead print an error message.

### Creating a feature branch

Generally we should avoid making any changes to the local `main` branch
so it's easy to sync it with the remote branch.

The next thing we're going to do is create a new Git branch so we can
use it to store the changes we're going to make separately from the
`main` branch. Such a branch is sometimes called a "feature branch"
since we use it to work on a new feature for our software. The name we
give to a feature branch is not very important, but it's good to give
it a descriptive name, especially if we work on multiple features in
parallel.

When we're on the `main` branch we can run the following command to
create a new branch called `update-readme`:

```shell
git checkout -b update-readme
```

The command above both creates the branch and goes into it (In Git
terminology to "go into" a branch is to "check it out"). If we just want
to go into a branch that already exists we can run the command above
without the `-b` option.

We can use the git branch command to inspect the branches we have in our
local repository. It will yield the following output:

```
main
* update-readme
```

We can see that we have both the `main` branch as well as the new branch
we've just created `update-readme`. The branch we've just created is
marked with an asterisk to indicate that it is the branch we're
currently working on.

The branch we created is initially identical to our `main` branch, but
it will diverge from it as we make and commit changes.

### Making Changes to the README.md file

We're going to add some contents to our `README.md` file which is
displayed on our project's main page in GitHub. The `README.md` file is
written in a simple markup language called MarkDown. The idea of
MarkDown is that for the most part MarkDown files can look very well
when viewed as plain-text files in a text editor, but they can also look
very well in rich text environment such as websites and include
graphical elements such as titles with large fonts, tables and links.

The basic documentation about the MarkDown language can be found [on the
Markdown project page](https://daringfireball.net/projects/markdown/syntax).
When GitHub displays MarkDown it supports some extensions over the basic
MarkDown specification, and those are documented [in the
GitHub-Flavored-Markdown specification](https://github.github.com/gfm/).

Use your favorite text editor to open the `README.md` file and change it
to look like the following:

```md
# beyond-tutorial

A basic tutorial for the tools used in the Beyond course.

This tutorial includes instructions about how to use the following
tools:

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Vagrant](https://www.vagrantup.com/)
* [PipEnv](https://github.com/pypa/pipenv)
* [Django](https://www.djangoproject.com/)
```

## Staging Changes for a Commit

Once you did your changes and saved them, you need to tell Git about
them so it creates a commit that contains them.

The first thing to do is to check that Git detected the changes we've
made using the `git status` command. We will get the following output:

```
On branch update-readme
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working
  directory)
        modified: README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Git tells us that it sees that `README.md` was changed, but that this
change was not *staged* to be committed.

Git's *staging area* exists in order to allow us to control which
changes we include in a commit. We can change many files, but only those
that we add to the staging area will be included in the commit we
create. There are even ways to make it so only certain changes in a
given file but not others are included.

Git can also show us what are the exact changes it sees when we run the
`git diff` command. In this case we will see several lines shown in green
which means Git detects that they were added. It is generally a good
idea to run `git diff` and check the changes we've made to ensure we're
not going to commit any changes we do not intend to.

To add the changes we've made to the Git staging area, we run the
following command:

```shell
git add README.md
```

Now when we run the `git status` command we will see the following:

```
On branch update-readme
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified: README.md
```

Git now tells us that the changes to `README.md` are ready to be
committed.

We can see exactly which changes were staged by using the `git diff
--staged` command.

### Creating a Commit

Now it's the time to finally create the Git commit we've been talking
about. The command to do it is:

```shell
git commit
```

When we run the command Git will automatically open our text editor with
a temporary file that includes some basic instructions about creating a
commit message. We need to type our commit message into this file, save
it and exit the editor window.

When typing in commit messages, we should generally follow the following
rules:

-   The first line is the title of the message, it should be no longer
    than 63 characters.
-   The second line should be left empty
-   The remaining consist of the body of the message, they should be no
    longer than 72 characters each. We can include some MarkDown here
    and it will be displayed by GitHub.

Here is an example of the full commit message file we can write for the
commit we're creating:

```git
Adding information to the README.md file

Adding information about the types of tools used in developing this
tutorial application.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch update-readme
# Changes to be committed:
# modified: README.md
#
```

Once we exit the editor Git will print some brief information about the
commit we've just created:

```
[update-readme a9346cd] Adding information to the README.md file
 1 file changed, 9 insertions(+), 1 deletion(-)
```

We can now use the `git show` command to inspect the commit we just
created. It will show the commit message and all the changes that were
included. It can show quite a bit of text. We can use the arrow keys and
the <kbd>Page Up</kbd> and <kbd>Page Down</kbd> keys to scroll through it, and <kbd>Esc</kbd> or
<kbd>q</kbd> to leave the text display and get back to the command line.

### Inspecting the Commit History

We're going to send our new commit for review in GitHub, before we do
that, it is a good idea to inspect the commit history in our local
repository and check which commits are going to be sent. We generally do
not want our PR to include any commits that do not belong in it as that
will make the job of the people reviewing it harder.

The following command shows some brief information about the commits we
have in our repository:

```shell
git log -20 --oneline --decorate
```

The output of the command looks like the following:

```
a9346cd (HEAD -> update-readme) Adding information to the README.md
file
8c29a2c (origin/main, origin/HEAD, main) Initial commit
```

This command shows the 20 last commits in the branch we're on (`-20`)
while showing one text line per commit (`--oneline`), and adding
information about branches and tags (`--decorate`).

In this log we can see:

-   The commit we've just created (On the first line)
-   The fact that this commit is the top commit in the `update-readme`
    branch
-   The first commit in the repository that GitHub created for us (Its
    shown on the 2nd line)
-   The fact that the first commit is the top commit of the `main`
    branch as well as the `main` branch in the GitHub repo (It is called
    `origin` here because that is the default name that Git assigns to
    the repository we initially clone from).
-   The fact that we're currently working on the `update-readme` branch,
    this is shown by the fact that the `HEAD` pointer points to it.

{% alert %}Any information that is shown about the `origin` repository or any
other remote repository (We can configure more of them), is correct to
the last time we've run a `git fetch` or a `git pull` command.{% endalert %}

When we push our branch and create a PR, all the commits we see between
the top commit of the `origin/main` branch, and the to commit of the
branch we're pushing will be included in the PR.

### Pushing our Branch to GitHub and Creating a PR

It's finally time to push (upload) the changes we've made to GitHub. We
will push the branch is a way that causes a similarly named branch to be
created in the GitHub repository.

The command for pushing the branch is:

```shell
git push origin update-readme:update-readme
```

The parameters for this command include:

1.  The remote repository we're pushing into - here its `origin`, which as
    we've said before, it's how Git calls the repository we initially
    cloned from.
2.  The name of the local branch we're pushing, given in the first part
    of the second command parameter, before the `:`.
3.  The name of the remote branch we're pushing into, here we gave it
    the same name as the local branch.

Once we've run the command Git will ask us for the username and password
to login to GitHub. The way it does that is a bit different for
different operating systems. On windows it shows a graphical GitHub
login window.

If all goes well, the output of the push command looks like the
following:

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 519 bytes \| 519.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'update-readme' on GitHub by visiting:
remote:      https://github.com/ifireball/beyond-tutorial/pull/new/update-readme
remote:
To https://github.com/ifireball/beyond-tutorial.git
 * [new branch] update-readme -> update-readme
```

We can see here that one of the useful things that GitHub does for us is
make the Git command print out the link we can use directly to create a
PR.

When we copy this link and paste it into the URL line in a browser, it
will take us to the "Open a pull request" page. That lets us fill-in the
title and the description of the PR.

It's important to spend some time on the PR title and description and
make sure they properly describe what our PR includes and why. The
better we make those, the easier the job of the reviewers becomes. Many
reviewers will reject PRs where the title and message are not clear
enough or where they see code changes that were not mentioned in the
title or in the description.

If the branch we've pushed only includes a single commit, GitHub will
automatically populate the PR title and description for us from the
commit message.

We can scroll down the "Open a pull request" page to see all the details
about the commits and changes that are included in the PR. It's a good
idea to go over it and make sure the PR will include only things we want
it to include.

Once we're done, we can click the "Create pull request" button to create
the PR.

## Task 8: Reviewing and Merging PRs

We're currently working as sole developers on our own project, so there
is no much point in doing PR reviews for PRs we've created on our own,
but it's still a good idea to take the time and get to know the PR
review process.

Creating a PR takes us directly to the review page of the new PR we've
just created. We typically review other people's PRs, so we can find
those by clicking the "Pull requests" link that appears at the top of
our repository pages in GitHub.

On the right column of the PR review screen we can see the reviewers
section. When we add reviewers, they get an Email notification about our
PR. We should generally do that for every PR we create.

Another thing we can see on the right column is the "Labels" section.
Labels are typically used to mark some relevant information about the PR
like whether it is ready to be reviewed, whether the code in it was
tested or if it should not be merged for some reason. Different
repositories may define and use different labeling schemes according to
the development process around the repository.

When we review a PR we should generally follow the following process:

1.  Read the PR title and the description:
    -   Do they properly describe changes included in the PR?
    -   Do they allow us to understand the reasons behind making the changes
        that were included in the PR?
    -   Can we understand where the PR fits in the larger scheme of our project
        development?
    -   Does the PR deal with a whole but singular thing? PRs should generally
        include a set of tightly-related changes. Things that are not directly
        related to one another should generally be done in separate PRs.

2.  Click on the "Commits" link at the top of the PR page and look at
    the commits included in it. Many PRs may include only a single
    commit, but some bigger PRs might include multiple commits to make
    it easier to understand the code included in them. When reviewing
    ask yourself:
    -   Is the amount of commits appropriate for the scale of change included
        in the PR?
    -   Do the commits describe a set of clear and concrete steps to achieve
        the changes that were included in the PR?
    -   Are there any "junk commits" that include changes that are later rolled
        back or re-done differently? PR authors should generally remove such
        commits before sending the PRs.

3.  Review the code changes that are included in the PR. You can either
    view all the changes included in the PR together by clicking on the
    "Files changed" link or view the changes of each commit individually
    by clicking on the commit itself. Ask yourself:
    -   Does the code change belong in this PR?
    -   Do the code changes do what the PR description and commit messages say
        they do?
    -   Is the code well-written? Is it easy to understand?
    -   Is there sufficient documentation for the changes being introduced?
    -   Was there sufficient testing done to the changes being introduced?

If you have any comments about the code you can click the relevant lines
of code to add them. It is advisable to use the "Start a review" and
"Add review comments" to group related comments together in a single
review.

When you're done adding your comments on the code, you can click the
"Finish your review" button at the top-left. In the pop-up window you
can also add a general comment about the whole PR and select whether
you're approving the PR to be merged, requesting it to be changed or
simply making general suggestions and comments.

When enough reviewers have approved a PR it can be merged. How many is
enough depends on our project policy. It is common for projects to
require at least two approvals. In the first few weeks of this course it
is highly advisable to wait for approval from experienced Red Hatters.
To merge the PR one simply needs to click the "Merge pull request"
button on the bottom of the "Conversation" page.

By default, merging a PR creates what is called a "merge commit" in Git.
When we click the "Merge pull request" button, GitHub lets us put in
some details about this commit. The defaults it suggests are usually
good enough. We need to finish the merge process by clicking the
"Confirm merge" button.

Once we're done merging the PR, GitHub provides us a button to delete
the branch we made it from. It is generally advisable to click it to
keep the amount of branches we have in our repo low. Clicking this
button only deletes the from the GitHub repo, we still retain a copy in
our local repository.

### Task 9: Updating our local repository (Again)

Merging a PR in GitHub adds changes to the `main` branch stored there.
We need to update our local copy with those changes. This could be done
with the following commands:

```shell
git checkout main
git pull --ff-only
```

We can review the commits we now have with the following command:

```shell
git log -20 --oneline --decorate
```

Tip: We can re-run commands we ran before in the command-line by looking for
them using the <kbd>up</kbd> and <kbd>down</kbd> arrow keys. That can save us
quite a bit of typing.

The output of the `git log` command should look like the following:

```
52a941a (HEAD -> main, origin/main, origin/HEAD) Merge pull request #1
from usr1/update-readme
a9346cd (origin/update-readme, update-readme) Adding information to the
README.md file
8c29a2c Initial commit
```

We can see here:
-   The new merge commit that GitHub created
-   The fact that it is now the top commit for both the local and the
    remote `main` branches

Keen eyed observers will notice that:

-   We still have a local `update-readme` branch that points to the
    commit we've created
-   Git also thinks we have a remote `update-readme` branch even though
    we told GitHub to delete it (And it did).

To make Git update what it knows about remote branches that were deleted
we can run the following command:

```shell
git remote prune origin
```

We can also delete the local branch we no longer need with the following
command:

```shell
git branch -d update-readme
```

If we now look at the output of `git log -20 --oneline --decorate` it
will be much cleaner:

```
52a941a (HEAD -> main, origin/main, origin/HEAD) Merge pull request #1
from usr1/update-readme
a9346cd (origin/update-readme, update-readme) Adding information to the
README.md file
8c29a2c Initial commit
```

[Next: Creating a Linux Development Environment with Vagrant and VirtualBox](../part-2/)
