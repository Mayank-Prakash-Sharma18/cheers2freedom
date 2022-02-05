// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	$(window).on('scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// tab
	$('.tab-content').find('.tab-pane').each(function (idx, item) {
		var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
			title = $(this).attr('title');
		navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
	});

	$('.code-tabs ul.nav-tabs').each(function () {
		$(this).find("li:first").addClass('active');
	})

	$('.code-tabs .tab-content').each(function () {
		$(this).find("div:first").addClass('active');
	});

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest('.code-tabs'),
			tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
		tabPanel.find('.active').removeClass('active');
		tab.addClass('active');
		tabPane.addClass('active');
	});

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});

	//post slider
	$('.post-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>'
	});

	// lazy load
	const observer = lozad(); //selector ".lozad"
	observer.observe();


	// instafeed
	if (($('#instafeed').length) !== 0) {
		var accessToken = $('#instafeed').attr('data-accessToken');
		var userFeed = new Instafeed({
			get: 'user',
			resolution: 'low_resolution',
			accessToken: accessToken,
			template: '<div class="instagram-post"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div>'
		});
		userFeed.run();
	}

	setTimeout(function () {
		$('.instagram-slider').slick({
			dots: false,
			speed: 300,
			autoplay: true,
			arrows: false,
			slidesToShow: 8,
			slidesToScroll: 1,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 6
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}, 1500);


	// popup video
	var $videoSrc;
	$('.video-btn').click(function () {
		$videoSrc = $(this).data("src");
	});
	console.log($videoSrc);
	$('#myModal').on('shown.bs.modal', function (e) {
		$("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
	})
	$('#myModal').on('hide.bs.modal', function (e) {
		$("#video").attr('src', $videoSrc);
	})



})(jQuery);


// Disable right click (https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page.html)

src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js"
$(document).ready(function() {
  $("body").on("contextmenu", function(e) {
      return false;
    });
});

// Copy to Clipboard functionality added by me / Mak / Mayank. 
// Source - https://stackoverflow.com/questions/57253006/two-copy-text-buttons 
// This can work even if we have multiple items to copy on a page. 
function makCopyFunction(elem) {
	var targetElementID = elem.getAttribute("data-target");
	var copyText = document.getElementById(targetElementID);
	copyText.select();
	document.execCommand("copy");
  }
  
  // We use the following HTML code in our pages/post, along with the above JS code (for bigger text, to be put in textarea HTML element)
  /* <textarea id="myInput1" class="mak-input" style="width:99%;height:150px;">Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</textarea>
  <button onclick="myFunction(this)" data-target="myInput1" class="mak-button">Copy to Clipboard</button> <br> */
  
  // We use the following HTML code in our pages/post, along with the above JS code (for one line smaller text, to be put in text input HTML element). 'Width' of the input text must be atleast double than the text within it, otherwise full text is not shown completely in mobile view. 
  /* <input type="text" value="choco install hugo -confirm" id="myInput2" class="mak-input" style="width:72%;">
  <button onclick="myFunction(this)" data-target="myInput2" class="mak-button">Copy to Clipboard</button> <br> */
  
  
  // ----------------------------------------------------------
  // Copy to Clipboard functionality added by me / Mak / Mayank earlier. 
  // Source - https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard 
  // This function will work only for one text element per page, because it uses id. If you want to add more than one copy to clipboard buttons on a page then you will have to add similar functions with different ids (or do some R&D and find a method that uses class, rather than id)  ...I will not use it 
  
  // document.getElementById("cp_btn").addEventListener("click", makCopyToClipboard);
  
  // function makCopyToClipboard() {
  
  //     var copyText = document.getElementById("cp_spn");
  //     var textArea = document.createElement("textarea");
  //     textArea.value = copyText.textContent;
  //     document.body.appendChild(textArea);
  //     textArea.select();
  //     document.execCommand("Copy");
  //     textArea.remove();
  // }
  
  // We use the following HTML code in our pages/post, along with the above JS code
  // <span id="cp_spn">{{ partial "gtm" . }}</span>
  // <button id="cp_btn" class="mak-button">Copy to Clipboard</button><br></br>
  // ----------------------------------------------------------
  

  