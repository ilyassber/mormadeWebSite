webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/widgets/article/ArticleBanner.js":
/*!*****************************************************!*\
  !*** ./components/widgets/article/ArticleBanner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\ArticleBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ArticleBanner = function ArticleBanner(props) {
  var bannerState = props.data.cover == null ? 'relative bg-yellow-300 text-gray-900' : 'absolute bottom-0 text-white';

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.data.cover ? __jsx("img", {
    className: "w-full",
    src: props.data.cover.path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 24
    }
  }) : null, __jsx("div", {
    className: bannerState + ' h-auto w-full flex flex-col items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "font-roboto font-bold text-xl mt-4 mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, props.data.title), __jsx("span", {
    className: "mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, props.data.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/stories/".concat(props.data.url),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnBbw"], {
    className: "h-auto w-auto m-4",
    value: "READ MORE",
    weight: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 28
    }
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleBanner);

/***/ })

})
//# sourceMappingURL=stories.js.37132c7cda6b748ba87b.hot-update.js.map