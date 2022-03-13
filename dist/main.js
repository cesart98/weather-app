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
/* harmony export */   "default": () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData(event) {

    event.preventDefault();

    let response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${event.target[0].value},${event.target[1].value},US&appid=dba1cfa92fd8532ebe1d3664c395d25f`, { mode: 'cors' });
    let cityLocation = await response.json();

    let weatherResponse = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].lat}&lon=${cityLocation[0].lon}&appid=dba1cfa92fd8532ebe1d3664c395d25f`, { mode: 'cors' });
    let cityWeather = await weatherResponse.json();

    return cityWeather;
}

/***/ }),

/***/ "./src/populate-webpage.js":
/*!*********************************!*\
  !*** ./src/populate-webpage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateWebpage)
/* harmony export */ });
async function populateWebpage(city) {
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



async function main(event) {
    event.preventDefault();

    let data = await (0,_fetch_data_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
    await (0,_populate_webpage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    
    return;
}

let form = document.querySelector('form');
form.addEventListener('submit', main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmOztBQUVBLGtGQUFrRixzQkFBc0IsR0FBRyxzQkFBc0IsK0NBQStDLGNBQWM7QUFDOUw7O0FBRUEsOEZBQThGLG9CQUFvQixPQUFPLG9CQUFvQiw0Q0FBNEMsY0FBYztBQUN2TTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1k7O0FBRXBEO0FBQ0E7O0FBRUEscUJBQXFCLDBEQUFTO0FBQzlCLFVBQVUsZ0VBQWU7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BvcHVsYXRlLXdlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtldmVudC50YXJnZXRbMF0udmFsdWV9LCR7ZXZlbnQudGFyZ2V0WzFdLnZhbHVlfSxVUyZhcHBpZD1kYmExY2ZhOTJmZDg1MzJlYmUxZDM2NjRjMzk1ZDI1ZmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGxldCBjaXR5TG9jYXRpb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjaXR5TG9jYXRpb25bMF0ubGF0fSZsb249JHtjaXR5TG9jYXRpb25bMF0ubG9ufSZhcHBpZD1kYmExY2ZhOTJmZDg1MzJlYmUxZDM2NjRjMzk1ZDI1ZmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGxldCBjaXR5V2VhdGhlciA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gY2l0eVdlYXRoZXI7XG59IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXZWJwYWdlKGNpdHkpIHtcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUNpdHlOYW1lKG5hbWUpIHtcbiAgICAgICAgbGV0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xuICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlVGVtcHModGVtcHMpIHtcbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVDdXJyZW50VGVtcCgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXAnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gdGVtcHMudGVtcDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUhpZ2hUZW1wKCkge1xuICAgICAgICAgICAgbGV0IGhpZ2hUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtdGVtcCcpO1xuICAgICAgICAgICAgaGlnaFRlbXAudGV4dENvbnRlbnQgPSB0ZW1wcy50ZW1wX21heDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUxvd1RlbXAoKSB7XG4gICAgICAgICAgICBsZXQgbG93VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctdGVtcCcpO1xuICAgICAgICAgICAgbG93VGVtcC50ZXh0Q29udGVudCA9IHRlbXBzLnRlbXBfbWluO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHBvcHVsYXRlQ3VycmVudFRlbXAoKTtcbiAgICAgICAgYXdhaXQgcG9wdWxhdGVIaWdoVGVtcCgpO1xuICAgICAgICBhd2FpdCBwb3B1bGF0ZUxvd1RlbXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVdlYXRoZXJEZXNjcmlwdGlvbihpbmZvKSB7XG4gICAgICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvO1xuICAgIH1cbiAgICBhd2FpdCBwb3B1bGF0ZUNpdHlOYW1lKGNpdHkubmFtZSk7XG4gICAgYXdhaXQgcG9wdWxhdGVUZW1wcyhjaXR5Lm1haW4pO1xuICAgIGF3YWl0IHBvcHVsYXRlV2VhdGhlckRlc2NyaXB0aW9uKGNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gICAgXG4gICAgcmV0dXJuO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2ZldGNoLWRhdGEuanMnO1xuaW1wb3J0IHBvcHVsYXRlV2VicGFnZSBmcm9tICcuL3BvcHVsYXRlLXdlYnBhZ2UuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWluKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGV2ZW50KTtcbiAgICBhd2FpdCBwb3B1bGF0ZVdlYnBhZ2UoZGF0YSk7XG4gICAgXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbWFpbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9