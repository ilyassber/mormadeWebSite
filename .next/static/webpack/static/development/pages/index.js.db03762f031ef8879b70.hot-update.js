webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/discuss/LeaveMessage.js":
false,

/***/ "./components/elements/discuss/WaitList.js":
false,

/***/ "./components/elements/discuss/index.js":
false,

/***/ "./components/elements/footer/footer.js":
/*!**********************************************!*\
  !*** ./components/elements/footer/footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon */ "./node_modules/react-icons-kit/icomoon/index.js");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer(_ref) {
  var _this = this;

  var categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links;

  var IconsContainer = function IconsContainer() {
    return __jsx("div", {
      className: "flex flex-row mx-2 text-gray-500 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["facebook2"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 33
      }
    })), __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["instagram"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 33
      }
    })), __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["twitter"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }
    })));
  };

  var CategoriesCard = function CategoriesCard() {
    return __jsx("div", {
      className: "flex flex-1  flex-col justify-start items-center md:items-start md:pl-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "CATEGORIES"), __jsx("ul", {
      className: "ml-2 flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, categories.map(function (categorie, index) {
      return index < max_shown && __jsx("li", {
        key: index,
        className: "my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 44
        }
      }, categorie.tag.toLowerCase());
    })));
  };

  var EntriesCard = function EntriesCard() {
    return __jsx("div", {
      className: "flex flex-1 flex-col justify-start items-center md:items-start pl-10 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, "ENTRIES"), __jsx("ul", {
      className: "ml-2 flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, links.map(function (link, indx) {
      return __jsx("li", {
        className: "my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        key: indx,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: link.path,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 48
        }
      }, link.page.toLowerCase())));
    })));
  };

  return __jsx("div", {
    className: "flex justify-center w-full bg-black shadow-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-9/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center w-full h-72",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-white font-bold text-2xl font-kumbhsans cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "MORMADE |"), __jsx("br", {
    className: "md:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 78
    }
  }), " MOROCCO")), __jsx("div", {
    className: "flex flex-col md:flex-row justify-start md:justify-around items-center w-full h-96",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-1 flex-row justify-between  w-full md:w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(CategoriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), __jsx(EntriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex flex-1 flex-row justify-center items-center w-full md:w-auto text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 28
    }
  }, "ilyass stufffs"))), __jsx("div", {
    className: "flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(IconsContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./components/graphics/buttons/Btn.js":
false,

/***/ "./components/graphics/buttons/index.js":
/*!**********************************************!*\
  !*** ./components/graphics/buttons/index.js ***!
  \**********************************************/
/*! exports provided: BtnBbw, BtnBtb, BtnTtb, BtnIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BtnBbw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnBbw */ "./components/graphics/buttons/BtnBbw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBbw", function() { return _BtnBbw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BtnBtb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnBtb */ "./components/graphics/buttons/BtnBtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBtb", function() { return _BtnBtb__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BtnTtb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnTtb */ "./components/graphics/buttons/BtnTtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnTtb", function() { return _BtnTtb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BtnIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnIcon */ "./components/graphics/buttons/BtnIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnIcon", function() { return _BtnIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./components/graphics/textFields/TxtArea.js":
/*!***************************************************!*\
  !*** ./components/graphics/textFields/TxtArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var TxtArea = function TxtArea(props) {
  var shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.label), __jsx("textarea", {
    rows: "4",
    cols: "50",
    className: 'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtArea);

/***/ }),

/***/ "./components/graphics/textFields/TxtField.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/TxtField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtField.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TxtField = function TxtField(props) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var align = 'left';
  var color = 'gray-900';
  var borderColor = 'gray-300';
  var placeholder = '';
  var height = 12;
  var shadow = 'border border-';

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  if (props.height != null) {
    height = props.height;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.reset == true) {
    color = 'white';
    borderColor = 'gray-300';
    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }
  }, props.label) : null, __jsx("input", {
    ref: inputRef,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtField);

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

/***/ "./services/api/post/postRequest.js":
false

})
//# sourceMappingURL=index.js.db03762f031ef8879b70.hot-update.js.map