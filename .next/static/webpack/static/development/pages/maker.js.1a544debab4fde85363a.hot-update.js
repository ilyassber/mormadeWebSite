webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./services/api/addProduct.js":
/*!************************************!*\
  !*** ./services/api/addProduct.js ***!
  \************************************/
/*! exports provided: addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function addProduct(data, csrttoken) {
  return new Promise(function (resolve, reject) {
    var axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    var content = {
      data: querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)
    };
    console.log(content);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/products/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      reject(error);
    });
  });
}

/***/ })

})
//# sourceMappingURL=maker.js.1a544debab4fde85363a.hot-update.js.map