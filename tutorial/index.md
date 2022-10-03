---
layout: layouts/base.html
title: Tutorial
dueDate: Friday, February 18, at 12:00
eleventyNavigation:
  key: Tutorial
  order: 2
---

# Introduction

The purpose of this challenge is to provide a hands-on introduction to all the
basic technical development tools that would be required for developing a
project for the “Beyond OS” course.

This challenge must be performed in its entirety before the 2nd session of the
course. More specifically it must be submitted by <time>{{ dueDate }}</time>.

An online form for submitting the challenge results can be found
[here](https://red.ht/3GjG2sl).

In this challenge you will learn:

1. How to set up a personal code repository in [GitHub](https://github.com/)
   and use [Git](https://git-scm.com/) to track source files in it.
2. How to use feature branches in Git and push them as <dfn
   id="prs">pull-requests (<abbr>PR</abbr>s)</dfn> to GitHub for code review.
3. How to use [Vagrant](https://www.vagrantup.com/) and
   [VirtualBox](https://www.virtualbox.org/) to set up a Linux-based
   development environment.
4. How to use [Pipenv](https://pipenv.pypa.io/en/latest/) to manage
   requirements for a Python and Django application.
5. How to bootstrap a [Django](https://www.djangoproject.com/) application.
6. How to use GitHub Actions to add basic [<abbr title="continuous
   integration">CI</abbr>](https://en.wikipedia.org/wiki/Continuous_integration)
   checking to a repository.
7. How to create basic application features in Django

## General notes and guidelines:
* Though programming skills will be required during the course, this challenge
  does not require prior knowledge of development tools and languages. Students
  do need to know how to edit source code files that reside on their computers.
* While this document contains links to external resources, you generally
  should not need to refer to them to complete it, except in some cases where
  you are referred directly to some installation instructions.
* While it is not necessary to reference external resources, you are still
  encouraged to review them to gain a deeper understanding of the tools being
  used. That should be done while taking time constraints into account.
* If you get stuck at any point, **you are encouraged to seek help** by using the
  Beyond slack channel
* When submitting the results of your work we expect the repository to be in
  fully working condition. More specifically we expect the `vagrant up` command
  to work and load a working application.
* We also expect you to use well-documented *commits* and *pull requests* to edit
  the files in your GitHub repository as explained in this document, we may
  review the repository to check for that.

[Next: Git and GitHub](./part-1/)
