webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/alpha-displayer/AlphaDisplayer.js":
/*!***************************************************************!*\
  !*** ./components/elements/alpha-displayer/AlphaDisplayer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlphaDisplayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var _graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textDisplayer/Text */ "./components/graphics/textDisplayer/Text.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\alpha-displayer\\AlphaDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AlphaDisplayer(_ref) {
  var children = _ref.children,
      style = _ref.style,
      height = _ref.height,
      width = _ref.width,
      image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      buttonText = _ref.buttonText,
      clickAction = _ref.clickAction;
  var textStyle = {
    titleStyle: "font-kumbhsans font-bold text-xl md:text-2xl  text-center break-words text-white",
    descriptionStyle: "m-2 tracking-widest font-extrabold text-base text-center text-white",
    buttonStyle: "tracking-widest font-yantramanav text-sm font-bold "
  };
  return __jsx("div", {
    className: "relative flex justify-center overflow-hidden my-5 mx-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "absolute flex flex-col justify-end items-center p-2 w-full h-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: textStyle.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: textStyle.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, description), __jsx("div", {
    className: "hidden md:flex justify-center items-center px-5 py-2 mb-10 mt-2 bg-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: textStyle.buttonStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 112
    }
  }, buttonText))));
}

/***/ })

})
//# sourceMappingURL=index.js.be250d5104cc0fa16c4a.hot-update.js.map