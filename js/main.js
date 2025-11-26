$(function () {

    "use strict";
    // menu fix js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });

    // select js
    $('.select_js').niceSelect();

    // venobox
    $('.venobox').venobox();

    //parallax
    var scene = document.getElementById('scene');
    if (scene) {
        var parallaxInstance = new Parallax(scene);
    }

    // testimoial
    $('.testi_slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        asNavFor: '.testi_slider_img',
        nextArrow: '<i class="fa-solid fa-arrow-right-long nextArrow"></i>',
        prevArrow: '<i class="fa-solid fa-arrow-left-long prevArrow"></i>',
        // for rtl
        rtl: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

    $('.testi_slider_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        asNavFor: '.testi_slider_text',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        // for rtl
        rtl: true,
    });

    // pricing tabs
    $('.tabset1').pwstabs({
        effect: 'scale',
        defaultTab: 1,
    });

    // SVG Inject js
    SVGInject(document.querySelectorAll("img.injectable"));

    // small device toggle icon
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });

});

