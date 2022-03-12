/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData(event) {

    event.preventDefault();

    async function getLocation(cityName, stateCode) {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},US&appid=dba1cfa92fd8532ebe1d3664c395d25f`;
    
        let response = await fetch (url, { mode: 'cors' });
        let cityLocation = await response.json();
        return cityLocation[0];
    } 
    async function getWeather(lat, lon) {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dba1cfa92fd8532ebe1d3664c395d25f`;
    
        let response = await fetch (url, { mode: 'cors' });
        let cityWeather = await response.json();
        return cityWeather;
    }

    let cityName = event.target[0].value;
    let stateCode =  event.target[1].value;
    let city = new Object();

    getLocation(cityName, stateCode)
        .then(city => getWeather(city.lat, city.lon))
        .then(cityWeather => Object.assign(city, cityWeather));

    return city;
}

/***/ }),

/***/ "./src/populate-webpage.js":
/*!*********************************!*\
  !*** ./src/populate-webpage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateWebpage": () => (/* binding */ populateWebpage)
/* harmony export */ });
async function populateWebpage(data) {
    async function populateCityName() {
        async function getCityName() {
            return data.name;
        }
        let cityName = await document.querySelector('.city-name');
        return getCityName().then(name => cityName.textContent = name);
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
    return populateCityName();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data.js */ "./src/fetch-data.js");
/* harmony import */ var _populate_webpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate-webpage.js */ "./src/populate-webpage.js");



function main(event) {
    (0,_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(event).then(data => (0,_populate_webpage_js__WEBPACK_IMPORTED_MODULE_1__.populateWebpage)(data));
}

let form = document.querySelector('form');
form.addEventListener('submit', main)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQOztBQUVBO0FBQ0Esb0VBQW9FLFNBQVMsR0FBRyxVQUFVO0FBQzFGO0FBQ0EsMkNBQTJDLGNBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsSUFBSSxPQUFPLElBQUk7QUFDeEY7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNZOztBQUVyRDtBQUNBLElBQUkseURBQVMscUJBQXFCLHFFQUFlO0FBQ2pEOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BvcHVsYXRlLXdlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGV2ZW50KSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oY2l0eU5hbWUsIHN0YXRlQ29kZSkge1xuICAgICAgICBsZXQgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0sJHtzdGF0ZUNvZGV9LFVTJmFwcGlkPWRiYTFjZmE5MmZkODUzMmViZTFkMzY2NGMzOTVkMjVmYDtcbiAgICBcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGxldCBjaXR5TG9jYXRpb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBjaXR5TG9jYXRpb25bMF07XG4gICAgfSBcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWRiYTFjZmE5MmZkODUzMmViZTFkMzY2NGMzOTVkMjVmYDtcbiAgICBcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGxldCBjaXR5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGNpdHlXZWF0aGVyO1xuICAgIH1cblxuICAgIGxldCBjaXR5TmFtZSA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBsZXQgc3RhdGVDb2RlID0gIGV2ZW50LnRhcmdldFsxXS52YWx1ZTtcbiAgICBsZXQgY2l0eSA9IG5ldyBPYmplY3QoKTtcblxuICAgIGdldExvY2F0aW9uKGNpdHlOYW1lLCBzdGF0ZUNvZGUpXG4gICAgICAgIC50aGVuKGNpdHkgPT4gZ2V0V2VhdGhlcihjaXR5LmxhdCwgY2l0eS5sb24pKVxuICAgICAgICAudGhlbihjaXR5V2VhdGhlciA9PiBPYmplY3QuYXNzaWduKGNpdHksIGNpdHlXZWF0aGVyKSk7XG5cbiAgICByZXR1cm4gY2l0eTtcbn0iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXZWJwYWdlKGRhdGEpIHtcbiAgICBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUNpdHlOYW1lKCkge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDaXR5TmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNpdHlOYW1lID0gYXdhaXQgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xuICAgICAgICByZXR1cm4gZ2V0Q2l0eU5hbWUoKS50aGVuKG5hbWUgPT4gY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lKTtcbiAgICB9XG4gICAgLyphc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVRlbXBzKHRlbXApIHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVDdXJyZW50VGVtcCgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGVtcCA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IHRlbXAuZmVlbHNfbGlrZTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUhpZ2hUZW1wKCkge1xuICAgICAgICAgICAgbGV0IGhpZ2hUZW1wID0gYXdhaXQgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtdGVtcCcpO1xuICAgICAgICAgICAgcmV0dXJuIGhpZ2hUZW1wLnRleHRDb250ZW50ID0gdGVtcC50ZW1wX21heDtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZUxvd1RlbXAoKSB7XG4gICAgICAgICAgICBsZXQgbG93VGVtcCA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctdGVtcCcpO1xuICAgICAgICAgICAgcmV0dXJuIGxvd1RlbXAudGV4dENvbnRlbnQgPSB0ZW1wLnRlbXBfbWluO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV2VhdGhlckRlc2NyaXB0aW9uKCkge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBhd2FpdCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgICAgICBnZXRXZWF0aGVyRGVzY3JpcHRpb24oKVxuICAgICAgICAgICAgLnRoZW4oaW5mbyA9PiB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvKTtcbiAgICB9XG4gICAgKi9cbiAgICByZXR1cm4gcG9wdWxhdGVDaXR5TmFtZSgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtmZXRjaERhdGF9IGZyb20gJy4vZmV0Y2gtZGF0YS5qcydcbmltcG9ydCB7cG9wdWxhdGVXZWJwYWdlfSBmcm9tICcuL3BvcHVsYXRlLXdlYnBhZ2UuanMnXG5cbmZ1bmN0aW9uIG1haW4oZXZlbnQpIHtcbiAgICBmZXRjaERhdGEoZXZlbnQpLnRoZW4oZGF0YSA9PiBwb3B1bGF0ZVdlYnBhZ2UoZGF0YSkpO1xufVxuXG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbWFpbilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==