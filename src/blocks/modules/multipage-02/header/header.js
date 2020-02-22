"use strict";
import "velocity-animate/velocity.min"
import "velocity-animate/velocity.ui.min"
import $ from "jquery";
import ModalVideo from "modal-video/js/modal-video.min"


let burger = $('.burger-icon');
let links = $('.header__animate-nav ul li a');
let menu = $('.header__animate-nav ul li');
let overlay_navigation = $('.header__navigation-overlay');


// Burger menu functionality
burger.click(showMenu)
links.click(hideMenu);

function showMenu() {
    document.onwheel = null;
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
            document.onwheel = onWheel;
        }
    })
}

// On Scroll Functionality

$(window).scroll(function (e) {
    let st = $(this).scrollTop();
    st > 200 ? $('.burger-wrapper').addClass('navShadow') : $('.burger-wrapper').removeClass('navShadow');
});

// opening menu in main page
document.onwheel = onWheel;
function onWheel(){
    if (document.body.clientHeight <= 1080){
        showMenu();
    }
}

// Video functionality
new ModalVideo('.open-video');

