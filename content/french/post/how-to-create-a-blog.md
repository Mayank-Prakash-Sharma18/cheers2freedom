---
title: "ब्लॉग या वेबसाइट कैसे बनाएं? (Website kaise banayein?)"
date: 2022-03-12T15:40:24+06:00
# post thumb
images:
  - "images/post/hugo/create-website.png"
#author
author: "Mayank Sharma"
# description
description: "इस लेख में, हम ब्लॉग या वेबसाइट बनाने के कुछ सबसे सामान्य तरीकों पर एक नज़र डालेंगे।"
# Taxonomies
categories: ["website-creation","static-sites"]
tags: ["web-development","create-blog"]
type: "popular" # available type (epic, trending, popular, or regular)
draft: false
---

इस लेख में, हम ब्लॉग या वेबसाइट बनाने के कुछ सबसे सामान्य तरीकों पर एक नज़र डालेंगे, भले ही आप कोडिंग विशेषज्ञ या तकनीकी-विशेषज्ञ न हों।


## वेबसाइट / ब्लॉग बनाने के विभिन्न तरीके

ऐसे कई तरीके हैं जिनसे आप अपनी वेबसाइट या ब्लॉग बना सकते हैं। यह इस बात पर निर्भर करेगा कि आप किस तरह की वेबसाइट बनाना चाहते हैं, आपकी या आपकी टीम के पास किस तरह की तकनीकी विशेषज्ञता है, आप कितने संसाधनों का निवेश करना चाहते हैं (जनशक्ति और समय दोनों), और आप अपनी वेबसाइट पर कितना अनुकूलन (customization) चाहते हैं।

आइए उन विकल्पों को देखें जो हमारे पास हैं।

<div class="toc-mak">
<br>
<b>सामग्री की तालिका</b> <br> <br> <br>
<ul>
<li>कोडिंग का उपयोग करें</li> <br>
<li>सामग्री प्रबंधन प्रणाली (CMS)</li> <br>
<li>स्थिर साइट जेनरेटर</li> <br>
<li>स्थिर साइट जेनरेटर के लाभ</li>
</ul>
</div>

## कोडिंग का प्रयोग करें

वेबसाइट बनाने का यह सबसे पारंपरिक और सबसे पुराना तरीका है। अधिकांश प्रसिद्ध, बड़े पैमाने पर बनी वेबसाइटें, तकनीकी विशेषज्ञों (सॉफ्टवेयर विशेषज्ञों) की एक टीम द्वारा बनाई जाती हैं।

एक सॉफ्टवेयर इंजीनियर के रूप में, मैं अपनी सॉफ्टवेयर कंपनी के लिए यही करता था। सॉफ्टवेयर कंपनी क्लाइंट ढूंढती हैं और फिर उनके साथ समझौता किया जाता है। गुणवत्ता सुनिश्चित करने के लिए सॉफ्टवेयर विकास जीवन चक्र (software development life cycle) का पालन किया जाता है। उदाहरण के लिए, मैंने एक वेबसाइट पर काम किया था जिसे हमारी कंपनी (पेरोट सिस्टम्स) ने बैंक ऑफ आयरलैंड के लिए विकसित किया था। आप अंदाजा लगा ही सकते हैं कि बैंक के लिए बनी कोई वेबसाइट कितनी बड़ी और जटिल होगी, और उसे कितनी गुणवत्ता जांच से गुजरना पड़ता होगा। एक छोटी सी गलती से लाखों डॉलर का नुकसान और मुकदमेबाजी हो सकती है।

लेकिन अगर आप एक सॉफ्टवेयर डेवलपर हैं, या आपको कोडिंग का कुछ ज्ञान है, तो आप खुद एक छोटी सी वेबसाइट बना सकते हैं। उदाहरण के लिए, मैंने अपने एक क्लाइंट के लिए फ्रंट-एंड पर एंगुलर फ्रेमवर्क (जावास्क्रिप्ट, JavaScript) और आयोनिक (Ionic) का उपयोग करके एक ऑनलाइन टेस्ट प्लेटफॉर्म बनाया है।

यहां आपको उस प्रौद्योगिकी के समूह (technology stack) को चुनना होगा जिसका आप उपयोग करने जा रहे हैं, अर्थात आप फ्रंट-एंड और बैकएंड (सर्वर) पर किस भाषा का उपयोग करने जा रहे हैं, डेटाबेस जिसका आप उपयोग करेंगे, आदि। उदाहरण के लिए, मैं ज्यादातर फ्रंट-एंड और बैक-एंड (nodeJS) दोनों में जावास्क्रिप्ट का उपयोग करता हूं। इसके साथ मैं या तो MongoDB या Firebase का उपयोग करता हूं।

मैं Angular framework के साथ Ionic का उपयोग करना पसंद करता हूं, क्योंकि इनकी वजह से मैं अपनी साइट को इंटरनेट पर प्रकाशित करने के लिए और साथ ही iOS और एंड्रॉइड ऐप बनाने के लिए केवल एक कोड आधार का उपयोग कर सकता हूं। मुझे इन तीनो के लिए अलग-अलग कोड करने की जरूरत नहीं पड़ती| यह तेज तरीका है और भविष्य में कोई बदलाव करना भी आसान बनाता है। लेकिन अगर आपके पास विशेषज्ञता या एक बड़ी टीम है, तो आप Android के लिए Java और iOS के लिए Swift जैसी अधिक विशिष्ट भाषाओं का विकल्प चुन सकते हैं। Google का Flutter भी अच्छा है।

वेबसाइट को कोड करते समय, आपके पास निम्नलिखित विकल्प होते हैं:


* गतिशील वेबसाइट बनाएं (***dynamic website***) - एक गतिशील वेबसाइट वह होती है जो उपयोगकर्ता इनपुट के अनुसार बदल सकती है, जैसे की किसी उपयोगकर्ता द्वारा फॉर्म जमा करना और इसे डेटाबेस में संग्रहीत करना, अमेज़ॅन वेबसाइट में ग्राहकों को उन उत्पादों को दिखाया जाता है जिनकी उनके द्वारा खरीदे जाने की अधिक संभावना होती है (उनके पिछले व्यवहार के आधार पर), आदि| <br><br>
एक डायनमिक वेबसाइट बनाने के लिए, हमें एक सर्वर की आवश्यकता होती है। अब, हम या तो क्लाइंट-साइड रेंडरिंग (client-side rendering) या सर्वर-साइड रेंडरिंग (server-side rendering) प्रयोग कर सकते हैं। <br><br>
क्लाइंट-साइड रेंडरिंग में, सर्वर डेटाबेस से डेटा लेता है, उस पर सर्वर-साइड लॉजिक लागू करता है और फिर क्लाइंट-साइड को JSON, XML आदि के रूप में जानकारी भेजता है। <br><br>
सर्वर-साइड रेंडरिंग में, सर्वर न केवल डेटाबेस से डेटा प्राप्त करता है, और उस पर सर्वर-साइड लॉजिक लागू करता है, बल्कि सर्वर साइड पर ही HTML पेज भी बनाता है, और फिर ये पेज, ब्राउज़र (क्लाइंट-साइड) को भेजे जाते हैं। जिस तरह एंगुलर (Angular) और रिएक्ट (React) जावास्क्रिप्ट में क्लाइंट-साइड फ्रेमवर्क/लाइब्रेरी हैं, वैसे ही विभिन्न सर्वर-साइड लाइब्रेरी भी उपलब्ध हैं जो सर्वर-साइड रेंडरिंग में आपकी मदद कर सकती हैं। अधिकांश अन्य सर्वर-साइड भाषाओं के लिए भी यही सच है।

* स्थिर वेबसाइट बनाएं (***static website***) - यदि आप अपनी वेबसाइट में अधिक कार्यक्षमता जोड़ने का इरादा नहीं रखते हैं, तो आप एक स्थिर वेबसाइट बना सकते हैं। उदाहरण के लिए, यदि आप केवल एक ब्लॉग चाहते हैं जहाँ आप अपने लेख अपलोड करेंगे। लेकिन आपको इस विकल्प को नहीं चुनना चाहिए यदि आप अधिक जटिल वेबसाइट बनाना चाहते हैं, जैसे कि कोई ई-कॉमर्स वेबसाइट या कोई ऐसी वेबसाइट जहां आप बहुत सारी अनुकूलित कार्यक्षमताओं (customized functionalities) को जोड़ना चाहते हैं। <br><br>
ऐसा कहने के बाद, मुझे यह भी बताना होगा कि अब जावास्क्रिप्ट बहुत अधिक शक्तिशाली हो गयी है और आप केवल जावास्क्रिप्ट का उपयोग करके क्लाइंट-साइड पर ही कई कार्यात्मकता जोड़ सकते हैं। इसके अलावा, अब कई APIs उपलब्ध हैं जिनका उपयोग आप अपनी स्थिर वेबसाइटों में कई और सुविधाएँ जोड़ने के लिए कर सकते हैं, जैसे की आप अपने 'हमसे संपर्क करें' अनुभाग में फ़ॉर्म जमा करने के लिए ईमेल सेवा का उपयोग कर सकते हैं, या Google मानचित्र आदि दिखा सकते हैं। <br><br>
स्थैतिक वेबसाइटों में, हमारे पास सर्वर नहीं होता है। आपके होस्टिंग प्रदाता के डेटाबेस में पहले से बने HTML पृष्ठ मौजूद होते हैं और ब्राउज़र को वैसे ही भेजे जाते हैं जैसे वह हैं। यह हमारी साइट को साइबर हमलों के प्रति सुरक्षित और बहुत तेज़ बनाता है। <br><br>
आप या तो HTML, CSS और JavaScript का उपयोग करके अपनी स्थिर साइट को स्वयं कोड कर सकते हैं, या कुछ स्थिर साइट जनरेटर (static site generators) का उपयोग कर सकते हैं। हम इस लेख में आगे, स्थैतिक साइट जनरेटर के बारे में भी अध्ययन करेंगे।

चलिए, तकनीकी बातें बहुत हो गयीं| 

बिना तकनीकी पृष्ठभूमि वाले अधिकांश लोगों के लिए यह सब लैटिन और ग्रीक लग सकता है। तो, अब हम बाजार में उपलब्ध अन्य विकल्पों का पता लगाएंगे। क्योंकि इस लेख का उद्देश्य बिना या न्यूनतम कोडिंग विशेषज्ञता वाले व्यक्तियों को भी अपना ब्लॉग बनाने के लिए सशक्त बनाना है।


## सामग्री प्रबंधन प्रणाली (Content Management System, CMS)

सामग्री प्रबंधन प्रणाली (CMS), ऑनलाइन उपलब्ध एक सॉफ्टवेयर होता है, जो उपयोगकर्ताओं को वेबसाइट पर सामग्री बनाने, प्रबंधित करने और संशोधित करने में मदद करता है। वे ऐसा केवल एक यूजर इंटरफेस का उपयोग करके कर सकते हैं| उन्हें कोड को देखने की जरूरत नहीं है। इसलिए, गैर-तकनीकी पृष्ठभूमि वाले लोग भी अपनी वेबसाइट/ब्लॉग को CMS का उपयोग करके चला सकते हैं।

बाजार में विभिन्न सामग्री प्रबंधन प्रणालियां हैं। उदाहरण के लिए ***Wordpress, Joomla, Blogger, Wix***, आदि। हमें कौन सा CMS चुनना चाहिए यह हमारी जरूरतों पर निर्भर करता है।

### वर्डप्रेस (Wordpress)

यह बाजार में मौजूद सबसे प्रसिद्ध CMS है। इस CMS का उपयोग करके लाखों वेबसाइटें बनाई गई हैं और भविष्य में बनायीं जाती रहेंगी। यदि आप किसी भी डिजिटल मार्केटिंग कोर्स से जुड़ते हैं, तो अक्सर यही वह प्लेटफॉर्म होता है, जहां वे आपको अपनी पहली वेबसाइट बनाने के लिए कहेंगे।

हालाँकि यहाँ भी आपको कुछ चीज़ें तो सीखनी पड़ेंगी ही - पर आप एक या दो महीने में इसमें विशेषज्ञता हासिल कर लेंगे। वर्डप्रेस, सर्वर साइड पर PHP भाषा और डेटाबेस के रूप में MySQL का उपयोग करता है। यदि आपको इन तकनीकों का ज्ञान है तो आप थीम (themes) और प्लगइन्स (plugins) बना सकते हैं और अपनी वेबसाइट के साथ आने वाली किसी भी समस्या का निवारण कर सकते हैं।

लेकिन भले ही आपको पता न हो कि PHP और MySQL क्या है, इससे कोई फर्क नहीं पड़ता। यही इसकी खूबसूरती है। आप फिर भी सुंदर ब्लॉग और वेबसाइट बना सकते हैं। आपको बस यह सीखना है कि इसके यूजर इंटरफेस का उपयोग कैसे करें। आपके लिए हजारों मुफ्त और प्रीमियम थीम और प्लगइन्स उपलब्ध हैं। आपको बस कुछ बटन क्लिक करने हैं और आप अपनी वेबसाइट में कोई भी कार्यछमता जोड़ सकते हैं।

Wordpress के अलावा, अन्य विकल्प भी उपलब्ध हैं। उदाहरण के लिए, मैंने Wix पर अपनी पहली वेबसाइट बनाई थी। आप Blogger, wordpress.com आदि का भी उपयोग कर सकते हैं। ये wordpress.org की तुलना में उपयोग करने में बहुत आसान हैं, लेकिन यहाँ आप जो अनुकूलन (customization) कर सकते हैं वह बहुत सीमित है। यहां आप अपनी वेबसाइट फाइलों के सोर्स कोड को नहीं देख सकते हैं और ज्यादातर मामलों में अपनी पसंद के होस्टिंग और डोमेन नेम प्रोवाइडर को भी नहीं चुन सकते हैं।

<div class="danger-mak">
  <img src="../../../images/warning.png">
  <b>चेतावनी</b><br>

Wordpress के दो संस्करण हैं:<br>

* wordpress.org
* wordpress.com <br>

जब हम Wordpress के बारे में बात करते हैं, तो हम आमतौर पर wordpress.org के बारे में बात कर रहे होते हैं। यह हमें अपनी वेबसाइट पर बहुत अधिक नियंत्रण की अनुमति देता है, और यहाँ हमें बहुत अधिक प्लगइन्स मिलते हैं।

जहां तक ​​wordpress.com का सवाल है, यह Wix और Blogger जैसा अधिक है। बहुत कम प्लगइन्स विकल्प और कार्यात्मकता, लेकिन उपयोग करने और प्रबंधित करने में आसान।
</div>


## स्टेटिक साइट जेनरेटर (Static Site Generators)

यह एक ऐसा विकल्प है जो उपरोक्त दो विकल्पों के बीच में कहीं पड़ता है। वेबसाइट को कोडिंग करते समय संसाधनों और समय की बहुत आवश्यकता होती है| Wordpress जैसे CMS का उपयोग करने के भी अपने नुकसान हैं। अगर आप सिर्फ एक साधारण ब्लॉग चलाना चाहते हैं, तो स्टैटिक साइट जेनरेटर आपके लिए एक अच्छा विकल्प हो सकता है। यह साइट (cheers2freedom.com) भी एक स्थिर साइट जनरेटर का उपयोग करके बनाई गई है।

मेरा विश्वास करिये, अगर आप कुछ बुनियादी सुविधाओं जैसे 'हमसे संपर्क करें' फॉर्म, ईमेल प्राप्त करने के लिए सदस्यता सेवा (ईमेल-मार्केटिंग के लिए), आदि के साथ एक ब्लॉग बनाना चाहते हैं, तो अपनी वेबसाइट को कोड करना या वर्डप्रेस जैसे CMS का उपयोग करना व्यर्थ है। जब वेबसाइट निर्माण की बात आती है, तो स्थैतिक साइट जनरेटर मेरी पहली पसंद होते हैं।

आइए, हम स्थैतिक साइट जनरेटर के उपयोग के लाभों को देखें।


## स्टेटिक साइट जेनरेटर के लाभ

### स्थिर साइट जनरेटर आपकी अपनी वेबसाइट को कोड करने से बेहतर क्यों है?

* ***कम समय लगता है***: हाँ, आप HTML, CSS और JavaScript का उपयोग करके एक स्थिर साइट बना सकते हैं। लेकिन इस दृष्टिकोण की कमी यह है कि, आपको सबसे पहले अपनी खुद की थीम बनानी होगी। यह बहुत समय लेने वाला कार्य है। एक स्थिर साइट जनरेटर का उपयोग करते हुए, आप अपनी साइट को पल भर में बना सकते हैं।

* ***प्रबंधित करने में आसान***: एक बड़ी साइट, जिसे एक स्थिर साइट जनरेटर का उपयोग करके बनाया गया है, उसको प्रबंधित करना बहुत आसान है। कल्पना कीजिए कि आपके पास एक स्थिर साइट है जिसमें 1000 पृष्ठ और पोस्ट हैं। अब, यदि आपने उन पृष्ठों को अलग-अलग बनाया है, और आप अपनी वेबसाइट के header को बदलना चाहते हैं, तो आपको उन सभी 1000 पृष्ठों में मैन्युअल रूप से वह परिवर्तन करना होगा। इसलिए, जैसे-जैसे आकार बढ़ता है, एक स्थिर वेबसाइट को प्रबंधित करना कठिन होता जाता है। यहीं स्थैतिक साइट जनरेटर काम आते हैं। <br><br>
यदि आपने किसी स्थिर साइट जनरेटर की थीम का उपयोग करके अपनी साइट बनाई है, तो आपको बस एक ही स्थान पर परिवर्तन करने की आवश्यकता है, और वह परिवर्तन पूरी वेबसाइट पर प्रतिलक्षित हो जायेगा।

### स्थिर साइट जनरेटर, वर्डप्रेस जैसे CMS का उपयोग करने से बेहतर क्यों है?

* ***गति***: हम सभी जानते हैं कि आपकी साइट की गति तकनीकी-SEO (खोज इंजन अनुकूलन, search engine optimization) के लिए मायने रखती है। Google उन साइटों का समर्थन करता है जो ब्राउज़र में तेज़ी से लोड होती हैं। <br><br>
यदि आप सिर्फ एक साधारण सा ब्लॉग बनाने का इरादा रखते हैं, तो मेरा विश्वास करें कि वर्डप्रेस एक ओवरकिल है। यह बहुत धीमा है! <br><br>
एक स्थिर साइट वह है जहां ***कोई सर्वर शामिल नहीं होता है***। आपके होस्टिंग प्रदाता के डेटाबेस में सभी पृष्ठ पहले से मौजूद होते हैं। उन्हें बस क्लाइंट-साइड को प्रस्तुत करने की आवश्यकता है, ठीक वैसे ही जैसे वे हैं। यह सर्वर-साइड प्री-प्रोसेसिंग वाली किसी भी वेबसाइट की तुलना में किसी स्थिर साइट को बहुत तेज़ बनाता है। उदाहरण के लिए, यदि आप HUGO स्टैटिक साइट जनरेटर का उपयोग करते हैं और अपने ब्लॉग को Netlify में होस्ट करते हैं, तो आपके द्वारा आपकी साइट को अपलोड या संशोधित करते ही Netlify द्वारा आपकी साइट के पेज बनाए जाते हैं। और फिर जब भी उनकी मांग की जाती है, उन्हें अंतिम उपयोगकर्ता के सामने प्रस्तुत कर दिया जाता है। <br><br>
इसके अलावा, ***आप सामग्री वितरण नेटवर्क (content delivery network, CDN) पर अपनी पूरी स्थिर वेबसाइट होस्ट कर सकते हैं***। यह हमारी वेबसाइट को और भी तेज बनाता है। तो, जहां तक ​​तकनीकी-SEO का संबंध है, आपका ब्लॉग पहले से ही किसी भी Wordpress ब्लॉग से बहुत आगे है। आपको किसी भी cache का उपयोग करने और उनकी जटिलताओं और कमियों से निपटने की आवश्यकता नहीं है। हम सभी जानते हैं कि Wordpress में इन cache plugins की वजह से कितनी दिक्कतें होती हैं।

* ***सुरक्षा***: मेरी एक वर्डप्रेस साइट हैक हो गई क्योंकि मैंने कुछ महीनों से अपना एक प्लगइन (Elementor page builder) अपडेट नहीं किया था। मैं स्वीकार करता हूं, यह मेरी गलती थी और मैंने उस वेबसाइट पर ज्यादा काम नहीं किया था। लेकिन इसने मेरी आखें खोल दीं। <br><br>
कल्पना कीजिए, आप एक वेबसाइट पर वर्षों तक काम करते हैं और फिर एक दिन आपको पता चलता है कि किसी ने डेटाबेस में सभी फाइलों को हटा दिया है या दूषित कर दिया है। Wordpress एक बहुत ही प्रसिद्ध प्लेटफॉर्म है और इसलिए इसमें हैकिंग के प्रयास भी बड़ी संख्या में किये जाते हैं। <br><br>
इससे बचने के लिए हम सुरक्षा प्लगइन्स का उपयोग करते हैं और अपनी वेबसाइटों का बैकअप लेते रहते हैं। हालाँकि यदि आप एक अच्छी होस्टिंग सेवा का उपयोग कर रहे हैं, जैसे की Bluehost या SiteGround, आदि, तो वह भी आपकी साइट का बैकअप लेते रहते हैं। लेकिन तथ्य यह है कि, कुछ भी गलत हो सकता है, हैकिंग के कारण या आपकी थीम या प्लगइन्स के अपडेट के दौरान कुछ गड़बड़ियों के कारण। और ऐसे मामले में, या तो आपको स्वयं शोध करना होगा या अपने होस्टिंग प्रदाता को कॉल करना होगा और शायद चीजों को ठीक करने के लिए कुछ पैसे भी देने पड़ें। <br><br>
स्थैतिक साइटें ऐसी समस्याओं से ग्रस्त नहीं होती हैं। कोई सर्वर नहीं है और चूंकि हैकिंग के अधिकांश प्रयास सर्वर पर ही किये जाते हैं, इसका मतलब है कि हम पहले ही एक बड़ी कमी को हटा चुके हैं। आपको बस अपने डोमेन नाम प्रदाता, होस्टिंग और github में two-factor authorization का उपयोग करने की आवश्यकता है। बस इतना ही। <br><br>
इसके अलावा, हमारी स्टैटिक साइट हमेशा हमारे स्थानीय कंप्यूटर पर होती है। हम इस पर काम करते हैं, और एक बार जब हम संतुष्ट हो जाते हैं, तो हम सभी परिवर्तनों को Github में धकेल देते हैं, जो बदले में होस्टिंग प्रदाता को स्वचालित रूप से अपडेट कर देता है। आपकी वेबसाइट पहले से ही आपके स्थानीय कंप्यूटर पर है। तो, कोई ***बैकअप लेने की जरूरत नहीं है***।

* ***नि:शुल्क होस्टिंग*** - हालांकि यह एक बड़ा कारक नहीं है, लेकिन शुरुआती लोगों के लिए एक महत्वपूर्ण बिंदु हो सकता है, जो अधिक निवेश नहीं करना चाहते हैं (जैसे छात्र, शौक-शौक में यह काम कर रहे लोग, आदि), या यदि आपके पास बहुत सारे ब्लॉग हैं। आप अधिकांश होस्टिंग प्रदाताओं (जैसे Netlify, Github आदि) पर अपनी स्थिर वेबसाइटों को मुफ्त में होस्ट कर सकते हैं। आपको एक भी पैसा देने की आवश्यकता नहीं है! आपको केवल अपने डोमेन नाम की वार्षिक लागत का भुगतान करना होगा। <br><br>
कोई भी साइट जिसके लिए सर्वर की आवश्यकता होती है, उदा. Wordpress पर किसी भी ब्लॉग के लिए एक सर्वर की आवश्यकता होती है और इसलिए उसे एक ऐसी होस्टिंग की आवश्यकता होती है जिसके लिए पैसा देना होता है।


## उपसंहार

मुझे आशा है कि यह लेख, वेबसाइट या ब्लॉग निर्माण से सम्बंधित विभिन्न विकल्पों पर कुछ प्रकाश डालने में सफल रहा है। आपके द्वारा चुना गया विकल्प आपके कौशल-सेट, प्रौद्योगिकी की जानकारी, अनुकूलन आवश्यकताओं और आपकी प्राथमिकताओं पर निर्भर करेगा।

जहां तक मेरा संबंध है, मैंने विभिन्न CMS का उपयोग करके साइटें बनाई हैं, जैसे की Wix, Blogger, Wordpress, इत्यादि। Wordpress पर अभी भी मेरी कुछ लाइव वेबसाइटें हैं। मैंने जावास्क्रिप्ट का उपयोग करके कुछ वेबसाइट और ऐप भी बनाए हैं। लेकिन मेरी अधिकांश वेबसाइटों/ब्लॉगों के लिए मैं स्थिर साइट जेनरेटर  (static site generators) पसंद करता हूं। यह तेज, और सुरक्षित होते हैं, और मुझे नियमित साइट बैकअप लेने की आवश्यकता नहीं पड़ती है। जब एक साधारण ब्लॉग बनाने की बात आती है तो यह पर्याप्त से अधिक साबित होता है।

हमें बताएं कि आपको क्या पसंद है और क्यों।
