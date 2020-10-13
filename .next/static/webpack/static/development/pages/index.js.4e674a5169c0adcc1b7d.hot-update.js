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
/* harmony import */ var _elements_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/footer/footer */ "./components/elements/footer/footer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\webweb\\components\\layout.js";

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
  console.log("LYOUT RENDERRR"); // GLOBAL STATES

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      scroll = _useState[0],
      setScroll = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openMenu = _useState2[0],
      setOpenMenu = _useState2[1]; // menu open/close state


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    page: "HOME",
    path: "/"
  }),
      selectedPage = _useState3[0],
      setSelectedPage = _useState3[1]; // current selected page


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openSearch = _useState4[0],
      setOpenSearch = _useState4[1]; // search open/close state


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    searchHistory: [],
    searchTarget: "",
    searchTrackedInputText: ""
  }),
      searchData = _useState5[0],
      _setSearchData = _useState5[1]; // saved search DATA 


  var layoutRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // STATE CALLBACKS
  // openSearch callBacks

  var changeOpenSearch = function changeOpenSearch() {
    setOpenSearch(!openSearch);
  }; // openMenu callBacks


  var changeOpenMenu = function changeOpenMenu() {
    setOpenMenu(!openMenu);
  }; // selectedPage callBacks


  var changeSelectedPage = function changeSelectedPage(link) {
    setSelectedPage(link);
  }; // useEffect(
  //     () => {
  //         useLockBodyScroll()
  //     }
  //     , []
  // )


  useLockBodyScroll(); // Hook
  // function useLockBodyScroll() {
  //     useEffect(() => {
  //      // Get original body overflow
  //      const originalStyle = window.getComputedStyle(document.body).overflow;
  //     //  Prevent scrolling on mount
  //      if (openSearch){
  //         document.body.style.overflow = 'hidden';
  //      setScroll(true)
  //     } else
  //     {         setScroll(false)
  //             document.body.style.overflow = originalStyle
  //     }
  //     //  Re-enable scrolling when component unmounts
  //      return () => document.body.style.overflow = originalStyle;
  //      }, []); // Empty array ensures effect is only run on mount and unmount
  //   }

  function useLockBodyScroll() {
    // Get original body overflow
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      if (layoutRef.current) {
        // Prevent scrolling on mount
        layoutRef.current.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts
      }
    }, []);
  } // DISPLAYED CONTENT 


  var FooterBar = function FooterBar() {
    return (// <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>
      __jsx(_elements_footer_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        categories: categories,
        max_shown: 5,
        links: links,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }
      }) // </div>

    );
  };

  var Page = function Page() {
    return (// <div className={`${openSearch ? "hidden" : "" } w-full h-full`}>
      props.children // </div>

    );
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
        lineNumber: 190,
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
        lineNumber: 201,
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
        lineNumber: 213,
        columnNumber: 23
      }
    });
  };

  var BlackFocusOff = function BlackFocusOff() {
    return openMenu && __jsx(_elements_blackFocusScreen_BlackFocusScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: changeOpenMenu,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 23
      }
    });
  };

  var SpacingTop = function SpacingTop() {
    return __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: "w-full absolute top-0 h-48",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }
    });
  }; // RENDER THAT SHIT


  return __jsx("div", {
    ref: layoutRef,
    className: "flex flex-col w-full h-full overflow-scroll bg-scroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx(Menu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }), __jsx(BlackFocusOff, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }), __jsx(NavigationBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }), __jsx(SpacingTop, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }), __jsx(SearchPage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }), __jsx(Page, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }), __jsx(FooterBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.4e674a5169c0adcc1b7d.hot-update.js.map