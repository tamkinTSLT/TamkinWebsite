/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});
	




	////////////////////////////////////////////////////
	// 03. Common Js

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});


	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	$('.tp-hamburger-toggle').on('click', function(){
		$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
	});



	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".submenu").slideToggle();
			  
	
			});
	
		  });
	}


	////////////////////////////////////////////////////
	// 06. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search-area").addClass("search-opened");
		$(".search-overlay").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search-area").removeClass("search-opened");
		$(".search-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


		////////////////////////////////////////////////////
	// 09. scroll down
	$("#scroll-down").click(function() {
		$('html,body').animate({                       
			scrollTop: $("#next-sec").offset().top},
			'slow');
	});


	$(".vertical-slider").hover(
		// function() {
		//   var contentDiv = $(this).find(".card-want-know");
		//   contentDiv.css("animation-play-state", "running");
		// },
		// function() {
		//   var contentDiv = $(this).find(".card-want-know");
		//   contentDiv.css("animation-play-state", "paused");
		// }
	  );

		////////////////////////////////////////////////////
	// 09. talk hero


		$( ".tp-hero-talk" ).hover(
			function() {
				$(".tp-hero-talk-text").css({"right":"50px"});
			}, function() {
				$(".tp-hero-talk-text").css({"right":"-1000px"});
			}
		  );


		

	$(".tp-hero-talk").on("click", function () {
		$('.tp-talk-card').css('right', '0');
		$('.tp-talk-card').load('index.html #player-card', function(responseText, status, xhr) {
			$("#loader").delay(3000).fadeOut();
			$("#loader-hand").delay(6000).fadeOut();
			$("#loader-finish-rate").addClass("hide");
			$("#finish-rate").addClass("hide");
			$("#loader-after-warning-no").addClass("hide");

		  if (status === 'error') {
			console.log('Error loading content:', xhr.status, xhr.statusText);
		  }
		});

		$(".talk-content").removeClass("hide");
	});




	$(".btn-translate").click(function() {
		$(".translate-card").toggleClass("hide");
		$(".menu-link").not(this).toggleClass("unclickable");
		var image = $(".btn-translate img");
		var currentSrc = image.attr("src");
		var newSrc = (currentSrc === "assets/img/translate.png") ? "assets/img/translate-close.png" : "assets/img/translate.png";
		image.attr("src", newSrc);
	
	  });
	  
	$(".btn-play").click(function() {
		var image = $(".btn-play img");
		var currentSrc = image.attr("src");
		var newSrc = (currentSrc === "assets/img/Play.png") ? "assets/img/pause.png" : "assets/img/Play.png";
		image.attr("src", newSrc);
		$('.text-transplate').addClass('underline')
		$('.icon-translate-done').css({"display":"block"});
	  });


	
	$("#about").on("click", function () {
		$(".talk-content").addClass("hide");
		$("#about-content").removeClass("hide");
	});
	$("#icon-close-about").on("click", function () {
		$(".talk-content").removeClass("hide");
		$("#about-content").addClass("hide");
	});
	$("#tutorial").on("click", function () {
		$(".talk-content").addClass("hide");
		$("#tutorial-content").toggleClass("hide");
	});
	$("#icon-close-main").on("click", function () {
		
		$('#player-card').css('right', '-1000px');
		$('.side-menu-card').css('right', '-1000px');

		
		

	});



	$(".btn-settings").on("click", function () {
		$(".settings-card").toggleClass("hide");
		$(".menu-link").not(this).toggleClass("unclickable");
		var image = $(".btn-settings img");
		var currentSrc = image.attr("src");
		var newSrc = (currentSrc === "assets/img/Settings.png") ? "assets/img/translate-close.png" : "assets/img/Settings.png";
		image.attr("src", newSrc);
	
	});
	$("#set-position").on("click", function () {
		$(".tp-talk-card").toggleClass("left");
	});
	$("#set-contrast").on("click", function () {
		$(".tp-talk-card").toggleClass("contrast-style");
		$('#set-contrast img').attr('src', 'assets/img/Auto-Brightness.png');
	});

	

	$(".check-rate .item").on("click", function () {
		$(".rate-translate .btn-bg").addClass("btn-confirm");
	});
	$("#confirm-rate").on("click", function () {
		$("#loader-finish-rate").removeClass("hide");
		$("#finish-rate").removeClass("hide");

		$('.tp-talk-card').load('index.html #finish-card', function(responseText, status, xhr) {
			$("#loader-finish-rate").delay(3000).fadeOut();
			$("#finish-rate").delay(6000).fadeOut();
			$("#icon-close-main").hide();
		  if (status === 'error') {
			console.log('Error loading content:', xhr.status, xhr.statusText);
		  }
		});

		$("#rate-translate-content").addClass("hide");
		// $("#finish-rate").toggleClass("hide");
		$(".talk-content").removeClass("hide");

	});

	$("#btn-tutorial-translation").on("click", function () {
		$("#tutorial-content").addClass("hide");
		$(".talk-content").removeClass("hide");
		$(".translate-card").toggleClass("hide");
		$('.tp-talk-card').css('right', '0');
		$('#tutorial-menu-translation').css('right', '370px');
		$(".tutorial-menu-container").hide();
		$("#translate-menu").show();
		$(".tp-talk-card .talk-content .btns-action").addClass("active");
		var image = $(".btn-translate img");
		var currentSrc = image.attr("src");
		var newSrc = (currentSrc === "assets/img/translate.png") ? "assets/img/translate-close.png" : "assets/img/translate.png";
		image.attr("src", newSrc);
	});

	$("#btn-tutorial-menu").on("click", function () {
		$(".talk-content").toggleClass("hide");
		$('#tutorial-menu').css('right', '370px');
	});

	$("#tutorial-menu-config").on("click",function(){
	
		$("#tutorial-menu").css('right', '-1000px');
		$("#tutorial-config").css('right', '370px');

		
		$("#links-container").addClass("hide");
		$("#tutorial-content").addClass("hide");
		$(".translate-card").addClass("hide");
		$(".btns-config").removeClass("hide");

		var $cards = $('.item-menu-config'); // Select all cards
		var $links = $('.btns-config .menu-link');
	  var currentIndex = 0; // Index of the currently displayed card
	
	  // Show the card at the given index
	  function showCard(index) {
		$cards.hide(); // Hide all cards
		$cards.eq(index).show(); // Show the card at the specified index
		$links.removeClass('active'); // Remove "active" class from all links
		$links.eq(index).addClass('active'); // Add "active" class to the link at the specified index
	  }
	  // Display the first card initially
	  showCard(currentIndex);
	  // Previous button click event handler
	  $('#prevBtnConfig').click(function() {
		currentIndex--; // Decrement the index
		if (currentIndex < 0) {
		  currentIndex = $cards.length - 1; // Wrap around to the last card
		}
		showCard(currentIndex);
	  });
	
	  // Next button click event handler
	  $('#nextBtnConfig').click(function() {
	
		currentIndex++;
		if (currentIndex === $cards.length - 1) {
			// Last card reached, perform action or show completion message
			$("#nextBtnConfig").html('<button id="doneconfig">Done<i class="fa fa-check"></i></button>');
			$links.removeClass("active");
	
			$("#doneconfig").on("click", function() {
				$links.removeClass("active");
				$('#tutorial-menu').css('right', '-1000px');
				$('#tutorial-config').css('right', '-1000px');
				$(".btns-config").addClass("hide");
				$("#links-container").removeClass("hide");
			});
		} 
		showCard(currentIndex);
	  });	
	  $links.click(function(e) {
		e.preventDefault(); // Prevent default link behavior
		var index = $links.index(this); // Get the index of the clicked link
		showCard(index);
	  });

	

	});

	$("#start-menu").on("click",function(){
	
		$("#translate-menu").hide();
		$(".tutorial-menu-container").show();
		var $cards = $('.item-menu'); // Select all cards
		var $links = $('#links-container .menu-link');
	  var currentIndex = 0; // Index of the currently displayed card
	
	  // Show the card at the given index
	  function showCard(index) {
		$cards.hide(); // Hide all cards
		$cards.eq(index).show(); // Show the card at the specified index
		$links.removeClass('active'); // Remove "active" class from all links
		$links.eq(index).addClass('active'); // Add "active" class to the link at the specified index
	  }
	  // Display the first card initially
	  showCard(currentIndex);
	  // Previous button click event handler
	  $('#prevBtn').click(function() {
		currentIndex--; // Decrement the index
		if (currentIndex < 0) {
		  currentIndex = $cards.length - 1; // Wrap around to the last card
		}
		showCard(currentIndex);
	  });
	
	  // Next button click event handler
	  $('#nextBtn').click(function() {
	
		currentIndex++;
		if (currentIndex === $cards.length - 1) {
			// Last card reached, perform action or show completion message
			$("#nextBtn").html('<button id="done">Done<i class="fa fa-check"></i></button>');
			$links.removeClass("active");
	
			$("#done").on("click", function() {
				$links.removeClass("active");
				$("#links-container").removeClass("active");
				$('#tutorial-menu-translation').css('right', '-1000px');
			});
		} 
		showCard(currentIndex);
	  });	
	  $links.click(function(e) {
		e.preventDefault(); // Prevent default link behavior
		var index = $links.index(this); // Get the index of the clicked link
		showCard(index);
	  });

	});





	$(".icon-close-side").on("click", function () {
	
		$(this).closest('.side-menu-card').remove();
		$('#warning').css('right', '-10000px');
		// $(".tp-talk-card .talk-content .btns-action").removeClass("active");
		// $('#links-container .menu-link').removeClass("active");
		$('#start-menu').off();
	});

	$(".btn-rate-translate").on("click", function () {
		$('#warning-menu').css('right', '370px');
		$('#warning').css('right', '610px');
	});


	$("#warning-menu #no").on("click", function () {
		$(this).closest('.side-menu-card').remove();
		$('#warning').remove();
		
		$('.tp-talk-card').load('index.html #links-container', function(responseText, status, xhr) {
			$("#loader-after-warning-no").removeClass("hide");
			$("#loader-after-warning-no").delay(3000).fadeOut();
			$('#icon-rate-before').css('display', 'none');
			$('#icon-rate-after').css('display', 'block');
		  if (status === 'error') {
			console.log('Error loading content:', xhr.status, xhr.statusText);
		  }
		

		});

		$("#icon-rate-after").on("click", function () {
		$(".talk-content").addClass("hide");
		$("#rate-translate-content").removeClass("hide");
	});


	});


	$("#icon-close-rate").on("click", function () {
		$(this).closest('#rate-translate-content').remove();
		$(".talk-content").removeClass("hide");
	});
	$("#icon-close-tutorial").on("click", function () {
		$(this).closest('#tutorial-content').remove();
		$(".talk-content").removeClass("hide");
	});
	

	// start button background 
	var initalBackground = 'background 100%';
	var clickCountBackground = 0;

    $('#set-background').click(function() {
		clickCountBackground++;
	  if (clickCountBackground > 3) {
		clickCountBackground = 1;
	  }
      if (clickCountBackground === 1) {
		$('.tp-talk-card').css('background', 'rgba(255, 255, 255, 1)');
		$('.change-background-card').text('background 100%');
		initalBackground = 'background 100%';
      } else if (clickCountBackground === 2) {
		$('.tp-talk-card').css('background', 'rgba(255, 255, 255, 0.5)');
		$('.change-background-card').text('background 50%');
		initalBackground = 'background 50%';
      } else if (clickCountBackground === 3) {
		$('.tp-talk-card').css('background', 'transparent');
		$('.change-background-card').text('transparent');
		initalBackground = 'transparent';
      }
	  $('.change-background-card').text(initalBackground);
    });

	$('#set-background').hover(function() {
		$('.change-background-card').css('visibility', 'visible');
		$('.change-background-card').text(initalBackground);
	  }, function() {
		$('.change-background-card').css('visibility', 'hidden');
		$('.change-background-card').text("");
	  });
    // end button background 


	// start button speed 
	var speed = 0.5;
	var clickCountSpeed = 0;

    $('.btn-change-speed').click(function() {
      clickCountSpeed++;
	  if (clickCountSpeed > 3) {
		clickCountSpeed = 1;
	  }
      if (clickCountSpeed === 1) {
		$('.change-speed-card span').text('Slow');
		speed = 0.5;
		$(this).text('0.5');
      } else if (clickCountSpeed === 2) {
		$('.change-speed-card span').text('Normal');
		speed = 1.0;
		$(this).text('1.0');
      } else if (clickCountSpeed === 3) {
		$('.change-speed-card span').text('Fast');
		speed = 1.5;
		$(this).text('1.5');
      }
	  $('.change-speed-card span').text(speed);
    });

	  $(".btn-change-speed").hover(function() {
		$('.change-speed-card').css('visibility', 'visible');
		$(".change-speed-card span").text(speed);
	  }, function() {
		$('.change-speed-card').css('visibility', 'hidden');
		$(".change-speed-card span").text("");
	  });
    // end button speed 	



	

 // Store the initial font sizes for each tag
 var initialFontSizes = {};

 // Get and store the initial font sizes
 $("*").each(function() {
   var fontSize = parseInt($(this).css("font-size"));
   $(this).data("initial-font-size", fontSize);
 });

 // Function to increase font size
 function increaseFontSize() {
   $("*").each(function() {
	 var currentFontSize = parseInt($(this).css("font-size"));
	 var initialFontSize = $(this).data("initial-font-size");
	 $(this).css("font-size", currentFontSize + 2 + "px");
   });
 }

 // Function to decrease font size
 function decreaseFontSize() {
   $("*").each(function() {
	 var currentFontSize = parseInt($(this).css("font-size"));
	 var initialFontSize = $(this).data("initial-font-size");
	 $(this).css("font-size", currentFontSize - 2 + "px");
   });
 }

 // Attach click event listeners to increase/decrease buttons
 $("#increase-font").on("click", increaseFontSize);
 $("#decrease-font").on("click", decreaseFontSize);


	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();	
		if (scroll < 200) {
			$("#header-sticky").removeClass("tp-header-sticky");
		} else {
			$("#header-sticky").addClass("tp-header-sticky");
		}
	});
	

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
			  
		var setHeaderHeight = headerHeight.offsetHeight;
			  
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	}


	/////// add tag //////
	$('.tp-main-menu ul li a').each(function(){
		$(this).wrapInner("<span></span>");
		});

	////////////////////////////////////////////////////
	// 11. Theme Settings Js

	// settings append in body
	function tp_settings_append($x){
		var settings = $('body');
		let dark;
		$x == true ? dark = 'd-block' : dark = 'd-none';
		var settings_html = `<div class="tp-theme-settings-area transition-3">
		<div class="tp-theme-wrapper">
		   <div class="tp-theme-header text-center">
			  <h4 class="tp-theme-header-title">Harry Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="tp-theme-toggle mb-20 ${dark}">
			  <label class="tp-theme-toggle-main" for="tp-theme-toggler">
				 <span class="tp-theme-toggle-dark active"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="tp-theme-toggler">
					<i class="tp-theme-toggle-slide"></i>
				 <span class="tp-theme-toggle-light"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="tp-theme-dir mb-20">
			  <label class="tp-theme-dir-main" for="tp-dir-toggler">
				 <span class="tp-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="tp-dir-toggler">
					<i class="tp-theme-dir-slide"></i>
				 <span class="tp-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="tp-theme-settings">
			  <div class="tp-theme-settings-wrapper">
				 <div class="tp-theme-settings-open">
					<button class="tp-theme-settings-open-btn">
					   <span class="tp-theme-settings-gear">
						  <i class="fa-light fa-gear"></i>
					   </span>
					   <span class="tp-theme-settings-close">
						  <i class="fa-regular fa-xmark"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#F50963" type="button" data-color="#F50963"></button>
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#F50963"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#008080"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#AB6C56"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#3661FC"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#2CAE76"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF5A1B"></button>
					   </div>
					</div>
					<div class="col">
                        <div class="tp-theme-color-item tp-color-active">
                           <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#03041C"></button>
                        </div>
                     </div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#ED212C"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="tp-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="tp-color-setings-input" value="#F50963">
				 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
	 settings.append(settings_html);
	}
	// tp_settings_append(true); 
	// if want to enable dark light mode then send "true";

	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});

	// rtl settings
	function tp_rtl_settings() {

		$('#tp-dir-toggler').on("change", function () {
			toggle_rtl();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_dir) {
			localStorage.setItem('tp_dir', tp_dir);
			document.documentElement.setAttribute("dir", tp_dir);

			if (tp_dir === 'rtl') {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			} else {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}

		// toogle theme scheme
		function toggle_rtl() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('ltr');
				var list = $("[href='assets/css/bootstrap-rtl.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			} else {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			}
		}

		// set the first theme scheme
		function tp_init_dir() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
				document.getElementById('tp-dir-toggler').checked = true;
			} else {
				tp_set_scheme('ltr');
				document.getElementById('tp-dir-toggler').checked = false;
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}
		tp_init_dir();
	}
	if ($("#tp-dir-toggler").length > 0) {
		tp_rtl_settings();
	}

	// dark light mode toggler
	function tp_theme_toggler() {

		$('#tp-theme-toggler').on("change", function () {
			toggleTheme();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_theme) {
			localStorage.setItem('tp_theme_scheme', tp_theme);
			document.documentElement.setAttribute("tp-theme", tp_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-light');
			} else {
				tp_set_scheme('tp-theme-dark');
			}
		}

		// set the first theme scheme
		function tp_init_theme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-dark');
				document.getElementById('tp-theme-toggler').checked = true;
			} else {
				tp_set_scheme('tp-theme-light');
				document.getElementById('tp-theme-toggler').checked = false;
			}
		}
		tp_init_theme();
	}
	if ($("#tp-theme-toggler").length > 0) {
		tp_theme_toggler();
	}


	// color settings
	function tp_color_settings() {

		// set color scheme
		function tp_set_color(tp_color_scheme) {
			localStorage.setItem('tp_color_scheme', tp_color_scheme);
			document.querySelector(':root').style.setProperty('--tp-theme-1', tp_color_scheme);
			document.getElementById("tp-color-setings-input").value = tp_color_scheme;
			document.getElementById("tp-theme-color-label").style.backgroundColor = tp_color_scheme;
		}

		// set color
		function tp_set_input() {
			var color = localStorage.getItem('tp_color_scheme');
			document.getElementById("tp-color-setings-input").value = color;
			document.getElementById("tp-theme-color-label").style.backgroundColor = color;


		}
		tp_set_input();

		function tp_init_color() {
			var defaultColor = $(".tp-color-settings-btn").attr('data-color-default');
			var setColor = localStorage.getItem('tp_color_scheme');

			if (setColor != null) {

			} else {
				setColor = defaultColor;
			}

			if (defaultColor !== setColor) {
				document.querySelector(':root').style.setProperty('--tp-theme-1', setColor);
				document.getElementById("tp-color-setings-input").value = setColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = setColor;
				tp_set_color(setColor);
			} else {
				document.querySelector(':root').style.setProperty('--tp-theme-1', defaultColor);
				document.getElementById("tp-color-setings-input").value = defaultColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = defaultColor;
				tp_set_color(defaultColor);
			}
		}
		tp_init_color();


		let themeButtons = document.querySelectorAll('.tp-color-settings-btn');

		themeButtons.forEach(color => {
			color.addEventListener('click', () => {
				let datacolor = color.getAttribute('data-color');
				document.querySelector(':root').style.setProperty('--tp-theme-1', datacolor);
				document.getElementById("tp-theme-color-label").style.backgroundColor = datacolor;
				tp_set_color(datacolor);
			});
		});



		const colorInput = document.querySelector('#tp-color-setings-input');
		const colorVariable = '--tp-theme-1';


		colorInput.addEventListener('change', function (e) {
			var clr = e.target.value;
			document.documentElement.style.setProperty(colorVariable, clr);
			tp_set_color(clr);
			tp_set_check(clr);
		});


		function tp_set_check(clr){
			const arr = Array.from(document.querySelectorAll('[data-color]'));
	
			var a = localStorage.getItem('tp_color_scheme');

			let test =  arr.map(color =>{
				let datacolor = color.getAttribute('data-color');
				
				return datacolor;
			}).filter(color => color == a);
			
			var arrLength = test.length;

			if(arrLength == 0){
				$('.tp-color-active').removeClass('active');
			}else{
				$('.tp-color-active').addClass('active');
			}
		}

		function tp_check_color(){
			var a = localStorage.getItem('tp_color_scheme');

			var list = $(`[data-color="${a}"]`);

			list.parent().addClass('active').parent().siblings().find('.tp-color-active').removeClass('active')		
		}
		tp_check_color();

		$('.tp-color-active').on('click', function () {
			$(this).addClass('active').parent().siblings().find('.tp-color-active').removeClass('active');
		});

	}
	if (($(".tp-color-settings-btn").length > 0) && ($("#tp-color-setings-input").length > 0) && ($("#tp-theme-color-label").length > 0)) {
		tp_color_settings();
	}



	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('select').niceSelect();
	$('.tp-header-search-category select').niceSelect();


	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothScroll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothScroll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;

	
	////////////////////////////////////////////////////
	// 14. Slider Activation Area Start
	$('.tp-slider-active-4').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		centerMode: true,
		prevArrow: `<button type="button" class="tp-slider-3-button-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		   <path d="M1.00073 6.99989L15 6.99989" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		   <path d="M6.64648 1.5L1.00011 6.99954L6.64648 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`,
		nextArrow: `<button type="button" class="tp-slider-3-button-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.9993 6.99989L1 6.99989" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M9.35352 1.5L14.9999 6.99954L9.35352 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg></button>`,
		asNavFor: '.tp-slider-nav-active',
		appendArrows: $('.tp-slider-arrow-4'),
		
	});


	// home 1
	var slider = new Swiper('.tp-project-active', {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	

	// hero 2 active
	if ($('.tp-hero-2-active').length > 0) {
		var slider = new Swiper('.tp-hero-2-active', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".hero-button-next-1",
				prevEl: ".hero-button-prev-1",
			},
			});
			}


	// project active
	if ($('.tp-project-2-active').length > 0) {
		var slider = new Swiper('.tp-project-2-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			grabCursor: true,
			centeredSlides: true,
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}


	// testimonial active
	if ($('.tp-testimonial-active').length > 0) {
		var slider = new Swiper('.tp-testimonial-active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:2,
				},
				'1400':{
					slidesPerView:2,
				},
				'1200':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}



	// testimonial active
	if ($('.tp-testimonial-3-active').length > 0) {
		var slider = new Swiper('.tp-testimonial-3-active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:2,
				},
				'1400':{
					slidesPerView:2,
				},
				'1200':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}



	// team active
	if ($('.tp-team-3-active').length > 0) {
		var slider = new Swiper('.tp-team-3-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			pagination: {
				el: '.slider_pagination',
				clickable: true,
			  },
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}


		// blog-2 active
		if ($('.tp-blog-2-active').length > 0) {
		var slider = new Swiper('.tp-blog-2-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				// Navigation arrows
				navigation: {
					nextEl: ".blog-button-next-1",
					prevEl: ".blog-button-prev-1",
				},
			});
			}
			if ($('.tp-slider-2-active').length > 0) {
				var slider = new Swiper('.tp-slider-2-active', {
					slidesPerView: 2,
					spaceBetween: 30,
					loop: false,
					breakpoints: {
						'1700':{
							slidesPerView:2,
						},
						'1400':{
							slidesPerView:2,
						},
						'1200':{
							slidesPerView:2,
						},
						'767': {
							slidesPerView:2,
						},
						'576': {
							slidesPerView:1,
						},
						'0': {
							slidesPerView:1,
						},
						},
						// Navigation arrows
						navigation: {
							nextEl: ".blog-button-next-1",
							prevEl: ".blog-button-prev-1",
						},
					});
					}



		// blog-2 active
		if ($('.tp-blog-3-active').length > 0) {
		var slider = new Swiper('.tp-blog-3-active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: false,
			// centeredSlides : true,
		
				// Navigation arrows
				navigation: {
					nextEl: ".blog-button-next-1",
					prevEl: ".blog-button-prev-1",
				},
				breakpoints: {
					'1200':{
						slidesPerView:2,
					},
					'767': {
						slidesPerView:2,
					},
					'576': {
						slidesPerView:1,
					},
					'0': {
						slidesPerView:1,
					},
					},
			});
			}
					// blog-2 active
		if ($('.tp-timeline').length > 0) {
			var slider = new Swiper('.tp-timeline', {
				slidesPerView: 1,
				loop: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function(index, className) {
						var date = getDateByIndex(index); // Replace with your custom logic to get the date
						return '<span class="' + className + '">' + date + '</span>';
					  }
				  },
			
					// Navigation arrows
					navigation: {
						nextEl: ".blog-button-next-1",
						prevEl: ".blog-button-prev-1",
					},
					breakpoints: {
						'1200':{
							slidesPerView:1,
						},
						'767': {
							slidesPerView:1,
						},
						'576': {
							slidesPerView:1,
						},
						'0': {
							slidesPerView:1,
						},
						},
				});
				}
				function getDateByIndex(index) {
					// Replace this function with your custom logic to get the date based on the index
					var dates = ['Aug 2015', 'Dec 2017', 'Jun 2019', 'Feb 2022'];
					return dates[index];
				  }

			if ($('.tp-founders-active').length > 0) {
				var slider = new Swiper('.tp-founders-active', {
					slidesPerView: 2,
					spaceBetween: 30,
					loop: false,
					// centeredSlides : true,
				
						// Navigation arrows
						navigation: {
							nextEl: ".founders-button-next-1",
							prevEl: ".founders-button-prev-1",
						},
						breakpoints: {
							'1200':{
								slidesPerView:2,
							},
							'767': {
								slidesPerView:1,
							},
							'576': {
								slidesPerView:1,
							},
							'0': {
								slidesPerView:1,
							},
							},
					});
					}

					if ($('.tp-slider-3-active').length > 0) {
						var slider = new Swiper('.tp-slider-3-active', {
							slidesPerView: 3,
							spaceBetween: 30,
							loop: false,
							// centeredSlides : true,
						
								// Navigation arrows
								navigation: {
									nextEl: ".awards-button-next-1",
									prevEl: ".awards-button-prev-1",
								},
								breakpoints: {
									'1200':{
										slidesPerView:3,
									},
									'767': {
										slidesPerView:2,
									},
									'576': {
										slidesPerView:1,
									},
									'0': {
										slidesPerView:1,
									},
									},
							});
							}
							

			
							// open video in the same place 
							$('.play-icon').click(function() {
								var videoId = 'watch?v=go7QYaQR494'; // Replace 'VIDEO_ID' with the actual YouTube video ID
								var iframeUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
								
								$('.background-image').hide();
								$('.play-icon').hide();
								$('.video-overlay').css('opacity', 1);
								$('.video-player').attr('src', iframeUrl).show();
							  });


	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	$('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
      });

	$('.popup-image-footer').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$("#toggle").change(function () {
		if ($(this).is(":checked")) {
			/*$("body").addClass("dark-mode");
			$("body").removeClass("light-mode");*/
			// $("body").removeClass("light-mode").addClass("dark-mode");
		} else {
			/*
			$("body").removeClass("dark-mode");
			$("body").addClass("light-mode");
			*/
			// $("body").removeClass("dark-mode").addClass("light-mode");
		}
	});

	
	

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	
		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	
		

		$('.tp-checkout-payment-item label').on('click', function () {
			$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
			
		});
		

		$('.tp-color-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
		

		$('.tp-size-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
	
		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.tp-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();

	

	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();

	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function tp_tab_line(){
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('mouseenter', (e)=>{
					indicator(e.target);
				});
				
			});

			
			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function tp_tab_line_2(){
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.tp-product-tab button');
			var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('click', (e)=>{
					indicator(e.target);
				});
			});
			
			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-product-tab button').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.tp-video-toggle-btn').on('click', function(){

		if(play === false){
			$('.tp-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).play();
			});
		}else{
			$('.tp-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if($('#password-show-toggle').length > 0){
		var btn = document.getElementById('password-show-toggle');
		
		btn.addEventListener('click', function(e){
			
			var inputType = document.getElementById('tp_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');
	
			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			 } else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			 }
		});
	}

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	  }

	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

})(jQuery);