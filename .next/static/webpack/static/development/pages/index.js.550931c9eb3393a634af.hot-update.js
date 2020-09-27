webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/alpha-displayer/AlphaDisplayer.js":
/*!***************************************************************!*\
  !*** ./components/elements/alpha-displayer/AlphaDisplayer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlphaDisplayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\alpha-displayer\\AlphaDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function AlphaDisplayer(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      buttonText = _ref.buttonText,
      clickAction = _ref.clickAction;
  var textStyle = {
    titleStyle: "font-kumbhsans font-bold text-lg md:text-2xl  text-center break-words text-white",
    descriptionStyle: "mb-2 md:m-2 tracking-tight md:tracking-widest font-medium md:font-extrabold text-xs md:text-base text-center text-white",
    buttonStyle: "tracking-widest font-yantramanav text-sm font-bold "
  };
  return __jsx("div", {
    onClick: clickAction,
    className: "relative flex justify-center my-5 mx-5 cursor-pointer overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "absolute flex flex-col justify-end items-center p-2 w-full h-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: textStyle.titleStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, title), __jsx("p", {
    className: textStyle.descriptionStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, description), buttonText && buttonText !== "" && __jsx("div", {
    className: "hidden md:flex justify-center items-center px-5 py-2 mb-10 mt-2 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: textStyle.buttonStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 143
    }
  }, buttonText))));
}

/***/ }),

/***/ "./components/elements/bar/FromBar.js":
false,

/***/ "./components/elements/bar/WelcomeBar.js":
/*!***********************************************!*\
  !*** ./components/elements/bar/WelcomeBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\WelcomeBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WelcomeBar = function WelcomeBar(props) {
  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-orange-200 to-yellow-200 flex felx-wrap box-content overflow-hidden pt-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, ". \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 "))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeBar);

/***/ }),

/***/ "./components/elements/blackFocusScreen/BlackFocusScreen.js":
/*!******************************************************************!*\
  !*** ./components/elements/blackFocusScreen/BlackFocusScreen.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlackFocusScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\blackFocusScreen\\BlackFocusScreen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function BlackFocusScreen(_ref) {
  var onClick = _ref.onClick;
  return __jsx("div", {
    className: "absolute z-20 top-0 left-0 w-full h-full  bg-gray-900 bg-opacity-50",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./components/elements/nav-bar/categoriesBar/categoriesBar.js":
/*!********************************************************************!*\
  !*** ./components/elements/nav-bar/categoriesBar/categoriesBar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesBar; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sousCategoriesBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sousCategoriesBar */ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js");

var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\categoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function CategoriesBar(_ref) {
  var _this = this;

  var style = _ref.style,
      max_shown = _ref.max_shown,
      categories = _ref.categories;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    hovered: false,
    categorie: null
  }),
      hovredCategorie = _useState[0],
      setHovredCategorie = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      moreCategorie = _useState2[0],
      setmoreCategorie = _useState2[1];

  var show = function show() {
    setHovredCategorie(function (prevstate) {
      return _objectSpread({}, prevstate, {
        hovered: true
      });
    });
  };

  var hide = function hide() {
    setHovredCategorie(function (prevstate) {
      return _objectSpread({}, prevstate, {
        hovered: false
      });
    });
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center w-full shadow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "flex justify-center items-center h-12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, categories.map(function (categorie, index) {
    return (index < max_shown || moreCategorie) && __jsx("li", {
      key: index,
      className: "flex-shrink p-4 cursor-pointer font-lato text-base font-black hover:text-gray-500",
      onMouseEnter: function onMouseEnter() {
        return setHovredCategorie({
          hovered: true,
          categorie: categorie
        });
      },
      onMouseLeave: function onMouseLeave() {
        return setHovredCategorie({
          hovered: false,
          categorie: categorie
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 65
      }
    }, categorie.tag.toUpperCase());
  }), categories.length >= max_shown && __jsx("li", {
    className: "flex-shrink p-4 cursor-pointer font-bold font-amiri",
    key: max_shown,
    onMouseDown: function onMouseDown() {
      return setmoreCategorie(!moreCategorie);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 56
    }
  }, moreCategorie ? "less" : "more ..."))), __jsx(_sousCategoriesBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hovredCategorie: hovredCategorie,
    show: show,
    hide: hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
}

/***/ }),

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
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NavBar(_ref) {
  var changeMenuClicked = _ref.changeMenuClicked,
      openSearch = _ref.openSearch,
      openSearchClickHandler = _ref.openSearchClickHandler,
      categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links,
      home = _ref.home;
  return __jsx("nav", {
    className: "z-10 fixed flex flex-col w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-10 w-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex w-4/5 mx-auto content-center h-12 py-5/12  pt-4 pb-2 bg-white",
    changeMenuClicked: changeMenuClicked,
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    home: home,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "".concat(openSearch ? "" : "", " flex flex-col w-full transition-all ease-out duration-500"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: " hidden md:flex h-12 w-full px-2 bg-white",
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_bar_WelcomeBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: "hidden md:block w-full bg-white",
    max_shown: max_shown,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

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
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../logo */ "./components/logo/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\UpperNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function UpperNav(_ref) {
  var _this = this;

  var style = _ref.style,
      changeMenuClicked = _ref.changeMenuClicked,
      openSearch = _ref.openSearch,
      openSearchClickHandler = _ref.openSearchClickHandler,
      home = _ref.home,
      logo = _ref.logo;

  var MenuContainer = function MenuContainer(_ref2) {
    var style = _ref2.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "m-1 md:hidden cursor-pointer text-gray-700",
      onClick: changeMenuClicked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__["ic_menu"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_5__["Brand"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }));
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(MenuContainer, {
    style: "flex items-center justify-start h-full md:flex-1 h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(SiteNameContainer, {
    style: "flex md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex flex-row md:flex-1 justify-center md:justify-end items-center w-full h-full",
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UpperNav);

/***/ }),

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
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\iconsContainer\\iconsContainer.js";

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

  var NewIcon = function NewIcon(_ref2) {
    var className = _ref2.className,
        src = _ref2.src,
        clickHandler = _ref2.clickHandler;
    return __jsx("div", {
      className: "inline m-2 md:m-2 flex flex-wrap content-center cursor-pointer text-gray-700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: className,
      onClick: clickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "h-full w-full flex items-center justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }))));
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(!openSearch ? "flex" : "hidden", " flex-row h-full"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/loop.svg",
    clickHandler: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/avatar.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/heart.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/cart.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IconsContainer);

/***/ }),

/***/ "./components/elements/searchGate/searchGate.js":
/*!******************************************************!*\
  !*** ./components/elements/searchGate/searchGate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchGate; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alpha-displayer/AlphaDisplayer */ "./components/elements/alpha-displayer/AlphaDisplayer.js");
/* harmony import */ var _widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/search/searchWidget */ "./components/widgets/search/searchWidget.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ikons/close */ "./node_modules/react-icons-kit/ikons/close.js");
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\searchGate\\searchGate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // history widget : used inside the history component 

function NewHistoryItem(_ref) {
  var title = _ref.title,
      deleteOneHistory = _ref.deleteOneHistory;
  var text = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return __jsx("div", {
    className: "flex flex-row items-center justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("p", {
    ref: text,
    className: " text-md ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, title));
}

function SearchGate(_ref2) {
  var _this = this;

  var changeOpenSearch = _ref2.changeOpenSearch,
      searchData = _ref2.searchData,
      setSearchData = _ref2.setSearchData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_objectSpread({}, searchData, {}, {
    inputFocus: true
  })),
      data = _useState[0],
      setData = _useState[1]; // searchGate data --> check searchData state in "layout.js"
  // STATE CALLBACKS
  // turn search input focus OFF


  var InputFocusOff = function InputFocusOff() {
    setData(_objectSpread({}, data, {
      inputFocus: false
    }));
  }; // submit new target to search for + add to search history + turn off input focus


  var changeSearchTarget = function changeSearchTarget(searchTarget) {
    if (searchTarget !== "") {
      setData(_objectSpread({}, data, {
        searchTarget: searchTarget
      }));
      addSearchHistoryItem(searchTarget);
      InputFocusOff();
    }
  }; // track text on search input  "not used for now" 


  var updateTrackInputText = function updateTrackInputText(trackedInputText) {
    if (trackedInputText !== "") setData(_objectSpread({}, data, {
      searchTrackedInputText: trackedInputText
    }));
  }; // add item to search history


  var addSearchHistoryItem = function addSearchHistoryItem(historyItem) {
    if (historyItem !== "") {
      var newSearchHistory = data.searchHistory;
      newSearchHistory.push(historyItem);
      setData(_objectSpread({}, data, {
        searchHistory: newSearchHistory
      }));
    }
  }; // delete item from search history


  var deleteSearchHistoryItem = function deleteSearchHistoryItem(historyItem) {
    var newSearchHistory = [];
    data.searchHistory.forEach(function (item) {
      if (item !== historyItem) newSearchHistory.push(item);
    });
    setData(_objectSpread({}, data, {
      searchHistory: newSearchHistory
    }));
  }; // clear search history


  var clearSearchHistory = function clearSearchHistory() {
    setData(_objectSpread({}, data, {
      searchHistory: []
    }));
  }; // saves search data and exit -> updates searchData state in "layout.js" 


  var UpdateAndExit = function UpdateAndExit() {
    setSearchData(data);
    changeOpenSearch();
  }; // UTILITIES
  // close icon


  var CloseIcon = function CloseIcon() {
    return __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      className: "cursor-pointer text-gray-600 hover:text-gray-700",
      onClick: UpdateAndExit,
      size: 40,
      icon: react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__["close"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    });
  }; // history search component


  var RecentSearchCard = function RecentSearchCard(_ref3) {
    var style = _ref3.style,
        maxResultNumber = _ref3.maxResultNumber;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, "Recent Search"), __jsx("ul", {
      className: "w-full flex flex-col justify-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, data.searchHistory.map(function (item, indx) {
      return indx < maxResultNumber && __jsx("li", {
        key: indx,
        className: "cursor-pointer whitespace-no-wrap text-md hover:underline",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 47
        }
      }, __jsx(NewHistoryItem, {
        title: item,
        deleteOneHistory: deleteSearchHistoryItem,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }
      }));
    })), data.searchHistory.length > 0 && __jsx("label", {
      className: " text-sm text-gray-600 hover:text-gray-900 whitespace-no-wrap cursor-pointer my-2",
      onClick: clearSearchHistory,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 53
      }
    }, "Delete History"), "        ");
  };

  var AnnouceCard = function AnnouceCard(_ref4) {
    var style = _ref4.style,
        cardTitle = _ref4.cardTitle,
        titleLinks = _ref4.titleLinks;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, cardTitle), __jsx("ul", {
      className: "flex flex-col justify-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, titleLinks.map(function (title, indx) {
      return __jsx("li", {
        key: indx,
        className: "cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, title);
    })));
  }; // left part


  var LeftContentCard = function LeftContentCard(_ref5) {
    var style = _ref5.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, __jsx(RecentSearchCard, {
      style: "w-full flex flex-col items-start cursor-default",
      maxResultNumber: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }), __jsx(AnnouceCard, {
      style: "w-full flex flex-col items-start mt-8 cursor-default",
      cardTitle: "Products",
      titleLinks: ["Leatest products", "Best selling products", "Season products"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }), __jsx(AnnouceCard, {
      style: "w-full flex flex-col items-start mt-8 cursor-default",
      cardTitle: "Stories",
      titleLinks: ["every stitch.. stitched with love", "braid from atlas mountains", "desert music"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }));
  }; // default content displayed in case there is no word to search for  


  var DefaultContentCard = function DefaultContentCard() {
    return __jsx("div", {
      className: "flex flex-row justify-start items-start mt-16 w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, __jsx(LeftContentCard, {
      style: "flex flex-col justify-center w-4/12 px-4 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "flex flex-row justify-start w-8/12 h-full ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex flex-col justify-start items-start w-2/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-col justify-start items-start w-10/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "images/Articles/cover-04.jpg",
      title: "The Lovely Place",
      description: "have u ever been in a place where .. .",
      buttonText: "",
      clickAction: function clickAction() {
        return console.log(" SHIT CLICKED ");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }))));
  }; // content displayed to show search result


  var ResultContentCard = function ResultContentCard() {
    return __jsx("div", {
      className: "flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start mt-16 w-full h-180 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "flex justify-center w-8/12 h-full ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "w-5/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "",
      description: "",
      buttonText: "",
      image: "images/Articles/cover-5.jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }))));
  }; // the entire default search displayed


  var DefaultBody = function DefaultBody() {
    return __jsx("div", {
      className: "flex flex-col items-center justify-start w-9/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: "w-full h-12 mt-4",
      clickHandler: changeSearchTarget,
      inputFocus: data.inputFocus,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }), __jsx(DefaultContentCard, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }));
  }; // the entire search result displayed


  var ResultBody = function ResultBody() {
    return __jsx("div", {
      className: "flex flex-col items-center justify-start w-10/12 bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: "w-full h-12 my-0 bg-white ",
      clickHandler: submitInputText,
      inputFocus: data.inputFocus,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }), __jsx(ResultContentCard, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }));
  }; // CONPONENTS
  // upper bar : contains exit button


  var TopBar = function TopBar() {
    return __jsx("div", {
      className: "flex justify-end w-full p-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }
    }, __jsx(CloseIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }
    }));
  }; // search body : switch between search and default mode


  var MainBody = function MainBody() {
    return __jsx(DefaultBody, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }
    }) // <SearchResultBody/>
    ;
  }; // RENDER THAT SHIT


  return __jsx("div", {
    className: "z-50 w-full flex flex-col items-center justify-start bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, __jsx(TopBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }), __jsx(MainBody, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }));
}

/***/ }),

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
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\layout.js";
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
  var _this = this;

  var children = _ref.children;

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


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
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
    return !openSearch && children;
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
        lineNumber: 128,
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
      categories: categories,
      max_shown: 8,
      links: links,
      home: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
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
        lineNumber: 151,
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
        lineNumber: 158,
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
        lineNumber: 162,
        columnNumber: 22
      }
    }) : __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: "w-full h-48",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 64
      }
    });
  }; // RENDER THAT SHIT


  return __jsx("div", {
    className: "flex flex-col w-full bg-xw-100 bg-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }), __jsx(BlackFocusOff, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx(NavigationBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx(SpacingTop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx(SearchPage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx(Page, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/logo/Intro.js":
false,

/***/ "./components/logo/index.js":
/*!**********************************!*\
  !*** ./components/logo/index.js ***!
  \**********************************/
/*! exports provided: Brand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand */ "./components/logo/Brand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return _Brand__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/widgets/search/searchWidget.js":
/*!***************************************************!*\
  !*** ./components/widgets/search/searchWidget.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\search\\searchWidget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SearchWidget(_ref) {
  var style = _ref.style,
      clickHandler = _ref.clickHandler,
      inputFocus = _ref.inputFocus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      data = _useState[0],
      setData = _useState[1]; // ref for input


  var formInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // after every render apply input focus if needed 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (inputFocus) formInput.current.focus();
  }, []); // traked text

  var writeData = function writeData(event) {
    setData(event.target.value);
  }; // submit tracked text


  var submitdata = function submitdata() {
    setData("");
    clickHandler(data);
    event.preventDefault();
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "flex justify-center items-center border-gray-800 border-b-2",
    onSubmit: submitdata,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-8 h-8 mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("input", {
    ref: formInput,
    className: " h-full w-full trasform transition-all ease-out duration-700 focus:placeholder-gray-500 placeholder-gray-600 text-3xl  text-center outline-none ",
    value: data,
    onChange: writeData,
    type: "text",
    placeholder: "SEARCH",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "flex justify-center items-center h-8 w-8 mx-2 overflow-hidden focus:outline-none cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "w-full object-cover object-center",
    src: "icons/loop.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./node_modules/react-icons-kit/ikons/close.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-icons-kit/ikons/close.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = void 0;
var close = {
  "viewBox": "0 0 64 64",
  "children": [{
    "name": "g",
    "attribs": {
      "id": "CLOSE_1_",
      "enable-background": "new    "
    },
    "children": [{
      "name": "g",
      "attribs": {
        "id": "CLOSE"
      },
      "children": [{
        "name": "g",
        "attribs": {
          "id": "CLOSE"
        },
        "children": [{
          "name": "g",
          "attribs": {},
          "children": [{
            "name": "g",
            "attribs": {},
            "children": [{
              "name": "path",
              "attribs": {
                "d": "M36.243,32l11.879-11.879C48.664,19.579,49,18.828,49,18c0-1.657-1.343-3-3-3c-0.828,0-1.578,0.336-2.121,0.879\r\n\t\t\t\tL32,27.757L20.121,15.879C19.578,15.336,18.828,15,18,15c-1.657,0-3,1.343-3,3c0,0.828,0.336,1.578,0.879,2.121L27.757,32\r\n\t\t\t\tL15.879,43.879C15.336,44.422,15,45.172,15,46c0,1.657,1.343,3,3,3c0.828,0,1.578-0.336,2.121-0.879L32,36.243l11.879,11.879\r\n\t\t\t\tC44.422,48.664,45.172,49,46,49c1.657,0,3-1.343,3-3c0-0.828-0.336-1.578-0.879-2.121L36.243,32z"
              },
              "children": [{
                "name": "path",
                "attribs": {
                  "d": "M36.243,32l11.879-11.879C48.664,19.579,49,18.828,49,18c0-1.657-1.343-3-3-3c-0.828,0-1.578,0.336-2.121,0.879\r\n\t\t\t\tL32,27.757L20.121,15.879C19.578,15.336,18.828,15,18,15c-1.657,0-3,1.343-3,3c0,0.828,0.336,1.578,0.879,2.121L27.757,32\r\n\t\t\t\tL15.879,43.879C15.336,44.422,15,45.172,15,46c0,1.657,1.343,3,3,3c0.828,0,1.578-0.336,2.121-0.879L32,36.243l11.879,11.879\r\n\t\t\t\tC44.422,48.664,45.172,49,46,49c1.657,0,3-1.343,3-3c0-0.828-0.336-1.578-0.879-2.121L36.243,32z"
                },
                "children": []
              }]
            }]
          }]
        }]
      }]
    }]
  }]
};
exports.close = close;

/***/ })

})
//# sourceMappingURL=index.js.550931c9eb3393a634af.hot-update.js.map