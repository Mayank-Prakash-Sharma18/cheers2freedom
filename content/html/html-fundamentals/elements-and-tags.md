---
title: HTML Elements and Tags
linktitle: Elements and Tags
toc: true
type: docs
date: "2020-05-05T00:00:00+01:00"
draft: false
menu:
  html-fundamentals:
    parent: HTML
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

Elements are markups that define the structure of objects within a page. 
E.g. Heading element types – h1, h2 etc <br>
Paragraph element type - p
<img src="../../../media/html/tag-and-element.png" alt="Tag and Element" style="width:200px;height:200px;">
The use of angle brackets (less-than and greater-than) surrounding an element type creates what is known as a tag. <br>
E.g. Heading tags – `<h1> <h2>` etc <br>
Paragraph element - `<p>`

Tags most commonly occur in pairs of opening and closing tags.
<img src="../../../media/html/opening-and-closing-tag.png" alt="opening and closing tag" style="width:400px;height:200px;">
An opening tag marks the beginning of an element. <br>
A closing tag marks the end of an element.  <br>
The content that falls between the opening and closing tags is the content of that element. 

## Self Closing Tags 

Not all elements consist of opening and closing tags. Some elements simply receive their content or behavior from attributes within a single tag. (Remnant of XHTML)

```toml
<br>     Valid in HTML5
<br/>   Valid in HTML5 & XHTML
```

Such HTML elements have no content. So, these elements are called empty elements. <br>
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

## Attributes

Attributes are properties used to provide additional information about an element. 
Attributes are defined within the opening tag, after an element’s name. 
Format: attribute name = attribute value. 
For example:
<img src="../../../media/html/attribute.png" alt="attribute" style="max-width:100%;">

The most common attributes include: 
* the id attribute, which identifies an element
* the class attribute, which classifies an element
* the src attribute, which specifies a source for embeddable content, e.g. an image in `<img>` tag
* the href attribute, which provides a hyperlink reference to a linked resource, e.g. in `<a>` tag.

## Important Tips

* Do not forget to put the End Tag where it’s required. Unexpected results and errors may occur.
* HTML is not case sensitive. But as far as possible always use lowercase tag names.

<div class="alert alert-note">
  <div>
    This HTML course follows the latest HTML5 standard.
  </div>
</div>
