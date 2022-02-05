---
title: "What is HUGO?"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/hugo.png"
#author
author: "Mayank Sharma"
# description
description: "This is a basic introduction to HUGO static website generator."
# Taxonomies
categories: ["website-creation","hugo"]
tags: ["web-development"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to learn about HUGO static website generator.

<div class="toc-mak">
<img src="../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>What is HUGO?</li>
<li>How to install HUGO?</li>
</ul>
</div>

## What is HUGO?

HUGO is a static site generator (SSG) which, as the name suggests, you can use to make static websites and blogs. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

If you do not know what static sites or static site generators (SSGs) are, you may read about them
<a href="../static-websites-introduction" class="mak-link" title="Static Site Generators (SSGs)">here</a>.

Before we go deeper into HUGO, we need to understand these two terms mentioned in this definition of HUGO, i.e. what is a static website and what are static site generators. 
</div>

It is based on the ***GO*** language developed by Google. Though you need not have much knowledge of this language to make a site using HUGO. We can just use a theme. 

Maybe sometimes you may have to change a few things here and there. That can be managed. And I will guide you to some extent in this effort of yours. 

As HUGO is an open-source static site generator, we can do a lot of customizations and even build our own themes. 

Though we use markup language in HUGO to create our pages and posts, we can use simple HTML, CSS, and JavaScript too. You just need a code editor, e.g. Visual Studio Code (VSS), Sublime Text, etc. 


## How to install HUGO?

There are various ways to install HUGO. You may check them out <a href="https://gohugo.io/getting-started/installing" target="_blank" title="Install HUGO">here</a>. 

However, here we will learn how to <strong>install HUGO on Windows operating system, using Chocolatey</strong>. 

So, before installing HUGO you need to install Chocolatey. 

### Installing Chocolatey

***Command to install chocolatey***: <br>

<textarea id="myInput1" class="mak-input" style="width:99%;height:200px;">Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</textarea>
<button onclick="makCopyFunction(this)" data-target="myInput1" class="mak-button">Copy to Clipboard</button><br>

To read more about it you may refer <a href="https://gohugo.io/getting-started/installing/#chocolatey-windows" target="_blank" title="Install HUGO" class="mak-link">this website</a>. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

Chocolatey (Windows) - It can be installed when you install node.js. It’s offered to you as an optional feature when you are installing node.

However, I installed the latest version of Nodejs recently and checked the install chocolatey checkbox too during its installation but still chocolatey was not installed. It was probably because of the restricted execution policy of scripts. 

So, I installed chocolatey separately by referring the instructions given on its <a href="https://chocolatey.org/install" target="_blank" title="Install HUGO" class="mak-link">website</a>. This link can also be accessed from chocolatey installation guide of Hugo. 

I used the ***windows powershell as admin*** to install it. But once installed we can use it on command prompt too.
</div>

Once this is done, you may go ahead and install HUGO now. 

### Installing HUGO

If you are on a Windows machine and use Chocolatey for package management, you can install Hugo with the following one line command: <br>
<input type="text" value="choco install hugo -confirm" id="myInput2" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput2" class="mak-button">Copy to Clipboard</button><br>

If you need the “extended” Sass/SCSS version of HUGO, use the following command: <br>
<input type="text" value="choco install hugo-extended -confirm" id="myInput3" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput3" class="mak-button">Copy to Clipboard</button><br>
    
<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

I used windows command prompt (cmd) for this purpose. However, make sure you open cmd as Admin. 
</div>

You need to check the requirements of your HUGO theme to decide which version of HUGO you need to install. Most HUGO themes mention it explicitly. However, in case of any doubt install the extended version. That's what I do too. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

Another way to install Hugo on windows 10 is given on this <a href="https://gohugo.io/getting-started/installing#windows" target="_blank" title="Install HUGO" class="mak-link">website</a>. It is for people who do not have chocolatey installed. 
</div>

### Check HUGO Version

Once you have installed HUGO, you may check its version using the following command:

<input type="text" value="hugo version" id="myInput4" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput4" class="mak-button">Copy to Clipboard</button><br>

<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">