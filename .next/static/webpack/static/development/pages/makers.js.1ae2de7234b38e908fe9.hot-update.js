webpackHotUpdate("static\\development\\pages\\makers.js",{

/***/ "./components/elements/nav-bar/upperNav/UpperNav.js":
/*!**********************************************************!*\
  !*** ./components/elements/nav-bar/upperNav/UpperNav.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsContainer/iconsContainer */ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_menu */ "./node_modules/react-icons-kit/md/ic_menu.js");
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\UpperNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function UpperNav(_ref) {
  var _this = this;

  var changeMenuClicked = _ref.changeMenuClicked,
      home = _ref.home,
      logo = _ref.logo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openSearch = _useState[0],
      setOpenSearch = _useState[1]; // search icon for small screens -> expanded or closed


  var openSearchClickHandler = function openSearchClickHandler() {
    setOpenSearch(!openSearch); // open/close the search component for small screens
  };

  var MenuContainer = function MenuContainer(_ref2) {
    var style = _ref2.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "m-1 md:hidden cursor-pointer text-gray-700",
      onClick: changeMenuClicked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__["ic_menu"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    })));
  };

  var SiteNameContainer = function SiteNameContainer(_ref3) {
    var style = _ref3.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: home,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "text-lg font-bold whitespace-no-wrap text-gray-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, "Mor Made")));
  };

  return __jsx("div", {
    className: "flex w-full h-12 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, !openSearch && __jsx(MenuContainer, {
    style: "flex items-center justify-start h-full flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }), !openSearch && __jsx(SiteNameContainer, {
    style: "flex justify-center items-center flex-1 h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }), __jsx(_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex flex-1 justify-center md:justify-end items-center  h-full w-full",
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UpperNav);

/***/ })

})
//# sourceMappingURL=makers.js.1ae2de7234b38e908fe9.hot-update.js.map