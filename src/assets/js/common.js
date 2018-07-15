$(function() {



    var actTncOff = $('.act-tnc').offset().top;
    console.log(actTncOff)

    $('#overlay ul li').eq(2).on('click', function() {
        $('body').animate({
            scrollTop: actTncOff
        }, 2000, 'easeOutBounce');
        // return false;
    });

    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

})