---
title: Adding Google Tag Manager tag to HUGO site
linktitle: Adding Google Tag Manager tag to HUGO site
toc: true
type: docs
date: "2021-01-29T00:00:00+01:00"
draft: false
menu:
  hugo:
    parent: Linking HUGO sites with other Web Services
    weight: 60

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 60
---

In this article we will learn how to add Google Tag Manager code to HUGO site, even if the theme that you use do not have pre-settings to allow that. Moreover, you can also use this method to add tags of other services (e.g. Google AdSense etc.) too.

## Prerequisites

Before we move ahead, there are a couple of prerequisites that you need to fulfil:
* You must have set up your Google Analytics account. If you haven’t, you may read <a href="../../../seo/technical-seo/google-analytics" title="Set up your Google Analytics account">this article</a> to set it up first. 
* You have set up your Google Tag Manager account and added the Google Analytics tag of your property in the container of Google Tag Manager. You may follow <a href="../../../seo/technical-seo/google-tag-manager" title="Set up your Google Analytics account">this article</a> to set it up. 


## Get Google Tag Manager (GTM) tag

After you have made a container for your website in Google Tag Manager, you will get a code snippet. This is what you need to embed in your website. It should look something like this:

``` 
<!-- Google Tag Manager -->
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PV574TL');
</script>
<!-- End Google Tag Manager -->
```

## Embed Google Tag Manager tag 

### Theme preconfigured for GTM tag

If your HUGO theme has a configuration for you to add Google Tag Manger code, then your job is very simple. Just add the Google Tag Manager id, i.e. GTM-XXXXXXX code at the required place. 

For example, in Academic theme we just need to add the required GTM-XXXX code in params.toml.
<img src="../../../media/hugo/google-tag-manager-hugo1.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:63%;height:63%;">
That's it. We are done! 

{{% alert note %}}
In the background you will see that this partial works for it: layouts/partials/marketing/google_tag_manager.html 

In it we have the same code as was given by Google Tag Manager; only the Google Tag Manager id is fetched from params.toml.
<img src="../../../media/hugo/google-tag-manager-hugo2.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:99%;height:99%;">
{{% /alert %}}

But if your theme does not have Google Tag Manager configuration, then we will do it manually. Read on! 

### Theme not configured for GTM tag

We should embed the GTM tag at such a place that allows it track all our web pages. Now, embedding it on each of the page and post of our website will work, but it will be exhausting and a very bad idea. So, we generally embed it in the <head> section of our website, so that it is loaded whenever any page is rendered in a browser.

#### head file

In HUGO, you will have to find the file named head.html or something with a similar name. In Reader theme, it is in the following folder: themes/reader/layouts/partials/head.html

This is the file where we need to embed our Google Manager Tag into, between the ```<head> … </head>``` tags. 
In HUGO we do not make any changes to the files in the theme folder, because it will make matters very difficult for us if we later on add updated theme to our project or change our theme. 

What we do instead is to make a similar directory structure in our root folder and copy that file there. So, our copied file will be in the following folder: layouts/partials/head.html

Now, we are free to make any edits in this file. This file will override the corresponding file in the themes folder. 

#### gtm file

Now, make a file named gtm.html (or any name of your choice) and paste the code you got from Google Tag Manager here. This file should be in the following folder: layouts/partials/gtm.html

Here’s a snapshot of the directory structure of my website, after adding the two files. 
<img src="../../../media/hugo/google-tag-manager-hugo3.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:54%;height:54%;">

#### Link the two files
Now, just add a small Go language snippet in the head.html file, at a place where you want to embed the gtm.html code. 

Here’s the Go language snippet: 
<!-- ``` {{ partial "gtm" . }} ``` <br> -->
<span id="cp_spn">{{ partial "gtm" . }}</span>
<button id="cp_btn" class="mak-button">Copy to Clipboard</button><br>
(We omit the .html file extension. So, we will only write "gtm" and not "gtm.html")
<img src="../../../media/hugo/google-tag-manager-hugo4.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:54%;height:54%;">
That’s it! 

You have now successfully linked your HUGO site with Google Tag Manager, which in turn can be linked to Google Analytics or any other such service. This is the method that you can use to embed any other code in your website too, e.g. the code of Google AdSense etc. In case of Ad Sense, we will add our code in a file that creates our pages and posts (e.g. in single.html file), rather than in head.html. 

{{% alert note %}}
This works because HUGO builds the website pages out of blocks of code. In head.html and other such files (e.g. header.html, footer.html etc.) you will find a lot of Go language code snippets and not much HTML. These files call other files that contain the actual needed HTML. 

In our case, the Go code snippet we added in head.html will pull in the HTML code from the gtm.html. It helps keep our code clean, as the Google Tag Manager code has been placed in a separate file. 

You can also embed the Google Tag Manager code directly in head.html file, rather than doing it indirectly by making a gtm.html file and then embedding the code of that file in head.html. But that will look a little messy. 
{{% /alert %}}


## Verifying that the embedded Google Tag Manager (GTM) code works

The first thing we should check is that the code in the gtm.html file is being added to head.html file. To check this is pretty simple. 

You can open the Element tab of the Developers Tools in your browser. You should see the Google Tag Manager code in the head section of any page of your website.
<img src="../../../media/hugo/google-tag-manager-hugo5.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:90%;height:90%;">

Now, we should check whether this code really works and send the user data to Google Tag Manger. 

To do so, you can open your website (the live website or the one on your computer in localhost) and check whether the Google Analytics Real-time user tracker is showing you as a real-time user. 
<img src="../../../media/hugo/google-tag-manager-hugo6.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:63%;height:63%;">

The “Users in Last 30 Minutes” counter should atleast be 1. Give it a little time. Sometimes, the counter changes after a minute of two. If it’s a new site then probably you will be the only one live on that site. You can also check the loaction to be doubly sure. 

If it does show 1 or more live users, then it means that you have successfully linked your HUGO site to Google Analytics via Google Tag Manger. 

{{% alert warning %}}
#### Troubleshooting

Sometimes, we see an error 404 in Developer Tools, that tells us that Google Tag Manger is not responding. It’s because of a very common mistake. It simply means that you have not published the container of your website in Google Tag Manager. That’s why it’s not returning any data. 

The solution is simple. Just publish the Google Tag Manger container after making it. 
{{% /alert %}}

