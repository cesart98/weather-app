export function populateWebpage(data) {
    function populateCityName() {
        let cityName = document.querySelector('.city-name');
        cityName.textContent = city.name;
    }
    function populateTemps() {
        function populateCurrentTemp() {
            let currentTemp = document.querySelector('.current-temp');
            currentTemp.textContent = city.main.feels_like;
        }
        function populateHighTemp() {
            let highTemp = document.querySelector('.high-temp');
            highTemp.textContent = city.main.temp_max;
        }
        function populateLowTemp() {
            let lowTemp = document.querySelector('.low-temp');
            lowTemp.textContent = city.main.temp_min;
        }
        populateCurrentTemp();
        populateHighTemp();
        populateLowTemp();
    }
    function populateWeatherDescription() {
        let weatherDescription = document.querySelector('.weather-description');
        weatherDescription.textContent = city.weather[0].description;
    }

    let city = Object.create(data);

    populateCityName();
    populateTemps();
    populateWeatherDescription();
    console.log(city);
}