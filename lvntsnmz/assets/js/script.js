$(window).load(function() {

    /* SOLAR SYSTEM */

    var body = $(".body-div"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });

    init();

    /* SOLAR SYSTEM */



    $(".se-pre-con").fadeOut("slow");

    $(function() {
        $('#slides').superslides({
            hashchange: false,
            play: 7000,
            inherit_height_from: $(window),
            animation:'fade',
            animation_easing:'linear'
        });
    });

    $('.grid4-box').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed:5000,
        arrows:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});


$(window).scroll(function(){

    if ($(window).width()>900) {

        if ($(window).scrollTop() != 0)
            $('.header').addClass('scrolldown');
        else
            $('.header').removeClass('scrolldown');

        if ($(window).scrollTop() != 0)
            $('.menu').addClass('menu-down');
        else
            $('.menu').removeClass('menu-down');
    };

    if ($(window).width()>900) {

        if ($(window).scrollTop() != 0)
            $('.slider-social').addClass('scrolldown');
        else
            $('.slider-social').removeClass('scrolldown');
    };

    if ($(window).scrollTop() > 500)
        $('.site-up').fadeIn();
    else
        $('.site-up').fadeOut();

});

$(document).ready(function(){

    $('.body-div').css('height',$( window ).height()-50);

    $('.site-up').click(function(){
       $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});