import fetchData from './fetch-data.js';
import populateWebpage from './populate-webpage.js';

async function main(event) {
    event.preventDefault();
    let data = await fetchData(event);
    return populateWebpage(data);
}

let form = document.querySelector('form');
form.addEventListener('submit', main);