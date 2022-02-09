---
title: "What are Static Site Generators (SSG)?"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/static-site-generator-1.png"
#author
author: "Mayank Sharma"
# description
description: "This is a basic introduction to Static Site Generator (SSG)."
# Taxonomies
categories: ["website-creation","static-site-generator"]
tags: ["web-development"]
type: "popular" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to learn about Static Site Generators (SSG).

<div class="toc-mak">
<img src="../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>What is a Static Site Generator (SSG)?</li>
<li>What is a Static Website / Static Blog ?</li>
<li>Difference between a static and a dynamic site</li>
<li>How does a static site generator work?</li>
<li>Best Static Site Generators</li>
</ul>
</div>

## What is a Static Site Generator (SSG)?

Static Site Generators are tools that are used to build static websites, based on some input files. They are an essential part of ***JAMstack architecture***. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

JAMstack stands for JavaScript, APIs and Markup files. It’s an emerging stack of technologies that makes server-side processing redundant. 

With JavaScript becoming better with time, now many business logics can be put at the client-side itself. 

Moreover, for added functionalities and dynamism in the site we can use various APIs, that were not available a decade ago. 
</div>

But before we go deeper into Static Site Generators (SSG), we need to understand what a static website is? 


## What is a Static Website / Static Blog ?

In a static website, the static HTML pages are delivered to the end-user’s web browser as it is. That is, in the exact form as they are stored in the database. 


## Difference between Static and Dynamic site

### Static websites

In static websites, there is no server-side processing done. For this to happen, all the pages of the website that can be requested by an end-user are pre-built and stored in the database in advance. When any page is requested by a user, it’s simply served. 

For example, this article that you are reading is a static HTML page. It was already there in the database of my hosting provider. It was simply served to you when you clicked the concerned URL.  

### Dynamic websites

Unlike static websites, in a dynamic site there is a server that generates the requested pages on the fly. The HTML pages are not already stored in the database. Only the data is there. The server picks up the data from the database, processes that data and then does either of the following:

* ***Server-side rendering***: Here the server fills up the HTML templates with the processed data at the server side itself, and then just sends those HTML templates to the end-user’s web browser. <br>
It may sound a bit like what static site does, but it isn’t. Remember, in static site there is no server that fills up our HTML templates. Our static HTML pages are already stored as it is in the database. 

* ***Client-side rendering***: Here the server just sends the data in some form (e.g. as JSON files) to the client-side web browser and then the JavaScript code at the client side fills up the templates with the data. <br>
This is what single-page applications (SPAs) made using Angular, React, Vue do. This approach has various pros but its biggest con is that it’s very bad for SEO (Search Engine Optimization). SEO is heavily dependent on page/post URL and Google crawlers are not that good when it comes to deciphering JavaScript.  That’s why I never make my blogs using Angular. If I have to, I will rather choose server-side rendering. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

There’s a difference between Single Page Applications (SPAs) and websites/blogs having only one page. I have seen many newbies getting confused between the two. 

A SPA just loads one page to the user and then keeps on refilling that page with the data from the server. So, the page in a SPA loads only once. There is no reloading. It saves time and makes the website or app faster. 

(While in case of server side rendering or a static site, a whole new page will be reloaded each time the user clicks on a new page/post link.)

Websites with just one page are simply just that. A website having only one home page. For example, websites of many real estate agents, resume websites etc. It has nothing to do with SPAs. 
</div>

Okay, having cleared what static sites are, let us now return to the main topic at hand – What are static site generators, how they work and whether we should build our website/blog using them. 


## How does a static site generator work? 

Static Site Generators fill in the data and content in the templates. But they do so during ***build time*** and not in real time. 

For example, if you are using HUGO static site generator, then you will write your posts and pages as markup files. When you will push your website to the hosting provider, say Netlify, then it will run HUGO site building command and build your whole website. It will convert all your markup files to HTML files and save it in its database. 

<img src="../../../images/post/hugo/static-site-generator.png" alt="static site generator functioning" style="width:99%;height:99%;">

Now, if any user requests a page, it will just serve that HTML page to the user.
While in case of dynamic websites, the pages and posts are filled with data and content only when the user requests for that page/post. This is one of the reasons that static websites are lightning fast. 


## Best Static Site Generators

You may have a look at all the available static website generators here on <a href="https://www.staticgen.com/" target="_blank" class="mak-link">this website</a>  

Here’s our list of some of the best static site generators:

* ***HUGO*** – It’s an open-source static site generator made by Google in Go language. It has been in the market for long and has good community support. <br><br>
You can host it in Netlify or any other hosting service that supports static sites. Also, you can use CMS like Forestry or NetliflyCMS, if you have a team that’s more comfortable in working with a GUI (graphical user interface). <br><br>
Personally, I prefer working on VS Code on my computer, rather than using any CMS. The only downside to using HUGO is the Go language which is not that popular, but it has not stopped me from using HUGO, which is a SSG that I use for most of my websites. 

* ***Scully*** – It’s an evolving static site generator that is based on Angular. As I am an Angular guy, this is what would have been my first choice. But it’s relatively new and I am waiting for it to evolve a bit further. It can be a good option if you want to render your Angular Single Page App (SPA) as static website. <br><br>
To read more about Scully you can go to their <a href="https://scully.io/" target="_blank" class="mak-link"> website </a>  or <a href="https://github.com/scullyio/scully" target="_blank" class="mak-link"> github page </a>. 

* ***Gatsby*** – Gatsby is as popular as HUGO. It’s also a great option for people already familiar with React. Believe me! You will find a great community support with anything related to React. 

Some other good static site generators are ***Eleventy*** and ***Jekyll***. Eleventy is made using JavaScript and Jekyll is one of the oldest SSGs out there. 


## Winding Up

Building websites using Static Site Generators is in trend now and it’s only going to grow in future. It’s because it offers us the best of both worlds. Static sites are ***fast, yet safe***. 

If you are using Wordpress then you will have to put in a lot of effort to make your site safe and fast. In Wordpress there are numerous plugins to safeguard your site, take its backup on regular basis and make it faster using cache. But none of them are perfect. Especially, if you have used cache plugins in Wordpress, you will know how big a headache they are. 

Static websites are fast by default because we can ***host the entire website on a content delivery network (CDN)***. The fact that there is ***no server involved*** and the static pages of the website are just stored on the hosting service make static websites super safe by default. And did I mention that the ***hosting for static websites is free!*** Netlify also provides free SSL certificate. 

If you think that you need to be a super coder or a technical expert to set up a static website using a static website generator, you will be entirely wrong. I mostly use HUGO which is made in Go language, which I hardly know. So, just as you need not know PHP to setup a Wordpress blog, you don’t need to know Go, HTML, CSS or JavaScript to use static site generators. But if you know some HTML, CSS and JavaScript it will help you, just as in Wordpress. 

I won’t deny that there is some learning curve, just as is the case with Wordpress. You will need to know some basic mark-up, using command line, etc. But you may easily do so in a month or two. You may read my HUGO static site generator segment, where I have written all the things I did to setup my blogs, from installation to customization of the themes. 

Once you setup your static website, all you need to do is to work on your computer using ***VS Code*** and push the changes to Github using 3 commands. That’s it. You need not worry about the safety of your website, technical SEO (which is majorly about reducing the load time of your pages/posts) or regular backups of the site. 

You will be amazed how smooth the setup runs. Give it a try and let us know what you think about all this in the comment section. 
