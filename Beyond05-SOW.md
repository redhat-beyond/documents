# Beyond 05

# Statement of Work (SOW)

***

## Pre-requirements

You  will be working on a project during this course.

The following tech stack will be used.

If you don't have knowledge/experience in any of them, it is worthwhile to look them up. The more you know the easier it will be.

* Linux  OS - able to use basic command line tools such as cd, ls, cat, grep, less, vi, ...
* Python  - if/else, for loops, functions, classes
* Django - create a basic or sample project
* Git and GitHub - create a repo, commit, push, pull requests (PR), merge
* HTML/CSS (Bootstrap) - design a basic web page from scratch, including using CSS classes for basic formatting
* Testing- unit tests and functional tests with pytest
* Virtualization - Spin up a VM using Vagrant and VirtualBox
* Databases  - Basic familiarity with database concepts

## Milestones

### Demo 1 (Mar 14): Project selection and setting up a DEV environment

The main purpose of the demo is to motivate you to come together as a project development team and establish your shared working environment and process. As such, we will monitor when and how you do the work of preparing for the demo, and the process is as important (If not more so) as the final results you will present.

Technical requirements

The demo should include the following elements:

1. A working Vagrant environment that brings up the default django web server
2. A basic Django application that includes a static web page
3. A github repo in the Beyond organization with a README.md file that introduces your project
4. A basic Github workflow that executes Flake8 tests on files when there is a PR

Note that all these topics have been covered by the introduction exercise you have been given.

Work division

To ensure that every member of your team plays an active role in preparing for the demo, we require that you divide the work between you in the following way:

1. Student1: vagrant + bootstrap.sh
2. Student2: Django
3. Student3: Web page
4. Student4: ReadMe file
5. Student5: flake8

General guidelines

1. Spend some time planning your work, understanding the order in which things need to be done and the dependencies between the various tasks
2. Ask your mentor(s) to create the main project repository for you in the Beyond organization.
3. Create GitHub issues to track the work your team needs to do and assign them to the students who will do them
4. You can sub-divide the tasks above to smaller issues as needed, as long as you document what you plan clearly
5. Use PRs to make code changes to your project, link them to the relevant issues
6. Make sure you assign  your teammates as well as your mentors as reviewers for your PRs
7. The review process can take a few days - make sure you send your PRs early enough so they will be merged in time for the demo
8. You will be given a template for each demo with the specific details that are required
9. Designate a primary speaker for your team. Other members are encouraged to speak as well, but if so plan who talks on what so you can all finish within the allotted time (15m).
10. It is recommended to pre-record technical demos to prevent technical issues from disturbing your demo
11. Please make sure all your teammates can successfully use Git to clone the team project and Vagrant to bring up the development environment on their machines.

### Demo 2 (Apr 11): Data model and basic testing

The purpose of this demo is to show your application's data model and data manipulation logic.

Technical requirements

1. For each feature you're planning to add to your project should include :

1. Data model classes
2. Migration files for initializing the data model
3. Migration files for creating test data for your DEV environment
4. Data model functions  for the more complex data operation you expect to do in your applications
5. Tests  for the data model functions

1. Your bootstrap script should run the data migrations when your Vagrant VM starts up<sup>[[b]](#cmnt2)</sup><sup>[[c]](#cmnt3)</sup><sup>[[d]](#cmnt4)</sup><sup>[[e]](#cmnt5)</sup><sup>[[f]](#cmnt6)</sup>
2. You should have a CI job (Github Workflows) in GitHub that runs your tests
3. In  your presentation you should:

1. Present all design aspects of the features you're working on including [ERDs](https://www.google.com/url?q=https://www.lucidchart.com/pages/how-to-draw-ERD&sa=D&source=editors&ust=1613042662184000&usg=AOvVaw0j-0VALcaXInv5f6hp6fjM) and [DFDs](https://www.google.com/url?q=https://www.lucidchart.com/pages/data-flow-diagram&sa=D&source=editors&ust=1613042662185000&usg=AOvVaw0G9xWP6GD0ypOOeOonddFL) (data design and flow documents).
2. Show  your data model via the Django admin UI
3. Present your data manipulation functions  via the Django shell
4. Show your test code and explain what you've tested

Work division

It is recommended that you divide the work in your team in a "vertical" way - this means that each team member will have one or more project features assigned to them and they will be responsible for implementing all aspects of said features including the data model, the tests, the control logic and the UI.

Working in this way will provide several benefits:

1. It will allow each team member to experience all the layers of the technical stack
2. It can reduce the amount of Git conflicts you may encounter as you work on your projects because different features can live in different files.

### Performance Review (between Apr 11 to Apr 18) :

TBD

### Demo 3 (May 2): Control logic and UI

The purpose of this demo is to review your ability to implement the application UI logic and test various aspects of the application.

Technical requirements

1. Tests  for the data model functions
2. Complete the implementation of one or more features of your application, including UI and backend logic. The features you implement should allow you to demonstrate your ability to:

1. Query data from your database and present it to your users
2. Use forms to gather user input
3. Store or modify information in the database as a response to user input

1. Implement automated tests for the features you've completed

Demo contents

Your demo presentation should include the following elements:

1. One or more video segments showing how the features you've implemented look and work from a user's point of view.
2. An explanation of how you've tested the features you've developed. You should include the following details:

1. Which manual tests were carried out. How does one decide if a test was successful?
2. Which automated tests were written
3. Are failure scenarios being tested? In which way?
4. What aspects of the features you've written are not being tested?

1. A demonstration of the application tests being run in GitHub actions.

### Demo 4 (May 30): Final Project Demo

The purpose of this demo is to show your development process and should includes:

1. Project background - Explain in general the motivation and the requirements.
2. Architecture -adding a chart that describes all system components.
3. Results (features)
4. Demo - video that presents your full system (UI, DB, APIs, CI)
5. Development processing - share the process you made
6. Development challenges
7. What did you learn

## Division into project groups (till Mar 4th)

After the first 2  weeks  you'll be divided into 4 groups.

Each group will have mentors:

* group1: Sim & Omer & Or
* group2: Yariv & Guy & Edi
* group3: Barak & Aviad & Luiza
* group4(AWS): Liora &  Bruna & Kobi

## Project ideas

* Platform for freelancers to offer their services
* P2P Lending service
* Dating website
* Drop shipping web store - selling other people's products on your website
* Platform for finding part time jobs for students



## Final Grade

* The Red Hat team will assign one of the following grades to each student which will be translated into the final grade by the professor. The grade is derived from:

* Collaboration and engagement - To work together with others to achieve a common goal.
* Execution  process quality

Collaboration and engagement - communication is almost everything. We expect to hear you. During classes, over Slack, in PRs and in GitHub issues. To be blunt about it - if by the end of the course, if none of the Red Hatters remember who you are - you will not get a good grade.

Class attendance  - while attendance will help you to get familiar with the material and necessary to engage and collaborate with the staff - it only won't affect the grade.

* Grade 1- hasn't any slack activity, without any responsiveness  to his PRs.
* Grade 2- works alone. Does not discuss decisions made and issues with the mentors or his team mates.
* Grade 3- Responsible for closing his PRs quickly (uses office hours, if needed), slack activity inside the group and/or with the mentors, presenting in the demos.
* Grade 4- Review teammates PRs, the leader(s) of the group (the most  engaged  teammate(s) in others' tasks), helps others.

Execution process quality - in this section we will measure the github activity (PRs) and the improvement in the technology stuck (frontend, backend, Data model, tests). We would like to see feature planning and the ability to learn new areas despite failures.

* Grade 1 - not enough PRs, not involved in feature planning, was involved with only 1 layer from the technology stack(frontend, backend, Data model, tests).
* Grade 2  - a few merged PRs ( minor PRs or 1-2 PR for a demo period) , involving only 2 layers of the technology stack(frontend, backend, DBs, tests).
* Grade 3  - Wrote PRs involving at least 3 of the 4 layers in the technology stuck (frontend, backend, Data model, tests), part of feature planning, for each PR attached an issue.
* Grade 4 - touching on all the technology stack (frontend, backend, Data model, tests), every week publish and merge at least 2 significant PRs, each PR includes tests, ability to learn new areas and subject on himself.

## Grade Process  

* Performance review - The grading process is built to mimic the employee performance evaluation process in organisations such as Red Hat

* In the middle of the course you'll meet your mentors to review your performance.
* After the last demo we will ask for a self performance review to retrospect yourself and challenge yourself at least one improvement.

## Guidelines for creating good PRs

* Aim, focus and completeness - A good PR does one thing, does it well and is self-contained - single responsibility principle. It does not break existing functionality.
* Description quality  - a PR description should explain what  it changes, and why . It should also link to a relevant ticket that contains the user story that the PR implements.

1. If it's a frontend change it should contain also screenshots

* Commit quality  - a PR should have 1-5 commits where each one:

1. Contains a mostly self-contained code change
2. Has a good commit message that meets the [commit message guidelines](https://www.google.com/url?q=https://chris.beams.io/posts/git-commit/&sa=D&source=editors&ust=1613042662251000&usg=AOvVaw0laf1dF81wvSlNu_BVAAq0) and explains the change the commit introduces.
3. Helps towards understanding the PR as a whole

* Overall Size

1. A PR should not generally change more then 100-300 lines of code
2.  A PR can  grow up to 600 lines if more than 50% of the change is comments, documentation or tests

* Code quality  - The code in the PR should:

1. Meet the project's coding guidelines (See more about coding guidelines in the "Project documentation" section below)
2. Be easy to read and understand
3. [Have relevant comments](https://www.google.com/url?q=https://itnext.io/what-makes-a-good-code-comment-5267debd2c24&sa=D&source=editors&ust=1613042662255000&usg=AOvVaw3N0ydRJCqvOKYQdxKRVNcl)

* Discussion and review

1. A PR must be reviewed and approved by other team members
2. We expect to see discussion that indicated the team members understand what is the PR supposed to do

### Really bad PRs (Make people unable or unwilling to review them)

* PRs without meaningful functionality such as PRs that just fix typos or move files (Those are sometimes necessary - but you should clearly indicate them as such in the PR description, and never mix new functionality or bug fixes into such PRs)
* PRs that break your CI
* Huge PRs with thousands of changed lines
* PRs that mix unrelated pieces of functionality
* PRs that mix refactoring and new features or bug fixes

## Guidelines for creating and managing good GitHub issues (A.K.A tickets)

* Title

1. Must be clear, concise and accurately describe what the issue is about

* Description

1. Must include a clear explanation about the reasons for doing the work. Preferably in the form of a user story that clearly mentions the stakeholders involved and their wishes

* Acceptance criteria

1. Must be a list of measurable achievements that indicate the work in the issue is done

* Status Labels

1. Each issue must be labeled to indicate its status as:

* Status/New  - An issue that was just created, you can decide that unflagged tickets are considered new
* Status/Backlog - A issue that was discussed and accepted for work
* Status/In progress  - An issue that is being worked on
* Closed - not a flag - just closing the issue in GitHub - indicates work on the issue is done

1. You may define other labels as you settle on the details of your execution process between yourselves

* Progress follow-up

1. For issues that are in progress  more than one week, we expect to see at least weekly updates indicating the progress in performing the task
2. For issues that get closed for reasons other than the work on them being done - we expect to see a comment clearly describing the reasons for closure

* Linked PRs

1. GitHub can set links between issues and PRs that mention them in the PR description - you are expected to use that capability extensively to link between issues to the code changes that are made to resolve them
2. When a PR is indicated to fix an issue - GitHub will close the issue when the PR is merged. We expect most issues to be closed using this automated mechanism.

## Guidelines for writing and maintaining project documentation

* README.md  file

1. Serves as the landing page for your project in GitHub- should tell new users and contributors about your project and where to find more information about to use it or contribute to it. When your project is small you can have all the documentation included in the README, but as it grows we expect different documentation sections to move to their own files.

* user guide (Optional - the famous Achilles Heel of Open Source)

1.  Documents all aspects of using the project from installation to daily operation.  You might have different guides to different types of users - for example you may have an administration guide targeted at system administrators and an end-user guide that is meant for simple end users.

* Contribution guide  - Meant to help new developers learn how to contribute to your project. Should include the following sections:

1. Development process  - You process and conventions  for managing tickets, commits and PRs. It should be based on the guidelines above, but also include adaptations you make for your own project.
2. Coding guidelines  - How should code in the project be written. We expect all Python code to conform to the [PEP8](https://www.google.com/url?q=https://www.python.org/dev/peps/pep-0008/&sa=D&source=editors&ust=1613042662266000&usg=AOvVaw2gWFNJaV2TNAxJ3XPh_M83) standard, and your guidelines should mention that, but also expand on it for the specifics of your project.
3. Getting started  - How to set up a development environment to begin working on the project code.

* Architecture guide

1. How to understand the project code - which major frameworks are used, the class structure, technical design background information and where to find the different kinds of files in the project

* License

1. You need to pick an [OSI-approved](https://www.google.com/url?q=https://opensource.org/licenses&sa=D&source=editors&ust=1613042662268000&usg=AOvVaw0vpfOKE3uY-J2RmizezEqh) license for your project.
2. We expect you to create and merge a PR that includes the license file as well as any other adjustments you need to make to your code to meet the terms of the license. The commit message and the description of the PR should include your reasons for choosing the particular license that you chose.

## System Requirements

* Computer
* 8 GB RAM
* OS - Windows, OSX, Linux
* Language - English (Username should be in English)
* Installations:

* [Git](https://www.google.com/url?q=https://git-scm.com/downloads&sa=D&source=editors&ust=1613042662271000&usg=AOvVaw3RMBC0sCugbpOempjCXWWH)
* [Virtualbox](https://www.google.com/url?q=https://www.virtualbox.org/wiki/Downloads&sa=D&source=editors&ust=1613042662271000&usg=AOvVaw0zv9IjMA548nVDp2VzfYXe)
* [Vagrant](https://www.google.com/url?q=https://www.vagrantup.com/downloads.html&sa=D&source=editors&ust=1613042662272000&usg=AOvVaw2U4fwU5Xy0fud_fkzRFNsn)

## List of things you can do to improve communications with your instructors and team mates and your overall "visibility"

* Setup a recognisable personal avatar (profile picture) in both GitHub and Slack.
* Ask for code reviews by mentioning the mentors in the PR
* Mention people with "@" in GitHub issues and PRs when you want them to comment or review.
* Link your college email address with your GitHub account so we can find you by the address

## Buzz words

* PR - A pull request (PR) is a method of submitting contributions to an open development project.
* CR  - code review is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code. At least one of the persons must not be the code's author.
* LGTM  - looks good to me. Commonly used in CR.
* Client-Server architecture - a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server.

* Framework - a code library that makes a developer's life easier when building reliable, scalable, and maintainable web applications by providing reusable code or extensions for common operations.
* [Retrospective](https://www.google.com/url?q=https://geekbot.com/blog/what-is-a-sprint-retrospective-and-how-to-run-it/?k_id%3Ddsa-19959388920%26adgroup_id%3D73039967424%26campaign_name_ad%3D1697251819%26gclid%3DEAIaIQobChMIndCv9oax6wIVhdCyCh3ojgj2EAAYASAAEgLxh_D_BwE&sa=D&source=editors&ust=1613042662275000&usg=AOvVaw1f5hPaquTuIiISO5jw0Nm6)
* [Daily standup](https://www.google.com/url?q=https://geekbot.com/blog/daily-standup-meeting/?k_id%3Ddsa-910872033553%26adgroup_id%3D96910465570%26campaign_name_ad%3D10071775578%26gclid%3DEAIaIQobChMIotXiiYex6wIVzJ13Ch3nDg3HEAAYASAAEgLaVPD_BwE&sa=D&source=editors&ust=1613042662276000&usg=AOvVaw2FMaimUmMz-2DM9ts16oo6)
* [Technical debt](https://www.google.com/url?q=https://en.wikipedia.org/wiki/Technical_debt%23:~:text%3DTechnical%2520debt%2520(also%2520known%2520as,approach%2520that%2520would%2520take%2520longer.&sa=D&source=editors&ust=1613042662277000&usg=AOvVaw07S0Nd3s71oBIx1ffQ1bPO))
* [Refactoring](https://www.google.com/url?q=https://refactoring.com/%23:~:text%3DRefactoring%2520is%2520a%2520disciplined%2520technique,of%2520small%2520behavior%2520preserving%2520transformations.&sa=D&source=editors&ust=1613042662277000&usg=AOvVaw0EfkmYVDn7rrpQCoL-WhWC)

