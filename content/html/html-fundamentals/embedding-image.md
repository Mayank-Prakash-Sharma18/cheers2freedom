---
title: Embedding Image
linktitle: Embedding Image
toc: true
type: docs
date: "2020-08-21T00:00:00+01:00"
draft: false
menu:
  html-fundamentals:
    parent: HTML
    weight: 7

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 7
---

To add images to a page - `<img>` inline element <br>
It is an empty element - it doesn’t wrap any other content and exists as a single tag.

src attribute - its value specifies the source of the image

```toml
<img src="pulsar.jpg">
```

If you have your images in a sub-folder, you must include the folder name in the src attribute:

```toml
<img src="/images/pulsar.jpg">
```

We can access images from any web address in the world:

```toml
<img src="https://source.unsplash.com/1600x900/?nature,water"
```

<hr>

## Attributes

### alt Attribute

alt (alternative text) attribute - describes the contents of an image. 

```toml
<img src="pulsar.jpg" alt="A pulsar star">
```

Significance:
* Essential for SEO - alt attribute value is picked up by search engines’ spiders as it conveys the purpose of an image. 
* The alt text is displayed in place of the image if for some reason the image is not available.

### style attribute 

style attribute - to specify the width and height of an image.

```toml
<img src="pulsar.jpg" alt="A pulsar star“ style="width:500px;height:600px;">
```

<hr>

## Figure Caption

`<figure>` block-level element - used to semantically markup and wrap self-contained content (often media), e.g. images, audio clips, videos, blocks of code, diagrams, illustrations etc. 

More than one item of self-contained content may be contained within the `<figure>` element.

`<figcaption>` element - adds a caption to the `<figure>` element. Can be used instead of `<img>` element’s alt attribute  

```toml
<figure>
<img src="pulsar.jpg">
<figcaption>A beautiful pulsar star.</figcaption>
</figure>
```

The `<figcaption>` may be used anywhere within the `<figure>` element, but it may only appear once. 
