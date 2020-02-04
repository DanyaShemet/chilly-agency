"use strict";

let formInput = $('#form input')
let email = $('#email')[0]
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
email.onblur = () => {
    if (!email.value.includes('@')){
        email.classList.add('invalid')
    }else{
        email.classList.remove('invalid')
    }
};

function addActiveClass(item, className) {
    if (item.value.length){
        console.log('1')
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}
function addInvalidClass(item, className) {
    if (!item.value.length){
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}








