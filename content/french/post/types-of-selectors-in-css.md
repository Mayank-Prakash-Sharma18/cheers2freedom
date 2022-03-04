---
title: "CSS में Selectors के प्रकार"
date: 2022-03-03T15:40:24+06:00
# post thumb
images:
  - "images/post/css/selectors-in-css.png"
#author
author: "Mayank Sharma"
# description
description: "CSS में Selectors के प्रकार"
# Taxonomies
categories: ["css"]
tags: ["css-selectors"]
type: "regular" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

हम HTML element(s) को तीन तरीकों से लक्षित कर सकते हैं:

* Type Selector का उपयोग करके 
* Class Selector का उपयोग करके - यह Type Selector से अधिक सटीक होता है 
* ID Selector का उपयोग करके - यह Class Selector से भी अधिक सटीक होता है 

## Type Selector का उपयोग करना

हम इसका उपयोग करके एक निश्चित प्रकार के सभी HTML elements का चयन करते हैं।

उदा. किसी पृष्ठ पर सभी `<h2>` उपशीर्षक चुनने के लिए:

```css
h2 {
 // Our CSS style
}
```

<br>

## Class Selector का उपयोग करना

हम इसका उपयोग करते हुए समान class attribute value वाले सभी HTML elements का चयन करते हैं।

हम इसका उपयोग करके विभिन्न HTML elements का चयन कर सकते हैं।

उदा. किसी पृष्ठ पर 'mak' class वाले सभी `<h2>` उपशीर्षक और `<div>` तत्वों का चयन करने के लिए:

HTML:

```html
<div class="mak"> ... </div>
<p class="mak"> ... </p>
```

CSS:

```css
.mak {
 // हमारी CSS शैली उन सभी <h2> और <div> elements पर लागू होगी, जिनकी class attribute value 'mak' है
}
```
<br>

## ID Selector का उपयोग करना

हम इसका उपयोग करके केवल एक HTML element का चयन करते हैं, जिसमें एक अद्वितीय id attribute value होती है।

एक HTML पृष्ठ पर दो एकसी id attribute value नहीं हो सकती हैं। अर्थात्, class attribute value के विपरीत, किसी भी id attribute value का उपयोग पृष्ठ पर केवल एक HTML element के लिए किया जा सकता है। उस HTML पृष्ठ पर किसी अन्य HTML तत्व का id attribute value समान नहीं होना चाहिए।

उदा. पृष्ठ पर 'mak' आईडी वाले `<p>` तत्व का चयन करने के लिए:

HTML:

```html
<p id="mak"> ... </p>
```

CSS:

```css
#mak {
 // हमारी CSS शैली उस <p> तत्व पर लागू की जाएगी, जिसकी id attribute value 'mak' है
}
```

<br>

## Multiple Selectors

Multiple Selectors (एकाधिक चयनकर्ता) - विभिन्न IDs, Classes, या Element नामों वाले HTML elements का चयन करना

उदाहरण के लिए:

```css
#mak-id1, #mak-id2, .mak-class2, h4 {
          border: 2px solid rgb(161, 88, 88);
          padding: 10px;
          margin-bottom: 20px;
        }
```

## नेस्टेड Selectors (Nested Selectors)

multiple selectors का चयन करते समय हम अल्पविराम का उपयोग करते हैं, पर यहाँ हम ऐसा नहीं करते हैं।

उदाहरण के लिए:

```css
#mak-id1 p {             
          font-size: 24px;
        }
```

इसका मूल रूप से मतलब है कि हम 'mak-id1' id वाले HTML element के अंदर `<p>` elements का चयन कर रहे हैं| 

जब selectors nested/combined होते हैं तो उन्हें दाएं से बाएं पढ़ा जाना चाहिए। ओपनिंग कर्ली ब्रैकेट (opening curly bracket) के ठीक पहले के selector को कुंजी चयनकर्ता (key selector) के रूप में जाना जाता है, जो यह पहचान करता है कि styles को किस element पर लागू किया जाएगा। कुंजी चयनकर्ता के बाईं ओर के Selector(s), prequalifiers के रूप में कार्य करते हैं।

<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">