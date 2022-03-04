---
title: "Google Tag Manager खाता सेट करना और कंटेनरों में टैग जोड़ना"
date: 2022-03-01T15:40:24+06:00
# post thumb
images:
  - "images/post/seo/technical-seo/google-tag-manager7.png"
#author
author: "Mayank Sharma"
# description
description: "Setting up GTM Account"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-tag-manager"]
type: "regular" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

Google Tag Manager (GTM) एक टैग प्रबंधन प्रणाली है। यह हमें हमारी वेबसाइट के कोड को संपादित किए बिना, हमारी वेबसाइट पर टैग जोड़ने (और प्रबंधित करने) की अनुमति देता है।

सामान्य शब्दों में, हम केवल अपनी वेबसाइट में Google Tag Manager टैग जोड़ते हैं, कोई अन्य कोड/टैग नहीं। अन्य सभी टैग, चाहे वह मापन या मार्केटिंग के लिए हों, अब Google Tag Manager में जोड़े जाएंगे, न कि सीधे हमारी वेबसाइट पर।

इससे हमें अपना वेबसाइट कोड साफ रखने में मदद मिलती है, और हमें हर बार किसी सेवा का टैग जोड़ने के लिए अपना कोड संपादित करने की आवश्यकता नहीं होती है।

मैं यही करता हूं। मैं अपनी साइट में केवल अपना Google Tag Manager टैग जोड़ता हूं। मैं अन्य सभी टैग (जैसे Google Analytics टैग, Facebook पिक्सेल, आदि) को google Tag Manager के माध्यम से ही प्रबंधित करता हूं। यह अधिक साफ तरीका है और प्रबंधित करने में आसान है।

यही तरीका हम इस लेख में समझने जा रहे हैं।

<div class="toc-mak">
  <br>
  <b>सामग्री तालिका</b> <br> <br> <br>
  <ul>
  <li>Google टैग प्रबंधक खाता सेट करना</li> <br>
  <li>कंटेनर बनाना</li> <br>
  <li>कंटेनर में टैग जोड़ना</li> <br>
  </ul>
</div>

अब, अपना Google Tag Manager खाता स्थापित करने का पहला चरण शुरू करते हैं।

## Google Tag Manager खाता सेट करना

* अपनी Gmail आईडी का उपयोग करके <a href="https://marketingplatform.google.com/about/tag-manager/features/" target="_blank" title="Google Tag Manager वेबसाइट" class="mak-link">Google Tag Manager वेबसाइट</a> में साइन इन करें।

* अब अकाउंट बनाएं। अपना खाता नाम और देश का नाम दर्ज करें। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager1.png" alt="google tag manager को google analytics से जोड़ना" style="width:72%;height :72%;">


## कंटेनर बनाना

जैसे ही आप अपना Google Tag Manager खाता सेट करेंगे, आपको अपना पहला कंटेनर (अपनी वेबसाइट या ऐप के लिए) भी सेटअप करना होगा।

लेकिन हम बाद में, अपने खाते में और कंटेनर भी जोड़ सकते हैं। ऐसा करने के लिए:

* 'All accounts' पर जाएं (यानी Home पर जाएं)। इसके लिए, आपको बस Tag Manager icon (ऊपर-बाईं ओर) के पास स्थित तीर पर क्लिक करना होगा। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager2.png" alt="google tag manager को google analytics से जोड़ना" style="width:81%;height:81%;"> <br>

<div class="toc-mak">
  <img src="../../../images/pencil.png">
  <b>नोट</b><br>

आप Admin में जाकर भी ऐसा कर सकते हैं।
</div>

* 3 डॉट्स ड्रॉपडाउन से कंटेनर बनाएं। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager3.png" alt="google tag manager को google analytics से जोड़ना" style="width:45%;height:45%;">
<img src="../../../images/post/seo/technical-seo/google-tag-manager4.png" alt="google tag manager को google analytics से जोड़ना" style="width:54%;height:54%;">

एक बार जब आप कंटेनर बना लेते हैं, तो आपको दो कोड मिलेंगे:
* स्क्रिप्ट कोड (Script code) - आपकी वेबसाइट के header/head में डाला जाना होता है। मेरी ह्यूगो (HUGO) साइटों में मैं बस इसका ही इस्तेमाल करता हूं।
* नॉन-स्क्रिप्ट कोड (Non-script code) - body में डाला जाना होता है। इसका उपयोग तब किया जाएगा जब उपयोगकर्ता के ब्राउज़र में जावास्क्रिप्ट अक्षम (JavaScript disabled) हो, अर्थात अगर स्क्रिप्ट कोड काम नहीं कर रहा हो। यह एक तरह का बैकअप है। आप चाहें तो इसे अपनी वेबसाइट में न भी डालें। मैंने इसे अपनी वेबसाइट पर नहीं डाला, और फिर भी सब कुछ ठीक चला। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager5.png" alt="google टैग मैनेजर को google analytics से जोड़ना" style="width:99%;height:99%;">

यदि आप अपनी HUGO साइट में Google Tag Manager टैग जोड़ना सीखना चाहते हैं, तो <a href="../adding-gtm-tag-to-hugo-website" title="HUGO वेबसाइट में Google Tag Manager टैग जोड़ना" class="mak-link">इस लेख को पढ़ें</a>। 

हमारे वर्तमान लेख का मुख्य उद्देश्य Google Tag Manager खाते और उसमें मौजूद हमारे कंटेनरों पर है।


## कंटेनर में टैग जोड़ना

हम Google Tag Manager में मौजूद अपनी वेबसाइट के कंटेनर में कई अलग-अलग सेवाओं के टैग जोड़ सकते हैं। लेकिन यहां हम केवल Google Analytics का टैग जोड़कर दिखाएंगे। 

ऐसा करने से पहले, अपनी वेबसाइट के लिए Google Analytics खाता सेट करें और अपनी Google Analytics Measurement id प्राप्त करें।

* अब यहाँ जाएँ: <br>
Tags → New <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager6.png" alt="google tag manager को google analytics से जोड़ना" style="width:99%;height:99%;">

* Google Analytics GA4 कॉन्फ़िगरेशन चुनें (अब यह Google analytics में डिफ़ॉल्ट रूप से चुना जाता है; पहले यह Universal Analytics हुआ करता था): <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager7.png" alt="google tag manager को google एनालिटिक्स से लिंक करना" style="width:99%;height:99%;">

* measurement id डालें, टैग को उचित नाम दें और save करें: <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager8.png" alt="google tag manager को google analytics से जोड़ना" style="width:81%;height:81%;">

* अब इस टैग में एक ट्रिगर (trigger) जोड़ें। उदाहरण के लिए, मैंने All Pages चुना। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager9.png" alt="google tag manager को google analytics से जोड़ना" style="width:54%;height:54%;">

आपने अपनी वेबसाइट के Google Tag Manager Container में सफलतापूर्वक Google Analytics टैग जोड़ लिया है। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager10.png" alt="google tag manager को google analytics से जोड़ना" style="width:99%;height:99%;"> <br><br>

अब अपने कंटेनर को 'Submit' करना न भूलें। कई बार लोग इस कदम को भूल जाते हैं। यह बटन ऊपरी-दायीं कोने पर होता है। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager11.png" alt="google tag manager को google analytics से जोड़ना" style="width:81%;height:81%;"> <br><br>

संस्करण (Version) का नाम और संस्करण विवरण (Version description) जोड़ें और प्रकाशित (Publish) करें। <br>
<img src="../../../images/post/seo/technical-seo/google-tag-manager12.png" alt="google tag manager को google analytics से लिंक करना" style="width:54%;height:54%;"> <br><br>
आपने अपना वेबसाइट कंटेनर, Google Analytics टैग के साथ सफलतापूर्वक प्रकाशित कर दिया है।


## उपसंहार 

यहाँ हमने अपनी वेबसाइट के लिए कंटेनर (container) सेट अप किया है और इसमें Google Analytics टैग जोड़ा है, जो कि जब भी कोई हमारी साइट के पृष्ठों पर जाएगा तो ट्रिगर (trigger) हो जाएगा। लेकिन एक कदम बाकी है।

हमें अपनी वेबसाइट में टैग/कोड जोड़कर अपनी वेबसाइट को Google Tag Manager से लिंक करना होगा। Google Tag Manager को अपनी HUGO वेबसाइट से जोड़ने के लिए आप <a href="../adding-gtm-tag-to-hugo-website" title="ह्यूगो में Google Tag Manager टैग जोड़ना" class="mak-link">यह लेख पढ़ सकते हैं</a>।

