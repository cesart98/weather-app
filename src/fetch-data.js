async function loadJson() {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;

    let response = await fetch (url, { mode: 'cors' });
    return response.json();
}

let lat = 32.7767;
let lon = -96.7970;
let appid = 'dba1cfa92fd8532ebe1d3664c395d25f';
const city = new Object;

loadJson()
    .then(json => Object.assign(city, json))
