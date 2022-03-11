import {fetchData} from './fetch-data.js'
import {populateWebpage} from './populate-webpage.js'

let form = document.querySelector('form');
form.addEventListener('submit', event => fetchData(event)
    .then(data => populateWebpage(data))
    )