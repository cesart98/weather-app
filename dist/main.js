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
    return (0,_populate_webpage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
}

let form = document.querySelector('form');
form.addEventListener('submit', main);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmOztBQUVBLGtGQUFrRixzQkFBc0IsR0FBRyxzQkFBc0IsK0NBQStDLGNBQWM7QUFDOUw7O0FBRUEsOEZBQThGLG9CQUFvQixPQUFPLG9CQUFvQiw0Q0FBNEMsY0FBYztBQUN2TTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNZOztBQUVwRDtBQUNBO0FBQ0EscUJBQXFCLDBEQUFTO0FBQzlCLFdBQVcsZ0VBQWU7QUFDMUI7O0FBRUE7QUFDQSxzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcG9wdWxhdGUtd2VicGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShldmVudCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2V2ZW50LnRhcmdldFswXS52YWx1ZX0sJHtldmVudC50YXJnZXRbMV0udmFsdWV9LFVTJmFwcGlkPWRiYTFjZmE5MmZkODUzMmViZTFkMzY2NGMzOTVkMjVmYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgbGV0IGNpdHlMb2NhdGlvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2NpdHlMb2NhdGlvblswXS5sYXR9Jmxvbj0ke2NpdHlMb2NhdGlvblswXS5sb259JmFwcGlkPWRiYTFjZmE5MmZkODUzMmViZTFkMzY2NGMzOTVkMjVmYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgbGV0IGNpdHlXZWF0aGVyID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBjaXR5V2VhdGhlcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdlYnBhZ2UoY2l0eSkge1xuICAgIGZ1bmN0aW9uIHBvcHVsYXRlQ2l0eU5hbWUobmFtZSkge1xuICAgICAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XG4gICAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVUZW1wcyh0ZW1wcykge1xuICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUN1cnJlbnRUZW1wKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGVtcCcpO1xuICAgICAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSB0ZW1wcy50ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvcHVsYXRlSGlnaFRlbXAoKSB7XG4gICAgICAgICAgICBsZXQgaGlnaFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC10ZW1wJyk7XG4gICAgICAgICAgICBoaWdoVGVtcC50ZXh0Q29udGVudCA9IHRlbXBzLnRlbXBfbWF4O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvcHVsYXRlTG93VGVtcCgpIHtcbiAgICAgICAgICAgIGxldCBsb3dUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy10ZW1wJyk7XG4gICAgICAgICAgICBsb3dUZW1wLnRleHRDb250ZW50ID0gdGVtcHMudGVtcF9taW47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgcG9wdWxhdGVDdXJyZW50VGVtcCgpO1xuICAgICAgICBhd2FpdCBwb3B1bGF0ZUhpZ2hUZW1wKCk7XG4gICAgICAgIGF3YWl0IHBvcHVsYXRlTG93VGVtcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlV2VhdGhlckRlc2NyaXB0aW9uKGluZm8pIHtcbiAgICAgICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZm87XG4gICAgfVxuICAgIGF3YWl0IHBvcHVsYXRlQ2l0eU5hbWUoY2l0eS5uYW1lKTtcbiAgICBhd2FpdCBwb3B1bGF0ZVRlbXBzKGNpdHkubWFpbik7XG4gICAgYXdhaXQgcG9wdWxhdGVXZWF0aGVyRGVzY3JpcHRpb24oY2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vZmV0Y2gtZGF0YS5qcyc7XG5pbXBvcnQgcG9wdWxhdGVXZWJwYWdlIGZyb20gJy4vcG9wdWxhdGUtd2VicGFnZS5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGV2ZW50KTtcbiAgICByZXR1cm4gcG9wdWxhdGVXZWJwYWdlKGRhdGEpO1xufVxuXG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbWFpbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9