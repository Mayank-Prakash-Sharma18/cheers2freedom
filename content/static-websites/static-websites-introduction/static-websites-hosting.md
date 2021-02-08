---
title: Hosting for Static Websites
linktitle: Hosting for Static Websites
toc: true
type: docs
date: "2021-01-09T00:00:00+01:00"
draft: false
menu:
  static-websites-introduction:
    parent: Static Sites 
    weight: 9

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 9
---

You have many options when it comes to hosting static websites made by using static site generators or otherwise by just plain old manual coding. As these sites do not need any server, their setup is super simple and as they do not consume much resources of the hosting provider, the hosting fee is pretty less and even free in many cases. 

Some of the hosting providers that you can consider are: Netlify, Google cloud, Github Pages, AWS etc. 

However, I prefer Netlify as it’s basically a content delivery network (CDN) and so putting my entire site on it makes it super-fast. It supports HUGO and Github. You just need to upload your site on Github and import the site in Netlify by just pressing a few buttons. It will rebuild the website using Hugo build command as soon as any change is committed to Github.	

