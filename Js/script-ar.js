$(document).ready(function () {
    (function ($) {



        $(".header-icon").click(function (e) {
            e.preventDefault();
            $("body").toggleClass("with-sidebar");
        });

        $(".overlay").click(function (e) {
            $("body").removeClass("with-sidebar");
        });
    })(jQuery);

    /*****************/
    $(".clse").click(function () {
        var video = document.getElementById("player");
        video.pause();
    });

    $(".header-search-mobile").click(function () {
        $("body").removeClass("with-sidebar");
    });
    $(".hsoub-searchbar").click(function () {
        $("body").removeClass("with-sidebar");
    });

    $(".rpay").click(function () {
        var radioValue = $("input[name='customRadio']:checked").val();
        if (radioValue == "r1") {
            $(".paypal-form").css('display', 'none');
            $(".p-card-form").css('display', 'block');
        } else if (radioValue == "r2") {
            $(".paypal-form").css('display', 'block');
            $(".p-card-form").css('display', 'none');
        }
    });



    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }

    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }









    var Dropdowns = function () {
        var t = $(".dropup, .dropright, .dropdown, .dropleft"),
            e = $(".dropdown-menu"),
            r = $(".dropdown-menu .dropdown-menu");
        $(".dropdown-menu .dropdown-toggle").on("click", function () {
                var a;
                return (a = $(this)).closest(t).siblings(t).find(e).removeClass("show"),
                    a.next(r).toggleClass("show"), !1
            }),
            t.on("hide.bs.dropdown", function () {
                var a, t;
                a = $(this),
                    (t = a.find(r)).length && t.removeClass("show")
            })
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,

            }
        }
    });




    $("#hide").click(function () {
        $("p").hide();
    });

    $("#show").click(function () {
        $("p").show();
    });

    $("#show-hide").click(function () {
        if ($("#show-hide").text() == "See more") {
            $("#show-hide").text("see short");
        } else {
            $("#show-hide").text("See more");
        }
        $(".to-text").fadeToggle();
    });

    $(".more-course").click(function () {
        $(".more-card").show();
        $('.more-course').hide();
    });




    $(".more-reviews").click(function () {
        $(".more-review-body").show();
        $('.more-reviews').hide();
    });

    $(".c-view:nth-child(1) .show-d-coures-t").addClass("left-show");
    $(".c-view:nth-child(5) .show-d-coures-t").addClass("left-show");
    $(".c-view:nth-child(9) .show-d-coures-t").addClass("left-show");
    $(".c-view:nth-child(13) .show-d-coures-t").addClass("left-show");
    $(".c-view:nth-child(17) .show-d-coures-t").addClass("left-show");
    $(".c-view .show-d-coures-t").addClass("show-d-coures");







    $(".c-col4").click(function () {

        $(".c-view").removeClass("col-md-4");
        $(".c-view").removeClass("col-md-12");
        $(".c-view").addClass("col-md-3");
        $(".main-course-content-b .card").removeClass("row");
        $(".main-course-content-b .card").css("flex-direction", "column");
        $(".main-course-content-b .card-body").removeClass("col-md-8");
        $(".main-course-content-b .card-body").removeClass("pl-0");
        $(".main-course-content-b .card-img-h").removeClass("col-md-4");
        $(".main-course-content-b .card-img-h").removeClass("pl-0");
        $(".main-course-content-b .c-add-to-cart").css({
            "width": "100%",
            "margin": "0 auto"
        });
        $(".main-course-content-b .card-title").css("font-size", "20px");
        $(".c-col4").css({
            "background": "#E73C7E",
            "color": "#fff"
        });
        $(".c-col3").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });
        $(".c-col1").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });

        $(".c-view .show-d-coures-t").addClass("show-d-coures");
        $(".c-view .show-d-coures-t").removeClass("show-d-coures-33");
        $(".show-d-coures-t").removeClass("show-show-js");

        $(".c-view:nth-child(1) .show-d-coures-t").removeClass("left-show-3");
        $(".c-view:nth-child(4) .show-d-coures-t").removeClass("left-show-3");
        $(".c-view:nth-child(7) .show-d-coures-t").removeClass("left-show-3");
        $(".c-view:nth-child(10) .show-d-coures-t").removeClass("left-show-3");
        $(".c-view:nth-child(13) .show-d-coures-t").removeClass("left-show-3");

        $(".c-view:nth-child(1) .show-d-coures-t").addClass("left-show");
        $(".c-view:nth-child(5) .show-d-coures-t").addClass("left-show");
        $(".c-view:nth-child(9) .show-d-coures-t").addClass("left-show");
        $(".c-view:nth-child(13) .show-d-coures-t").addClass("left-show");
        $(".c-view:nth-child(17) .show-d-coures-t").addClass("left-show");



    });

    $(".c-col3").click(function () {
        $(".c-view").removeClass("col-md-3");
        $(".c-view").removeClass("col-md-12");
        $(".c-view").addClass("col-md-4");
        $(".main-course-content-b .card").removeClass("row");
        $(".main-course-content-b .card").css("flex-direction", "column");
        $(".main-course-content-b .card-body").removeClass("col-md-8");
        $(".main-course-content-b .card-body").removeClass("pl-0");
        $(".main-course-content-b .card-img-h").removeClass("col-md-4");
        $(".main-course-content-b .card-img-h").removeClass("pl-0");
        $(".main-course-content-b .c-add-to-cart").css({
            "width": "100%",
            "margin": "0 auto"
        });
        $(".main-course-content-b .card-title").css("font-size", "20px");
        $(".c-col3").css({
            "background": "#E73C7E",
            "color": "#fff"
        });
        $(".c-col4").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });
        $(".c-col1").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });
        $(".c-view .show-d-coures-t").addClass("show-d-coures-33");
        $(".c-view .show-d-coures-t").removeClass("show-d-coures");
        /*  $(".show-d-coures-t").addClass("show-show-js");*/
        $(".show-d-coures-t").removeClass("show-show-js");
        $(".c-view:nth-child(1) .show-d-coures-t").removeClass("left-show");
        $(".c-view:nth-child(5) .show-d-coures-t").removeClass("left-show");
        $(".c-view:nth-child(9) .show-d-coures-t").removeClass("left-show");
        $(".c-view:nth-child(13) .show-d-coures-t").removeClass("left-show");
        $(".c-view:nth-child(17) .show-d-coures-t").removeClass("left-show");

        $(".c-view:nth-child(1) .show-d-coures-t").addClass("left-show-3");
        $(".c-view:nth-child(4) .show-d-coures-t").addClass("left-show-3");
        $(".c-view:nth-child(7) .show-d-coures-t").addClass("left-show-3");
        $(".c-view:nth-child(10) .show-d-coures-t").addClass("left-show-3");
        $(".c-view:nth-child(13) .show-d-coures-t").addClass("left-show-3");

    });

    $(".c-col1").click(function () {
        $(".c-view").removeClass("col-md-3");
        $(".c-view").removeClass("col-md-4");
        $(".c-view").addClass("col-md-12");
        $(".main-course-content-b .card").addClass("row");
        $(".main-course-content-b .card").css("flex-direction", "row");
        $(".main-course-content-b .card-body").addClass("col-md-8");
        $(".main-course-content-b .card-body").addClass("pl-0");
        $(".main-course-content-b .card-img-h").addClass("col-md-4");
        $(".main-course-content-b .card-img-h").addClass("pl-0");
        $(".main-course-content-b .c-add-to-cart").css({
            "width": "30%",
            "margin": "0"
        });
        $(".main-course-content-b .card-title").css("font-size", "36px");
        $(".c-col1").css({
            "background": "#E73C7E",
            "color": "#fff"
        });
        $(".c-col3").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });
        $(".c-col4").css({
            "background": "#f6f6f6",
            "color": "#8e8e8e"
        });

        $(".show-d-coures-t").addClass("show-show-js");


    });


    //***************************************/
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top >= 519.2000122070312) {
            $(".fix-sec").fadeIn();
        } else {
            $(".fix-sec").fadeOut();
        }
        console.log(top);
    });

    $(".full-search-h").click(function () {
        $(".hsoub-searchbar").fadeToggle();
    });
    $(".header-search-mobile").click(function () {
        $(".hsoub-searchbar").fadeToggle();
    });
    $(".filter-op").click(function () {
        $(".col-filter-op").fadeToggle();
        $(".col-resalt-search").toggleClass("col-md-12");
    });

    $(".btn-show-course").click(function () {
        if ($(".btn-show-course").text() == "اخفاء القائمه") {
            $(".sa-2").css("display", "none");
            $(".sa-1").addClass("col-md-12");
            $(".sa-1").removeClass("pr-0");
            $(".sa-1").removeClass("col-md-9");
            $(".btn-show-course").text("اظهار القائمه");
            $(".b-c-list").css("display", "block");




        } else if ($(".btn-show-course").text() == "اظهار القائمه") {
            $(".sa-2").css("display", "block");
            $(".sa-1").addClass("col-md-9");
            $(".sa-1").removeClass("col-md-12");
            $(".sa-1").addClass("pr-0");
            $(".btn-show-course").text("اخفاء القائمه");
            $(".b-c-list").css("display", "none");


        }

    });

    $(window).resize(function () {

        if ($(window).width() <= 1200) {

            $(".sa-2").css("display", "none");
            $(".sa-1").addClass("col-md-12");
            $(".sa-1").removeClass("col-md-9");
            $(".btn-show-course").text("Show List");
            $(".b-c-list").css("display", "block");
            $(".btn-show-course").css("display", "none");

        } else {
            $(".sa-2").css("display", "block");
            $(".sa-1").addClass("col-md-9");
            $(".sa-1").removeClass("col-md-12");
            $(".btn-show-course").text("Hide List");
            $(".b-c-list").css("display", "none");
            $(".btn-show-course").css("display", "block");
        }

    });


    $(".modal-open-login").click(function () {
        $(".modal-wrapper-login").fadeIn();
        $(".modal-content-login").addClass("open-login");
        $("body").removeClass("with-sidebar");
    });

    $(".modal-close-login").click(function () {
        $(".modal-wrapper-login").fadeOut();
        $(".modal-content-login").removeClass("open-login");
    });

    $(".modal-open-signup").click(function () {
        $(".modal-wrapper-signup").fadeIn();
        $(".modal-content-signup").addClass("open-signup");
        $("body").removeClass("with-sidebar");

    });

    $(".modal-close-signup").click(function () {
        $(".modal-wrapper-signup").fadeOut();
        $(".modal-content-signup").removeClass("open-signup");
    });

    $(".modal-open-p").click(function () {
        $(".modal-wrapper-p").fadeIn();
        $(".modal-content-p").addClass("open-p");
    });

    $(".modal-close-p").click(function () {
        $(".modal-wrapper-p").fadeOut();
        $(".modal-content-p").removeClass("open - p");
    });



    $(".btn-qa").click(function () {
        $(".modal-wrapper-qa").fadeIn();
        $(".modal-content-qa").addClass("open-qa");
    });

    $(".modal-close-qa").click(function () {
        $(".modal-wrapper-qa").fadeOut();
        $(".modal-content-qa").removeClass("open-qa");
    });


    /* $('#customFile4').change(function (e) {
     var fileName = e.target.files[1].name;
     $(".puserimg").attr('src', fileName);
 });*/

    $('#customFile4').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $(".puserimg").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));

    });



    $('#customFile11').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $(".imgviewcourse").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));

    });

    $('#customFile22').change(function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $(".videoviewcourse").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));

    });






    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        } else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);

    });


    $('.carousel').carousel();


    const player = new Plyr('#player');

});

function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
