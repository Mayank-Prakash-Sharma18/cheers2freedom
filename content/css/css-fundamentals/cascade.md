---
title: Cascade 
linktitle: Cascade   
toc: true
type: docs
date: "2020-11-03T00:00:00+01:00"
draft: false
menu:
  css-beginner:
    parent: CSS
    weight: 6

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 6
---

How CSS styles will be rendered depends on two factors:

* Placement of the style in CSS cascade

* Selector’s specificity weight

## Placement of the style in CSS cascade

In CSS, all styles cascade from the top to the bottom in a style sheet. So, we can add different styles or overwrite the styles written above as we move down a style sheet.

Consider the following two cases:

CSS I:
```
p {
  background: red;
  font-size: 18px;
}
p {
  background: blue;
}
```

CSS II:
```
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

<img src="../../../media/css/specificity-weight.png" alt="CSS selector's specificity weight" style="width:99%;height:99%;">

So, specificity points are calculated using three columns:
* The first column: It counts ID selectors, 
* The second column: It counts class selectors, and 
* The third column: It counts type selectors.

{{% alert note %}}
Here we are not considering the inline styles. They have the highest specificity weight and override any selector's specificity weight. 
{{% /alert %}}

Let's consider one example:

HTML:
```
<p class=“mak">...</p>
```

CSS:
```
.mak {
  background: red;
}

p {
  background: blue;
}
```

`<p>` is being selected by two different kinds of selectors: one type selector and one class selector. 

Class selector has a higher specificity weight. So, even though the type selector comes after the class selector in the cascade, the class selector will take precedence. The paragraph will have a blue background.


## Specificity weight of nested selectors

When selectors are combined, their specificity weights also get combined. 

For example:

```
#mak-id1 p {             
          font-size: 24px;
        }
```

`#mak-id1 p` – it has both an id selector and a type selector. So, their combined specificity weight will be (1-0-1). 


Note: To keep the specificity weights of our selectors low, we should use multiple classes, and layer on as many styles as we wish. It will keep our code simple and clean. 

For example:

HTML:
```
<div class=“common first">...</div >
<div class=" common second">...</div>
```

CSS:
```
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

