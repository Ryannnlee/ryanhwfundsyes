'use strict';

$(function () {

    // var wh = $(window).height();
    // var offset = wh / 5;


    // $(window).scroll(function() {
    //     var scrollVal = $(this).scrollTop();

    //     if ($(body).hasClass('fp-viewing-firstPage')) {
    //         $('header').removeClass('header-scroll');
    //     } else {
    //         $('header').addClass('header-scroll');
    //         $('header').removeClass('sm');
    //         $('header').removeClass('hidden');
    //     }

    // });

    $('#nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});