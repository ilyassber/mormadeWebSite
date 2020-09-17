webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/elements/StoriesEntry/StoriesEntryRes.js":
/*!*************************************************************!*\
  !*** ./components/elements/StoriesEntry/StoriesEntryRes.js ***!
  \*************************************************************/
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
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\StoriesEntry\\StoriesEntryRes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function CentredCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      link = _ref.link,
      width = _ref.width,
      descriptionHeight = _ref.descriptionHeight,
      style = _ref.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold  md:text-xl hover:underline cursor-pointer text-center break-words",
    descriptionStyle: "font-amiri text-base text-center",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(width, " flex flex-col justify-center"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full flex justify-center overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col justify-start items-center p-5 pr-10 md:p-16 ".concat(descriptionHeight, " bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: " md:mb-1 text-gray-900",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "md:mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "md:mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
    className: "".concat(style, " flex flex-row justify-start w-full ").concat(height),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col justify-center items-start p-16 ".concat(descriptionWidth, " h-full bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: "mb-1 text-gray-900 ",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "mt-2 mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "mt-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-col justify-center items-end p-16 ".concat(descriptionWidth, " h-full bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: title,
    style: "mb-1 text-gray-900 ",
    textStyle: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: description,
    style: "mt-2 mb-2  text-gray-900 ",
    textStyle: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "mt-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "flex items-center justify-start hover:text-green-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 44
    }
  }, __jsx(_graphics_textDisplayer_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: link.text,
    style: "mr-2 text-gray-90",
    textStyle: styleFont.linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 112
    }
  }), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_md_ic_arrow_forward__WEBPACK_IMPORTED_MODULE_5__["ic_arrow_forward"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 88,
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
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 105,
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
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 123,
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
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=stories.js.4895d7e98628ae255957.hot-update.js.map