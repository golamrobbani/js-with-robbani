/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js-with-robbani/./src/scss/style.scss?");

/***/ }),

/***/ "./src/components/dom/index.js":
/*!*************************************!*\
  !*** ./src/components/dom/index.js ***!
  \*************************************/
/***/ (() => {

eval("//How to Select Elements in the DOM\r\n\r\n//getElementById\r\n// const masterEl = document.getElementById(\"master\");\r\n// console.log(masterEl);\r\n\r\n//getElementsByClassName\r\n// const btn = document.getElementById(\"btn\");\r\n// btn.addEventListener(\"click\", function master() {\r\n//   var master = document.getElementsByClassName(\"master2\");\r\n//   master[2].innerHTML = \"i need a job\";\r\n// });\r\n\r\n//getElementsByTagName\r\n// const btn = document.getElementById(\"btn\");\r\n// btn.addEventListener(\"click\", function master() {\r\n//   let master = document.getElementsByTagName(\"p\");\r\n//   let masterEl = (master[1].innerHTML = \"Code editors\");\r\n//   console.log(masterEl); //Code editors\r\n// });\r\n\r\n//querySelector\r\n// const master = document.querySelector(\"#master\");\r\n// console.log(master);\r\n\r\n//querySelectorAll\r\n// const master = document.querySelectorAll(\".master\");\r\n// console.log(master[1]);\r\n\r\n// const parent = document.getElementById(\"parent\").lastElementChild;\r\n// console.log(parent); //<p>i am the last child</p>\r\n\r\n// const parent2 = document.getElementById(\"parent\").children[3];\r\n// console.log(parent2); //<h1>hello world</h1>\r\n\r\n// const secondchild = document.getElementById(\"secondchild\");\r\n// console.log(secondchild); //<p id=\"secondchild\">i am the second child</p>\r\n\r\n// console.log(secondchild.parentNode); //<div id=\"parent\">...</div>\r\n\r\n// console.log(secondchild.nextElementSibling); //<h4>i am alive</h4>\r\n\r\n// console.log(secondchild.previousElementSibling); //<div id=\"firstchild\">i am a first child</div>\r\n\r\n// How to Create Elements\r\n// const createEl = document.createElement(\"div\");\r\n// console.log(createEl); //<div></div>\r\n\r\n//How to Set innerHTML\r\n// const innerhtml = (createEl.innerHTML = \"i am a frontend developer\");\r\n// console.log(createEl);\r\n\r\n//How to Append an Element\r\n// const createEl1 = document.createElement(\"div\");\r\n// const innerhtml1 = (createEl1.innerHTML = \"i am a frontend developer1\");\r\n\r\n// const parentEl = document.getElementById(\"parent\");\r\n// parentEl.appendChild(createEl1);\r\n// console.log(parentEl);\r\n\r\n//How to Insert One Element Before Another\r\n\r\n// const parentEl = document.getElementById(\"parent\");\r\n// const firstchildEl = document.getElementById(\"firstchild\");\r\n\r\n// const createEl = document.createElement(\"div\");\r\n// const innerhtml = (createEl.innerHTML = \"i am a frontend developer1\");\r\n\r\n// parentEl.insertBefore(createEl, firstchildEl);\r\n// console.log(parentEl);\r\n\r\n//How to Replace a Child Element\r\n// const firstchildEl = document.getElementById(\"firstchild\");\r\n// const parentEl = document.getElementById(\"parent\");\r\n\r\n// const createEl = document.createElement(\"div\");\r\n// const innerhtml = (createEl.innerHTML = \"i am a frontend developer\");\r\n\r\n// parentEl.replaceChild(createEl, firstchildEl);\r\n// console.log(parentEl);\r\n\r\n// const firstchildEl = document.getElementById(\"firstchild\");\r\n// const parentEl = document.getElementById(\"parent\");\r\n// parentEl.removeChild(firstchildEl);\r\n// console.log(parentEl);\r\n\r\n//How to Add a CSS Class\r\n// const buttonEl = document.getElementById(\"master\");\r\n// buttonEl.addEventListener(\"click\", addFunction);\r\n\r\n// function addFunction() {\r\n//   buttonEl.classList.add(\"button\");\r\n// }\r\n\r\n//How to Remove a Class\r\n// const buttonEl = document.getElementById(\"master\");\r\n// buttonEl.addEventListener(\"click\", addFunction);\r\n\r\n// function addFunction() {\r\n//   buttonEl.classList.remove(\"button\");\r\n// }\r\n\r\n//How to Toggle a Class\r\nconst buttonEl = document.getElementById(\"master\");\r\nbuttonEl.addEventListener(\"click\", addFunction);\r\n\r\nfunction addFunction() {\r\n  buttonEl.classList.toggle(\"button\");\r\n}\r\n\n\n//# sourceURL=webpack://js-with-robbani/./src/components/dom/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _components_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dom/index.js */ \"./src/components/dom/index.js\");\n/* harmony import */ var _components_dom_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dom_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n//js dom learning file\r\n\r\n\n\n//# sourceURL=webpack://js-with-robbani/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;