---
title: "What is HTML Hyperlink?"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-hyperlink.jpg"
#author
author: "Mayank Sharma"
# description
description: "Learn the basics of HTML Hyperlink"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-hyperlink"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to learn about Hyperlinks in HTML. 

<div class="toc-mak">
<img src="../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>Hyperlink</li>
<li>Relative and Absolute Paths</li>
<li>Linking to parts of the same page</li>
<li>Attributes of Hyperlink element</li>
</ul>
</div>

Hyperlink - provides the ability to link from one web page or resource to another.
Made using the anchor element - `<a>` <br>
It is an inline-level element.

href attribute – its value is a path that identifies the destination of the hyperlink

```html
<a href=“https://cheers2freedom.com”>HTML Course</a>
```

Anchor element, `<a>`, is an inline element. Inline-level elements may not wrap block-level elements. 
However, in HTML5, anchor elements specifically have permission to wrap either block-, inline-, or any other level elements. 
So entire blocks of content/image on a page can become links:

```html
<a href="https://cheers2freedom.com">
<h2>HTML Course</h2>
<h3>Lesson 10: Hyperlinks</h3>
</a>
```

```html
<a href="https://cheers2freedom.com">
<img src="click-here-image.webp">
</a>
```


## Relative and Absolute Paths

Linking to pages/posts on other websites requires an absolute path - href attribute value must include the full domain.

```html
E.g. <a href=“https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types”>More on links</a>
```

Links pointing to other pages of the same website can have a relative path - href attribute value needs to include only the filename of the page being linked to. No need to include the domain (.com, .org, .edu, etc.)  

```html
E.g. <a href=“course-details.html”>HTML Course</a>
```

If the page being linked to reside within a different directory/folder, the href attribute value needs to reflect this as well.

```html
E.g. <a href=“pages/course-details.html”>HTML Course</a>
```


## Linking to parts of the same page

E.g. Back to top links, Sub-heading links 

First set an id attribute on the element you wish to link to.

```html
<h2 id="first-subheading">My sub-heading number 1</h2>
```

Then use the value of that id attribute within an anchor element’s href attribute.

```html
<a href="#first-subheading">Go to first subheading</a> 
```

To create a link that leads to nowhere (kind of a placeholder link):

```html
<a href="#">Remain on the same page</a> 
```

<hr>

## Attributes of Hyperlink element

### Target Attribute

We can determine where a link opens when clicked:

Default behaviour - links open in the same window/tab

To open a link in a new window - use the target attribute with a value of _blank 

```html
E.g. <a href=“https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types” target=“_blank”>More on links</a>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

    _self is the default value of target attribute.
</div>

### Relationship Attribute

rel attribute - identifies the relationship between the current document and the document being referenced.

Various values of rel attribute: 
* copyright - When linking to a copyright statement.

```html
<a href=”legal.html" rel="copyright">Terms of Use</a>  
```

* nofollow - When you do not want the spiders of search engines to provide any additional weight or ranking to the destination of that hyperlink. 

```html
<a href="https://www.w3schools.com/html/html_links.asp" rel="nofollow">More about links…</a>  
```

### Title Attribute

title attribute - specifies extra information about an element. (tooltip text)

```html
<a href="https://www.cheers2freedom.com/html/" title=“HTML Course">Visit our HTML Tutorial</a>
```
Hover your mouse over the link below: <br>
<a href="#" title="HTML Course" class="mak-link"> Visit our HTML Tutorial </a>


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">
