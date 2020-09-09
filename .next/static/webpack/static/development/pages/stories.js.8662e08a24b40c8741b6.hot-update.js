webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./components/elements/side-menu/sideMenu.js":
/*!***************************************************!*\
  !*** ./components/elements/side-menu/sideMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/sideMenu.module.css */ "./components/elements/side-menu/styles/sideMenu.module.css");
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ScrollBlocks(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "flex-row justify-between items-center w-full h-full overflow-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, " ", children);
}

function TitleBlock(_ref2) {
  var children = _ref2.children;
  return __jsx("div", {
    className: "flex justify-between items-center w-full h-16 border-b border-gray-300 bg-gray-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, " ", children);
}

function Block(_ref3) {
  var children = _ref3.children;
  return __jsx("div", {
    className: "flex justify-start items-center w-full h-20 p-5 border-b border-gray-300 bg-white hover:bg-blue-200 hover:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, " ", children);
}

function SideMenu(_ref4) {
  var _this = this;

  var menuClick = _ref4.menuClick,
      changeMenuClicked = _ref4.changeMenuClicked,
      currentPage = _ref4.currentPage,
      changeCurrentPage = _ref4.changeCurrentPage,
      categories = _ref4.categories,
      max_shown = _ref4.max_shown,
      links = _ref4.links;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentPage.page),
      title = _useState[0],
      setTitle = _useState[1]; // nav title


  var changeTitle = function changeTitle(newTitle) {
    setTitle(newTitle);
  };

  return __jsx("nav", {
    className: "".concat(menuClick ? "transform translate-x-0 transition-all ease-out duration-500" : "transform -translate-x-full transition-all ease-out duration-500 ", " fixed flex-row w-11/12 z-30 h-full font-sans bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(TitleBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "flex justify-center items-center p-5 h-full cursor-pointer",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "close"))), __jsx(ScrollBlocks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, categories.map(function (categorie, indx) {
    return __jsx(Block, {
      key: indx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, categorie.tag));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ })

})
//# sourceMappingURL=stories.js.8662e08a24b40c8741b6.hot-update.js.map