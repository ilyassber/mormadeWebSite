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
/* harmony import */ var _widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/utilities/wrapper */ "./components/widgets/utilities/wrapper.js");
/* harmony import */ var _elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/nav-bar/navbar */ "./components/elements/nav-bar/navbar.js");
/* harmony import */ var _elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/side-menu/sideMenu */ "./components/elements/side-menu/sideMenu.js");
/* harmony import */ var _elements_searchGate_searchGate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/searchGate/searchGate */ "./components/elements/searchGate/searchGate.js");
/* harmony import */ var _elements_blackFocusScreen_BlackFocusScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/blackFocusScreen/BlackFocusScreen */ "./components/elements/blackFocusScreen/BlackFocusScreen.js");
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api/get/getRequest */ "./services/api/get/getRequest.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\layout.js";

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

var Layout = function Layout(props) {
  // GLOBAL STATES
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openMenu = _useState[0],
      setOpenMenu = _useState[1]; // menu open/close state


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    page: "HOME",
    path: "/"
  }),
      selectedPage = _useState2[0],
      setSelectedPage = _useState2[1]; // current selected page


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openSearch = _useState3[0],
      setOpenSearch = _useState3[1]; // search open/close state


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    searchHistory: [],
    searchTarget: "",
    searchTrackedInputText: ""
  }),
      searchData = _useState4[0],
      _setSearchData = _useState4[1]; // saved search DATA 
  // STATE CALLBACKS
  // openSearch callBacks


  var changeOpenSearch = function changeOpenSearch() {
    setOpenSearch(!openSearch);
  }; // openMenu callBacks


  var changeOpenMenu = function changeOpenMenu() {
    setOpenMenu(!openMenu);
  }; // selectedPage callBacks


  var changeSelectedPage = function changeSelectedPage(link) {
    setSelectedPage(link);
  }; // DISPLAYED CONTENT 


  var Page = function Page() {
    return !openSearch && props.children;
  };

  var Menu = function Menu() {
    return openMenu && __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      menuClick: openMenu,
      changeMenuClicked: changeOpenMenu,
      currentPage: selectedPage,
      changeCurrentPage: changeSelectedPage,
      categories: categories,
      max_shown: 8,
      links: links,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    });
  };

  var NavigationBar = function NavigationBar() {
    return __jsx(_elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      changeMenuClicked: changeOpenMenu,
      openSearch: openSearch,
      openSearchClickHandler: changeOpenSearch,
      logo: "/logo.png",
      categories: props.tags,
      max_shown: 8,
      links: links,
      home: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    });
  };

  var SearchPage = function SearchPage() {
    return openSearch && __jsx(_elements_searchGate_searchGate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      changeOpenSearch: changeOpenSearch,
      searchData: searchData,
      setSearchData: function setSearchData(data) {
        return _setSearchData(data);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    });
  };

  var BlackFocusOff = function BlackFocusOff() {
    return openMenu && __jsx(_elements_blackFocusScreen_BlackFocusScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: changeOpenMenu,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    });
  };

  var SpacingTop = function SpacingTop() {
    return openSearch ? __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: " w-full bg-blue-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 22
      }
    }) : __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: "w-full h-48",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 64
      }
    });
  }; // RENDER THAT SHIT


  return __jsx("div", {
    className: "flex flex-col w-full bg-scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(Menu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx(BlackFocusOff, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx(NavigationBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx(SpacingTop, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx(SearchPage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.af8573e833d08b7ae61d.hot-update.js.map