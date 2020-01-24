"use strict"

let categories = $('.filter-item');
let elem = $(".portfolio__item");
categories.click(applyFilter);

function applyFilter(){
    let value = $(this).attr("data-filter");
    categories.removeClass('active');
    $(this).addClass('active')
    if (value === "all") {
        elem.show("slow");
        setTimeout(function () {
            elem.addClass('absolute')
        }, 500)
    } else {
        elem.not("." + value).hide("slow");
        elem.filter("." + value).show("slow");
        elem.removeClass('absolute')
    }
}


