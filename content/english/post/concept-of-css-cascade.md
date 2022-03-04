---
title: "Concept of CSS Cascade"
date: 2022-02-27T15:40:24+06:00
# post thumb
images:
  - "images/post/css/specificity-weight.png"
#author
author: "Mayank Sharma"
# description
description: "Concept of CSS Cascade"
# Taxonomies
categories: ["css"]
tags: ["css-cascade"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

How CSS styles will be rendered depends on two factors:

* Placement of the style in CSS cascade

* Selector’s specificity weight

Let's study them one by one. 


## Placement of the style in CSS cascade

In CSS, all styles cascade from the top to the bottom in a style sheet. So, we can add different styles or overwrite the styles written above as we move down a style sheet.

Consider the following two cases:

CSS I:

```css
p {
  background: red;
  font-size: 18px;
}
p {
  background: blue;
}
```

CSS II:

```css
p {
  background: red;
  background: blue;
}
```

The style coming at the last will take precedence, so all of the paragraphs will have a blue background in both the cases. 


## Selector’s specificity weight

In CSS, every selector has a specificity weight.

* type selector - It has the lowest specificity weight. 
* class selector - It has a medium specificity weight. 
* ID selector - It has the highest specificity weight. 

<img src="../../../images/post/css/specificity-weight.png" alt="CSS selector's specificity weight" style="width:99%;height:99%;">

So, specificity weights are calculated using three columns:
* The first column: It counts ID selectors, 
* The second column: It counts class selectors, and 
* The third column: It counts type selectors.

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

Here we are not considering the inline styles. They have the highest specificity weight and override any selector's specificity weight. 
</div>

Let's consider one example:

HTML:

```html
<p class="mak">...</p>
```

CSS:

```css
/* Class selector */
.mak {
  background: red;
}

/* Type selector */
p {
  background: blue;
}
```

`<p>` is being selected by two different kinds of selectors: one type selector and one class selector. 

Class selector has a higher specificity weight. So, even though the type selector comes after the class selector in the cascade, the class selector will take precedence. The paragraph will have a red background.

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

To learn more about various types of CSS selectors, you may <a href="../types-of-selectors-in-css" title="Types of Selectors in CSS" class="mak-link">read this article of ours.</a>
</div>


## Specificity weight of nested selectors

When selectors are combined, their specificity weights also get combined. 

For example:

```css
#mak-id1 p {             
          font-size: 24px;
        }
```

`#mak-id1 p` – it has both an id selector and a type selector. So, their combined specificity weight will be (1-0-1). 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

To keep the specificity weights of our selectors low, we should use multiple classes, and layer on as many styles as we wish. It will keep our code simple and clean. 

For example:

HTML:

```html
<div class="common first">...</div >
<div class=" common second">...</div>
```

CSS:

```css
. common {
  font-size: 18px;
}
. first {
  background: blue;
}
. second {
  background: black;
}
```
</div>


<script src="../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../css/code-block-style.css">

