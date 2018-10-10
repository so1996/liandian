/**
 * Created by lianxiang on 2018/10/9.
 */

(function ($) {

    var section2 = $(".section2");
    var section3 = $(".section3");
    var section4 = $(".section4");

    var bg_white = $(".bg-white");
    var Content = $(".content");
    var bgWhite = $(".bgwhite");
    var start_animate = $(".start-animate");

    function startAnimate() {
        var windowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var reg = /upset/;
        var bg_whiteClass = bg_white.attr("class");
        var ContentClass = Content.attr("class");
        var bgWhiteClass = bgWhite.attr("class");
        if (section2.offset().top - windowScroll < windowHeight - 100) {
            if (!reg.test(bg_whiteClass)) {
                bg_white.addClass("upset");
            }
        } else {
            if (reg.test(bg_whiteClass)) {
                bg_white.removeClass("upset");
            }
        }
        if (section3.offset().top - windowScroll < windowHeight - 100) {
            if (!reg.test(ContentClass)) {
                Content.addClass("upset");
            }
        } else {
            if (reg.test(ContentClass)) {
                Content.removeClass("upset");
            }
        }
        if (section4.offset().top - windowScroll < windowHeight - 100) {
            if (!reg.test(bgWhiteClass)) {
                bgWhite.addClass("upset");
            }
        } else {
            if (reg.test(bgWhiteClass)) {
                bgWhite.removeClass("upset");
            }
        }
        if (windowScroll > 100) {
            start_animate.hide();
            $(".bg-txt").css("opacity", 0);
        } else {
            start_animate.show();
            $(".bg-txt").css("opacity", 1);
        }


    }

    startAnimate();

    $(window).scroll(function () {
        startAnimate();
    });

    start_animate.on("click", function () {
        $('html,body').animate({scrollTop: '300px'}, 1000);
    })

})($);