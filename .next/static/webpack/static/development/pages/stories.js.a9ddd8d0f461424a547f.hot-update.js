webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/elements/StoriesEntry/StoriesEntryRes.js":
/*!*************************************************************!*\
  !*** ./components/elements/StoriesEntry/StoriesEntryRes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoryEntry; });
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
      width = _ref2.width,
      descriptionHeight = _ref2.descriptionHeight,
      style = _ref2.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold md:text-xl hover:underline cursor-pointer text-center md:text-left break-words",
    descriptionStyle: "font-amiri text-base text-center md:text-left",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(width, " flex flex-col md:flex-row justify-center bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full flex justify-center overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center p-5 px-10  ".concat(descriptionHeight, " "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center sm:w-full items-center md:items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      width = _ref3.width,
      descriptionHeight = _ref3.descriptionHeight,
      style = _ref3.style;
  var styleFont = {
    titleStyle: "font-kumbhsans font-bold  text-xl hover:underline cursor-pointer text-center md:text-right break-words",
    descriptionStyle: "font-amiri text-base text-center md:text-right",
    linkStyle: "font-yantramanav text-sm font-bold"
  };
  return __jsx("div", {
    className: "".concat(width, " flex flex-col md:flex-row-reverse justify-center bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full flex justify-center overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center p-5 px-10  ".concat(descriptionHeight, " "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center sm:w-full items-center md:items-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styleFont.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: styleFont.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

function StoryEntry(_ref4) {
  var type = _ref4.type,
      image = _ref4.image,
      title = _ref4.title,
      description = _ref4.description,
      link = _ref4.link,
      margin = _ref4.margin;
  var sizeStyle = {
    1: {
      width: "max-w-6xl",
      descriptionSize: "",
      style: "flex justify-start w-full"
    },
    2: {
      width: "max-w-6xl",
      descriptionSize: "",
      style: "flex justify-end w-full"
    },
    3: {
      width: "max-w-4xl",
      descriptionSize: "",
      style: "flex justify-center items-center w-full"
    }
  };
  return __jsx("div", {
    className: sizeStyle[type].style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, type === 1 && __jsx(LeftCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 28
    }
  }), type === 2 && __jsx(RightCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 28
    }
  }), type === 3 && __jsx(CentredCard, {
    image: image,
    title: title,
    description: description,
    link: link,
    width: sizeStyle[type].width,
    descriptionHeight: sizeStyle[type].descriptionSize,
    style: "m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 28
    }
  }));
}

/***/ })

})
//# sourceMappingURL=stories.js.a9ddd8d0f461424a547f.hot-update.js.map