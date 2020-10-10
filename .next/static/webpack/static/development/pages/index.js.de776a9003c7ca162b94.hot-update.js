webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _discuss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discuss */ "./components/elements/discuss/index.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\webweb\\components\\elements\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer(_ref) {
  var _this = this;

  var categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links;

  var IconsContainer = function IconsContainer() {
    return __jsx("div", {
      className: "flex flex-row mx-2 text-gray-300 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 20,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["facebook2"],
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
      size: 20,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["instagram"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }
    })), __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 20,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["twitter"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 33
      }
    })));
  };

  var CategoriesCard = function CategoriesCard() {
    return __jsx("div", {
      className: "my-2 md:mx-10 lg:mx-5 flex lg:flex-1  flex-col justify-start items-start md:items-center md:items-start ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "CATEGORIES"), __jsx("ul", {
      className: "flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, categories.map(function (categorie, index) {
      return index < max_shown && __jsx("li", {
        key: index,
        className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 44
        }
      }, categorie.tag.toLowerCase());
    })));
  };

  var EntriesCard = function EntriesCard() {
    return __jsx("div", {
      className: "my-2 md:mx-10 lg:mx-5 flex lg:flex-1 flex-col justify-start items-start md:items-center md:items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, "ENTRIES"), __jsx("ul", {
      className: "flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, links.map(function (link, indx) {
      return __jsx("li", {
        className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        key: indx,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: link.path,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
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
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-10/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center w-full h-auto mt-24 mb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-white font-bold text-2xl font-kumbhsans cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "MORMADE |"), __jsx("br", {
    className: "md:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 78
    }
  }), " MOROCCO")), __jsx("div", {
    className: "my-10 flex flex-col lg:flex-row justify-start lg:justify-around items-center w-full h-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-5 sm:mb-10 flex flex-1 flex-col sm:flex-row items-start sm:justify-center lg:justify-between  w-full  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(CategoriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }), __jsx(EntriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mx-5 w-full flex flex-1 md:justify-center items-center md:w-auto text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_discuss__WEBPACK_IMPORTED_MODULE_4__["LeaveMessage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 28
    }
  }))), __jsx("div", {
    className: "flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(IconsContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.de776a9003c7ca162b94.hot-update.js.map