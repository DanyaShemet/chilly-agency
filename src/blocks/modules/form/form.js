"use strict";
import {TweenMax, gsap, TimelineMax, TweenLite, Expo} from "gsap/all"

gsap.registerPlugin(TweenMax);
gsap.registerPlugin(TimelineMax);
gsap.registerPlugin(TweenLite);

const formInput = $('#form input');
const counter = $('.counter');

// form class active/invalid functionality
for (let i = 0; i < formInput.length; i++) {
    if ($(formInput[i]).val().length) {
        inputHandler(formInput[i], counter[i])
    }
    formInput[i].oninput = () => {
        inputHandler(formInput[i], counter[i])
        $(formInput[i]).val($(formInput[i]).val().trim());
    };
    formInput[i].onblur = () => {
        addNeededClass(formInput[i], 'invalid')
    };
}

function inputHandler(inputItem, counterItem) {
    addNeededClass($(inputItem), 'active');
    $(counterItem).html(counterItem.dataset.counter - $(inputItem).val().length);
}

function addNeededClass(item, className) {
    if (className === 'invalid' && !$(item).val().length) {
        $(item).addClass(className)
    } else if (className === 'active' && $(item).val().length) {
        $(item).addClass(className)
    } else {
        $(item).removeClass(className)
    }
}

// Result message animation
let showMessage = new TimelineMax();
showMessage.add(TweenMax.to(".message", 0.7, {opacity: 1, ease: Expo.easeOut}));
showMessage.add(TweenMax.to(".message", 0.7, {opacity: 0, ease: Expo.easeOut, delay: 2}));
showMessage.pause();

// Dice animation of the loader
let loadingAnimation = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadingAnimation.pause();

// Sending data to the server
$(function () {
    $('#form').on('submit', function (e) {
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
            success: function (msg) {
                if (msg === 'ok') {
                    $('#form').trigger('reset')
                    $('input').removeClass('active');
                    for (let i = 0; i < formInput.length; i++) {
                        $(counter[i]).html(counter[i].dataset.counter - $(formInput[i]).val().length);
                    }
                    $('.message').text('Message sent successfully, we will answer you soon').addClass('success');
                    showMessage.restart();
                    loadingAnimation.duration(0.3).reverse();
                } else {
                    if (msg === 'mailerror') {
                        $("#email").addClass('email-error');
                    }
                    $('.message').text('Error, check the entered data or try again later').addClass('error');
                    showMessage.restart();
                    loadingAnimation.duration(0.3).reverse();
                }
            }
        });
    });
});