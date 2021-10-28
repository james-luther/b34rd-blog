---
title: Install RuiDa Laser Works in Arch/Manjaro Linux
description: "Installing the sofware to manage RuiDa laser controller in Arch based Linux distributions"
slug: install-ruida-laser-works-arch-manjaro-linux
date: 2018-10-15
author: b34rd
tags:
    - wine
    - arch
    - laser cutting
cover: https://i1.wp.com/hl-yeah.com/wp-content/uploads/2018/01/RW8-not-mirror-image.jpg?resize=960%2C540&ssl=1
---
So, I have a laser cutter/engraver that I put together from some scrap parts. Basically, I was poking around on eBay one day and a 50W CO2 laser showed up. I looked around for one at a decent price that was within the budget I was willing to spend and failed. What I did find in my budget were parts. After they all arrived I put everything together and had a laser engraver minus the controller board. A quick Amazon search led me to RuiDa. It was cheap and worked for what I had. Getting this running was simple. I installed a Virtual Box instance of Windows 10, installed the software, and went about my business. Until …

My VM died!! Really, the entire hard disk failed and I had no backup. I rebuilt and decided to run in Linux instead of dealing with any virtual machines this time around. That was a little over a year ago. I’ve since rebuilt again (this time I had backups) and went with Manjaro as the OS of choice. Installing RDLaserWorks in Linux is a breeze with wine. On all distros, it’s pretty much the same minus a few different packages. If someone wants a how-to for a specific distro, I will gladly try to help you out.

Let’s get started!

First we need to install the required packages.
```
sudo pacman -S wine-staging-nine wine-mono wine_gecko winetricks
```

![alt text](https://miro.medium.com/max/1400/1*tSPBSZ-aCy0jreF66cEbaQ.png "installation via pacman")

This only takes a minute depending on your network connection. Once finished we run
```bash
winetricks
```

![alt text](https://miro.medium.com/max/1400/1*b17-9JuXd_ezzlzwsApkrQ.png "winetricks")

We need to select the wineprefix we wish to use and install some resources. The specific ones we need are `cmd, mfc42, and vcrun6`. Once selected and installed we can exit winetricks and begin the installation.

![alt text](https://miro.medium.com/max/1400/1*Mq8D2Xru9u128qDbawluZw.png "install dll or component")
<br>

![alt text](https://miro.medium.com/max/1000/1*dPzkC8GxSYFjv9EP7vN77A.png "cmd")

![alt text](https://miro.medium.com/max/1000/1*3jPOZGai1DdjY-RU3lO36w.png "mfc42")

![alt text](https://miro.medium.com/max/1400/1*8xncj5b4Rn7-WQaae0EFhA.png "vcrun6")

From here we can find our copy of RDLaserWorks and install. If you don’t have this software, you can download directly from RuiDA here: Ruida Downloads. There you select the version you wish to use.

To install:
```bash
wine /path/to/installer.exe
```
Follow the prompts of the installer just like you would on Windows.

![alt text](https://miro.medium.com/max/552/1*pbPszyCQacJMqC2ZA6tVLw.png "wizard")

![alt text](https://miro.medium.com/max/552/1*1jiZlO2s1eGzEV7YUxrqzg.png "installation")

![alt text](https://miro.medium.com/max/305/1*aUixCgtSioPS3do3vhdoFA.png "usb driver")

Don’t install the USB driver. Just click the install button and upon completion click exit. You’re finished! On the RuiDa controller specify an IP address and connect it to a switch or an access point. Open up RDWorks, connect to your controller and get to engraving/cutting!

![alt text](https://miro.medium.com/max/1400/1*56vRUk28Lx-eeC-Qi_62Jw.png "RDWorks")

Oh, you will need to do some configuration, but, it’s no different than on Windows.

If you’re interested in a laser engraver but don’t want to deal with shopping for parts, Amazon is a great place. Here’s the closest they have to my setup: https://amzn.to/2Ch8NIO