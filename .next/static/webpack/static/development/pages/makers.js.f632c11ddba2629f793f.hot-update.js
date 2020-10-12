webpackHotUpdate("static\\development\\pages\\makers.js",{

/***/ "./components/elements/nav-bar/navbar.js":
/*!***********************************************!*\
  !*** ./components/elements/nav-bar/navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperNav/UpperNav */ "./components/elements/nav-bar/upperNav/UpperNav.js");
/* harmony import */ var _middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleNav/MiddleNav */ "./components/elements/nav-bar/middleNav/MiddleNav.js");
/* harmony import */ var _categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoriesBar/categoriesBar */ "./components/elements/nav-bar/categoriesBar/categoriesBar.js");
/* harmony import */ var _bar_WelcomeBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bar/WelcomeBar */ "./components/elements/bar/WelcomeBar.js");
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\webweb\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var categoriesStyles = {
  fixed: "fixed top-0 hidden md:flex flex-col w-full animate-menuSlideDown border-b border-gray-300 bg-white",
  notFixed: "hidden md:flex flex-col w-full border-b border-gray-300 bg-white",
  showBrandName: "animate-smouthAppearance flex px-4",
  hideBrandName: "hidden"
};

function NavBar(_ref) {
  var changeMenuClicked = _ref.changeMenuClicked,
      openSearch = _ref.openSearch,
      openSearchClickHandler = _ref.openSearchClickHandler,
      categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links,
      home = _ref.home;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    categoriesBarStyle: categoriesStyles.notFixed,
    brandNameStyle: categoriesStyles.hideBrandName
  }),
      style = _useState[0],
      setStyle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showWelcomeBar = _useState2[0],
      setShowWelcomeBar = _useState2[1];

  var upperNavRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // const middleNavRef = useRef(null)
  // const WelcomeNavRef = useRef(null)
  // const categoriesNavRef = useRef(null)

  var changeWelcomeBarAppearance = function changeWelcomeBarAppearance(value) {
    setShowWelcomeBar(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function adjustNavsPosition(event) {
      if (upperNavRef.current) {
        if (upperNavRef.current.getBoundingClientRect().y >= -upperNavRef.current.getBoundingClientRect().height) setStyle({
          categoriesBarStyle: categoriesStyles.notFixed,
          brandNameStyle: categoriesStyles.hideBrandName
        });else setStyle({
          categoriesBarStyle: categoriesStyles.fixed,
          brandNameStyle: categoriesStyles.showBrandName
        });
      }
    }

    document.addEventListener('scroll', adjustNavsPosition);
    return function () {
      document.removeEventListener('scroll', adjustNavsPosition);
    };
  }, [showWelcomeBar]);
  return __jsx("nav", {
    className: "".concat(openSearch ? "hidden" : "", " z-10 flex flex-col w-ful"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: upperNavRef,
    className: "md:static z-10 w-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: " flex w-full md:w-4/5 mx-auto content-center h-12 py-5/12  pt-4 pb-2 bg-white",
    changeMenuClicked: changeMenuClicked,
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    home: home,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(_categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: style.categoriesBarStyle,
    max_shown: max_shown,
    categories: categories,
    brandNameStyle: style.brandNameStyle,
    changeWelcomeBarAppearance: changeWelcomeBarAppearance,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=makers.js.f632c11ddba2629f793f.hot-update.js.map