export function populateWebpage(data) {
    function populateCityName(name) {
        let cityName = document.querySelector('.city-name');
        cityName.textContent = name;
    }

    /*async function populateTemps(temp) {
        async function populateCurrentTemp() {
            let currentTemp = await document.querySelector('.current-temp');
            return currentTemp.textContent = temp.feels_like;
        }
        async function populateHighTemp() {
            let highTemp = await document.querySelector('.high-temp');
            return highTemp.textContent = temp.temp_max;
        }
        async function populateLowTemp() {
            let lowTemp = await document.querySelector('.low-temp');
            return lowTemp.textContent = temp.temp_min;
        }
    }
    async function populateWeatherDescription() {
        async function getWeatherDescription() {
            return city.weather[0].description;
        }
        let weatherDescription = await document.querySelector('.weather-description');
        getWeatherDescription()
            .then(info => weatherDescription.textContent = info);
    }
    */

    populateCityName(data.name);
}