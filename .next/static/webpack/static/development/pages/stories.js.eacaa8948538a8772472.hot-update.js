webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/graphics/buttons/Btn.js":
/*!********************************************!*\
  !*** ./components/graphics/buttons/Btn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\Btn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Btn = function Btn(props) {
  var borderColor = 'black';
  var textColor = 'white';
  var textSize = 'sm';
  var textWeight = 'medium';
  var hoverColor = 'gray-700';
  var borderHoverColor = 'white';
  var bgColor = 'black';
  var disableColor = 'gray-300';
  var disabled = false;
  var height = 12;
  var shadow = 'border border-';

  if (props.height != null) {
    height = props.height;
  }

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.borderHoverColor != null) {
    borderHoverColor = props.borderHoverColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.textSize != null) {
    textSize = props.textSize;
  }

  if (props.hoverColor != null) {
    hoverColor = props.hoverColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  if (props.textWeight != null) {
    textWeight = props.textWeight;
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: 'w-full h-full bg-' + bgColor + ' ' + shadow + ' hover:bg-' + hoverColor + ' focus:outline-none hover:border-' + borderHoverColor + ' font-roboto font-' + textWeight + ' text-' + textColor + ' text-' + textSize + ' py-2 px-4',
    type: "button",
    disabled: disabled,
    onClick: props.onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ }),

/***/ "./components/graphics/buttons/index.js":
/*!**********************************************!*\
  !*** ./components/graphics/buttons/index.js ***!
  \**********************************************/
/*! exports provided: BtnBbw, BtnBtb, BtnTtb, BtnIcon, Btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BtnBbw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnBbw */ "./components/graphics/buttons/BtnBbw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBbw", function() { return _BtnBbw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BtnBtb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnBtb */ "./components/graphics/buttons/BtnBtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBtb", function() { return _BtnBtb__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BtnTtb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnTtb */ "./components/graphics/buttons/BtnTtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnTtb", function() { return _BtnTtb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BtnIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnIcon */ "./components/graphics/buttons/BtnIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnIcon", function() { return _BtnIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Btn */ "./components/graphics/buttons/Btn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return _Btn__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ })

})
//# sourceMappingURL=stories.js.eacaa8948538a8772472.hot-update.js.map