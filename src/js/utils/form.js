"use strict"

import './inputmask.js';

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelector('form');

    forms.addEventListener('submit', formSend);


    async function formSend(e) {
        e.preventDefault();

        const form = e.target;
        const error = formValidate(form);
        const formData = new FormData(form);


        if (error === 0) {
            form.classList.add('_sending');
            const response = await fetch('../../files/form.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                form.reset();
                form.classList.remove('_sending');

                form.classList.add('_sent');
                setTimeout(() => {
                    form.classList.remove('_sent');
                }, 2000);
            }

            else {
                form.classList.remove('_sending');
                
                form.classList.add('_fail');
                setTimeout(() => {
                    form.classList.remove('_fail');
                }, 2000);
            }
        }
        else {
            form.classList.add('_error');
            setTimeout(() => {
                form.classList.remove('_error');
            }, 2000);
        }
    }


    function formValidate(form) {
        let error = 0;
        const formReq = form.querySelectorAll('input._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            const formItem = input.closest('.form__item');
            formRemoveError(formItem);


            input.addEventListener('input', function () {
                if (formItem.classList.contains('_error')) {
                    formRemoveError(formItem);
                }
            })

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(formItem);
                    error++;
                }
            }
            else if (input.classList.contains('_phone')) {
                if (input.value.length < 17) {
                    formAddError(formItem);
                    error++;
                }
            }

            else {
                if (input.value === '') {
                    formAddError(formItem);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});