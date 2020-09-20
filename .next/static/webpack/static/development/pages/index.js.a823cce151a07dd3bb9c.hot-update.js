webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js":
/*!*******************************************************************************!*\
  !*** ./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js ***!
  \*******************************************************************************/
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
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/cross */ "./node_modules/react-icons-kit/icomoon/cross.js");
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\iconsContainer\\iconsContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IconsContainer(_ref) {
  var _this = this;

  var openSearch = _ref.openSearch,
      openSearchClickHandler = _ref.openSearchClickHandler,
      style = _ref.style;
  var searchIconStyle = {
    openStyle: "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
    closeStyle: "flex justify-center h-full w-8 outline-none focus:outline-none"
  };
  var inputStyle = {
    openStyle: "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
    closeStyle: "transform w-0 transition-all ease-out duration-300"
  };

  var SearchIcon = function SearchIcon() {
    return __jsx("form", {
      className: "md:hidden flex justify-end h-8 w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: openSearch ? searchIconStyle.openStyle : searchIconStyle.closeStyle,
      onClick: openSearchClickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: openSearch ? react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__["cross"] : react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    })), openSearch && __jsx("button", {
      className: "h-full w-8 outline-none focus:outline-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 28
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 91
      }
    })), __jsx("input", {
      className: openSearch ? inputStyle.openStyle : inputStyle.closeStyle,
      type: "text",
      placeholder: "search",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }));
  };

  var NewIcon = function NewIcon(_ref2) {
    var size = _ref2.size,
        icon = _ref2.icon;
    return __jsx("div", {
      className: "inline m-2 md:m-2 cursor-pointer text-gray-700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      size: size,
      icon: icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }));
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, !openSearch && __jsx("div", {
    className: "flex flex-row h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx(SearchIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["user"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "user"), __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["heart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "favorites"), __jsx(NewIcon, {
    size: 15,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["cart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden lg:inline ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "(".concat(0, ")"))));
}

/* harmony default export */ __webpack_exports__["default"] = (IconsContainer);

/***/ })

})
//# sourceMappingURL=index.js.a823cce151a07dd3bb9c.hot-update.js.map