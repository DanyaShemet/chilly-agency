import "%modules%/landing-03/header/header";
import "%modules%/landing-03/about/about";
import "%modules%/landing-03/portfolio/portfolio";
import "%modules%/landing-03/feedback/feedback";
import "%modules%/landing-03/form/form";


import $ from "jquery";
import {TweenMax, gsap} from "gsap/all"
import {aboutInit} from "%modules%/landing-03/about/about";
import {scrollto} from "%modules%/landing-03/header/header";

gsap.registerPlugin(TweenMax);


$(document).ready(function () {
    aboutInit()
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