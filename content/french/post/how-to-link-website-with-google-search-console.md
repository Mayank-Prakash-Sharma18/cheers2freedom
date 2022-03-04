---
title: "अपनी साइट को Google Search Console से कैसे जोड़ें?"
date: 2022-02-28T15:40:24+06:00
# post thumb
images:
  - "images/post/seo/technical-seo/google-search-console1.png"
#author
author: "Mayank Sharma"
# description
description: "Linking site with Google Search Console"
# Taxonomies
categories: ["seo","static-sites","hugo"]
tags: ["hugo","google-search-console"]
type: "trending" # available type (epic, trending, popular, or regular)
draft: false
katex: false
---

Google Search Console (जिसे पहले Google Webmaster कहा जाता था) Google द्वारा ही प्रदान की जाने वाली एक वेब सेवा है। यह वेबमास्टरों को Google खोज परिणामों में साइट के प्रदर्शन को मापने और उनकी साइटों को अनुकूलित करने में मदद करता है, जैसे की विभिन्न पृष्ठों पर खोज यातायात पता करना, खोजशब्दों (keywords) की पहचान करना, अनुक्रमण मुद्दों (indexing issues) को ठीक करना, आदि।

इसलिए, अपनी साइट को Google Search Console से लिंक करना एक अच्छा विचार है। इस लेख में हम सीखेंगे कि अपनी साइट को Google Search Console में कैसे सबमिट करें।

अपनी साइट को Google Search Console में सबमिट करने के लिए, हमें इन चरणों का पालन करना होगा:
* Gmail अकाउंट से लॉग इन करें
* Google Console से टैग प्राप्त करें।
* उस कोड को अपनी वेबसाइट में जोड़ें।


## Gmail अकाउंट से लॉग इन करें

बस Gmail खाते से <a href="https://search.google.com/search-console" target="_blank" title="Google Search Console / Google Webmaster" class="mak-link">Google Search Console</a> में लॉगिन करें।


## Google Console से अपना टैग प्राप्त करें

आपको अपनी प्रॉपर्टी का प्रकार चुनना होगा। आपके पास दो विकल्प हैं:
* Domain
* URL prefix

'Domain property type' का उपयोग करने से सभी उप डोमेन (m, www, आदि) और एकाधिक प्रोटोकॉल (http, https, आदि) शामिल हो जाएंगे, यानी आपके सभी डोमेन/उप डोमेन एक बार में ही सत्यापित हो जाएंगे। यही हम करने जा रहे हैं।

यदि आप इस प्रॉपर्टी का उपयोग करते हैं, तो आपको केवल एक विधि दी जाएगी जिसके द्वारा आप अपनी साइट को सत्यापित कर सकते हैं, अर्थात DNS सत्यापन (DNS verification) के माध्यम से। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console1.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;">

अब 'Continue' दबाएं और Google console से कोड प्राप्त करें। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console2.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;">

अभी तक 'Verify' बटन पर क्लिक न करें। हमारे DNS प्रदाता में TXT रिकॉर्ड जमा करने के बाद, हम वापस आएंगे और 'Verify' बटन पर क्लिक करेंगे।


## अपने DNS प्रदाता में TXT रिकॉर्ड जोड़ें

DNS सत्यापन पद्धति में, हमें अपने वेबसाइट कोड में कोई कोड या टैग जोड़ने की आवश्यकता नहीं है। इसके बजाय, हम Google search console द्वारा प्रदान किए गए TXT रिकॉर्ड को हमारी वेबसाइट के DNS प्रदाता में डाल देंगे।

आपका DNS प्रदाता शायद वह साइट है जहाँ से आपने अपना डोमेन-नाम खरीदा है, उदा. Namecheap, GoDaddy, आदि। आप अपने डोमेन-नाम (domain-name) के Manage सेक्शन में DNS सेटिंग्स देखेंगे।

हालाँकि, यदि आपने अपनी साइट के नेमसर्वर (nameservers) को अपने डोमेन-नाम प्रदाता से अपनी होस्टिंग सेवा में स्थानांतरित कर दिया है, जैसे की Bluehost या Netlify को, तो फिर हम अपने TXT रिकॉर्ड को अपने होस्टिंग सेवा खाते में डालेंगे।

उदाहरण के लिए, चूंकि मैंने अपनी वेबसाइट के नेमसर्वर को Namecheap खाते से Netlify में स्थानांतरित कर दिया था, इसलिए मैंने Netlify में अपनी साइट का TXT रिकॉर्ड डाला।


## Netlify में Google Search Console का TXT रिकॉर्ड कैसे जोड़ें?

यह वास्तव में बहुत आसान है।

डोमेन (Domains) पर जाएं → आपका वेबसाइट डोमेन → DNS सेटिंग्स

फिर TXT प्रकार का नया DNS रिकॉर्ड जोड़ें: <br>
<img src="../../../images/post/seo/technical-seo/google-search-console3.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:90%;height:90%;">

अब वापस गूगल सर्च कंसोल (Google Search Console) पर जाएं, और Verify पर क्लिक करें: <br>
<img src="../../../images/post/seo/technical-seo/google-search-console4.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:81%;height:81%;">

बधाई हो! आपने Google Search Console में अपनी वेबसाइट के स्वामित्व को सत्यापित कर लिया है।

<br><hr><br>

अब, आइए हम आपकी वेबसाइट के स्वामित्व को सत्यापित करने के कुछ अन्य विकल्पों का भी पता लगाएं। आप चाहें तो बाकी लेख को छोड़ सकते हैं। हम अन्य उपलब्ध विकल्पों पर एक नजर भर डालेंगे।

## URL prefix प्रॉपर्टी प्रकार

अपनी साइट का पूरा URL दें, यानी https और www के साथ। (Domain property type में हम https और www का उपयोग नहीं करते हैं) <br>
<img src="../../../images/post/seo/technical-seo/google-search-console5.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:63%;height:63%;">

अब, आप दी गई सत्यापन विधि में से किसी का भी उपयोग कर सकते हैं। निम्नलिखित सत्यापन विधियां उपलब्ध हैं:
* हम अपने DNS प्रदाता के माध्यम से सत्यापित कर सकते हैं (यह वही है जो हमने ऊपर किया था, जब हमने 'Domain Property' बनायी थी)
* आप एक HTML फ़ाइल अपलोड कर सकते हैं
* हम अपनी साइट के होमपेज पर एक मेटा टैग (meta tag) जोड़ सकते हैं
* हम Google Analytics या Google Tag Manager के माध्यम से भी सत्यापित कर सकते हैं

आप दोगुने सुनिश्चित होने के लिए, उपरोक्त विधियों में से एक से अधिक का उपयोग करके भी सत्यापन कर सकते हैं।

हम यहां दो विधियों को शामिल करेंगे - मेटा टैग विधि और HTML फ़ाइल विधि। हम इसे एक Wordpress वेबसाइट का उपयोग करके प्रदर्शित करेंगे, लेकिन हम इसे अन्य प्रकार की वेबसाइटों (जैसे HUGO स्टैटिक वेबसाइट) में भी कर सकते हैं।

### मेटा टैग विधि (Meta tag method)

<img src="../../../images/post/seo/technical-seo/google-search-console6.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;">

इस विधि का उपयोग करने के दो तरीके हैं। आइए इन दोनों विकल्पों पर एक नज़र डालें।

* यदि आपकी साइट वर्डप्रेस पर है तो आप Yoast जैसे प्लगइन का उपयोग कर सकते हैं। Yoast प्लगइन में, HTML टैग लें और उसे उपयुक्त स्थान पर पेस्ट करें। परिवर्तनों को save करें। सर्च कंसोल पर वापस आएं और Verify बटन पर क्लिक करें। बस हो गया। आपकी वेबसाइट गूगल सर्च कंसोल से कनेक्ट हो गयी है।


* आप अपनी वेबसाइट पर उपयुक्त फ़ाइल में टैग जोड़कर इसे मैन्युअल रूप से भी कर सकते हैं। यदि आपकी साइट वर्डप्रेस पर नहीं है, तो आप वैसे भी यही करेंगे। <br><br>
वर्डप्रेस डैशबोर्ड (wordpress dashboard) में जाएं: Appearance → Editor → header.php पर क्लिक करें <br><br>
कोड को ```<head>``` टैग के अंदर पेस्ट करें। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console7.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;"> <br><br>
फ़ाइल को अपडेट करें, Google console पर वापस जाएं और Verify बटन पर क्लिक करें। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console8.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:81%;height:81%;">

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>चेतावनी</b><br>

मैंने बाद में पाया (एक या दो महीने के बाद) कि header.php फ़ाइल पहले की तरह ही हो गई है और जो मेटा टैग मैंने उसमें डाला था वह गायब हो गया था। संभवतः, यह थीम अपडेट के कारण था और Google console मुझसे प्रॉपर्टी को फिर से सत्यापित करने के लिए कह रहा था !!

तो, मैंने यह सबक सीखा - नीचे दी गयी HTML फ़ाइल विधि की जैसी किसी अन्य विधि का भी उपयोग करें। सिर्फ मेटा टैग विधि पर ही भरोसा न करें| हम निश्चित रूप से दोनों का उपयोग, दोगुना सुनिश्चित होने के लिए कर सकते हैं।
</div>


### HTML फ़ाइल विधि

<img src="../../../images/post/seo/technical-seo/google-search-console9.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;">

इस सत्यापन पद्धति में, हमें Google search console से डाउनलोड की गई HTML फ़ाइल को अपनी वेबसाइट पर अपलोड करने की आवश्यकता है।

वर्डप्रेस (WordPress) के मामले में, अपने होस्टिंग खाते के फाइल मैनेजर (File Manager) पर जाएं और HTML फाइल को संबंधित डोमेन/सबडोमेन के रूट फोल्डर में अपलोड करें। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console10.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:99%;height:99%;">

अब, Google search console पर वापस जाएं और Verify बटन पर क्लिक करें। <br>
<img src="../../../images/post/seo/technical-seo/google-search-console11.png" alt="Google search console को वेबसाइट से लिंक करना" style="width:81%;height:81%;">

आप Google search console में अपनी साइट के स्वामित्व को सत्यापित करने के लिए इन सत्यापन विधियों का उपयोग कर सकते हैं। आपके द्वारा चुनी गई विधि आपकी वेबसाइट के प्रकार और आपकी व्यक्तिगत पसंद पर निर्भर करेगी।

मैं व्यक्तिगत रूप से DNS पद्धति को प्राथमिकता देता हूं, क्योंकि इसके लिए मुझे अपनी वेबसाइट की फ़ाइल संरचना या कोड के अंदर कुछ भी बदलाव करने की आवश्यकता नहीं होती है। मुझे लगता है, Google Tag Manager पद्धति भी अच्छी होगी, पर उसका मेने अभी तक प्रयोग नहीं किया है। 

उम्मीद है यह लेख आपके लिए मददग़ार साबित होगा| आप हमारे साथ अपनी पसंद का तरीका भी साझा कर सकते हैं, जिसका आप प्रयोग करना पसंद करते हैं।

