webpackHotUpdate("static\\development\\pages\\stories\\[story].js",{

/***/ "./components/elements/article/ArticleDisplayer.js":
/*!*********************************************************!*\
  !*** ./components/elements/article/ArticleDisplayer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/images */ "./components/graphics/images/index.js");
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _widgets_category_DisplayCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/category/DisplayCategories */ "./components/widgets/category/DisplayCategories.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\article\\ArticleDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ArticleDisplayer = function ArticleDisplayer(props) {
  var data = props.story;

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-full flex flex-col items-center bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative md:w-3/4 lg:w-3/5 h-auto min-h-24 flex flex-col items-center mx-6 mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, data.cover != null ? __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["ImgFreeDisp"], {
    className: "w-full h-auto",
    src: data.cover.path,
    alt: data.cover.alt,
    displayAlt: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }
  }) : null, __jsx("div", {
    className: "h-auto w-auto max-w-screen flex flex-col items-center bg-white mt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "font-roboto font-bold text-3xl text-center leading-snug mt-6 mx-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, data.title), __jsx("h3", {
    className: "font-roboto font-medium text-base text-center mx-6 mb-6 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, data.description))), __jsx("div", {
    className: "h-auto md:w-3/4 lg:w-3/5 flex flex-col items-center mx-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, data.text.map(function (content, index) {
    if (content.type == 'image') {
      return __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["ImgFreeDisp"], {
        key: index,
        className: "w-full h-auto mt-4 mb-8",
        src: content.image.path,
        alt: data.cover.alt,
        displayAlt: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 41
        }
      });
    } else if (content.type == 'text') {
      return __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TextDisp"], {
        key: index,
        className: "w-full lg:w-3/4 h-auto mb-4",
        align: "left",
        text: content.text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 41
        }
      });
    }

    return null;
  })), __jsx("hr", {
    className: "w-full md:w-3/4 lg:w-3/5 bg-gray-300 m-2 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(_widgets_category_DisplayCategories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-full md:w-3/4 lg:w-3/5 h-auto mb-4 m-2",
    tags: data.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleDisplayer);

/***/ })

})
//# sourceMappingURL=[story].js.97e6b08194e6c5aa1ee6.hot-update.js.map