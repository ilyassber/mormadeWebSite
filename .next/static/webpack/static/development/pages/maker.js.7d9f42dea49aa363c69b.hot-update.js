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
      data['name'] = event.target.value;
    } else if (access == 'description') {
      data['description'] = event.target.value;
    } else if (access == 'price') {
      data['price'] = event.target.value;
    } else if (access == 'quantity') {
      data['quantity'] = event.target.value;
    }
  };

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtArea"], {
    label: "Product Description",
    onChange: function onChange(event) {
      return getValue(event, 'description');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Price",
    onChange: function onChange(event) {
      return getValue(event, 'price');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Quantity",
    onChange: function onChange(event) {
      return getValue(event, 'quantity');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ })

})
//# sourceMappingURL=maker.js.7d9f42dea49aa363c69b.hot-update.js.map