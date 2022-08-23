document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-whatsapp');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');
    
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Ссылка на презентацию в WhatsApp');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open');
            } else {
                console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-whatsapp');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-header');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Zoom-встреча');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open');
            } else {
                console.log("Ошибка");
            }
        } else{
            console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-header');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-offers');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Звонок');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open');
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-offers');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            // if (input.classList.contains('_phone')){
            //     if (phoneTest(input)){
            //         formAddError(input);
            //         error++;
            //     }
            // }

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-telegram');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Презентацию в telegram');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open');
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-telegram');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-question');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Ответ на вопрос');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open'); 
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-question');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-youtube');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Ссылку на видео');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open'); 
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-youtube');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-zoom');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Zoom-встречу');
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-zoom');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-promo');
    form.addEventListener('submit', formSend);
    const currentPopup = document.getElementById('popup-done');
    
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('place', 'Звонок на телефон');
        //console.log(form);
        if (error === 0){
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                currentPopup.classList.add('open'); 
            } else {
                //console.log("Ошибка");
            }
        } else{
            //console.log('Заполни!');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-promo');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                //console.log(input);
                formAddError(input);
                error++;
            }   
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});


