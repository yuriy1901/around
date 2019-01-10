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




    // single case show


    $('.home-case-col').on('click', function (){
        $('.case-single-close').show();
        $('.case-single-wrapper').show();
        $('header').addClass('style-fixed');
        $('main').addClass('style-fixed');
        $('footer').addClass('style-fixed');
        $('.single-bg-overlay').show();
    });

    $('.case-single-close').on('click', function (){
        $(this).hide();
        $('.case-single-wrapper').hide();
        $('header').removeClass('style-fixed');
        $('main').removeClass('style-fixed');
        $('footer').removeClass('style-fixed');
        $('.single-bg-overlay').hide();
    });




});




























