import $ from "jquery";
import "velocity-animate/velocity.min"
import "velocity-animate/velocity.ui.min"
import {TweenMax} from "gsap"

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
    //$("body").removeClass("fixed");
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
$(window).scroll(function (e) {
    let st = $(this).scrollTop();
    st > 200 ? $('.burger-wrapper').addClass('navShadow') : $('.burger-wrapper').removeClass('navShadow');
    if (document.documentElement.clientWidth >= 1050) {
        $('#header-wrapper .container').css({"transform": "translate(0%, " + -st / 1.5 + "px"});
    }
});


// Parallax effect

$('#header-wrapper').mousemove(function (e) {
    if (document.documentElement.clientWidth >= 1050) {
        parallaxIt(e, ".circle-1", -30);
        parallaxIt(e, ".circle-2", 10);
        parallaxIt(e, ".circle-3", 20);
        parallaxIt(e, ".square-1", -40);
        parallaxIt(e, ".trapezoid-1", -5);
        parallaxIt(e, ".repeat-grid-circles", 20);
    }


});

function parallaxIt(e, target, movement) {
    let $this = $("#header-wrapper");
    let relX = e.pageX - $this.offset().left;
    let relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}

