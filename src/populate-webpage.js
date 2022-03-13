export default async function populateWebpage(city) {
    function populateCityName(name) {
        let cityName = document.querySelector('.city-name');
        cityName.textContent = name;
    }
    async function populateTemps(temps) {
        function populateCurrentTemp() {
            let currentTemp = document.querySelector('.current-temp');
            currentTemp.textContent = temps.temp;
        }
        function populateHighTemp() {
            let highTemp = document.querySelector('.high-temp');
            highTemp.textContent = temps.temp_max;
        }
        function populateLowTemp() {
            let lowTemp = document.querySelector('.low-temp');
            lowTemp.textContent = temps.temp_min;
        }
        await populateCurrentTemp();
        await populateHighTemp();
        await populateLowTemp();
        return;
    }
    function populateWeatherDescription(info) {
        let weatherDescription = document.querySelector('.weather-description');
        weatherDescription.textContent = info;
    }
    await populateCityName(city.name);
    await populateTemps(city.main);
    await populateWeatherDescription(city.weather[0].description);
    
    return;
}