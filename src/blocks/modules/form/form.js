"use strict";

let formInput = $('#form input')
let counter = $('.counter')

// form class active/invalid functionality
for(let i=0;i<formInput.length;i++){
    formInput[i].oninput = () => {
        counter[i].innerHTML = counter[i].innerHTML-1
        addActiveClass(formInput[i],'active')
    };
    formInput[i].onblur = () => {
        addInvalidClass(formInput[i],'invalid')
    }
}

function addActiveClass(item, className) {
    if ($(item).val()){
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}
function addInvalidClass(item, className) {
    if (!$(item).val()){
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}








