---
title: "Embedding Image in HTML page"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-images.png"
#author
author: "Mayank Sharma"
# description
description: "Learn how to embed images HTML page"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-images"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

In this article, we are going to learn how to embed images in a HTML document. 

<div class="toc-mak">
<img src="../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>Embedding Image in HTML page</li>
<li>Attributes</li>
<li>Figure Caption</li>
</ul>
</div>

To add images to a page - we use `<img>` inline element <br>
It is an ***empty element*** - it doesn’t wrap any other content and exists as a single tag.

***src attribute*** - its value specifies the source of the image

```html
<img src="pulsar.jpg">
```

If you have your images in a sub-folder, you must include the folder name in the src attribute:

```html
<img src="/images/pulsar.jpg">
```

We can access images from any web address in the world:

```html
<img src="https://source.unsplash.com/1600x900/?nature,water">
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>See this in Action</b><br>

<img src="https://source.unsplash.com/1600x900/?nature,water">
</div>

<hr>

## Attributes

### alt Attribute

alt (alternative text) attribute - describes the contents of an image. 

```html
<img src="pulsar.jpg" alt="A pulsar star">
```

Significance:
* Essential for ***SEO*** - alt attribute value is picked up by search engines’ spiders as it conveys the purpose of an image. 
* The alt text is displayed in place of the image if for some reason the image is not available.

### style attribute 

style attribute - to specify the width and height of an image.

```html
<img src="pulsar.jpg" alt="A pulsar star“ style="width:500px;height:600px;">
```

<hr>

## Figure Caption

`<figure>` block-level element - used to semantically markup and wrap self-contained content (often media), e.g. images, audio clips, videos, blocks of code, diagrams, illustrations etc. 

More than one item of self-contained content may be contained within the `<figure>` element.

`<figcaption>` element - adds a caption to the `<figure>` element. Can be used instead of `<img>` element’s alt attribute  

```html
<figure>
<img src="pulsar.jpg">
<figcaption>A beautiful pulsar star.</figcaption>
</figure>
```

The `<figcaption>` may be used anywhere within the `<figure>` element, but it may only appear once. 


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">
