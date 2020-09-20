webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/nav-bar/middleNav/MiddleNav.js":
/*!************************************************************!*\
  !*** ./components/elements/nav-bar/middleNav/MiddleNav.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon */ "./node_modules/react-icons-kit/icomoon/index.js");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\middleNav\\MiddleNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SearchWidget() {
  return __jsx("form", {
    className: "flex justify-end h-8 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "h-full w-8 outline-none  border-gray-500 focus:outline-none",
    onClick: function onClick(e) {
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("input", {
    className: "h-full w-16 lg:w-24 outline-none border-b text-gray-900 border-gray-500 text-lg text-center transform transition-all ease-out duration-500 lg:focus:w-40",
    type: "text",
    placeholder: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

function MiddleNav(_ref) {
  var _this = this;

  var style = _ref.style,
      links = _ref.links;
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), " ", __jsx("ul", {
    className: "flex flex-1 justify-center items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, links.map(function (link, indx) {
    return __jsx("li", {
      className: "m-8 cursor-pointer text-lato text-sm font-semibold font-relway tracking-wide  text-gray-900 hover:text-gray-700",
      key: indx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 48
      }
    }, link.page)));
  })), __jsx("div", {
    className: "flex flex-1 justify-end items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(SearchWidget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MiddleNav);

/***/ })

})
//# sourceMappingURL=index.js.bb7c676a6669d4e37ba8.hot-update.js.map