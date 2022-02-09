---
title: "Introduction to HTML and its Basic Concepts"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-introduction.png"
#author
author: "Mayank Sharma"
# description
description: "Learn the basics of HTML - HyperText Markup Language"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-basics"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to present to you the very basics of HTML. 

<div class="toc-mak">
<img src="../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>Introduction to HTML</li>
<li>em, i, strong, b</li>
<li>Nesting</li>
<li>ins, u, del, s, mark</li>
</ul>
</div>

## Introduction to HTML

It's a ***Markup language*** for creating webpages - It describes the structure of a web page. 

Structure is defined by using a series of elements, which tell the browser how to display the content.
E.g. it tells the browsers what element on the page is a heading, paragraph, image etc.

```html
<h1> Heading </h1>
<p> Paragraph </p>
```

HTML is ***not a programming language***. It’s a language that browsers can understand!

<img src="../../../images/post/html/html-without-css.png" alt="html without css">
<p style="text-align:center;"> HTML without CSS looks ugly, like a car without paint! </p>

To better put HTML in place in the whole development stack, you must also be aware of other possible languages too, that you will most likely use with HTML. Let's see a few of them. 

### CSS

Presentation or ***Styling Language*** - Used for styling HTML elements <br>
E.g. using fonts, colors, alignment etc. 

<img src="../../../images/post/html/html-with-css.png" alt="html with css" style="width:81%;height:81%;">

```html
<h1 style="color:DodgerBlue;"> Heading </h1>
<p style="color:Tomato;"> Paragraph. </p>
```

It can be extended with Sass/Less.

### Programming languages

* `HTML` - For Content Display/Structure
* `CSS` - For Style & Design
* `JavaScript` - For Dynamic Frontend Programming
* JavaScript, PHP, Python - For Backend Programming
* MySQL, MongoDB - For Database/Storage

Any web-technology has to factor in HTML & CSS, as the visual part of any website is made using them. 

If only HTML & CSS are used, such site a site will be called a static website. 


### Development Environment

* **Web Browser** - We will use Google Chrome for HTML & CSS course.
* **Text Editor** - We will use VSS Code.

Now, let's have a look at the broad categories of elements that you will find in HTML. 


## HTML Elements and Tags

***Elements are markups*** that define the structure of objects within a page. <br>
E.g. Heading element types – `h1`, `h2` etc 

Paragraph element type - `p`

<img src="../../../images/post/html/tag-and-element.png" alt="Tag and Element" style="width:54%;height:54%;">

The use of angle brackets (less-than and greater-than) surrounding an element type creates what is known as a ***tag***. <br>
E.g. Heading tags – `<h1> <h2>` etc <br>
Paragraph element - `<p>`

Tags most commonly occur in pairs of opening and closing tags.
<img src="../../../images/post/html/opening-and-closing-tag.png" alt="opening and closing tag" style="width:90%;height:90%;">

An opening tag marks the beginning of an element. <br>
A closing tag marks the end of an element.  <br>
The content that falls between the opening and closing tags is the content of that element. 

### Self Closing Tags 

Not all elements consist of opening and closing tags. Some elements simply receive their content or behavior from attributes within a single tag. (Remnant of XHTML)

```html
<br>     Valid in HTML5
<br/>   Valid in HTML5 & XHTML
```

Such HTML elements have no content. So, these elements are called ***empty elements***. <br>
Some common self-closing elements:

<table style="width:100%">
  <tr>
    <th> br </th>
    <th> link </th>
    <th> hr </th>
    <th> img </th>
    <th> meta </th>
  </tr>
</table>

### Attributes

Attributes are properties used to provide additional information about an element. 
Attributes are ***defined within the opening tag***, after an element’s name. 

***Format***: attribute name = attribute value. 

For example:
<img src="../../../images/post/html/attribute.png" alt="attribute" style="width:99%;height:99%;">

The most common attributes include: 
* the id attribute, which identifies an element
* the class attribute, which classifies an element
* the src attribute, which specifies a source for embeddable content, e.g. an image in `<img>` tag
* the href attribute, which provides a hyperlink reference to a linked resource, e.g. in `<a>` tag.

### Important Tips

* Do not forget to put the End Tag where it’s required. Unexpected results and errors may occur.
* HTML is ***not case sensitive***. But as far as possible always use lowercase tag names.

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

    This HTML course follows the latest HTML5 standard.
</div>

<hr>

## Block and Inline Elements

Every HTML element has a default display value - block and inline 

### Block-level Elements

* Always start on a new line 
* Take up the full width available 

### Inline Elements

* Does not start on a new line 
* Only takes up as much width as necessary

A block element can contain an inline element. But an inline element cannot contain a block-level element. 

We can change the visual presentation of an element using the CSS display property, say by changing the value of display from "inline" to "block“. But it will not change the basic nature of the element – we will still not be able to nest a block element inside an inline element.

HTML elements have always been categorized as either "block-level" elements or "inline-level" elements. But since this is a presentational characteristic, it is nowadays specified by CSS. 

Inside HTML elements, we often use tags. Let's see. 

<hr>

## HTML Document Structure

All HTML documents have a defined structure that includes these elements:

`<!DOCTYPE html>,   <html>,   <head>,   <body>`

### The document type declaration 

Informs web browsers which version of HTML is being used. Placed at the very beginning of the HTML document. This course follows the latest version of HTML - ***HTML5*** standard.

So, our document type declaration is `<!DOCTYPE html>` 
<img src="../../../images/post/html/html-document-structure.png" alt="html document structure" style="width:99%;height:99%;">

### `<html>` element 

It is the root element of an HTML page. HTML document begins with `<html>` and ends with `</html>`.

### `<head>` element

* Inside the `<html>` element
* Identifies the top of the document. Contains ***meta information*** about the HTML page.
* The content inside the `<head>` element is ***not displayed*** on the web page.

### `<body>` element

* Inside the `<html>` element
* Identifies the body of the document.
* All of the ***visible content*** within the web page lies within the `<body>` element. 

<hr>

## Nested Elements

HTML elements can be nested - i.e. HTML elements can contain other elements

```html
<!DOCTYPE html>
<html>
  <head>
     <meta charset="utf-8">
     <title>Cheers2Freedom</title>
  </head>
  <body>
     <h1>New Heading</h1>
     <p>New Paragraph.</p>
  </body>
</html>
```

When elements are nested, indent them to keep the document structure well organized and legible. 

<hr>

## HTML & CSS Comments

HTML comments start with `<!--` and end with `-->` 

CSS comments start with `/*` and end with `*/`

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Useful VS Code Shortcuts</b><br>

To insert boilerplate html code: `! + tab`      OR     `! + enter`  

To comment out any line or multiple lines: `ctrl + /`

Autoformat: `alt + shift + f` 
</div>

<hr>

## Semantic HTML

We need to learn about which HTML elements are best used for which type of content.

There are two aspects to it:
* We need to understand how elements are visually displayed on a web page - For end user experience
* We need to understand what different elements mean semantically - For browser, search engines etc.

Semantic code ***describes the meaning of content*** on a page, regardless of the style or appearance of that content. 

Semantic code encourages web designers to write code that describes the content rather than how that content should look.

<br>

<div class="mak-embed-container">
<iframe width="100%" height="100%"
title="Introduction to HTML and CSS (in English)"
src="https://www.youtube.com/embed/-_q5Yu-ZdoI" frameborder="0" allowfullscreen>
</iframe>
</div>

<br>

<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">
