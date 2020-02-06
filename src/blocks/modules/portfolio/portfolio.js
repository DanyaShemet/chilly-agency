"use strict";

let categories = $('.filter-item');
let elem = $(".portfolio__item");
categories.click(applyFilter);

// filter functionality
function applyFilter(){
    let value = $(this).attr("data-filter");
    categories.removeClass('active');
    $(this).addClass('active')
    if (value === "all") {
        elem.show("slow");
    } else {
        elem.not("." + value).hide("slow");
        elem.filter("." + value).show("slow");
    }
}


