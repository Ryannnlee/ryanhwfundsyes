'use strict';

$(function () {
    // Slick
    $('.teacherSlick').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.teacherSlick-txt',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.teacherSlick-txt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.teacherSlick'
    });
});

// Youtube Video
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        // videoId: 'kIAs-5qLmTE',
        playerVars: {
            autoplay: 0, // 在讀取時自動播放影片
            controls: 1, // 在播放器顯示暫停／播放按鈕
            showinfo: 0, // 隱藏影片標題
            modestbranding: 0, // 隱藏YouTube Logo
            loop: 1, // 讓影片循環播放
            autohide: 0, // 當播放影片時隱藏影片控制列
            rel: 0
        }
    });
}

$('.teacherSlick .slideCard').click(function () {
    if ($(this).hasClass('slick-center')) {
        var vdData = $(this).attr('data-rel');
        player.loadVideoById(vdData, 0, "default");
        show_VD();
    }
});

$('#section0 .kv-content .playbutton').click(function () {
    var vdData = $(this).attr('data-rel');
    player.loadVideoById(vdData, 0, "default");
    show_VD();
});

function show_VD() {
    var VD = $('#youtube-vd');
    VD.fadeIn(300);
}

function closebtnVD() {
    var VD = $('#youtube-vd');
    VD.fadeOut(300);
    player.pauseVideo();
}