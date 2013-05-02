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
