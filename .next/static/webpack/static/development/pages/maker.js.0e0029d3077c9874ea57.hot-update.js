webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/elements/product/AddProduct.js":
/*!***************************************************!*\
  !*** ./components/elements/product/AddProduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\ecomartwebapp\\components\\elements\\product\\AddProduct.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AddProduct = function AddProduct(props) {
  var data = {};

  var getValue = function getValue(event, access) {
    if (access == 'name') {
      data['name'] = event.value;
      console.log(event.value);
    }
  };

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Product Name",
    onChange: function onChange(event) {
      return getValue(event, 'name');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ })

})
//# sourceMappingURL=maker.js.0e0029d3077c9874ea57.hot-update.js.map