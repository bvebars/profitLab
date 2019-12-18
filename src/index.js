import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import "./core/xhr.js"

document.querySelector('.btn').onclick = (event) => {
    event.preventDefault();

    const password = document.getElementById('password');
    const passwordAgain = document.getElementById('password-again');
    const email = document.getElementById('email');
    const passInvalidFeedback = document.getElementById('enter-password');


    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'handling.php?password=' + password.value + '&email=' + email.value, true);

    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            // console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            // console.log('Response');
            let res =  JSON.parse(xhr.responseText); // responseText -- текст ответа.
            console.log(res);

            if (res.email === "none") {
                email.classList.add('is-invalid');
            } else if (res.email === "none") {

            }

            if(res.password === 'none') {
                password.classList.add('is-invalid');
            } else if (res.password === 'shortPassword') {
                console.log('Маленький');
                email.classList.add('is-invalid');
                passInvalidFeedback.textContent = 'Используйте не менее 5 символов';
            } else {

            }

        }
    };

    let form = document.querySelector('form');
    // console.log(form.elements.city.value);
    // console.log(form.elements.email);
    // console.log(form.elements.password);
    // console.log(document.getElementById("password").value);
};