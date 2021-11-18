/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/comments.js":
/*!***************************************!*\
  !*** ./src/js/components/comments.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function showComments() {
  const wrapperComments = document.querySelector(".wrapper_comments");
  const getRequest = __webpack_require__(/*! ./request */ "./src/js/components/request.js");
  getRequest().then((data) => {
    data.forEach(el => {
      wrapperComments.innerHTML += `<div class="card">
      <div class="card-body">
        ${el.text}
      </div>
    </div>`
    });
  });
  
}
module.exports = showComments;


/***/ }),

/***/ "./src/js/components/request.js":
/*!**************************************!*\
  !*** ./src/js/components/request.js ***!
  \**************************************/
/***/ ((module) => {

function getRequest() {
  // const url = "https://jordan.ashton.fashion/api/goods/30/comments";
  // const response = await fetch(url);
  // if (response.status === 200) {
  //   const data = await response.json();
  //   return data.data
  // }

  const array = []
  fetch('https://jordan.ashton.fashion/api/goods/30/comments')
  .then(response => response.json())
  .then(data =>data.data.forEach(el => {
    array.push(el);
  }))
    return array;
}


module.exports = getRequest; 

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", () => {
  const show = __webpack_require__(/*! ./components/comments */ "./src/js/components/comments.js")
  show()
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map