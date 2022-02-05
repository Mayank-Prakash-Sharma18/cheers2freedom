---
title: "ह्यूगो क्या है और इसे कैसे इनस्टॉल करें? (HUGO kya hai?)"
date: 2022-02-04T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/hugo.png"
#author
author: "Mayank Sharma"
# description
description: "Static Site Generator"
# Taxonomies
categories: ["website-creation","hugo"]
tags: ["web-development"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
---

इस लेख में हम जानेंगे - <strong>What is HUGO?, in Hindi</strong>

<div class="toc-mak">
<img src="../../../images/pencil.png">
<b>Table of Contents</b>
<ul>
<li>ह्यूगो (HUGO) क्या है?</li>
<li>HUGO कैसे स्थापित/इनस्टॉल करें?</li>
</ul>
</div>

## ह्यूगो (HUGO) क्या है? (HUGO kya hai?)

ह्यूगो एक स्टैटिक साइट जनरेटर (SSG) है, जिसे आप स्टैटिक वेबसाइट और ब्लॉग बनाने के लिए उपयोग कर सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि आप नहीं जानते कि स्टैटिक साइट या स्टैटिक साइट जेनरेटर (SSGs) क्या हैं, तो आप उनके बारे में <a href="../what-is-static-site-generator-in-hindi" class="mak-link" title="Static Site Generators (SSGs) - Hindi">यहाँ</a> पढ़ सकते हैं।

इससे पहले कि हम HUGO की गहराई में जाएं, हमें HUGO की इस परिभाषा में उल्लिखित इन दो शब्दों को समझने की जरूरत है, यानी स्टेटिक वेबसाइट क्या है और स्टेटिक साइट जनरेटर क्या होते हैं?
</div>

यह Google द्वारा विकसित ***GO*** भाषा पर आधारित है। हालांकि HUGO का उपयोग करके साइट बनाने के लिए आपको इस भाषा का अधिक ज्ञान होने की आवश्यकता नहीं है। हम किसी थीम (theme) का उपयोग करके काम चला सकते हैं।

हो सकता है कि कभी-कभी आपको यहां और वहां कुछ चीजें बदलनी पड़ें। जिसे मैनेज किया जा सकता है। और मैं आपके इस प्रयास में कुछ हद तक आपका मार्गदर्शन करूंगा।

चूंकि HUGO एक ओपन सोर्स स्टैटिक साइट जनरेटर है, हम बहुत सारे अनुकूलन (customizations) कर सकते हैं, और यहां तक ​​कि अपनी खुद की थीम भी बना सकते हैं।

हालाँकि हम अपने पेज और पोस्ट बनाने के लिए HUGO में मार्कअप लैंग्वेज (markup language) का उपयोग करते हैं, लेकिन हम साधारण HTML, CSS और JavaScript का भी उपयोग कर सकते हैं। आपको बस एक कोड संपादक (code editor) की आवश्यकता है, जैसे की विजुअल स्टूडियो कोड (Visual Studio Code - VSS), Sublime Text, इत्यादि।


## HUGO कैसे स्थापित/इनस्टॉल करें? (HUGO kaise install karein?)

ह्यूगो को इनस्टॉल (install) करने के कई तरीके हैं। आप उन्हें <a href="https://gohugo.io/getting-started/installing" target="_blank" title="Install HUGO" class="mak-link">यहां</a> देख सकते हैं।

हालांकि, यहां हम सीखेंगे कि <strong>Chocolatey का उपयोग करके विंडोज ऑपरेटिंग सिस्टम पर HUGO कैसे इनस्टॉल करें</strong>।

तो, HUGO को इनस्टॉल करने से पहले आपको Chocolatey इनस्टॉल करने की आवश्यकता है।

### Chocolatey इनस्टॉल करना

***चॉकलेट इनस्टॉल करने के लिए कमांड***: <br>

<textarea id="myInput1" class="mak-input" style="width:99%;height:200px;">Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</textarea>
<button onclick="makCopyFunction(this)" data-target="myInput1" class="mak-button">क्लिपबोर्ड पर कॉपी करें</button><br>

मैंने इसे इनस्टॉल करने के लिए ***windows powershell का admin*** के रूप में उपयोग किया। लेकिन एक बार इंस्टॉल हो जाने पर हम इसे कमांड प्रॉम्प्ट (command prompt) पर भी इस्तेमाल कर सकते हैं।

इसके बारे में अधिक पढ़ने के लिए आप <a href="https://gohugo.io/getting-started/installing/#chocolatey-windows" target="_blank" title="Install HUGO" class="mak-link">इस वेबसाइट</a> को देख सकते हैं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

Chocolatey (विंडोज) - जब आप node.js इनस्टॉल करते हैं, तो इसे साथ में ही इनस्टॉल किया जा सकता है। जब आप node इनस्टॉल कर रहे होते हैं तो यह आपको एक विकल्प के रूप में पेश किया जाता है।

हालाँकि, मैंने हाल ही में Node.js का नवीनतम संस्करण इनस्टॉल किया था, लेकिन फिर भी Chocolatey इनस्टॉल नहीं किया गया। यह शायद लिपियों की प्रतिबंधित निष्पादन नीति (restricted execution policy of scripts) के कारण था।

इसलिए, मैंने इसकी <a href="https://chocolatey.org/install" target="_blank" title="Install HUGO" class="mak-link">वेबसाइट</a> पर दिए गए निर्देशों का पालन करते हुए अलग से Chocolatey इंस्टॉल किया। 
</div>

एक बार यह हो जाने के बाद, आप आगे बढ़ सकते हैं और HUGO को इनस्टॉल कर सकते हैं।

### HUGO इनस्टॉल करना

यदि आप विंडोज मशीन पर हैं और पैकेज प्रबंधन (package management) के लिए Chocolatey का उपयोग करते हैं, तो आप निम्नलिखित एक लाइन कमांड के साथ HUGO को इनस्टॉल कर सकते हैं: <br>
<input type="text" value="choco install hugo -confirm" id="myInput2" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput2" class="mak-button">क्लिपबोर्ड पर कॉपी करें</button><br>

यदि आपको HUGO के "विस्तारित" Sass/SCSS संस्करण की आवश्यकता है, तो निम्न कमांड का उपयोग करें: <br>
<input type="text" value="choco install hugo-extended -confirm" id="myInput3" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput3" class="mak-button">क्लिपबोर्ड पर कॉपी करें</button><br>
    
<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

मैंने इस उद्देश्य के लिए विंडोज़ कमांड प्रॉम्प्ट (cmd) का उपयोग किया। हालाँकि, सुनिश्चित करें कि आप cmd को Admin के रूप में खोल रहे हैं।
</div>

आपको HUGO के किस संस्करण को इनस्टॉल करने की आवश्यकता है, यह तय करने के लिए आपको अपनी HUGO थीम (theme) की आवश्यकताओं की जांच करने की आवश्यकता है। अधिकांश HUGO थीम स्पष्ट रूप से इसका उल्लेख करती हैं। हालांकि, अगर आपको अच्छे से नहीं पता है, तो विस्तारित संस्करण स्थापित करें। मैं भी यही करता हूं।

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

विंडोज़ 10 पर ह्यूगो को इनस्टॉल करने का दूसरा तरीका इस <a href="https://gohugo.io/getting-started/installing#windows" target="_blank" title="Install HUGO" class="mak-link">वेबसाइट</a> पर दिया गया है। यह उन लोगों के लिए है जिनके पास chocolatey नहीं है।
</div>

### HUGO संस्करण की जांच करें

एक बार जब आप HUGO इनस्टॉल कर लेते हैं, तो आप निम्न कमांड का उपयोग करके इसके संस्करण (version) की जांच कर सकते हैं:

<input type="text" value="hugo version" id="myInput4" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput4" class="mak-button">क्लिपबोर्ड पर कॉपी करें</button><br>
