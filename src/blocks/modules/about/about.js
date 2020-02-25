"use strict";

import ScrollMagic from 'scrollmagic'

// animate numbers functionality
function animateCount() {
    $('.about__animated-numbers').each(function () {
        const _this = $(this)
        _this.prop('Counter', 0).animate({
            Counter: _this.data('count')
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                _this.text(Math.ceil(now));
            }
        });
    });
}

export function aboutInit() {
    const controller = new ScrollMagic.Controller;
    new ScrollMagic.Scene({
        triggerElement: "#about",
        reverse: false
    })
        .on('start', function () {
            animateCount();
        })
        .addTo(controller);
}


