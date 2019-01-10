jQuery(document).ready( function ($) {

    function agencyPeopleLastTitleColor(){
        var people = $(".agency-people-col").length;
        var peoplePerRow = 3;
        //IF WE ADD MEDIA QUERIES AND PEOPLE PER ROW WILL CHANGE USE THIS CASES:
        var mq1 = window.matchMedia( "(max-width: 768px)" );
        var mq2 = window.matchMedia( "(max-width: 420px)" );
        if (mq1.matches) {
            peoplePerRow = 2;
        }
        if (mq2.matches) {
            peoplePerRow = 1;
        }
        var lastRowCount = (people%peoplePerRow) ? people%peoplePerRow : peoplePerRow;
        for(var i = people - 1; i > (people - lastRowCount -1); i--){
            var block = $(".agency-people-col")[i];
            $(block).children(".name").css({"color": "#fafafa"});
        }
    }
    agencyPeopleLastTitleColor();


/*
    // about lighgallery

    $('#about-gallery').lightGallery({
        selector: '.about-gallery-item a'
    });


    //header burger menu trigger

    $( ".main-wrapper .menu-icon-burger" ).on( "click", function() {
        $('.header-block').fadeIn();
    });
    $( ".header-wrapper .menu-icon-burger" ).on( "click", function() {
        $('.header-block').fadeOut();
    });



    // owl carousel

    $(".contact-testimonials-slider-wrapper").owlCarousel({
        nav: true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"5\" height=\"11\" viewBox=\"0 0 5 11\">\n" +
        "    <path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#F5F5F5\" stroke-linecap=\"round\" d=\"M4.5 10.5l-4-4.998L4.5.5\" opacity=\".7\"/>\n" +
        "</svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"5\" height=\"11\" viewBox=\"0 0 5 11\">\n" +
        "    <path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#F5F5F5\" stroke-linecap=\"round\" d=\"M4.5 10.5l-4-4.998L4.5.5\" opacity=\".7\"/>\n" +
        "</svg>"],
        navElement: "span",
        dots: false,
        loop: true,
        items: 1
    });

    $(".about-gallery").owlCarousel({
        nav: true,
        rtl: true,
        navText: ["", ""],
        navElement: "span",
        dots: false,
        loop: true,
        margin: 20,
        items: 4,
        responsive: {
            0:{
                items: 2
            },
            480:{
                items: 3
            },
            769:{
                items: 4
            }
        }
    });



    $(".our-story-slider").owlCarousel({
        rtl: true,
        nav: true,
        navText: ["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"5\" height=\"11\" viewBox=\"0 0 5 11\">\n" +
        "    <path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#F5F5F5\" stroke-linecap=\"round\" d=\"M4.5 10.5l-4-4.998L4.5.5\" opacity=\".7\"/>\n" +
        "</svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"5\" height=\"11\" viewBox=\"0 0 5 11\">\n" +
        "    <path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#F5F5F5\" stroke-linecap=\"round\" d=\"M4.5 10.5l-4-4.998L4.5.5\" opacity=\".7\"/>\n" +
        "</svg>"],
        navElement: "span",
        dots: false,
        loop: true,
        items: 1
    });




    var $eventSlider = $('.events-2-items-wrapper'),
        sliderOptions = {
            loop:true,
            rtl: true,
            nav:false,
            rtl : true,
            dots: false,
            margin: 30,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:2
                }
            }
        };

    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
        $eventSlider.owlCarousel(sliderOptions);
    }

    jQuery( window ).resize(function() {
        if (mq.matches) {
            $eventSlider.owlCarousel(sliderOptions);
        } else {
            $eventSlider.trigger('destroy.owl.carousel');
        }
    });








    // home marquee

    $('#marquee').simplemarquee();



    // wheel function


    $('body').bind('wheel', $.debounce(50, function(e){

        var delta = e.originalEvent.deltaY;
        var length =  $('.wheel-page').length;
        var array = $('.wheel-page');

        if (delta > 0){
            $('.wheel-page').each(function(index){
                if( $(this).hasClass('active') && index < (length - 1) ){
                    $(this).removeClass('active');
                    $(this).next().addClass('active').delay().queue(function(){
                        $(this).addClass("show-divs");
                        $('.fade-delay').addClass('animated fadeIn')
                    });
                    $('.page-dots span').removeClass('active-dot');
                    $('.page-dots span').eq(index + 1).addClass('active-dot');
                    return false;
                } else if( $(this).hasClass('active') && index == (length - 1)  ){
                    array.removeClass('active');
                    array.first().addClass('active');
                    $('.page-dots span').removeClass('active-dot');
                    $('.page-dots span').eq(0).addClass('active-dot');
                }
            });
        } else {
            $('.wheel-page').each(function(index){
                if( $(this).hasClass('active') && index != 0 ){
                    $(this).removeClass('active');
                    $(this).prev().addClass('active').delay().queue(function(){
                        $(this).addClass("show-divs");
                        $('.fade-delay').addClass('animated fadeIn')
                    });
                    $('.page-dots span').removeClass('active-dot');
                    $('.page-dots span').eq(index - 1).addClass('active-dot');
                    return false;
                } else if( $(this).hasClass('active') && index == (0)  ){
                    array.removeClass('active');
                    array.last().addClass('active');
                    $('.page-dots span').removeClass('active-dot');
                    $('.page-dots span').eq().last().addClass('active-dot');
                }
            });


        }

    }));

    // file upload text

    $('.input-type-file').change(function() {
        var filename = $(this).val().split('\\').pop();
        console.log(filename);
        $('.input-file-imitation span').text(filename);
    });


    // show textarea for someone


    $('body').on('click', '.label-radio-container', function() {
        if ( $(this).hasClass('radio-for-someone')){
            $('.change-placeholder').attr("placeholder", "Who’s waiting?");

            $('.for-someone-input').fadeIn();
        } else{
            $('.for-someone-input').fadeOut();
            $('.change-placeholder').attr("placeholder", "Name of Recipient");
        }
    });





    // menu tabs


    $('.video-page-wrapper').on('click', function (){
        $(this).children('video').get(0).pause();
        $('.video-popup-overlay').show();
        $('.video-popup-wrapper').fadeIn();
        $('.video-popup-wrapper video').get(0).play();
    });

    $('.video-popup-overlay, .video-close-icon').on('click', function (){
        $('.video-page-wrapper').children('video').get(0).play();
        $('.video-popup-overlay').hide();
        $('.video-popup-wrapper').fadeOut();
        $('.video-popup-wrapper video').get(0).pause();
    });





    // video popup

    $('.dishes-tabs div').on('click', function (){

        var clickedTab = $(this);
        var tabToShow = $(this).data('tab-header');
        console.log(tabToShow);

        $('.dishes-items-tab').hide();
        if(clickedTab.hasClass('active')) {
            $('.dishes-items-tab[data-tab-item='+tabToShow +']').hide();
            $('.dishes-tabs div').removeClass('active');
        }
        else {
            $('.dishes-items-tab[data-tab-item='+tabToShow +']').fadeIn();
            $('.dishes-tabs div').removeClass('active');
            clickedTab.addClass('active');
        }

    });


    // popup events

    $('.menu-icon-chat').on('click', function (){
        $('.popup-main-overlay').show();
        $('.popup-chat').fadeIn();
    });
    $('.popup-chat .popup-close, .popup-main-overlay').on('click', function (){
        $('.popup-main-overlay').hide();
        $('.popup-chat').fadeOut();
    });

    $('.menu-icon-callback').on('click', function (){
        $('.popup-main-overlay').show();
        $('.popup-callback').fadeIn();
    });
    $('.popup-callback .popup-close, .popup-main-overlay').on('click', function (){
        $('.popup-main-overlay').hide();
        $('.popup-callback').fadeOut();
    });

    // add rtl styles

    $('.menu-icon-lang').on('click', function (){

        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $('body').removeClass('rtl');
            $('html').attr('dir', 'ltr');
        } else{
            $(this).addClass('active');
            $('body').addClass('rtl');
            $('html').attr('dir', 'rtl');
        }
    });




    // text area auto height

    var textarea = document.querySelector('textarea');
    textarea.addEventListener('keydown', autosize);
    function autosize(){
        var el = this;
        setTimeout(function(){
            el.style.cssText = '';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }


*/


});




























