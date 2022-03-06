function newFunction(latitude, longitude) {
    let lat = latitude;
    let lon = longitude;
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dba1cfa92fd8532ebe1d3664c395d25f`
    fetch(requestURL, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
        });
}

newFunction(28, -100);