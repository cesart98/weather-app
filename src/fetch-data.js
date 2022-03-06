async function getLocation(cityName, stateCode, countryCode) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${appid}`;

    let response = await fetch (url, { mode: 'cors' });
    return response.json();
}

async function getWeather(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;

    let response = await fetch (url, { mode: 'cors' });
    return response.json();
}

let appid = 'dba1cfa92fd8532ebe1d3664c395d25f';
let city = new Object;
getLocation('Dallas', 'TX', 'US')
    .then(props => Object.assign(city, props[0]))
    .then(city => getWeather(city.lat, city.lon))
    .then(data => Object.assign(city, data))