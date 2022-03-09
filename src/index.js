import {fetchData} from './fetch-data.js'
import {cleanData} from './clean-data.js'

let form = document.querySelector('form');
form.addEventListener('submit', event => {
    fetchData(event)
        .then(data => cleanData(data))
})