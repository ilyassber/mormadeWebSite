webpackHotUpdate("static\\development\\pages\\maker.js",{

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
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var align = 'left';
  var color = 'gray-900';
  var borderColor = 'gray-300';
  var placeholder = '';
  var height = 12;

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  if (props.height != null) {
    height = props.height;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.reset == true) {
    color = 'white';
    borderColor = 'gray-300';
    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 16
    }
  }, props.label) : null, __jsx("input", {
    ref: inputRef,
    placeholder: placeholder,
    className: 'appearance-none border ' + 'border-' + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtField);

/***/ })

})
//# sourceMappingURL=maker.js.3071f19a57cb25e7d2be.hot-update.js.map