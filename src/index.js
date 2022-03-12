import {fetchData} from './fetch-data.js'
import {populateWebpage} from './populate-webpage.js'

function main(event) {
    const city = fetchData(event);
    populateWebpage(city);
}

let form = document.querySelector('form');
form.addEventListener('submit', main)
