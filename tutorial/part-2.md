---
layout: layouts/base.html
title: Creating a Linux Development Environment with Vagrant and VirtualBox
eleventyNavigation:
  key: Vagrant and VirtualBox
  parent: Tutorial
  order: 2
---

# Creating a Linux Development Environment with Vagrant and VirtualBox

One of the issues of working in a software development team is that each
developer has a different computer he works on. The different developer
computers may and typically do have different versions of operating
systems and software tools installed on them. Those differences may
introduce difficulties in the development process since they may cause
the software we’re developing to behave differently.

## What is Vagrant?

Vagrant is a tool that is meant to solve this problem. It does it by
using Virtual Machines.

## What are Virtual Machines?

We usually think of computers as elaborate machines made out of silicone
and other materials that can run the software we write for them. virtual
machines are essentially computers that are built out of software
instead of silicone.

Virtual machines can do the things that “real” computers can do like run
software and let us interact with it, but since they are implemented in
software they enable us to do a few things that are much harder to do
with real, physical machines.

One thing that virtual machines can do is let us run an operating system
inside them that is different then the one we’re running on our actual
machine.

Another useful quality of virtual machines is that the storage devices
(Hard drives) attached to them are usually just files that can easily be
copied between computers.

Together these two qualities enable us to install a particular operating
system in a virtual machine as well as other development tools and then
give copies of it to all the developers in our team so they all end up
working with an identical operating system and set of tools.

## What is VirtualBox?

The software that lets us create and run virtual machines is called a
"Hypervisor". Vagrant is not in itself a hypervisor, instead, it is a
front-end that can use several popular hypervisors that exist in the
market.

We chose to use the "VirtualBox" hypervisor in this course for several
reasons:

1.  It is the default hypervisor that is typically used with Vagrant
2.  It has a friendly graphical user interface we can use sometimes to
    interact with our virtual machines (We don’t have to use it often
    though)
3.  It can be installed and used on all the popular operating systems in
    the market, including Windows, Mac and several versions of Linux.

## What are Vagrant Boxes?

The task of installing an operating system on a computer or a virtual
machine can be boring and tedious. One thing Vagrant does for us, is
save us the trouble of having to do this. The way it does that is by
providing us with “boxes”, ready-made virtual machines where the
operating system is already installed for us.

The [Vagrant Cloud](https://app.vagrantup.com/boxes/search) is a
website where a wide variety of boxes for many different operating
systems and configurations could be found. Since Vagrant is very
popular, many operating system vendors upload official boxes of their
operating systems to this website.

## Task 1: Install Vagrant

We can download the appropriate Vagrant version for our operating system
from [the Vagrant download page](https://www.vagrantup.com/downloads).

Once the Vagrant installation is done, we should be able the run the
following command from a command-line window:

```shell
vagrant --help
```

Running this command should make Vagrant print out a brief help message
including instructions about how to use it.

## Task 2: Install VirtualBox

[The VirtualBox download page](https://www.virtualbox.org/wiki/Downloads)
includes links for downloading VirtualBox for various operating systems.

During the installation process, Windows might pop-up some warning
windows about installing device driver software, please confirm for it
that the software should be installed.

## Task 3: Enable Virtualization Hardware on your Computer

While virtualization could theoretically be done purely in software.
Modern hypervisors require the use of virtualization hardware in order
to gain reasonable performance. Virtualization capabilities are
typically built-in to modern CPUs but most computers ship with those
capabilities disabled for security reasons.

You will need to access your computer's `BIOS` settings to enable its
virtualization capabilities. To access the `BIOS` setting you need to turn off
your computer, and turn it back on and quickly press a special key. For many
computers the key is <kbd>F1</kbd> or <kbd>ESC</kbd>, and they typically print
a message telling us what their `BIOS` access key is when they start. If you
really don’t know what the key you need to press is, you can probably find it
documented in your computer model’s user guide or in the guide for your
motherboard.

The setting you need to enable in the `BIOS` is typically called “Intel ®
Virtualization Technology”, and it could typically be found under a “CPU
Settings” or an “Advanced” menu.

Don’t worry if it takes you a while to access the `BIOS` and find the
right setting, you only need to do it once for a particular machine,
unless you reset its settings back to the manufacturer defaults.

## Task 4: Prepare to Make Changes

In a well managed project, all the details are managed within the Git
repository. This includes the configuration for tools such as Vagrant.
Since we’re going to be adding some files to our repository, we need to
create a new feature branch like we did before.

First, open a command line window and go into the directory where our
repository is. On windows the commands to do so would be:

```powershell
C:
cd \src\github.com\usr1\beyond-tutorial
```

On Linux/Mac:

```shell
cd ~/src/github.com/usr1/beyond-tutorial
```

{% rhalert %}When you type the command above, put in your GitHub account name
instead of `usr1`.{% endrhalert %}

We need to ensure out `main` branch is up to date and then create a new
feature branch:

```shell
git checkout main
git pull --ff-only
git checkout -b vagrantfile
```

## Task 5: Create a Vagrantfile

The way Vagrant works is that we create a file called `Vagrantfile` that
contains the instructions about how to create and bring up a virtual
machine (VM) for working on our project. After we create the file we put
it in our Git repository so that other developers that clone it can use
it to bring up identical VMs.

The documentation about how to write a Vagrantfile can be found on the
[Vagrant docs](https://www.vagrantup.com/docs/vagrantfile).

While we can write a Vagrantfile on our own, Vagrant provides us with a
convenient command to generate a basic file for us:

```shell
vagrant init fedora/34-cloud-base
```

This command tells Vagrant to generate a Vagrantfile that would bring up
a VM that is based on the `fedora/34-cloud-base` box. This box is
officially provided by the [Fedora](https://getfedora.org/) community,
a Linux development community from which Red Hat’s operating system
products are derived. The “cloud base” version is a relatively small
operating system installation that is suitable for use when developing
and running cloud applications.

If we look at our repository directory now, we should see the
`Vagrantfile` that was generated for us. If you open it in your text
editor, you’ll see it contains quite a few lines, but the vast majority
of them are commented out. In fact, the only lines that are not
commented out should look like the following:

```ini
Vagrant.configure("2") do |config|
  # ...
  config.vm.box = "fedora/34-cloud-base"
  # ...
end
```

You can spend some time looking at the comments in the file to get some
ideas about what could be done with it, but we can keep the file as it
is right now.

## Task 6: Bringing up a VM with Vagrant

Before we bring a virtual machine up with Vagrant for the first time, it
is recommended to open the VirtualBox GUI application, so we can see
what Vagrant does for us when we run it. This is not something we
usually need to do, but it can be interesting to see it if you have
never seen it before.

To command that makes Vagrant bring up the VM is simply:

```shell
vagrant up
```

Vagrant will print some information about what it is doing including the
fact that it downloads the box file, and brings up (Boots) the VM. If
you have the VirtualBox GUI open, you can see the VM appearing there and
starting up.

You might see Vagrant printing the following error message:

```
There was an error while executing `VBoxManage`, a CLI used by Vagrant
for controlling VirtualBox. The command and stderr is shown below.

Command: ["startvm", "8c9458ec-a144-4862-b4d8-6653c24a1499", "--type",
"headless"]

Stderr: VBoxManage.exe: error: Not in a hypervisor partition (HVP=0)
(VERR_NEM_NOT_AVAILABLE).
VBoxManage.exe: error: VT-x is disabled in the BIOS for all CPU modes
(VERR_VMX_MSR_ALL_VMX_DISABLED)
VBoxManage.exe: error: Details: code E_FAIL (0x80004005), component
ConsoleWrap, interface IConsole
```

What it means is that your computer hardware’s virtualization capabilities are
disabled. Refer to [Task 3][task3] above, to learn how to enable them.

## Task 6: Accessing the VM

Our Vagrant VM is now up, so we can access and use it.

One way we could gain access to the VM is by clicking the “Show” button
on the VirtualBox GUI. That button opens up a window that shows us the
screen of the virtual machine. Since the operating system we installed
is meant for usage in the cloud, it does not actually include a
graphical user interface and so the only thing we will see on the screen
is a textual “login” line.

Using the VirtualBox gui is not the typical way we interact with a
Vagrant VM. Instead, what we typically use is the following command:

```shell
vagrant ssh
```

When we run this command it may “think” for a while and then would seem
to “finish” and let us type commands again, but we can notice that the
prompt (The thing that is printed on the beginning of the line when we
can type commands) has changed. It would now look like this:

```
[vagrant@localhost]$
```

What is happening here is that `vagrant ssh` has connected us to the
virtual machine and is now providing us with access to its command line
interface (While doing it through our own machines command-line window).
The commands we will type now will actually run on the virtual machine.

One thing we can do now is check the version of the operating system we
have installed in the virtual machine. We can do this with the following
command:

```shell
cat /etc/system-release
```

The output we will get is like so:

```
Fedora release 34 (Thirty Four)
```

For most people, this is probably very different from the operating
system they are running on their computer. For Windows users, the cat
command and the `/etc/system-release` files do not even exist on their
system!

Since Vagrant is meant to be used for developing and testing our code,
Vagrant automatically copies the files from our repository into the
`/vagrant` directory on the virtual machine. We can see the files by
running the following command:

```shell
ls -l /vagrant
```

{% rhalert %}Since our virtual machine is running Linux, we’re using the Linux
command for listing the files.{% endrhalert %}

We can exit the virtual machine and get back to our own computer by
typing the `exit` command, or by pressing <kbd>CTRL</kbd>+<kbd>D</kbd>.

{% rhalert %}if the `/vagrant` directory was not found, see in Task 8 below how
to configure vagrant to add it.{% endrhalert %}

## Task 7: Shutting Down the VM

The VM can take quite a bit of resources from our computer when it is up
and running. Therefore, we typically want to “turn it off” when we’re
not using it. Vagrant provides us with the following command to do that:

```shell
vagrant halt
```

This command turns off the virtual machine but keeps all its files in
place. If we want to resume working on the VM, we can simply run vagrant
up to turn it back on.

The files of the VM might take up quite a bit of space on our computer.
Since we generally automate the setup of the VM, we can safely delete it
to clear some space when we want to. This could be done with:

```shell
vagrant destroy
```

Note that any information we may have put into the VM and not saved somewhere
else will be destroyed along with it. It's a good idea to not keep any
important information we cannot recreate inside the Vagrant VM.

## Task 8: Setting Up File Sharing

As mentioned before, the purpose of a Vagrant VM is to be used for running and
testing the applications we develop. For a smooth development experience, we
would like that when we make changes to the files of our application on our
computer (Using our favorite text editor or <abbr title="integrated development
environment">IDE</abbr>), we will see those changes appear immediately inside
the Vagrant VM.

Vagrant does try to set up such automated file sharing by default, but since
the underlying technology is a bit complex. It may not work initially,
depending on the operating system, hypervisor and box we’ve chosen.

In the case of the Fedora box we’re using, we need to add a configuration
option in the Vagrantfile. To do this we need to fist shut down the VM if we
haven't done so already:

```shell
vagrant halt
```

Now we need to add the following line to the `Vagrantfile`, inside the `do
- end` block, right below the existing line that starts with
`config.vm.box`:

```ini
  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"
```

Once you added the line you can bring the VM up:

```shell
vagrant up
```

To check that file sharing actually works do the following:

1.  Use `vagrant ssh` to go into the VM
2.  Run the `ls -l /vagrant` command in the VM to see your project files
3.  Use your operating system’s file browser or your text editor to
    create and save a new file in your project repository directory
4.  Run the `ls -l /vagrant` command in the VM again. You should see the
    file you’ve just created
5.  Delete the file you’ve created from your computer
6.  Run the `ls -l /vagrant` command in the VM again. You should not see
    the file there any more.

## Task 9: Increase the Amount of Memory in our VM.

By default, Vagrant allocates 500MB of RAM for our virtual machine. This
will not be enough for some of the things we need to do, so we need to
allocate a bit more. We do this by adding the following lines to the
`Vagrantfile`, inside the `do - end` block:

```ini
config.vm.provider "virtualbox" do |vb|
  vb.memory = "1024"
end
```

Once we changed and saved the `Vagrantfile`, we need to make Vagrant load
the new configuration and restart our VM, this can be done with the
following command:

```shell
vagrant reload
```

## Task 10: Make Git Ignore Vagrant’s Internal Data

If you look at the files in your project repository directory right now,
you will probably see a `.vagrant` directory. This is where Vagrant keeps
some internal data about the VM in needs to run.

If you run `git status` you will see that Git also sees that directory and
suggests that we will add it to our repository. This is not something we
actually want to do, and therefore we can tell Git to ignore that
directory. We do this by editing the `.gitignore` file.

Since we previously told GitHub to generate the `.gitignore` file for us,
we should already have it in our repository and have a bunch of
Python-related lines in it. To make Git ignore the `.vagrant` directory,
we need to add the following lines to the end of the file using a text
editor:

```ini
# Vagrant
.vagrant
```

If we now run the git status command, we will see that Git no longer
shows us the `.vagrant` directory.

## Task 11: Commit, Push and Merge our Changes

In order to enable other developers to use the Vagrant VM we’ve created,
we need to share the `Vagrantfile` with them by committing it and pushing
it to GitHub.

If you haven't done so already, please create the `vagrantfile` branch as
described in [Task 3][task3] above. Once you have the branch you can use to
following commands to stage the changed files and create the commit:

```shell
git add .gitignore
git add Vagrantfile
git commit
```

Here is an example for the commit message you can put in when your text
editor opens up:

```git
Adding a Vagrantfile for spinning up a development VM

Vagrant is a tool for using virtual machines to share development environments. Learn more about it at:
    https://www.vagrantup.com/

Also making changes to the `.gitignore` file to ignore any data that Vagrant might create.
```

One you save the commit message and exit the editor, you can inspect the
commit you’ve created and pushe the branch if all looks well:

```shell
git show
git log -20 --oneline --decorate
git push origin vagrantfile:vagrantfile
```

Once we’ve pushed our commit we can follow the link we get to create the
PR, review and merge it. Don’t forget to click the “Delete branch”
button to remove the branch in GitHub once we no longer need it.

After merging the PR we can update our local `main` branch and clean up:

```shell
git checkout main
git pull --ff-only
git remote prune origin
git branch -d vagrantfile
```

[Next: Setting up a Django Development Environment](../part-3/)

[task3]: #task-3-enable-virtualization-hardware-on-your-computer

