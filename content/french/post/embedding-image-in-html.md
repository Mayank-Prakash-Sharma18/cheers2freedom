---
title: "HTML में चित्र कैसे डालें ? (Embedding Image in HTML page)"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-images.png"
#author
author: "Mayank Sharma"
# description
description: "Learn how to embed images HTML page"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-images"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

इस लेख में हम जानेंगे - <strong>Embedding Image in HTML pages, in Hindi</strong>

<div class="toc-mak">
<img src="../../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>HTML में चित्र कैसे डालें?</li>
<li>Attributes</li>
<li>Figure Caption</li>
</ul>
</div>

पेज में चित्र डालने के लिए - `<img>` inline element का प्रयोग किया जाता है| <br>
यह एक खाली element है - अर्थार्थ, इसके अंदर कोई कंटेंट नहीं होता है; यह सिर्फ एक साधारण tag के रूप में मौजूद रहता है। यह एक self-contained tag है| 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

self-contained tag वह tag है जिसमें कोई कंटेंट नहीं होता है| इनका अलग प्रारंभिक और समाप्ति tag नहीं होता है। 
</div>

src attribute - इसका मान चित्र के स्रोत को निर्दिष्ट करता है| 

```html
<img src="pulsar.jpg">
```

यदि आपका चित्र किसी sub-folder में है, तो आपको src attribute में उस फ़ोल्डर का नाम भी शामिल करना होगा:

```html
<img src="/images/pulsar.jpg">
```

हम दुनिया के किसी भी वेब पते (web address) से चित्रों को अपने HTML प्रष्ट पर प्रदर्शित कर सकते हैं:

```html
<img src="https://source.unsplash.com/1600x900/?nature,water">
```

<hr>


## Attributes

### alt Attribute

alt (alternative text) attribute - चित्र के विषय, या वो किससे सम्बंधित है, उसका वर्णन करता है।

```html
<img src="pulsar.jpg" alt="A pulsar star (एक पल्सर तारा)">
```

alt attribute (alt text) का महत्व:
* SEO के लिए आवश्यक - alt attribute को सर्च इंजन (जैसे Google) द्वारा पढ़ा जाता है, क्योंकि यह किसी चित्र के उद्देश्य को बताता है। इससे सर्च इंजन को आपके HTML प्रष्ट के विषय के बारे में समझने में मदद मिलती है| 
* यदि किसी कारणवश चित्र उपलब्ध नहीं है, तो उस चित्र के स्थान पर alt text प्रदर्शित होता है।

### style attribute 

style attribute - किसी चित्र  की चौड़ाई और ऊंचाई निर्दिष्ट करने के लिए।

```html
<img src="pulsar.jpg" alt="A pulsar star (एक पल्सर तारा)“ style="width:500px;height:600px;">
```

<hr>


## Figure Caption

`<figure>` block-level (ब्लॉक-स्तरीय) element - इसके अंदर self-contained content (अक्सर मीडिया) को डाला जा सकता है, जैसे की चित्र, ऑडियो क्लिप, वीडियो, कोड के ब्लॉक, आरेख, चित्र आदि। यह उनको semantically markup करता है| 

`<figure>` element के भीतर एक से अधिक self-contained content डाली जा सकती हैं।

`<figcaption>` element - `<figure>` element में कैप्शन जोड़ता है। `<img>` element के alt attribute के बजाय इसको इस्तेमाल किया जा सकता है|   

```html
<figure>
<img src="pulsar.jpg">
<figcaption>एक खूबसूरत पल्सर तारा</figcaption>
</figure>
```

`<figcaption>` का उपयोग `<figure>` element में कहीं भी किया जा सकता है, लेकिन यह उसके अंदर केवल एक बार इस्तेमाल हो सकता है।


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">
