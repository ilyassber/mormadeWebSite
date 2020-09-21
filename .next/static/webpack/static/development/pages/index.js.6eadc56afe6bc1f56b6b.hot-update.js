webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/nav-bar/navbar.js":
/*!***********************************************!*\
  !*** ./components/elements/nav-bar/navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperNav/UpperNav */ "./components/elements/nav-bar/upperNav/UpperNav.js");
/* harmony import */ var _middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleNav/MiddleNav */ "./components/elements/nav-bar/middleNav/MiddleNav.js");
/* harmony import */ var _categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoriesBar/categoriesBar */ "./components/elements/nav-bar/categoriesBar/categoriesBar.js");
/* harmony import */ var _bar_WelcomeBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bar/WelcomeBar */ "./components/elements/bar/WelcomeBar.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NavBar(_ref) {
  var changeMenuClicked = _ref.changeMenuClicked,
      categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links,
      home = _ref.home;
  return __jsx("nav", {
    className: "z-10 fixed flex flex-col content-center w-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex w-3/4 h-12 px-2 mt-4 mb-2",
    changeMenuClicked: changeMenuClicked,
    home: home,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(_middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "hidden md:flex h-12 w-full px-2",
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_bar_WelcomeBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(_categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    max_shown: max_shown,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.6eadc56afe6bc1f56b6b.hot-update.js.map