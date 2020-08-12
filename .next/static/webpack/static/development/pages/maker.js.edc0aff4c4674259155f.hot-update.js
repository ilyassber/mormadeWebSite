webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/graphics/images/AddImage.js":
/*!************************************************!*\
  !*** ./components/graphics/images/AddImage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\ecomartwebapp\\components\\graphics\\images\\AddImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AddImage = function AddImage(props) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  /*
  const img_pathUrl = (input) => {
      console.log(input.target.files)
      imgRef.current.src = (window.URL ? URL : webkitURL).createObjectURL(input.target.files[0]);
  }
  */

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "invisible",
    ref: inputRef,
    accept: "image/jpeg, image/jpg, image/png",
    multiple: true,
    type: "file",
    onChange: function onChange(input) {
      return props.onChange(input);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container h-32 w-32 content-center flex flex-wrap border border-1 border-gray-900 hover:bg-xw-200",
    role: "button",
    onClick: function onClick() {
      inputRef.current.click();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "object-none object-center h-auto w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Upload Photo"))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

/***/ })

})
//# sourceMappingURL=maker.js.edc0aff4c4674259155f.hot-update.js.map