webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/StoriesEntry/StoriesEntry.js":
/*!**********************************************************!*\
  !*** ./components/elements/StoriesEntry/StoriesEntry.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoriesEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var _graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textDisplayer/Text */ "./components/graphics/textDisplayer/Text.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\StoriesEntry\\StoriesEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var images = {
  cover1: "images/Articles/cover-1.jpg",
  cover2: "images/Articles/cover-2.jpg",
  cover3: "images/Articles/cover-3.jpg",
  cover4: "images/Articles/cover-4.jpg",
  cover5: "images/Articles/cover-5.jpg",
  cover6: "images/Articles/cover-6.jpg",
  cover7: "images/Articles/cover-7.jpg",
  cover8: "images/Articles/cover-8.jpg",
  cover9: "images/Articles/cover-9.jpg"
};

function StorieCard(_ref) {
  var height = _ref.height,
      width = _ref.width,
      style = _ref.style;
  return __jsx("div", {
    className: "".concat(style, " flex flex-row justify-center ").concat(width, " ").concat(height, " bg-red-100"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: images.cover7,
    height: height,
    style: "flex justify-center items-center w-full ".concat(height, " rounded-sm overflow-hidden shadow-xl "),
    imageStyle: "transform hover:scale-105 translate-all ease-out duration-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "absolute flex justify-center items-start right-8 w-96 h-108 shadow-inner bg-white bg-opacity-100 transform hover:scale-105 transition ease-out duration-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "stories",
    style: "h-24 w-64 font-abrilfatface text-bold text-7xl text-gray-900 opacity-75",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, " "))));
}

function StoriesEntry() {
  return __jsx("div", {
    className: "relative flex justify-center items-center w-full h-192 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(StorieCard, {
    height: "h-144",
    width: "w-10/12",
    style: "absolute z-40 shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })) // <div className="flex flex-row justify-center w-full h-144 bg-red-100">
  //     <Cover image={images.cover7} height="h-144" style="flex justify-center items-center w-9/12 h-144 rounded-sm overflow-hidden shadow-xl">
  //         <div className="absolute flex justify-center items-start right-8 w-96 h-108  shadow-inner bg-white bg-opacity-100 transform hover:scale-110 transition ease-out duration-500">
  //             <Text text="stories" style="h-24 w-64 font-abrilfatface text-bold text-7xl text-gray-900 opacity-75" />
  //             <Text> </Text>
  //         </div>
  //     </Cover>
  // </div>
  ;
}

/***/ })

})
//# sourceMappingURL=index.js.4b091ee9bf5bd755f1da.hot-update.js.map