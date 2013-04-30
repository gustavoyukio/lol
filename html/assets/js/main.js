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

    // Esconde caixa de login para slide
    $('.pre-header article').not('.slide-login').css('display', 'none');

    // Login slide
    $('.slide-login').on('click', function(slideDown) {
        $(this).prev('article').slideToggle();
        slideDown.preventDefault();
    });

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
