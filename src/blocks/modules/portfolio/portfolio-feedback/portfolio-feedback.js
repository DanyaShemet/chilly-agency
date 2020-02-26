"use strict";

import 'owl.carousel/dist/owl.carousel.min'

// slider functionality
$('.feedback__slider').owlCarousel({
    loop: true,
    responsive: {
        300: {
            items: 1
        }
    },
    smartSpeed: 600
});