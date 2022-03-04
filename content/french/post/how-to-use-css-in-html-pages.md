---
title: "HTML पेजों में CSS का उपयोग कैसे करें?"
date: 2022-03-02T15:40:24+06:00
# post thumb
images:
  - "images/post/css/using-css-in-html.png"
#author
author: "Mayank Sharma"
# description
description: "HTML पेजों में CSS का उपयोग कैसे करें?"
# Taxonomies
categories: ["css"]
tags: ["css-in-html"]
type: "regular" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

CSS (कैस्केडिंग स्टाइल शीट्स, Cascading Style Sheets) - यह एक प्रस्तुति भाषा (presentation language) है। 

अर्थार्थ जहाँ HTML सामग्री को अर्थ प्रदान करता है। वहीँ CSS सामग्री की प्रस्तुति को स्टाइल करता है, अर्थार्थ सँवारता है।

HTML और CSS को अलग रखा जाना चाहिए। 


## CSS प्रयोग करना

***चरण 1***: वह HTML तत्व चुनें जिस पर आप style लागू करना चाहते हैं → selector का उपयोग करके <br><br>
उदा. निम्नलिखित पृष्ठ पर स्तिथ सभी paragraph elements का चयन करेगा।<br>

```css
p { 
 // हमारी CSS style
}
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हम HTML elements में class और id विशेषताओं का उपयोग करके, और उन्हें CSS में लक्षित करके कुछ ख़ास element भी लक्षित कर सकते हैं। उनके बारे में अधिक जानने के लिए, आप <a href="../types-of-selectors-in-css" title="Types of Selectors in CSS" class="mak-link">हमारे इस लेख को पढ़ सकते हैं।</a> 
</div>

***चरण 2***: styles को चयनित HTML elements पर लागू करें → संपत्ति-मूल्य (property-value) जोड़ी का उपयोग करके 

उदा. निम्नलिखित CSS कोड, `<p>` (पैराग्राफ) elements में फ़ॉन्ट-आकार (font-size), रंग (color), और पृष्ठभूमि रंग (background color) सेट करेगा।

```css
p { 
    font-size: 17px;
    color: white;
    background-color: #a39d9d; 
}
```

<br>

## HTML और CSS को कैसे लिंक करें

इसे तीन तरीकों से किया जा सकता है:

### बाहरी CSS फ़ाइल

एक ही बाहरी स्टाइल शीट (external style sheet) में सभी शैलियों (styles) को शामिल करें, और HTML दस्तावेज़ के `<head>` तत्व के भीतर से उसे लिंक करें। यह हमें पूरी वेबसाइट पर समान शैलियों का उपयोग करने और केवल एक CSS फ़ाइल को संपादित करके साइटव्यापी परिवर्तन करने की अनुमति देता है। (यह सर्वश्रेष्ठ तरीका है)

हमारी HTML फाइल में, हम बाहरी CSS फाइल को इस प्रकार लिंक करेंगे:

```html
<head>
    <link rel=“stylesheet” href=“path of the external CSS file”>
</head>
```

### आंतरिक CSS (Internal CSS)

हमारे CSS कोड को उसी HTML फ़ाइल में `<style>...</style>` तत्व के अंदर रखना। 

उदाहरण के लिए, हमारी HTML फ़ाइल में:

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

### इनलाइन CSS (Inline CSS )

हमारे CSS कोड को HTML element टैग के अंदर ही डालना। (इससे जितना हो सके बचना चाहिए; यह सबसे खराब तरीका है)

उदाहरण के लिए, हमारी HTML फ़ाइल में:

```html
<!-- Inline CSS -->
    <h1 style="color:aqua">Cheers 2 Freedom</h1>
    <p style="color:blue; font-size:14px;">Welcome to the course on CSS.</p>
```

## CSS टिप्पणियाँ (CSS Comments)

HTML टिप्पणियाँ `<!--` से शुरू होती हैं और `-->` पर समाप्त होती हैं।

CSS टिप्पणियाँ `/*` से शुरू होती हैं और `*/` पर समाप्त होती हैं।


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">