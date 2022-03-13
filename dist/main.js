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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmOztBQUVBLGtGQUFrRixzQkFBc0IsR0FBRyxzQkFBc0IsK0NBQStDLGNBQWM7QUFDOUw7O0FBRUEsOEZBQThGLG9CQUFvQixPQUFPLG9CQUFvQiw0Q0FBNEMsY0FBYztBQUN2TTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNZOztBQUVwRDtBQUNBO0FBQ0EscUJBQXFCLDBEQUFTO0FBQzlCLFVBQVUsZ0VBQWU7QUFDekI7QUFDQTs7QUFFQTtBQUNBLHNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wb3B1bGF0ZS13ZWJwYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGV2ZW50KSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7ZXZlbnQudGFyZ2V0WzBdLnZhbHVlfSwke2V2ZW50LnRhcmdldFsxXS52YWx1ZX0sVVMmYXBwaWQ9ZGJhMWNmYTkyZmQ4NTMyZWJlMWQzNjY0YzM5NWQyNWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBsZXQgY2l0eUxvY2F0aW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoIChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y2l0eUxvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Y2l0eUxvY2F0aW9uWzBdLmxvbn0mYXBwaWQ9ZGJhMWNmYTkyZmQ4NTMyZWJlMWQzNjY0YzM5NWQyNWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBsZXQgY2l0eVdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGNpdHlXZWF0aGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV2VicGFnZShjaXR5KSB7XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVDaXR5TmFtZShuYW1lKSB7XG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcbiAgICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVRlbXBzKHRlbXBzKSB7XG4gICAgICAgIGZ1bmN0aW9uIHBvcHVsYXRlQ3VycmVudFRlbXAoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XG4gICAgICAgICAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IHRlbXBzLnRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVIaWdoVGVtcCgpIHtcbiAgICAgICAgICAgIGxldCBoaWdoVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXRlbXAnKTtcbiAgICAgICAgICAgIGhpZ2hUZW1wLnRleHRDb250ZW50ID0gdGVtcHMudGVtcF9tYXg7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVMb3dUZW1wKCkge1xuICAgICAgICAgICAgbGV0IGxvd1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93LXRlbXAnKTtcbiAgICAgICAgICAgIGxvd1RlbXAudGV4dENvbnRlbnQgPSB0ZW1wcy50ZW1wX21pbjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBwb3B1bGF0ZUN1cnJlbnRUZW1wKCk7XG4gICAgICAgIGF3YWl0IHBvcHVsYXRlSGlnaFRlbXAoKTtcbiAgICAgICAgYXdhaXQgcG9wdWxhdGVMb3dUZW1wKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVXZWF0aGVyRGVzY3JpcHRpb24oaW5mbykge1xuICAgICAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW5mbztcbiAgICB9XG4gICAgYXdhaXQgcG9wdWxhdGVDaXR5TmFtZShjaXR5Lm5hbWUpO1xuICAgIGF3YWl0IHBvcHVsYXRlVGVtcHMoY2l0eS5tYWluKTtcbiAgICBhd2FpdCBwb3B1bGF0ZVdlYXRoZXJEZXNjcmlwdGlvbihjaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgIHJldHVybjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi9mZXRjaC1kYXRhLmpzJztcbmltcG9ydCBwb3B1bGF0ZVdlYnBhZ2UgZnJvbSAnLi9wb3B1bGF0ZS13ZWJwYWdlLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoZXZlbnQpO1xuICAgIGF3YWl0IHBvcHVsYXRlV2VicGFnZShkYXRhKTtcbiAgICByZXR1cm47XG59XG5cbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBtYWluKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=