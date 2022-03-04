---
title: "Adding Google Tag Manager tag to HUGO site"
date: 2022-02-27T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/google-tag-manager-hugo1.png"
#author
author: "Mayank Sharma"
# description
description: "Adding Google Tag Manager tag to HUGO site"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-tag-manager"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

In this article we will learn how to add Google Tag Manager code to HUGO site, even if the theme that you use do not have pre-settings to allow that. 

Moreover, you can also use this method to add tags of other services (e.g. Google AdSense etc.) too.

## Prerequisites

Before we move ahead, there are a couple of prerequisites that you need to fulfil:
* You must have set up your Google Analytics account. If you haven’t, you may read <a href="../how-to-setup-google-analytics-account" title="Set up your Google Analytics account" class="mak-link">this article</a> to set it up first. 
* You have set up your Google Tag Manager account and added the Google Analytics tag of your property in the container of Google Tag Manager. You may follow <a href="../how-to-setup-google-tag-manager-account" title="Set up your Google Analytics account" class="mak-link">this article</a> to set it up. 


## Get Google Tag Manager (GTM) tag

After you have made a container for your website in Google Tag Manager, you will get a code snippet. This is what you need to embed in your website. It should look something like this:

```js
<!-- Google Tag Manager -->
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PC584TL');
</script>
<!-- End Google Tag Manager -->
```

## Embed Google Tag Manager tag 

### If Theme preconfigured for GTM tag

If your HUGO theme has a configuration for you to add Google Tag Manger code, then your job is very simple. Just add the Google Tag Manager id, i.e. GTM-XXXXXXX code at the required place. 

For example, in Academic theme we just need to add the required GTM-XXXX code in params.toml. <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo1.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:90%;height:90%;">

That's it. We are done! 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

In the background you will see that this partial works for it: `layouts/partials/marketing/google_tag_manager.html`

In it we have the same code as was given by Google Tag Manager; only the Google Tag Manager id is fetched from params.toml.
<img src="../../../images/post/hugo/google-tag-manager-hugo2.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:99%;height:99%;">
</div>

But if your theme does not have Google Tag Manager configuration, then we will do it manually. Read on! 

### If Theme not configured for GTM tag

We should embed the GTM tag at such a place that allows it to track all our web pages. Now, embedding it on each of the page and post of our website will work, but it will be exhausting and a very bad idea. So, we generally embed it in the `<head>` section of our website, so that it is loaded whenever any page is rendered in a browser.

#### head file

In HUGO, you will have to find the file named `head.html` or something with a similar name. In Reader theme, it is in the following folder: `themes/reader/layouts/partials/head.html`

This is the file where we need to embed our Google Manager Tag into, between the ```<head> … </head>``` tags. 

In HUGO we do not make any changes to the files in the theme folder, because it will make matters very difficult for us if we later on add updated theme to our project or change our theme. 

What we do instead is to make a similar directory structure in our root folder and copy that file there. So, our copied file will be in the following folder: `layouts/partials/head.html`

Now, we are free to make any edits in this file. This file will override the corresponding file in the themes folder. 

#### gtm file

Now, make a file named gtm.html (or any name of your choice) and paste the code you got from Google Tag Manager here. This file should be in the following folder: `layouts/partials/gtm.html`

Here’s a snapshot of the directory structure of my website, after adding the two files. <br> 
<img src="../../../images/post/hugo/google-tag-manager-hugo3.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:63%;height:63%;">

#### Link the two files

Now, just add a small Go language snippet in the head.html file, at a place where you want to embed the gtm.html code. 

Here’s the Go language snippet: 
<!-- ``` {{ partial "gtm" . }} ``` <br> -->
<input type="text" value='{{ partial "gtm" . }}' id="myInput" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput" class="mak-button">Copy to Clipboard</button><br>

(We omit the .html file extension. So, we will only write "gtm" and not "gtm.html")

<img src="../../../images/post/hugo/google-tag-manager-hugo4.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:72%;height:72%;">

That’s it! 

You have now successfully linked your HUGO site with Google Tag Manager, which in turn can be linked to Google Analytics or any other such service. 

This is the method that you can use to embed any other code in your website too, e.g. the code of Google AdSense, etc. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

This works because HUGO builds the website pages out of blocks of code. 

In head.html and other such files (e.g. header.html, footer.html etc.) you will find a lot of Go language code snippets and not much HTML. These files call other files that contain the actual needed HTML. 

In our case, the Go code snippet we added in head.html will pull in the HTML code from the gtm.html. It helps keep our code clean, as the Google Tag Manager code has been placed in a separate file. 

You can also embed the Google Tag Manager code directly in head.html file, rather than doing it indirectly by making a gtm.html file and then embedding the code of that file in head.html. But that will look a little messy. 
</div>


## Verifying that the embedded Google Tag Manager (GTM) code works

The first thing we should check is that the code in the gtm.html file is being added to head.html file. To check this is pretty simple. 

You can open the Element tab of the Developers Tools in your browser. You should see the Google Tag Manager code in the head section of any page of your website. <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo5.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:99%;height:99%;">

Now, we should check whether this code really works and send the user data to Google Tag Manger. 

To do so, you can open your website (the live website or the one on your computer in localhost) and check whether the Google Analytics Real-time user tracker is showing you as a real-time user. <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo6.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:90%;height:90%;">

The “Users in Last 30 Minutes” counter should atleast be 1. Give it a little time. Sometimes, the counter changes after a minute or two. If it’s a new site then probably you will be the only one live on that site. You can also check the location to be doubly sure. 

If it does show 1 or more live users, then it means that you have successfully linked your HUGO site to Google Analytics via Google Tag Manger. 

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>Troubleshooting</b><br>

Sometimes, we see an error 404 in Developer Tools, that tells us that Google Tag Manger is not responding. It’s because of a very common mistake. 

It simply means that you have not published the container of your website in Google Tag Manager. That’s why it’s not returning any data. 

The solution is simple. Just publish the Google Tag Manger container after making it. 
</div>


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">

