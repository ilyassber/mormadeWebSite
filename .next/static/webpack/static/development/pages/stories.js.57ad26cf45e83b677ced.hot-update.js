webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/elements/StoriesEntry/StoriesEntry.js":
/*!**********************************************************!*\
  !*** ./components/elements/StoriesEntry/StoriesEntry.js ***!
  \**********************************************************/
/*! exports provided: LeftStoryEntry, RightStoryEntry, CentredStoryEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftStoryEntry", function() { return LeftStoryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightStoryEntry", function() { return RightStoryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentredStoryEntry", function() { return CentredStoryEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var _graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textDisplayer/Text */ "./components/graphics/textDisplayer/Text.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/md/ic_arrow_forward */ "./node_modules/react-icons-kit/md/ic_arrow_forward.js");
/* harmony import */ var react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\StoriesEntry\\StoriesEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CentredCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      link = _ref.link,
      width = _ref.width,
      imageHeight = _ref.imageHeight,
      descriptionHeight = _ref.descriptionHeight,
      style = _ref.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer text-center break-words",
    descriptionStyle: "font-amiri text-base text-center",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(style, " flex flex-col justify-center  ").concat(width),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: imageHeight,
    style: "flex justify-center items-center ".concat(imageHeight, " ").concat(width, "  overflow-hidden"),
    imageStyle: "transform hover:scale-105 translate-all ease-out duration-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col justify-start items-center p-16 ".concat(descriptionHeight, " w-full bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: "mb-1 text-gray-900 ",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "mt-2 mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 197
    }
  }))))));
}

function LeftCard(_ref2) {
  var image = _ref2.image,
      title = _ref2.title,
      description = _ref2.description,
      link = _ref2.link,
      height = _ref2.height,
      imageWidth = _ref2.imageWidth,
      descriptionWidth = _ref2.descriptionWidth,
      style = _ref2.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer ",
    descriptionStyle: "font-amiri text-base",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(style, " flex flex-row justify-center  ").concat(height),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: height,
    style: "flex justify-center items-center ".concat(imageWidth, " ").concat(height, "  overflow-hidden"),
    imageStyle: "transform hover:scale-105 translate-all ease-out duration-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col justify-center items-start p-16 ".concat(descriptionWidth, " h-full bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: "mb-1 text-gray-900 ",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "mt-2 mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "mt-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 197
    }
  }))))));
}

function RightCard(_ref3) {
  var image = _ref3.image,
      title = _ref3.title,
      description = _ref3.description,
      link = _ref3.link,
      height = _ref3.height,
      imageWidth = _ref3.imageWidth,
      descriptionWidth = _ref3.descriptionWidth,
      style = _ref3.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold text-xl hover:underline cursor-pointer text-right",
    descriptionStyle: "font-amiri text-base text-right",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(style, " flex flex-row-reverse justify-center  ").concat(height),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    height: height,
    style: "flex justify-center items-center ".concat(imageWidth, " ").concat(height, "  overflow-hidden"),
    imageStyle: "transform hover:scale-105 translate-all ease-out duration-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col justify-center items-end p-16 ".concat(descriptionWidth, " h-full bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: "mb-1 text-gray-900 ",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "mt-2 mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "mt-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 197
    }
  }))))));
}

function LeftStoryEntry(_ref4) {
  var image = _ref4.image,
      title = _ref4.title,
      description = _ref4.description,
      link = _ref4.link,
      height = _ref4.height,
      imageWidth = _ref4.imageWidth,
      descriptionWidth = _ref4.descriptionWidth,
      style = _ref4.style;
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(LeftCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    height: height,
    imageWidth: imageWidth,
    descriptionWidth: descriptionWidth,
    style: "m-5 shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }));
}
function RightStoryEntry(_ref5) {
  var image = _ref5.image,
      title = _ref5.title,
      description = _ref5.description,
      link = _ref5.link,
      height = _ref5.height,
      imageWidth = _ref5.imageWidth,
      descriptionWidth = _ref5.descriptionWidth,
      style = _ref5.style;
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(RightCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    height: height,
    imageWidth: imageWidth,
    descriptionWidth: descriptionWidth,
    style: "m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }));
}
function CentredStoryEntry(_ref6) {
  var image = _ref6.image,
      title = _ref6.title,
      description = _ref6.description,
      link = _ref6.link,
      width = _ref6.width,
      imageHeight = _ref6.imageHeight,
      descriptionHeight = _ref6.descriptionHeight,
      style = _ref6.style;
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(CentredCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: width,
    imageHeight: imageHeight,
    descriptionHeight: descriptionHeight,
    style: "m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=stories.js.57ad26cf45e83b677ced.hot-update.js.map