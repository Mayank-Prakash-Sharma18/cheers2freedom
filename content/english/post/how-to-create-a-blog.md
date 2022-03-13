---
title: "How to create a Blog or Website?"
date: 2022-03-12T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/create-website.png"
#author
author: "Mayank Sharma"
# description
description: "This is a basic introduction to various Website Creation options."
# Taxonomies
categories: ["website-creation","static-sites"]
tags: ["web-development","create-blog"]
type: "popular" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we will have a look at some of the most common ways to create a blog or website, even if you are not a coding expert or very tech-savvy. 


## Various methods to create a website / blog

There are various ways in which you can get your website or blog up and running. It will depend on the kind of website you want to create, the kind of technical expertise you or your team has, the amount of resources you want to invest (both manpower and time), and also on the amount of customization and control you want to have on your website. 

Let’s see the options that we have at our disposal. 

<div class="toc-mak">
<br>
<b>Table of Contents</b> <br> <br> <br>
<ul>
<li>Use Coding</li> <br>
<li>Content Management System (CMS)</li> <br>
<li>Static Site Generators</li> <br>
<li>Benefits of Static Site Generators</li> 
</ul>
</div>

## Use Coding

This is the most traditional and oldest method to make a website. Most of the famous, large-scale websites are made by a team of technical experts (software experts). 

As a software engineer this is what I used to do for my software company. A software company gets clients and then make agreements with them. The software development life cycle is followed to ensure quality. For example, we worked on a website that our company (Perot Systems) developed for the Bank of Ireland. You can only imagine how big a website for bank must be and how many quality checks it has to pass through. A small error may cause millions of dollors of losses and litigations. 

But if you are a software developer, or have some knowledge of coding, you can create a small website yourself. For example, I have created an online test platform for one of my clients using Angular framework (JavaScript) and Ionic at the front-end. 

Here you will have to choose the technology stack you are going to use, i.e. what language are you going to use at the front-end, at the backend (server), the database that you will use etc. For an individual or a small team it will mostly depend on their limited skill-set. For example, I mostly use JavaScript at both the front-end and the back-end (nodeJS). With it I either use MongoDB or Firebase. 

I prefer to use Ionic with Angular framework as I can use one code base to publish my site on the internet, as well as make both iOS and Android apps. It’s fast and easier to maintain. But if you have expertise or a bigger team you may opt for more native languages like Java for Android and Swift for iOS. Google’s Flutter is also worth exploring. 

While coding a website, you have the following options:

* Create a ***dynamic website*** – A dynamic website is one which can adapt to user inputs, e.g. form submission by a user and storing it in the database, in amazon website customers are shown those products that they are more likely to buy, based on their past behaviour etc. <br><br>
To create a dynamic website, we need a server. Now, we can either go for client-side rendering or server-side rendering. <br><br>
In ***client-side rendering***, the server takes the data from the database, applies server-side logic to it and then sends the information to the client-side in the form of JSON, XML etc. <br><br>
While in ***server-side rendering***, the server not only gets the data from database, applies server-side logic to it, but also creates HTML pages on the server side itself, and then these pages are sent to the browsers (client-side). Just as Angular and React are client-side frameworks/libraries in JavaScript, there are various server-side libraries available too that can help you in server-side rendering. Same is true for most other server-side languages. 

* Create a ***static website*** – If you do not intend to add too much functionality in your website, then you can go for a static website (rather than a dynamic website). For example, if you want a blog where you will only upload articles. But you should not opt for this option if you want to create a much more complex website, say an e-commerce website or a website where you intend to add a lot of customized functionalities. <br><br>
Having said that, I must also point out that now JavaScript has become much more powerful and you can add many functionalities on the client-side itself by just using JavaScript. Moreover, now many APIs are available which you can use to add many more features to your static websites, e.g. you can use an email service for form submission in your ‘Contact Us’ section, or show Google Maps etc. <br><br>
In static websites, we do not have a server. The HTML pages already exist in the database of your hosting provider and are sent to the browser as it is. It makes our site safer to cyber-attacks and much faster.  <br><br>
You can either code your static site yourself using HTML, CSS and JavaScript, or use some static site generator. We will study about static site generators in this article down below. 

Well, enough with technical bickering! 

All this might sound Latin and Greek for most of the people with no technical background. So, now let us dive into other options that are available in the market. Because this article’s aim is to empower even those individuals with no or minimal coding expertise, to make their own blog. 


## Content Management System (CMS)

A content management system (CMS) is a software available online, which helps users create, manage, and modify content on a website. They can do so just by using a user interface (by dragging, dropping, editing) and need not look into the code. So, even people with non-technical background can get their website/blog up and running using a CMS. 

There are various content management systems in the market. For example, ***Wordpress, Joomla, Blogger, Wix*** etc. Which CMS we should choose depends on our needs. 

### Wordpress

It is the most famous CMS in the market. Millions of websites have been made using this CMS and they are going to rise further. If you will join any Digital Marketing course, then more often than not this is the platform where they will ask you to create your first website. 

Though there’s some learning curve involved even here, you will gain expertise in it in a month or two. Wordpress uses PHP language on the server side and MySQL as database. If you have knowledge of these technologies then you can create themes and plugins and troubleshoot any issue that comes up with your website. 

But even if you have no idea as to what PHP and MySQL is, it doesn’t matter. That’s the beauty of it. You can still make beautiful blogs and websites. You just have to learn how to use its user interface and learn the dos and don’ts of the trade. There are thousands of free and premium themes and plugins available for you. You just have to click some buttons and you can add any feature in your website. 

Apart from Wordpress, there are other options available too. For example, I created my first website on Wix. You can also use Blogger, wordpress.com etc. These are much easier to use than wordpress.org, but the amount of customization you can do is very limited too. Here you cannot look at the source code of your website files and in most cases cannot choose the hosting and domain name provider of your choice. 

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>Warning</b><br>

There are two versions of Wordpress:<br>

* wordpress.org
* wordpress.com <br>

When we talk about Wordpress, we are generally talking about wordpress.org. It allows us much more control over our website and has much more plugins to offer. 

As far as wordpress.com is concerned, it’s a bit more like Wix and Blogger. Much less options and functionalities to offer, but easier to use and mange. 
</div>


## Static Site Generators

This is an option that falls somewhere in the middle of the above two options. While coding your website needs a lot of resources and time, using CMS like Wordpress has its pitfalls too. If you just want to run a simple blog, then static site generators may be a good option for you. This site (cheers2freedom.com) has also been made using a static site generator. 

Believe me, if all you want to do is to make a blog with some basic features like ‘Contact Us’ form, subscription service to get emails (for email-marketing) etc., then coding your website or using a CMS like Wordpress is a huge overkill. When it comes to website creation, static site generators are my first choice. 

Let us see the benefits of using static site generators.


## Benefits of Static Site Generators

### Why is a static site generator better than coding your own website?

* ***Less time consuming to make***: Yes, you can make a static site by using HTML, CSS and JavaScript. But the drawback to this approach is that, you will most probably have to create your own theme first. It’s very time-consuming. While using a static site generator, you can make your site in a jiffy. 

* ***Easier to manage***: It’s much easier to manage a large site that has been made using a static site generator. Imagine you have a static site having 1000 pages and posts. Now, if you have made those pages individually, and you want to change the header of your website, then you will have to make that change manually in all those 1000 pages. So, a static website becomes harder to manage as it grows in size. That’s where static site generators come in. <br><br>
If you have made your site using some theme of a static site generator, then you just need to make change at one place, and that change will be reflected throughout the website. 

### Why is a static site generator better than using a CMS like WordPress?

* ***Speed***: We all know that speed of your site matters for Technical-SEO (search engine optimization). Google favours the sites that load faster in the browsers. <br><br>
If you just intend to create a simple blog, then believe me Wordpress is an overkill. It’s too slow! <br><br>
A static site is one where there is no server involved. All the pages are already there in the database of your hosting provider. They just need to be presented to the client-side as they are. It makes a static site much faster, than any website that involves server-side pre-processing. For example, if you use HUGO static site generator and host your blog in Netlify, then the pages of your site are built by Netlify as soon as your site is uploaded or modified. And then they are just presented to the end-user whenever demanded. <br><br>
Moreover, you can ***host your whole static website on a content delivery network (CDN)***. It makes our website lightening fast. So, as far as technical-SEO is concerned, your blog is way ahead of any WordPress blog already. You ***need not use any cache*** and deal with their complexities and bugs. We all know what pain in the behind these cache plugins are in WordPress. 

* ***Safety***: One of my WordPress site got hacked because I had not updated one of my plugins (Elementor page builder) for a few months. I acknowledge, it was my fault and I had not worked much on that website. But it sent shivers down my spine. <br><br>
Imagine, you work on a website for years and then one day you get to know that someone has deleted and corrupted all the files in the database. A travesty! WordPress is a very famous platform and so the hacking attempts are also large in number. <br><br>
To avoid this, we use security plugins and keep taking backups of our websites. Though if you are using a good hosting service, e.g. Bluehost or SiteGround etc., they also keep taking backup of your sites. But the fact is, anything can go wrong, may be because of hacking or due to some glitches during updation of your theme or plugins. And in such a case, either you will have to do research on your own or call up your hosting provider and maybe pay some money too to get things right. <br><br>
Static sites do not suffer from such problems. ***There is no server***, and as most of the hacking attempts are aimed at the server, we have already dodged a bullet. You just need to use two-factor authorization in your domain name provider, hosting and github. That’s all. <br><br>
Moreover, as you will learn in the Static site (HUGO) section of this website, our static site is always on our local computer. We work on it and once we are satisfied, we just push all the changes to Github, which in turn updates the hosting provider automatically. Your website is already on your local computer. So, ***no need to take any backup***. 

* ***Free Hosting*** – Though not a big factor, but it may be an important point to consider for absolute beginners who do not want to invest much (e.g. students, hobbyists etc.), or if you have a lot of blogs. You can host your static websites for free on most of the hosting providers (e.g. on Netlify, Github etc). You need not pay a penny! All you need to pay is the annual cost for your domain name. <br><br>
Any site that requires a server, e.g. any blog on Wordpress, needs to have a server and so needs a paid hosting. 


## Winding Up

I hope this article was successful in shedding some light on the various options you have at your disposal, when it comes to website or blog creation. The option you take will depend on your skill-set, comfort with technology, customization needs and your priorities. 

As far as I am concerned, I have made sites using various CMS, e.g. Wix, Blogger, Wordpress etc. I still have a couple of my live websites on Wordpress. I have also made some websites and apps using JavaScript. But for bulk of my websites/blogs I prefer static site generators. It’s super-fast, safe and I need not take regular site backups. It’s more than sufficient when it comes to creating a simple blog. 

Let us know what you prefer and why. 

