"use strict"

import "./import/modules";
import $ from "jquery";
import {aboutInit} from './../blocks/modules/about/about.js'
import {TweenMax, gsap} from "gsap/all"

gsap.registerPlugin(TweenMax);

$(document).ready(function () {
    aboutInit()
    scrollto()
    initialParallax();
});

// parallax on page functionality
function initialParallax() {
    if (document.documentElement.clientWidth >= 1050) {
        $('#header-wrapper').mousemove(function (e) {
            parallaxIt(e, ".circle-1", -30, '#header-wrapper');
            parallaxIt(e, ".circle-2", 10, '#header-wrapper');
            parallaxIt(e, ".circle-3", 20, '#header-wrapper');
            parallaxIt(e, ".square-1", -40, '#header-wrapper');
            parallaxIt(e, ".trapezoid-1", -5, '#header-wrapper');
            parallaxIt(e, ".repeat-grid-circles", 20, '#header-wrapper');
        });
        $('#about').mousemove(function (e) {
            parallaxIt(e, ".repeat-circles", 30, '#about');
        });
        $('#services').mousemove(function (e) {
            parallaxIt(e, ".pentagon-1", 30, '#services');
            parallaxIt(e, ".pentagon-2", -30, '#services');
        });
        $('#feedback').mousemove(function (e) {
            parallaxIt(e, ".f-circle-1", 10, '#feedback');
            parallaxIt(e, ".f-circle-2", -5, '#feedback');
            parallaxIt(e, ".f-circle-3", 20, '#feedback');
            parallaxIt(e, ".f-circle-4", -20, '#feedback');
            parallaxIt(e, ".f-circle-5", 5, '#feedback');
            parallaxIt(e, ".f-circle-6", -10, '#feedback');
        });
        $('#footer').mousemove(function (e) {
            parallaxIt(e, ".footer-circle-1", 10, '#footer');
            parallaxIt(e, ".footer-circle-2", -5, '#footer');
            parallaxIt(e, ".footer-circle-3", 20, '#footer');
            parallaxIt(e, ".footer-square", -20, '#footer');
            parallaxIt(e, ".footer-trapezoid", 5, '#footer');
        });
    }
}
function parallaxIt(e, target, movement, parent) {
    let $this = $(parent);
    let relX = e.pageX - $this.offset().left;
    let relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}

// scroll to chosen block on page functionality
function scrollto() {
    $(".scrollto").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
    });
}



//* Для активного блока меню
// $(function () {
//     let jqBar = $('#about')
//     // селектор для вашего блока
//     let jqBarStatus = true
//     $(window).scroll(function() {
//         let scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
//         if (scrollEvent && jqBarStatus) {
//             jqBarStatus = false
//
//         }
//     })
// })


