---
title: "HTML में हाइपरलिंक कैसे बनाते हैं ? (HTML mein Hyperlink kaise banate hein?)"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/html/html-hyperlink.jpg"
#author
author: "Mayank Sharma"
# description
description: "Learn the basics of HTML Hyperlink"
# Taxonomies
categories: ["website-creation","html"]
tags: ["html-hyperlink"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

इस लेख में हम जानेंगे - <strong>What is HTML Hyperlink?, in Hindi</strong>

<div class="toc-mak">
<img src="../../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>हाइपरलिंक</li>
<li>सापेक्ष और निरपेक्ष पथ (Relative and Absolute Paths)</li>
<li>एक ही पेज के कुछ हिस्सों को लिंक करना</li>
<li>Hyperlink element के Attributes</li>
</ul>
</div>

हाइपरलिंक - एक वेब पेज या संसाधन को दूसरे से लिंक करने (जोड़ने) की क्षमता प्रदान करता है।
इसे एंकर तत्व (anchor element) का उपयोग करके बनाया जाता है - अर्थार्थ `<a>` 

यह एक इनलाइन-स्तरीय तत्व (inline-level element) है।

href attribute - इसका मान वो पथ होता है जो हाइपरलिंक के गंतव्य की पहचान करता है

```html
<a href="https://hindi-education.com">HTML कोर्स (HTML Course)</a>
```

Anchor element, `<a>`, एक inline element है। Inline-level elements के अंदर ब्लॉक-स्तरीय तत्वों (block-level elements) को नहीं रखा जा सकता है। परन्तु, HTML5 में, anchor elements को विशेष रूप से ब्लॉक-, इनलाइन-, या किसी अन्य स्तर के तत्वों को अपने अंदर समाहित करने की अनुमति है। इसलिए हम कुछ शब्दों को ही नहीं, बल्कि पूरे के पूरे गद्यांशों या छवियों को भी लिंक बना सकते हैं:

```html
<a href="https://hindi-education.com">
<h2>HTML कोर्स (HTML Course)</h2>
<h3>Lesson 10: Hyperlinks</h3>
</a>
```

```html
<a href="https://hindi-education.com">
<img src="click-here-image.webp">
</a>
```


## सापेक्ष और निरपेक्ष पथ (Relative and Absolute Paths)

अन्य वेबसाइटों के पृष्ठों/पोस्ट से लिंक करने के लिए एक संपूर्ण पथ (absolute path) की आवश्यकता होती है - इसलिए href attribute value में पूरा डोमेन (domain) लिखा होना चाहिए।

```html
E.g. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types">लिंक पर और अधिक जानने के लिए (More on links)</a>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>इसे काम करता हुआ देखें</b><br>

<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" class="mak-link">लिंक पर और अधिक जानने के लिए (More on links)</a>
</div>

परन्तु, उसी वेबसाइट के एक पृष्ठ को किसी अन्य पृष्ठ से लिंक करने के लिए हम संपूर्ण पथ (absolute path) या सापेक्ष पथ (relative path) का इस्तेमाल कर सकते हैं - सापेक्ष पथ के मामले में href attribute value में केवल उस पृष्ठ का फ़ाइल नाम शामिल होना काफी है जिससे लिंक किया जा रहा है। डोमेन (.com, .org, .edu, आदि) को शामिल करने की आवश्यकता नहीं है।

```html
E.g. <a href="course-details.html">HTML कोर्स (HTML Course)</a>
```

यदि जिस अंदरूनी पृष्ठ को लिंक किया जा रहा है, वो किसी भिन्न निर्देशिका/फ़ोल्डर में है, तो href attribute value में उस पूरे अंदरूनी पथ को लिखने की आवश्यकता है।

```html
E.g. <a href="pages/course-details.html">HTML कोर्स (HTML Course)</a>
```


## एक ही पेज के कुछ हिस्सों को लिंक करना (Linking to parts on the same page)

उदहारण के लिए, शीर्ष लिंक पर वापस जाएं, उप-शीर्षक लिंक

पहले उस तत्व पर एक id attribute सेट करें जिसे आप लिंक करना चाहते हैं।

```html
<h2 id="first-subheading">My sub-heading number 1</h2>
```

फिर एंकर तत्व के href attribute के भीतर उस id attribute के मान (value) का उपयोग करें।

```html
<a href="#first-subheading">Go to first subheading</a> 
```

एक ऐसा लिंक बनाने के लिए जो कहीं नहीं जाता है (अर्थार्त placeholder link):

```html
<a href="#">उसी पृष्ठ पर बने रहें (Remain on the same page)</a> 
```

<hr>

## Hyperlink element के Attributes

### Target Attribute

हम यह निर्धारित कर सकते हैं कि क्लिक करने पर कोई लिंक कहां खुलेगा:

आमतौर पर (Default behaviour) - लिंक उसी window/tab में खुलते हैं

पर अगर हम चाहते हैं की लिंक नई tab में खुले - तो आप target attribute का उपयोग करिये और उसके मान में _blank का उपयोग करें| 

```html
E.g. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">लिंक पर अधिक जानकारी (More on links)</a>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>इसे काम करता हुआ देखें</b><br>

<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank" class="mak-link">लिंक पर और अधिक जानने के लिए (More on links)</a>
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

    target attribute की default value _self है
</div>

### Relationship Attribute

rel attribute - वर्तमान दस्तावेज़ और संदर्भित दस्तावेज़ के बीच संबंध की पहचान करता है।

rel attribute के विभिन्न मान: 
* copyright - copyright statement से लिंक करते समय।

```html
<a href="legal.html" rel="copyright">उपयोग की शर्तें (Terms of Use)</a>  
```

* nofollow - जब आप नहीं चाहते कि सर्च इंजन के स्पाइडर उस हाइपरलिंक के गंतव्य को कोई अतिरिक्त SEO फ़ायदा या रैंकिंग प्रदान करें। 

```html
<a href="https://www.w3schools.com/html/html_links.asp" rel="nofollow">लिंक के बारे में अधिक जानकारी... (More about links…)</a>  
```

### Title Attribute

title attribute - किसी चीज़ के बारे में अतिरिक्त जानकारी निर्दिष्ट करता है। (tooltip text)

```html
<a href="https://www.hindi-education.com/html/" title=“HTML Course">हमारे HTML ट्यूटोरियल पर जाएं (Visit our HTML Tutorial)</a>
```

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>इसे काम करता हुआ देखें</b><br>

नीचे दिए गए लिंक के ऊपर अपना माउस घुमाएं: 

<a href="#" title="HTML Course" class="mak-link"> हमारे HTML पाठ्यक्रम पर जाएं (Visit our HTML Tutorial) </a>
</div>


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">
