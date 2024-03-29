---
title: Installing TensorFlow on HTPC
description: "Thoughts on installation experience"
slug: installing-tensorflow-on-htpc
date: 2018-11-30
author: b34rd
tags:
    - tensorflow
    - htpc
    - machine learning
cover: https://cdn-images-1.medium.com/max/1600/0*xn9KO7B_Bwa5pPB9.jpg
---
TLDR: Yeah, this isn’t a how to guide or anything, it’s more my experience on leaping before I look. Don’t worry though, if you want to install TensorFlow on Windows 10, this will help if paired with the TensorFlow docs.

I’ve been looking into updating my old Raspberry Pi cluster to rebuild some of the old Keras convolutional neural networks (cnn) I built to help with the aquaponics project. Well, after I started piecing together the hardware and I noticed I didn’t have enough micro sd cards. Instead of buying them and continuing this route, I thought to myself, why not just use the HTPC? It IS only used for gaming, plex, and other small tasks. Why not put it to use when it is otherwise not? Here’s how I got started…

First, it is pseudo headless. I say that because it is connected to the TV and the only interface is via a small wireless keyboard (I mean small, like smaller than your average smartphone) or a gamepad. When the kids aren’t playing games, they use the smart interface on the TV (smart tvs and I don’t get along but with it isolated on my network, in a vlan on its own and lots of firewall rules, I can kinda live with it). That meant I had to turn on some of the fun Linux functionality of Windows 10. I enabled OpenSSH Server and Remote Desktop. These allowed me to do anything and everything I could need to do while the kids are happily (or unhappily) watching whatever they choose. Even if playing a game, I could still ssh over to run processes. That reminds me, I should move homeassistant over to it instead of the raspberry pi… hmmm… Anyway, for those that aren’t sure how to turn these on, search in settings dialog for them and they come right up.

Now that we can remotely do all the things, we need to ensure we have all the software we need installed. TensorFlow is very much related to versions of other software and doesn’t work at all outside of them. This is something everyone should pay very close attention to. I did not and went about my normal Arch Linux way of doing things and installed the latest version of Python for Windows, Cuda, and CudNN. I thought, hell yes! Let’s get to TensorFlow! That’s not how things wanted to work. TensorFlow kept refusing to install. Apparently reading documentation was something I should have done. The latest version of Python is 3.7.1. TensorFlow will work with 3.6 but not 3.7. After installing the needed version of Python I was ready and got back to it. No no, said dear TensorFlow. After installing, which went perfectly well this time, it kept throwing DLL errors. I read further in the docs and found Cuda 10 is not supported. I went back and installed Cuda 9 and the matching version of CudNN. Things are going great! The current version of TensorFlow (as of this post) is 1.12.

Once things were all working as they should I went back to my old code. It looks good, but I’ve never really worked with TensorFlow before, only Keras when it was its own thing. I’m going to use this as a learning opportunity and rewrite the CNN as well as add new functionality. For now, downloading new data sets… first, I’m going to start with all of reddit ;-)

The reason for using reddit posts is because I want to be able to have the projects communicate effectively. Essentially with reddit, it will be a total ass like I am. I’m totally ok with this.

For those interested, the reddit posts dataset can be downloaded here (torrent):
```shellcode
magnet:?xt=urn:btih:7690f71ea949b868080401c749e878f98de34d3d&dn=reddit%5Fdata&tr=http%3A%2F%2Ftracker.pushshift.io%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80
```
The full info about this can be found on reddit in [/r/datasets](https://www.reddit.com/r/datasets/comments/3bxlg7/i_have_every_publicly_available_reddit_comment/?utm_content=body&utm_medium=post_embed&utm_name=b5032bf0e4234a84a3f91d2d74a02d0e&utm_source=embedly&utm_term=3bxlg7)