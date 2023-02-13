"use strict"

const formEror = document.querySelector('.form-error');
const inputError = document.querySelector('.input-error');
const formSent = document.querySelector('.form-sent');
const clientName = document.querySelector('.client-name');

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        item.addEventListener('submit', formSend);

    })

    async function formSend(e) {
        e.preventDefault();

        document.querySelector('.btn-flip').classList.add("_send-ok");

        const form = e.target;

        let error = formValidate(form);

        let formData = new FormData(form);


        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('../../files/form.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // let result = await response.json();
                clientName.textContent = form.querySelector('input[name]').value;

                form.reset();
                form.classList.remove('_sending');

                if (form.closest('.popup__form')) {
                    closePopupForm();
                }

                formSent.classList.add('_visible');
            }

            else {
                formEror.classList.add('_visible')
                form.classList.add('_error');
                form.classList.remove('_sending');

                setTimeout(() => {
                    formEror.classList.remove('_visible')
                    form.classList.remove('_error');
                }, 2000);
            }
        }
        else {
            inputError.classList.add('_visible')

            setTimeout(() => {
                inputError.classList.remove('_visible')
            }, 2000);
        }

    }


    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('_phone')) {
                if (input.value.length < 17) {
                    formAddError(input);
                    error++;
                }
            }

            else {
                if (input.value === '') {
                    formAddError(input);
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

    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function closePopupForm() {
        document.querySelector('.popup__form').classList.remove('_open');
    }
});