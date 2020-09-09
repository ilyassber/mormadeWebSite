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
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight2 */ "./node_modules/react-icons-kit/icomoon/arrowRight2.js");
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ScrollBlocks(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "flex-row justify-between items-center w-full h-full overflow-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
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
      lineNumber: 16,
      columnNumber: 9
    }
  }, " ", children);
}

function Block(_ref3) {
  var children = _ref3.children,
      changeTitle = _ref3.changeTitle,
      title = _ref3.title,
      changeItems = _ref3.changeItems;
  return __jsx("div", {
    className: "flex justify-between items-center w-full h-20 p-5 border-b border-gray-300 bg-white hover:bg-blue-200 hover:text-gray-900",
    onClick: function onClick() {
      return changeTitle(title);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories.reduce(function (acc, item) {
    acc.push(item.tag);
    return acc;
  }, [])),
      items = _useState2[0],
      setItems = _useState2[1]; // const items = categories.reduce((acc, item) => {
  //     acc.push(item.tag)
  //     return acc
  // },[])
  // console.log("reduce val ==> ", items)


  var changeTitle = function changeTitle(newTitle) {
    setTitle(newTitle);
    setItems(categories.find(function (item) {
      return item.tag === newTitle;
    }).sous_tags);
  };

  var changeItems = function changeItems(title, categories) {
    setItems(categories.find(function (item) {
      return item.tag === title;
    }).sous_tags);
  };

  return __jsx("nav", {
    className: "".concat(menuClick ? "transform translate-x-0 transition-all ease-out duration-500" : "transform -translate-x-full transition-all ease-out duration-500 ", " fixed flex-row w-11/12 z-30 h-full font-sans bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(TitleBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    className: "flex justify-center items-center p-5 h-full cursor-pointer",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "close"))), __jsx(ScrollBlocks, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, items.map(function (categorie, indx) {
    return __jsx(Block, {
      key: indx,
      changeTitle: changeTitle,
      title: categorie // categories={categories}
      // changeItems = {changeItems}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, categorie), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      icon: react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__["arrowRight2"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ })

})
//# sourceMappingURL=stories.js.978f310f3120afc0b9fd.hot-update.js.map