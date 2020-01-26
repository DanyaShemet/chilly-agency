import "./import/modules";
import $ from "jquery";
import {About} from './../blocks/modules/about/about.js'
import {TweenMax, gsap } from "gsap/all"

gsap.registerPlugin(TweenMax);

$(document).ready(function () {
    About.init()
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
if (document.documentElement.clientWidth >= 1078) {
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

