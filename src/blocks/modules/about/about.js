"use strict";

import ScrollMagic from 'scrollmagic'

export const About = (function () {
    return {
        animateCount: function () {
            $('.js-count').each(function () {
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
        },
        init: function () {
            const controller = new ScrollMagic.Controller;
            new ScrollMagic.Scene({
                triggerElement: "#about",
                reverse: false
            })
                .on('start', function () {
                    About.animateCount();
                })
                .addTo(controller);
        }
    };
})();
