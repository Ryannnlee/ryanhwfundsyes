'use strict';

$(function () {
    //menu
    $('#overlay ul li').eq(0).on('click', function () {
        var recoOff = $('#recommend').offset().top;
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: recoOff - 75 }, 800);
    });
    $('#overlay ul li').eq(1).on('click', function () {
        var actMetOff = $('#activity-method').offset().top;
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: actMetOff - 75 }, 800);
    });
    $('#overlay ul li').eq(2).on('click', function () {
        var actTncOff = $('.act-tnc').offset().top;
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: actTncOff - 75 }, 800);
    });

    $(window).on('scroll', function () {
        var recoOff = $('#recommend').offset().top - 200,
            actMetOff = $('#activity-method').offset().top - 200,
            actTncOff = $('.act-tnc').offset().top - 200;
        if ($(this).scrollTop() >= 0) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(0).addClass('nav-active');
        }
        if ($(this).scrollTop() >= actMetOff) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(1).addClass('nav-active');
        }
        if ($(this).scrollTop() >= actTncOff) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(2).addClass('nav-active');
        }
    });

    //footer
    $(window).on('scroll', function () {
        var h = $(window).height(),
            fiH = $('body').height(),
            h15 = h * 1.5;
        if ($(this).scrollTop()) {
            $('.footer-icon').removeClass("footer-nofix");
            $('.footer-icon').addClass("footer-icon-open");
        } else {
            $('.footer-icon').removeClass("footer-icon-open");
            $('.footer-icon').removeClass("footer-nofix");
        }

        // if ($(this).scrollTop() > fiH - h15) {
        //     $('.footer-icon').removeClass("footer-icon-open");
        //     $('.footer-icon').addClass("footer-nofix");
        // } else {
        //     $('.footer-icon').removeClass("footer-nofix");
        // }
        // console.log(fiH);
    });

    $('#nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#gotop').on('click', function () {
        $('html, body').animate({ scrollTop: $("html, body").offset().top }, 800);
    });

    //free999
    var controller = new ScrollMagic.Controller();
    var wrapperH = document.querySelector('.wrapper').Height;
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: wrapperH
    }).setPin("#pin1")
    // .addIndicators({
    //     name: "1 (duration: 300)"
    // }) // add indicators (requires plugin)
    .addTo(controller);
});