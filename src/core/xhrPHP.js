document.querySelector('.btn').onclick = (event) => {
    event.preventDefault();
    const password = document.getElementById('password');
    const passwordAgain = document.getElementById('password-again');
    const email = document.getElementById('email');
    const passInvalidFeedback = document.getElementById('enter-password');
    const passAgainInvalidFeedback = document.getElementById('enter-again-password');
    const emailInvalidFeedback = document.getElementById('enter-email');
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'handling.php?password=' + password.value + '&passwordAgain=' + passwordAgain.value + '&email=' + email.value, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            let check = JSON.parse(xhr.responseText); // responseText -- текст ответа.
            if (check.password === 'none') {
                password.classList.add('is-invalid');
            } else if (check.password === 'shortPassword') {
                password.classList.add('is-invalid');
                passInvalidFeedback.textContent = 'Используйте не менее 5 символов';
            } else {
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
            }

            if (check.passwordAgain === 'none') {
                passwordAgain.classList.add('is-invalid');
            } else if (check.passwordAgain === 'unequal') {
                passwordAgain.classList.add('is-invalid');
                passAgainInvalidFeedback.textContent = 'пароли не совпадают';
            } else {
                passwordAgain.classList.remove('is-invalid');
                passwordAgain.classList.add('is-valid');
            }

            if (check.email === "none") {
                email.classList.add('is-invalid');
            } else if (check.email === "success") {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');

            } else if(check.email === 'incorrect') {
                console.log('Неверный E-mail');
                email.classList.add('is-invalid');
                emailInvalidFeedback.textContent = 'Неверный E-mail'
            }
        }
    };
};