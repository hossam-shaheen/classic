$(document).ready(function () {

    /*centralize slider*/


    $('.main').height($(window).height());



    $(".slider").css({
        paddingTop: $(".main").outerHeight() / 2 - (($(".header").outerHeight() + $(".slider").outerHeight()) / 2)
    });



    $(window).on("resize", function () {

        $('.main').height($(window).height());


        $(".slider").css({
            paddingTop: $('.main').outerHeight() / 2 - (($(".header").outerHeight() + $(".slider").outerHeight()) / 2)
        });




    });

    /*Slider*/
    $('.bxslider').bxSlider({
        speed: 600,
        pager: false
    });



    /*shuffle Liberary*/

    // Instantiate MixItUp:

    $('#projectFilter').mixItUp();



    /*Active Link*/

    $(".menu ul li a").click(function () {

        $(this).addClass("active");
        $(this).parent().siblings().find("a").removeClass("active");

    });

    /*scrollTop*/
    $(window).scroll(function () {

        if ($(this).scrollTop() > 800) {

            $(".toTop").show();
        } else {
            $(".toTop").hide();
        }


    });

    $(".toTop").click(function () {

        $("html,body").animate({
            scrollTop: 0
        });
        $(".menu ul li a").removeClass("active");

        $(".menu ul li a").first().addClass("active");

    });


    /*Move to section*/
    $(".menu ul li a").click(function () {

        $("html,body").animate({

            scrollTop: $($(this).attr("data-target")).offset().top

        }, 600);

    });


    /*change Color*/
    $(".color-container ul li").click(function () {
        console.log()
        $("link[href^='css']").attr({
            "href": "css/style-" + $(this).attr('class') + ".css"
        })

    });
    $(".color-container").hide(10);
    $(".color-box a").click(function(){
        
        $(".color-container").toggle(600);
    });



});