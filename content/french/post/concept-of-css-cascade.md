---
title: "CSS Cascade की अवधारणा"
date: 2022-02-27T15:40:24+06:00
# post thumb
images:
  - "images/post/css/specificity-weight.png"
#author
author: "Mayank Sharma"
# description
description: "CSS Cascade की अवधारणा"
# Taxonomies
categories: ["css"]
tags: ["css-cascade"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

CSS शैलियों (styles) को कैसे प्रस्तुत किया जाएगा यह दो कारकों पर निर्भर करता है:

* CSS Cascade में style कहाँ पर स्तिथ है 

* Selector का विशिष्टता वजन (specificity weight)

आइये इनको एक-एक करके समझते हैं| 


## CSS Cascade में स्टाइल का प्लेसमेंट

CSS में, सभी शैलियाँ एक स्टाइल शीट में ऊपर से नीचे की तरफ कैस्केड करती हैं। इसलिए, हम अलग-अलग शैलियों को जोड़ सकते हैं, और जैसे-जैसे हम आगे बढ़ते हैं, हम ऊपर लिखी गई शैलियों को अधिलेखित (overwrite) कर सकते हैं।

निम्नलिखित दो मामलों पर विचार करें:

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

अंत में आने वाली शैली को प्राथमिकता दी जाएगी, इसलिए ऊपर दिए गए दोनों ही मामलों में सभी paragraphs में नीले रंग की पृष्ठभूमि होगी।


## Selector का विशिष्टता वजन

CSS में, प्रत्येक selector का एक विशिष्ट भार (specificity weight) होता है।

* type selector - इसमें सबसे कम specificity weight होता है।
* class selector - इसमें मध्यम specificity weight होता है।
* ID selector - इसमें उच्चतम specificity weight होता है।

<img src="../../../images/post/css/specificity-weight.png" alt="CSS चयनकर्ता का specificity weight" style="width:99%;height:99%;">

तो, specificity weights की गणना तीन स्तंभों (columns) का उपयोग करके की जाती है:
* पहला कॉलम: यह ID selectors की गणना करता है,
* दूसरा कॉलम: यह class selectors की गणना करता है, और
* तीसरा कॉलम: यह type selectors की गणना करता है।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यहां हम inline styles को शामिल नहीं कर रहे हैं। उनके पास उच्चतम specificity weight होता है, और वह किसी भी selector के specificity weight को ओवरराइड करता है।
</div>

आइए एक उदाहरण पर विचार करें:

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

`<p>` का चयन दो अलग-अलग प्रकार के selectors द्वारा किया जा रहा है: एक type selector और एक class selector.

Class selector का specificity weight अधिक होता है। तो, भले ही type selector कैस्केड में class selector के बाद आ रहा है, class selector प्राथमिकता लेगा। अतः पैराग्राफ़ की पृष्ठभूमि लाल (red) होगी| 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

विभिन्न प्रकार के CSS selectors के बारे में अधिक जानने के लिए, आप हमारे <a href="../types-of-selectors-in-css" title="CSS में selectors के प्रकार" class="mak-link">इस लेख को पढ़ सकते हैं|</a>  
</div>


## नेस्टेड selectors का Specificity weight

जब selectors को nest किया जाता है, तो उनके specificity weights भी संयुक्त हो जाते हैं।

उदाहरण के लिए:

```css
#mak-id1 p {             
          font-size: 24px;
        }
```

`#mak-id1 p` - इसमें id selector और type selector दोनों हैं। तो, उनका संयुक्त specificity weight (1-0-1) होगा।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

हमारे selectors के specificity weight को कम रखने के लिए, हमें कई classes का उपयोग करना चाहिए, और जितनी चाहें उतनी styles की परत बनानी चाहिए। यह हमारे कोड को सरल और साफ रखेगा।

उदाहरण के लिए:

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


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">

