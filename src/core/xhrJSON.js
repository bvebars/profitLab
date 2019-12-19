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
