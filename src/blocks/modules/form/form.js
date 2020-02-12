"use strict";
import {TweenMax, gsap, TimelineMax, TweenLite, Expo} from "gsap/all"
gsap.registerPlugin(TweenMax);
gsap.registerPlugin(TimelineMax);
gsap.registerPlugin(TweenLite);


let formInput = $('#form input')
let counter = $('.counter')
let email = $('#email')


// form class active/invalid functionality
for(let i=0;i<formInput.length;i++){
    formInput[i].oninput = () => {
        counter[i].innerHTML = counter[i].dataset.counter - formInput[i].value.length
        addActiveClass(formInput[i],'active')
    };
    formInput[i].onblur = () => {
        addInvalidClass(formInput[i],'invalid')
    };

}
function addActiveClass(item, className) {
    if ($(item).val().length){
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}
function addInvalidClass(item, className) {
    if (!$(item).val().length){
        $(item).addClass(className)
    }else{
        $(item).removeClass(className)
    }
}

// Result message animation
let showMessage = new TimelineMax();
showMessage.add(TweenMax.to(".message", 0.7, {opacity: 1,ease: Expo.easeOut}));
showMessage.add(TweenMax.to(".message", 0.7, {opacity: 0,ease: Expo.easeOut,delay: 2}));
showMessage.pause();

// Dice animation of the loader
let loadingAnimation = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadingAnimation.pause();

// Sending data to the server
$(function() {
    $('#form').on('submit', function(e) {
        $('.message').removeClass('error success');
        $('input').removeClass('email-error');
        loadingAnimation.play();
        e.preventDefault();
        $.ajax({
            url: 'phpmailer/send.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(message) {
                if (message === 'ok') {
                    $('#form').trigger('reset')
                    $('input').removeClass('active');
                    for(let i=0;i<formInput.length;i++){
                        counter[i].innerHTML = counter[i].dataset.counter - formInput[i].value.length
                    }
                    $('.message').text('Message sent successfully, we will answer you soon').addClass('success');
                    showMessage.restart();loadingAnimation.duration(0.3).reverse();
                } else {
                    if (message === 'mailerror') {
                        $("#email").addClass('email-error');
                    }
                    $('.message').text('Error, check the entered data').addClass('error');
                    showMessage.restart();loadingAnimation.duration(0.3).reverse();
                }
            }
        });
    });
});





