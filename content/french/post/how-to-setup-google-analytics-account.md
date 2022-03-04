---
title: "Google Analytics खाता सेट कैसे करें?"
date: 2022-03-01T15:40:24+06:00
# post thumb
images:
  - "images/post/seo/technical-seo/google-analytics4.png"
#author
author: "Mayank Sharma"
# description
description: "Setting up Google Analytics Account"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-analytics"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

जब साइट मॉनिटरिंग की बात आती है तो Google Analytics पहली सेवा है जो हमारे दिमाग में आती है। चाहे आप अपनी वेबसाइट पर आने वाले ट्रैफ़िक की वृद्धि की निगरानी करना चाहते हों, अपनी साइट को और अधिक अनुकूलित करना चाहते हों या अपनी लीड/lead में सुधार करना चाहते हों, Google Analytics सबसे भरोसेमंद सेवा है। यह बहुत जरूरी है!

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

अन्य विश्लेषिकी उपकरण भी हैं, जैसे की adobe analytics, लेकिन उनमें से अधिकतर मुफ्त नहीं हैं।
</div>

अपनी वेबसाइट के लिए Google Analytics सेट करना तीन चरणों वाली प्रक्रिया है:<br>

* ***चरण 1***: अपनी Gmail आईडी का उपयोग करके एक <strong><span class="mak-text-color">Google Analytics खाता</span></strong> बनाएं। <br>
* ***चरण 2***: फिर हम अपनी <strong><span class="mak-text-color">प्रॉपर्टी (वेबसाइट या ऐप)</span></strong> को Google Analytics से जोड़ देंगे। जब हम पहली बार अपना Google Analytics खाता बनाते हैं, तो हम उसी समय अपनी पहली प्रॉपर्टी भी जोड़ते हैं। बाद में हम खाते में जितनी चाहें उतनी प्रॉपर्टी अलग से जोड़ सकते हैं। <br>
* ***चरण 3***: इसके बाद, हम <strong><span class="mak-text-color">अपनी Google Analytics प्रॉपर्टी को अपनी वेबसाइट से लिंक करेंगे</span></strong>। लिंकिंग सीधे आपकी वेबसाइट में Google Analytics कोड को एम्बेड करके की जा सकती है, या Google Tag Manager के माध्यम से। हम आम तौर पर 'Google Tag Manager के माध्यम से' पद्धति को प्राथमिकता देते हैं।

आइए इनमें से प्रत्येक चरण को अधिक विस्तार से देखें।


## एक Google Analytics खाता बनाएं

यह काफी आसान है। बस अपनी Gmail आईडी का उपयोग करके <a href="https://analytics.google.com/" target="_blank" title="Google Analytics वेबसाइट" class="mak-link">Google Analytics</a> में लॉगिन करें।

* मुफ्त में सेट अप (Set up for free) बटन दबाएं
<img src="../../../images/post/seo/technical-seo/google-analytics1.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:99%;height:99%; ">

* अपना खाता सेट करें: खाता नाम लिखें और Next दबाएं।
<img src="../../../images/post/seo/technical-seo/google-analytics2.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:72%;height:72%; ">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आप उसी Gmail आईडी से Google Analytics अकाउंट बना सकते हैं, जिससे आपने Google Adwords अकाउंट बनाया है, क्यूंकि हम उन्हें बाद में जोड़ेंगे।
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आपको प्रत्येक वेबसाइट के लिए एक अलग Google Analytics खाता बनाने की आवश्यकता नहीं है। आप एक ही Google Analytics खाते में 100 वेबसाइटें जोड़ सकते हैं। लेकिन यदि आप प्रत्येक वेबसाइट के लिए एक अलग Google Analytics खाता बनाना चाहते हैं, तो आप ऐसा कर सकते हैं। आपको कोई नहीं रोक रहा है।
</div>


## अपने Google Analytics खाते में प्रॉपर्टी जोड़ें

प्रॉपर्टी एक वेबसाइट या ऐप हो सकती है। आप एक Google Analytics खाते में अनेक प्रॉपर्टी जोड़ सकते हैं।

* अपनी प्रॉपर्टी सेट करें: प्रॉपर्टी का उचित नाम लिखें, उचित रिपोर्टिंग समय क्षेत्र और मुद्रा ड्रॉप डाउन से चुनें। हम इन प्रॉपर्टी विवरणों को बाद में भी बदल सकते हैं। <br>
<img src="../../../images/post/seo/technical-seo/google-analytics3.png" alt="वेबसाइट को Google Analytics से लिंक करना" style="width:63%;height:63%;">

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

यदि बाद में आप अपने खाते में एक और प्रॉपर्टी जोड़ना चाहते हैं, तो आप यहां जाएंगे:<br>
Admin → Create Property
</div>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>Google Analytics 4 प्रॉपर्टी बनाम Universal Analytics प्रॉपर्टी</b><br>

अब, डिफ़ॉल्ट रूप से आप Google Analytics में Google Analytics 4 प्रॉपर्टी बना रहे होंगे। पहले हम Universal Analytics प्रॉपर्टी बनाते थे। कुछ साल पहले Google Analytics इस तरह दिखता था:
<img src="../../../images/post/seo/technical-seo/google-analytics4.png" alt="वेबसाइट को google एनालिटिक्स से लिंक करना" style="width:99%;height:99%;"> <br>
आप अभी भी "Show Advanced Options" के अंतर्गत स्लाइडर बटन पर स्विच करके Universal Analytics प्रॉपर्टी बना सकते हैं। लेकिन Universal Analytics प्रॉपर्टी Google Analytics के पुराने संस्करण का हिस्सा है। इसलिए, हम अब इसका उपयोग करना पसंद नहीं करते हैं। <br><br>
अगर आप वेब डेटा स्ट्रीम (Web data stream) के साथ Google Analytics 4 प्रॉपर्टी सेट अप करते हैं, तो आपको एक मेजरमेंट आईडी (Measurement ID, जो "G-" से शुरू होती है) मिलती है। <br><br>
यदि आप Universal Analytics वेब प्रॉपर्टी सेट करते हैं (इसमें data streams के बजाय views होंगे), तो आपको एक ट्रैकिंग आईडी (Tracking ID, जो "UA-" से शुरू होती है) प्राप्त होगी।
</div>

* व्यावसायिक जानकारी प्रदान करें: Google Analytics से अपने उद्योग का प्रकार, व्यवसाय का आकार और आपको जो कुछ भी चाहिए, उसका चयन करें। <br>
<img src="../../../images/post/seo/technical-seo/google-analytics5.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:72%;height:72%;"><br><br>
अब अपनी प्रॉपर्टी बनाएं। <br><br>
जब आप अपने Google Analytics खाते में पहली प्रॉपर्टी बनाएंगे, तो आपको Google Analytics की सेवा की शर्तों से सहमत होना होगा। ऐसा करने से पहले ड्रॉप डाउन में से अपना देश चुनें।
<img src="../../../images/post/seo/technical-seo/google-analytics6.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:72%;height:72%;">

* प्रॉपर्टी के लिए डेटा स्ट्रीम सेट करें <br>
डेटा एकत्र करना शुरू करने के लिए हमें अपनी प्रॉपर्टी के लिए डेटा स्ट्रीम स्थापित करने की आवश्यकता है। किसी भी प्रॉपर्टी में कई डेटा स्ट्रीम हो सकती हैं, जिनमें से प्रत्येक एक अलग प्लेटफॉर्म से आती है। यह डेटा आपको आपकी Google Analytics रिपोर्ट और विश्लेषण में दिखाई देगा। <br><br>
अब क्यूंकि हमारे पास एक वेबसाइट है, हम वेब प्लेटफॉर्म (Web platform) का चयन करेंगे।
<img src="../../../images/post/seo/technical-seo/google-analytics7.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:99%;height:99%;">
अब, अपना वेबसाइट URL (डोमेन नाम, domain name) और स्ट्रीम नाम (Stream Name) जोड़ें।
<img src="../../../images/post/seo/technical-seo/google-analytics8.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:99%;height:99%; ">
'Create stream' बटन पर क्लिक करें और आपका काम हो गया!
<img src="../../../images/post/seo/technical-seo/google-analytics9.png" alt="वेबसाइट को google analytics से लिंक करना" style="width:99%;height:99%; ">
आप अपनी वेबसाइट के लिए मेजरमेंट आईडी (Measurement ID) कॉपी कर सकते हैं।


## Google Analytics को अपनी वेबसाइट से जोड़ना

पहले हम सीधे अपनी वेबसाइट में Google Analytics की ट्रैकिंग आईडी जोड़ते थे। लेकिन आजकल हम इस उद्देश्य के लिए Google Tag Manager का उपयोग करते हैं।

हम ट्रैकिंग आईडी (Tracking ID) के बजाय मापन आईडी (Measurement ID) का उपयोग करते हैं। हम इसे Google Tag Manager में जोड़ते हैं (बजाय सीधे हमारी वेबसाइट पर डालने के)। फिर, हम अपनी वेबसाइट पर Google Tag Manager का टैग जोड़ देंगे। 

आप <a href="../how-to-setup-google-tag-manager-account" title="Google टैग प्रबंधक सेट अप करना और Google Analytics से लिंक करना" class="mak-link">इस लेख में अपना Google Tag Manager खाता सेट अप करने और उसे अपनी Google Analytics प्रॉपर्टी से जोड़ने</a> के बारे में अध्ययन करेंगे।

अपने वेबसाइट कोड में विभिन्न सेवाओं के टैग एक-एक करके जोड़ने के बजाय, हम अन्य सेवाओं के सभी टैग केवल Google Tag Manager में डालते हैं। इस तरह, हम केवल अपनी वेबसाइट पर Google Tag Manager का टैग जोड़ते हैं और Google Tag Manager के माध्यम से अन्य सभी सेवाओं (जैसे Google analytics टैग, Facebook pixels, आदि) का प्रबंधन करते हैं। तो इस तरह हम अपनी वेबसाइट के कोड को साफ रख सकते हैं।


## Google Analytics से आंतरिक ट्रैफ़िक बहिष्कृत करें

एक बार जब आप अपनी साइट को Google Analytics से लिंक कर लेते हैं, तो यह आपकी साइट पर जाने वाले प्रत्येक उपयोगकर्ता को ट्रैक करना शुरू कर देगा, जिसमें आप भी शामिल हैं!

यह न केवल आपके डेटा को अशुद्ध कर देगा, यह आपकी वेबसाइट की बाउंस दर को भी बढ़ा सकता है, क्योंकि हम आम तौर पर केवल कुछ सेकंड के लिए हमारी वेबसाइट पर जाते हैं। इसलिए, यह आवश्यक है कि हम स्वयं को Google Analytics के उपयोगकर्ता गतिविधि डेटा से बाहर कर दें। सौभाग्य से, ऐसा करने के कई तरीके हैं:

* Google Analytics की इनबिल्ट सुविधा का उपयोग करें <br><br>
आप अपनी Google Analytics प्रॉपर्टी पर जा सकते हैं और 'फ़िल्टर (Filter)' अनुभाग में अपने कंप्यूटर का IP पता दर्ज कर सकते हैं। अगर आप WiFi का इस्तेमाल कर रहे हैं तो उस वाईफाई से जुड़े सभी कंप्यूटरों का IP एड्रेस एक जैसा होगा। यह सबसे आसान तरीका है और Google Analytics सेवा द्वारा ही प्रदान किया जाता है। <br><br>
हालांकि, चूंकि अधिकांश व्यक्ति और छोटे संगठन गतिशील/dynamic WiFi पते का उपयोग करते हैं (नाकि स्थिर/static IP पते का), यह हर दो सप्ताह में बदल जाएगा। इसलिए, हमें Google Analytics में अपना IP पता अपडेट करते रहना होगा। <br><br>
इस पद्धति के बारे में अधिक जानकारी के लिए आप निम्नलिखित लेख पढ़ सकते हैं: <br>
<a href="https://support.google.com/analytics/answer/1034840?hl=hi" target="_blank" title="Google वेबसाइट आलेख" class="mak-link">Google Analytics आलेख</a> <br>
<a href="https://www.meeum.com/articles/block-ip-google-analytics/" target="_blank" title="Meeum वेबसाइट लेख" class="mak-link">Meeum वेबसाइट लेख</a>

* इंटरनेट कनेक्शन बंद कर देना<br><br>
यह बहुत आसान है। यदि आपके पास एक ऐसी वेबसाइट है जिसे आप अपने कंप्यूटर (लोकलहोस्ट/localhost) पर चला सकते हैं और जांच सकते हैं, तो आप अपने ब्राउज़र पर अपनी वेबसाइट चलाते समय अपने कंप्यूटर के वाईफाई कनेक्शन को स्विच-ऑफ कर सकते हैं। <br><br>
उदाहरण के लिए, यदि आपके पास HUGO वेबसाइट या Angular/Ionic वेबसाइट है, तो अपने परिवर्तनों को Github या Hosting प्रदाता पर धकेलने से पहले, आप इसे localhost में देख सकते हैं। <br><br>
हालाँकि, यदि आपके पास वर्डप्रेस (WordPress) या ब्लॉगर (Blogger) वेबसाइट है, तो यह विकल्प आपके पास मौजूद नहीं है। क्यूंकि वर्डप्रेस और ब्लॉगर में आप सीधे अपनी लाइव वेबसाइट पर काम करते हैं। ह्यूगो (HUGO) जैसी static sites के मामले में, वेबसाइट हमारे कंप्यूटर पर ही होती है।

* अन्य तरीके <br><br>
और भी कई तरीके उपलब्ध हैं, जिनका आप इस्तेमाल कर सकते हैं। उदाहरण के लिए, आप Google Manager Tag या Google Analytics टैग को उपयोगकर्ता गतिविधि डेटा, Google Analytics को भेजने से रोकने के लिए अपने ब्राउज़र में कुकीज़ (cookies) या स्थानीय स्टोरेज (localStorage) का भी उपयोग कर सकते हैं, या आप क्रोम एक्सटेंशन (Chrome Extension) का उपयोग कर सकते हैं। <br><br>
ध्यान रखें कि, यदि आप cookies विधि का उपयोग कर रहे हैं, तो आपके ब्राउज़र में cookies को हटाते ही आपकी सेटिंग्स खो जाएँगी। इसलिए, cookies का उपयोग करने की तुलना में localStorage विधि का उपयोग करना एक बेहतर विकल्प हो सकता है। <br><br>
आप इन विधियों के बारे में अधिक जानने के लिए निम्नलिखित लेख पढ़ सकते हैं: <br>
<a href="https://www.daniloaz.com/hi/5-ways-to-exclude-your-own-visits-from-google-analytics/" target="_blank" title="daniloaz वेबसाइट आलेख" class="mak-link">इन 5 तरीकों से google-analytics डाटा से खुदको बाहर रखें</a>

