"use strict";
import "velocity-animate/velocity.min"
import "velocity-animate/velocity.ui.min"
import Typed from 'typed.js';

let burger = $('.burger-icon');
let links = $('.header-wrapper__animate-nav ul li a');
let menu = $('.header-wrapper__animate-nav ul li');
let overlay_navigation = $('.overlay-navigation');

// Burger menu functionality
burger.click(showMenu)
links.click(hideMenu);

function showMenu() {
    menu.css('flex-basis', `calc(100%/ ${menu.length})`)
    overlay_navigation.toggleClass('overlay-active');
    $("body").addClass("fixed");
    if (overlay_navigation.hasClass('overlay-active')) {
        burger.css('pointer-events', 'none')
        burger.addClass('active');
        overlay_navigation.velocity('transition.slideLeftIn', {
            begin: function () {
                menu.velocity('transition.perspectiveLeftIn', {
                    stagger: 70,
                    delay: 0,
                })
            },
            complete: function () {
                burger.css('pointer-events', 'auto')
            }
        })

    } else {
        hideMenu()
    }
}

function hideMenu() {
    burger.removeClass('active')
    burger.css('pointer-events', 'none')
    overlay_navigation.removeClass('overlay-active');
    $("body").removeClass("fixed");
    menu.velocity('transition.perspectiveRightOut', {
        stagger: 50,
        delay: 0,
        complete: function () {
            overlay_navigation.velocity('transition.fadeOut', {});
            burger.css('pointer-events', 'auto')
        }
    })
}

// On Scroll Functionality

$(window).scroll(function (e) {
    let st = $(this).scrollTop();
    st > 200 ? $('.burger-wrapper').addClass('navShadow') : $('.burger-wrapper').removeClass('navShadow');
    if (document.documentElement.clientWidth >= 1050) {
        $('#header-wrapper .container').css({"transform": "translate(0%, " + -st / 1.5 + "px"});
    }
});



// Type machine Functionality
let options = {
    strings: ['development', 'marketing', 'adviser', 'design' ],
    typeSpeed: 40,
    showCursor: false,
    loop: true,
    backSpeed: 40
};
let typed = new Typed('#main-text', options);


