---
title: Block & Inline Elements
linktitle: Block & Inline Elements
toc: true
type: docs
date: "2020-09-05T00:00:00+01:00"
draft: false
menu:
  html-fundamentals:
    parent: HTML
    weight: 4

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 4
---

Every HTML element has a default display value - block and inline 

### Block-level Elements
* Always start on a new line 
* Take up the full width available 

### Inline Elements
* Does not start on a new line 
* Only takes up as much width as necessary

A block element can contain an inline element. But an inline element cannot contain a block-level element. 

We can change the visual presentation of an element using the CSS display property, say by changing the value of display from "inline" to "block“. But it will not change the basic nature of the element – we will still not be able to nest a block element inside an inline element.

HTML elements have always been categorized as either "block-level" elements or "inline-level" elements. But since this is a presentational characteristic it is nowadays specified by CSS. 

