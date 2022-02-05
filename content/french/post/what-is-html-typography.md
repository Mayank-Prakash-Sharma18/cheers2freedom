---
title: "HTML टाइपोग्राफी (Introduction to HTML Typography)"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-typography.jpg"
#author
author: "Mayank Sharma"
# description
description: "Learn the basics of HTML Typography"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-typography"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

इस लेख में हम जानेंगे - <strong>What is Typography in HTML?, in Hindi</strong>

<div class="toc-mak">
<img src="../../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>शीर्षक और पैराग्राफ</li>
<li>em, i, strong, b</li>
<li>Nesting</li>
<li>ins, u, del, s, mark</li>
</ul>
</div>

## शीर्षक और पैराग्राफ (Headings and Paragraphs)

वेब पेज पर शब्दों (text) को प्रदर्शित करने के लिए कई अलग-अलग तत्व (elements) हैं। <br>
`<h>    <p>`

### शीर्षक (Headings)

Headings ब्लॉक-स्तरीय तत्व (block-level elements) हैं। उनके छह अलग-अलग प्रकार हैं, `<h1>` से `<h6>` तक।

किसी पृष्ठ या अनुभाग के प्राथमिक शीर्षक को `<h1>` तत्व के साथ चिह्नित किया जाना चाहिए।

आपके पास प्रति पृष्ठ/पोस्ट केवल एक `<h1>` होना चाहिए - यह on-page SEO के लिए बहुत महत्वपूर्ण है। यह खोज इंजनों को किसी पृष्ठ पर सामग्री को अनुक्रमित करने और निर्धारित करने में मदद करता है।

### अनुच्छेद (पैराग्राफ, Paragraphs)

अनुच्छेदों को `<p>` तत्व का उपयोग करके परिभाषित किया जाता है। पैराग्राफ ब्लॉक-स्तरीय तत्व (block-level element) है।

<hr>

## em, i, strong, b

वेब पेज पर text प्रदर्शित करने के लिए कई अलग-अलग तत्व होते हैं।

### Stress Emphasized Text 

`<em>` element - इनलाइन-स्तरीय तत्व (Inline-level element) <br>
text पर जोर देने के लिए इसका उपयोग किया जाता है (इसे जोर देकर पढ़ा / बोला जाना चाहिए)। <br>
किसी शब्द/वाक्य पर जोर देने से उस शब्द या वाक्य का अर्थ भी बदल सकता है।

इसका उपयोग सुधार, स्पष्टीकरण, कटाक्ष, प्रतिवाद आदि के लिए किया जाता है।

```html
“Call the <em>police</em> now!”       
(stress on 'police')

"अभी <em>पुलिस</em> को कॉल करें!"
('पुलिस' पर अधिक जोर)

“Call the police <em>now</em>!”       
(stress on 'now')

"पुलिस को <em>अभी</em> कॉल करें!"
('अभी' पर अधिक जोर)
```

“Call the <em>police</em> now!”       
(stress on 'police')

"अभी <em>पुलिस</em> को कॉल करें!"
('पुलिस' पर अधिक जोर)

“Call the police <em>now</em>!”       
(stress on 'now')

"पुलिस को <em>अभी</em> कॉल करें!"
('अभी' पर अधिक जोर)

`<em>` tags - सामान्य रूप से एकल शब्दों पर उपयोग किया जाता है, कभी-कभी दो शब्दों पर, लेकिन हम कभी-कभी इसे पूरे वाक्य पर भी उपयोग कर सकते हैं| 

```html
<em>We need to get out of here!</em>

<em>हमें यहां से निकलना होगा!</em>
```

<em>We need to get out of here!</em>

<em>हमें यहां से निकलना होगा!</em>

### Italicize Text 

`<i>` element - वैकल्पिक स्वर में पाठ को संप्रेषित करने के लिए इसका उपयोग किया जाता है। (कोई अतिरिक्त जोर देने के लिए या महत्व बताने के लिए नहीं।)

उदाहरण के लिए संगीत संकेतन (musical notation), कविता (poetry), तकनीकी शब्द (technical terms), विदेशी शब्द (जैसे किसी अन्य भाषा से मुहावरेदार वाक्यांश), आदि में।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Note</b><br>

    कुछ अन्य italic-causing tags: cite element, blockquote element.
</div>

### महत्वपूर्ण शब्द (Important Text)

`<strong>` element - इनलाइन-स्तरीय तत्व (Inline-level element) <br>
अर्थपूर्ण रूप से (Semantically) महत्वपूर्ण text की पहचान करने के लिए उपयोग किया जाता है। यह वाक्य का अर्थ नहीं बदलता है।

`<b>` element - यह केवल किसी तत्व (element) की प्रस्तुति को बदलने के लिए उपयोग किया जाता है।

<hr>

## Nesting

हम em और strong तत्वों का एक साथ भी उपयोग कर सकते हैं (क्योंकि दोनों inline elements हैं)

```html
<strong>Do not approach the electrified fence <em>under any circumstances.</em> </strong> 

<strong>विद्युतीकृत बाड़ को <em>किसी भी परिस्थिति में</em> न छुएं| </strong>
```

क्यूंकि यहां em एक strong तत्व का बच्चा है, इसलिए इनके अंदर जो text है वो इटैलिक और बोल्ड दोनों होगा। ऊपर लिखा हुआ कोड, देखने में ऐसा लगेगा : <br>
<strong>Do not approach the electrified fence <em>under any circumstances.</em> </strong> <br>
<strong>विद्युतीकृत बाड़ को <em>किसी भी परिस्थिति में</em> न छुएं| </strong>

आप CSS का उपयोग करके किसी भी text को बोल्ड या इटैलिक कर सकते हैं, या फिर strong और em जैसे तत्वों का उपयोग कर सकते हैं। पर जहाँ CSS का उपयोग सिर्फ सजावट के लिए होता है, पर strong और em elements न सिर्फ शब्दों/वाक्यों की सजावट करेंगे, बल्कि उनका कुछ मतलब भी होता है| जैसे की strong element Google और Bing जैसे सर्च इंजिन्स को यह बताता है की इसमें लिखा text महत्वपूर्ण है| 

### अधिक जोर देने के लिए या महत्व के लिए Nesting करना 

अधिक जोर देने (stronger emphasis) या महत्व देने (more importance) के लिए नेस्टिंग (Nesting) की जाती है। <br>
strong tag के अंदर अगर दूसरा strong tag हो, तो उसका महत्व और भी बढ़ जाता है। <br>
em tag के अंदर अगर दूसरा em tag हो, तो उसको और भी जोर देकर पढ़ा जाता है।

```html
<strong>Remember that unit testing is <strong>due on August 18th</strong>.</strong>

<strong>याद रखें कि यूनिट परीक्षण <strong>18 अगस्त को होने वाला है</strong>।</strong>
```

<strong>Remember that unit testing is <strong>due on August 18th</strong>.</strong>

<strong>याद रखें कि यूनिट परीक्षण <strong>18 अगस्त को होने वाला है</strong>।</strong>

<hr>

## ins, u, del, s, mark  

वेब पेज पर text प्रदर्शित करने के लिए कई अलग-अलग तत्व होते हैं।

### Inserted Text

`<ins>` element – दस्तावेज़ के पिछले संस्करण के बाद डाले गए text पर ध्यान आकर्षित करने के लिए। 

`<u>` element – प्रस्तुतिकरण उद्देश्यों के लिए text को रेखांकित करने के लिए।

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>एक चेतावनी!</b><br>

ऐसे text को रेखांकित करना जो हाइपरलिंक (hyperlink) नहीं है, वह उपयोगकर्ताओं को भ्रमित कर सकता है (क्यूंकि डिफ़ॉल्ट रूप से हाइपरलिंक्स को रेखांकित किया जाता है।)
</div>

### हटाया गया text (Deleted Text)

del element का उपयोग दस्तावेज़ से हटाए गए text की पहचान करने के लिए किया जाता है। <br>
s element उस text की पहचान करता है जो अब सटीक या प्रासंगिक नहीं है (प्रस्तुति उद्देश्यों के लिए)।

`<del>` के मामले में, आमतौर पर दस्तावेज़ का एक ऐसा संस्करण होता है जिसमें `<del>` text शामिल नहीं होता है। <br>
लेकिन `<s>` के मामले में, आमतौर पर दस्तावेज़ का ऐसा कोई संस्करण नहीं होता है जिसमें `<s>` text न हों। इसे मूल दस्तावेज़ में ही पुराने text के रूप में चिह्नित किया जाता है। 

उदाहरण के लिए: 

```html
हमारा नया रियायती मूल्य - <s>$50</s> $40
```

हमारा नया रियायती मूल्य - <s>$50</s> $40

### उपयोग उदाहरण - एक "To Do" सूची

सूची में जोड़े गए आइटम को मार्कअप करने के लिए "To Do" सूची में `<ins>` टैग का उपयोग किया जा सकता है। <br>
साथ ही `<del>` टैग का उपयोग यह इंगित करने के लिए किया जा सकता है कि कोई आइटम पूरा हो गया है।

```html
<ol>
<li><del>HTML सीखें</del></li>
<li>CSS पर कमांड प्राप्त करें</li>
<li>Javascript सीखें</li>
<li><ins>कोई framework सीखें, जैसे की Angular</ins></li>
<li><ins>Ionic या React Native का उपयोग करके ऐप्स (apps) बनाना शुरू करें</ins></li>
</ol>
```

<ol>
<li><del>HTML सीखें</del></li>
<li>CSS पर कमांड प्राप्त करें</li>
<li>Javascript सीखें</li>
<li><ins>कोई framework सीखें, जैसे की Angular</ins></li>
<li><ins>Ionic या React Native का उपयोग करके ऐप्स (apps) बनाना शुरू करें</ins></li>
</ol>

### ब्लॉक या इनलाइन (Block or Inline)?

`<ins>` और `<del>` - यह इनलाइन (inline-level) या ब्लॉक-स्तरीय (block-level) हो सकते हैं।  

```html
<!-- block-level ins -->
<ins>
  <!-- inline del -->
  <p>Today I learnt <del>HTML</del> typography. It was fun.</p>
  <p>आज मैंने <del>HTML</del> टाइपोग्राफी सीखी। यह मजेदार था।</p>
</ins>
```

<!-- block-level ins -->
<ins>
  <!-- inline del -->
  <p>Today I learnt <del>HTML</del> typography. It was fun.</p>
  <p>आज मैंने <del>HTML</del> टाइपोग्राफी सीखी। यह मजेदार था।</p>
</ins>

### Attributes

##### दिनांक और समय (Date & Time)

datetime attribute आपको `<ins>` टैग और `<del>` टैग में किसी तिथि और (वैकल्पिक रूप से) कोई समय जोड़ने की अनुमति देता है।

```html
<ins datetime="2009-08-18T00:00Z"> Inserted text... </ins>
```

यह attribute मुख्य रूप से निजी उपयोग के लिए अभिप्रेत है (उदाहरण के लिए सर्वर-साइड स्क्रिप्ट द्वारा साइट के संपादन संस्करणों को लिखना, या खोज इंजन द्वारा, इत्यादि)। लेकिन इसे लोगों को दिखाया भी जा सकता है।

##### उद्धरण (Citations)

उद्धरण जोड़ने के लिए हम उपयोग करते हैं - the cite attribute. 

इस attribute का मान - किसी दस्तावेज़ का URL होता है, जो परिवर्तन की व्याख्या करता है (अर्थात यह बताता है की कुछ जोड़ा गया है, या हटाया गया है)।

```html
<ins cite=“cheers2freedom.com/html" datetime="2009-08-18T00:00Z"> Inserted text... </ins>
```

यह attribute मुख्य रूप से निजी उपयोग के लिए अभिप्रेत है (उदाहरण के लिए सर्वर-साइड स्क्रिप्ट द्वारा साइट के संपादन संस्करणों को लिखना, या खोज इंजन द्वारा, इत्यादि)। लेकिन इसे लोगों को दिखाया भी जा सकता है।

ins और del के अलावा, निम्नलिखित elements पर भी cite attribute का उपयोग किया जा सकता है:
`<blockquote>` `<q>`

### प्रसंग आधारित प्रासंगिक Text (Context based relevant Text)

संदर्भ उद्देश्यों के लिए text को हाइलाइट करने के लिए (किसी अन्य संदर्भ में इसकी प्रासंगिकता के कारण) mark element का उपयोग किया जाना चाहिए।

`<mark>` वास्तव में सामग्री (content) के लिए प्रासंगिक नहीं है, बल्कि केवल संदर्भ के लिए (उदाहरण के लिए खोज शब्द से मेल खाने वाली सामग्री को चिह्नित करने के लिए, गलत वर्तनी वाले शब्द, वेब ऐप में चयनित सामग्री के लिए, आदि)।

em या strong तत्व उस सामग्री को दर्शाते हैं, जो मूल लेखक द्वारा महत्वपूर्ण या जोर देने योग्य महसूस की जाती है। परन्तु एक mark element किसी भिन्न लेखक द्वारा, या उपयोगकर्ता गतिविधि के परिणामस्वरूप किसी अन्य संदर्भ में प्रासंगिक समझी जाने वाली सामग्री को दर्शाता है।

उदाहरण के लिए, हम खोज परिणामों में उपयोगकर्ता द्वारा खोजे गए कीवर्ड को हाइलाइट कर सकते हैं:

```html
<p>“Sass” के लिए खोज परिणाम:</p>

<hr>

<p>CSS with superpowers. <mark>Sass</mark> is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

<p> <mark>Sass</mark> is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</p>
```

<p>“Sass” के लिए खोज परिणाम:</p>

<hr>

<p>CSS with superpowers. <mark>Sass</mark> is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

<p> <mark>Sass</mark> is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</p>


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">

