import {fetchData} from './fetch-data.js'
import {populateWebpage} from './populate-webpage.js'

function main(event) {
    fetchData(event)
        .then(data => populateWebpage(data));
}

let form = document.querySelector('form');
form.addEventListener('submit', main)
