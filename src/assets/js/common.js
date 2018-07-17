$(function() {
    //menu
    $('#overlay ul li').eq(0).on('click', function() {
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    $('#overlay ul li').eq(1).on('click', function() {
        var recoOff = $('#recommend').offset().top;
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: recoOff - 75 }, 800);
    });
    $('#overlay ul li').eq(2).on('click', function() {
        var actMetOff = $('#activity-method').offset().top;
        $('#overlay ul li').removeClass('nav-active');
        $(this).addClass('nav-active');
        $('html, body').animate({ scrollTop: actMetOff - 75 }, 800);
    });


    $(window).on('scroll', function() {
        var recoOff = $('#recommend').offset().top - 200,
            actMetOff = $('#activity-method').offset().top - 200;
        if ($(this).scrollTop() >= 0) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(0).addClass('nav-active');
        }
        if ($(this).scrollTop() >= recoOff) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(1).addClass('nav-active');
        }
        if ($(this).scrollTop() >= actMetOff) {
            $('#overlay ul li').removeClass('nav-active');
            $('#overlay ul li').eq(2).addClass('nav-active');
        }
    });

    //footer  
    var h = $(window).height();
    if ($(window).scrollTop() < h / 5) {
        $('.footer-icon').removeClass("footer-icon-open");
    } else {
        $('.footer-icon').addClass("footer-icon-open");
    }
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > h / 5) {
            $('.footer-icon').addClass("footer-icon-open");
        } else {
            $('.footer-icon').removeClass("footer-icon-open");
        }
    });

    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#gotop').on('click', function() {
        $('html, body').animate({ scrollTop: $("html, body").offset().top }, 800);
    });


    //free999
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            // duration: 100,
        })
        .setPin("#pin1")
        // .addIndicators({
        //     name: "1 (duration: 300)"
        // }) // add indicators (requires plugin)
        .addTo(controller);
});