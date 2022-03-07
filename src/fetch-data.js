function fetchData(event) {
    async function getLocation(cityName, stateCode, countryCode) {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${appid}`;
    
        let response = await fetch (url, { mode: 'cors' });
        let cityLocation = await response.json()
        return cityLocation[0];
    } 
    async function getWeather(lat, lon) {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;
    
        let response = await fetch (url, { mode: 'cors' });
        let cityWeather = await response.json()
        return cityWeather;
    }

    let cityName = event.target[0].value;
    let stateCode =  event.target[1].value;
    let appid = 'dba1cfa92fd8532ebe1d3664c395d25f';

    getLocation(cityName, stateCode, 'US')
        .then(cityLocation => Object.assign(city, cityLocation))
        .then(city => getWeather(city.lat, city.lon))
        .then(cityWeather => Object.assign(city, cityWeather));
    event.preventDefault();

    return city;
}

let city = new Object;

let form = document.querySelector('form');
form.addEventListener('submit', event => fetchData(event));
