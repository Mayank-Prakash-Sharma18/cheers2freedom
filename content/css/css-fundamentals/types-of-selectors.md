---
title: Types of Selectors 
linktitle: Types of Selectors   
toc: true
type: docs
date: "2020-09-03T00:00:00+01:00"
draft: false
menu:
  css-beginner:
    parent: CSS
    weight: 3

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 3
---

We can target HTML element(s) in three ways:

* Using Type Selector
* Using Class Selector – more precise than type selector
* Using ID Selector – even more precise than class selector

## Using Type Selector

We select all the HTML elements of a certain kind using this.

E.g. to select all `<h2>` subheadings on a page:

```
h2 {
 // Our CSS style
}
```

<br>

## Using Class Selector

We select all the HTML elements having the same class attribute value using this. 

We can select different HTML elements using this.

E.g. to select all `<h2>` subheadings and `<div>` elements having the class 'mak' on a page:

HTML:
```
<div class=“mak”> ... </div>
<p class=“mak”> ... </p>
```

CSS:
```
.mak {
 // Our CSS style will be applied to all the <h2> and <div> elements having the class attribute value of ‘mak’
}
```
<br>

## Using ID Selector

We select only one HTML element having a unique id attribute value using this. 

We cannot have duplicate id attribute values on a single HTML page. That is, unlike class attribute value, any id attribute value can be used only for one HTML element on a page. No other HTML element on that HTML page should have the same id attribute value. 

E.g. to select `<p>` element having the id ‘mak’ on a page:

HTML:
```
<p id=“mak”> ….. </p>
```

CSS:
```
#mak {
 // Our CSS style will be applied to the <p> element having the id attribute value of ‘mak’
}
```

<br>

## Multiple Selectors

Multiple Selectors - selecting HTML elements with various IDs, Classes, or by Element names 

For example:

```
#mak-id1, #mak-id2, .mak-class2, h4 {
          border: 2px solid rgb(161, 88, 88);
          padding: 10px;
          margin-bottom: 20px;
        }
```

## Nested Selectors

While selecting multiple elements we use comma, here we do not. 

For example:

```
#mak-id1 p {             
          font-size: 24px;
        }
```

It basically means that we are selecting the `<p>` elements inside the HTML element having 'mak-id1' id 

When selectors are nested/combined they should be read from right to left. The selector just before the opening curly bracket, is known as the key selector, which identifies exactly which element the styles will be applied to. Selector(s) to the left of the key selector act as prequalifiers.

