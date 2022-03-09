import {fetchData} from './fetch-data.js'

let city = new Object;
let form = document.querySelector('form');
form.addEventListener('submit', event => fetchData(event));