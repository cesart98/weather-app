async function getLocation(cityName, stateCode, countryCode) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${appid}`;

    let response = await fetch (url, { mode: 'cors' });
    let cityData = await response.json()
    return cityData[0];
}

async function getWeather(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;

    let response = await fetch (url, { mode: 'cors' });
    let weatherData = await response.json()
    return weatherData;
}

let appid = 'dba1cfa92fd8532ebe1d3664c395d25f';
let city = new Object;
getLocation('Dallas', 'TX', 'US')
    .then(cityData => Object.assign(city, cityData))
    .then(city => getWeather(city.lat, city.lon))
    .then(weatherData => Object.assign(city, weatherData))