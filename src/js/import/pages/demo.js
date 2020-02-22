import "%modules%/demo/header/header";
import $ from "jquery";
import {mobileDisplayInBrowser, scrollto} from "%modules%/demo/header/header";
import {TweenMax, gsap} from "gsap/all"


gsap.registerPlugin(TweenMax);


$(document).ready(function () {
    mobileDisplayInBrowser();
    initialParallax();
    scrollto();
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
        $('#benefits').mousemove(function (e) {
            parallaxIt(e, ".pentagon-1", 30, '#benefits');
            parallaxIt(e, ".pentagon-2", -30, '#benefits');
            parallaxIt(e, ".pentagon-3", -30, '#benefits');
        });
        $('#contact').mousemove(function (e) {
            parallaxIt(e, ".footer-circle-1", 10, '#contact');
            parallaxIt(e, ".footer-circle-2", -5, '#contact');
            parallaxIt(e, ".footer-circle-3", 20, '#contact');
            parallaxIt(e, ".footer-square", -20, '#contact');
            parallaxIt(e, ".footer-trapezoid", 5, '#contact');
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

