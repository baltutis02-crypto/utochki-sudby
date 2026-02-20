// GLOBALS
var paddingheight;

// FUNCTIONS

(function($){
    $('.picture-carousel').owlCarousel({
        loop:true,
        dots:false,
        margin:16,
        nav:false,
        center:true,
        autoplayTimeout:5000,
        autoPlay: true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:3
            }
        }
    });

    // picture-carousel - Go to the next item
    $('.pc-btn-next-wrap').click(function() {
        $('.picture-carousel').trigger('next.owl.carousel');
    })

    // picture-carousel - Go to the previous item
    $('.pc-btn-prev-wrap').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('.picture-carousel').trigger('prev.owl.carousel', [300]);
    })

})(jQuery);

// Loader ctrl
window.addEventListener('load', function () {
    setTimeout(() => {
        $('#load-layout').stop(true,true).fadeOut(350);
        $('body').removeClass("loading");
    }, 500);

});

(function (d, w) {

    // Accordeon Block Ctrl
    $('a.accordeon-heading').on('click', function () {
        if($(this).hasClass('opened'))
        {
            $(this).removeClass('opened');
            clearTimeout($.data(this,'timer'));
            $(this).parent().find('.accordeon-body').stop(true,true).slideUp(350);
        }
        else
        {
            $(this).addClass('opened');
            clearTimeout($.data(this,'timer'));
            $(this).parent().find('.accordeon-body').stop(true,true).slideDown(350);
        }
    });
}(document, window));

$(document).ready(function () {


});

$(document).on("load",function () {


});

(function ($) {

    // Read height of the header
    $(window).on("pageload",(function () {
        paddingheight=$('#header').outerHeight(true);
    }));

    // Detect if scrolled through top block (for header)
    $(window).scroll(function(){
        var docscroll=$(document).scrollTop();
        var offsetheight=$('#header').outerHeight(true);
        if(docscroll>offsetheight)
        {
            /*$('#first-element').css('padding-top',paddingheight+"px");*/
            /*$("#h-offset").style.height = offsetheight.toString()+"px";*/
            $('#header').addClass('scrolled');
            /*$('#cps').addClass('scrolled');*/
        }
        else
        {
            /*$('#first-element').css('padding-top', 0);*/
            $('#header').removeClass('scrolled');
            /*$('#cps').removeClass('scrolled');*/
            /*$("#h-offset").style.height = '0';*/
        }
    });

})(jQuery);

new WOW().init();
SmoothScroll({ stepSize: 30 });