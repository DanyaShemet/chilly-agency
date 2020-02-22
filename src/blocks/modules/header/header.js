"use strict";
import "velocity-animate/velocity.min"
import "velocity-animate/velocity.ui.min"
import Typed from 'typed.js'
import $ from "jquery";
import ModalVideo from "modal-video/js/modal-video.min"

// 100vh in mobile phone
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let burger = $('.burger-icon');
let links = $('.header__animate-nav ul li a');
let menu = $('.header__animate-nav ul li');
let overlay_navigation = $('.header__navigation-overlay');

// Burger menu functionality
burger.click(showMenu)
links.click(hideMenu);

function showMenu() {
    menu.css('flex-basis', `calc(100%/ ${menu.length})`);
    overlay_navigation.toggleClass('overlay-active');
    $("body").addClass("fixed");
    if (overlay_navigation.hasClass('overlay-active')) {
        burger.css('pointer-events', 'none');
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
    burger.removeClass('active');
    burger.css('pointer-events', 'none');
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

    let $sections = $('.section');
    $sections.each(function (i, el) {
        let top = $(el).offset().top - 90;
        let bottom = top + $(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');
        }
    })
});

// Type machine Functionality
let options = {
    strings: ['Chilly Agency', 'Developers', 'Designers', 'Strategists', 'Marketers'],
    typeSpeed: 40,
    showCursor: false,
    loop: true,
    backSpeed: 40
};
let typed = new Typed('#main-text', options);


// scroll to chosen block on page functionality
export function scrollto() {
    $(".scrollto").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 80}, 1500);
        return false;
    });
}

// Video functionality
new ModalVideo('.open-video');

