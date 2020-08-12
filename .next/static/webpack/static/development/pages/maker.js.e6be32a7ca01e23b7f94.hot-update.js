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
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var img_pathUrl = function img_pathUrl(input) {
    console.log(input.files);
    imgRef.current.src = (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
  };

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "h-16 w-16",
    src: "",
    ref: imgRef,
    alt: "your image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("input", {
    accept: "image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska",
    multiple: true,
    type: "file",
    onChange: function onChange(input) {
      return img_pathUrl(input);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("div", {
    role: "button",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("i", {
    role: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  })), __jsx("span", {
    dir: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Photo/Video")), __jsx("div", {
    "data-visualcompletion": "ignore",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

/***/ })

})
//# sourceMappingURL=maker.js.e6be32a7ca01e23b7f94.hot-update.js.map