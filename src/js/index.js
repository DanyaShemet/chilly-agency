"use strict"

import "./import/modules";
import $ from "jquery";
import {aboutInit} from '../blocks/modules/about/about.js'
import {TweenMax, gsap} from "gsap/all"
import {mobileDisplayInBrowser, scrollto} from "%modules%/header/header";

gsap.registerPlugin(TweenMax);


$(document).ready(function () {
    mobileDisplayInBrowser();
    aboutInit();
    scrollto();
    initialParallax();
    setTimeout(function () {
        let preloader = $('#preloader');
        if (!preloader.hasClass('done')) {
            preloader.addClass('done');
        }
    }, 2000);
    setCompanyName()
});

const companyName = 'Chilly Agency';

function setCompanyName() {
    $('.company-name').each(function () {
        $(this).text(companyName)
    })
}

// parallax on page functionality
function initialParallax() {
    if (document.documentElement.clientWidth >= 1050) {
        $('#header').mousemove(function (e) {
            parallaxIt(e, ".h-circle-1", -30, '#header');
            parallaxIt(e, ".h-circle-2", 10, '#header');
            parallaxIt(e, ".h-circle-3", 20, '#header');
            parallaxIt(e, ".h-square-1", -40, '#header');
            parallaxIt(e, ".h-trapezoid-1", -5, '#header');
            parallaxIt(e, ".repeat-grid-circles", 20, '#header');
        });
        $('#about').mousemove(function (e) {
            parallaxIt(e, ".repeat-circles", 30, '#about');
        });
        $('#services').mousemove(function (e) {
            parallaxIt(e, ".pentagon-1", 30, '#services');
            parallaxIt(e, ".pentagon-2", -30, '#services');
        });
        $('#feedback').mousemove(function (e) {
            parallaxIt(e, ".feedback-circle-1", 10, '#feedback');
            parallaxIt(e, ".feedback-circle-2", -5, '#feedback');
            parallaxIt(e, ".feedback-circle-3", 20, '#feedback');
            parallaxIt(e, ".feedback-circle-4", -20, '#feedback');
            parallaxIt(e, ".feedback-circle-5", 5, '#feedback');
            parallaxIt(e, ".feedback-circle-6", -10, '#feedback');
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






