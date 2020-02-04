let email = $('#email')[0]

email.onblur = () => {
    if (!email.value.includes('@')){
        email.classList.add('invalid')
    }else{
        email.classList.remove('invalid')
    }
};