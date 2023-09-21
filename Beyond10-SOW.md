# Red Hat Beyond 10

Statement of Work (SOW)

## Pre-requirements

You will be working on a project during this course.

The following tech stack will be used.

If you don't have knowledge/experience in any of them, it is worthwhile to look
them up. The more you know the easier it will be.

* Linux OS - able to use basic command line tools such as cd, ls, cat, grep,
  less, vi, ...
* Python - if/else, for loops, functions, classes
* Django - create a basic or sample project
* Git and GitHub - create a repo, commit, push, pull requests (PR), merge
* HTML/CSS (Bootstrap) - design a basic web page from scratch, including using
  CSS classes for basic formatting
* Testing- unit tests and functional tests with pytest
* Virtualization - Spin up a VM using Vagrant and VirtualBox
* Databases - Basic familiarity with database concepts
* Data modeling
    * ERD - Entity Relationships Diagrams
    * DFD - Data Flow Diagram

### System Requirements (student workstations)

* Computer
* 8 GB RAM
* OS - Windows, OSX, Linux
* Language - English (Username should be in English)
* Installations:

    * [Git](https://git-scm.com/downloads)
    * [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
    * [Vagrant](https://www.vagrantup.com/downloads.html)

## Milestones

### Division into project groups (untill November 5th)

After the first 2 weeks of the course, you'll be divided into teams - each team
with 4-6 students.

Each team will have the following mentors:

* Team 1: Yftach Herzog, Nimer Naamneh, Daniel Keler, Or Hochman, Paz Menachem (Student)
* Team 2: Avi Biton, Omri Bar Haim, Victor Voronokov,, Orel Misan, Shalev Roimi (Student)
* Team 3: Shay Vatarescu, Elyasaf Halle, Kasem Alem, Michael Menasherov
* Team 4: N/A ATM

### Demo 1 (November 12th): Project selection and setting up a DEV environment

Main project goal: 
As a developer I would like to contribute/collaborate within a distributed
development team. To achieve the goal, the team sets up shared working
environment and practice shared work processes.
Mentors will advise how to prepare for the demo.

__Note:__  The process is as important as the final project products.

As part of the preparation for this demo you should establish a new **public**
channel in the Beyond Slack workspace to communicate among the team members and
with its mentors, get to know your teammates and your mentors and come up with
the basic idea and name for your project.

**Technical requirements**

Your project should include the following elements. All changes must be merged
into the `main` branch to be considered ready:

1. A working Vagrant environment that brings up the default Django webserver
2. A basic Django application that includes a static web page showing the 
   name of your project and a short description about it
3. A GitHub repo in the Beyond organization with:
    1. A `README.md` file that introduces your project
    2. An MIT license file
    3. The contribution guide in a `CONTRIBUTING.md` file
    4. The code, as defined by other sections on this list
    
    (See below for detailed instructions about the contents of the 
   documentation files)
5. A basic GitHub workflow that executes Flake8 tests on files when there is a
   PR

Note that all these topics have been covered by the introduction exercise you
have been given.

**Work division**

Ensure that every member of your team plays an active role in preparing for
the demo, we recommend that you divide the work between you in the following way:

1. Student1: vagrant
2. Student2: setup.sh
3. Student3: Django
4. Student4: Web page
5. Student5: Documentation files + flake8

__Note:__  Team information sharing is recommended, it will enable each
 teammate to maintain all the above aspects.

**General guidelines**

1. Invest time in planning the work. Understand the order of tasks that need to
   be done and the dependencies between the various tasks
2. Ask your mentor(s) to create the main project repository for you in the
   Beyond organization.
3. Create GitHub issues to track the work your team needs to do and assign them
   to the students who will do them
4. You can subdivide the tasks above into smaller issues as needed, as long as
   you document what you plan clearly
5. Use PRs to make code changes to your project, link them to the relevant
   issues
6. Make sure you assign your teammates as well as your mentors as reviewers for
   your PRs
7. The review process can take a few days - make sure you send your PRs early
   enough, so they will be merged in time for the demo
8. You will be given a template for each demo with the specific details that are
   required
9. Designate a primary speaker for your team. Other members are encouraged to
   speak as well, but if so, plan who talks on what so you can all finish within
   the allotted time (15m).
10. It is recommended to pre-record technical demos to prevent technical issues
    from disturbing your demo
11. Please make sure all your teammates can successfully use Git to clone the
    team project and Vagrant to bring up the development environment on their
    machines.

**Demo content:**

1. Team members introduction short academic & personal bio
2. Project name, idea, goals and planned work division mapped to team members
3. Present project landing page
4. Work agreements
    * Contributing doc.
    * Meetings routines and participants list. 
    * Communications channels with teammates and mentors.


### Demo 2 (December 3rd): Data model and business logic

Demo goal is to show your application's data model and data manipulation logic.

Technical requirements

1. Each feature you're planning to add to your project should include:

    1. Data model classes
    2. Migration files for initializing the data model
    3. Migration files for creating test data for your DEV environment
    4. Data model functions and model manager classes for the more complex data 
       operations you expect to do in your applications
    5. Tests for the data model functions and classes

2. Your bootstrap script should run the data migrations when your Vagrant VM
   starts up
3. You should have a CI job (GitHub Workflows) in GitHub that runs your tests
4. In your presentation you should:
    1. Present all design aspects of the features you're working on
       including [ERDs](https://www.lucidchart.com/pages/how-to-draw-ERD)
       and [DFDs](https://www.lucidchart.com/pages/data-flow-diagram) (data
       design and flow documents).
    2. Show your data model via the Django admin UI
    3. Present your data manipulation functions via the Django shell
    4. Show your test code and explain what you've tested
5. Please try to avoid displaying complex code or complex drawings in your
   presentation, or repeating the same ideas in different forms. Your challenge
   is to explain the complex ideas you have about your app, how it should work
   and how it should be used in a simple way that would be understandable to
   your audience.

**Work division**

It is recommended to divide the work among teammates in a "vertical" way - this
means that each teammate will have one or more project features assigned to
them, and they will be responsible for implementing all aspects of said
features including the data model, the tests, the control logic and the UI.  A
technical way to achieve this in Django, is to have each team member create and
maintain one or more separate Django "apps". 

Working as recommended will provide several benefits:

1. It will allow each team member to experience all the layers of the technical
   stack
2. It can reduce the amount of Git conflicts you may encounter as you work on
   your projects because different features can live in different files.

### Performance Review (between December 4th to December 7th):

The team's mentors will set up a personal 10-minute meeting with each of the
students in their team and give them feedback about their performance in the
course so far: What did they do well and where should they improve. As a
student you should take the time to think about how you perceive your own
performance, how is that different from how the mentors see it and why. Take
the opportunity to learn how to improve!

### Demo 3 (December 24th): Control logic and UI

Demo goal is to review your ability to implement the application workflow and
UI logic and implement automated tests for it.

**Technical Requirements**

1. Complete the implementation of one or more features of your application,
   including UI and backend logic. The features you implement should allow you
   to demonstrate your ability to:

    1. Query data from your database and present it to your users
    2. Use forms to gather user input
    3. Store or modify information in the database as a response to user input

2. Implement automated tests for the features you've completed. The tests 
   should cover all aspects of the feature's functionality including failure 
   scenarios, handling of invalid data and unauthorized access scenarios. 

**Demo content**

Your demo presentation should include the following elements:

1. One or more video segments showing how the features you've implemented look
   and work from a user's point of view.
2. An explanation of how you've tested the features you've developed. You should
   include the following details:

    1. Which manual tests were carried out (If any). How does one decide if a 
       test was successful?
    2. Which automated tests were written
    3. Are failure scenarios being tested? In which way?
    4. What aspects of the features you've written are not being tested?
3. A demonstration of the application tests being run in GitHub actions.

### Demo 4 (January 21st): Final Project Demo

The purpose of this demo is to present your entire development process and 
should include:

1. Project background - Explain in general the motivation and the requirements.
2. Technical ideas and architecture - Explain test high-level technical 
   ideas behind your project, please try to present concepts graphically, 
   possibly by using ERD and DFD charts.
4. Demo - A video that presents your full system (UI, DB, APIs, CI)
5. Development process - share the process you made
6. Development challenges
7. What did you learn

## Project ideas

You can consider below ideas or think of your own.

* Dating website
* Drop shipping web store - selling other people's products on your website
* Personal password maintenance application
* Course certificate generation and distribution platform
* An online riddle or math game

Please avoid the following ideas as they have already been implemented too many
times in the past by Beyond students:

* Platform for finding part-time jobs for students.
* Platform for academic courses and grading.
* Platform for finding/recruiting jobs/employees.
* Platform for finding roommates or apartments.
* Platform for freelancers to offer their services.
* P2P Lending service

__Note:__ The project should be used as a learning platform, it should not be
unique or amazing. This could defeat learning process and goals.

## Syllabus (list of sessions)

| #    | Date                | Topic(s)                           | Lecturer        | Location        |
|------|---------------------|------------------------------------|-----------------|-----------------|
|-     |Sun, Oct 15, 2023    |First challenge hand-off and student selection (30m pre-course session)|Shay Vatarescu|Online/Remote|
|1     |Sun, Oct 22, 2023    |General introduction                |Shay Vatarescu   |Tel Hai College  |
|      |                     |Architecture overview               |Avi Biton        |                 |
|**-** |**Fri, Oct 27, 2023**|**First challenge submission date** |**_(Self work)_**|-                |
|2     |Sun, Oct 29, 2023    |Advanced Python                     |Yftach Herzog    |Online/Remote    |
|      |                     |Second challenge hand-off           |                 |                 |
|**-** |**Fri, Nov 03, 2023**|**Second challenge submission date**|**_(Self work)_**|-                |
|3     |Sun, Nov 05, 2023    |Databases, data model and the ORM   |Omer Amsalem     |Online/Remote    |
|      |                     |Project teams announcement          |                 |                 |
|**4** |**Sun, Nov 12, 2023**|**Demo 1: Development environment** |Shay Vatarescu   |Online/Remote    |
|5     |Sun, Nov 19, 2023    |Business logic and Testing          |Eddy Haas        |Online/Remote    |
|6     |Sun, Nov 26, 2023    |UI: Routes, Views and Templates     |                 |Online/Remote    |
|**7** |**Sun, Dec 03, 2023**|**Demo 2: Data Model and business logic**|**TBD**|**Online/Remote**|
|-     |**Dev 04 - Dec 07**  |**Performance review week**         |**-**            |**-**            |
|-     |Sun, Dec 10, 2023    |      _(No session - Hanukah)_      |-                |-                |
|8     |Sun, Dec 17, 2023    |Frontend (FE), Intro: FE tecnologies|Benny Powers     |Online/Remote    |
|**9** |**Sun, Dec 24, 2023**|**Demo 3: UI and user workflow**    |**TBD**|**Online/Remote**|
|10    |Sun, Dec 31, 2023    |Going to production                 |Benny Rochwerger |Online/Remote    |
|-     |Sun, Jan 07, 2024    |                 TBD                |-                |Online/Remote    |
|11    |Sun, Jan 14, 2024    |AMA - Ask Me Anything, Being a software engineer in the industry|_(all mentors)_|RH office|
|**12**|**Sun, Jua 21, 2024**|**Final Demo**                      |**Avi Biton** |**Margalit/Tel-Hai**|

## Final Grade

The grades are assigned to each student based on the following factors:

* **Engagement**
  * How engaged is the student throughout the course
  * Do they participate in the lessons and demos
  * Are they active on the Slack channels and on GitHub
  * "Does the Red Hat team know who you are?"
* **Collaboration**
  * Does the student collaborate meaningfully with their teammates and 
    mentors via the various monitored communication channels
  * Does the student create PRs that are easy to understand and review
  * Does the student participate meaningfully in the PR review process
* **Execution**
  * Are tasks done on time
  * Is work being tracked and allocated effectively within the team
  * Does the code meet the quality requirements defined by the mentors
  
The grade is made both of objective measures, obtained by monitoring GitHub and
Slack, and well as subjective elements, bonus scores, decided and agreed upon by 
 the mentors team, subjective elements could not affect negative scores.

## Guidelines for creating good PRs

* The aim, focus and completeness - A good PR does one thing, does it well and is
  self-contained - single responsibility principle. It does not break existing
  functionality.
* Description quality - a PR description should explain what it changes, and 
  why. It should also link to a relevant ticket that contains the user story 
  that the PR implements.

    1. If it's a frontend change it should contain also screenshots

* Commit quality - each commit in a PR:

    1. Contains a mostly self-contained code change
    2. Has a good commit message that meets
       the [commit message guidelines](https://chris.beams.io/posts/git-commit)
       and explains the change the commit introduces.
    3. Helps towards understanding the PR as a whole

* Overall Size

    1. A PR should not generally change more than 100-300 lines of code
    2. A PR can grow up to 600 lines if more than 50% of the change is comments,
       documentation or tests

* Code quality - The code in the PR should:

    1. Meet the project's coding guidelines (See more about coding guidelines in
       the "Project documentation" section below)
    2. Be easy to read and understand
    3. [Have relevant comments](https://itnext.io/what-makes-a-good-code-comment-5267debd2c24)

* Discussion and review

    1. A PR must be reviewed and approved by other team members
    2. We expect to see discussion that indicates the team members understand
       what is the PR supposed to do

### Really bad PRs (Make people unable or unwilling to review them)

* PRs without meaningful functionality such as PRs that just fix typos or move
  files (Those are sometimes necessary - but you should clearly indicate them as
  such in the PR description, and never mix new functionality or bug fixes into
  such PRs)
* PRs that break your CI
* Huge PRs with thousands of changed lines
* PRs that mix unrelated pieces of functionality
* PRs that mix refactoring and new features or bug fixes

## Guidelines for creating and managing good GitHub issues (A.K.A. tickets)

* Title

    * Must be clear, concise and accurately describe what the issue is about

* Description

    * Must include a clear explanation about the reasons for doing the work.
      Preferably in the form of a user story that clearly mentions the
      stakeholders involved and their wishes

* Acceptance criteria

    * Must be a list of measurable achievements that indicate the work in the
      issue is done

* Status Labels (Optional)

    1. Each issue can be labeled to indicate its status as:

        * Status/New - An issue that was just created, you can decide that
          unlabeled issues are considered new
        * Status/Backlog - An issue that was discussed and accepted for work
        * Status/In progress - An issue that is being worked on
        * Closed - not a flag - just closing the issue in GitHub - indicates
          work on the issue is done

    2. You may define other labels as you settle on the details of your
       execution process within your team

* Progress follow-up

    1. For issues that are in progress more than one week, we expect to see at
       least weekly updates indicating the progress in performing the task
    2. For issues that get closed for reasons other than the work on them being
       done - we expect to see a comment clearly describing the reasons for
       closure

* Linked PRs

    1. GitHub can set links between issues and PRs that mention them in the PR
       description - you are expected to use that capability extensively to link
       between issues to the code changes that are made to resolve them
    2. When a PR is indicated to fix an issue - GitHub will close the issue when
       the PR is merged. We expect most issues to be closed using this automated
       mechanism.

## Guidelines for writing and maintaining project documentation

* README.md file

    1. Serves as the landing page for your project in GitHub - should tell new
       users and contributors about your project and where to find more
       information about how to use it or contribute to it. When your project
       is small you can have all the documentation included in the README, but
       as it grows we expect different documentation sections to move to their
       own files.

* User Guide (Optional - the famous Achilles Heel of Open Source)

    1. Documents all aspects of using the project from installation to daily
       operation. You might have different guides to different types of users -
       for example you may have an administration guide targeted at system
       administrators and an end-user guide that is meant for regular end
       users.

* Contribution guide - Meant to help new developers learn how to contribute to
  your project. Should include the following sections:

    1. Development process - Your process and conventions for managing tickets,
       commits and PRs. It should be based on the guidelines above, but also
       include adaptations you make for your own project.
       * One instruction we expect all the guides to contain is to require two
         completed reviews and approvals from other team members before 
         asking the mentors to review and merge 
    3. Coding guidelines - How should code in the project be written. We expect
       all Python code to conform to
       the [PEP8](https://www.python.org/dev/peps/pep-0008) standard, and your
       guidelines should mention that, but also expand on it for the specifics
       of your project.
    4. Getting started - How to set up a development environment to begin
       working on the project code.

* Architecture guide

    1. How to understand the project code - which major frameworks are used, the
       class structure, technical design background information and where to
       find the different kinds of files in the project

* License

    1. A License file defines copyright protections around your code and
       what users and contributors are legally allowed to do.
    2. In the open source community, developers typically pick an
       [OSI-approved](https://opensource.org/licenses) license for their
       projects.
    3. In Beyond, the mentors will create the project repo for you with the 
       permissive [MIT license](https://opensource.org/licenses/MIT). We require
       that you keep this license for the Beyond project in order to facilitate
       sharing with other Beyond students and the Red Hat team.

## List of things you can do to improve communications with your instructors and teammates and your overall "visibility"

* Set up a recognizable personal avatar (profile picture) on both GitHub and
  Slack.
* Ask for code reviews by mentioning the mentors in the PR
* Mention people with "@" in GitHub issues and PRs when you want them to comment
  or review.
* Link your college email address with your GitHub account, so we can find you by
  the address

## Buzz words

* PR - A pull request is a method of submitting contributions to an open
  development project.
* CR - code review is a software quality assurance activity in which one or
  several people check a program mainly by viewing and reading parts of its
  source code. At least one of the persons must not be the code's author.
* LGTM - looks good to me. Commonly used in CR.
* Client-Server architecture - a computing model in which the server hosts,
  delivers and manages most of the resources and services to be consumed by the
  client. This type of architecture has one or more client computers connected
  to a central server.

* Framework - a code library that makes a developer's life easier when building
  reliable, scalable, and maintainable web applications by providing reusable
  code or extensions for common operations.
* [Retrospective](https://geekbot.com/blog/what-is-a-sprint-retrospective-and-how-to-run-it)
* [Daily stand up](https://geekbot.com/blog/daily-standup-meeting)
* [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
* [Refactoring](https://refactoring.com)

## Past semesters projects

* Do not hesitate to take a look under past projects to understand better and
  learn by live examples
* Past semesters projects found under:
  [redhat-beyond-projects](https://github.com/redhat-beyond)
