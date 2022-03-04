---
title: "Setting up Google Tag Manager Account and adding tags to Containers"
date: 2022-03-01T15:40:24+06:00
# post thumb
images:
  - "images/post/seo/technical-seo/google-tag-manager7.png"
#author
author: "Mayank Sharma"
# description
description: "Setting up GTM Account"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-tag-manager"]
type: "regular" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

Google Tag Manager (GTM) is a Tag Management System. It allows us to add (and manage) tags to our website, without editing the code of our website. 

In laymen terms, we just add Google Tag Manager tag in our website and no other code. All other tags, be it for measurement or marketing, will now be added to Google Tag Manager and not directly to our website. 

This helps us keep our website code clean and we need not edit our code every time we need to add tag of any service. 

This is what I do. I only add my Google Tag Manager tag in my site. I manage all other tags (e.g. Google Analytics tag, Facebook pixels etc.) through google tag manager only. It’s more clean and easier to manage. 

This is what we are going to cover in this article.

<div class="toc-mak">
  <br>
  <b>Table of Contents</b> <br> <br> <br>
  <ul>
  <li>Setting up Google Tag Manager Account</li> <br>
  <li>Making our Container</li> <br>
  <li>Adding Tags to our Container</li> <br>
  </ul>
</div>

Now, let’s start with the first step of setting up our Google Tag Manager Account. 


## Setting up Google Tag Manager Account

* Sign in to <a href="https://marketingplatform.google.com/about/tag-manager/features/" target="_blank" title="Google Tag Manager Website" class="mak-link">Google Tag Manager</a> using your Gmail id. 

* Now Create Account. Enter your Account name and Country name. <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager1.png" alt="linking google tag manager with google analytics" style="width:72%;height:72%;">


## Making Container

You will also have to setup your first Container (for your Website or App) as soon as you set up your Google Tag Manager account. 

But we can also add more containers in our account later on. To do so:

*  Go to ‘All accounts’ (i.e. Go to Home). For this, you just need to click the arrow beside the Tag Manager icon (at the top-left). <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager2.png" alt="linking google tag manager with google analytics" style="width:99%;height:99%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

You may also do so by going to Admin. 
</div>

* Create container from 3 dots dropdown.<br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager3.png" alt="linking google tag manager with google analytics" style="width:45%;height:45%;">
<img src="../../../images/post/seo/technical-seo/google-tag-manager4.png" alt="linking google tag manager with google analytics" style="width:54%;height:54%;">

Once you create the container, you will get two codes:
* Script code – to be put in header/head of your website. In my HUGO sites I just use this. 
* Non-script code – to be put in body. It will be used if the browser of the user has JavaScript disabled, i.e. the code in script does not work. It’s kind of a backup. You may choose not to put it in your website. I did not put it on my website and still everything worked fine.  
<img src="../../../images/post/seo/technical-seo/google-tag-manager5.png" alt="linking google tag manager with google analytics" style="width:99%;height:99%;">

If you want to learn how to add Google Tag Manager tag in your HUGO site, go and read <a href="../adding-gtm-tag-to-hugo-website" title="Adding Google Tag Manager tag in HUGO website" class="mak-link">this article</a>. 

The focus of this current article is only on setting up of Google Tag Manager Account and our Containers therein. 


## Adding Tags to our Container

We can add tags of many different services to the container of our website in Google Tag Manager. But here we will just demonstrate this by adding the tag of Google Analytics. 

Before doing so, setup Google Analytics account for your website and get your Google Analytics Measurement id.  

* Go to: <br>
Tags → New <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager6.png" alt="linking google tag manager with google analytics" style="width:99%;height:99%;">

* Choose Google Analytics GA4 configuration (now this is default in google analytics; earlier it used to be Universal Analytics): <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager7.png" alt="linking google tag manager with google analytics" style="width:99%;height:99%;">

* Add the measurement id, give a proper name to the tag and save: <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager8.png" alt="linking google tag manager with google analytics" style="width:81%;height:81%;">

* Now add a trigger to this tag. For example, I selected All Pages. <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager9.png" alt="linking google tag manager with google analytics" style="width:54%;height:54%;">

You have successfully added the Google Analytics tag to Google Tag Manager Container of your website. <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager10.png" alt="linking google tag manager with google analytics" style="width:99%;height:99%;"> <br><br>

Now do not forget to ‘Submit’ your Container. Many a times people forget this step. This button is on the top-right corner. <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager11.png" alt="linking google tag manager with google analytics" style="width:81%;height:81%;"> <br><br>

Add Version Name and Version description and Publish. <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager12.png" alt="linking google tag manager with google analytics" style="width:54%;height:54%;"> <br><br>
You have successfully published your website container with Google Analytics tag inside it. 


## Winding Up

So, we have set up the container for our website and added Google Analytics tag to it, that will trigger whenever anyone visits the pages of our site. But there’s one step left. 

We need to link our website to Google Tag Manager by adding its tag/code to our website. How to add Google Tag Manager to your HUGO website has been covered in <a href="../adding-gtm-tag-to-hugo-website" title="Adding Google Tag Manager tag in HUGO website" class="mak-link">this article</a>. 
