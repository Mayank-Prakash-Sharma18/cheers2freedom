---
title: "Google टैग प्रबंधक को HUGO साइट से कैसे जोड़ें?"
date: 2022-02-27T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/google-tag-manager-hugo1.png"
#author
author: "Mayank Sharma"
# description
description: "Google टैग प्रबंधक को HUGO साइट से कैसे जोड़ें?"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-tag-manager"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

इस लेख में हम सीखेंगे कि Google टैग प्रबंधक (Google Tag Manager) कोड को HUGO साइट में कैसे डाला जाए, भले ही आपके द्वारा उपयोग की जाने वाली थीम में इसकी अनुमति देने के लिए पूर्व-सेटिंग्स न हों। 

इसके अलावा, आप अन्य सेवाओं (जैसे Google AdSense, आदि) के टैग जोड़ने के लिए भी इस पद्धति का उपयोग कर सकते हैं।

## पूर्वापेक्षाएँ

इससे पहले कि हम आगे बढ़ें, कुछ पूर्वापेक्षाएँ हैं जिन्हें आपको पूरा करने की आवश्यकता है:
* आपको अपना Google Analytics खाता सेट करना होगा। यदि आपने नहीं किया है, तो आप इसे स्थापित करने के लिए <a href="../how-to-setup-google-analytics-account" title="Set up your Google Analytics account" class="mak-link">यह लेख</a> पढ़ सकते हैं ।
* आपने अपना Google Tag Manager खाता सेट कर लिया है, और इस Google Tag Manager के कंटेनर में अपनी वेबसाइट का Google Analytics टैग जोड़ दिया है। आप इसे सेट करने के लिए <a href="../how-to-setup-google-tag-manager-account" title="Set up your Google Analytics account" class="mak-link">इस लेख</a> का अनुसरण कर सकते हैं| 


## Google Tag Manager (GTM) टैग प्राप्त करें

Google Tag Manager में अपनी वेबसाइट के लिए एक कंटेनर बनाने के बाद, आपको एक कोड स्निपेट (code snippet) मिलेगा। यह वही है जो आपको अपनी वेबसाइट में एम्बेड करने की आवश्यकता है। यह कुछ इस तरह दिखना चाहिए:

```js
<!-- Google Tag Manager -->
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PC584TL');
</script>
<!-- End Google Tag Manager -->
```

## Google Tag Manager टैग एम्बेड करें

### अगर थीम GTM टैग के लिए पूर्व-कॉन्फ़िगर है

यदि आपकी ह्यूगो थीम में आपके लिए Google Tag Manage कोड जोड़ने के लिए कॉन्फ़िगरेशन है, तो आपका काम बहुत आसान है। बस Google Tag Manage आईडी, यानी GTM-XXXXXXX कोड को आवश्यक स्थान पर डाल दें।

उदाहरण के लिए, Academic थीम में हमें केवल आवश्यक GTM-XXXX कोड को params.toml में डालने की आवश्यकता होती है। <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo1.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:81%;height:81%;">

बस, इतना ही करना है। 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

पृष्ठभूमि में आप देखेंगे कि यह partial इसके लिए काम करता है: `layouts/partials/marketing/google_tag_manager.html`

इसमें वही कोड है जो Google Tag Manager द्वारा दिया गया था; params.toml से केवल Google Tag Manager आईडी प्राप्त की जाती है। <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo2.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:99%;height:99%;">
</div>

लेकिन अगर आपकी थीम में Google Tag Manager कॉन्फ़िगरेशन नहीं है, तो हम इसे मैन्युअल रूप से करेंगे। पढ़ते रहिये!

### थीम GTM टैग के लिए कॉन्फ़िगर नहीं की गई

हमें GTM टैग को ऐसे स्थान पर एम्बेड करना चाहिए जिससे यह हमारे सभी वेब पेजों को ट्रैक कर सके। अब, इसे हमारी वेबसाइट के प्रत्येक पेज और पोस्ट पर एक-एक करके एम्बेड करना थकाऊ काम और बहुत बुरा विचार होगा। इसलिए, हम आम तौर पर इसे अपनी वेबसाइट के `<head>` अनुभाग में एम्बेड करते हैं, ताकि जब भी कोई पृष्ठ किसी ब्राउज़र में खोला जाए तो इसे लोड किया जा सके।

#### हेड फाइल

HUGO में, आपको head.html नाम की फ़ाइल या इसी तरह के नाम वाली कोई चीज़ ढूंढनी होगी। Reader थीम में, यह निम्न फ़ोल्डर में होती है: `themes/reader/layouts/partials/head.html`

यह वह फ़ाइल है जहां हमें अपने Google Tag Manager टैग को ```<head> … </head>``` टैग के बीच एम्बेड करना होता है।

ह्यूगो में हम थीम फोल्डर में फाइलों में कोई बदलाव नहीं करते हैं, क्योंकि अगर हम बाद में अपने प्रोजेक्ट में अपडेटेड थीम जोड़ते हैं या अपनी थीम बदलते हैं तो हमारे लिए बहुत मुश्किल हो जाएगा।

इसके बजाय हम अपने रूट फ़ोल्डर में एक समान निर्देशिका संरचना बनाते हैं और उस फ़ाइल को वहां कॉपी करते हैं। तो, हमारी कॉपी की गई फ़ाइल निम्न फ़ोल्डर में होगी: `layouts/partials/head.html`

अब, हम इस फ़ाइल में कोई भी संपादन करने के लिए स्वतंत्र हैं। यह फ़ाइल थीम फ़ोल्डर में स्तिथ संबंधित फ़ाइल को ओवरराइड कर देगी।

#### gtm फ़ाइल

अब, gtm.html (या अपनी पसंद का कोई भी नाम) नाम की एक फाइल बनाएं और Google टैग मैनेजर से प्राप्त कोड को यहां पेस्ट करें। यह फ़ाइल निम्न फ़ोल्डर में होनी चाहिए: `layouts/partials/gtm.html`

इन दो फाइलों को जोड़ने के बाद, मेरी वेबसाइट की निर्देशिका संरचना का एक स्नैपशॉट यहां दिया गया है। <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo3.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:63%;height:63%;">

#### दो फाइलों को लिंक करें

अब, बस head.html फ़ाइल में उस स्थान पर एक छोटा सा Go भाषा स्निपेट जोड़ें, जहां आप gtm.html कोड एम्बेड करना चाहते हैं।

यहाँ Go भाषा का वह स्निपेट (snippet) दिया गया है:
<!-- ``` {{ partial "gtm" . }} ``` <br> -->
<input type="text" value='{{ partial "gtm" . }}' id="myInput" class="mak-input" style="width:72%;">
<button onclick="makCopyFunction(this)" data-target="myInput" class="mak-button">क्लिपबोर्ड पर कॉपी करें</button><br>

(हम .html फ़ाइल एक्सटेंशन को छोड़ देते हैं। इसलिए, हम केवल "gtm" लिखेंगे न कि "gtm.html")

<img src="../../../images/post/hugo/google-tag-manager-hugo4.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:72%;height:72%;">

इतना ही करना है!


अब आपने अपनी HUGO साइट को Google Tag Manager से सफलतापूर्वक लिंक कर लिया है, जिसे बदले में Google Analytics या ऐसी किसी अन्य सेवा से जोड़ा जा सकता है। यह वह तरीका है जिसका उपयोग आप अपनी वेबसाइट में किसी अन्य कोड को एम्बेड करने के लिए भी कर सकते हैं, उदा. Google AdSense, आदि का कोड। 

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यह काम करता है क्योंकि ह्यूगो कोड के ब्लॉक से वेबसाइट पेज बनाता है। 

head.html और ऐसी अन्य फाइलों (जैसे header.html, footer.html, इत्यादि) में आपको बहुत सारे Go भाषा कोड स्निपेट मिलेंगे, नाकि ज्यादा HTML कोड। ये फ़ाइलें अन्य फ़ाइलों को कॉल करती हैं, जिनमें वास्तविक आवश्यक HTML होता है।

हमारे मामले में, हमने head.html में जो Go कोड स्निपेट डाला है, वह HTML कोड को gtm.html से ले लेगा। यह हमारे कोड को साफ रखने में मदद करता है, क्योंकि Google Tag Manager कोड को एक अलग फाइल में रखा गया है।

आप Google टैग प्रबंधक कोड को सीधे head.html फ़ाइल में भी एम्बेड कर सकते हैं, बजाय इसके कि आप इसे अप्रत्यक्ष रूप से gtm.html फ़ाइल में डालें और फिर उस फ़ाइल को head.html से लिंक करें। लेकिन यह थोड़ा गन्दा लगेगा।
</div>


## यह सत्यापित करना कि एम्बेड किया गया Google Tag Manager (GTM) कोड काम करता है

पहली चीज़ जो हमें देखनी चाहिए वह यह है कि gtm.html फ़ाइल में स्तिथ कोड को head.html फ़ाइल में डाला जा रहा है, या नहीं। इसे चेक करना काफी आसान है।

आप अपने ब्राउज़र में Developers Tools के Element टैब को खोल सकते हैं। आपको अपनी वेबसाइट के किसी भी पृष्ठ के head भाग में Google Tag Manager कोड दिखना चाहिए। <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo5.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:99%;height:99%;">

अब, हमें जांचना चाहिए कि क्या यह कोड वास्तव में काम करता है और उपयोगकर्ता डेटा को Google Tag Manager को भेजता है।

ऐसा करने के लिए, आप अपनी वेबसाइट खोल सकते हैं (लाइव वेबसाइट या लोकलहोस्ट/localhost में आपके कंप्यूटर पर) और जांच सकते हैं कि Google Analytics का रीयल-टाइम उपयोगकर्ता ट्रैकर (Real-time user tracker) आपको रीयल-टाइम उपयोगकर्ता के रूप में दिखा रहा है या नहीं। <br>
<img src="../../../images/post/hugo/google-tag-manager-hugo6.png" alt="Adding Google Tag Manager tag in HUGO website" style="width:81%;height:81%;">

"पिछले 30 मिनट में उपयोगकर्ता (Users in Last 30 Minutes)" काउंटर कम से कम 1 होना चाहिए। इसे थोड़ा समय दें। कभी-कभी, काउंटर एक-दो मिनट के बाद बदलता है। यदि यह एक नई साइट है, तो शायद उस साइट पर केवल आप ही लाइव होंगे। आप दोगुने सुनिश्चित होने के लिए लोकेशन (location) की जांच भी कर सकते हैं।

यदि यह 1 या अधिक लाइव उपयोगकर्ता दिखाता है, तो इसका मतलब है कि आपने Google Tag Manager के माध्यम से अपनी HUGO साइट को Google Analytics से सफलतापूर्वक लिंक कर लिया है।

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>समस्या निवारण</b><br>

कभी-कभी, हमें डेवलपर टूल में 404 त्रुटि दिखाई देती है, जो हमें बताती है कि Google Tag Manager प्रतिसाद नहीं दे रहा है (not responding)। यह एक बहुत ही सामान्य गलती के कारण होता है। 

इसका सीधा सा मतलब है कि आपने अपनी वेबसाइट के कंटेनर को Google Tag Manager में प्रकाशित/publish नहीं किया है। इसलिए यह कोई डेटा नहीं लौटा रहा है।

समाधान सरल है। बस Google Tag Manager कंटेनर बनाने के बाद उसे प्रकाशित/publish करना न भूलें।
</div>


<script src="../../../js/code-block-script.js"></script>
<link rel="stylesheet" href="../../../css/code-block-style.css">

