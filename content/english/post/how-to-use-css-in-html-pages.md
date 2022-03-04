---
title: "How to use CSS in HTML pages?"
date: 2022-03-02T15:40:24+06:00
# post thumb
images:
  - "images/post/css/using-css-in-html.png"
#author
author: "Mayank Sharma"
# description
description: "How to use CSS in HTML pages?"
# Taxonomies
categories: ["css"]
tags: ["css-in-html"]
type: "regular" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

CSS (Cascading Style Sheets) - It's a presentation language. 

So, while HTML provides meaning to the content. CSS styles the appearance of content.

HTML & CSS should be kept separate. It's a good coding practice. 


## Applying CSS

***Step 1***: Choose the HTML element(s) to which you want to apply the style → Using a selector <br><br>
E.g. the following will select all the paragraph elements on the page.<br>

```css
p { 
 // Our CSS style
}
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

We can be more specific by using class and id attributes in the HTML elements and targeting them in the CSS. To learn more about them, you may <a href="../types-of-selectors-in-css" title="Types of Selectors in CSS" class="mak-link">read this article of ours.</a>
</div>

***Step 2***: Apply the styles to the selected HTML element(s) → Using a property-value pair

E.g. the following will set the font-size, color and background color in the `<p>` (paragraph) elements.

```css
p { 
    font-size: 17px;
    color: white;
    background-color: #a39d9d; 
}
```

<br>

## How to link HTML and CSS

It can be done in three ways:

### External CSS file

Include all of styles in a single external style sheet, and refer that from within the `<head>` element of HTML document. It allows us to use the same styles across an entire website and make sitewide changes by editing just one CSS file. (best practice)

In our HTML file, we will link the external CSS file as follows:

```html
<head>
    <link rel="stylesheet" href="path of the external CSS file">
</head>
```

### Internal CSS 

Putting our CSS code inside `<style>...</style>` element in the same HTML file. (to be avoided)

For example, in our HTML file:

```html
<!-- Internal CSS -->    
<head>
    <style>
        h2 {
            color:green;
        }
    </style>
</head>
```

### Inline CSS 

Putting our CSS code inside the HTML element tag itself. (to be avoided; worst practice)

For example, in our HTML file:

```html
<!-- Inline CSS -->
    <h1 style="color:aqua">Cheers 2 Freedom</h1>
    <p style="color:blue; font-size:14px;">Welcome to the course on CSS.</p>
```

## CSS Comments

HTML comments start with `<!--` and end with `-->`. 

CSS comments start with `/*` and end with `*/`.


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">

