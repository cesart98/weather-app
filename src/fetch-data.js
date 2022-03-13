export default async function fetchData(event) {

    event.preventDefault();

    let response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${event.target[0].value},${event.target[1].value},US&appid=dba1cfa92fd8532ebe1d3664c395d25f`, { mode: 'cors' });
    let cityLocation = await response.json();

    let weatherResponse = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].lat}&lon=${cityLocation[0].lon}&appid=dba1cfa92fd8532ebe1d3664c395d25f`, { mode: 'cors' });
    let cityWeather = await weatherResponse.json();

    return cityWeather;
}