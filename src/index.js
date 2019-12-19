import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"


//


let status = document.getElementById('status');
let statusText = document.getElementById('status-text');

status.onclick = () => {
    statusText.removeAttribute('disabled');
    statusText.removeAttribute('readonly');
    statusText.focus()
    statusText.selectionStart = statusText.value.length;

};

console.log(status);


// Работа с JSON

const xhrJSON = new XMLHttpRequest();

xhrJSON.open('GET', 'cities.json', true);
xhrJSON.send();

let cities = [];

xhrJSON.onreadystatechange = function () {
    const population = 50000;
    let citiesJSON = [];

    let cityMaxNumbers = 0;
    let cityMax;
    let cityIndex = 0;

    if (xhrJSON.readyState !== 4) return;
    if (xhrJSON.status !== 200) {

    } else {
        citiesJSON = JSON.parse(xhrJSON.responseText);
    }

    for (let key of citiesJSON) {
        if (key.population > population) cities.push(key);
        if (+key.population > cityMaxNumbers) cityMaxNumbers = +key.population;
    }

    for (let key of cities) {
        cityIndex++;
        if (key.population === String(cityMaxNumbers)) {
            console.log(cityIndex);
            cityMax = key;
            delete cities[cityIndex - 1]
        }
    }

    cities.sort();
    cities.unshift(cityMax);

    for (let key in cities) {
        if (typeof (cities[key].city == 'string')) {
            $('#city').append('<option value="' + key.city + '">' + cities[key].city + '</option>');
        }
    }
};

// Работа с сервером

document.querySelector('.btn').onclick = (event) => {
    event.preventDefault();

    const password = document.getElementById('password');
    const passwordAgain = document.getElementById('password-again');
    const email = document.getElementById('email');
    const passInvalidFeedback = document.getElementById('enter-password');
    const passAgainInvalidFeedback = document.getElementById('enter-again-password');

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
            } else if (res.email === "success") {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }
        }
    };

    let form = document.querySelector('form');
    // console.log(form.elements.city.value);
    // console.log(form.elements.email);
    // console.log(form.elements.password);
    // console.log(document.getElementById("password").value);
};