---
title: Leroy Jenkins
description: "Tool for remotely connecting to Jenkings Groovy Console"
slug: leroy-jenkins
date: 2013-11-01
author: b34rd
tags:
    - python
    - jenkins
    - linux
    - tools
cover: https://cloudbees.techmatrix.jp/wp-content/uploads/2017/06/logo-title.png
---
How many of you use Jenkins or even know what it is? Well, I’ve been running into it quite a bit lately and I found a few ways of using it to gain access to other servers within an enterprise or organization. From the Jenkins website (https://wiki.jenkins-ci.org/display/JENKINS/Meet+Jenkins)

Jenkins is an award-winning application that monitors executions of repeated jobs, such as building a software project or jobs run by cron. Among those things, current Jenkins focuses on the following two jobs:

    1. ***Building/testing software projects continuously***, just like CruiseControl or DamageControl. In a nutshell, Jenkins provides an easy-to-use so-called continuous integration system, making it easier for developers to integrate changes to the project, and making it easier for users to obtain a fresh build. The automated, continuous build increases the productivity.
    2. ***Monitoring executions of externally-run jobs***, such as cron jobs and procmail jobs, even those that are run on a remote machine. For example, with cron, all you receive is regular e-mails that capture the output, and it is up to you to look at them diligently and notice when it broke. Jenkins keeps those outputs and makes it easy for you to notice when something is wrong.

Jenkins is actually a great tool and I love using it now! What is fun and interesting about Jenkins or Hudson (the predecessor to Jenkins) is the ability to use a groovy script console located on the server as well as all slave nodes. This is done from the Jenkins server script console url, http://jenkins-server/script. This will vary per instance but whatever url brings up the Jenkins dashboard just add a /script to it and you get the script console. From here you can do anything you can do with Groovy script. What can this buy you? Well, you can access the os with some script, you can poll jobs, you can do all sorts of things. Here’s what the dashboard looks like:

![alt text](https://miro.medium.com/max/600/0*uGfAy-M6s2NUispk)

Back to Leroy here, well, Leroy Jenkins automates the whole process. It simplifies the scripting by providing you with a console to run whatever commands you want remotely and on any nodes available. It is available on my github. You can download it by running git clone https://www.github.com/captainhooligan/Leroy-Jenkins.git.

Here’s Leroy’s interface:

![alt text](https://miro.medium.com/max/600/0*M3GnejA-UoE-ZGio.)