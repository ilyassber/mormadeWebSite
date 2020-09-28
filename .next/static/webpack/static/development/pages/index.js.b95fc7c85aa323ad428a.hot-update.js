webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/graphics/textFields/TxtField.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/TxtField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtField.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var TxtField = function TxtField(props) {
  var align = 'left';
  var color = 'gray-900';
  var borderColor = 'gray-500';

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: props.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtField);

/***/ })

})
//# sourceMappingURL=index.js.b95fc7c85aa323ad428a.hot-update.js.map