import $ from "jquery";
import "velocity-animate/velocity.min"
import "velocity-animate/velocity.ui.min"

let burger = $('.burger-icon');
let links = $('nav ul li a');
let menu = $('nav ul li');
let overlay_navigation = $('.overlay-navigation');

// Burger menu functionality
burger.click(showMenu)
links.click(hideMenu);

function showMenu() {
    burger.css('pointer-events', 'none');
    menu.css('flex-basis', `calc(100%/ ${menu.length})`)
    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {
        burger.addClass('active');
        $("body").addClass("fixed");
        overlay_navigation.velocity('transition.slideLeftIn', {
            begin: function () {
                menu.velocity('transition.perspectiveLeftIn', {
                    stagger: 120,
                    delay: 0,
                    complete: function () {
                        burger.css('pointer-events', 'auto');
                    }
                })
            }
        })
    } else {
        hideMenu()
    }
}

function hideMenu() {
    burger.css('pointer-events', 'none');
    burger.removeClass('active')
    overlay_navigation.removeClass('overlay-active');
    $("body").removeClass("fixed");
    menu.velocity('transition.perspectiveRightOut', {
        stagger: 100,
        delay: 0,
        complete: function () {
            overlay_navigation.velocity('transition.fadeOut', {
                complete: function () {
                    burger.css('pointer-events', 'auto');
                }
            });
        }
    })
}

// On Scroll Functionality
$(window).scroll(function (){
    let st = $(this).scrollTop();
    let windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.burger-wrapper').addClass('navShadow') : $('.burger-wrapper').removeClass('navShadow');
    $('.header-wrapper .container').css({
        "transform": "translate(0%, " + -st / 2 + "px"
    });
});
