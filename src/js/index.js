import "./import/modules";
import $ from "jquery";
import {About} from './../blocks/modules/about/about.js'
import {TweenMax, gsap } from "gsap/all"

gsap.registerPlugin(TweenMax);

$(document).ready(function () {
    About.init()
});


$('#header-wrapper').mousemove(function (e) {
    if (document.documentElement.clientWidth >= 778) {
        parallaxIt(e, ".circle-1", -30);
        parallaxIt(e, ".circle-2", 10);
        parallaxIt(e, ".circle-3", 20);
        parallaxIt(e, ".square-1", -40);
        parallaxIt(e, ".trapezoid-1", -5);
        parallaxIt(e, ".repeat-grid-circles", 20);
    }
});
$('#about').mousemove(function (e) {
        parallaxIt(e, ".repeat-circles", 30);
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

