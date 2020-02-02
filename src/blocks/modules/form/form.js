"use strict";

let formInput = document.querySelectorAll('#form input')
let email = document.querySelector('#email')
let counter = document.querySelectorAll('.counter')

function active(item, className) {
    if (item.value.length){
        item.classList.add(className)
    }else{
        item.classList.remove(className)
    }
}
function invalid(item, className) {
    if (!item.value.length){
        item.classList.add(className)
    }else{
        item.classList.remove(className)
    }
}

for(let i=0;i<formInput.length;i++){
    formInput[i].oninput = () => {
        counter[i].innerHTML = counter[i].innerHTML-1
        active(formInput[i],'active')
    };
    formInput[i].onblur = () => {
        invalid(formInput[i],'invalid')
    }
}

email.onblur = () => {
    if (!email.value.includes('@')){
        email.classList.add('invalid')
    }else{
        email.classList.remove('invalid')
    }
};











