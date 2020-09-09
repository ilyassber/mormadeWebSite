webpackHotUpdate("static\\development\\pages\\regions.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/nav-bar/navbar */ "./components/elements/nav-bar/navbar.js");
/* harmony import */ var _elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/side-menu/sideMenu */ "./components/elements/side-menu/sideMenu.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // fake data 

var categories = [{
  tag: "clothes",
  sous_tags: ["shoes", "t-shirts", "jeans", "socks"],
  tag_image: "images/tags/clothes/clothes-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}];
var links = [{
  page: 'MAKERS',
  path: '/makers'
}, {
  page: 'REGIONS',
  path: '/regions'
}, {
  page: 'STORIES',
  path: '/stories'
}];

function BlackFocusScreen(_ref) {
  var display = _ref.display,
      onClick = _ref.onClick;
  return __jsx("div", {
    className: display ? "absolute z-20 top-0 left-0 w-full h-full transition ease-out duration-500 bg-gray-900 bg-opacity-50" : "hidden z-20 bg-opacity-100",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  });
}

function Layout(_ref2) {
  var children = _ref2.children;

  var clickMenuIcon = function clickMenuIcon() {
    setMenuClicked(!menuClicked);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuClicked = _useState[0],
      setMenuClicked = _useState[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuClick: menuClicked,
    changeMenuClicked: clickMenuIcon,
    categories: categories,
    max_shown: 8,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(BlackFocusScreen, {
    display: menuClicked,
    onClick: clickMenuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx(_elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeMenuClicked: clickMenuIcon,
    logo: "/logo.png",
    categories: categories,
    max_shown: 8,
    links: links,
    home: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=regions.js.20fe5ac6846b8378de4b.hot-update.js.map