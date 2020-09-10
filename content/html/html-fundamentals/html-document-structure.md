---
title: HTML Document Structure
linktitle: HTML Document Structure
toc: true
type: docs
date: "2019-09-05T00:00:00+01:00"
draft: false
menu:
  html-fundamentals:
    parent: HTML
    weight: 2

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 2
---

All HTML documents have a defined structure that includes these elements:

`<!DOCTYPE html>,   <html>,   <head>,   <body>`

### The document type declaration 
Informs web browsers which version of HTML is being used. Placed at the very beginning of the HTML document. This course follows the latest version of HTML - HTML5 standard.
So, our document type declaration is `<!DOCTYPE html>` 
<img src="../../../media/html/html-document-structure.png" alt="html document structure" style="max-width:100%;">

### `<html>` element 
It is the root element of an HTML page. HTML document begins with `<html>` and ends with `</html>`.

### `<head>` element
* Inside the `<html>` element
* Identifies the top of the document. Contains meta information about the HTML page.
* The content inside the `<head>` element is not displayed on the web page.

### `<body>` element
* Inside the `<html>` element
* Identifies the body of the document.
* All of the visible content within the web page lies within the `<body>` element. 

## Nested Elements

HTML elements can be nested - i.e. HTML elements can contain other elements

```toml
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

## HTML & CSS Comments

HTML comments start with `<!--` and end with `-->` 

CSS comments start with `/*` and end with `*/`

<div class="alert alert-note">
  <div>
    To comment out any line or multiple lines in VS Code: ctrl + /
  </div>
</div>