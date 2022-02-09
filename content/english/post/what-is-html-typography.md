---
title: "Introduction to HTML Typography"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-typography.jpg"
#author
author: "Mayank Sharma"
# description
description: "Learn the basics of HTML Typography"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-typography"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to learn about Typography in HTML. 

<div class="toc-mak">
<img src="../../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>Headings and Paragraphs</li>
<li>em, i, strong, b</li>
<li>Nesting</li>
<li>ins, u, del, s, mark</li>
</ul>
</div>

## Headings and Paragraphs

There are a number of different elements for displaying text on a web page. <br>
`<h>    <p>`

### Headings

Headings are block-level elements. They come in six different rankings, `<h1>` through `<h6>`. 

The primary heading of a page or section should be marked up with an `<h1>` element.

You should only have one `<h1>` per page/post - very important for on-page SEO. It helps search engines to index and determine the content on a page.

### Paragraphs

Paragraphs are defined using the `<p>` element. Paragraphs are block-level elements. 

<hr>

## em, i, strong, b

There are a number of different elements for displaying text on a web page. 

### Stress Emphasized Text 

`<em>` element - Inline-level element <br>
Used semantically to place a stressed emphasis on text (it should be read/spoken with emphasis). <br>
Stress emphasis - changing pitch and/or dragging the word to denote a special meaning to it. <br>
Placement of stress emphasis on a word/group of words changes the meaning of the sentence.

It’s used for a correction, clarification, sarcasm, the key part of a counter-argument, etc.

```html
“Call the <em>police</em> now!”       
(stress on police)

“Call the police <em>now</em>!”       
(stress on now)
```

`<em>` tags are normally used on a single word, maybe two, but we can sometimes use it on the whole sentence

```html
<em>We need to get out of here!</em>
```

### Italicize Text 

`<i>` element - used semantically to convey text in an alternative voice or tone. (No added emphasis or importance.) <br>
E.g. musical notation, poetry, technical terms, foreign words (e.g. an idiomatic phrase from another language), and typographically italicized text. 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

Some other italic-causing tags: cite element, blockquote element.
</div>

### Important Text

`<strong>` element - Inline-level element <br>
Semantically used to identify important text. 
It does not change the meaning of the sentence.

`<b>` element - used solely to change the presentation of an element. It has no semantic meaning. 

<hr>

## Nesting

We can use em and strong elements together too (as both are inline elements)

```html
<strong>Do not approach the electrified fence <em>under any circumstances.</em> </strong> 
```

As here em is a child of a strong element, its text will be both italicized and bold. This is how it will look like: <br>
<strong>Do not approach the electrified fence <em>under any circumstances.</em> </strong> 

You can style any text as bold or italic with CSS, as well as override the browser’s default styling of elements like strong and em. However, CSS will only style the text; it will not add any semantic meaning. 

### Nesting for stronger emphasis or importance

Stronger emphasis or importance is indicated by nesting. <br>
The importance of `strong` text increases each time it’s a child of another `strong`. <br>
The importance of `em` text increases each time it’s a child of another `em`. 

```html
<strong>Remember that unit testing is <strong>due on August 18th</strong>.</strong>
```

<hr>

## ins, u, del, s, mark  

There are a number of different elements for displaying text on a web page. 

### Inserted Text

`<ins>` element – to draw attention to text that has been inserted since a previous version of the document. It has a semantic meaning. 

This is how it will look: <br>
<ins>Newly inserted Text</ins>

`<u>` element – to underline text for presentation purposes. It adds no semantic meaning. 

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>A Caveat!</b><br>

Underlining text that is not a hyperlink can confuse users (by default hyperlinks are underlined. ). 
</div>

### Deleted Text

The `del` element is used to identify text deleted or removed from the document. So, it has a semantic meaning. 

This is how it will look: <br>
<del>Newly deleted Text</del>

The `s` element identifies text that is no longer accurate or relevant (for presentation purposes). It has no semantic meaning. 

E.g. Our new discounted price - <s>$50</s> $40

```html
<s>$50</s>
```

With `<del>` there is usually a version of the document that doesn’t include the `<del>` text. 
But with `<s>` there is no version of the document without the `<s>` text. It’s marked as old in the original document itself.


### Basic Usage Example - A "To Do" List

The `<ins>` tag can be used in a "to do" list to markup items that have been added to the list. 
Also `<del>` tag can be used to indicate that an item has been completed.

```html
<ol>
<li><del>Learn HTML</del></li>
<li>Get command over CSS</li>
<li>Familiarize yourself with Javascript</li>
<li><ins>Learn a framework, e.g. Angular</ins></li>
<li><ins>Start making apps using Ionic or React Native</ins></li>
</ol>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>See it in Action</b><br>

<ol>
<li><del>Learn HTML</del></li>
<li>Get command over CSS</li>
<li>Familiarize yourself with Javascript</li>
<li><ins>Learn a framework, e.g. Angular</ins></li>
<li><ins>Start making apps using Ionic or React Native</ins></li>
</ol>
</div>

### Block or Inline?

`<ins>` and `<del>` - they can contain phrasing content or flow content (i.e., they can be inline or block-level). 

```html
<!-- block-level ins -->
<ins>
  <!-- inline del -->
  <p>Today I learnt <del>HTML</del> typography. It was fun.</p>
</ins>
```

### Attributes

##### Date & Time

The datetime attribute allows you to add a date and (optionally) a time to the `<ins>` tag and the `<del>` tag . 

```html
<ins datetime="2009-08-18T00:00Z"> Inserted text... </ins>
```
This attribute is mainly intended for private use (e.g. by server-side scripts noting a site's edits, search engines). But it can also be displayed to users.

##### Citations

To add a citation we use - the cite attribute. 

Value of this attribute - URL of a document that explains the change (i.e. insertion or deletion). 

```html
<ins cite=“cheers2freedom.com/html" datetime="2009-08-18T00:00Z"> Inserted text... </ins>
```
This attribute is mainly intended for private use (e.g. by server-side scripts noting a site's edits, search engines). But it can also be displayed to users.

Apart from `ins` and `del`, the cite attribute can also be used on the following elements:
`<blockquote>` `<q>`

### Context based relevant Text

To highlight text for reference purposes (due to its relevance in another context) the mark element should be used. 

`<mark>` doesn't really have relevance to content, only context (e.g. marking content that matches a search term, misspelled words, selected content in a web app, etc.).

`em` or `strong` elements denote content that is felt important or worthy of emphasis by the original author. A `mark` element denotes content deemed relevant in some other context by a different author or as a result of user activity.

For example, we may highlight the keyword that the user searched in the search results:

```html
<p>Search results for “Sass":</p>

<hr>

<p>CSS with superpowers. <mark>Sass</mark> is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

<p> <mark>Sass</mark> is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</p>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>See it in Action</b><br>

<p>Search results for “Sass":</p>

<hr>

<p>CSS with superpowers. <mark>Sass</mark> is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

<p> <mark>Sass</mark> is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</p>
</div>


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">
