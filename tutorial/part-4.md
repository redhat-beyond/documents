---
layout: layouts/base.html
title: Adding Some CI
eleventyNavigation:
  key: Adding Some CI
  parent: Tutorial
  order: 4
---
# Part 4: Adding Some CI

The essence of <abbr title="continuous integration">CI</abbr> is providing
rapid feedback to developers about the quality of the code they write so they
can find and resolve issues quickly.

We’re going to be adding some Python code to our repository, so we’d like to at
least be able to verify that the code we add conforms to proper Python syntax
and coding standards. To do this we will use the `Flake8` tool and set things
up so that it scans our code automatically as we send PRs and provides feedback
on the PR review screen.

## Task 1: Install Flake8

We can install Flake8 via Pipenv, just like any other tool (The following
command should be run from inside the `/vagrant` directory on our Vagrant VM):

```shell
pipenv install --dev flake8
```

We add the `--dev` option to tell Pipenv that Flake8 is a development
environment dependency. That way we can avoid having it installed in production
environments. {% rhalert %}This will add `flake8` to the `dev_packages` section of
the `Pipfile`, which is called when using `pipenv sync --dev` (see example
below{% endrhalert %}.

## Task 2: Inspect our code with Flake8

Let's do a preliminary inspection of our code, this could be done with the
following command:

```shell
pipenv run flake8
```

The command will output several error messages like the following:

```
./beyond_tutorial/settings.py:89:80: E501 line too long (91 > 79 characters)
```

This error message indicates that Flake8 found some lines of code that are
longer than the 80 character limit it enforces by default. We can add a
parameter to tell it to expect longer lines:

```shell
pipenv run flake8 --max-line-length 120
```

This time Flake8 would return no output. That is its way of indicating all the
code passes its checks.

## Task 3: Add GitHub actions configuration

We set up GitHub actions to run `flake8` on the code as we submit new PRs. The
GitHub actions configuration files reside in the `.github/workflows` directory,
so we must first create it:

```shell
mkdir -p .github/workflows
```

Please note that the directory needs to be created inside our code repository
so use `cd` to go to where it's located if you’re not already there.

We can now create a file called `.github/workflows/flake8.yml` and place the
following code in it:

```yml
name: Flake8
on: pull_request
jobs:
  flake8:
    name: Check code with Flake8
    runs-on: ubuntu-20.04
    container: fedora:34
    steps:
    - name: Install Pipenv and Git
      run: dnf install -y pipenv git
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Setup environment
      run: pipenv sync --dev
    - name: Run Flake8
      run: pipenv run flake8 --max-line-length 120
```

We use a Fedora 32 container to get a running environment that is similar to
what we've set up in Vagrant. GitHub actions make it very easy to use
containers by requiring just a single YAML line to activate them.

{% rhalert %}<abbr title="yet another markup language">YAML</abbr> is an *indentation sensitive* language. Indentation is used to
specify which configuration elements are contained within other elements. When
you create the YAML file for your project, make sure you indent the lines in
exactly the same way as they appear above. Alse be careful about having your
text editor automatically introduce tab characters into the file. Most text
editors have various configuration options that deal with their behaviour with
regards to tab characters.{% endrhalert %}

## Task 4: Commit the files and send a PR

We’ll stage the files we’ve modified, commit them, push a branch and send a PR.
Make sure you add all the files we’ve modified to the commit including `Pipfile`,
`Pipfile.lock` and the new `flake8.yml` file.

As soon as you create the PR, you should be able to scroll down and see the new
action running in the “checks” section. You will be able to click on “details”
and see the various action steps run and produce output.

When the check finishes successfully, merge the PR. Merging it will make the
test run on all PRs sent from now on.

## Task 5: Using the CI to Protect the main Branch

The main branch is our formal source of our project, and we must protect it.
github allows us to protect branches by adding a set of rules. In your
beyond-tutorial github project, go to “settings” and select “branches”, then
click the “add rule” button:

![Screenshot of GitHub's Branch Protection Rules Settings][img-rules]

Type `main` in the “Branch name pattern” field. You can select and configure
rules for the main branch. You can read about these rules to learn more, but
for now, just select “Require status checks to pass before merging”. In the
search field that now appears, write the name of our CI test from the yaml
file: “Check code with Flake8”, and select the same name from the dropdown.

![Screenshot of Rules with Flake8 check required][img-rules-flake8]

It should now look like this:

![Screenshot of Rules with checks required when merging][img-rules-required]

Click the “Create” button at the bottom of this page to create the rule

![Screenshot of Rules create button][img-rules-create]

Now, the CI action not only runs, but it is a gate for merging PRs into the
main branch. We can add more checks if we want. For example: run unit tests and
require them to pass before merging the PR.

## Task 6: Send bad code to test CI functionality

The purpose of CI is to fail when issues exist in the code. We must ensure our
CI action can fail by sending some illegal code.

Before making any of the changes below, please ensure you’re merged the CI code
we created before and updated your local “main” branch. This is to ensure the
next changes we’ll send will include the updated CI configuration.

Now lets create a bad.py file with the following content:

```python
<<<This file is not a legal Python file>>>
```

```
./bad.py:1:1: E999 SyntaxError: invalid syntax
./bad.py:1:3: E225 missing whitespace around operator
./bad.py:1:40: E227 missing whitespace around bitwise or shift operator
```

Despite the errors, let’s commit the file into a feature branch with Git, push
it and create a PR.

Our new CI action should start running on the new PR, take a little while to do
its work, and finally indicate a failure.

Since we added the branch rule in Task 5, our PR is failing, and we can’t merge
the PR until we’ll fix it:

![Screenshot of Checks in a PR][img-rules-pr]

Once you see the failure as expected, you can close the PR, since we have no
intention to merge it.

[Next: Adding Features](../part-5/)

[img-rules]: ../images/branch-protection-rules.png
[img-rules-flake8]: ../images/branch-protection-rules-flake8.png
[img-rules-required]: ../images/branch-protection-rules-required.png
[img-rules-create]: ../images/branch-protection-rules-create.png
[img-rules-pr]: ../images/branch-protection-rules-pr.png

