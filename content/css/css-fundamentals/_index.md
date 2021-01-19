---
# Course title, summary, and position.
linktitle: Introduction to CSS
summary: This is a basic introduction to CSS.
weight: 1

# Page metadata.
title: Overview
date: "2018-09-09T00:00:00Z"
lastmod: "2020-08-18T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  css-beginner:
    name: Overview
    weight: 1
---

## CSS Basics

CSS (Cascading Style Sheets) - a presentation language. It styles the appearance of content.

HTML provides meaning to the content. 

HTML & CSS should be kept separate.

## Applying CSS

Step 1: Choose the HTML element(s) to which you want to apply the style → Using a selector <br><br>
E.g. the following will select all the paragraph elements on the page.<br><br>
```
p { 
 // Our CSS style
}
```
{{% alert note %}}
We can be more specific by using class and id attributes in the HTML elements and targeting them in the CSS. 
{{% /alert %}}

Step 2: Apply the styles to the selected HTML element(s) → Using a property-value pair

E.g. the following will set the font-size, color and background color in the <p> (paragraph) elements.

```
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

In our HTML file:
```
<head>
    <link rel=“stylesheet” href=“path of the external CSS file”>
</head>
```

### Internal CSS 
Putting our CSS code inside `<style>...</style>` element in the same HTML file. (to be avoided)

For example, in our HTML file:
```
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
```
<!-- Inline CSS -->
    <h1 style="color:aqua">Cheers 2 Freedom</h1>
    <p style="color:blue; font-size:14px;">Welcome to the course on CSS.</p>
```

## CSS Comments

HTML comments start with `<!--` and end with `-->`. 

CSS comments start with `/*` and end with `*/`.
