(function($){
    "use strict";

    // add active Tabs
    jQuery('.tab-content .tab-pane:first-child').addClass('show active');
	jQuery('.customtabs li:first-child a').addClass('active');

    // To top Page
    jQuery('.back-to-top').on('click', function(e) { e.preventDefault(); jQuery('html, body').animate({scrollTop : 0}, 1000); });

    // Run Effest Page
	new WOW().init();


    // Show more ( TSL Roadmap )
    jQuery('.roadmap__row .boxroadmap__item:gt(2)').hide();
    var l = jQuery('.roadmap__row .boxroadmap__item').length;
    if (l > 3) {
        jQuery('span').show();
    } else {
        jQuery('span').hide();
    }
    jQuery('.showmore__roadmap').click(function () {
        jQuery('.roadmap__row .boxroadmap__item:gt(2)').toggle('slide');
        jQuery('.roadmap__row .boxroadmap__item:gt(2)').addClass('slide');
        jQuery('.showmore__roadmap').toggleClass('active');
    });
    // jQuery(".customdropdownmenu .dropdown").hover(
    //     function () {
    //         $(this).addClass("show");
    //         $('.customdropdownmenu').on('show.bs.dropdown', function () {
    //             $(this).dropdown('update')
    //         });
    //         $(this).find(".dropdown-menu").addClass("show");
    //     },
    //     function () {
    //         $(this).removeClass("show");
    //         $(this).find(".dropdown-menu").removeClass("show");
    //     }
    // );
})(jQuery);

// add loading page
document.getElementsByTagName('body')[0].classList.add('loaderlodging__body');
window.onload = function() {
    document.getElementsByClassName('loaderlodging')[0].classList.add('remove');
    document.getElementsByClassName('loaderlodging__body')[0].classList.add('afterloading');
}

// SideNav Menu Mobile
function openNav() {
    var element = document.getElementById("mySidenav");
    element.classList.toggle("active");
    var element2 = document.getElementById("iconbars");
    element2.classList.toggle("active");
    document.body.classList.toggle('stop');
}
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) {
        var element = document.getElementById("mySidenav");
        element.classList.remove("active");
        document.body.classList.remove('stop');
    }
});