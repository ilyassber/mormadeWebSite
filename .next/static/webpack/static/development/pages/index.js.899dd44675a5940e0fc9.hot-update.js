webpackHotUpdate("static\\development\\pages\\index.js",{

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

function Layout(_ref) {
  var children = _ref.children;

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
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuClick: menuClicked,
    changeMenuClicked: clickMenuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "w-full h-full bg-gray-700 bg-opacity-50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 13
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.899dd44675a5940e0fc9.hot-update.js.map