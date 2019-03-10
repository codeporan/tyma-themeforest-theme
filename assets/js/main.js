/*
Author       : Themeasad
Template Name: TAYMA RESUME & MINIMAL PORTFOLIO RESPONSIVE HTML TEMPLATE
Version      : 1.0
*/


(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".embed-responsive iframe").addClass("emebed-responsvie-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltop"]').tooltip();
    });

    // 01. START MENU STICKY JS
    $(".header-top-area").sticky({
        topSpacing: 0,
    });
    // 02. START SMOTH SCROOL JS
    $('a.smoth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1200);
        e.preventDefault();
    });
    // 03. START SCROOLSPY JS
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 80
    });
    // 04. START TOGGLE DROPDOWN JS
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    // 05.START SLIDER owlCarousel JS
    $("#slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });


    //06. START testimonail CAROUSEL JS
    $('#partner-list').owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },

            767: {
                items: 3
            },

            768: {
                items: 4
            }
        }
    });

    //07. START partner CAROUSEL JS
    $('#testimonail-list').owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: false,
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });

    // 08. counter js

    $('.counter').counterUp();

    // 09. START PORTFOLIO MIXITUP JS
    jQuery('.portfolio-items').mixitup({
        targetSelector: '.mix'
    });

    // 10. START VENOBOX
    $('.popup-img').venobox({
        numeratio: true,
        infinigall: true
    });



}(jQuery));