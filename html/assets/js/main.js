"use strict";

// declare as variáveis
var trim, placeholder;

//trim
trim = function (str) {
    return str.replace(/^\s+|\s+$/g,"");
}

placeholder = {
    'confirm': function (a) {
        var v = $(a).attr("placeholder");

        if ( trim($(a).val()) == "" || trim($(a).val()) == undefined ) {
            $(a).val(v);
        } else if ( trim($(a).val()) == trim(v) ) {
            $(a).val("");
        }
    },
    'hold': function (a) {
        $(a).on({
            'focus': function (){
                placeholder.confirm($(this));
            },
            'blur': function (){
                placeholder.confirm($(this));
            }
        });
    }
}

// Doc ready
$(function(){

    // Nice scroll - comentado porque tava me irritando
    // $("body").niceScroll();

    // Login slide
    $('.slide-login').on('click', function(slideLogin) {
        $(this).prev('article').slideToggle();
        slideLogin.preventDefault();
    });

    if ( $('aside dl dt') ) {
        $('aside dl dt a').on('click', function(slide) {
            // toggle minus/plus icons
            $(this).find('i').toggleClass('icon-plus');
            // slide up/down the next <dd>
            $(this).parent().next().slideToggle();
            // prent default action
            slide.preventDefault();
        });
    };

    // highlightsSlider
    if ('.highlightsSlider') {
        var counter = 1;

        $('.highlightsSlider aside ul li a').on('click', function(e) {
            // prevent the default action
            e.preventDefault();
            // reset counter
            var b = $(this).attr('href');
            counter = b.substr(4);
            // remove all class="on"
            $('.highlightsSlider aside ul li a').removeClass('on');
            // add on this element class="on"
            $(this).addClass('on');
            // calls the attr of the a clicked
            var click = $(this).attr('href');
            $('.link').hide();
            $(click).fadeIn();
        });

        setInterval(function() {
            var a = $('.highlightsSlider aside ul li a');
            // remove all class on
            a.removeClass('on');
            // find the div usigin counter and add clas 'on'
            var target = '#div' + counter;
            a.closest('ul').find('a[href ='+target+']').addClass('on');
            // hide all links
            $('.link').hide();
            // fade in
            $('#div' + counter).fadeIn();
            // count
            counter++
            // return to first view (reset counter)
            if (counter == 5) { counter = 1 };  
        }, 3000 );
    };

    // Only IE
    if (navigator.userAgent.match("MSIE")) {
        // Placeholder
        placeholder.hold("input, textarea");

        // PIE (border-radius, gradient, box-shadow)
        if (window.PIE) {
            var elements = 'input, textarea, .round';
            
            $(elements).each(function() {
                PIE.attach(this);
            });
        }
    }
});
