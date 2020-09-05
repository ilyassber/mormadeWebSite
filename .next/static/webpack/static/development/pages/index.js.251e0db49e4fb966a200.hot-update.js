webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elements_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/elements/authentication */ "./components/elements/authentication/index.js");
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/parseCookies */ "./lib/parseCookies.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Auth = function Auth(_ref) {
  var _ref$cookies = _ref.cookies,
      cookies = _ref$cookies === void 0 ? {} : _ref$cookies;
  console.log(cookies);

  var contentDOM = __jsx(_components_elements_authentication__WEBPACK_IMPORTED_MODULE_1__["Authentication"], {
    cookies: cookies,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  });

  return contentDOM;
};

Auth.getInitialProps = function (_ref2) {
  var req = _ref2.req;
  var cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])(req);
  return {
    cookies: cookies
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=index.js.251e0db49e4fb966a200.hot-update.js.map