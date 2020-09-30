webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/widgets/image/AddImageGrid.js":
/*!**************************************************!*\
  !*** ./components/widgets/image/AddImageGrid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/images */ "./components/graphics/images/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\image\\AddImageGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AddImageGrid = function AddImageGrid(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      imagesList = _useState[0],
      setImagesList = _useState[1];

  var appendFile = function appendFile(newFiles) {
    console.log(newFiles);

    if (newFiles.length > 0) {
      props.addImage(newFiles);
      initList();
    }
  };

  var removeFile = function removeFile(index) {
    props.removeImage(index);
    initList();
  };

  var initList = function initList() {
    if (props.files.length > 0) {
      setImagesList(props.files.map(function (file, index) {
        var imgSrc = (window.URL ? URL : webkitURL).createObjectURL(file);
        console.log(index);
        return __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["RemovedSquaredImg"], {
          className: "w-32 h-32 m-1",
          src: imgSrc,
          key: index,
          index: index,
          onRemove: removeFile,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 24
          }
        });
      }));
    } else {
      setImagesList(null);
    }
  };

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Add Product Images"), __jsx("div", {
    className: "h-auto w-full container flex content-start flex-wrap border py-2 px-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, imagesList, __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["AddImage"], {
    onChange: appendFile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImageGrid);

/***/ })

})
//# sourceMappingURL=maker.js.60dbb66b1154e1a58b10.hot-update.js.map