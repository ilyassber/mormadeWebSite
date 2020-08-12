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
  var img_pathUrl = function img_pathUrl(input) {
    $('#img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
  };

  var content = __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "h-16 w-16",
    src: "",
    id: "img_url",
    alt: "your image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("input", {
    accept: "image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska",
    multiple: true,
    type: "file",
    onChange: "img_pathUrl(this);",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("div", {
    role: "button",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("i", {
    role: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  })), __jsx("span", {
    dir: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Photo/Video")), __jsx("div", {
    "data-visualcompletion": "ignore",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

/***/ })

})
//# sourceMappingURL=maker.js.4cb8652aed362e26b516.hot-update.js.map