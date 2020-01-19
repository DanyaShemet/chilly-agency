import $ from "jquery";

function countUp(className) {
    let countBlockTop = $("." + className).offset().top;
    let windowHeight = window.innerHeight;
    let show = true;
    $(window).scroll(function () {
        if (show && (countBlockTop + 150 < $(window).scrollTop() + windowHeight)) {
            show = false;
            $('.' + className).spincrement({
                from: 0,
                duration: 3000,
            });
        }
    })
}
countUp("js-count");

// $(function () {
//
// });

