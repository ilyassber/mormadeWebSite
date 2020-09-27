(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/elements/MakersEntry/MakersEntry.js":
/*!********************************************************!*\
  !*** ./components/elements/MakersEntry/MakersEntry.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakersEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\MakersEntry\\MakersEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function MakersEntry() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Makers Entry");
}

/***/ }),

/***/ "./components/elements/RegionsEntry/RegionsEntry.js":
/*!**********************************************************!*\
  !*** ./components/elements/RegionsEntry/RegionsEntry.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegionsEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\RegionsEntry\\RegionsEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function RegionsEntry() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, "Regions Entry");
}

/***/ }),

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

/***/ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js":
/*!************************************************************************!*\
  !*** ./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\sousCategoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SousCategoriesBar(_ref) {
  var _this = this;

  var show = _ref.show,
      hide = _ref.hide,
      hovredCategorie = _ref.hovredCategorie;

  var SousCategoriesContent = function SousCategoriesContent() {
    return __jsx("div", {
      className: "flex justify-between flex-shrink-0 w-full h-full pt-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "flex items-start  flex-1 flex-shrink-0 mr-5 ml-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("ul", {
      className: "flex flex-col items-start justify-start w-full p-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, hovredCategorie.categorie && hovredCategorie.categorie.sous_tags.map(function (sous_tag, index) {
      return __jsx("li", {
        className: "w-full mt-1 cursor-pointer text-center hover:text-gray-500",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }
      }, sous_tag);
    }))), __jsx("div", {
      className: "flex  flex-col items-center flex-1 flex-shrink-0 ml-5 mr-5 border-l border-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex items-end justify-center w-full h-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "HIGH LIGHT")), __jsx("div", {
      className: "h-64 w-48 m-10 rounded-full overflow-hidden shadow-2xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, hovredCategorie.categorie && __jsx("img", {
      className: "object-contain",
      src: hovredCategorie.categorie.tag_image,
      alt: hovredCategorie.categorie.tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 51
      }
    }))));
  };

  return __jsx("div", {
    className: hovredCategorie.hovered ? " transform h-96 transition-all ease-out duration-100 flex flex-col items-center w-full shadow bg-white" : "shadow transform h-0 transition-all ease-out duration-100 w-full overflow-hidden bg-white",
    onMouseEnter: show,
    onMouseLeave: hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-75",
    image: "/images/Styles/style2.jpg",
    height: "h-full",
    imageStyle: "opacity-25",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl font-amiri font-bold text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "SOUS CATEGORIES")));
}

/* harmony default export */ __webpack_exports__["default"] = (SousCategoriesBar);

/***/ }),

/***/ "./components/elements/nav-bar/middleNav/MiddleNav.js":
/*!************************************************************!*\
  !*** ./components/elements/nav-bar/middleNav/MiddleNav.js ***!
  \************************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\middleNav\\MiddleNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SearchWidget() {
  return __jsx("form", {
    className: "flex justify-end h-8 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "h-full w-8 outline-none  border-gray-500 focus:outline-none",
    onClick: function onClick(e) {
      e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("input", {
    className: "h-full w-16 lg:w-24 outline-none border-b text-gray-900 border-gray-500 text-lg text-center transform transition-all ease-out duration-500 lg:focus:w-40",
    type: "text",
    placeholder: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

function MiddleNav(_ref) {
  var _this = this;

  var style = _ref.style,
      links = _ref.links;
  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full flex content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), " ", __jsx("ul", {
    className: "flex flex-1 justify-center items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, links.map(function (link, indx) {
    return __jsx("li", {
      className: "m-8 cursor-pointer font-lato text-sm font-bold tracking-wide text-gray-900 hover:text-gray-700",
      key: indx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 48
      }
    }, link.page)));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MiddleNav);

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
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FrameSlide(_ref) {
  var children = _ref.children,
      show = _ref.show;
  return __jsx("div", {
    className: "".concat(show ? "transform -translate-x-full transition-all ease-out duration-400" : "transform translate-x-0 transition-all ease-out duration-300", " bg-indigo-400"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
}

function ScrollBlocks(_ref2) {
  var children = _ref2.children,
      changeSwap = _ref2.changeSwap;
  return __jsx("div", {
    className: "flex-row justify-between items-center w-full h-full overflow-scroll",
    onClick: changeSwap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, " ", children);
}

function TitleBlock(_ref3) {
  var children = _ref3.children,
      color = _ref3.color,
      height = _ref3.height;
  return __jsx("div", {
    className: "flex justify-between items-center w-full ".concat(height ? height : "h-16", " border-b ").concat(color ? color : "border-gray-300", " bg-gray-100"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " ", children);
}

function Block(_ref4) {
  var children = _ref4.children,
      changeTitle = _ref4.changeTitle,
      title = _ref4.title,
      changeItems = _ref4.changeItems;
  return __jsx("div", {
    className: "flex justify-between items-center w-full h-20 p-5 border-b border-gray-300  hover:bg-blue-200 hover:text-gray-900",
    onClick: function onClick() {
      return changeTitle(title);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, " ", children);
}

function SideMenu(_ref5) {
  var _this = this;

  var menuClick = _ref5.menuClick,
      changeMenuClicked = _ref5.changeMenuClicked,
      currentPage = _ref5.currentPage,
      changeCurrentPage = _ref5.changeCurrentPage,
      categories = _ref5.categories,
      max_shown = _ref5.max_shown,
      links = _ref5.links;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      initAppearance = _useState[0],
      setInitAppearance = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      swap = _useState2[0],
      setSwap = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("CATEGORIES"),
      title = _useState3[0],
      setTitle = _useState3[1]; // nav title


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories.reduce(function (acc, item) {
    acc.push(item.tag);
    return acc;
  }, [])),
      items = _useState4[0],
      setItems = _useState4[1];

  var changeTitle = function changeTitle(newTitle) {
    setTitle(newTitle);
    changeItems(newTitle, categories);
  };

  var changeItems = function changeItems(title, categories) {
    var listFound = categories.find(function (item) {
      return item.tag === title;
    });
    if (listFound) setItems(listFound.sous_tags);else {
      setTitle("CATEGORIES");
      setItems(categories.reduce(function (acc, item) {
        acc.push(item.tag);
        return acc;
      }, []));
    }
  };

  var changeSwap = function changeSwap() {
    setSwap(!swap);
  };

  return __jsx("nav", {
    className: "".concat(menuClick ? "transform translate-x-0 transition-all ease-out duration-500" : "transform -translate-x-full transition-all ease-out duration-0 ", " fixed top-0 -left-full  flex-row w-11/12 z-30 h-full font-sans bg-white"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, " ", __jsx(TitleBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, currentPage.page)), __jsx("div", {
    className: "flex justify-center items-center p-5 h-full cursor-pointer",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "close"))), __jsx(TitleBlock, {
    color: "bg-white",
    height: "h-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center h-full w-full p-5 cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, title))), __jsx(ScrollBlocks, {
    changeSwap: changeSwap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, items.map(function (categorie, indx) {
    return __jsx(Block, {
      key: indx,
      changeTitle: changeTitle,
      title: categorie,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 25
      }
    }, categorie), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      icon: react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__["arrowRight2"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/elements/side-menu/styles/sideMenu.module.css":
/*!******************************************************************!*\
  !*** ./components/elements/side-menu/styles/sideMenu.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/graphics/imageCover/Cover.js":
/*!*************************************************!*\
  !*** ./components/graphics/imageCover/Cover.js ***!
  \*************************************************/
/*! exports provided: default, Cover1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover1", function() { return Cover1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\imageCover\\Cover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Cover(_ref) {
  var children = _ref.children,
      image = _ref.image,
      height = _ref.height,
      style = _ref.style,
      imageStyle = _ref.imageStyle;
  return __jsx("div", {
    className: "relative " + style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "z-10 " + style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, children), __jsx("div", {
    className: "z-0 absolute top-0 left-0 w-full h-full overflow-hidden ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "".concat(height, " w-full object-cover object-center ").concat(imageStyle),
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })));
}
function Cover1(_ref2) {
  var image = _ref2.image,
      title = _ref2.title,
      description = _ref2.description,
      buttonText = _ref2.buttonText;
  return __jsx("div", {
    className: "relative flex overflow-hidden my-4 mx-4 bg-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "object-cover object-center",
    src: image,
    alt: "image cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "absolute flex justify-center items-end w-full h-full b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col justify-center items-center  w-10/12 h-4/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "text-white text-7xl font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, title), __jsx("p", {
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, description), __jsx("div", {
    className: "flex justify-center items-center m-5 bg-white w-4/12 h-2/12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 99
    }
  }, buttonText)))));
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

/***/ "./components/logo/Brand.js":
/*!**********************************!*\
  !*** ./components/logo/Brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\logo\\Brand.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Brand = function Brand(props) {
  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container h-full w-auto content-center mx-auto flex flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "font-raleway font-bold text-2xl text-gray-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "MORMADE")));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

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

/***/ "./components/widgets/product/ProductGrid.js":
/*!***************************************************!*\
  !*** ./components/widgets/product/ProductGrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\product\\ProductGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ProductGrid = function ProductGrid(props) {
  var content = __jsx("article", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container h-auto w-full content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full bg-yellow-300 pb-1/1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.images[0].path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "absolute top-0 right-0 h-10 w-10 m-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/heart-white.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 78
    }
  }))), __jsx("div", {
    className: "h-auto w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "leading-tight font-sans font-medium text-base text-gray-900 pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, props.data.name), __jsx("strong", {
    className: "leading-tight font-sans font-normal text-sm text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.owner), __jsx("p", {
    className: "leading-tight font-sans font-semibold text-lg text-gray-900",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "MAD " + props.data.price))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid);

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

/***/ "./components/widgets/utilities/wrapper.js":
/*!*************************************************!*\
  !*** ./components/widgets/utilities/wrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\utilities\\wrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Wrapper(_ref) {
  var children = _ref.children,
      style = _ref.style,
      onClick = _ref.onClick;
  return __jsx("div", {
    className: style,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/camel-case/camel-case.js":
/*!***********************************************!*\
  !*** ./node_modules/camel-case/camel-case.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(/*! upper-case */ "./node_modules/upper-case/upper-case.js")
var noCase = __webpack_require__(/*! no-case */ "./node_modules/no-case/no-case.js")

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/elements/side-menu/styles/sideMenu.module.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".sideMenu_container__1SxfO {\n  width: 100%;\n  height: 16rem;\n  border-width: 1px;\n  --border-opacity: 1;\n  border-color: #edf2f7;\n  border-color: rgba(237, 242, 247, var(--border-opacity));\n  --bg-opacity: 1;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, var(--bg-opacity));\n}", "",{"version":3,"sources":["C:/Users/1337/Documents/WorkSpace/ecomart/dev/mormadeWebSite/components/elements/side-menu/styles/sideMenu.module.css","C:/Users/1337/Documents/WorkSpace/ecomart/dev/mormadeWebSite/<no source>"],"names":[],"mappings":"AAAA;ECAA,WAAA;EAAA,aAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,qBAAA;EAAA,wDAAA;EAAA,eAAA;EAAA,sBAAA;EAAA,wDAAA;ADEA","file":"sideMenu.module.css","sourcesContent":[".container {\r\n    @apply  w-full h-64  border border-gray-200 bg-white;\r\n}",null]}]);
// Exports
exports.locals = {
	"container": "sideMenu_container__1SxfO"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/lower-case/lower-case.js":
/*!***********************************************!*\
  !*** ./node_modules/lower-case/lower-case.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5C1337%5CDocuments%5CWorkSpace%5Cecomart%5Cdev%5CmormadeWebSite%5Cpages%5Cindex.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5C1337%5CDocuments%5CWorkSpace%5Cecomart%5Cdev%5CmormadeWebSite%5Cpages%5Cindex.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/no-case/no-case.js":
/*!*****************************************!*\
  !*** ./node_modules/no-case/no-case.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(/*! lower-case */ "./node_modules/lower-case/lower-case.js")

var NON_WORD_REGEXP = __webpack_require__(/*! ./vendor/non-word-regexp */ "./node_modules/no-case/vendor/non-word-regexp.js")
var CAMEL_CASE_REGEXP = __webpack_require__(/*! ./vendor/camel-case-regexp */ "./node_modules/no-case/vendor/camel-case-regexp.js")
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(/*! ./vendor/camel-case-upper-regexp */ "./node_modules/no-case/vendor/camel-case-upper-regexp.js")

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),

/***/ "./node_modules/no-case/vendor/camel-case-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/no-case/vendor/camel-case-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),

/***/ "./node_modules/no-case/vendor/camel-case-upper-regexp.js":
/*!****************************************************************!*\
  !*** ./node_modules/no-case/vendor/camel-case-upper-regexp.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),

/***/ "./node_modules/no-case/vendor/non-word-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/no-case/vendor/non-word-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-icons-kit/Icon.js":
/*!**********************************************!*\
  !*** ./node_modules/react-icons-kit/Icon.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withBaseIcon = exports.Icon = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ./SvgIcon */ "./node_modules/react-icons-kit/SvgIcon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(props) {
  var style = props.style,
      className = props.className,
      icon = props.icon,
      size = props.size,
      tag = props.tag,
      others = _objectWithoutProperties(props, ["style", "className", "icon", "size", "tag"]); //eslint-disable-line


  var Tag = tag;
  return _react.default.createElement(Tag, _extends({}, others, {
    style: _objectSpread({
      display: 'inline-block'
    }, style),
    className: className
  }), _react.default.createElement(_SvgIcon.default, {
    size: props.size,
    icon: props.icon,
    title: props.title
  }));
};

exports.Icon = Icon;

var withBaseIcon = function withBaseIcon(defaultProps) {
  return function (props) {
    var propsToUse = _objectSpread({}, defaultProps);

    return _react.default.createElement(Icon, _extends({}, propsToUse, props));
  };
};

exports.withBaseIcon = withBaseIcon;
Icon.defaultProps = {
  size: 16,
  fill: 'currentColor',
  tag: 'i'
};
Icon.propTypes = {
  icon: _propTypes.default.object.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  style: _propTypes.default.object,
  tag: _propTypes.default.oneOf(['i', 'span', 'div']),
  className: _propTypes.default.string
};
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-icons-kit/SvgIcon.js":
/*!*************************************************!*\
  !*** ./node_modules/react-icons-kit/SvgIcon.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SvgIcon = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _camelCase = _interopRequireDefault(__webpack_require__(/*! camel-case */ "./node_modules/camel-case/camel-case.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var walkChildren = function walkChildren(children) {
  return children.map(function (child, idx) {
    var name = child.name,
        attribsMap = child.attribs,
        _child$children = child.children,
        gchildren = _child$children === void 0 ? null : _child$children; //fill, stroke

    var attribs = Object.keys(attribsMap).filter(function (key) {
      return key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none';
    }).reduce(function (partial, key) {
      partial[(0, _camelCase.default)(key)] = attribsMap[key];
      return partial;
    }, {}); //special case, it has fill and stroke at the same time

    var merge = {};

    if (attribsMap.fill === 'none' && attribsMap.stroke) {
      merge = {
        fill: 'none',
        stroke: 'currentColor'
      };
    }

    return (0, _react.createElement)(name, _objectSpread({
      key: idx
    }, attribs, merge), gchildren === null ? gchildren : walkChildren(gchildren));
  });
};

var SvgIcon = function SvgIcon(props) {
  var size = props.size;
  var _props$icon = props.icon,
      children = _props$icon.children,
      viewBox = _props$icon.viewBox,
      _props$icon$attribs = _props$icon.attribs,
      svgAttribs = _props$icon$attribs === void 0 ? {} : _props$icon$attribs;
  var camelCasedAttribs = Object.keys(svgAttribs).reduce(function (partial, key) {
    partial[(0, _camelCase.default)(key)] = svgAttribs[key];
    return partial;
  }, {});
  return _react.default.createElement("svg", _extends({
    fill: "currentColor",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    height: size,
    width: size,
    viewBox: viewBox
  }, camelCasedAttribs), props.title ? _react.default.createElement("title", null, props.title) : null, walkChildren(children));
};

exports.SvgIcon = SvgIcon;
SvgIcon.defaultProps = {
  size: 16
};
SvgIcon.propTypes = {
  icon: _propTypes.default.object.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  title: _propTypes.default.string
};
var _default = SvgIcon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-icons-kit/horizontalCenter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-icons-kit/horizontalCenter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.horizontalCenter = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var horizontalCenter = function horizontalCenter(Component) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$rAlign = _ref.rAlign,
      rAlign = _ref$rAlign === void 0 ? false : _ref$rAlign,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 4 : _ref$space;

  return function (props) {
    return _react.default.createElement(Component, props, _react.default.createElement("div", {
      style: {
        display: 'inline-flex',
        justifyContent: 'center',
        'alignItems': 'center'
      }
    }, _react.Children.toArray(props.children).map(function (child, idx) {
      var spacerField = rAlign ? 'paddingLeft' : 'paddingRight';
      return _react.default.createElement("div", {
        key: idx,
        style: _defineProperty({
          display: 'inline-block'
        }, spacerField, space)
      }, child);
    })));
  };
};

exports.horizontalCenter = horizontalCenter;
var _default = horizontalCenter;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-icons-kit/icomoon/arrowRight2.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-icons-kit/icomoon/arrowRight2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowRight2 = void 0;
var arrowRight2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z"
    }
  }]
};
exports.arrowRight2 = arrowRight2;

/***/ }),

/***/ "./node_modules/react-icons-kit/icomoon/cross.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-icons-kit/icomoon/cross.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cross = void 0;
var cross = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
    }
  }]
};
exports.cross = cross;

/***/ }),

/***/ "./node_modules/react-icons-kit/icomoon/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-icons-kit/icomoon/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drive = exports.floppyDisk = exports.upload = exports.download = exports.boxRemove = exports.boxAdd = exports.drawer2 = exports.drawer = exports.tv = exports.tablet = exports.mobile2 = exports.mobile = exports.laptop = exports.display = exports.keyboard = exports.printer = exports.calendar = exports.stopwatch = exports.bell = exports.alarm = exports.clock2 = exports.clock = exports.history = exports.map2 = exports.map = exports.compass2 = exports.compass = exports.location2 = exports.location = exports.pushpin = exports.envelop = exports.addressBook = exports.phoneHangUp = exports.phone = exports.lifebuoy = exports.calculator = exports.creditCard = exports.coinYen = exports.coinPound = exports.coinEuro = exports.coinDollar = exports.cart = exports.ticket = exports.qrcode = exports.barcode = exports.priceTags = exports.priceTag = exports.folderUpload = exports.folderDownload = exports.folderMinus = exports.folderPlus = exports.folderOpen = exports.folder = exports.stack = exports.paste = exports.copy = exports.fileZip = exports.fileVideo = exports.filePlay = exports.fileMusic = exports.filePicture = exports.fileText2 = exports.filesEmpty = exports.fileEmpty = exports.profile = exports.fileText = exports.library = exports.books = exports.book = exports.mic = exports.feed = exports.podcast = exports.connection = exports.bullhorn = exports.diamonds = exports.clubs = exports.spades = exports.pacman = exports.dice = exports.videoCamera = exports.film = exports.play = exports.music = exports.headphones = exports.camera = exports.images = exports.image = exports.paintFormat = exports.droplet = exports.eyedropper = exports.blog = exports.pen = exports.quill = exports.pencil2 = exports.pencil = exports.newspaper = exports.office = exports.home3 = exports.home2 = exports.home = void 0;
exports.download3 = exports.upload2 = exports.download2 = exports.cloudCheck = exports.cloudUpload = exports.cloudDownload = exports.cloud = exports.menu4 = exports.menu3 = exports.menu2 = exports.menu = exports.tree = exports.list2 = exports.list = exports.listNumbered = exports.clipboard = exports.powerCord = exports.switchIcon = exports.power = exports.shield = exports.target = exports.accessibility = exports.road = exports.truck = exports.airplane = exports.briefcase = exports.bin2 = exports.bin = exports.magnet = exports.lab = exports.fire = exports.hammer2 = exports.meter2 = exports.meter = exports.rocket = exports.leaf = exports.spoonKnife = exports.mug = exports.glass2 = exports.glass = exports.gift = exports.trophy = exports.statsBars2 = exports.statsBars = exports.statsDots = exports.pieChart = exports.bug = exports.aidKit = exports.magicWand = exports.hammer = exports.cogs = exports.cog = exports.equalizer2 = exports.equalizer = exports.wrench = exports.unlocked = exports.lock = exports.key2 = exports.key = exports.shrink2 = exports.enlarge2 = exports.shrink = exports.enlarge = exports.zoomOut = exports.zoomIn = exports.search = exports.binoculars = exports.spinner11 = exports.spinner10 = exports.spinner9 = exports.spinner8 = exports.spinner7 = exports.spinner6 = exports.spinner5 = exports.spinner4 = exports.spinner3 = exports.spinner2 = exports.spinner = exports.hourGlass = exports.quotesRight = exports.quotesLeft = exports.userTie = exports.userCheck = exports.userMinus = exports.userPlus = exports.users = exports.user = exports.bubbles4 = exports.bubbles3 = exports.bubble2 = exports.bubbles2 = exports.bubbles = exports.bubble = exports.reply = exports.forward = exports.redo2 = exports.undo2 = exports.redo = exports.undo = exports.database = void 0;
exports.volumeIncrease = exports.volumeMute2 = exports.volumeMute = exports.volumeLow = exports.volumeMedium = exports.volumeHigh = exports.eject = exports.next2 = exports.previous2 = exports.last = exports.first = exports.forward3 = exports.backward2 = exports.stop2 = exports.pause2 = exports.play3 = exports.forward2 = exports.backward = exports.next = exports.previous = exports.stop = exports.pause = exports.play2 = exports.exit = exports.enter = exports.spellCheck = exports.checkmark2 = exports.checkmark = exports.cross = exports.blocked = exports.cancelCircle = exports.info = exports.minus = exports.plus = exports.question = exports.notification = exports.warning = exports.pointLeft = exports.pointDown = exports.pointRight = exports.pointUp = exports.crying2 = exports.crying = exports.frustrated2 = exports.frustrated = exports.sleepy2 = exports.sleepy = exports.wondering2 = exports.wondering = exports.hipster2 = exports.hipster = exports.neutral2 = exports.neutral = exports.confused2 = exports.confused = exports.baffled2 = exports.baffled = exports.shocked2 = exports.shocked = exports.evil2 = exports.evil = exports.angry2 = exports.angry = exports.cool2 = exports.cool = exports.grin2 = exports.grin = exports.wink2 = exports.wink = exports.sad2 = exports.sad = exports.tongue2 = exports.tongue = exports.smile2 = exports.smile = exports.happy2 = exports.happy = exports.manWoman = exports.woman = exports.man = exports.heartBroken = exports.heart = exports.starFull = exports.starHalf = exports.starEmpty = exports.brightnessContrast = exports.contrast = exports.sun = exports.bookmarks = exports.bookmark = exports.eyeBlocked = exports.eyeMinus = exports.eyePlus = exports.eye = exports.attachment = exports.flag = exports.link = exports.earth = exports.sphere = exports.upload3 = void 0;
exports.googleDrive = exports.hangouts = exports.googlePlus3 = exports.googlePlus2 = exports.googlePlus = exports.google3 = exports.google2 = exports.google = exports.amazon = exports.mail4 = exports.mail3 = exports.mail2 = exports.mail = exports.share2 = exports.terminal = exports.embed2 = exports.embed = exports.newTab = exports.share = exports.indentDecrease = exports.indentIncrease = exports.paragraphJustify = exports.paragraphRight = exports.paragraphCenter = exports.paragraphLeft = exports.section = exports.rtl = exports.ltr = exports.pilcrow = exports.insertTemplate = exports.table2 = exports.table = exports.clearFormatting = exports.pagebreak = exports.textColor = exports.subscript2 = exports.superscript2 = exports.subscript = exports.superscript = exports.pageBreak = exports.sigma = exports.omega = exports.strikethrough = exports.italic = exports.underline = exports.bold = exports.fontSize = exports.textWidth = exports.textHeight = exports.ligature2 = exports.ligature = exports.font = exports.filter = exports.scissors = exports.ungroup = exports.makeGroup = exports.crop = exports.radioUnchecked = exports.radioChecked2 = exports.radioChecked = exports.checkboxUnchecked = exports.checkboxChecked = exports.opt = exports.ctrl = exports.shift = exports.command = exports.sortAmountDesc = exports.sortAmountAsc = exports.sortNumbericDesc = exports.sortNumericAsc = exports.sortAlphaDesc = exports.sortAlphaAsc = exports.moveDown = exports.moveUp = exports.tab = exports.circleLeft = exports.circleDown = exports.circleRight = exports.circleUp = exports.arrowLeft2 = exports.arrowDownLeft2 = exports.arrowDown2 = exports.arrowDownRight2 = exports.arrowRight2 = exports.arrowUpRight2 = exports.arrowUp2 = exports.arrowUpLeft2 = exports.arrowLeft = exports.arrowDownLeft = exports.arrowDown = exports.arrowDownRight = exports.arrowRight = exports.arrowUpRight = exports.arrowUp = exports.arrowUpLeft = exports.shuffle = exports.infinite = exports.loop2 = exports.loop = exports.volumeDecrease = void 0;
exports.IcoMoon = exports.svg = exports.codepen = exports.git = exports.css3 = exports.htmlFive2 = exports.htmlFive = exports.libreoffice = exports.fileExcel = exports.fileWord = exports.fileOpenoffice = exports.filePdf = exports.opera = exports.safari = exports.edge = exports.IE = exports.firefox = exports.chrome = exports.paypal = exports.yelp = exports.foursquare = exports.flattr = exports.xing2 = exports.xing = exports.pinterest2 = exports.pinterest = exports.stackoverflow = exports.stumbleupon2 = exports.stumbleupon = exports.delicious = exports.lastfm2 = exports.lastfm = exports.linkedin2 = exports.linkedin = exports.wikipedia = exports.hackernews = exports.reddit = exports.skype = exports.soundcloud2 = exports.soundcloud = exports.windows8 = exports.windows = exports.android = exports.finder = exports.appleinc = exports.tux = exports.yahoo2 = exports.yahoo = exports.tumblr2 = exports.tumblr = exports.blogger2 = exports.blogger = exports.ello = exports.joomla = exports.wordpress = exports.trello = exports.basecamp = exports.npm = exports.github = exports.onedrive = exports.dropbox = exports.steam2 = exports.steam = exports.fiveHundredPX = exports.deviantart = exports.behance2 = exports.behance = exports.dribbble = exports.flickr4 = exports.flickr3 = exports.flickr2 = exports.flickr = exports.lanyrd = exports.vimeo2 = exports.vimeo = exports.twitch = exports.youtube2 = exports.youtube = exports.rss2 = exports.rss = exports.sinaWeibo = exports.renren = exports.vk = exports.vine = exports.twitter = exports.telegram = exports.spotify = exports.whatsapp = exports.instagram = exports.facebook2 = exports.facebook = void 0;
var home = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"
    }
  }]
};
exports.home = home;
var home2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"
    }
  }]
};
exports.home2 = home2;
var home3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"
    }
  }]
};
exports.home3 = home3;
var office = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 16h8v-16h-8v16zM5 2h2v2h-2v-2zM5 6h2v2h-2v-2zM5 10h2v2h-2v-2zM1 2h2v2h-2v-2zM1 6h2v2h-2v-2zM1 10h2v2h-2v-2zM9 5h7v1h-7zM9 16h2v-4h3v4h2v-9h-7z"
    }
  }]
};
exports.office = office;
var newspaper = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 4v-2h-14v11c0 0.552 0.448 1 1 1h13.5c0.828 0 1.5-0.672 1.5-1.5v-8.5h-2zM13 13h-12v-10h12v10zM2 5h10v1h-10zM8 7h4v1h-4zM8 9h4v1h-4zM8 11h3v1h-3zM2 7h5v5h-5z"
    }
  }]
};
exports.newspaper = newspaper;
var pencil = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"
    }
  }]
};
exports.pencil = pencil;
var pencil2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z"
    }
  }]
};
exports.pencil2 = pencil2;
var quill = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 16c2-6 7.234-16 16-16-4.109 3.297-6 11-9 11s-3 0-3 0l-3 5h-1z"
    }
  }]
};
exports.quill = quill;
var pen = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.909 4.561l-4.47-4.47c-0.146-0.146-0.338-0.113-0.427 0.073l-0.599 1.248 4.175 4.175 1.248-0.599c0.186-0.089 0.219-0.282 0.073-0.427z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.615 2.115l-4.115 0.343c-0.273 0.034-0.501 0.092-0.58 0.449-0 0-0 0.001-0 0.001-1.116 5.36-4.92 10.591-4.92 10.591l0.896 0.896 4.25-4.25c-0.094-0.196-0.146-0.415-0.146-0.647 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.232 0-0.451-0.053-0.647-0.146l-4.25 4.25 0.896 0.896c0 0 5.231-3.804 10.591-4.92 0-0 0.001-0 0.001-0 0.357-0.078 0.415-0.306 0.449-0.58l0.343-4.115-4.269-4.269z"
    }
  }]
};
exports.pen = pen;
var blog = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 0v1.5c1.148 0 2.261 0.225 3.308 0.667 1.012 0.428 1.921 1.041 2.702 1.822s1.394 1.69 1.822 2.702c0.443 1.047 0.667 2.16 0.667 3.308h1.5c0-5.523-4.477-10-10-10z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 3v1.5c1.469 0 2.85 0.572 3.889 1.611s1.611 2.42 1.611 3.889h1.5c0-3.866-3.134-7-7-7z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 6l-1 1-3.5 1-3 6.5 0.396 0.396 3.638-3.638c-0.022-0.083-0.034-0.169-0.034-0.259 0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1c-0.090 0-0.176-0.012-0.259-0.034l-3.638 3.638 0.396 0.396 6.5-3 1-3.5 1-1-2.5-2.5z"
    }
  }]
};
exports.blog = blog;
var eyedropper = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.414 0.586c-0.781-0.781-2.047-0.781-2.828 0l-2.689 2.689-1.896-1.896-2.121 2.121 1.663 1.663-7.377 7.377c-0.126 0.126-0.179 0.296-0.161 0.46h-0.004v2.5c0 0.276 0.224 0.5 0.5 0.5h2.5c0 0 0.042 0 0.063 0 0.144 0 0.288-0.055 0.398-0.165l7.377-7.377 1.663 1.663 2.121-2.121-1.896-1.896 2.689-2.689c0.781-0.781 0.781-2.047 0-2.828zM2.705 15h-1.705v-1.705l7.337-7.337 1.704 1.704-7.337 7.337z"
    }
  }]
};
exports.eyedropper = eyedropper;
var droplet = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.51 7.393c-1.027-2.866-3.205-5.44-5.51-7.393-2.305 1.953-4.482 4.527-5.51 7.393-0.635 1.772-0.698 3.696 0.197 5.397 1.029 1.955 3.104 3.21 5.313 3.21s4.284-1.255 5.313-3.21c0.895-1.701 0.832-3.624 0.197-5.397zM11.543 11.859c-0.684 1.301-2.075 2.141-3.543 2.141-0.861 0-1.696-0.29-2.377-0.791 0.207 0.027 0.416 0.041 0.627 0.041 1.835 0 3.573-1.050 4.428-2.676 0.701-1.333 0.64-2.716 0.373-3.818 0.227 0.44 0.42 0.878 0.576 1.311 0.353 0.985 0.625 2.443-0.084 3.791z"
    }
  }]
};
exports.droplet = droplet;
var paintFormat = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"
    }
  }]
};
exports.paintFormat = paintFormat;
var image = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.998 2c0.001 0.001 0.001 0.001 0.002 0.002v11.996c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996zM15 1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 4.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 13h-12v-2l3.5-6 4 5h1l3.5-3z"
    }
  }]
};
exports.image = image;
var images = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M17 2h-1v-1c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zM2 3v10h-0.998c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-12c-0.55 0-1 0.45-1 1v0zM17 14.998c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v11.996z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 14h-12v-2l3.5-6 4 5h1l3.5-3z"
    }
  }]
};
exports.images = images;
var camera = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.75 9.5c0 1.795 1.455 3.25 3.25 3.25s3.25-1.455 3.25-3.25-1.455-3.25-3.25-3.25-3.25 1.455-3.25 3.25zM15 4h-3.5c-0.25-1-0.5-2-1.5-2h-4c-1 0-1.25 1-1.5 2h-3.5c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM8 13.938c-2.451 0-4.438-1.987-4.438-4.438s1.987-4.438 4.438-4.438c2.451 0 4.438 1.987 4.438 4.438s-1.987 4.438-4.438 4.438zM15 7h-2v-1h2v1z"
    }
  }]
};
exports.camera = camera;
var headphones = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 9h-1v7h1c0.275 0 0.5-0.225 0.5-0.5v-6c0-0.275-0.225-0.5-0.5-0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 9c-0.275 0-0.5 0.225-0.5 0.5v6c0 0.275 0.225 0.5 0.5 0.5h1v-7h-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 0.96 0.169 1.88 0.479 2.732-0.304 0.519-0.479 1.123-0.479 1.768 0 1.763 1.304 3.222 3 3.464v-6.928c-0.499 0.071-0.963 0.248-1.371 0.506-0.084-0.417-0.129-0.849-0.129-1.292 0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 0.442-0.044 0.874-0.128 1.292-0.408-0.259-0.873-0.435-1.372-0.507v6.929c1.696-0.243 3-1.701 3-3.464 0-0.645-0.175-1.249-0.479-1.768 0.31-0.853 0.479-1.773 0.479-2.732z"
    }
  }]
};
exports.headphones = headphones;
var music = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 0h1v11.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-5.751l-8 1.778v7.722c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-9.751l9-2z"
    }
  }]
};
exports.music = music;
var play = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.331 2.502c-2.244-0.323-4.724-0.502-7.331-0.502s-5.087 0.179-7.331 0.502c-0.43 1.683-0.669 3.543-0.669 5.498s0.239 3.815 0.669 5.498c2.244 0.323 4.724 0.502 7.331 0.502s5.087-0.179 7.331-0.502c0.43-1.683 0.669-3.543 0.669-5.498s-0.239-3.815-0.669-5.498zM6 11v-6l5 3-5 3z"
    }
  }]
};
exports.play = play;
var film = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 2v12h16v-12h-16zM3 13h-2v-2h2v2zM3 9h-2v-2h2v2zM3 5h-2v-2h2v2zM12 13h-8v-10h8v10zM15 13h-2v-2h2v2zM15 9h-2v-2h2v2zM15 5h-2v-2h2v2zM6 5v6l4-3z"
    }
  }]
};
exports.film = film;
var videoCamera = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 4.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5zM0 4.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5zM12 9.5v-1.5c0-0.55-0.45-1-1-1h-10c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h10c0.55 0 1-0.45 1-1v-1.5l4 2.5v-7l-4 2.5zM10 12h-8v-3h8v3z"
    }
  }]
};
exports.videoCamera = videoCamera;
var dice = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 3h-8c-1.375 0-2.5 1.125-2.5 2.5v8c0 1.375 1.125 2.5 2.5 2.5h8c1.375 0 2.5-1.125 2.5-2.5v-8c0-1.375-1.125-2.5-2.5-2.5zM6.5 14c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM6.5 8c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM9.5 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.5 8c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM12.949 2c-0.233-1.138-1.245-2-2.449-2h-8c-1.375 0-2.5 1.125-2.5 2.5v8c0 1.204 0.862 2.216 2 2.449v-9.949c0-0.55 0.45-1 1-1h9.949z"
    }
  }]
};
exports.dice = dice;
var pacman = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.074 2.794c-1.467-1.71-3.644-2.794-6.074-2.794-4.418 0-8 3.582-8 8s3.582 8 8 8c2.43 0 4.607-1.084 6.074-2.794l-5.074-5.206 5.074-5.206zM11 1.884c0.616 0 1.116 0.499 1.116 1.116s-0.499 1.116-1.116 1.116-1.116-0.499-1.116-1.116c0-0.616 0.499-1.116 1.116-1.116z"
    }
  }]
};
exports.pacman = pacman;
var spades = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.775 5.44c-3.024-2.248-4.067-4.047-4.774-5.44v0c-0 0-0-0-0-0v0c-0.708 1.393-1.75 3.192-4.774 5.44-5.157 3.833-0.303 9.182 3.965 6.238-0.278 1.827-1.227 3.159-2.191 3.733v0.59h6v-0.59c-0.964-0.574-1.913-1.906-2.191-3.733 4.268 2.944 9.122-2.405 3.965-6.238z"
    }
  }]
};
exports.spades = spades;
var clubs = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.294 6.137c-0.922 0-1.751 0.384-2.341 1.011-0.25 0.265-0.684 0.58-1.153 0.856 0.22-0.842 0.917-1.902 1.4-2.367 0.619-0.596 1-1.435 1-2.367 0-1.795-1.429-3.252-3.2-3.271-1.771 0.019-3.2 1.475-3.2 3.271 0 0.932 0.38 1.771 1 2.367 0.484 0.465 1.18 1.525 1.4 2.367-0.469-0.277-0.903-0.591-1.153-0.856-0.59-0.627-1.419-1.011-2.341-1.011-1.787 0-3.236 1.463-3.236 3.271s1.448 3.271 3.236 3.271c0.923 0 1.751-0.396 2.341-1.023 0.263-0.279 0.726-0.627 1.223-0.916-0.047 2.308-1.149 4.003-2.271 4.67v0.59h6v-0.59c-1.122-0.668-2.224-2.363-2.271-4.67 0.498 0.289 0.961 0.637 1.223 0.916 0.59 0.626 1.419 1.023 2.341 1.023 1.787 0 3.236-1.464 3.236-3.271s-1.448-3.271-3.236-3.271z"
    }
  }]
};
exports.clubs = clubs;
var diamonds = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0l-5 8 5 8 5-8z"
    }
  }]
};
exports.diamonds = diamonds;
var bullhorn = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 6.707c0-3.139-0.919-5.687-2.054-5.707 0.005-0 0.009-0 0.014-0h-1.296c0 0-3.044 2.287-7.425 3.184-0.134 0.708-0.219 1.551-0.219 2.523s0.085 1.816 0.219 2.523c4.382 0.897 7.425 3.184 7.425 3.184h1.296c-0.005 0-0.009-0-0.014-0.001 1.136-0.020 2.054-2.567 2.054-5.707zM13.513 11.551c-0.147 0-0.305-0.152-0.387-0.243-0.197-0.22-0.387-0.562-0.55-0.989-0.363-0.957-0.564-2.239-0.564-3.611s0.2-2.655 0.564-3.611c0.162-0.428 0.353-0.77 0.55-0.99 0.081-0.091 0.24-0.243 0.387-0.243s0.305 0.152 0.387 0.243c0.197 0.22 0.387 0.562 0.55 0.99 0.363 0.957 0.564 2.239 0.564 3.611s-0.2 2.655-0.564 3.611c-0.162 0.428-0.353 0.77-0.55 0.989-0.081 0.091-0.24 0.243-0.387 0.243zM3.935 6.707c0-0.812 0.060-1.6 0.173-2.33-0.74 0.102-1.39 0.161-2.193 0.161-1.048 0-1.048 0-1.048 0l-0.867 1.479v1.378l0.867 1.479c0 0 0 0 1.048 0 0.803 0 1.453 0.059 2.193 0.161-0.113-0.729-0.173-1.518-0.173-2.33zM5.752 10.034l-2-0.383 1.279 5.024c0.066 0.26 0.324 0.391 0.573 0.291l1.852-0.741c0.249-0.1 0.349-0.374 0.222-0.611l-1.926-3.581zM13.513 8.574c-0.057 0-0.118-0.059-0.149-0.094-0.076-0.085-0.149-0.217-0.212-0.381-0.14-0.369-0.217-0.863-0.217-1.392s0.077-1.023 0.217-1.392c0.063-0.165 0.136-0.297 0.212-0.381 0.031-0.035 0.092-0.094 0.149-0.094s0.118 0.059 0.149 0.094c0.076 0.085 0.149 0.217 0.212 0.381 0.14 0.369 0.217 0.863 0.217 1.392s-0.077 1.023-0.217 1.392c-0.063 0.165-0.136 0.297-0.212 0.381-0.031 0.035-0.092 0.094-0.149 0.094z"
    }
  }]
};
exports.bullhorn = bullhorn;
var connection = {
  "viewBox": "0 0 20 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 9c1.654 0 3.154 0.673 4.241 1.759l-1.414 1.414c-0.724-0.724-1.724-1.173-2.827-1.173s-2.103 0.449-2.827 1.173l-1.414-1.414c1.086-1.086 2.586-1.759 4.241-1.759zM2.929 7.929c1.889-1.889 4.4-2.929 7.071-2.929s5.182 1.040 7.071 2.929l-1.414 1.414c-1.511-1.511-3.52-2.343-5.657-2.343s-4.146 0.832-5.657 2.343l-1.414-1.414zM15.45 2.101c1.667 0.705 3.164 1.715 4.45 3v0l-1.414 1.414c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515l-1.414-1.414c1.285-1.285 2.783-2.295 4.45-3 1.727-0.73 3.56-1.101 5.45-1.101s3.723 0.37 5.45 1.101zM9 14c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1z"
    }
  }]
};
exports.connection = connection;
var podcast = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 3.438 2.169 6.37 5.214 7.501l-0.214 0.499h6l-0.214-0.499c3.045-1.131 5.214-4.063 5.214-7.501zM7.606 9.919c-0.356-0.153-0.606-0.507-0.606-0.919 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.412-0.25 0.766-0.606 0.919l-0.394-0.919-0.394 0.919zM8.41 9.958c0.908-0.189 1.59-0.994 1.59-1.958 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.964 0.682 1.768 1.59 1.957l-1.166 2.721c-1.425-0.612-2.424-2.028-2.424-3.677 0-2.209 1.791-4.188 4-4.188s4 1.978 4 4.188c0 1.649-0.999 3.066-2.424 3.677l-1.166-2.72zM10.757 15.433l-1.155-2.695c1.976-0.668 3.398-2.537 3.398-4.738 0-2.761-2.239-5-5-5s-5 2.239-5 5c0 2.201 1.422 4.070 3.398 4.738l-1.155 2.695c-2.494-1.070-4.24-3.547-4.24-6.433 0-3.865 3.133-7.185 6.997-7.185s6.997 3.32 6.997 7.185c0 2.886-1.747 5.363-4.24 6.433z"
    }
  }]
};
exports.podcast = podcast;
var feed = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.38 3.602c1.56 0.846 2.62 2.498 2.62 4.398s-1.059 3.552-2.62 4.398c0.689-1.096 1.12-2.66 1.12-4.398s-0.431-3.302-1.12-4.398zM4.5 8c0 1.738 0.431 3.302 1.12 4.398-1.56-0.846-2.62-2.498-2.62-4.398s1.059-3.552 2.62-4.398c-0.689 1.096-1.12 2.66-1.12 4.398zM1.5 8c0 2.686 0.85 5.097 2.198 6.746-2.223-1.421-3.698-3.911-3.698-6.746s1.474-5.325 3.698-6.746c-1.348 1.649-2.198 4.060-2.198 6.746zM12.302 1.254c2.223 1.421 3.698 3.911 3.698 6.746s-1.474 5.325-3.698 6.746c1.348-1.649 2.198-4.060 2.198-6.746s-0.85-5.097-2.198-6.746z"
    }
  }]
};
exports.feed = feed;
var mic = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 11c1.381 0 2.5-1.119 2.5-2.5v-6c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v6c0 1.381 1.119 2.5 2.5 2.5zM11 7v1.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5v-1.5h-1v1.5c0 2.316 1.75 4.223 4 4.472v2.028h-2v1h5v-1h-2v-2.028c2.25-0.249 4-2.156 4-4.472v-1.5h-1z"
    }
  }]
};
exports.mic = mic;
var book = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 2v13h-10.5c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h9.5v-12h-10c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12v-14h-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.501 13v0c-0 0-0.001 0-0.001 0-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0 0 0.001-0 0.001-0v0h9.498v-1h-9.498z"
    }
  }]
};
exports.book = book;
var books = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
    }
  }]
};
exports.books = books;
var library = {
  "viewBox": "0 0 17 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 15v-1h-1v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-1v1h-1v1h17v-1h-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0h1l8 5v1h-17v-1l8-5z"
    }
  }]
};
exports.library = library;
var fileText = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 7h7v1h-7zM4 9h7v1h-7zM4 11h7v1h-7zM4 5h7v1h-7z"
    }
  }]
};
exports.fileText = fileText;
var profile = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"
    }
  }]
};
exports.profile = profile;
var fileEmpty = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.fileEmpty = fileEmpty;
var filesEmpty = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 5.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.689 0.561 1.25 1.25 1.25h9.5c0.689 0 1.25-0.561 1.25-1.25v-7.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 4.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-9.5c-0.136 0-0.25-0.114-0.25-0.25v-11.5c0-0.135 0.114-0.25 0.25-0.25 0 0 5.749-0 5.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v7.75z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.421 0.659c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.604 0.43 1.109 1 1.225v-12.725c0-0.135 0.115-0.25 0.25-0.25h7.607c-0.151-0.124-0.297-0.238-0.437-0.341z"
    }
  }]
};
exports.filesEmpty = filesEmpty;
var fileText2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 13h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 11h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 9h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.fileText2 = fileText2;
var filePicture = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 14h-10v-2l3-5 4.109 5 2.891-2v4z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.filePicture = filePicture;
var fileMusic = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.817 6.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v3.701c-0.294-0.128-0.636-0.201-1-0.201-1.105 0-2 0.672-2 1.5s0.895 1.5 2 1.5 2-0.672 2-1.5v-3.59l4-0.8v2.091c-0.294-0.128-0.636-0.201-1-0.201-1.105 0-2 0.672-2 1.5s0.895 1.5 2 1.5 2-0.672 2-1.5v-5c0-0.15-0.067-0.292-0.183-0.387z"
    }
  }]
};
exports.fileMusic = fileMusic;
var filePlay = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 6l5 3.5-5 3.5v-7z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.filePlay = filePlay;
var fileVideo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0 0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0 0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 8h5v5h-5v-5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 10l3-2v5l-3-2z"
    }
  }]
};
exports.fileVideo = fileVideo;
var fileZip = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0 0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0 0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 1h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 2h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 3h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 4h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 5h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 6h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 7h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 8h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 13.25c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-1.25v-1h-2v4.25zM7 12v1h-2v-1h2z"
    }
  }]
};
exports.fileZip = fileZip;
var copy = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 4v-4h-7l-3 3v9h6v4h10v-12h-6zM3 1.414v1.586h-1.586l1.586-1.586zM1 11v-7h3v-3h5v3l-3 3v4h-5zM9 5.414v1.586h-1.586l1.586-1.586zM15 15h-8v-7h3v-3h5v10z"
    }
  }]
};
exports.copy = copy;
var paste = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 2h-2v-1c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v1h-2v2h8v-2zM8 2h-2v-0.998c0.001-0.001 0.001-0.001 0.002-0.002h1.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998zM13 5v-2.5c0-0.275-0.225-0.5-0.5-0.5h-1v1h0.5v2h-3l-3 3v4h-4v-9h0.5v-1h-1c-0.275 0-0.5 0.225-0.5 0.5v10c0 0.275 0.225 0.5 0.5 0.5h4.5v3h10v-11h-3zM9 6.414v1.586h-1.586l1.586-1.586zM15 15h-8v-6h3v-3h5v9z"
    }
  }]
};
exports.paste = paste;
var stack = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"
    }
  }]
};
exports.stack = stack;
var folder = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 2l2 2h7v11h-16v-13z"
    }
  }]
};
exports.folder = folder;
var folderOpen = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 15l3-8h-13l-3 8zM2 6l-2 9v-13h4.5l2 2h6.5v2z"
    }
  }]
};
exports.folderOpen = folderOpen;
var folderPlus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 4l-2-2h-7v13h16v-11h-7zM11 11h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"
    }
  }]
};
exports.folderPlus = folderPlus;
var folderMinus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 4l-2-2h-7v13h16v-11h-7zM11 11h-6v-2h6v2z"
    }
  }]
};
exports.folderMinus = folderMinus;
var folderDownload = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 4l-2-2h-7v13h16v-11h-7zM8 13.5l-3.5-3.5h2.5v-4h2v4h2.5l-3.5 3.5z"
    }
  }]
};
exports.folderDownload = folderDownload;
var folderUpload = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 4l-2-2h-7v13h16v-11h-7zM8 7.5l3.5 3.5h-2.5v4h-2v-4h-2.5l3.5-3.5z"
    }
  }]
};
exports.folderUpload = folderUpload;
var priceTag = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.25 0h-6c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l7.439-7.439c0.292-0.292 0.53-0.868 0.53-1.28v-6c0-0.412-0.338-0.75-0.75-0.75zM11.5 6c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"
    }
  }]
};
exports.priceTag = priceTag;
var priceTags = {
  "viewBox": "0 0 20 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M19.25 0h-6c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l7.439-7.439c0.292-0.292 0.53-0.868 0.53-1.28v-6c0-0.412-0.337-0.75-0.75-0.75zM15.5 6c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 8.5l8.5-8.5h-1.25c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l0.47-0.47-6.5-6.5z"
    }
  }]
};
exports.priceTags = priceTags;
var barcode = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 2h2v10h-2zM3 2h1v10h-1zM5 2h1v10h-1zM8 2h1v10h-1zM12 2h1v10h-1zM15 2h1v10h-1zM10 2h0.5v10h-0.5zM7 2h0.5v10h-0.5zM13.5 2h0.5v10h-0.5zM0 13h1v1h-1zM3 13h1v1h-1zM5 13h1v1h-1zM10 13h1v1h-1zM15 13h1v1h-1zM12 13h2v1h-2zM7 13h2v1h-2z"
    }
  }]
};
exports.barcode = barcode;
var qrcode = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 1h-4v4h4v-4zM6 0v0 6h-6v-6h6zM2 2h2v2h-2zM15 1h-4v4h4v-4zM16 0v0 6h-6v-6h6zM12 2h2v2h-2zM5 11h-4v4h4v-4zM6 10v0 6h-6v-6h6zM2 12h2v2h-2zM7 0h1v1h-1zM8 1h1v1h-1zM7 2h1v1h-1zM8 3h1v1h-1zM7 4h1v1h-1zM8 5h1v1h-1zM7 6h1v1h-1zM7 8h1v1h-1zM8 9h1v1h-1zM7 10h1v1h-1zM8 11h1v1h-1zM7 12h1v1h-1zM8 13h1v1h-1zM7 14h1v1h-1zM8 15h1v1h-1zM15 8h1v1h-1zM1 8h1v1h-1zM2 7h1v1h-1zM0 7h1v1h-1zM4 7h1v1h-1zM5 8h1v1h-1zM6 7h1v1h-1zM9 8h1v1h-1zM10 7h1v1h-1zM11 8h1v1h-1zM12 7h1v1h-1zM13 8h1v1h-1zM14 7h1v1h-1zM15 10h1v1h-1zM9 10h1v1h-1zM10 9h1v1h-1zM11 10h1v1h-1zM13 10h1v1h-1zM14 9h1v1h-1zM15 12h1v1h-1zM9 12h1v1h-1zM10 11h1v1h-1zM12 11h1v1h-1zM13 12h1v1h-1zM14 11h1v1h-1zM15 14h1v1h-1zM10 13h1v1h-1zM11 14h1v1h-1zM12 13h1v1h-1zM13 14h1v1h-1zM10 15h1v1h-1zM12 15h1v1h-1zM14 15h1v1h-1z"
    }
  }]
};
exports.qrcode = qrcode;
var ticket = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 5l2 2-4 4-2-2zM15.649 4.649l-1.149-1.149-0.5 0.5c-0.256 0.256-0.61 0.414-1 0.414-0.781 0-1.414-0.633-1.414-1.414 0-0.391 0.158-0.744 0.415-1l0.5-0.5-1.149-1.149c-0.468-0.468-1.235-0.468-1.703 0l-9.297 9.297c-0.468 0.468-0.468 1.235 0 1.703l1.149 1.149 0.499-0.499c0.256-0.256 0.61-0.415 1.001-0.415 0.781 0 1.414 0.633 1.414 1.414 0 0.391-0.158 0.744-0.415 1l-0.5 0.5 1.149 1.149c0.468 0.468 1.234 0.468 1.703 0l9.297-9.297c0.468-0.468 0.468-1.235 0-1.703zM7 13l-4-4 6-6 4 4-6 6z"
    }
  }]
};
exports.ticket = ticket;
var cart = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8v-6h-12c0-0.552-0.448-1-1-1h-3v1h2l0.751 6.438c-0.458 0.367-0.751 0.93-0.751 1.562 0 1.105 0.895 2 2 2h12v-1h-12c-0.552 0-1-0.448-1-1 0-0.003 0-0.007 0-0.010l13-1.99z"
    }
  }]
};
exports.cart = cart;
var coinDollar = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM7.5 14.5c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zM8 8v-2h2v-1h-2v-1h-1v1h-2v4h2v2h-2v1h2v1h1v-1h2l-0-4h-2zM7 8h-1v-2h1v2zM9 11h-1v-2h1v2z"
    }
  }]
};
exports.coinDollar = coinDollar;
var coinEuro = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM7.5 14.5c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.482 10.068c-0.239-0.139-0.545-0.058-0.684 0.181-0.27 0.463-0.767 0.751-1.298 0.751h-2c-0.652 0-1.208-0.418-1.414-1h2.414c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-1h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.414c0.206-0.582 0.762-1 1.414-1h2c0.531 0 1.028 0.288 1.298 0.751 0.139 0.239 0.445 0.32 0.684 0.181s0.32-0.445 0.181-0.684c-0.448-0.77-1.277-1.249-2.162-1.249h-2c-1.207 0-2.217 0.86-2.45 2h-0.55c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.55c0.232 1.14 1.242 2 2.45 2h2c0.886 0 1.714-0.478 2.162-1.249 0.139-0.239 0.058-0.545-0.181-0.684z"
    }
  }]
};
exports.coinEuro = coinEuro;
var coinPound = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM7.5 14.5c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 11h-3.5v-2h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.827 0.673-1.5 1.5-1.5 0.534 0 1.032 0.288 1.3 0.75 0.138 0.239 0.444 0.321 0.683 0.182s0.321-0.444 0.182-0.683c-0.446-0.771-1.276-1.25-2.165-1.25-1.378 0-2.5 1.122-2.5 2.5v0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v3h4.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
    }
  }]
};
exports.coinPound = coinPound;
var coinYen = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM7.5 14.5c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 9c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.066l1.482-2.223c0.153-0.23 0.091-0.54-0.139-0.693s-0.54-0.091-0.693 0.139l-1.584 2.376-1.584-2.376c-0.153-0.23-0.464-0.292-0.693-0.139s-0.292 0.464-0.139 0.693l1.482 2.223h-1.066c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-1h1.5z"
    }
  }]
};
exports.coinYen = coinYen;
var creditCard = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"
    }
  }]
};
exports.creditCard = creditCard;
var calculator = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 1h-5c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM6 5h-5v-1h5v1zM14 1h-5c-0.55 0-1 0.45-1 1v13c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-13c0-0.55-0.45-1-1-1zM14 10h-5v-1h5v1zM14 7h-5v-1h5v1zM6 9h-5c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM6 13h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
    }
  }]
};
exports.calculator = calculator;
var lifebuoy = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 8c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zM14.468 10.679v0l-2.772-1.148c0.196-0.472 0.304-0.989 0.304-1.531s-0.108-1.059-0.304-1.531l2.772-1.148c0.342 0.825 0.532 1.73 0.532 2.679s-0.189 1.854-0.532 2.679v0zM10.679 1.532v0 0l-1.148 2.772c-0.472-0.196-0.989-0.304-1.531-0.304s-1.059 0.108-1.531 0.304l-1.148-2.772c0.825-0.342 1.73-0.532 2.679-0.532s1.854 0.189 2.679 0.532zM1.532 5.321l2.772 1.148c-0.196 0.472-0.304 0.989-0.304 1.531s0.108 1.059 0.304 1.531l-2.772 1.148c-0.342-0.825-0.532-1.73-0.532-2.679s0.189-1.854 0.532-2.679zM5.321 14.468l1.148-2.772c0.472 0.196 0.989 0.304 1.531 0.304s1.059-0.108 1.531-0.304l1.148 2.772c-0.825 0.342-1.73 0.532-2.679 0.532s-1.854-0.189-2.679-0.532z"
    }
  }]
};
exports.lifebuoy = lifebuoy;
var phone = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"
    }
  }]
};
exports.phone = phone;
var phoneHangUp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.897 9c0.125 0.867 0.207 2.053-0.182 2.507-0.643 0.751-4.714 0.751-4.714-0.751 0-0.756 0.67-1.252 0.027-2.003-0.632-0.738-1.766-0.75-3.027-0.751s-2.394 0.012-3.027 0.751c-0.643 0.751 0.027 1.247 0.027 2.003 0 1.501-4.071 1.501-4.714 0.751-0.389-0.454-0.307-1.64-0.182-2.507 0.096-0.579 0.339-1.203 1.118-2 0-0 0-0 0-0 1.168-1.090 2.935-1.98 6.716-2v-0c0.021 0 0.042 0 0.063 0s0.041-0 0.063-0v0c3.781 0.019 5.548 0.91 6.716 2 0 0 0 0 0 0 0.778 0.797 1.022 1.421 1.118 2z"
    }
  }]
};
exports.phoneHangUp = phoneHangUp;
var addressBook = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 0v16h12v-16h-12zM9 4.005c1.102 0 1.995 0.893 1.995 1.995s-0.893 1.995-1.995 1.995-1.995-0.893-1.995-1.995 0.893-1.995 1.995-1.995v0zM12 12h-6v-1c0-1.105 0.895-2 2-2v0h2c1.105 0 2 0.895 2 2v1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 1h1.5v3h-1.5v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 5h1.5v3h-1.5v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 9h1.5v3h-1.5v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 13h1.5v3h-1.5v-3z"
    }
  }]
};
exports.addressBook = addressBook;
var envelop = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v10c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-10c0-0.825-0.675-1.5-1.5-1.5zM6.23 8.6l-4.23 3.295v-7.838l4.23 4.543zM2.756 4h10.488l-5.244 3.938-5.244-3.938zM6.395 8.777l1.605 1.723 1.605-1.723 3.29 4.223h-9.79l3.29-4.223zM9.77 8.6l4.23-4.543v7.838l-4.23-3.295z"
    }
  }]
};
exports.envelop = envelop;
var pushpin = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.5 0l-1.5 1.5 1.5 1.5-3.5 4h-3.5l2.75 2.75-4.25 5.635v0.615h0.615l5.635-4.25 2.75 2.75v-3.5l4-3.5 1.5 1.5 1.5-1.5-7.5-7.5zM7 8.5l-1-1 3.5-3.5 1 1-3.5 3.5z"
    }
  }]
};
exports.pushpin = pushpin;
var location = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
    }
  }]
};
exports.location = location;
var location2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"
    }
  }]
};
exports.location2 = location2;
var compass = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.5 16c-0.036 0-0.072-0.004-0.108-0.012-0.229-0.051-0.392-0.254-0.392-0.488v-7.5h-7.5c-0.234 0-0.437-0.163-0.488-0.392s0.064-0.462 0.277-0.561l15-7c0.191-0.089 0.416-0.049 0.565 0.1s0.188 0.374 0.1 0.565l-7 15c-0.083 0.179-0.262 0.289-0.453 0.289zM2.754 7h5.746c0.276 0 0.5 0.224 0.5 0.5v5.746l5.465-11.712-11.712 5.465z"
    }
  }]
};
exports.compass = compass;
var compass2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5 1.712 0 3.269 0.662 4.43 1.744l-6.43 2.756-2.756 6.43c-1.082-1.161-1.744-2.718-1.744-4.43zM9.143 9.143l-4.001 1.715 1.715-4.001 2.286 2.286zM8 14.5c-1.712 0-3.269-0.662-4.43-1.744l6.43-2.756 2.756-6.43c1.082 1.161 1.744 2.718 1.744 4.43 0 3.59-2.91 6.5-6.5 6.5z"
    }
  }]
};
exports.compass2 = compass2;
var map = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3l5-2v12l-5 2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 0.5l5 3v11.5l-5-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 3.5l4-3v12l-4 3z"
    }
  }]
};
exports.map = map;
var map2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.5 3l-5-2-5.5 2v12l5.5-2 5 2 5.5-2v-12l-5.5 2zM6 2.277l4 1.6v9.846l-4-1.6v-9.846zM1 3.7l4-1.455v9.872l-4 1.454v-9.872zM15 12.3l-4 1.455v-9.872l4-1.455v9.872z"
    }
  }]
};
exports.map2 = map2;
var history = {
  "viewBox": "0 0 17 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 1c3.866 0 7 3.134 7 7s-3.134 7-7 7v-1.5c1.469 0 2.85-0.572 3.889-1.611s1.611-2.42 1.611-3.889c0-1.469-0.572-2.85-1.611-3.889s-2.42-1.611-3.889-1.611c-1.469 0-2.85 0.572-3.889 1.611-0.799 0.799-1.322 1.801-1.52 2.889h2.909l-3.5 4-3.5-4h2.571c0.485-3.392 3.402-6 6.929-6zM13 7v2h-4v-5h2v3z"
    }
  }]
};
exports.history = history;
var clock = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
    }
  }]
};
exports.clock = clock;
var clock2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707-1.414 1.414z"
    }
  }]
};
exports.clock2 = clock2;
var alarm = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM8 14.625c-3.107 0-5.625-2.518-5.625-5.625s2.518-5.625 5.625-5.625c3.107 0 5.625 2.518 5.625 5.625s-2.518 5.625-5.625 5.625zM14.606 4.487c0.251-0.438 0.394-0.946 0.394-1.487 0-1.657-1.343-3-3-3-0.966 0-1.825 0.457-2.374 1.166 2.061 0.426 3.831 1.644 4.98 3.322v0zM6.374 1.166c-0.549-0.709-1.408-1.166-2.374-1.166-1.657 0-3 1.343-3 3 0 0.541 0.143 1.049 0.394 1.487 1.148-1.678 2.919-2.896 4.98-3.322z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 9v-4h-1v5h4v-1z"
    }
  }]
};
exports.alarm = alarm;
var bell = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16.023 12.5c0-4.5-4-3.5-4-7 0-0.29-0.028-0.538-0.079-0.749-0.263-1.766-1.44-3.183-2.965-3.615 0.014-0.062 0.021-0.125 0.021-0.191 0-0.52-0.45-0.945-1-0.945s-1 0.425-1 0.945c0 0.065 0.007 0.129 0.021 0.191-1.71 0.484-2.983 2.208-3.020 4.273-0.001 0.030-0.001 0.060-0.001 0.091 0 3.5-4 2.5-4 7 0 1.191 2.665 2.187 6.234 2.439 0.336 0.631 1.001 1.061 1.766 1.061s1.43-0.43 1.766-1.061c3.568-0.251 6.234-1.248 6.234-2.439 0-0.004-0-0.007-0-0.011l0.024 0.011zM12.91 13.345c-0.847 0.226-1.846 0.389-2.918 0.479-0.089-1.022-0.947-1.824-1.992-1.824s-1.903 0.802-1.992 1.824c-1.072-0.090-2.071-0.253-2.918-0.479-1.166-0.311-1.724-0.659-1.928-0.845 0.204-0.186 0.762-0.534 1.928-0.845 1.356-0.362 3.1-0.561 4.91-0.561s3.554 0.199 4.91 0.561c1.166 0.311 1.724 0.659 1.928 0.845-0.204 0.186-0.762 0.534-1.928 0.845z"
    }
  }]
};
exports.bell = bell;
var stopwatch = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 3.019v-1.019h2v-1c0-0.552-0.448-1-1-1h-3c-0.552 0-1 0.448-1 1v1h2v1.019c-3.356 0.255-6 3.059-6 6.481 0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-3.422-2.644-6.226-6-6.481zM11.036 13.036c-0.944 0.944-2.2 1.464-3.536 1.464s-2.591-0.52-3.536-1.464c-0.944-0.944-1.464-2.2-1.464-3.536s0.52-2.591 1.464-3.536c0.907-0.907 2.101-1.422 3.377-1.462l-0.339 4.907c-0.029 0.411 0.195 0.591 0.497 0.591s0.527-0.18 0.497-0.591l-0.339-4.907c1.276 0.040 2.47 0.555 3.377 1.462 0.944 0.944 1.464 2.2 1.464 3.536s-0.52 2.591-1.464 3.536z"
    }
  }]
};
exports.stopwatch = stopwatch;
var calendar = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"
    }
  }]
};
exports.calendar = calendar;
var printer = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 1h8v2h-8v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 4h-14c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h3v4h8v-4h3c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM2 7c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM11 14h-6v-5h6v5z"
    }
  }]
};
exports.printer = printer;
var keyboard = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M17 2h-16c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1zM10 4h2v2h-2v-2zM13 7v2h-2v-2h2zM7 4h2v2h-2v-2zM10 7v2h-2v-2h2zM4 4h2v2h-2v-2zM7 7v2h-2v-2h2zM2 4h1v2h-1v-2zM2 7h2v2h-2v-2zM3 12h-1v-2h1v2zM12 12h-8v-2h8v2zM16 12h-3v-2h3v2zM16 9h-2v-2h2v2zM16 6h-3v-2h3v2z"
    }
  }]
};
exports.keyboard = keyboard;
var display = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1v10h16v-10h-16zM15 10h-14v-8h14v8zM10.5 12h-5l-0.5 2-1 1h8l-1-1z"
    }
  }]
};
exports.display = display;
var laptop = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 11v-8c0-0.55-0.45-1-1-1h-10c-0.55 0-1 0.45-1 1v8h-2v3h16v-3h-2zM10 13h-4v-1h4v1zM13 11h-10v-7.998c0.001-0.001 0.001-0.001 0.002-0.002h9.996c0.001 0.001 0.001 0.001 0.002 0.002v7.998z"
    }
  }]
};
exports.laptop = laptop;
var mobile = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 0h-7c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h7c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 0.75h4v0.5h-4v-0.5zM8 15c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM12 12h-8v-10h8v10z"
    }
  }]
};
exports.mobile = mobile;
var mobile2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 0h-9c-0.55 0-1 0.45-1 1v14c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-14c0-0.55-0.45-1-1-1zM7.5 15.278c-0.43 0-0.778-0.348-0.778-0.778s0.348-0.778 0.778-0.778 0.778 0.348 0.778 0.778-0.348 0.778-0.778 0.778zM12 13h-9v-11h9v11z"
    }
  }]
};
exports.mobile2 = mobile2;
var tablet = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 0h-10c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h10c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM7.5 15.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM12 14h-9v-12h9v12z"
    }
  }]
};
exports.tablet = tablet;
var tv = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.331 4.502c-1.388-0.199-2.865-0.344-4.407-0.425l2.576-2.576-1-1-3.509 3.509c-0.328-0.006-0.659-0.009-0.991-0.009v0l-4-4-1 1 3.034 3.034c-1.889 0.066-3.693 0.227-5.365 0.467-0.43 1.683-0.669 3.543-0.669 5.498s0.239 3.815 0.669 5.498c2.244 0.323 4.724 0.502 7.331 0.502s5.087-0.179 7.331-0.502c0.43-1.683 0.669-3.543 0.669-5.498s-0.239-3.815-0.669-5.498zM13.498 13.666c-1.683 0.215-3.543 0.334-5.498 0.334s-3.815-0.119-5.498-0.334c-0.323-1.122-0.502-2.362-0.502-3.666s0.179-2.543 0.502-3.666c1.683-0.215 3.543-0.334 5.498-0.334s3.815 0.119 5.498 0.334c0.323 1.122 0.502 2.362 0.502 3.666s-0.179 2.543-0.502 3.666z"
    }
  }]
};
exports.tv = tv;
var drawer = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.89 10.188l-4-5c-0.095-0.119-0.239-0.188-0.39-0.188h-7c-0.152 0-0.296 0.069-0.39 0.188l-4 5c-0.071 0.089-0.11 0.199-0.11 0.312v4.5c0 0.552 0.448 1 1 1h14c0.552 0 1-0.448 1-1v-4.5c0-0.114-0.039-0.224-0.11-0.312zM15 11h-3.5l-2 2h-3l-2-2h-3.5v-0.325l3.74-4.675h6.519l3.74 4.675v0.325z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 8h-7c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 10h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.drawer = drawer;
var drawer2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.89 10.188l-4-5c-0.095-0.119-0.239-0.188-0.39-0.188h-7c-0.152 0-0.296 0.069-0.39 0.188l-4 5c-0.071 0.089-0.11 0.199-0.11 0.312v4.5c0 0.552 0.448 1 1 1h14c0.552 0 1-0.448 1-1v-4.5c0-0.114-0.039-0.224-0.11-0.312zM15 11h-3.5l-2 2h-3l-2-2h-3.5v-0.325l3.74-4.675h6.519l3.74 4.675v0.325z"
    }
  }]
};
exports.drawer2 = drawer2;
var boxAdd = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 1h-10l-3 3v10.5c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10.5l-3-3zM8 13l-5-4h3v-3h4v3h3l-5 4zM2.414 3l1-1h9.172l1 1h-11.172z"
    }
  }]
};
exports.boxAdd = boxAdd;
var boxRemove = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 1h-10l-3 3v10.5c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10.5l-3-3zM10 10v3h-4v-3h-3l5-4 5 4h-3zM2.414 3l1-1h9.171l1 1h-11.171z"
    }
  }]
};
exports.boxRemove = boxRemove;
var download = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 9l4-4h-3v-4h-2v4h-3zM11.636 7.364l-1.121 1.121 4.064 1.515-6.579 2.453-6.579-2.453 4.064-1.515-1.121-1.121-4.364 1.636v4l8 3 8-3v-4z"
    }
  }]
};
exports.download = download;
var upload = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9h2v-4h3l-4-4-4 4h3zM10 6.75v1.542l4.579 1.708-6.579 2.453-6.579-2.453 4.579-1.708v-1.542l-6 2.25v4l8 3 8-3v-4z"
    }
  }]
};
exports.upload = upload;
var floppyDisk = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 0h-14v16h16v-14l-2-2zM8 2h2v4h-2v-4zM14 14h-12v-12h1v5h9v-5h1.172l0.828 0.828v11.172z"
    }
  }]
};
exports.floppyDisk = floppyDisk;
var drive = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 14h10c1.657 0 3-1.343 3-3h-16c0 1.657 1.343 3 3 3zM13 12h1v1h-1v-1zM15 2h-14l-1 8h16z"
    }
  }]
};
exports.drive = drive;
var database = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 1.119-8 2.5v2c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-2c0-1.381-3.582-2.5-8-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 8.5c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 13c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z"
    }
  }]
};
exports.database = database;
var undo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1c-2.209 0-4.209 0.896-5.657 2.343l-2.343-2.343v6h6l-2.243-2.243c1.086-1.086 2.586-1.757 4.243-1.757 3.314 0 6 2.686 6 6 0 1.792-0.786 3.401-2.032 4.5l1.323 1.5c1.661-1.466 2.709-3.611 2.709-6 0-4.418-3.582-8-8-8z"
    }
  }]
};
exports.undo = undo;
var redo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 9c0 2.389 1.048 4.534 2.709 6l1.323-1.5c-1.246-1.099-2.031-2.708-2.031-4.5 0-3.314 2.686-6 6-6 1.657 0 3.157 0.672 4.243 1.757l-2.243 2.243h6v-6l-2.343 2.343c-1.448-1.448-3.448-2.343-5.657-2.343-4.418 0-8 3.582-8 8z"
    }
  }]
};
exports.redo = redo;
var undo2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.904 16c1.777-3.219 2.076-8.13-4.904-7.966v3.966l-6-6 6-6v3.881c8.359-0.218 9.29 7.378 4.904 12.119z"
    }
  }]
};
exports.undo2 = undo2;
var redo2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 3.881v-3.881l6 6-6 6v-3.966c-6.98-0.164-6.681 4.747-4.904 7.966-4.386-4.741-3.455-12.337 4.904-12.119z"
    }
  }]
};
exports.redo2 = redo2;
var forward = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.096 0c-1.777 3.219-2.076 8.13 4.904 7.966v-3.966l6 6-6 6v-3.881c-8.359 0.218-9.29-7.378-4.904-12.119z"
    }
  }]
};
exports.forward = forward;
var reply = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 12.119v3.881l-6-6 6-6v3.966c6.98 0.164 6.681-4.747 4.904-7.966 4.386 4.741 3.455 12.337-4.904 12.119z"
    }
  }]
};
exports.reply = reply;
var bubble = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"
    }
  }]
};
exports.bubble = bubble;
var bubbles = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M17 14.081c0 0.711 0.407 1.327 1 1.628v0.249c-0.166 0.023-0.335 0.035-0.508 0.035-1.063 0-2.021-0.446-2.699-1.16-0.41 0.109-0.844 0.168-1.293 0.168-2.485 0-4.5-1.791-4.5-4s2.015-4 4.5-4c2.485 0 4.5 1.791 4.5 4 0 0.865-0.309 1.665-0.834 2.32-0.107 0.232-0.166 0.489-0.166 0.761zM8 0c4.351 0 7.89 2.822 7.997 6.336-0.768-0.343-1.619-0.524-2.497-0.524-1.493 0-2.903 0.523-3.971 1.472-1.107 0.984-1.717 2.304-1.717 3.716 0 0.698 0.149 1.373 0.433 1.997-0.082 0.002-0.164 0.003-0.246 0.003-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"
    }
  }]
};
exports.bubbles = bubbles;
var bubbles2 = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 0v0c4.142 0 7.5 2.717 7.5 6.069s-3.358 6.069-7.5 6.069c-0.398 0-0.788-0.025-1.169-0.074-1.611 1.605-3.471 1.892-5.331 1.935v-0.393c1.004-0.49 1.813-1.382 1.813-2.402 0-0.142-0.011-0.282-0.032-0.419-1.696-1.113-2.781-2.812-2.781-4.717 0-3.352 3.358-6.069 7.5-6.069zM15.563 13.604c0 0.874 0.567 1.639 1.438 2.059v0.337c-1.611-0.036-3.090-0.283-4.487-1.658-0.33 0.041-0.669 0.063-1.013 0.063-1.492 0-2.866-0.402-3.963-1.079 2.261-0.008 4.395-0.732 6.013-2.042 0.816-0.66 1.459-1.435 1.913-2.302 0.481-0.92 0.724-1.9 0.724-2.913 0-0.163-0.007-0.326-0.020-0.487 1.134 0.936 1.832 2.213 1.832 3.62 0 1.633-0.94 3.089-2.41 4.043-0.018 0.117-0.027 0.237-0.027 0.359z"
    }
  }]
};
exports.bubbles2 = bubbles2;
var bubble2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 3c-0.858 0-1.687 0.135-2.464 0.402-0.73 0.251-1.38 0.605-1.932 1.054-1.035 0.841-1.604 1.922-1.604 3.044 0 0.63 0.175 1.24 0.52 1.815 0.356 0.592 0.89 1.134 1.547 1.566 0.474 0.312 0.793 0.812 0.878 1.373 0.028 0.187 0.046 0.376 0.053 0.564 0.117-0.097 0.23-0.201 0.342-0.312 0.377-0.377 0.887-0.586 1.414-0.586 0.084 0 0.168 0.005 0.252 0.016 0.328 0.042 0.662 0.063 0.995 0.063 0.858 0 1.687-0.135 2.464-0.402 0.73-0.251 1.38-0.605 1.932-1.054 1.035-0.841 1.604-1.922 1.604-3.044s-0.57-2.203-1.604-3.044c-0.552-0.448-1.202-0.803-1.932-1.054-0.777-0.267-1.606-0.402-2.464-0.402zM8 1v0c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"
    }
  }]
};
exports.bubble2 = bubble2;
var bubbles3 = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M17 14.081c0 0.711 0.407 1.327 1 1.628v0.249c-0.166 0.023-0.335 0.035-0.508 0.035-1.063 0-2.021-0.446-2.699-1.16-0.41 0.109-0.844 0.168-1.293 0.168-2.485 0-4.5-1.791-4.5-4s2.015-4 4.5-4c2.485 0 4.5 1.791 4.5 4 0 0.865-0.309 1.665-0.834 2.32-0.107 0.232-0.166 0.489-0.166 0.761zM3.604 3.456c-1.035 0.841-1.604 1.922-1.604 3.044 0 0.63 0.175 1.24 0.52 1.815 0.356 0.592 0.89 1.134 1.547 1.566 0.474 0.312 0.793 0.812 0.878 1.373 0.028 0.187 0.046 0.376 0.053 0.564 0.117-0.097 0.23-0.201 0.342-0.312 0.377-0.377 0.887-0.586 1.414-0.586 0.084 0 0.168 0.005 0.252 0.016 0.327 0.042 0.662 0.063 0.994 0.063v2c-0.424-0-0.84-0.027-1.246-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5 4.351 0 7.89 2.822 7.997 6.336-0.642-0.286-1.341-0.46-2.067-0.509-0.18-0.876-0.709-1.7-1.535-2.371-0.552-0.448-1.202-0.803-1.932-1.054-0.777-0.267-1.606-0.402-2.464-0.402s-1.687 0.135-2.464 0.402c-0.73 0.251-1.38 0.605-1.932 1.054z"
    }
  }]
};
exports.bubbles3 = bubbles3;
var bubbles4 = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 2c-0.792 0-1.556 0.124-2.272 0.369-0.671 0.23-1.267 0.554-1.773 0.963-0.938 0.759-1.455 1.731-1.455 2.737 0 0.562 0.157 1.109 0.467 1.623 0.323 0.537 0.811 1.028 1.41 1.421 0.476 0.312 0.796 0.812 0.881 1.374 0.014 0.094 0.025 0.188 0.034 0.282 0.043-0.039 0.085-0.080 0.127-0.122 0.377-0.376 0.886-0.583 1.411-0.583 0.084 0 0.167 0.005 0.251 0.016 0.303 0.038 0.611 0.058 0.918 0.058 0.792 0 1.556-0.124 2.272-0.369 0.671-0.23 1.267-0.554 1.774-0.963 0.938-0.759 1.455-1.731 1.455-2.737s-0.517-1.978-1.455-2.737c-0.506-0.41-1.103-0.734-1.774-0.963-0.716-0.245-1.48-0.369-2.272-0.369zM7.5 0v0c4.142 0 7.5 2.717 7.5 6.069s-3.358 6.069-7.5 6.069c-0.398 0-0.788-0.025-1.169-0.074-1.611 1.605-3.471 1.892-5.331 1.935v-0.393c1.004-0.49 1.813-1.382 1.813-2.402 0-0.142-0.011-0.282-0.032-0.419-1.696-1.113-2.781-2.812-2.781-4.717 0-3.352 3.358-6.069 7.5-6.069zM15.563 13.604c0 0.874 0.567 1.639 1.438 2.059v0.337c-1.611-0.036-3.090-0.283-4.487-1.658-0.33 0.041-0.669 0.063-1.013 0.063-1.492 0-2.866-0.402-3.963-1.079 2.261-0.008 4.395-0.732 6.013-2.042 0.816-0.66 1.459-1.435 1.913-2.302 0.481-0.92 0.724-1.9 0.724-2.913 0-0.163-0.007-0.326-0.020-0.487 1.134 0.936 1.832 2.213 1.832 3.62 0 1.633-0.94 3.089-2.41 4.043-0.018 0.117-0.027 0.237-0.027 0.359z"
    }
  }]
};
exports.bubbles4 = bubbles4;
var user = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
    }
  }]
};
exports.user = user;
var users = {
  "viewBox": "0 0 18 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 12.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.112 12.427c0.864-0.565 1.939-0.994 3.122-1.256-0.235-0.278-0.449-0.588-0.633-0.922-0.475-0.863-0.726-1.813-0.726-2.748 0-1.344 0-2.614 0.478-3.653 0.464-1.008 1.299-1.633 2.488-1.867-0.264-1.195-0.968-1.98-2.841-1.98-3 0-3 2.015-3 4.5 0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h4.359c0.227-0.202 0.478-0.393 0.753-0.573z"
    }
  }]
};
exports.users = users;
var userPlus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 11.5c0-2.363 1.498-4.383 3.594-5.159 0.254-0.571 0.406-1.206 0.406-1.841 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h6.208c-0.135-0.477-0.208-0.98-0.208-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 7c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5zM14 12h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
    }
  }]
};
exports.userPlus = userPlus;
var userMinus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 11.5c0-2.363 1.498-4.383 3.594-5.159 0.254-0.571 0.406-1.206 0.406-1.841 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h6.208c-0.135-0.477-0.208-0.98-0.208-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 7c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5zM14 12h-5v-1h5v1z"
    }
  }]
};
exports.userMinus = userMinus;
var userCheck = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 9.5l-4.5 4.5-1.5-1.5-1 1 2.5 2.5 5.5-5.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 12h5v-1.799c-1.050-0.613-2.442-1.033-4-1.16v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h7v-1z"
    }
  }]
};
exports.userCheck = userCheck;
var userTie = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 3c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM12.001 7h-0.553l-3.111 6.316 1.163-5.816-1.5-1.5-1.5 1.5 1.163 5.816-3.111-6.316h-0.554c-1.999 0-1.999 1.344-1.999 3v5h12v-5c0-1.656 0-3-1.999-3z"
    }
  }]
};
exports.userTie = userTie;
var quotesLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"
    }
  }]
};
exports.quotesLeft = quotesLeft;
var quotesRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"
    }
  }]
};
exports.quotesRight = quotesRight;
var hourGlass = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.39 8c2.152-1.365 3.61-3.988 3.61-7 0-0.339-0.019-0.672-0.054-1h-13.891c-0.036 0.328-0.054 0.661-0.054 1 0 3.012 1.457 5.635 3.609 7-2.152 1.365-3.609 3.988-3.609 7 0 0.339 0.019 0.672 0.054 1h13.891c0.036-0.328 0.054-0.661 0.054-1 0-3.012-1.457-5.635-3.609-7zM2.5 15c0-2.921 1.253-5.397 3.5-6.214v-1.572c-2.247-0.817-3.5-3.294-3.5-6.214v0h11c0 2.921-1.253 5.397-3.5 6.214v1.572c2.247 0.817 3.5 3.294 3.5 6.214h-11zM9.682 10.462c-1.12-0.635-1.181-1.459-1.182-1.959v-1.004c0-0.5 0.059-1.327 1.184-1.963 0.602-0.349 1.122-0.88 1.516-1.537h-6.4c0.395 0.657 0.916 1.188 1.518 1.538 1.12 0.635 1.181 1.459 1.182 1.959v1.004c0 0.5-0.059 1.327-1.184 1.963-1.135 0.659-1.98 1.964-2.236 3.537h7.839c-0.256-1.574-1.102-2.879-2.238-3.538z"
    }
  }]
};
exports.hourGlass = hourGlass;
var spinner = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.243 3.757c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM13 8c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.243 12.243c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM7 14c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.757 12.243c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.257 3.757c0 0 0 0 0 0 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0.875 8c0-0.621 0.504-1.125 1.125-1.125s1.125 0.504 1.125 1.125c0 0.621-0.504 1.125-1.125 1.125s-1.125-0.504-1.125-1.125z"
    }
  }]
};
exports.spinner = spinner;
var spinner2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"
    }
  }]
};
exports.spinner2 = spinner2;
var spinner3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 4.736c-0.515 0-0.933-0.418-0.933-0.933v-2.798c0-0.515 0.418-0.933 0.933-0.933s0.933 0.418 0.933 0.933v2.798c0 0.515-0.418 0.933-0.933 0.933z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 15.577c-0.322 0-0.583-0.261-0.583-0.583v-2.798c0-0.322 0.261-0.583 0.583-0.583s0.583 0.261 0.583 0.583v2.798c0 0.322-0.261 0.583-0.583 0.583z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.902 5.24c-0.302 0-0.596-0.157-0.758-0.437l-1.399-2.423c-0.241-0.418-0.098-0.953 0.32-1.194s0.953-0.098 1.194 0.32l1.399 2.423c0.241 0.418 0.098 0.953-0.32 1.194-0.138 0.079-0.288 0.117-0.436 0.117z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.498 14.582c-0.181 0-0.358-0.094-0.455-0.262l-1.399-2.423c-0.145-0.251-0.059-0.572 0.192-0.717s0.572-0.059 0.717 0.192l1.399 2.423c0.145 0.251 0.059 0.572-0.192 0.717-0.083 0.048-0.173 0.070-0.262 0.070z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.365 6.718c-0.138 0-0.279-0.035-0.407-0.109l-2.423-1.399c-0.39-0.225-0.524-0.724-0.299-1.115s0.724-0.524 1.115-0.299l2.423 1.399c0.39 0.225 0.524 0.724 0.299 1.115-0.151 0.262-0.425 0.408-0.707 0.408z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.057 11.964c-0.079 0-0.159-0.020-0.233-0.063l-2.423-1.399c-0.223-0.129-0.299-0.414-0.171-0.637s0.414-0.299 0.637-0.171l2.423 1.399c0.223 0.129 0.299 0.414 0.171 0.637-0.086 0.15-0.243 0.233-0.404 0.233z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.803 8.758h-2.798c-0.418 0-0.758-0.339-0.758-0.758s0.339-0.758 0.758-0.758h2.798c0.419 0 0.758 0.339 0.758 0.758s-0.339 0.758-0.758 0.758z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.995 8.466c-0 0 0 0 0 0h-2.798c-0.258-0-0.466-0.209-0.466-0.466s0.209-0.466 0.466-0.466c0 0 0 0 0 0h2.798c0.258 0 0.466 0.209 0.466 0.466s-0.209 0.466-0.466 0.466z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.943 12.197c-0.242 0-0.477-0.125-0.606-0.35-0.193-0.335-0.079-0.762 0.256-0.955l2.423-1.399c0.335-0.193 0.762-0.079 0.955 0.256s0.079 0.762-0.256 0.955l-2.423 1.399c-0.11 0.064-0.23 0.094-0.349 0.094z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.635 6.368c-0.161 0-0.318-0.084-0.404-0.233-0.129-0.223-0.052-0.508 0.171-0.637l2.423-1.399c0.223-0.129 0.508-0.052 0.637 0.171s0.052 0.508-0.171 0.637l-2.423 1.399c-0.073 0.042-0.154 0.063-0.233 0.063z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.502 14.699c-0.109 0-0.219-0.028-0.32-0.086-0.307-0.177-0.412-0.569-0.235-0.876l1.399-2.423c0.177-0.307 0.569-0.412 0.876-0.235s0.412 0.569 0.235 0.876l-1.399 2.423c-0.119 0.206-0.334 0.321-0.556 0.321z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.098 4.832c-0.079 0-0.159-0.020-0.233-0.063-0.223-0.129-0.299-0.414-0.171-0.637l1.399-2.423c0.129-0.223 0.414-0.299 0.637-0.171s0.299 0.414 0.171 0.637l-1.399 2.423c-0.086 0.15-0.243 0.233-0.404 0.233z"
    }
  }]
};
exports.spinner3 = spinner3;
var spinner4 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 8c0-0.19 0.011-0.378 0.032-0.563l-2.89-0.939c-0.092 0.487-0.141 0.989-0.141 1.502 0 2.3 0.971 4.374 2.526 5.833l1.786-2.458c-0.814-0.889-1.312-2.074-1.312-3.375zM13 8c0 1.301-0.497 2.486-1.312 3.375l1.786 2.458c1.555-1.459 2.526-3.533 2.526-5.833 0-0.513-0.049-1.015-0.141-1.502l-2.89 0.939c0.021 0.185 0.032 0.373 0.032 0.563zM9 3.1c1.436 0.292 2.649 1.199 3.351 2.435l2.89-0.939c-1.144-2.428-3.473-4.188-6.241-4.534v3.038zM3.649 5.535c0.702-1.236 1.914-2.143 3.351-2.435v-3.038c-2.769 0.345-5.097 2.105-6.241 4.534l2.89 0.939zM10.071 12.552c-0.631 0.288-1.332 0.448-2.071 0.448s-1.44-0.16-2.071-0.448l-1.786 2.458c1.144 0.631 2.458 0.99 3.857 0.99s2.713-0.359 3.857-0.99l-1.786-2.458z"
    }
  }]
};
exports.spinner4 = spinner4;
var spinner5 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"
    }
  }]
};
exports.spinner5 = spinner5;
var spinner6 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"
    }
  }]
};
exports.spinner6 = spinner6;
var spinner7 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 14.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0 8c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM13 8c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM1.904 3.404c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM11.096 12.596c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM1.904 12.596c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM11.096 3.404c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5z"
    }
  }]
};
exports.spinner7 = spinner7;
var spinner8 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z"
    }
  }]
};
exports.spinner8 = spinner8;
var spinner9 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z"
    }
  }]
};
exports.spinner9 = spinner9;
var spinner10 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.001 8.025l-0 0c0 0 0 0.001 0 0.003 0.002 0.061 0.009 0.12 0.021 0.177 0.003 0.027 0.007 0.057 0.011 0.090 0.003 0.029 0.007 0.061 0.011 0.095 0.006 0.040 0.012 0.083 0.019 0.128 0.013 0.090 0.028 0.189 0.045 0.296 0.021 0.101 0.044 0.21 0.068 0.326 0.011 0.058 0.028 0.117 0.044 0.178s0.032 0.123 0.049 0.188c0.009 0.032 0.016 0.065 0.027 0.097s0.021 0.065 0.031 0.098 0.043 0.134 0.065 0.203c0.006 0.017 0.011 0.035 0.017 0.052s0.013 0.034 0.019 0.052 0.026 0.070 0.039 0.105c0.027 0.070 0.053 0.142 0.081 0.215 0.031 0.071 0.062 0.144 0.094 0.218 0.016 0.037 0.032 0.074 0.048 0.111s0.035 0.073 0.053 0.111 0.073 0.148 0.11 0.224c0.039 0.075 0.081 0.149 0.123 0.224 0.021 0.037 0.042 0.075 0.063 0.113s0.045 0.074 0.068 0.112 0.093 0.149 0.14 0.224c0.198 0.295 0.417 0.587 0.66 0.864 0.245 0.275 0.511 0.535 0.792 0.775 0.284 0.236 0.582 0.452 0.886 0.642 0.306 0.188 0.619 0.349 0.928 0.487 0.078 0.032 0.156 0.063 0.232 0.095 0.038 0.015 0.076 0.032 0.115 0.046s0.077 0.027 0.115 0.041 0.151 0.054 0.226 0.078c0.075 0.022 0.15 0.044 0.224 0.066 0.037 0.011 0.073 0.022 0.109 0.031s0.073 0.018 0.109 0.027 0.143 0.035 0.213 0.052c0.070 0.014 0.139 0.027 0.207 0.040 0.034 0.006 0.067 0.013 0.101 0.019 0.017 0.003 0.033 0.006 0.049 0.009s0.033 0.005 0.049 0.007c0.066 0.009 0.13 0.018 0.192 0.027 0.031 0.004 0.062 0.009 0.093 0.013s0.061 0.006 0.091 0.009 0.118 0.010 0.174 0.015c0.056 0.005 0.111 0.011 0.164 0.012 0.004 0 0.007 0 0.011 0 0.010 0.544 0.453 0.982 1 0.982 0.008 0 0.017-0 0.025-0.001v0c0 0 0.001-0 0.004-0 0.061-0.002 0.12-0.009 0.177-0.021 0.027-0.003 0.057-0.007 0.090-0.011 0.029-0.003 0.061-0.007 0.095-0.011 0.040-0.006 0.083-0.012 0.128-0.019 0.090-0.013 0.189-0.028 0.296-0.045 0.101-0.021 0.21-0.044 0.326-0.068 0.058-0.011 0.117-0.028 0.178-0.044s0.123-0.033 0.188-0.049c0.032-0.009 0.065-0.016 0.097-0.027s0.065-0.021 0.098-0.031 0.134-0.043 0.203-0.065c0.017-0.006 0.035-0.011 0.052-0.017s0.034-0.013 0.052-0.019 0.070-0.026 0.105-0.039c0.070-0.027 0.142-0.053 0.215-0.081 0.071-0.031 0.144-0.062 0.218-0.094 0.037-0.016 0.074-0.032 0.111-0.048s0.073-0.035 0.111-0.053 0.148-0.073 0.224-0.11c0.075-0.039 0.149-0.081 0.224-0.123 0.037-0.021 0.075-0.042 0.113-0.063s0.074-0.045 0.112-0.068 0.149-0.093 0.224-0.14c0.295-0.197 0.587-0.417 0.864-0.66 0.275-0.245 0.535-0.511 0.775-0.792 0.236-0.284 0.452-0.582 0.642-0.886 0.188-0.306 0.349-0.619 0.487-0.928 0.032-0.078 0.063-0.156 0.095-0.232 0.015-0.038 0.032-0.076 0.046-0.115s0.027-0.077 0.040-0.115 0.054-0.151 0.078-0.226c0.022-0.075 0.044-0.15 0.066-0.224 0.011-0.037 0.022-0.073 0.031-0.109s0.018-0.073 0.027-0.109 0.035-0.143 0.052-0.213c0.014-0.070 0.027-0.139 0.040-0.207 0.006-0.034 0.013-0.067 0.019-0.101 0.003-0.017 0.006-0.033 0.009-0.049s0.005-0.033 0.007-0.050c0.009-0.065 0.018-0.13 0.027-0.192 0.004-0.031 0.009-0.062 0.013-0.093s0.006-0.061 0.009-0.091 0.010-0.118 0.015-0.174c0.005-0.056 0.011-0.111 0.012-0.165 0-0.008 0.001-0.016 0.001-0.025 0.55-0.002 0.996-0.449 0.996-1 0-0.008-0-0.017-0.001-0.025h0c0 0-0-0.001-0-0.003-0.002-0.061-0.009-0.12-0.021-0.177-0.003-0.027-0.007-0.057-0.011-0.090-0.003-0.029-0.007-0.061-0.011-0.095-0.006-0.040-0.012-0.083-0.019-0.128-0.013-0.090-0.028-0.189-0.045-0.296-0.021-0.101-0.044-0.21-0.068-0.326-0.011-0.058-0.028-0.117-0.044-0.178s-0.032-0.123-0.049-0.188c-0.009-0.032-0.016-0.065-0.027-0.097s-0.021-0.065-0.031-0.098-0.043-0.134-0.065-0.203c-0.005-0.017-0.011-0.035-0.017-0.052s-0.013-0.034-0.019-0.052-0.026-0.070-0.039-0.105c-0.027-0.070-0.053-0.142-0.081-0.215-0.031-0.071-0.062-0.144-0.094-0.218-0.016-0.037-0.032-0.074-0.048-0.111s-0.035-0.073-0.053-0.111-0.073-0.148-0.11-0.224c-0.039-0.075-0.081-0.149-0.123-0.224-0.021-0.037-0.042-0.075-0.063-0.113s-0.045-0.074-0.068-0.112-0.093-0.149-0.14-0.224c-0.197-0.295-0.417-0.587-0.66-0.864-0.245-0.275-0.511-0.535-0.792-0.775-0.284-0.236-0.582-0.452-0.886-0.642-0.306-0.188-0.619-0.349-0.928-0.487-0.078-0.032-0.156-0.063-0.232-0.095-0.038-0.015-0.076-0.032-0.115-0.046s-0.077-0.027-0.115-0.040-0.151-0.054-0.226-0.078c-0.075-0.022-0.15-0.044-0.224-0.066-0.037-0.010-0.073-0.022-0.109-0.031s-0.073-0.018-0.109-0.027-0.143-0.035-0.213-0.052c-0.070-0.014-0.139-0.027-0.207-0.040-0.034-0.006-0.067-0.013-0.101-0.019-0.017-0.003-0.033-0.006-0.049-0.009s-0.033-0.005-0.049-0.007c-0.066-0.009-0.13-0.018-0.192-0.027-0.031-0.004-0.062-0.009-0.093-0.013s-0.061-0.006-0.091-0.009-0.118-0.010-0.174-0.015c-0.056-0.005-0.111-0.011-0.164-0.012-0.013-0-0.026-0.001-0.039-0.001-0.010-0.543-0.454-0.981-0.999-0.981-0.008 0-0.017 0-0.025 0.001l-0-0c0 0-0.001 0-0.003 0-0.061 0.002-0.12 0.009-0.177 0.021-0.027 0.003-0.057 0.007-0.090 0.011-0.029 0.003-0.061 0.007-0.095 0.011-0.040 0.006-0.083 0.012-0.128 0.019-0.090 0.013-0.189 0.028-0.296 0.045-0.101 0.021-0.21 0.044-0.326 0.068-0.058 0.011-0.117 0.028-0.178 0.044s-0.123 0.033-0.188 0.049c-0.032 0.009-0.065 0.016-0.097 0.027s-0.065 0.021-0.098 0.031-0.134 0.043-0.203 0.065c-0.017 0.006-0.035 0.011-0.052 0.017s-0.034 0.013-0.052 0.019-0.070 0.026-0.105 0.039c-0.070 0.027-0.142 0.053-0.215 0.081-0.071 0.031-0.144 0.062-0.218 0.094-0.037 0.016-0.074 0.032-0.111 0.048s-0.073 0.035-0.111 0.053-0.148 0.073-0.224 0.11c-0.075 0.039-0.149 0.081-0.224 0.123-0.037 0.021-0.075 0.042-0.113 0.063s-0.074 0.045-0.112 0.068-0.149 0.093-0.224 0.14c-0.295 0.198-0.587 0.417-0.864 0.66-0.275 0.245-0.535 0.511-0.775 0.792-0.236 0.284-0.452 0.582-0.642 0.886-0.188 0.306-0.349 0.619-0.487 0.928-0.032 0.078-0.063 0.156-0.095 0.232-0.015 0.038-0.032 0.076-0.046 0.115s-0.027 0.077-0.040 0.115-0.054 0.151-0.078 0.226c-0.022 0.075-0.044 0.15-0.066 0.224-0.011 0.037-0.022 0.073-0.032 0.109s-0.018 0.073-0.027 0.109-0.035 0.143-0.052 0.213c-0.014 0.070-0.027 0.139-0.040 0.207-0.006 0.034-0.013 0.067-0.019 0.101-0.003 0.017-0.006 0.033-0.009 0.049s-0.005 0.033-0.007 0.050c-0.009 0.065-0.018 0.13-0.027 0.192-0.004 0.031-0.009 0.062-0.013 0.093s-0.006 0.061-0.009 0.091-0.010 0.118-0.015 0.174c-0.005 0.056-0.011 0.111-0.012 0.165-0 0.009-0.001 0.017-0.001 0.025-0.537 0.017-0.967 0.458-0.967 0.999 0 0.008 0 0.017 0.001 0.025zM1.149 7.011c0.001-0.003 0.001-0.006 0.002-0.009 0.010-0.051 0.026-0.102 0.040-0.155s0.030-0.107 0.045-0.163c0.008-0.028 0.015-0.056 0.024-0.084s0.019-0.057 0.028-0.086 0.038-0.116 0.058-0.176c0.005-0.015 0.010-0.030 0.015-0.045s0.012-0.030 0.017-0.045 0.023-0.060 0.035-0.091 0.048-0.123 0.073-0.186c0.028-0.062 0.056-0.125 0.084-0.189 0.014-0.032 0.028-0.064 0.043-0.096s0.032-0.064 0.048-0.096 0.065-0.128 0.098-0.194c0.034-0.065 0.073-0.128 0.109-0.194 0.018-0.032 0.037-0.065 0.056-0.098s0.040-0.064 0.061-0.096c0.041-0.064 0.082-0.129 0.124-0.194 0.176-0.255 0.369-0.506 0.583-0.744 0.217-0.236 0.451-0.459 0.697-0.665 0.25-0.202 0.511-0.385 0.776-0.547 0.268-0.159 0.541-0.294 0.808-0.41 0.068-0.027 0.135-0.053 0.202-0.079 0.033-0.013 0.066-0.027 0.099-0.038s0.067-0.022 0.1-0.033 0.131-0.045 0.196-0.065c0.065-0.018 0.13-0.036 0.194-0.054 0.032-0.009 0.063-0.019 0.095-0.026s0.063-0.014 0.094-0.021 0.123-0.028 0.184-0.042c0.061-0.011 0.12-0.021 0.179-0.032 0.029-0.005 0.058-0.010 0.087-0.015 0.014-0.003 0.029-0.005 0.043-0.008s0.029-0.003 0.043-0.005c0.056-0.007 0.112-0.014 0.166-0.020 0.027-0.003 0.053-0.007 0.080-0.010s0.053-0.004 0.078-0.006 0.102-0.007 0.15-0.011c0.049-0.003 0.095-0.008 0.142-0.008 0.091-0.002 0.177-0.004 0.256-0.006 0.073 0.003 0.14 0.005 0.2 0.007 0.030 0.001 0.058 0.002 0.085 0.002 0.033 0.002 0.064 0.004 0.093 0.006 0.033 0.002 0.063 0.004 0.091 0.006 0.051 0.008 0.103 0.012 0.156 0.012 0.007 0 0.015-0 0.022-0.001 0.002 0 0.004 0 0.004 0v-0c0.487-0.012 0.887-0.372 0.962-0.84 0.008 0.002 0.017 0.004 0.025 0.006 0.051 0.010 0.102 0.026 0.155 0.040s0.107 0.030 0.163 0.045c0.028 0.008 0.056 0.015 0.084 0.024s0.057 0.019 0.086 0.028 0.116 0.038 0.176 0.058c0.015 0.005 0.030 0.010 0.045 0.015s0.030 0.012 0.045 0.017 0.060 0.023 0.091 0.035 0.123 0.048 0.186 0.073c0.062 0.028 0.125 0.056 0.189 0.084 0.032 0.014 0.064 0.028 0.096 0.043s0.064 0.032 0.096 0.048 0.128 0.065 0.194 0.098c0.065 0.034 0.129 0.073 0.194 0.109 0.032 0.018 0.065 0.037 0.098 0.056s0.064 0.040 0.096 0.061 0.129 0.082 0.194 0.124c0.255 0.176 0.506 0.369 0.744 0.583 0.236 0.217 0.459 0.451 0.665 0.697 0.202 0.25 0.385 0.511 0.547 0.776 0.159 0.268 0.294 0.541 0.41 0.808 0.027 0.068 0.053 0.135 0.079 0.202 0.013 0.033 0.027 0.066 0.038 0.099s0.022 0.067 0.033 0.1 0.045 0.131 0.065 0.196c0.018 0.065 0.036 0.13 0.054 0.194 0.009 0.032 0.019 0.063 0.026 0.095s0.014 0.063 0.021 0.094 0.028 0.123 0.042 0.184c0.011 0.061 0.021 0.12 0.032 0.179 0.005 0.029 0.010 0.058 0.015 0.087 0.003 0.014 0.005 0.029 0.008 0.043s0.003 0.029 0.005 0.043c0.007 0.056 0.014 0.112 0.020 0.166 0.003 0.027 0.007 0.053 0.010 0.080s0.004 0.053 0.006 0.078 0.007 0.102 0.011 0.15c0.003 0.049 0.008 0.095 0.008 0.142 0.002 0.091 0.004 0.177 0.006 0.256-0.003 0.073-0.005 0.14-0.007 0.2-0.001 0.030-0.002 0.058-0.002 0.085-0.002 0.033-0.004 0.064-0.006 0.093-0.002 0.033-0.004 0.063-0.006 0.091-0.008 0.051-0.012 0.103-0.012 0.156 0 0.007 0 0.015 0.001 0.022-0 0.002-0 0.004-0 0.004h0c0.012 0.481 0.363 0.877 0.823 0.959-0.001 0.005-0.002 0.009-0.003 0.014-0.010 0.051-0.025 0.102-0.040 0.155s-0.030 0.107-0.045 0.163c-0.008 0.028-0.015 0.056-0.024 0.084s-0.019 0.057-0.028 0.086-0.039 0.116-0.058 0.176c-0.005 0.015-0.010 0.030-0.015 0.045s-0.012 0.030-0.017 0.045-0.023 0.060-0.035 0.091-0.048 0.123-0.073 0.186c-0.028 0.062-0.056 0.125-0.084 0.189-0.014 0.032-0.028 0.064-0.043 0.096s-0.032 0.064-0.048 0.096-0.065 0.128-0.098 0.194c-0.034 0.065-0.073 0.129-0.109 0.194-0.018 0.032-0.037 0.065-0.056 0.098s-0.040 0.064-0.061 0.096-0.082 0.129-0.124 0.194c-0.176 0.255-0.369 0.506-0.583 0.744-0.217 0.236-0.451 0.459-0.697 0.665-0.25 0.202-0.511 0.385-0.776 0.547-0.268 0.159-0.541 0.294-0.808 0.41-0.068 0.027-0.135 0.053-0.202 0.079-0.033 0.013-0.066 0.027-0.099 0.038s-0.067 0.022-0.1 0.033-0.131 0.045-0.196 0.065c-0.065 0.018-0.13 0.036-0.194 0.054-0.032 0.009-0.063 0.019-0.095 0.026s-0.063 0.014-0.094 0.021-0.123 0.028-0.184 0.042c-0.061 0.011-0.12 0.021-0.179 0.032-0.029 0.005-0.058 0.010-0.087 0.015-0.014 0.003-0.028 0.005-0.043 0.008s-0.029 0.003-0.043 0.005c-0.056 0.007-0.112 0.014-0.166 0.020-0.027 0.003-0.053 0.007-0.080 0.010s-0.053 0.004-0.078 0.006-0.102 0.007-0.15 0.011c-0.049 0.003-0.095 0.008-0.142 0.008-0.091 0.002-0.177 0.004-0.256 0.006-0.073-0.003-0.14-0.005-0.2-0.007-0.030-0.001-0.058-0.002-0.085-0.002-0.033-0.002-0.064-0.004-0.093-0.006-0.033-0.002-0.063-0.004-0.091-0.006-0.051-0.008-0.103-0.012-0.156-0.012-0.007 0-0.015 0-0.022 0.001-0.002-0-0.003-0-0.003-0v0c-0.484 0.012-0.883 0.369-0.961 0.834-0.050-0.010-0.101-0.025-0.153-0.039s-0.107-0.030-0.163-0.045c-0.028-0.008-0.056-0.015-0.084-0.024s-0.057-0.019-0.086-0.028-0.116-0.039-0.176-0.058c-0.015-0.005-0.030-0.010-0.045-0.015s-0.030-0.012-0.045-0.017-0.060-0.023-0.091-0.035-0.123-0.048-0.186-0.073c-0.062-0.028-0.125-0.056-0.189-0.084-0.032-0.014-0.064-0.028-0.096-0.043s-0.064-0.032-0.096-0.048-0.128-0.065-0.194-0.098c-0.065-0.034-0.129-0.073-0.194-0.109-0.032-0.018-0.065-0.037-0.098-0.056s-0.064-0.040-0.096-0.061c-0.064-0.041-0.129-0.082-0.194-0.124-0.255-0.175-0.506-0.369-0.744-0.583-0.236-0.217-0.459-0.451-0.665-0.697-0.202-0.25-0.385-0.511-0.547-0.776-0.159-0.268-0.294-0.541-0.41-0.808-0.027-0.068-0.053-0.135-0.079-0.202-0.013-0.033-0.027-0.066-0.038-0.099s-0.022-0.067-0.033-0.1-0.045-0.131-0.065-0.196c-0.018-0.065-0.036-0.13-0.054-0.194-0.009-0.032-0.019-0.063-0.026-0.095s-0.014-0.063-0.021-0.094-0.028-0.123-0.042-0.184c-0.011-0.061-0.021-0.12-0.032-0.179-0.005-0.029-0.010-0.058-0.015-0.087-0.003-0.014-0.005-0.028-0.008-0.043s-0.003-0.029-0.005-0.043c-0.007-0.056-0.014-0.112-0.020-0.166-0.003-0.027-0.007-0.053-0.010-0.080s-0.004-0.053-0.006-0.078-0.007-0.101-0.011-0.15c-0.003-0.049-0.008-0.095-0.008-0.142-0.002-0.091-0.004-0.177-0.006-0.256 0.003-0.073 0.005-0.14 0.007-0.2 0.001-0.030 0.002-0.058 0.002-0.085 0.002-0.033 0.004-0.064 0.006-0.093 0.002-0.033 0.004-0.063 0.006-0.091 0.008-0.051 0.012-0.103 0.012-0.156 0-0.007-0-0.015-0.001-0.022 0-0.002 0-0.003 0-0.003h-0c-0.012-0.49-0.377-0.893-0.851-0.964z"
    }
  }]
};
exports.spinner10 = spinner10;
var spinner11 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 6h-6l2.243-2.243c-1.133-1.133-2.64-1.757-4.243-1.757s-3.109 0.624-4.243 1.757c-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.133 1.133 2.64 1.757 4.243 1.757s3.109-0.624 4.243-1.757c0.095-0.095 0.185-0.192 0.273-0.292l1.505 1.317c-1.466 1.674-3.62 2.732-6.020 2.732-4.418 0-8-3.582-8-8s3.582-8 8-8c2.209 0 4.209 0.896 5.656 2.344l2.343-2.344v6z"
    }
  }]
};
exports.spinner11 = spinner11;
var binoculars = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 0h6v1h-6zM9 0h6v1h-6zM14.875 5h-0.875v-4h-4v4h-4v-4h-4v4h-0.875c-0.619 0-1.125 0.506-1.125 1.125v8.75c0 0.619 0.506 1.125 1.125 1.125h4.75c0.619 0 1.125-0.506 1.125-1.125v-5.875h2v5.875c0 0.619 0.506 1.125 1.125 1.125h4.75c0.619 0 1.125-0.506 1.125-1.125v-8.75c0-0.619-0.506-1.125-1.125-1.125zM5.438 15h-3.875c-0.309 0-0.563-0.225-0.563-0.5s0.253-0.5 0.563-0.5h3.875c0.309 0 0.563 0.225 0.563 0.5s-0.253 0.5-0.563 0.5zM8.5 8h-1c-0.275 0-0.5-0.225-0.5-0.5s0.225-0.5 0.5-0.5h1c0.275 0 0.5 0.225 0.5 0.5s-0.225 0.5-0.5 0.5zM14.438 15h-3.875c-0.309 0-0.563-0.225-0.563-0.5s0.253-0.5 0.563-0.5h3.875c0.309 0 0.563 0.225 0.563 0.5s-0.253 0.5-0.563 0.5z"
    }
  }]
};
exports.binoculars = binoculars;
var search = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
    }
  }]
};
exports.search = search;
var zoomIn = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zM7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
    }
  }]
};
exports.zoomIn = zoomIn;
var zoomOut = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zM3 5h6v2h-6z"
    }
  }]
};
exports.zoomOut = zoomOut;
var enlarge = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 0h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 16v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 16h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z"
    }
  }]
};
exports.enlarge = enlarge;
var shrink = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 7h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 9v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 7v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z"
    }
  }]
};
exports.shrink = shrink;
var enlarge2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 0v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM7 10.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z"
    }
  }]
};
exports.enlarge2 = enlarge2;
var shrink2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM16 1.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z"
    }
  }]
};
exports.shrink2 = shrink2;
var key = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 0c-2.761 0-5 2.239-5 5 0 0.313 0.029 0.619 0.084 0.916l-6.084 6.084v3c0 0.552 0.448 1 1 1h1v-1h2v-2h2v-2h2l1.298-1.298c0.531 0.192 1.105 0.298 1.702 0.298 2.761 0 5-2.239 5-5s-2.239-5-5-5zM12.498 5.002c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"
    }
  }]
};
exports.key = key;
var key2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.658 4.91l-1.58-1.58c-0.387-0.387-1.021-1.021-1.409-1.409l-1.58-1.58c-0.387-0.387-1.077-0.456-1.533-0.152l-4.319 2.88c-0.456 0.304-0.628 0.954-0.383 1.444l1.101 2.203c0.034 0.067 0.073 0.139 0.115 0.213l-5.571 5.571-0.5 3.5h3v-1h2v-2h2v-2h2v-1.112c0.1 0.060 0.196 0.113 0.284 0.157l2.203 1.101c0.49 0.245 1.14 0.072 1.444-0.383l2.88-4.319c0.304-0.456 0.236-1.146-0.152-1.533zM2.354 13.354l-0.707-0.707 4.868-4.868 0.707 0.707-4.868 4.868zM14.328 6.621l-0.707 0.707c-0.194 0.194-0.513 0.194-0.707 0l-4.243-4.243c-0.194-0.194-0.194-0.513 0-0.707l0.707-0.707c0.194-0.194 0.513-0.194 0.707 0l4.243 4.243c0.194 0.194 0.194 0.513 0 0.707z"
    }
  }]
};
exports.key2 = key2;
var lock = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.25 7h-0.25v-3c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v7.5c0 0.412 0.338 0.75 0.75 0.75h8.5c0.412 0 0.75-0.338 0.75-0.75v-7.5c0-0.412-0.338-0.75-0.75-0.75zM3 4c0-0.551 0.449-1 1-1h2c0.551 0 1 0.449 1 1v3h-4v-3z"
    }
  }]
};
exports.lock = lock;
var unlocked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 1c1.654 0 3 1.346 3 3v3h-2v-3c0-0.551-0.449-1-1-1h-2c-0.551 0-1 0.449-1 1v3h0.25c0.412 0 0.75 0.338 0.75 0.75v7.5c0 0.412-0.338 0.75-0.75 0.75h-8.5c-0.412 0-0.75-0.338-0.75-0.75v-7.5c0-0.412 0.338-0.75 0.75-0.75h6.25v-3c0-1.654 1.346-3 3-3h2z"
    }
  }]
};
exports.unlocked = unlocked;
var wrench = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.671 12.779l-7.196-6.168c0.335-0.63 0.525-1.348 0.525-2.111 0-2.485-2.015-4.5-4.5-4.5-0.455 0-0.893 0.068-1.307 0.193l2.6 2.6c0.389 0.389 0.389 1.025 0 1.414l-1.586 1.586c-0.389 0.389-1.025 0.389-1.414 0l-2.6-2.6c-0.125 0.414-0.193 0.852-0.193 1.307 0 2.485 2.015 4.5 4.5 4.5 0.763 0 1.482-0.19 2.111-0.525l6.168 7.196c0.358 0.418 0.969 0.441 1.358 0.052l1.586-1.586c0.389-0.389 0.365-1-0.052-1.358z"
    }
  }]
};
exports.wrench = wrench;
var equalizer = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 2v-0.25c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.413 0-0.75 0.337-0.75 0.75v0.25h-3v2h3v0.25c0 0.412 0.337 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h9v-2h-9zM4 4v-2h2v2h-2zM13 6.75c0-0.412-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.338-0.75 0.75v0.25h-9v2h9v0.25c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h3v-2h-3v-0.25zM10 9v-2h2v2h-2zM7 11.75c0-0.412-0.338-0.75-0.75-0.75h-2.5c-0.413 0-0.75 0.338-0.75 0.75v0.25h-3v2h3v0.25c0 0.412 0.337 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h9v-2h-9v-0.25zM4 14v-2h2v2h-2z"
    }
  }]
};
exports.equalizer = equalizer;
var equalizer2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 7h0.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-0.25v-3h-2v3h-0.25c-0.412 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v9h2v-9zM12 4h2v2h-2v-2zM9.25 13c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-0.25v-9h-2v9h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v3h2v-3h0.25zM7 10h2v2h-2v-2zM4.25 7c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-0.25v-3h-2v3h-0.25c-0.413 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.337 0.75 0.75 0.75h0.25v9h2v-9h0.25zM2 4h2v2h-2v-2z"
    }
  }]
};
exports.equalizer2 = equalizer2;
var cog = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.59 9.535c-0.839-1.454-0.335-3.317 1.127-4.164l-1.572-2.723c-0.449 0.263-0.972 0.414-1.529 0.414-1.68 0-3.042-1.371-3.042-3.062h-3.145c0.004 0.522-0.126 1.051-0.406 1.535-0.839 1.454-2.706 1.948-4.17 1.106l-1.572 2.723c0.453 0.257 0.845 0.634 1.123 1.117 0.838 1.452 0.336 3.311-1.12 4.16l1.572 2.723c0.448-0.261 0.967-0.41 1.522-0.41 1.675 0 3.033 1.362 3.042 3.046h3.145c-0.001-0.517 0.129-1.040 0.406-1.519 0.838-1.452 2.7-1.947 4.163-1.11l1.572-2.723c-0.45-0.257-0.839-0.633-1.116-1.113zM8 11.24c-1.789 0-3.24-1.45-3.24-3.24s1.45-3.24 3.24-3.24c1.789 0 3.24 1.45 3.24 3.24s-1.45 3.24-3.24 3.24z"
    }
  }]
};
exports.cog = cog;
var cogs = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.683 11.282l0.645-0.903-0.707-0.707-0.903 0.645c-0.168-0.094-0.347-0.168-0.535-0.222l-0.183-1.095h-1l-0.183 1.095c-0.188 0.053-0.368 0.128-0.535 0.222l-0.903-0.645-0.707 0.707 0.645 0.903c-0.094 0.168-0.168 0.347-0.222 0.535l-1.095 0.183v1l1.095 0.183c0.053 0.188 0.128 0.368 0.222 0.535l-0.645 0.903 0.707 0.707 0.903-0.645c0.168 0.094 0.347 0.168 0.535 0.222l0.183 1.095h1l0.183-1.095c0.188-0.053 0.368-0.128 0.535-0.222l0.903 0.645 0.707-0.707-0.645-0.903c0.094-0.168 0.168-0.347 0.222-0.535l1.095-0.182v-1l-1.095-0.183c-0.053-0.188-0.128-0.368-0.222-0.535zM3.5 13.5c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM16 6v-1l-1.053-0.191c-0.019-0.126-0.044-0.25-0.074-0.372l0.899-0.58-0.383-0.924-1.046 0.226c-0.066-0.108-0.136-0.213-0.211-0.315l0.609-0.88-0.707-0.707-0.88 0.609c-0.102-0.074-0.207-0.145-0.315-0.211l0.226-1.046-0.924-0.383-0.58 0.899c-0.122-0.030-0.246-0.054-0.372-0.074l-0.191-1.053h-1l-0.191 1.053c-0.126 0.019-0.25 0.044-0.372 0.074l-0.58-0.899-0.924 0.383 0.226 1.046c-0.108 0.066-0.213 0.136-0.315 0.211l-0.88-0.609-0.707 0.707 0.609 0.88c-0.074 0.102-0.145 0.207-0.211 0.315l-1.046-0.226-0.383 0.924 0.899 0.58c-0.030 0.122-0.054 0.246-0.074 0.372l-1.053 0.191v1l1.053 0.191c0.019 0.126 0.044 0.25 0.074 0.372l-0.899 0.58 0.383 0.924 1.046-0.226c0.066 0.108 0.136 0.213 0.211 0.315l-0.609 0.88 0.707 0.707 0.88-0.609c0.102 0.074 0.207 0.145 0.315 0.211l-0.226 1.046 0.924 0.383 0.58-0.899c0.122 0.030 0.246 0.054 0.372 0.074l0.191 1.053h1l0.191-1.053c0.126-0.019 0.25-0.044 0.372-0.074l0.58 0.899 0.924-0.383-0.226-1.046c0.108-0.066 0.213-0.136 0.315-0.211l0.88 0.609 0.707-0.707-0.609-0.88c0.074-0.102 0.145-0.207 0.211-0.315l1.046 0.226 0.383-0.924-0.899-0.58c0.030-0.122 0.054-0.246 0.074-0.372l1.053-0.191zM10.5 7.675c-1.201 0-2.175-0.974-2.175-2.175s0.974-2.175 2.175-2.175 2.175 0.974 2.175 2.175c0 1.201-0.974 2.175-2.175 2.175z"
    }
  }]
};
exports.cogs = cogs;
var hammer = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.781 12.953l-4.712-4.712c-0.292-0.292-0.769-0.292-1.061 0l-0.354 0.354-2.875-2.875 4.72-4.72h-5l-2.22 2.22-0.22-0.22h-1.061v1.061l0.22 0.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875 2.875-0.354 0.354c-0.292 0.292-0.292 0.769 0 1.061l4.712 4.712c0.292 0.292 0.769 0.292 1.061 0l1.768-1.768c0.292-0.292 0.292-0.769 0-1.061z"
    }
  }]
};
exports.hammer = hammer;
var magicWand = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 3l-2-2h-1v1l2 2zM5 0h1v2h-1zM9 5h2v1h-2zM10 2v-1h-1l-2 2 1 1zM0 5h2v1h-2zM5 9h1v2h-1zM1 9v1h1l2-2-1-1zM15.781 13.781l-9.939-9.939c-0.292-0.292-0.769-0.292-1.061 0l-0.939 0.939c-0.292 0.292-0.292 0.769 0 1.061l9.939 9.939c0.292 0.292 0.769 0.292 1.061 0l0.939-0.939c0.292-0.292 0.292-0.769 0-1.061zM7.5 8.5l-3-3 1-1 3 3-1 1z"
    }
  }]
};
exports.magicWand = magicWand;
var aidKit = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 4h-3v-2c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v2h-3c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2zM6 2h4v2h-4v-2zM12 11h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
    }
  }]
};
exports.aidKit = aidKit;
var bug = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9v-1h-3.020c-0.092-1.136-0.497-2.172-1.12-3.004h2.53l1.095-4.379-0.97-0.243-0.905 3.621h-2.729c-0.014-0.011-0.028-0.021-0.042-0.032 0.105-0.305 0.162-0.632 0.162-0.972 0-1.653-1.343-2.992-3-2.992s-3 1.34-3 2.992c0 0.34 0.057 0.667 0.162 0.972-0.014 0.011-0.028 0.021-0.042 0.032h-2.729l-0.905-3.621-0.97 0.243 1.095 4.379h2.53c-0.623 0.832-1.028 1.868-1.12 3.004h-3.020v1h3.021c0.059 0.713 0.242 1.388 0.526 1.996h-1.937l-1.095 4.379 0.97 0.243 0.905-3.621h1.756c0.917 1.219 2.303 1.996 3.854 1.996s2.937-0.777 3.854-1.996h1.756l0.905 3.621 0.97-0.243-1.095-4.379h-1.937c0.283-0.608 0.466-1.283 0.526-1.996h3.021z"
    }
  }]
};
exports.bug = bug;
var pieChart = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9v-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7c0-1.126-0.266-2.189-0.738-3.131l-6.262 3.131zM14.262 3.869c-1.149-2.294-3.521-3.869-6.262-3.869v7l6.262-3.131z"
    }
  }]
};
exports.pieChart = pieChart;
var statsDots = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 14h14v2h-16v-16h2zM4.5 13c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.044 0 0.088 0.002 0.131 0.006l1.612-2.687c-0.154-0.235-0.243-0.517-0.243-0.819 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.302-0.090 0.583-0.243 0.819l1.612 2.687c0.043-0.004 0.087-0.006 0.131-0.006 0.033 0 0.066 0.001 0.099 0.004l2.662-4.658c-0.165-0.241-0.261-0.532-0.261-0.845 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5-0.033 0-0.066-0.001-0.099-0.004l-2.662 4.658c0.165 0.241 0.261 0.532 0.261 0.845 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.302 0.090-0.583 0.243-0.819l-1.612-2.687c-0.043 0.004-0.087 0.006-0.131 0.006s-0.088-0.002-0.131-0.006l-1.612 2.687c0.154 0.235 0.243 0.517 0.243 0.819 0 0.828-0.672 1.5-1.5 1.5z"
    }
  }]
};
exports.statsDots = statsDots;
var statsBars = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 13h16v2h-16zM2 9h2v3h-2zM5 5h2v7h-2zM8 8h2v4h-2zM11 2h2v10h-2z"
    }
  }]
};
exports.statsBars = statsBars;
var statsBars2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 6h-3c-0.275 0-0.5 0.225-0.5 0.5v9c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5zM4.5 15h-3v-4h3v4zM9.5 4h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM9.5 15h-3v-5h3v5zM14.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v13c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-13c0-0.275-0.225-0.5-0.5-0.5zM14.5 15h-3v-6h3v6z"
    }
  }]
};
exports.statsBars2 = statsBars2;
var trophy = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 3v-2h-10v2h-3v2c0 1.657 1.343 3 3 3 0.314 0 0.616-0.048 0.9-0.138 0.721 1.031 1.822 1.778 3.1 2.037v3.1h-1c-1.105 0-2 0.895-2 2h8c0-1.105-0.895-2-2-2h-1v-3.1c1.278-0.259 2.378-1.006 3.1-2.037 0.284 0.089 0.587 0.138 0.9 0.138 1.657 0 3-1.343 3-3v-2h-3zM3 6.813c-0.999 0-1.813-0.813-1.813-1.813v-1h1.813v1c0 0.628 0.116 1.229 0.327 1.782-0.106 0.019-0.216 0.030-0.327 0.030zM14.813 5c0 0.999-0.813 1.813-1.813 1.813-0.112 0-0.221-0.011-0.327-0.030 0.211-0.554 0.327-1.154 0.327-1.782v-1h1.813v1z"
    }
  }]
};
exports.trophy = trophy;
var gift = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.055 5c0.283-0.201 0.555-0.425 0.804-0.674 0.522-0.522 0.871-1.164 0.983-1.808 0.123-0.706-0.057-1.362-0.494-1.798-0.348-0.348-0.82-0.533-1.365-0.533-0.775 0-1.593 0.372-2.242 1.021-1.039 1.039-1.644 2.472-1.97 3.496-0.241-1.028-0.722-2.416-1.657-3.351-0.501-0.501-1.142-0.759-1.748-0.759-0.495 0-0.965 0.172-1.317 0.523-0.781 0.781-0.675 2.153 0.236 3.064 0.325 0.325 0.705 0.595 1.105 0.819h-3.391v4h1v7h12v-7h1v-4h-2.945zM10.536 2.003c0.433-0.433 0.974-0.692 1.446-0.692 0.167 0 0.402 0.035 0.57 0.203 0.407 0.407 0.178 1.349-0.489 2.016-0.687 0.687-1.61 1.159-2.413 1.47h-0.792c0.29-0.899 0.813-2.132 1.678-2.997zM3.655 2.514c-0.011-0.143-0.001-0.41 0.191-0.601 0.16-0.16 0.372-0.194 0.521-0.194v0c0.332 0 0.679 0.157 0.952 0.429 0.529 0.529 0.965 1.371 1.26 2.436 0.008 0.029 0.016 0.057 0.023 0.086-0.028-0.008-0.057-0.015-0.086-0.023-1.064-0.295-1.906-0.731-2.436-1.26-0.247-0.247-0.403-0.565-0.426-0.872zM7 15h-4v-6.5h4v6.5zM7 8h-5v-2h5v2zM13 15h-4v-6.5h4v6.5zM14 8h-5v-2h5v2z"
    }
  }]
};
exports.gift = gift;
var glass = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.153 0.263c-0.087-0.162-0.256-0.263-0.44-0.263h-7.425c-0.184 0-0.353 0.101-0.44 0.263-0.554 1.032-0.847 2.237-0.847 3.487 0 1.647 0.506 3.2 1.424 4.374 0.71 0.907 1.601 1.508 2.576 1.753v5.123h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-5.123c0.975-0.244 1.866-0.846 2.576-1.753 0.918-1.174 1.424-2.727 1.424-4.374 0-1.249-0.293-2.455-0.847-3.487zM4.595 1h6.809c0.39 0.827 0.595 1.771 0.595 2.75 0 0.084-0.002 0.167-0.005 0.25h-7.991c-0.003-0.083-0.005-0.166-0.005-0.25-0-0.979 0.205-1.923 0.595-2.75z"
    }
  }]
};
exports.glass = glass;
var glass2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.893 2.809c0.118-0.151 0.14-0.355 0.057-0.527s-0.258-0.281-0.45-0.281h-11c-0.191 0-0.366 0.109-0.45 0.281s-0.062 0.377 0.057 0.527l4.893 6.228v5.963h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-5.963l4.893-6.228zM12.471 3l-1.571 2h-5.8l-1.571-2h8.943z"
    }
  }]
};
exports.glass2 = glass2;
var mug = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 5h-3v-1.5c0-1.381-2.686-2.5-6-2.5s-6 1.119-6 2.5v10c0 1.381 2.686 2.5 6 2.5s6-1.119 6-2.5v-1.5h3c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM2.751 4.037c-0.578-0.19-0.928-0.394-1.116-0.537 0.188-0.143 0.538-0.347 1.116-0.537 0.905-0.298 2.059-0.463 3.249-0.463s2.344 0.164 3.249 0.463c0.578 0.19 0.928 0.394 1.116 0.537-0.188 0.143-0.538 0.347-1.116 0.537-0.905 0.298-2.059 0.463-3.249 0.463s-2.344-0.164-3.249-0.463zM14 10h-2v-3h2v3z"
    }
  }]
};
exports.mug = mug;
var spoonKnife = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.5 0c-1.657 0-3 1.567-3 3.5 0 1.655 0.985 3.042 2.308 3.406l-0.497 8.096c-0.034 0.549 0.389 0.998 0.939 0.998h0.5c0.55 0 0.972-0.449 0.939-0.998l-0.497-8.096c1.323-0.365 2.308-1.751 2.308-3.406 0-1.933-1.343-3.5-3-3.5zM13.583 0l-0.833 5h-0.625l-0.417-5h-0.417l-0.417 5h-0.625l-0.833-5h-0.417v6.5c0 0.276 0.224 0.5 0.5 0.5h1.302l-0.491 8.002c-0.034 0.549 0.389 0.998 0.939 0.998h0.5c0.55 0 0.972-0.449 0.939-0.998l-0.491-8.002h1.302c0.276 0 0.5-0.224 0.5-0.5v-6.5h-0.417z"
    }
  }]
};
exports.spoonKnife = spoonKnife;
var leaf = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.802 2.102c-1.73-1.311-4.393-2.094-7.124-2.094-3.377 0-6.129 1.179-7.549 3.235-0.667 0.965-1.036 2.109-1.097 3.398-0.054 1.148 0.139 2.418 0.573 3.784 1.482-4.444 5.622-7.923 10.395-7.923 0 0-4.466 1.175-7.274 4.816-0.002 0.002-0.039 0.048-0.103 0.136-0.564 0.754-1.055 1.612-1.423 2.583-0.623 1.482-1.2 3.515-1.2 5.965h2c0 0-0.304-1.91 0.224-4.106 0.873 0.118 1.654 0.177 2.357 0.177 1.839 0 3.146-0.398 4.115-1.252 0.868-0.765 1.347-1.794 1.854-2.882 0.774-1.663 1.651-3.547 4.198-5.002 0.146-0.083 0.24-0.234 0.251-0.402s-0.063-0.329-0.197-0.431z"
    }
  }]
};
exports.leaf = leaf;
var rocket = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 1l-5 5h-3l-3 4c0 0 3.178-0.885 5.032-0.47l-5.032 6.47 6.592-5.127c0.919 2.104-0.592 5.127-0.592 5.127l4-3v-3l5-5 1-5-5 1z"
    }
  }]
};
exports.rocket = rocket;
var meter = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1c4.418 0 8 3.582 8 8 0 3.012-1.665 5.635-4.125 7h-7.75c-2.46-1.365-4.125-3.988-4.125-7 0-4.418 3.582-8 8-8zM12.53 13.53c1.21-1.21 1.876-2.819 1.876-4.53h-1.406v-1h1.329c-0.11-0.703-0.334-1.377-0.665-2h-1.664v-1h1.004c-0.147-0.184-0.306-0.361-0.475-0.53-0.722-0.722-1.587-1.251-2.53-1.559v1.089h-1v-1.329c-0.328-0.051-0.662-0.078-1-0.078s-0.672 0.026-1 0.078v1.329h-1v-1.089c-0.943 0.309-1.808 0.837-2.53 1.559-0.169 0.169-0.327 0.346-0.475 0.53h1.004v1h-1.664c-0.331 0.623-0.555 1.297-0.665 2h1.329v1h-1.406c0 1.711 0.666 3.32 1.876 4.53 0.167 0.167 0.343 0.324 0.524 0.47h3.006l0.571-8h0.857l0.571 8h3.006c0.182-0.146 0.357-0.303 0.524-0.47z"
    }
  }]
};
exports.meter = meter;
var meter2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4.732 13.034c0.174-0.479 0.268-0.995 0.268-1.534 0-1.943-1.231-3.598-2.956-4.228 0.16-1.327 0.754-2.555 1.714-3.514 1.133-1.133 2.64-1.757 4.243-1.757s3.109 0.624 4.243 1.757c0.96 0.96 1.554 2.188 1.714 3.514-1.725 0.63-2.956 2.285-2.956 4.228 0 0.539 0.095 1.055 0.268 1.534-0.964 0.629-2.090 0.966-3.268 0.966s-2.304-0.338-3.268-0.966zM8.621 10.016c0.217 0.055 0.379 0.251 0.379 0.484v1c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1c0-0.233 0.162-0.43 0.379-0.484l0.371-7.016h0.5l0.371 7.016z"
    }
  }]
};
exports.meter2 = meter2;
var hammer2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.784 14.309l-8.572-7.804 0.399-0.4c0.326-0.327 0.503-0.75 0.53-1.181 0.016-0.007 0.031-0.014 0.046-0.023l1.609-1.006c0.218-0.256 0.202-0.66-0.036-0.898l-2.799-2.806c-0.237-0.238-0.641-0.254-0.896-0.036l-1.004 1.614c-0.008 0.015-0.015 0.031-0.022 0.046-0.43 0.027-0.852 0.204-1.178 0.531l-1.522 1.527c-0.327 0.327-0.503 0.75-0.53 1.181-0.016 0.007-0.031 0.014-0.046 0.023l-1.609 1.006c-0.218 0.256-0.202 0.66 0.036 0.898l2.799 2.806c0.237 0.238 0.641 0.254 0.896 0.036l1.004-1.614c0.008-0.015 0.015-0.031 0.023-0.046 0.43-0.027 0.852-0.204 1.178-0.531l0.442-0.443 7.783 8.596c0.226 0.249 0.573 0.289 0.773 0.089l0.787-0.789c0.199-0.2 0.159-0.549-0.089-0.775z"
    }
  }]
};
exports.hammer2 = hammer2;
var fire = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.016 16c-1.066-2.219-0.498-3.49 0.321-4.688 0.897-1.312 1.129-2.61 1.129-2.61s0.706 0.917 0.423 2.352c1.246-1.387 1.482-3.598 1.293-4.445 2.817 1.969 4.021 6.232 2.399 9.392 8.631-4.883 2.147-12.19 1.018-13.013 0.376 0.823 0.448 2.216-0.313 2.893-1.287-4.879-4.468-5.879-4.468-5.879 0.376 2.516-1.364 5.268-3.042 7.324-0.059-1.003-0.122-1.696-0.649-2.656-0.118 1.823-1.511 3.309-1.889 5.135-0.511 2.473 0.383 4.284 3.777 6.197z"
    }
  }]
};
exports.fire = fire;
var lab = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.942 12.57l-4.942-8.235v-3.335h0.5c0.275 0 0.5-0.225 0.5-0.5s-0.225-0.5-0.5-0.5h-5c-0.275 0-0.5 0.225-0.5 0.5s0.225 0.5 0.5 0.5h0.5v3.335l-4.942 8.235c-1.132 1.886-0.258 3.43 1.942 3.43h10c2.2 0 3.074-1.543 1.942-3.43zM3.766 10l3.234-5.39v-3.61h2v3.61l3.234 5.39h-8.468z"
    }
  }]
};
exports.lab = lab;
var magnet = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 0h-4l1 9c0 1.657-1.343 3-3 3s-3-1.343-3-3l1-9h-4l-1 9c0 3.866 3.134 7 7 7s7-3.134 7-7l-1-9zM12.154 13.154c-1.11 1.11-2.585 1.721-4.154 1.721s-3.045-0.611-4.154-1.721c-1.096-1.096-1.705-2.548-1.72-4.095l0.564-5.075h1.736l-0.55 4.953v0.062c0 1.102 0.429 2.138 1.208 2.917s1.815 1.208 2.917 1.208 2.138-0.429 2.917-1.208c0.779-0.779 1.208-1.815 1.208-2.917v-0.062l-0.007-0.062-0.543-4.891h1.736l0.564 5.075c-0.015 1.547-0.625 2.999-1.72 4.095z"
    }
  }]
};
exports.magnet = magnet;
var bin = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"
    }
  }]
};
exports.bin = bin;
var bin2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 16h10l1-11h-12zM10 2v-2h-4v2h-5v3l1-1h12l1 1v-3h-5zM9 2h-2v-1h2v1z"
    }
  }]
};
exports.bin2 = bin2;
var briefcase = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 4h-4v-1c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v1h-4c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM6 3.002c0.001-0.001 0.001-0.001 0.002-0.002h3.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-4v-0.998zM15 8h-2v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-6v1.5c0 0.275-0.225 0.5-0.5 0.5h-1c-0.275 0-0.5-0.225-0.5-0.5v-1.5h-2v-1h14v1z"
    }
  }]
};
exports.briefcase = briefcase;
var airplane = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 9.999l-2.857-2.857 6.857-5.143-2-2-8.571 3.429-2.698-2.699c-0.778-0.778-1.864-0.964-2.414-0.414s-0.364 1.636 0.414 2.414l2.698 2.698-3.429 8.572 2 2 5.144-6.857 2.857 2.857v4h2l1-3 3-1v-2l-4 0z"
    }
  }]
};
exports.airplane = airplane;
var truck = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9l-2-4h-3v-2c0-0.55-0.45-1-1-1h-9c-0.55 0-1 0.45-1 1v8l1 1h1.268c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h5.536c-0.17 0.294-0.268 0.636-0.268 1 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.364-0.098-0.706-0.268-1h1.268v-3zM11 9v-3h2.073l1.5 3h-3.573z"
    }
  }]
};
exports.truck = truck;
var road = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 16h5l-4-16h-3l0.5 4h-3l0.5-4h-3l-4 16h5l0.5-4h5l0.5 4zM5.75 10l0.5-4h3.5l0.5 4h-4.5z"
    }
  }]
};
exports.road = road;
var accessibility = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 5l5.15-2.221-0.371-0.929-6.279 2.15h-1l-6.279-2.15-0.371 0.929 5.15 2.221v4l-2.051 6.634 0.935 0.355 2.902-6.489h0.429l2.902 6.489 0.935-0.355-2.051-6.634z"
    }
  }]
};
exports.accessibility = accessibility;
var target = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 7h-1.577c-0.432-2.785-2.638-4.991-5.423-5.423v-1.577h-2v1.577c-2.785 0.432-4.991 2.638-5.423 5.423h-1.577v2h1.577c0.432 2.785 2.638 4.991 5.423 5.423v1.577h2v-1.577c2.785-0.432 4.991-2.638 5.423-5.423h1.577v-2zM12.388 7h-1.559c-0.301-0.852-0.977-1.528-1.829-1.829v-1.559c1.68 0.383 3.005 1.708 3.388 3.388zM8 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM7 3.612v1.559c-0.852 0.301-1.528 0.977-1.829 1.829h-1.559c0.383-1.68 1.708-3.005 3.388-3.388zM3.612 9h1.559c0.301 0.852 0.977 1.528 1.829 1.829v1.559c-1.68-0.383-3.005-1.708-3.388-3.388zM9 12.388v-1.559c0.852-0.301 1.528-0.977 1.829-1.829h1.559c-0.383 1.68-1.708 3.005-3.388 3.388z"
    }
  }]
};
exports.target = target;
var shield = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 0l-7 2-7-2c0 0-0.070 0.808 0 2l7 2.189 7-2.189c0.070-1.192 0-2 0-2zM1.128 3.049c0.375 3.917 1.773 10.504 6.872 12.951 5.099-2.448 6.497-9.034 6.872-12.951l-6.872 2.584-6.872-2.584z"
    }
  }]
};
exports.shield = shield;
var power = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 0l-6 8h6l-4 8 14-10h-8l6-6z"
    }
  }]
};
exports.power = power;
var switchIcon = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 2.29v2.124c0.566 0.247 1.086 0.6 1.536 1.050 0.944 0.944 1.464 2.2 1.464 3.536s-0.52 2.591-1.464 3.536c-0.944 0.944-2.2 1.464-3.536 1.464s-2.591-0.52-3.536-1.464c-0.944-0.944-1.464-2.2-1.464-3.536s0.52-2.591 1.464-3.536c0.45-0.45 0.97-0.803 1.536-1.050v-2.124c-2.891 0.861-5 3.539-5 6.71 0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.171-2.109-5.849-5-6.71zM7 0h2v8h-2z"
    }
  }]
};
exports.switchIcon = switchIcon;
var powerCord = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 4.414l-1.414-1.414-2.793 2.793-1.586-1.586 2.793-2.793-1.414-1.414-2.793 2.793-1.793-1.793-1.354 1.353 8 8 1.354-1.353-1.793-1.793 2.793-2.793z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.407 10.528l-6.935-6.935c-1.497 1.795-3.196 4.57-2.022 6.957l-2.066 2.066c-0.486 0.486-0.486 1.282 0 1.768l0.232 0.232c0.486 0.486 1.282 0.486 1.768 0l2.066-2.066c2.387 1.174 5.161-0.524 6.957-2.022z"
    }
  }]
};
exports.powerCord = powerCord;
var clipboard = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 2h-4.5c0-1.105-0.895-2-2-2s-2 0.895-2 2h-4.5c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5zM8 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM14 15h-12v-12h2v1.5c0 0.276 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.224 0.5-0.5v-1.5h2v12z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 13.414l-3.207-3.707 0.914-0.914 2.293 1.793 4.293-3.793 0.914 0.914z"
    }
  }]
};
exports.clipboard = clipboard;
var listNumbered = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 13h10v2h-10zM6 7h10v2h-10zM6 1h10v2h-10zM3 0v4h-1v-3h-1v-1zM2 8.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM4 11v5h-3v-1h2v-1h-2v-1h2v-1h-2v-1z"
    }
  }]
};
exports.listNumbered = listNumbered;
var list = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0h4v4h-4zM6 1h10v2h-10zM0 6h4v4h-4zM6 7h10v2h-10zM0 12h4v4h-4zM6 13h10v2h-10z"
    }
  }]
};
exports.list = list;
var list2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 1h10v2h-10v-2zM6 7h10v2h-10v-2zM6 13h10v2h-10v-2zM0 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM0 8c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM0 14c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2z"
    }
  }]
};
exports.list2 = list2;
var tree = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.25 12h-0.25v-3.25c0-0.965-0.785-1.75-1.75-1.75h-4.25v-2h0.25c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.337-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h0.25v2h-4.25c-0.965 0-1.75 0.785-1.75 1.75v3.25h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.413 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.337-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75h-0.25v-3h4v3h-0.25c-0.412 0-0.75 0.338-0.75 0.75v2.5c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-2.5c0-0.412-0.338-0.75-0.75-0.75zM3 15h-2v-2h2v2zM9 15h-2v-2h2v2zM7 4v-2h2v2h-2zM15 15h-2v-2h2v2z"
    }
  }]
};
exports.tree = tree;
var menu = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z"
    }
  }]
};
exports.menu = menu;
var menu2 = {
  "viewBox": "0 0 22 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.5 9l3 3 3-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M21.5 8l-3-3-3 3z"
    }
  }]
};
exports.menu2 = menu2;
var menu3 = {
  "viewBox": "0 0 22 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.5 7l3 3 3-3z"
    }
  }]
};
exports.menu3 = menu3;
var menu4 = {
  "viewBox": "0 0 22 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.5 10l3-3 3 3z"
    }
  }]
};
exports.menu4 = menu4;
var cloud = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 10.274c0-1.283-0.886-2.358-2.078-2.648-0.051-2.011-1.695-3.626-3.717-3.626-1.184 0-2.239 0.555-2.92 1.418-0.382-0.494-0.98-0.812-1.652-0.812-1.153 0-2.088 0.936-2.088 2.089 0 0.101 0.007 0.199 0.021 0.296-0.175-0.032-0.356-0.049-0.54-0.049-1.672-0-3.027 1.356-3.027 3.029s1.355 3.029 3.027 3.029l10.254-0c1.502-0.003 2.719-1.222 2.719-2.726z"
    }
  }]
};
exports.cloud = cloud;
var cloudDownload = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.922 5.626c-0.051-2.011-1.695-3.626-3.717-3.626-1.184 0-2.239 0.555-2.92 1.418-0.382-0.494-0.98-0.812-1.652-0.812-1.153 0-2.088 0.936-2.088 2.089 0 0.101 0.007 0.199 0.021 0.296-0.175-0.032-0.356-0.049-0.54-0.049-1.672-0-3.027 1.356-3.027 3.029s1.355 3.029 3.027 3.029h1.434l3.539 3.664 3.539-3.664 1.742-0c1.502-0.003 2.719-1.222 2.719-2.726 0-1.283-0.886-2.358-2.078-2.648zM8 13l-3-3h2v-3h2v3h2l-3 3z"
    }
  }]
};
exports.cloudDownload = cloudDownload;
var cloudUpload = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.942 6.039c0.038-0.174 0.058-0.354 0.058-0.539 0-1.381-1.119-2.5-2.5-2.5-0.222 0-0.438 0.029-0.643 0.084-0.387-1.209-1.52-2.084-2.857-2.084-1.365 0-2.516 0.911-2.88 2.159-0.355-0.103-0.731-0.159-1.12-0.159-2.209 0-4 1.791-4 4s1.791 4 4 4h2v3h4v-3h3.5c1.381 0 2.5-1.119 2.5-2.5 0-1.23-0.888-2.253-2.058-2.461zM9 10v3h-2v-3h-2.5l3.5-3.5 3.5 3.5h-2.5z"
    }
  }]
};
exports.cloudUpload = cloudUpload;
var cloudCheck = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.942 8.039c0.038-0.174 0.058-0.354 0.058-0.539 0-1.381-1.119-2.5-2.5-2.5-0.222 0-0.438 0.029-0.643 0.084-0.387-1.209-1.52-2.084-2.857-2.084-1.365 0-2.516 0.911-2.88 2.159-0.355-0.103-0.731-0.159-1.12-0.159-2.209 0-4 1.791-4 4s1.791 4 4 4h9.5c1.381 0 2.5-1.119 2.5-2.5 0-1.23-0.888-2.252-2.058-2.461zM6.5 12l-2.5-2.5 1-1 1.5 1.5 3.5-3.5 1 1-4.5 4.5z"
    }
  }]
};
exports.cloudCheck = cloudCheck;
var download2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 8h-2.5l-3.5 3.5-3.5-3.5h-2.5l-2 4v1h16v-1l-2-4zM0 14h16v1h-16v-1zM9 5v-4h-2v4h-3.5l4.5 4.5 4.5-4.5h-3.5z"
    }
  }]
};
exports.download2 = download2;
var upload2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 14h16v1h-16zM16 12v1h-16v-1l2-4h4v2h4v-2h4zM3.5 5l4.5-4.5 4.5 4.5h-3.5v4h-2v-4z"
    }
  }]
};
exports.upload2 = upload2;
var download3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 7l-4 4-4-4h2.5v-6h3v6zM7.5 11h-7.5v4h15v-4h-7.5zM14 13h-2v-1h2v1z"
    }
  }]
};
exports.download3 = download3;
var upload3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 11h-7.5v4h15v-4h-7.5zM14 13h-2v-1h2v1zM3.5 5l4-4 4 4h-2.5v5h-3v-5z"
    }
  }]
};
exports.upload3 = upload3;
var sphere = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.5 1c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM11.744 11c0.134-0.632 0.219-1.303 0.246-2h1.991c-0.052 0.691-0.213 1.361-0.479 2h-1.758zM3.256 6c-0.134 0.632-0.219 1.303-0.246 2h-1.991c0.052-0.691 0.213-1.361 0.479-2h1.758zM10.719 6c0.15 0.64 0.241 1.31 0.27 2h-2.989v-2h2.719zM8 5v-2.927c0.228 0.066 0.454 0.178 0.675 0.334 0.415 0.293 0.813 0.744 1.149 1.304 0.233 0.388 0.434 0.819 0.601 1.289h-2.426zM5.176 3.711c0.336-0.561 0.734-1.012 1.149-1.304 0.222-0.156 0.447-0.268 0.675-0.334v2.927h-2.426c0.168-0.47 0.369-0.901 0.601-1.289zM7 6v2h-2.989c0.029-0.69 0.12-1.36 0.27-2h2.719zM1.498 11c-0.266-0.639-0.427-1.309-0.479-2h1.991c0.028 0.697 0.112 1.368 0.246 2h-1.758zM4.011 9h2.989v2h-2.719c-0.15-0.64-0.241-1.31-0.27-2zM7 12v2.927c-0.228-0.066-0.454-0.178-0.675-0.334-0.415-0.293-0.813-0.744-1.149-1.304-0.233-0.388-0.434-0.819-0.602-1.289h2.426zM9.825 13.289c-0.336 0.561-0.734 1.012-1.149 1.304-0.222 0.156-0.447 0.268-0.675 0.334v-2.927h2.426c-0.168 0.47-0.369 0.901-0.602 1.289zM8 11v-2h2.989c-0.029 0.69-0.12 1.36-0.27 2h-2.719zM11.99 8c-0.028-0.697-0.112-1.368-0.246-2h1.758c0.267 0.639 0.427 1.309 0.479 2h-1.991zM12.979 5h-1.498c-0.291-0.918-0.693-1.723-1.177-2.366 0.665 0.318 1.267 0.744 1.792 1.27 0.336 0.336 0.631 0.702 0.883 1.096zM2.904 3.904c0.526-0.526 1.128-0.952 1.792-1.27-0.483 0.643-0.886 1.448-1.177 2.366h-1.498c0.252-0.394 0.547-0.761 0.883-1.096zM2.021 12h1.498c0.291 0.918 0.693 1.723 1.177 2.366-0.665-0.318-1.267-0.744-1.792-1.27-0.336-0.336-0.631-0.702-0.883-1.096zM12.096 13.096c-0.526 0.526-1.128 0.952-1.792 1.27 0.483-0.643 0.886-1.448 1.177-2.366h1.498c-0.252 0.394-0.547 0.761-0.883 1.096z"
    }
  }]
};
exports.sphere = sphere;
var earth = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-0.984 0-1.92-0.203-2.769-0.57l3.643-4.098c0.081-0.092 0.126-0.21 0.126-0.332v-1.5c0-0.276-0.224-0.5-0.5-0.5-1.765 0-3.628-1.835-3.646-1.854-0.094-0.094-0.221-0.146-0.354-0.146h-2c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.189 0.107 0.363 0.276 0.447l1.724 0.862v2.936c-1.813-1.265-3-3.366-3-5.745 0-1.074 0.242-2.091 0.674-3h1.826c0.133 0 0.26-0.053 0.354-0.146l2-2c0.094-0.094 0.146-0.221 0.146-0.354v-1.21c0.634-0.189 1.305-0.29 2-0.29 1.1 0 2.141 0.254 3.067 0.706-0.065 0.055-0.128 0.112-0.188 0.172-0.567 0.567-0.879 1.32-0.879 2.121s0.312 1.555 0.879 2.121c0.569 0.569 1.332 0.879 2.119 0.879 0.049 0 0.099-0.001 0.149-0.004 0.216 0.809 0.605 2.917-0.131 5.818-0.007 0.027-0.011 0.055-0.013 0.082-1.271 1.298-3.042 2.104-5.002 2.104z"
    }
  }]
};
exports.earth = earth;
var link = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.879 9.934c-0.208 0-0.416-0.079-0.575-0.238-1.486-1.486-1.486-3.905 0-5.392l3-3c0.72-0.72 1.678-1.117 2.696-1.117s1.976 0.397 2.696 1.117c1.486 1.487 1.486 3.905 0 5.392l-1.371 1.371c-0.317 0.317-0.832 0.317-1.149 0s-0.317-0.832 0-1.149l1.371-1.371c0.853-0.853 0.853-2.241 0-3.094-0.413-0.413-0.963-0.641-1.547-0.641s-1.134 0.228-1.547 0.641l-3 3c-0.853 0.853-0.853 2.241 0 3.094 0.317 0.317 0.317 0.832 0 1.149-0.159 0.159-0.367 0.238-0.575 0.238z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 15.813c-1.018 0-1.976-0.397-2.696-1.117-1.486-1.486-1.486-3.905 0-5.392l1.371-1.371c0.317-0.317 0.832-0.317 1.149 0s0.317 0.832 0 1.149l-1.371 1.371c-0.853 0.853-0.853 2.241 0 3.094 0.413 0.413 0.962 0.641 1.547 0.641s1.134-0.228 1.547-0.641l3-3c0.853-0.853 0.853-2.241 0-3.094-0.317-0.317-0.317-0.832 0-1.149s0.832-0.317 1.149 0c1.486 1.486 1.486 3.905 0 5.392l-3 3c-0.72 0.72-1.678 1.117-2.696 1.117z"
    }
  }]
};
exports.link = link;
var flag = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0h2v16h-2v-16z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 10.047c1.291 0 2.415-0.312 3-0.773v-8c-0.585 0.461-1.709 0.773-3 0.773s-2.415-0.312-3-0.773v8c0.585 0.461 1.709 0.773 3 0.773z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 0.508c-0.733-0.312-1.805-0.508-3-0.508-1.506 0-2.818 0.312-3.5 0.773v8c0.682-0.461 1.994-0.773 3.5-0.773 1.195 0 2.267 0.197 3 0.508v-8z"
    }
  }]
};
exports.flag = flag;
var attachment = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z"
    }
  }]
};
exports.attachment = attachment;
var eye = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 3c-3.489 0-6.514 2.032-8 5 1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zM11.945 5.652c0.94 0.6 1.737 1.403 2.335 2.348-0.598 0.946-1.395 1.749-2.335 2.348-1.181 0.753-2.545 1.152-3.944 1.152s-2.763-0.398-3.945-1.152c-0.94-0.6-1.737-1.403-2.335-2.348 0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.481-0.085-0.942-0.241-1.369 0.062 0.037 0.124 0.075 0.185 0.114v0zM8 6.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"
    }
  }]
};
exports.eye = eye;
var eyePlus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 2h-2v-2h-2v2h-2v2h2v2h2v-2h2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.498 6.969c0.288 0.32 0.55 0.665 0.782 1.031-0.598 0.946-1.395 1.749-2.335 2.348-1.181 0.753-2.545 1.152-3.944 1.152s-2.763-0.398-3.945-1.152c-0.94-0.6-1.736-1.403-2.335-2.348 0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.011-0-0.022-0-0.032-1.708-0.44-2.973-1.979-2.999-3.817-0.329-0.037-0.662-0.057-1.001-0.057-3.489 0-6.514 2.032-8 5 1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-0.276-0.55-0.604-1.069-0.979-1.548-0.457 0.268-0.973 0.449-1.523 0.517zM6.5 5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5z"
    }
  }]
};
exports.eyePlus = eyePlus;
var eyeMinus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 2h6v2h-6v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.599 5h-4.599v-1.944c-0.328-0.037-0.662-0.056-1-0.056-3.489 0-6.514 2.032-8 5 1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-0.584-1.167-1.407-2.189-2.401-3zM6.5 5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5zM11.944 10.348c-1.181 0.753-2.545 1.152-3.944 1.152s-2.763-0.398-3.945-1.152c-0.94-0.6-1.736-1.403-2.335-2.348 0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.481-0.085-0.942-0.241-1.369 0.062 0.037 0.124 0.075 0.185 0.114 0.94 0.6 1.737 1.403 2.335 2.348-0.598 0.946-1.395 1.749-2.335 2.348z"
    }
  }]
};
exports.eyeMinus = eyeMinus;
var eyeBlocked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.78 0.22c-0.293-0.293-0.768-0.293-1.061 0l-3.159 3.159c-0.812-0.246-1.671-0.378-2.561-0.378-3.489 0-6.514 2.032-8 5 0.643 1.283 1.573 2.391 2.703 3.236l-2.484 2.484c-0.293 0.293-0.293 0.768 0 1.061 0.146 0.146 0.338 0.22 0.53 0.22s0.384-0.073 0.53-0.22l13.5-13.5c0.293-0.293 0.293-0.768 0-1.061zM6.5 5c0.66 0 1.22 0.426 1.421 1.019l-1.902 1.902c-0.592-0.201-1.019-0.761-1.019-1.421 0-0.828 0.672-1.5 1.5-1.5zM1.721 8c0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 0.858 0.27 1.652 0.73 2.303l-0.952 0.952c-0.819-0.576-1.519-1.311-2.057-2.162z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 6.906c0-0.424-0.066-0.833-0.189-1.217l-5.028 5.028c0.384 0.123 0.793 0.189 1.217 0.189 2.209 0 4-1.791 4-4z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.969 4.531l-1.084 1.084c0.020 0.012 0.040 0.024 0.059 0.037 0.94 0.6 1.737 1.403 2.335 2.348-0.598 0.946-1.395 1.749-2.335 2.348-1.181 0.753-2.545 1.152-3.944 1.152-0.604 0-1.202-0.074-1.781-0.219l-1.201 1.201c0.933 0.335 1.937 0.518 2.982 0.518 3.489 0 6.514-2.032 8-5-0.703-1.405-1.752-2.6-3.031-3.469z"
    }
  }]
};
exports.eyeBlocked = eyeBlocked;
var bookmark = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 0v16l5-5 5 5v-16z"
    }
  }]
};
exports.bookmark = bookmark;
var bookmarks = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 2v14l5-5 5 5v-14zM12 0h-10v14l1-1v-12h9z"
    }
  }]
};
exports.bookmarks = bookmarks;
var sun = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
    }
  }]
};
exports.sun = sun;
var contrast = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM2 8c0-3.314 2.686-6 6-6v12c-3.314 0-6-2.686-6-6z"
    }
  }]
};
exports.contrast = contrast;
var brightnessContrast = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM8 10.5v-5c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5zM8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z"
    }
  }]
};
exports.brightnessContrast = brightnessContrast;
var starEmpty = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-3.492 1.836 0.667-3.888-2.825-2.753 3.904-0.567 1.746-3.537 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"
    }
  }]
};
exports.starEmpty = starEmpty;
var starHalf = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-0.015 0.008 0.015-8.918 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z"
    }
  }]
};
exports.starHalf = starHalf;
var starFull = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"
    }
  }]
};
exports.starFull = starFull;
var heart = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.8 1c-1.682 0-3.129 1.368-3.799 2.797-0.671-1.429-2.118-2.797-3.8-2.797-2.318 0-4.2 1.882-4.2 4.2 0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.050 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"
    }
  }]
};
exports.heart = heart;
var heartBroken = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.8 1c2.318 0 4.2 1.882 4.2 4.2 0 4.566-4.935 5.982-8 10.616-3.243-4.663-8-5.9-8-10.616 0-2.319 1.882-4.2 4.2-4.2 0.943 0 1.812 0.43 2.512 1.060l-1.213 1.94 3.5 2-2 5 5.5-6-3.5-2 0.967-1.451c0.553-0.34 1.175-0.549 1.833-0.549z"
    }
  }]
};
exports.heartBroken = heartBroken;
var man = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 4h-3c-0.552 0-1 0.448-1 1v5h1v6h1.25v-6h0.5v6h1.25v-6h1v-5c0-0.552-0.448-1-1-1z"
    }
  }]
};
exports.man = man;
var woman = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.234 8l0.766-0.555-2.083-3.221c-0.092-0.14-0.249-0.225-0.417-0.225h-4c-0.168 0-0.325 0.084-0.417 0.225l-2.083 3.221 0.766 0.555 1.729-2.244 0.601 1.402-2.095 3.841h1.917l0.333 5h1v-5h0.5v5h1l0.333-5h1.917l-2.095-3.842 0.601-1.402 1.729 2.244z"
    }
  }]
};
exports.woman = woman;
var manWoman = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 4h-3c-0.552 0-1 0.448-1 1v5h1v6h1.25v-6h0.5v6h1.25v-6h1v-5c0-0.552-0.448-1-1-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.234 8l0.766-0.555-2.083-3.221c-0.092-0.14-0.249-0.225-0.417-0.225h-4c-0.168 0-0.325 0.084-0.417 0.225l-2.083 3.221 0.766 0.555 1.729-2.244 0.601 1.402-2.095 3.841h1.917l0.333 5h1v-5h0.5v5h1l0.333-5h1.917l-2.095-3.842 0.601-1.402 1.729 2.244z"
    }
  }]
};
exports.manWoman = manWoman;
var happy = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM8 9.356c1.812 0 3.535-0.481 5-1.327-0.228 2.788-2.393 4.971-5 4.971s-4.772-2.186-5-4.973c1.465 0.845 3.188 1.329 5 1.329zM4 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5zM10 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5z"
    }
  }]
};
exports.happy = happy;
var happy2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM5 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM8 14c-2.607 0-4.772-2.186-5-4.973 1.465 0.846 3.188 1.329 5 1.329s3.535-0.481 5-1.327c-0.228 2.788-2.393 4.971-5 4.971z"
    }
  }]
};
exports.happy2 = happy2;
var smile = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.002 9.801l1.286 0.772c-0.874 1.454-2.467 2.427-4.288 2.427s-3.413-0.973-4.288-2.427l1.286-0.772c0.612 1.018 1.727 1.699 3.002 1.699s2.389-0.681 3.002-1.699z"
    }
  }]
};
exports.smile = smile;
var smile2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM8 13c-1.82 0-3.413-0.973-4.288-2.427l1.286-0.772c0.612 1.018 1.727 1.699 3.002 1.699s2.389-0.681 3.002-1.699l1.286 0.772c-0.874 1.454-2.467 2.427-4.288 2.427z"
    }
  }]
};
exports.smile2 = smile2;
var tongue = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM12 9v1h-1v1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v-1.5h-4v-1h8z"
    }
  }]
};
exports.tongue = tongue;
var tongue2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM12 10h-1v1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v-1.5h-4v-1h8v1zM11 6c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1z"
    }
  }]
};
exports.tongue2 = tongue2;
var sad = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM4.998 12.199l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.413 0.973 4.288 2.427l-1.286 0.772c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699z"
    }
  }]
};
exports.sad = sad;
var sad2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM11.002 12.199c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.414 0.973 4.288 2.427l-1.286 0.772z"
    }
  }]
};
exports.sad2 = sad2;
var wink = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM8.48 11.11c2.191-0.433 3.892-1.43 4.507-2.759-0.338 2.624-2.524 4.649-5.17 4.649-1.863 0-3.498-1.004-4.42-2.515 1.1 0.86 3.040 1.028 5.083 0.625zM10 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5zM5.5 5.805c-0.653 0-1.208 0.245-1.414 0.586-0.055-0.092-0.086-0.503-0.086-0.605 0-0.485 0.672-0.879 1.5-0.879s1.5 0.394 1.5 0.879c0 0.103-0.030 0.514-0.086 0.605-0.206-0.341-0.761-0.586-1.414-0.586z"
    }
  }]
};
exports.wink = wink;
var wink2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11 4c0.552 0 1 0.672 1 1.5s-0.448 1.5-1 1.5-1-0.672-1-1.5 0.448-1.5 1-1.5zM5.5 4.876c0.932 0 1.594 0.349 1.594 0.895 0 0.116 0.060 0.672-0.003 0.775-0.232-0.384-0.856-0.659-1.591-0.659s-1.359 0.275-1.591 0.659c-0.062-0.103-0.003-0.659-0.003-0.775 0-0.546 0.662-0.895 1.594-0.895zM7.818 13c-1.863 0-3.498-1.004-4.42-2.515 1.1 0.86 3.040 1.028 5.083 0.625 2.191-0.433 3.892-1.43 4.507-2.759-0.338 2.624-2.524 4.649-5.17 4.649z"
    }
  }]
};
exports.wink2 = wink2;
var grin = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM3 8v1c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4v-1h-10zM6 11.828c-0.415-0.148-0.796-0.388-1.118-0.71-0.569-0.569-0.882-1.321-0.882-2.118h2v2.828zM9 12h-2v-3h2v3zM11.118 11.118c-0.322 0.322-0.703 0.562-1.118 0.71v-2.828h2c0 0.797-0.313 1.549-0.882 2.118zM3.521 6c0 0 0 0 0 0 0.153 0 0.283-0.11 0.308-0.261 0.096-0.573 0.589-0.989 1.171-0.989s1.074 0.416 1.171 0.989c0.025 0.151 0.156 0.261 0.308 0.261s0.283-0.11 0.308-0.261c0.017-0.101 0.025-0.202 0.025-0.302 0-0.999-0.813-1.813-1.813-1.813s-1.813 0.813-1.813 1.813c0 0.1 0.009 0.201 0.025 0.302 0.025 0.151 0.156 0.261 0.308 0.261zM9.521 6c0 0 0 0 0 0 0.153 0 0.283-0.11 0.308-0.261 0.096-0.573 0.589-0.989 1.171-0.989s1.074 0.416 1.171 0.989c0.025 0.151 0.156 0.261 0.308 0.261s0.283-0.11 0.308-0.261c0.017-0.101 0.025-0.202 0.025-0.302 0-0.999-0.813-1.813-1.813-1.813s-1.813 0.813-1.813 1.813c0 0.1 0.008 0.201 0.025 0.302 0.025 0.151 0.156 0.261 0.308 0.261z"
    }
  }]
};
exports.grin = grin;
var grin2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11 3.688c0.999 0 1.813 0.813 1.813 1.813 0 0.1-0.009 0.201-0.025 0.302-0.025 0.151-0.156 0.261-0.308 0.261s-0.283-0.11-0.308-0.261c-0.096-0.573-0.589-0.833-1.171-0.833s-1.074 0.26-1.171 0.833c-0.025 0.151-0.156 0.261-0.308 0.261-0 0 0 0-0 0-0.153 0-0.283-0.11-0.308-0.261-0.017-0.101-0.025-0.202-0.025-0.302 0-0.999 0.813-1.813 1.813-1.813zM5 3.688c0.999 0 1.813 0.813 1.813 1.813 0 0.1-0.009 0.201-0.025 0.302-0.025 0.151-0.156 0.261-0.308 0.261s-0.283-0.11-0.308-0.261c-0.096-0.573-0.589-0.833-1.171-0.833s-1.074 0.26-1.171 0.833c-0.025 0.151-0.156 0.261-0.308 0.261 0 0 0 0 0 0-0.153 0-0.283-0.11-0.308-0.261-0.017-0.101-0.025-0.202-0.025-0.302 0-0.999 0.813-1.813 1.813-1.813zM3 9h3v3.873c-1.72-0.447-3-2.018-3-3.873zM7 13v-4h2v4h-2zM10 12.873v-3.873h3c0 1.855-1.28 3.426-3 3.873z"
    }
  }]
};
exports.grin2 = grin2;
var cool = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM12.5 4c0.275 0 0.5 0.225 0.5 0.5v1.5c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1h-2c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-1.5c0-0.275 0.225-0.5 0.5-0.5h3c0.275 0 0.5 0.225 0.5 0.5v0.5h2v-0.5c0-0.275 0.225-0.5 0.5-0.5h3zM8 12c1.456 0 2.731-0.778 3.43-1.942l0.857 0.515c-0.874 1.454-2.467 2.427-4.288 2.427-0.757 0-1.475-0.169-2.118-0.47l0.518-0.864c0.49 0.214 1.031 0.334 1.6 0.334z"
    }
  }]
};
exports.cool = cool;
var cool2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM8 13c-0.757 0-1.475-0.169-2.118-0.47l0.518-0.864c0.49 0.214 1.031 0.334 1.6 0.334 1.456 0 2.731-0.778 3.43-1.942l0.858 0.515c-0.874 1.454-2.467 2.427-4.288 2.427zM13 6c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1h-2c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-1.5c0-0.275 0.225-0.5 0.5-0.5h3c0.275 0 0.5 0.225 0.5 0.5v0.5h2v-0.5c0-0.275 0.225-0.5 0.5-0.5h3c0.275 0 0.5 0.225 0.5 0.5v1.5z"
    }
  }]
};
exports.cool2 = cool2;
var angry = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM11.002 12.199c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.414 0.973 4.288 2.427l-1.286 0.772zM11.985 4.379c0.067 0.268-0.096 0.539-0.364 0.606-0.275 0.070-0.602 0.189-0.89 0.334 0.166 0.179 0.268 0.418 0.268 0.681 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.018 0.001-0.036 0.002-0.054 0.032-0.741 0.706-1.234 1.275-1.518 0.543-0.271 1.080-0.407 1.102-0.413 0.268-0.067 0.539 0.096 0.606 0.364zM4.015 4.379c0.067-0.268 0.338-0.431 0.606-0.364 0.023 0.006 0.559 0.141 1.102 0.413 0.568 0.284 1.243 0.776 1.275 1.518 0.001 0.018 0.002 0.036 0.002 0.054 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.263 0.102-0.503 0.268-0.681-0.288-0.144-0.614-0.264-0.89-0.334-0.268-0.067-0.431-0.338-0.364-0.606z"
    }
  }]
};
exports.angry = angry;
var angry2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM9.001 5.946c0.032-0.741 0.706-1.234 1.275-1.518 0.543-0.271 1.080-0.407 1.102-0.413 0.268-0.067 0.539 0.096 0.606 0.364s-0.096 0.539-0.364 0.606c-0.275 0.070-0.602 0.189-0.89 0.334 0.166 0.179 0.268 0.418 0.268 0.681 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.018 0.001-0.036 0.002-0.054zM4.015 4.379c0.067-0.268 0.338-0.431 0.606-0.364 0.023 0.006 0.559 0.141 1.102 0.413 0.568 0.284 1.243 0.776 1.275 1.518 0.001 0.018 0.002 0.036 0.002 0.054 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.263 0.102-0.503 0.268-0.681-0.288-0.144-0.614-0.264-0.89-0.334-0.268-0.067-0.431-0.338-0.364-0.606zM11.002 12.199c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.414 0.973 4.288 2.427l-1.286 0.772z"
    }
  }]
};
exports.angry2 = angry2;
var evil = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 7c-0.552 0-1-0.448-1-1 0-0.018 0.001-0.036 0.002-0.054 0.032-0.741 0.706-1.234 1.275-1.518 0.543-0.271 1.080-0.407 1.102-0.413 0.268-0.067 0.539 0.096 0.606 0.364s-0.096 0.539-0.364 0.606c-0.275 0.070-0.602 0.189-0.89 0.334 0.166 0.179 0.268 0.418 0.268 0.681 0 0.552-0.448 1-1 1zM4.379 4.985c-0.268-0.067-0.431-0.338-0.364-0.606s0.338-0.431 0.606-0.364c0.023 0.006 0.559 0.141 1.102 0.413 0.568 0.284 1.243 0.776 1.275 1.518 0.001 0.018 0.002 0.036 0.002 0.054 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.263 0.102-0.503 0.268-0.681-0.288-0.144-0.614-0.264-0.89-0.334zM8 11.5c1.274 0 2.389-0.681 3.002-1.699l1.286 0.772c-0.874 1.454-2.467 2.427-4.288 2.427s-3.413-0.973-4.288-2.427l1.286-0.772c0.612 1.018 1.727 1.699 3.002 1.699zM16 1c0-0.711-0.149-1.387-0.416-2-0.525 1.201-1.507 2.155-2.726 2.643-1.347-1.031-3.030-1.643-4.857-1.643s-3.51 0.613-4.857 1.643c-1.22-0.488-2.202-1.443-2.726-2.643-0.268 0.613-0.416 1.289-0.416 2 0 1.15 0.388 2.208 1.040 3.053-0.662 1.165-1.040 2.512-1.040 3.947 0 4.418 3.582 8 8 8s8-3.582 8-8c0-1.436-0.378-2.783-1.040-3.947 0.652-0.845 1.040-1.903 1.040-3.053zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
    }
  }]
};
exports.evil = evil;
var evil2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 1c0-0.711-0.149-1.387-0.416-2-0.525 1.201-1.507 2.155-2.726 2.643-1.347-1.031-3.030-1.643-4.857-1.643s-3.51 0.613-4.857 1.643c-1.22-0.488-2.202-1.443-2.726-2.643-0.268 0.613-0.416 1.289-0.416 2 0 1.15 0.388 2.208 1.040 3.053-0.662 1.165-1.040 2.512-1.040 3.947 0 4.418 3.582 8 8 8s8-3.582 8-8c0-1.436-0.378-2.783-1.040-3.947 0.652-0.845 1.040-1.903 1.040-3.053zM9.001 5.946c0.032-0.741 0.706-1.234 1.275-1.518 0.543-0.271 1.080-0.407 1.102-0.413 0.268-0.067 0.539 0.096 0.606 0.364s-0.096 0.539-0.364 0.606c-0.275 0.070-0.602 0.189-0.89 0.334 0.166 0.179 0.268 0.418 0.268 0.681 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.018 0.001-0.036 0.002-0.054zM4.015 4.379c0.067-0.268 0.338-0.431 0.606-0.364 0.023 0.006 0.559 0.141 1.102 0.413 0.568 0.284 1.243 0.776 1.275 1.518 0.001 0.018 0.002 0.036 0.002 0.054 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.263 0.102-0.503 0.268-0.681-0.288-0.144-0.614-0.264-0.89-0.334-0.268-0.067-0.431-0.338-0.364-0.606zM8 13c-1.82 0-3.413-0.973-4.288-2.427l1.286-0.772c0.612 1.018 1.727 1.699 3.002 1.699s2.389-0.681 3.002-1.699l1.286 0.772c-0.874 1.454-2.467 2.427-4.288 2.427z"
    }
  }]
};
exports.evil2 = evil2;
var shocked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM6 11c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5zM4 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5z"
    }
  }]
};
exports.shocked = shocked;
var shocked2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5zM8 13c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2zM11 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5z"
    }
  }]
};
exports.shocked2 = shocked2;
var baffled = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.5 5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5zM5.5 4c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.5 5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5zM10.5 4c-1.379 0-2.5 1.122-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.121-2.5-2.5-2.5v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 11h4v1h-4v-1z"
    }
  }]
};
exports.baffled = baffled;
var baffled2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 6.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 6.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5zM10 12h-4v-1h4v1zM10.5 8c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"
    }
  }]
};
exports.baffled2 = baffled2;
var confused = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.345 10h1.014c0.144 1.133-0.507 2.258-1.624 2.665-1.295 0.472-2.733-0.199-3.204-1.494-0.283-0.777-1.145-1.179-1.923-0.896-0.712 0.259-1.109 1.005-0.953 1.725h-1.013c-0.144-1.133 0.507-2.258 1.624-2.665 1.295-0.472 2.733 0.199 3.204 1.494 0.283 0.777 1.145 1.179 1.923 0.896 0.712-0.259 1.109-1.005 0.953-1.725z"
    }
  }]
};
exports.confused = confused;
var confused2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1c0-0.552 0.448-1 1-1zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1c0-0.552 0.448-1 1-1zM10.735 12.665c-1.295 0.472-2.733-0.199-3.204-1.494-0.283-0.777-1.145-1.179-1.923-0.896-0.712 0.259-1.109 1.005-0.953 1.725h-1.013c-0.144-1.133 0.507-2.258 1.624-2.665 1.295-0.472 2.733 0.199 3.204 1.494 0.283 0.777 1.145 1.179 1.923 0.896 0.712-0.259 1.109-1.005 0.953-1.725h1.014c0.144 1.133-0.507 2.258-1.624 2.665z"
    }
  }]
};
exports.confused2 = confused2;
var neutral = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0 0.552 0.448 1 1 1s1-0.448 1-1-0.448-1-1-1-1 0.448-1 1zM10 5c0 0.552 0.448 1 1 1s1-0.448 1-1-0.448-1-1-1-1 0.448-1 1zM6 11h4v1h-4v-1z"
    }
  }]
};
exports.neutral = neutral;
var neutral2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM10 12h-4v-1h4v1zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1c0-0.552 0.448-1 1-1zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1c0-0.552 0.448-1 1-1z"
    }
  }]
};
exports.neutral2 = neutral2;
var hipster = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.561 8.439c-0.586-0.586-1.536-0.586-2.121 0s-0.586 1.536 0 2.121c0.019 0.019 0.038 0.037 0.058 0.055 1.352 1.227 4.503-0.029 4.503-1.615-0.969 0.625-1.726 0.153-2.439-0.561z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.439 8.439c0.586-0.586 1.536-0.586 2.121 0s0.586 1.536 0 2.121c-0.019 0.019-0.038 0.037-0.058 0.055-1.352 1.227-4.503-0.029-4.503-1.615 0.969 0.625 1.726 0.153 2.439-0.561z"
    }
  }]
};
exports.hipster = hipster;
var hipster2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM5 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM8.497 10.615c-0.020-0.018-0.039-0.036-0.058-0.055-0.293-0.293-0.439-0.677-0.439-1.060-0 0.384-0.146 0.768-0.439 1.060-0.019 0.019-0.038 0.037-0.058 0.055-1.352 1.227-4.503-0.029-4.503-1.615 0.969 0.625 1.726 0.153 2.439-0.561 0.586-0.586 1.536-0.586 2.121 0 0.293 0.293 0.439 0.677 0.439 1.060 0-0.384 0.146-0.768 0.439-1.060 0.586-0.586 1.536-0.586 2.121 0 0.713 0.714 1.471 1.186 2.439 0.561 0 1.586-3.151 2.842-4.503 1.615z"
    }
  }]
};
exports.hipster2 = hipster2;
var wondering = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM11.652 9.4l0.351 1.2-6.828 2-0.351-1.2zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1z"
    }
  }]
};
exports.wondering = wondering;
var wondering2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM11 4c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM5.176 12.6l-0.351-1.2 6.828-2 0.351 1.2-6.828 2z"
    }
  }]
};
exports.wondering2 = wondering2;
var sleepy = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 10.5c0 1.381-0.895 2.5-2 2.5s-2-1.119-2-2.5c0-1.381 0.895-2.5 2-2.5s2 1.119 2 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 5.313c-0.128 0-0.256-0.049-0.354-0.146-0.302-0.302-0.991-0.302-1.293 0-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.696-0.696 2.011-0.696 2.707 0 0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 5.313c-0.128 0-0.256-0.049-0.354-0.146-0.302-0.302-0.991-0.302-1.293 0-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.696-0.696 2.011-0.696 2.707 0 0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
    }
  }]
};
exports.sleepy = sleepy;
var sleepy2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4.854 5.166c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.696-0.696 2.011-0.696 2.707 0 0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146s-0.256-0.049-0.354-0.146c-0.302-0.302-0.991-0.302-1.293 0zM8 13c-1.105 0-2-1.119-2-2.5s0.895-2.5 2-2.5 2 1.119 2 2.5-0.895 2.5-2 2.5zM11.854 5.166c-0.098 0.098-0.226 0.146-0.354 0.146s-0.256-0.049-0.354-0.146c-0.302-0.302-0.991-0.302-1.293 0-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.696-0.696 2.011-0.696 2.707 0 0.195 0.195 0.195 0.512 0 0.707z"
    }
  }]
};
exports.sleepy2 = sleepy2;
var frustrated = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.724 4.428c-0.543-0.271-1.080-0.407-1.102-0.413-0.268-0.067-0.539 0.096-0.606 0.364s0.096 0.539 0.364 0.606c0.275 0.070 0.602 0.189 0.89 0.334-0.166 0.179-0.268 0.418-0.268 0.681 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.018-0.001-0.036-0.002-0.054-0.032-0.741-0.706-1.234-1.275-1.518z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM3.695 12.87c0.167 0.083 0.356 0.13 0.555 0.13h7.5c0.199 0 0.387-0.047 0.555-0.13-1.147 1.014-2.654 1.63-4.305 1.63s-3.158-0.616-4.305-1.63zM4 11.75v-1.5c0-0.136 0.114-0.25 0.25-0.25h1.75v2h-1.75c-0.136 0-0.25-0.114-0.25-0.25zM7 12v-2h2v2h-2zM10 12v-2h1.75c0.136 0 0.25 0.114 0.25 0.25v1.5c0 0.136-0.114 0.25-0.25 0.25h-1.75zM12.87 12.305c0.083-0.167 0.13-0.356 0.13-0.555v-1.5c0-0.689-0.561-1.25-1.25-1.25h-7.5c-0.689 0-1.25 0.561-1.25 1.25v1.5c0 0.199 0.047 0.387 0.13 0.555-1.014-1.147-1.63-2.654-1.63-4.305 0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 1.651-0.616 3.158-1.63 4.305z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.379 4.015c-0.023 0.006-0.559 0.141-1.102 0.413-0.568 0.284-1.243 0.776-1.275 1.518-0.001 0.018-0.002 0.036-0.002 0.054 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.263-0.102-0.503-0.268-0.681 0.288-0.144 0.614-0.264 0.89-0.334 0.268-0.067 0.431-0.338 0.364-0.606s-0.338-0.431-0.606-0.364z"
    }
  }]
};
exports.frustrated = frustrated;
var frustrated2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 10.25v1.5c0 0.136 0.114 0.25 0.25 0.25h1.75v-2h-1.75c-0.136 0-0.25 0.114-0.25 0.25z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 10h2v2h-2v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.75 10h-1.75v2h1.75c0.136 0 0.25-0.114 0.25-0.25v-1.5c0-0.136-0.114-0.25-0.25-0.25z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM9.002 5.946c0.032-0.741 0.706-1.234 1.275-1.518 0.543-0.271 1.080-0.407 1.102-0.413 0.268-0.067 0.539 0.096 0.606 0.364s-0.096 0.539-0.364 0.606c-0.275 0.070-0.602 0.189-0.89 0.334 0.166 0.179 0.268 0.418 0.268 0.681 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.018 0.001-0.036 0.002-0.054zM4.015 4.379c0.067-0.268 0.338-0.431 0.606-0.364 0.023 0.006 0.559 0.141 1.102 0.413 0.568 0.284 1.243 0.776 1.275 1.518 0.001 0.018 0.002 0.036 0.002 0.054 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.263 0.102-0.503 0.268-0.681-0.288-0.144-0.614-0.264-0.89-0.334-0.268-0.067-0.431-0.338-0.364-0.606zM13 11.75c0 0.689-0.561 1.25-1.25 1.25h-7.5c-0.689 0-1.25-0.561-1.25-1.25v-1.5c0-0.689 0.561-1.25 1.25-1.25h7.5c0.689 0 1.25 0.561 1.25 1.25v1.5z"
    }
  }]
};
exports.frustrated2 = frustrated2;
var crying = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 13.375c-0.128 0-0.256-0.049-0.354-0.146-0.072-0.072-0.46-0.229-1.146-0.229s-1.075 0.157-1.146 0.229c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.471-0.471 1.453-0.521 1.854-0.521s1.383 0.051 1.854 0.521c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 9c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 9c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.crying = crying;
var crying2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1zM5 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1zM5.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM9.854 13.229c-0.098 0.098-0.226 0.146-0.354 0.146s-0.256-0.049-0.354-0.146c-0.072-0.072-0.46-0.229-1.146-0.229s-1.075 0.157-1.146 0.229c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707c0.471-0.471 1.453-0.521 1.854-0.521s1.383 0.051 1.854 0.521c0.195 0.195 0.195 0.512 0 0.707zM12 11.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1zM12 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1zM12.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.crying2 = crying2;
var pointUp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 9.5v-2.5c0-0.827-0.673-1.5-1.5-1.5-0.267 0-0.518 0.070-0.736 0.193-0.267-0.417-0.734-0.693-1.264-0.693-0.384 0-0.734 0.145-1 0.383-0.266-0.238-0.616-0.383-1-0.383-0.175 0-0.344 0.030-0.5 0.086v-3.586c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.167l-2.75-1.466c-0.227-0.131-0.486-0.201-0.75-0.201-0.827 0-1.5 0.673-1.5 1.5 0 0.412 0.164 0.796 0.461 1.082 0.004 0.004 0.008 0.007 0.012 0.011l3.737 3.407h-0.71c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-0.691l1.138-2.276c0.035-0.069 0.053-0.146 0.053-0.224zM14 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5zM14 9.382l-1.309 2.618h-5.997l-4.544-4.143c-0.097-0.095-0.15-0.221-0.15-0.357 0-0.276 0.224-0.5 0.5-0.5 0.085 0 0.166 0.020 0.239 0.061 0.008 0.005 0.017 0.010 0.025 0.014l3.5 1.866c0.155 0.083 0.342 0.078 0.492-0.012s0.243-0.253 0.243-0.429v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2.382z"
    }
  }]
};
exports.pointUp = pointUp;
var pointRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"
    }
  }]
};
exports.pointRight = pointRight;
var pointDown = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 6.5v2.5c0 0.827-0.673 1.5-1.5 1.5-0.267 0-0.518-0.070-0.736-0.193-0.267 0.417-0.734 0.693-1.264 0.693-0.384 0-0.734-0.145-1-0.383-0.266 0.238-0.616 0.383-1 0.383-0.175 0-0.344-0.030-0.5-0.086v3.586c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-6.167l-2.75 1.466c-0.227 0.131-0.486 0.201-0.75 0.201-0.827 0-1.5-0.673-1.5-1.5 0-0.412 0.164-0.796 0.461-1.082 0.004-0.004 0.008-0.007 0.012-0.011l3.737-3.407h-0.71c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5h-0.691l1.138 2.276c0.035 0.069 0.053 0.146 0.053 0.224zM14 2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5zM14 6.618l-1.309-2.618h-5.997l-4.544 4.143c-0.097 0.095-0.15 0.221-0.15 0.357 0 0.276 0.224 0.5 0.5 0.5 0.085 0 0.166-0.020 0.239-0.061 0.008-0.005 0.017-0.010 0.025-0.014l3.5-1.866c0.155-0.083 0.342-0.078 0.492 0.013s0.243 0.253 0.243 0.429v7c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.382z"
    }
  }]
};
exports.pointDown = pointDown;
var pointLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 15h-2.5c-0.827 0-1.5-0.673-1.5-1.5 0-0.267 0.070-0.518 0.193-0.736-0.417-0.267-0.693-0.734-0.693-1.264 0-0.384 0.145-0.734 0.383-1-0.238-0.266-0.383-0.616-0.383-1 0-0.175 0.030-0.344 0.086-0.5h-3.586c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h6.167l-1.466-2.75c-0.131-0.227-0.201-0.486-0.201-0.75 0-0.827 0.673-1.5 1.5-1.5 0.412 0 0.796 0.164 1.082 0.461 0.004 0.004 0.007 0.008 0.011 0.012l3.407 3.737v-0.71c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-0.691l-2.276 1.138c-0.069 0.035-0.146 0.053-0.224 0.053zM13.5 14c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5-0.5 0.224-0.5 0.5 0.224 0.5 0.5 0.5zM9.382 14l2.618-1.309v-5.997l-4.143-4.544c-0.095-0.097-0.221-0.15-0.357-0.15-0.276 0-0.5 0.224-0.5 0.5 0 0.085 0.020 0.166 0.061 0.239 0.005 0.008 0.010 0.017 0.014 0.025l1.866 3.5c0.083 0.155 0.078 0.342-0.012 0.492s-0.253 0.243-0.429 0.243h-7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.382z"
    }
  }]
};
exports.pointLeft = pointLeft;
var warning = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1.45l6.705 13.363h-13.409l6.705-13.363zM8 0c-0.345 0-0.69 0.233-0.951 0.698l-6.829 13.611c-0.523 0.93-0.078 1.691 0.989 1.691h13.583c1.067 0 1.512-0.761 0.989-1.691h0l-6.829-13.611c-0.262-0.465-0.606-0.698-0.951-0.698v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 13c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 11c-0.552 0-1-0.448-1-1v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v3c0 0.552-0.448 1-1 1z"
    }
  }]
};
exports.warning = warning;
var notification = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1.5c-1.736 0-3.369 0.676-4.596 1.904s-1.904 2.86-1.904 4.596c0 1.736 0.676 3.369 1.904 4.596s2.86 1.904 4.596 1.904c1.736 0 3.369-0.676 4.596-1.904s1.904-2.86 1.904-4.596c0-1.736-0.676-3.369-1.904-4.596s-2.86-1.904-4.596-1.904zM8 0v0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8s3.582-8 8-8zM7 11h2v2h-2zM7 3h2v6h-2z"
    }
  }]
};
exports.notification = notification;
var question = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 11h2v2h-2zM11 4c0.552 0 1 0.448 1 1v3l-3 2h-2v-1l3-2v-1h-5v-2h6zM8 1.5c-1.736 0-3.369 0.676-4.596 1.904s-1.904 2.86-1.904 4.596c0 1.736 0.676 3.369 1.904 4.596s2.86 1.904 4.596 1.904c1.736 0 3.369-0.676 4.596-1.904s1.904-2.86 1.904-4.596c0-1.736-0.676-3.369-1.904-4.596s-2.86-1.904-4.596-1.904zM8 0v0c4.418 0 8 3.582 8 8s-3.582 8-8 8c-4.418 0-8-3.582-8-8s3.582-8 8-8z"
    }
  }]
};
exports.question = question;
var plus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"
    }
  }]
};
exports.plus = plus;
var minus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 6.5v3c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5z"
    }
  }]
};
exports.minus = minus;
var info = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 4.75c0-0.412 0.338-0.75 0.75-0.75h0.5c0.412 0 0.75 0.338 0.75 0.75v0.5c0 0.412-0.338 0.75-0.75 0.75h-0.5c-0.412 0-0.75-0.338-0.75-0.75v-0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 12h-4v-1h1v-3h-1v-1h3v4h1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
    }
  }]
};
exports.info = info;
var cancelCircle = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"
    }
  }]
};
exports.cancelCircle = cancelCircle;
var blocked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.657 2.343c-1.511-1.511-3.52-2.343-5.657-2.343s-4.146 0.832-5.657 2.343c-1.511 1.511-2.343 3.52-2.343 5.657s0.832 4.146 2.343 5.657c1.511 1.511 3.52 2.343 5.657 2.343s4.146-0.832 5.657-2.343c1.511-1.511 2.343-3.52 2.343-5.657s-0.832-4.146-2.343-5.657zM14 8c0 1.294-0.412 2.494-1.111 3.475l-8.364-8.364c0.981-0.699 2.181-1.111 3.475-1.111 3.308 0 6 2.692 6 6zM2 8c0-1.294 0.412-2.494 1.111-3.475l8.364 8.364c-0.981 0.699-2.181 1.111-3.475 1.111-3.308 0-6-2.692-6-6z"
    }
  }]
};
exports.blocked = blocked;
var cross = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
    }
  }]
};
exports.cross = cross;
var checkmark = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"
    }
  }]
};
exports.checkmark = checkmark;
var checkmark2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.21 14.339l-6.217-6.119 3.084-3.035 3.133 3.083 6.713-6.607 3.084 3.035-9.797 9.643zM1.686 8.22l4.524 4.453 8.104-7.976-1.391-1.369-6.713 6.607-3.133-3.083-1.391 1.369z"
    }
  }]
};
exports.checkmark2 = checkmark2;
var spellCheck = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 4h2v3h1v-6c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v6h1v-3zM2 1h2v2h-2v-2zM15 1v-1h-3c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h3v-1h-3v-5h3zM10 2.5v-1.5c0-0.55-0.45-1-1-1h-3v7h3c0.55 0 1-0.45 1-1v-1.5c0-0.55-0.137-1-0.688-1 0.55 0 0.688-0.45 0.688-1zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM13 9l-6.5 7-3.5-4.5 1.281-1.094 2.219 2.313 5.5-4.719z"
    }
  }]
};
exports.spellCheck = spellCheck;
var enter = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 8h-5v-2h5v-2l3 3-3 3zM16 0v13l-6 3v-3h-6v-4h1v3h5v-9l4-2h-9v4h-1v-5z"
    }
  }]
};
exports.enter = enter;
var exit = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"
    }
  }]
};
exports.exit = exit;
var play2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM6 4.5l6 3.5-6 3.5z"
    }
  }]
};
exports.play2 = play2;
var pause = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM5 5h2v6h-2zM9 5h2v6h-2z"
    }
  }]
};
exports.pause = pause;
var stop = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM5 5h6v6h-6z"
    }
  }]
};
exports.stop = stop;
var previous = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 8l4-3v6z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 5h2v6h-2v-6z"
    }
  }]
};
exports.previous = previous;
var next = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM8 14.5c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 8l-4-3v6z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 5h-2v6h2v-6z"
    }
  }]
};
exports.next = next;
var backward = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM11 10.5l-3.5-2.5 3.5-2.5zM7 10.5l-3.5-2.5 3.5-2.5z"
    }
  }]
};
exports.backward = backward;
var forward2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zM5 5.5l3.5 2.5-3.5 2.5zM9 5.5l3.5 2.5-3.5 2.5z"
    }
  }]
};
exports.forward2 = forward2;
var play3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 2l10 6-10 6z"
    }
  }]
};
exports.play3 = play3;
var pause2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 2h5v12h-5zM9 2h5v12h-5z"
    }
  }]
};
exports.pause2 = pause2;
var stop2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 2h12v12h-12z"
    }
  }]
};
exports.stop2 = stop2;
var backward2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 2.5v5l5-5v11l-5-5v5l-5.5-5.5z"
    }
  }]
};
exports.backward2 = backward2;
var forward3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 13.5v-5l-5 5v-11l5 5v-5l5.5 5.5z"
    }
  }]
};
exports.forward3 = forward3;
var first = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 14v-12h2v5.5l5-5v5l5-5v11l-5-5v5l-5-5v5.5z"
    }
  }]
};
exports.first = first;
var last = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 2v12h-2v-5.5l-5 5v-5l-5 5v-11l5 5v-5l5 5v-5.5z"
    }
  }]
};
exports.last = last;
var previous2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 14v-12h2v5.5l5-5v11l-5-5v5.5z"
    }
  }]
};
exports.previous2 = previous2;
var next2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 2v12h-2v-5.5l-5 5v-11l5 5v-5.5z"
    }
  }]
};
exports.next2 = next2;
var eject = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 12h16v2h-16zM8 2l8 8h-16z"
    }
  }]
};
exports.eject = eject;
var volumeHigh = {
  "viewBox": "0 0 17 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.907 14.407c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 1.369-1.369 2.123-3.19 2.123-5.127s-0.754-3.757-2.123-5.127c-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.653 1.653 2.563 3.85 2.563 6.187s-0.91 4.534-2.563 6.187c-0.146 0.146-0.338 0.22-0.53 0.22zM11.243 12.993c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 2.047-2.047 2.047-5.378 0-7.425-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773c-0.146 0.146-0.338 0.22-0.53 0.22v0zM8.578 11.578c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 1.267-1.267 1.267-3.329 0-4.596-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.852 1.852 1.852 4.865 0 6.718-0.146 0.146-0.338 0.22-0.53 0.22z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeHigh = volumeHigh;
var volumeMedium = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.243 12.993c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 2.047-2.047 2.047-5.378 0-7.425-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773c-0.146 0.146-0.338 0.22-0.53 0.22v0zM8.578 11.578c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 1.267-1.267 1.267-3.329 0-4.596-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.852 1.852 1.852 4.865 0 6.718-0.146 0.146-0.338 0.22-0.53 0.22z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeMedium = volumeMedium;
var volumeLow = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.578 11.578c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 1.267-1.267 1.267-3.329 0-4.596-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.852 1.852 1.852 4.865 0 6.718-0.146 0.146-0.338 0.22-0.53 0.22z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeLow = volumeLow;
var volumeMute = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeMute = volumeMute;
var volumeMute2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 9.674v1.326h-1.326l-1.674-1.674-1.674 1.674h-1.326v-1.326l1.674-1.674-1.674-1.674v-1.326h1.326l1.674 1.674 1.674-1.674h1.326v1.326l-1.674 1.674 1.674 1.674z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeMute2 = volumeMute2;
var volumeIncrease = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeIncrease = volumeIncrease;
var volumeDecrease = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 7h8v2h-8v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"
    }
  }]
};
exports.volumeDecrease = volumeDecrease;
var loop = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 5h10v3l4-4-4-4v3h-12v6h2zM14 11h-10v-3l-4 4 4 4v-3h12v-6h-2z"
    }
  }]
};
exports.loop = loop;
var loop2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.901 2.599c-1.463-1.597-3.565-2.599-5.901-2.599-4.418 0-8 3.582-8 8h1.5c0-3.59 2.91-6.5 6.5-6.5 1.922 0 3.649 0.835 4.839 2.161l-2.339 2.339h5.5v-5.5l-2.099 2.099z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 8c0 3.59-2.91 6.5-6.5 6.5-1.922 0-3.649-0.835-4.839-2.161l2.339-2.339h-5.5v5.5l2.099-2.099c1.463 1.597 3.565 2.599 5.901 2.599 4.418 0 8-3.582 8-8h-1.5z"
    }
  }]
};
exports.loop2 = loop2;
var infinite = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.25 11.75c-1.002 0-1.943-0.39-2.652-1.098l-1.598-1.598-1.598 1.598c-0.708 0.708-1.65 1.098-2.652 1.098s-1.944-0.39-2.652-1.098c-0.708-0.708-1.098-1.65-1.098-2.652s0.39-1.943 1.098-2.652c0.708-0.708 1.65-1.098 2.652-1.098s1.943 0.39 2.652 1.098l1.598 1.598 1.598-1.598c0.708-0.708 1.65-1.098 2.652-1.098s1.944 0.39 2.652 1.098c0.708 0.708 1.098 1.65 1.098 2.652s-0.39 1.943-1.098 2.652c-0.708 0.708-1.65 1.098-2.652 1.098zM10.652 9.598c0.427 0.427 0.994 0.662 1.598 0.662s1.171-0.235 1.598-0.662c0.427-0.427 0.662-0.994 0.662-1.598s-0.235-1.171-0.662-1.598c-0.427-0.427-0.994-0.662-1.598-0.662s-1.171 0.235-1.598 0.662l-1.598 1.598 1.598 1.598zM3.75 5.74c-0.604 0-1.171 0.235-1.598 0.662s-0.662 0.994-0.662 1.598c0 0.604 0.235 1.171 0.662 1.598s0.994 0.662 1.598 0.662c0.604 0 1.171-0.235 1.598-0.662l1.598-1.598-1.598-1.598c-0.427-0.427-0.994-0.662-1.598-0.662v0z"
    }
  }]
};
exports.infinite = infinite;
var shuffle = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 11h-1.586l-2.5-2.5 2.5-2.5h1.586v2.5l3.5-3.5-3.5-3.5v2.5h-2c-0.265 0-0.52 0.105-0.707 0.293l-2.793 2.793-2.793-2.793c-0.188-0.188-0.442-0.293-0.707-0.293h-3v2h2.586l2.5 2.5-2.5 2.5h-2.586v2h3c0.265 0 0.52-0.105 0.707-0.293l2.793-2.793 2.793 2.793c0.188 0.188 0.442 0.293 0.707 0.293h2v2.5l3.5-3.5-3.5-3.5v2.5z"
    }
  }]
};
exports.shuffle = shuffle;
var arrowUpLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 11.5l4-4 8.5 8.5 3.5-3.5-8.5-8.5 4-4h-11.5v11.5z"
    }
  }]
};
exports.arrowUpLeft = arrowUpLeft;
var arrowUp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0.5l-7.5 7.5h4.5v8h6v-8h4.5z"
    }
  }]
};
exports.arrowUp = arrowUp;
var arrowUpRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 0l4 4-8.5 8.5 3.5 3.5 8.5-8.5 4 4v-11.5h-11.5z"
    }
  }]
};
exports.arrowUpRight = arrowUpRight;
var arrowRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.5 8l-7.5-7.5v4.5h-8v6h8v4.5z"
    }
  }]
};
exports.arrowRight = arrowRight;
var arrowDownRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 4.5l-4 4-8.5-8.5-3.5 3.5 8.5 8.5-4 4h11.5v-11.5z"
    }
  }]
};
exports.arrowDownRight = arrowDownRight;
var arrowDown = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z"
    }
  }]
};
exports.arrowDown = arrowDown;
var arrowDownLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 16l-4-4 8.5-8.5-3.5-3.5-8.5 8.5-4-4v11.5h11.5z"
    }
  }]
};
exports.arrowDownLeft = arrowDownLeft;
var arrowLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"
    }
  }]
};
exports.arrowLeft = arrowLeft;
var arrowUpLeft2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.707 12.293l-8.293-8.293h3.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.404 0-0.769 0.244-0.924 0.617-0.051 0.124-0.076 0.254-0.076 0.383h-0.001v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.586l8.293 8.293c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.39 0.391-1.024 0-1.414z"
    }
  }]
};
exports.arrowUpLeft2 = arrowUpLeft2;
var arrowUp2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.707 6.293l-5-5c-0.39-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.586l3.293 3.293c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.391 0.391-1.024 0-1.414z"
    }
  }]
};
exports.arrowUp2 = arrowUp2;
var arrowUpRight2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.707 13.707l8.293-8.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.404-0.244-0.769-0.617-0.924-0.124-0.051-0.254-0.076-0.383-0.076v-0.001h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-8.293 8.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.39 0.391 1.024 0.391 1.414 0z"
    }
  }]
};
exports.arrowUpRight2 = arrowUpRight2;
var arrowRight2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z"
    }
  }]
};
exports.arrowRight2 = arrowRight2;
var arrowDownRight2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.293 3.707l8.293 8.293h-3.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.404 0 0.769-0.244 0.924-0.617 0.051-0.124 0.076-0.254 0.076-0.383h0.001v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.586l-8.293-8.293c-0.195-0.195-0.451-0.293-0.707-0.293s-0.512 0.098-0.707 0.293c-0.391 0.39-0.391 1.024 0 1.414z"
    }
  }]
};
exports.arrowDownRight2 = arrowDownRight2;
var arrowDown2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.707 9.707l-5 5c-0.39 0.391-1.024 0.391-1.414 0l-5-5c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3.293 3.293v-9.586c0-0.552 0.448-1 1-1s1 0.448 1 1v9.586l3.293-3.293c0.195-0.195 0.451-0.293 0.707-0.293s0.512 0.098 0.707 0.293c0.391 0.391 0.391 1.024 0 1.414z"
    }
  }]
};
exports.arrowDown2 = arrowDown2;
var arrowDownLeft2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.293 2.293l-8.293 8.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.404 0.244 0.769 0.617 0.924 0.124 0.051 0.254 0.076 0.383 0.076v0.001l6-0c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.586l8.293-8.293c0.195-0.195 0.293-0.451 0.293-0.707s-0.098-0.512-0.293-0.707c-0.39-0.391-1.024-0.391-1.414 0v0z"
    }
  }]
};
exports.arrowDownLeft2 = arrowDownLeft2;
var arrowLeft2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.293 13.707l-5-5c-0.391-0.39-0.391-1.024 0-1.414l5-5c0.391-0.391 1.024-0.391 1.414 0s0.391 1.024 0 1.414l-3.293 3.293h9.586c0.552 0 1 0.448 1 1s-0.448 1-1 1h-9.586l3.293 3.293c0.195 0.195 0.293 0.451 0.293 0.707s-0.098 0.512-0.293 0.707c-0.391 0.391-1.024 0.391-1.414 0z"
    }
  }]
};
exports.arrowLeft2 = arrowLeft2;
var circleUp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 8c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zM14.5 8c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.043 10.457l1.414-1.414-4.457-4.457-4.457 4.457 1.414 1.414 3.043-3.043z"
    }
  }]
};
exports.circleUp = circleUp;
var circleRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.543 11.043l1.414 1.414 4.457-4.457-4.457-4.457-1.414 1.414 3.043 3.043z"
    }
  }]
};
exports.circleRight = circleRight;
var circleDown = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zM1.5 8c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.957 5.543l-1.414 1.414 4.457 4.457 4.457-4.457-1.414-1.414-3.043 3.043z"
    }
  }]
};
exports.circleDown = circleDown;
var circleLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.457 4.957l-1.414-1.414-4.457 4.457 4.457 4.457 1.414-1.414-3.043-3.043z"
    }
  }]
};
exports.circleLeft = circleLeft;
var tab = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 0h1v8h-1v-8z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 8h1v8h-1v-8z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 11h11v2h-11v2.5l-3.5-3.5 3.5-3.5v2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 5h-11v-2h11v-2.5l3.5 3.5-3.5 3.5z"
    }
  }]
};
exports.tab = tab;
var moveUp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 8v6h1v-6h2.5l-3-3-3 3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 3h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 3h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 3h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 6.5h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.5 7h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 7h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 4.5h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 5h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 11v3h-3v-3h3zM6 10h-5v5h5v-5z"
    }
  }]
};
exports.moveUp = moveUp;
var moveDown = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 11v-6h-1v6h-2.5l3 3 3-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 4v3h-3v-3h3zM6 3h-5v5h5v-5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 10h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 10h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 10h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 13.5h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.5 14h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.5 14h1.5v1h-1.5v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 11.5h1v1.5h-1v-1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12h1v1.5h-1v-1.5z"
    }
  }]
};
exports.moveDown = moveDown;
var sortAlphaAsc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 16h-4c-0.184 0-0.354-0.101-0.441-0.264s-0.077-0.36 0.025-0.513l3.482-5.223h-3.066c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.184 0 0.354 0.101 0.441 0.264s0.077 0.36-0.025 0.513l-3.482 5.223h3.066c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.947 6.276l-3-6c-0.085-0.169-0.258-0.276-0.447-0.276s-0.363 0.107-0.447 0.276l-3 6c-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277l0.862-1.724h3.382l0.862 1.724c0.123 0.247 0.424 0.347 0.671 0.224s0.347-0.424 0.224-0.671zM11.309 4l1.191-2.382 1.191 2.382h-2.382z"
    }
  }]
};
exports.sortAlphaAsc = sortAlphaAsc;
var sortAlphaDesc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 7h-4c-0.184 0-0.354-0.101-0.441-0.264s-0.077-0.36 0.025-0.513l3.482-5.223h-3.066c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.184 0 0.354 0.102 0.441 0.264s0.077 0.36-0.025 0.513l-3.482 5.223h3.066c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.947 15.276l-3-6c-0.085-0.169-0.258-0.276-0.447-0.276s-0.363 0.107-0.447 0.276l-3 6c-0.123 0.247-0.023 0.547 0.224 0.671 0.072 0.036 0.148 0.053 0.223 0.053 0.183 0 0.36-0.101 0.448-0.277l0.862-1.724h3.382l0.862 1.724c0.123 0.247 0.424 0.347 0.671 0.224s0.347-0.424 0.224-0.671zM11.309 13l1.191-2.382 1.191 2.382h-2.382z"
    }
  }]
};
exports.sortAlphaDesc = sortAlphaDesc;
var sortNumericAsc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 7c-0.276 0-0.5-0.224-0.5-0.5v-5.5h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 9h-3c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h2.5v2h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5zM12 10h2v2h-2v-2z"
    }
  }]
};
exports.sortNumericAsc = sortNumericAsc;
var sortNumbericDesc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 16c-0.276 0-0.5-0.224-0.5-0.5v-5.5h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-3c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h2.5v2h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5zM12 1h2v2h-2v-2z"
    }
  }]
};
exports.sortNumbericDesc = sortNumbericDesc;
var sortAmountAsc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9h9v2h-9v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 6h7v2h-7v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 3h5v2h-5v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 0h3v2h-3v-2z"
    }
  }]
};
exports.sortAmountAsc = sortAmountAsc;
var sortAmountDesc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 0h9v2h-9v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 3h7v2h-7v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 6h5v2h-5v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 9h3v2h-3v-2z"
    }
  }]
};
exports.sortAmountDesc = sortAmountDesc;
var command = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 14c-1.379 0-2.5-1.121-2.5-2.5v-1.5h-2v1.5c0 1.379-1.122 2.5-2.5 2.5s-2.5-1.121-2.5-2.5 1.122-2.5 2.5-2.5h1.5v-2h-1.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5v1.5h2v-1.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5h-1.5v2h1.5c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5zM10 10v1.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5h-1.5zM4.5 10c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5v-1.5h-1.5zM7 9h2v-2h-2v2zM10 6h1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5-1.5 0.673-1.5 1.5v1.5zM4.5 3c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5h1.5v-1.5c0-0.827-0.673-1.5-1.5-1.5z"
    }
  }]
};
exports.command = command;
var shift = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.5 14h-5c-0.276 0-0.5-0.224-0.5-0.5v-5.5h-2c-0.202 0-0.385-0.122-0.462-0.309s-0.035-0.402 0.108-0.545l5-5c0.195-0.195 0.512-0.195 0.707 0l5 5c0.143 0.143 0.186 0.358 0.108 0.545s-0.26 0.309-0.462 0.309h-2v5.5c0 0.276-0.224 0.5-0.5 0.5zM6 13h4v-5.5c0-0.276 0.224-0.5 0.5-0.5h1.293l-3.793-3.793-3.793 3.793h1.293c0.276 0 0.5 0.224 0.5 0.5v5.5z"
    }
  }]
};
exports.shift = shift;
var ctrl = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"
    }
  }]
};
exports.ctrl = ctrl;
var opt = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 13h-4c-0.198 0-0.377-0.116-0.457-0.297l-3.868-8.703h-4.675c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.198 0 0.377 0.116 0.457 0.297l3.868 8.703h3.675c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 4h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.opt = opt;
var checkboxChecked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"
    }
  }]
};
exports.checkboxChecked = checkboxChecked;
var checkboxUnchecked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM14 14h-12v-12h12v12z"
    }
  }]
};
exports.checkboxUnchecked = checkboxUnchecked;
var radioChecked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zM5 8c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3z"
    }
  }]
};
exports.radioChecked = radioChecked;
var radioChecked2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"
    }
  }]
};
exports.radioChecked2 = radioChecked2;
var radioUnchecked = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
    }
  }]
};
exports.radioUnchecked = radioUnchecked;
var crop = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 4l3-3-1-1-3 3h-7v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7zM5 5h5l-5 5v-5zM6 11l5-5v5h-5z"
    }
  }]
};
exports.crop = crop;
var makeGroup = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 2h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 6h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1zM11 3h2v2h-2v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1zM5 13h-2v-2h2v2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 8h-1c-1.336 0-2.591-0.52-3.536-1.464s-1.464-2.2-1.464-3.536v-1c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h1c1.336 0 2.591 0.52 3.536 1.464s1.464 2.2 1.464 3.536v1c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2zM15 14c0 0.265-0.105 0.515-0.295 0.705s-0.44 0.295-0.705 0.295h-4c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.44-0.295-0.705v-1c0-3.314-2.686-6-6-6h-1c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.441-0.295-0.705v-4c0-0.265 0.105-0.515 0.295-0.705s0.44-0.295 0.705-0.295h4c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v1c0 3.314 2.686 6 6 6h1c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v4z"
    }
  }]
};
exports.makeGroup = makeGroup;
var ungroup = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 7.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.413 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.337-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 7.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.412 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.338-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 12.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.413 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.337-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 12.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.412 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.338-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.251 2.5l1.749-1.749v-0.751h-0.751l-1.749 1.749-1.749-1.749h-0.751v0.751l1.749 1.749-1.749 1.749v0.751h0.751l1.749-1.749 1.749 1.749h0.751v-0.751z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 12h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 9h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 7h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 13h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 10h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 6h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3h1v2h-1v-2z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 2h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5 2h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 2h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 15h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10 15h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 15h2v1h-2v-1z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 15h2v1h-2v-1z"
    }
  }]
};
exports.ungroup = ungroup;
var scissors = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.279 10.62c-1.042-1.628-2.829-2.345-3.992-1.601-0.1 0.064-0.193 0.138-0.277 0.218l-1.241-1.942 2.867-4.5c0.235-0.433 0.321-0.949 0.207-1.468-0.109-0.496-0.383-0.913-0.752-1.207l-0.192-0.122-3.398 5.314-3.398-5.314-0.192 0.122c-0.369 0.294-0.643 0.711-0.752 1.207-0.114 0.519-0.027 1.035 0.207 1.468l2.867 4.5-1.241 1.942c-0.085-0.081-0.177-0.154-0.277-0.218-1.163-0.744-2.95-0.028-3.992 1.601s-0.944 3.551 0.219 4.296c1.163 0.744 2.95 0.028 3.992-1.601l2.567-4.029 2.567 4.029c1.042 1.628 2.829 2.345 3.992 1.601s1.261-2.667 0.219-4.296zM3.67 12.507c-0.469 0.733-1.071 1.089-1.478 1.179-0 0-0 0-0 0-0.133 0.029-0.317 0.047-0.443-0.033-0.139-0.089-0.231-0.324-0.247-0.629-0.025-0.494 0.151-1.076 0.483-1.594 0.469-0.733 1.071-1.089 1.478-1.179 0.133-0.029 0.317-0.047 0.443 0.033 0.139 0.089 0.231 0.324 0.247 0.629 0.025 0.495-0.151 1.076-0.483 1.594zM7.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM13.498 13.023c-0.016 0.305-0.108 0.54-0.247 0.629-0.125 0.080-0.31 0.062-0.443 0.033 0 0 0 0-0 0-0.407-0.089-1.009-0.446-1.478-1.179-0.332-0.519-0.508-1.1-0.483-1.594 0.016-0.305 0.108-0.54 0.247-0.629 0.125-0.080 0.31-0.062 0.443-0.033 0.407 0.089 1.009 0.446 1.478 1.179 0.332 0.519 0.508 1.1 0.483 1.594z"
    }
  }]
};
exports.scissors = scissors;
var filter = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 1.119-8 2.5v1.5l6 6v5c0 0.552 0.895 1 2 1s2-0.448 2-1v-5l6-6v-1.5c0-1.381-3.582-2.5-8-2.5zM1.475 2.169c0.374-0.213 0.9-0.416 1.52-0.586 1.374-0.376 3.152-0.583 5.005-0.583s3.631 0.207 5.005 0.583c0.62 0.17 1.146 0.372 1.52 0.586 0.247 0.141 0.38 0.26 0.442 0.331-0.062 0.071-0.195 0.19-0.442 0.331-0.374 0.213-0.9 0.416-1.52 0.586-1.374 0.376-3.152 0.583-5.005 0.583s-3.631-0.207-5.005-0.583c-0.62-0.17-1.146-0.372-1.52-0.586-0.247-0.141-0.38-0.26-0.442-0.331 0.062-0.071 0.195-0.19 0.442-0.331z"
    }
  }]
};
exports.filter = filter;
var font = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.494 0.253c-1.414 0-2.322-0.253-3.779-0.253-4.708 0-6.903 2.681-6.903 5.404 0 1.604 0.76 2.132 2.259 2.132-0.106-0.232-0.296-0.486-0.296-1.626 0-3.188 1.203-4.117 2.744-4.18 0 0-1.264 12.396-4.934 13.883v0.385h4.947l1.688-8h3.091l0.689-2h-3.358l0.812-3.847c0.929 0.19 1.837 0.38 2.618 0.38 0.971 0 1.858-0.296 2.343-2.533-0.591 0.19-1.224 0.253-1.921 0.253z"
    }
  }]
};
exports.font = font;
var ligature = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 13.622c0-0.001 0-0.001 0-0.002l-0.005-6.821-1.992 0.097h-3.936v-0.336c0-1.274 0.091-2.546 0.269-3.042 0.123-0.343 0.353-0.652 0.683-0.919 0.322-0.261 0.643-0.393 0.955-0.393 0.262 0 0.48 0.045 0.647 0.134 0.235 0.134 0.464 0.359 0.682 0.669 0.577 0.82 0.812 1.038 0.939 1.131 0.216 0.158 0.477 0.238 0.776 0.238 0.292 0 0.546-0.109 0.757-0.324 0.209-0.213 0.315-0.479 0.315-0.792 0-0.335-0.139-0.691-0.414-1.057-0.268-0.358-0.683-0.652-1.232-0.875-0.536-0.218-1.14-0.329-1.793-0.329-0.949 0-1.813 0.228-2.568 0.678-0.757 0.451-1.337 1.077-1.725 1.863-0.359 0.728-0.333 2.105-0.355 3.355h-1.965v1.116h1.962v5.073c0 1.12-0.342 1.422-0.472 1.583-0.179 0.222-0.509 0.455-0.944 0.455h-0.604v0.878h6.021v-0.878h-0.105c-1.424 0-1.828-0.154-1.828-1.888 0-0 0-0.001 0-0.001l-0.001-5.222h2.191c1.163 0 1.43 0.054 1.491 0.077 0.074 0.028 0.169 0.075 0.204 0.143 0.014 0.026 0.081 0.391 0.081 1.296v3.917c0 0.913-0.111 1.217-0.179 1.319-0.145 0.222-0.319 0.345-0.854 0.358v0.879h4.588v-0.873c-1.431 0-1.588-0.153-1.588-1.505z"
    }
  }]
};
exports.ligature = ligature;
var ligature2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.364 14.335c-0.183 0-1.307-0.206-1.375-0.458-0.161-0.619-0.183-1.284-0.183-2.040v-8.453c0-1.261 0.252-1.994 0.252-1.994-0.023-0.115-0.138-0.367-0.275-0.367h-0.069c-0.069 0-0.871 0.504-1.605 0.504-0.596-0-0.967-0.527-1.655-0.527-2.892 0-4.249 2.349-4.249 5.672v0.173c0 0.069-0.046 0.138-0.115 0.138h-0.94c-0.115 0-0.344 0.642-0.344 0.94 0 0.092 0.023 0.137 0.069 0.137h1.215c0.069 0 0.115 0.092 0.115 0.16 0 2.040-0.023 4.052-0.023 4.052 0 0.321-0.023 1.031-0.16 1.605-0.069 0.252-1.123 0.458-1.398 0.458-0.115 0-0.115 0.55 0 0.665 0.94-0.046 1.559-0.115 2.499-0.115 0.871 0 1.536 0.069 2.453 0.115 0.046-0.138 0.046-0.665-0.069-0.665-0.183 0-1.307-0.206-1.375-0.458-0.16-0.619-0.16-1.284-0.183-2.040v-3.639c0-0.069 0.069-0.138 0.138-0.138h2.361c0.16-0.321 0.275-0.711 0.275-0.917 0-0.138 0-0.16-0.115-0.16h-2.544c-0.046 0-0.115-0.069-0.115-0.115v-0.825c0-2.040 0.836-3.837 2.234-3.837 0.99 0 1.854 0.642 1.854 3.093 0 0 0 0 0 0 0.003 0.063 0.005 0.114 0.005 0.148v6.825c0 0.321-0.023 1.031-0.16 1.605-0.069 0.252-1.123 0.458-1.398 0.458-0.115 0-0.115 0.55 0 0.665 0.94-0.046 1.559-0.115 2.499-0.115 0.871 0 1.536 0.069 2.453 0.115 0.046-0.137 0.046-0.665-0.069-0.665z"
    }
  }]
};
exports.ligature2 = ligature2;
var textHeight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 12h2l-2.5 3-2.5-3h2v-8h-2l2.5-3 2.5 3h-2zM10 1v4l-1-2h-3v11h2v1h-6v-1h2v-11h-3l-1 2v-4z"
    }
  }]
};
exports.textHeight = textHeight;
var textWidth = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 14v2l-3-2.5 3-2.5v2h8v-2l3 2.5-3 2.5v-2zM13 1v4l-1-2h-3v7h2v1h-6v-1h2v-7h-3l-1 2v-4z"
    }
  }]
};
exports.textWidth = textWidth;
var fontSize = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 8h6v2h-2v6h-2v-6h-2zM15 4h-3.934v12h-2.133v-12h-3.934v-2h10z"
    }
  }]
};
exports.fontSize = fontSize;
var bold = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.061 7.573c0.586-0.696 0.939-1.594 0.939-2.573 0-2.206-1.794-4-4-4h-5v14h6c2.206 0 4-1.794 4-4 0-1.452-0.778-2.726-1.939-3.427zM6 3h1.586c0.874 0 1.586 0.897 1.586 2s-0.711 2-1.586 2h-1.586v-4zM8.484 13h-2.484v-4h2.484c0.913 0 1.656 0.897 1.656 2s-0.743 2-1.656 2z"
    }
  }]
};
exports.bold = bold;
var underline = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 1h2v6.5c0 2.485-2.239 4.5-5 4.5s-5-2.015-5-4.5v-6.5h2v6.5c0 0.628 0.285 1.23 0.802 1.695 0.577 0.519 1.357 0.805 2.198 0.805s1.621-0.286 2.198-0.805c0.517-0.466 0.802-1.068 0.802-1.695v-6.5zM3 13h10v2h-10z"
    }
  }]
};
exports.underline = underline;
var italic = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 1v1h-2l-5 12h2v1h-7v-1h2l5-12h-2v-1z"
    }
  }]
};
exports.italic = italic;
var strikethrough = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8v1h-3.664c0.43 0.602 0.664 1.292 0.664 2 0 1.107-0.573 2.172-1.572 2.921-0.927 0.696-2.145 1.079-3.428 1.079s-2.501-0.383-3.428-1.079c-0.999-0.749-1.572-1.814-1.572-2.921h2c0 1.084 1.374 2 3 2s3-0.916 3-2c0-1.084-1.374-2-3-2h-8v-1h4.68c-0.037-0.026-0.073-0.052-0.108-0.079-0.999-0.749-1.572-1.814-1.572-2.921s0.573-2.172 1.572-2.921c0.927-0.696 2.145-1.079 3.428-1.079s2.501 0.383 3.428 1.079c0.999 0.749 1.572 1.814 1.572 2.921h-2c0-1.084-1.374-2-3-2s-3 0.916-3 2c0 1.084 1.374 2 3 2 1.234 0 2.407 0.354 3.32 1h4.68z"
    }
  }]
};
exports.strikethrough = strikethrough;
var omega = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 14h4l1-2v4h-6v-3.347c2.049-0.883 3.5-3.081 3.5-5.653 0-3.35-2.462-5.973-5.5-5.973s-5.5 2.622-5.5 5.973c0 2.572 1.451 4.77 3.5 5.653v3.347h-6v-4l1 2h4v-0.509c-2.932-1.038-5-3.553-5-6.491 0-3.866 3.582-7 8-7s8 3.134 8 7c0 2.938-2.068 5.452-5 6.491v0.509z"
    }
  }]
};
exports.omega = omega;
var sigma = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.713 11.48l0.694-1.48h0.594l-1 6h-15v-1.16l5.18-6.113-5.18-5.18v-3.547h15.313l0.688 4h-0.537l-0.293-0.607c-0.552-1.146-0.967-1.393-2.17-1.393h-10.344l5.517 5.516-4.647 5.483h8.474c1.813 0 2.291-0.65 2.713-1.52z"
    }
  }]
};
exports.sigma = sigma;
var pageBreak = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 8h2v1h-2zM3 8h3v1h-3zM7 8h2v1h-2zM10 8h3v1h-3zM14 8h2v1h-2zM13.75 0l0.25 7h-12l0.25-7h0.5l0.25 6h10l0.25-6zM2.25 16l-0.25-6h12l-0.25 6h-0.5l-0.25-5h-10l-0.25 5z"
    }
  }]
};
exports.pageBreak = pageBreak;
var superscript = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 3.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM10.563 4h-2.125l-2.938 2.938-2.938-2.938h-2.125l4 4-4 4h2.125l2.938-2.938 2.938 2.938h2.125l-4-4z"
    }
  }]
};
exports.superscript = superscript;
var subscript = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12 14.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM10.563 4h-2.125l-2.938 2.938-2.938-2.938h-2.125l4 4-4 4h2.125l2.938-2.938 2.938 2.938h2.125l-4-4z"
    }
  }]
};
exports.subscript = subscript;
var superscript2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.032 13l0.9-3h4.137l0.9 3h1.775l-3-10h-3.488l-3 10h1.776zM5.432 5h1.137l0.9 3h-2.937l0.9-3zM11 13l2.5-4 2.5 4h-5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 2h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.827 0-1.5 0.673-1.5 1.5 0 0.384 0.145 0.734 0.383 1 0.275 0.307 0.674 0.5 1.117 0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2c0.827 0 1.5-0.673 1.5-1.5 0-0.384-0.145-0.734-0.383-1-0.275-0.307-0.674-0.5-1.117-0.5z"
    }
  }]
};
exports.superscript2 = superscript2;
var subscript2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.032 13l0.9-3h4.137l0.9 3h1.775l-3-10h-3.488l-3 10h1.776zM5.432 5h1.137l0.9 3h-2.937l0.9-3zM16 3l-2.5 4-2.5-4h5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 13h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2c-0.827 0-1.5 0.673-1.5 1.5 0 0.384 0.145 0.734 0.383 1 0.275 0.307 0.674 0.5 1.117 0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2c0.827 0 1.5-0.673 1.5-1.5 0-0.384-0.145-0.734-0.383-1-0.275-0.307-0.674-0.5-1.117-0.5z"
    }
  }]
};
exports.subscript2 = subscript2;
var textColor = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.032 13l0.9-3h4.137l0.9 3h1.775l-3-10h-3.488l-3 10h1.776zM7.432 5h1.137l0.9 3h-2.937l0.9-3z"
    }
  }]
};
exports.textColor = textColor;
var pagebreak = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 6v-6h12v6h-1v-5h-10v5zM16 9v7h-12v-7h1v6h10v-6zM8 7h2v1h-2zM5 7h2v1h-2zM11 7h2v1h-2zM14 7h2v1h-2zM0 4.5l3 3-3 3z"
    }
  }]
};
exports.pagebreak = pagebreak;
var clearFormatting = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 14h9v2h-9zM14 2h-4.727l-2.871 11h-2.067l2.871-11h-4.205v-2h11zM14.528 16l-2.028-2.028-2.028 2.028-0.972-0.972 2.028-2.028-2.028-2.028 0.972-0.972 2.028 2.028 2.028-2.028 0.972 0.972-2.028 2.028 2.028 2.028z"
    }
  }]
};
exports.clearFormatting = clearFormatting;
var table = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 3v11h16v-11h-16zM6 10v-2h4v2h-4zM10 11v2h-4v-2h4zM10 5v2h-4v-2h4zM5 5v2h-4v-2h4zM1 8h4v2h-4v-2zM11 8h4v2h-4v-2zM11 7v-2h4v2h-4zM1 11h4v2h-4v-2zM11 13v-2h4v2h-4z"
    }
  }]
};
exports.table = table;
var table2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1v14h16v-14h-16zM6 10v-3h4v3h-4zM10 11v3h-4v-3h4zM10 3v3h-4v-3h4zM5 3v3h-4v-3h4zM1 7h4v3h-4v-3zM11 7h4v3h-4v-3zM11 6v-3h4v3h-4zM1 11h4v3h-4v-3zM11 14v-3h4v3h-4z"
    }
  }]
};
exports.table2 = table2;
var insertTemplate = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 3h2v1h-2zM9 3h2v1h-2zM14 3v4h-3v-1h2v-2h-1v-1zM5 6h2v1h-2zM8 6h2v1h-2zM3 4v2h1v1h-2v-4h3v1zM6 9h2v1h-2zM9 9h2v1h-2zM14 9v4h-3v-1h2v-2h-1v-1zM5 12h2v1h-2zM8 12h2v1h-2zM3 10v2h1v1h-2v-4h3v1zM15 1h-14v14h14v-14zM16 0v0 16h-16v-16h16z"
    }
  }]
};
exports.insertTemplate = insertTemplate;
var pilcrow = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 0h8v2h-2v14h-2v-14h-2v14h-2v-8c-2.209 0-4-1.791-4-4s1.791-4 4-4z"
    }
  }]
};
exports.pilcrow = pilcrow;
var ltr = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-2.209 0-4 1.791-4 4s1.791 4 4 4v8h2v-14h2v14h2v-14h2v-2h-8zM0 11l4-4-4-4z"
    }
  }]
};
exports.ltr = ltr;
var rtl = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 0c-2.209 0-4 1.791-4 4s1.791 4 4 4v8h2v-14h2v14h2v-14h2v-2h-8zM16 3l-4 4 4 4z"
    }
  }]
};
exports.rtl = rtl;
var section = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.749 16c-0.771 0-1.424-0.225-1.939-0.669-0.519-0.447-0.782-0.969-0.782-1.552 0-0.283 0.103-0.527 0.307-0.726 0.207-0.202 0.465-0.309 0.748-0.309 0.281 0 0.534 0.1 0.732 0.29 0.195 0.187 0.294 0.435 0.294 0.736 0 0.177-0.029 0.372-0.086 0.58-0.056 0.206-0.068 0.312-0.068 0.364 0 0.058 0.014 0.126 0.121 0.199 0.199 0.138 0.439 0.204 0.732 0.204 0.353 0 0.667-0.123 0.962-0.375 0.29-0.249 0.431-0.505 0.431-0.782 0-0.308-0.082-0.575-0.252-0.816-0.287-0.402-0.826-0.874-1.603-1.401-1.248-0.835-2.079-1.559-2.54-2.211-0.358-0.511-0.539-1.061-0.539-1.636 0-0.579 0.19-1.155 0.564-1.713 0.32-0.477 0.794-0.908 1.41-1.283-0.33-0.355-0.577-0.689-0.736-0.995-0.201-0.387-0.303-0.787-0.303-1.189 0-0.747 0.295-1.393 0.878-1.92s1.31-0.795 2.161-0.795c0.783 0 1.441 0.22 1.956 0.654 0.521 0.439 0.785 0.952 0.785 1.524 0 0.292-0.109 0.553-0.324 0.776l-0.004 0.004c-0.125 0.124-0.353 0.271-0.735 0.271-0.299 0-0.561-0.098-0.758-0.283-0.196-0.184-0.296-0.405-0.296-0.656 0-0.108 0.027-0.272 0.084-0.515 0.028-0.115 0.042-0.221 0.042-0.316 0-0.162-0.058-0.285-0.183-0.39-0.129-0.108-0.314-0.161-0.565-0.161-0.389 0-0.708 0.118-0.975 0.361s-0.399 0.533-0.399 0.883c0 0.315 0.071 0.574 0.212 0.771 0.267 0.374 0.731 0.778 1.378 1.201 1.315 0.853 2.233 1.636 2.727 2.325 0.365 0.518 0.549 1.068 0.549 1.637 0 0.572-0.186 1.148-0.552 1.714-0.316 0.487-0.793 0.926-1.42 1.308 0.347 0.367 0.591 0.688 0.743 0.977 0.189 0.359 0.284 0.751 0.284 1.165 0 0.776-0.296 1.435-0.879 1.96s-1.31 0.79-2.161 0.79zM6.975 5.568c-0.753 0.452-1.12 0.972-1.12 1.583 0 0.356 0.102 0.674 0.31 0.973 0.311 0.436 0.926 0.97 1.825 1.583 0.381 0.259 0.724 0.511 1.025 0.751 0.767-0.461 1.14-0.974 1.14-1.565 0-0.322-0.127-0.668-0.378-1.030-0.263-0.378-0.826-0.872-1.674-1.467-0.443-0.306-0.821-0.583-1.128-0.827z"
    }
  }]
};
exports.section = section;
var paragraphLeft = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM0 4h10v2h-10zM0 10h10v2h-10zM0 7h16v2h-16zM0 13h16v2h-16z"
    }
  }]
};
exports.paragraphLeft = paragraphLeft;
var paragraphCenter = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM3 4h10v2h-10zM3 10h10v2h-10zM0 7h16v2h-16zM0 13h16v2h-16z"
    }
  }]
};
exports.paragraphCenter = paragraphCenter;
var paragraphRight = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM6 4h10v2h-10zM6 10h10v2h-10zM0 7h16v2h-16zM0 13h16v2h-16z"
    }
  }]
};
exports.paragraphRight = paragraphRight;
var paragraphJustify = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM0 4h16v2h-16zM0 7h16v2h-16zM0 10h16v2h-16zM0 13h16v2h-16z"
    }
  }]
};
exports.paragraphJustify = paragraphJustify;
var indentIncrease = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM6 4h10v2h-10zM6 7h10v2h-10zM6 10h10v2h-10zM0 13h16v2h-16zM0 11v-6l4 3z"
    }
  }]
};
exports.indentIncrease = indentIncrease;
var indentDecrease = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1h16v2h-16zM6 4h10v2h-10zM6 7h10v2h-10zM6 10h10v2h-10zM0 13h16v2h-16zM4 5v6l-4-3z"
    }
  }]
};
exports.indentDecrease = indentDecrease;
var share = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 10c0 0 0.919-3 6-3v3l6-4-6-4v3c-4 0-6 2.495-6 5zM11 12h-9v-6h1.967c0.158-0.186 0.327-0.365 0.508-0.534 0.687-0.644 1.509-1.135 2.439-1.466h-6.914v10h13v-4.197l-2 1.333v0.864z"
    }
  }]
};
exports.share = share;
var newTab = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"
    }
  }]
};
exports.newTab = newTab;
var embed = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"
    }
  }]
};
exports.embed = embed;
var embed2 = {
  "viewBox": "0 0 20 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z"
    }
  }]
};
exports.embed2 = embed2;
var terminal = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 1v14h16v-14h-16zM15 14h-14v-12h14v12zM14 3h-12v10h12v-10zM7 8h-1v1h-1v1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v1h1v1h1v1zM11 10h-3v-1h3v1z"
    }
  }]
};
exports.terminal = terminal;
var share2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.5 11c-0.706 0-1.342 0.293-1.797 0.763l-6.734-3.367c0.021-0.129 0.032-0.261 0.032-0.396s-0.011-0.267-0.032-0.396l6.734-3.367c0.455 0.47 1.091 0.763 1.797 0.763 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5c0 0.135 0.011 0.267 0.031 0.396l-6.734 3.367c-0.455-0.47-1.091-0.763-1.797-0.763-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c0.706 0 1.343-0.293 1.797-0.763l6.734 3.367c-0.021 0.129-0.031 0.261-0.031 0.396 0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"
    }
  }]
};
exports.share2 = share2;
var mail = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.467 1.2 2.667 2.667 2.667h10.666c1.468 0 2.667-1.2 2.667-2.667v-10.666c0-1.467-1.199-2.667-2.667-2.667zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"
    }
  }]
};
exports.mail = mail;
var mail2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM13.333 2c0.125 0 0.243 0.036 0.344 0.099l-5.678 4.694-5.677-4.694c0.101-0.063 0.219-0.099 0.344-0.099h10.666zM2.667 14c-0.030 0-0.060-0.002-0.089-0.006l3.525-4.89-0.457-0.457-3.646 3.646v-9.549l6 7.256 6-7.256v9.549l-3.646-3.646-0.457 0.457 3.525 4.89c-0.029 0.004-0.059 0.006-0.088 0.006h-10.666z"
    }
  }]
};
exports.mail2 = mail2;
var mail3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.333 0h-10.666c-1.467 0-2.667 1.2-2.667 2.667v10.666c0 1.468 1.2 2.667 2.667 2.667h10.666c1.467 0 2.667-1.199 2.667-2.667v-10.666c0-1.467-1.2-2.667-2.667-2.667zM2.854 13.854l-1.207-1.207 4-4 0.457 0.457-3.25 4.75zM2.396 3.104l0.457-0.457 5.146 4.146 5.146-4.146 0.457 0.457-5.604 6.604-5.604-6.604zM13.146 13.854l-3.25-4.75 0.457-0.457 4 4-1.207 1.207z"
    }
  }]
};
exports.mail3 = mail3;
var mail4 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"
    }
  }]
};
exports.mail4 = mail4;
var amazon = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-0.163-0.147-0.019-0.35 0.178-0.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-0.403 6.041-1.238 0.294-0.125 0.544 0.197 0.253 0.409z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.191 13c-0.225-0.287-1.481-0.137-2.047-0.069-0.172 0.019-0.197-0.128-0.044-0.238 1.003-0.703 2.647-0.5 2.838-0.266 0.194 0.238-0.050 1.884-0.991 2.672-0.144 0.122-0.281 0.056-0.219-0.103 0.216-0.528 0.688-1.709 0.463-1.997z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.053 11.838l0.003 0.003c0.387-0.341 1.084-0.95 1.478-1.278 0.156-0.125 0.128-0.334 0.006-0.509-0.353-0.488-0.728-0.884-0.728-1.784v-3c0-1.272 0.088-2.438-0.847-3.313-0.738-0.706-1.963-0.956-2.9-0.956-1.831 0-3.875 0.684-4.303 2.947-0.047 0.241 0.131 0.369 0.287 0.403l1.866 0.203c0.175-0.009 0.3-0.181 0.334-0.356 0.159-0.778 0.813-1.156 1.547-1.156 0.397 0 0.847 0.144 1.081 0.5 0.269 0.397 0.234 0.938 0.234 1.397v0.25c-1.116 0.125-2.575 0.206-3.619 0.666-1.206 0.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-0.322 3.172-1.403 0.35 0.506 0.463 0.753 1.103 1.284 0.147 0.078 0.328 0.072 0.456-0.044zM9.113 7.144c0 0.75 0.019 1.375-0.359 2.041-0.306 0.544-0.791 0.875-1.331 0.875-0.737 0-1.169-0.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v0.416z"
    }
  }]
};
exports.amazon = amazon;
var google = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.159 6.856v2.744h4.537c-0.184 1.178-1.372 3.45-4.537 3.45-2.731 0-4.959-2.262-4.959-5.050s2.228-5.050 4.959-5.050c1.553 0 2.594 0.663 3.188 1.234l2.172-2.091c-1.394-1.306-3.2-2.094-5.359-2.094-4.422 0-8 3.578-8 8s3.578 8 8 8c4.616 0 7.681-3.247 7.681-7.816 0-0.525-0.056-0.925-0.125-1.325l-7.556-0.003z"
    }
  }]
};
exports.google = google;
var google2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM8.119 14c-3.316 0-6-2.684-6-6s2.684-6 6-6c1.619 0 2.975 0.591 4.019 1.569l-1.628 1.569c-0.447-0.428-1.225-0.925-2.391-0.925-2.050 0-3.719 1.697-3.719 3.787s1.672 3.787 3.719 3.787c2.375 0 3.266-1.706 3.403-2.588h-3.403v-2.056h5.666c0.050 0.3 0.094 0.6 0.094 0.994 0.003 3.428-2.294 5.863-5.759 5.863z"
    }
  }]
};
exports.google2 = google2;
var google3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zM8.119 14c-3.316 0-6-2.684-6-6s2.684-6 6-6c1.619 0 2.975 0.591 4.019 1.569l-1.628 1.569c-0.447-0.428-1.225-0.925-2.391-0.925-2.050 0-3.719 1.697-3.719 3.787s1.672 3.787 3.719 3.787c2.375 0 3.266-1.706 3.403-2.588h-3.403v-2.056h5.666c0.050 0.3 0.094 0.6 0.094 0.994 0.003 3.428-2.294 5.863-5.759 5.863z"
    }
  }]
};
exports.google3 = google3;
var googlePlus = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.091 7.147v1.747h2.888c-0.116 0.75-0.872 2.197-2.888 2.197-1.737 0-3.156-1.441-3.156-3.216s1.419-3.216 3.156-3.216c0.991 0 1.65 0.422 2.028 0.784l1.381-1.331c-0.888-0.828-2.037-1.331-3.409-1.331-2.816 0.003-5.091 2.278-5.091 5.094s2.275 5.091 5.091 5.091c2.937 0 4.888-2.066 4.888-4.975 0-0.334-0.037-0.591-0.081-0.844h-4.806z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 7h-1.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5z"
    }
  }]
};
exports.googlePlus = googlePlus;
var googlePlus2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 12c-2.212 0-4-1.787-4-4s1.788-4 4-4c1.081 0 1.984 0.394 2.681 1.047l-1.088 1.044c-0.297-0.284-0.816-0.616-1.594-0.616-1.366 0-2.481 1.131-2.481 2.525s1.116 2.525 2.481 2.525c1.584 0 2.178-1.137 2.269-1.725h-2.269v-1.372h3.778c0.034 0.2 0.063 0.4 0.063 0.663 0 2.287-1.531 3.909-3.841 3.909zM14 8h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z"
    }
  }]
};
exports.googlePlus2 = googlePlus2;
var googlePlus3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zM6 12c-2.212 0-4-1.787-4-4s1.788-4 4-4c1.081 0 1.984 0.394 2.681 1.047l-1.088 1.044c-0.297-0.284-0.816-0.616-1.594-0.616-1.366 0-2.481 1.131-2.481 2.525s1.116 2.525 2.481 2.525c1.584 0 2.178-1.137 2.269-1.725h-2.269v-1.372h3.778c0.034 0.2 0.063 0.4 0.063 0.663 0 2.287-1.531 3.909-3.841 3.909zM13 8v1h-1v-1h-1v-1h1v-1h1v1h1v1h-1z"
    }
  }]
};
exports.googlePlus3 = googlePlus3;
var hangouts = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.997 0c-3.816 0-6.909 3.094-6.909 6.909 0 3.616 3.294 6.547 6.909 6.547v2.544c4.197-2.128 6.916-5.556 6.916-9.091 0-3.816-3.1-6.909-6.916-6.909zM7 8c0 0.828-0.447 1.5-1 1.5v-1.5h-2v-3h3v3zM12 8c0 0.828-0.447 1.5-1 1.5v-1.5h-2v-3h3v3z"
    }
  }]
};
exports.hangouts = hangouts;
var googleDrive = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.844 10l-2.884 5h9.072l2.884-5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.506 9l-4.619-8h-5.775l4.619 8z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.534 2l-4.534 7.856 2.888 5 4.534-7.856z"
    }
  }]
};
exports.googleDrive = googleDrive;
var facebook = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"
    }
  }]
};
exports.facebook = facebook;
var facebook2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"
    }
  }]
};
exports.facebook2 = facebook2;
var instagram = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"
    }
  }]
};
exports.instagram = instagram;
var whatsapp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"
    }
  }]
};
exports.whatsapp = whatsapp;
var spotify = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.559-8-8-8zM11.681 11.559c-0.159 0.241-0.441 0.319-0.681 0.159-1.881-1.159-4.241-1.4-7.041-0.759-0.281 0.081-0.519-0.119-0.6-0.359-0.081-0.281 0.119-0.519 0.359-0.6 3.041-0.681 5.681-0.4 7.759 0.881 0.281 0.119 0.322 0.438 0.203 0.678zM12.641 9.359c-0.2 0.281-0.559 0.4-0.841 0.2-2.159-1.319-5.441-1.719-7.959-0.919-0.319 0.081-0.681-0.081-0.759-0.4-0.081-0.319 0.081-0.681 0.4-0.759 2.919-0.881 6.519-0.441 9 1.081 0.238 0.119 0.359 0.519 0.159 0.797zM12.719 7.119c-2.559-1.519-6.841-1.681-9.281-0.919-0.4 0.119-0.8-0.119-0.919-0.481-0.119-0.4 0.119-0.8 0.481-0.919 2.841-0.841 7.519-0.681 10.481 1.081 0.359 0.2 0.481 0.681 0.281 1.041-0.203 0.278-0.681 0.397-1.044 0.197z"
    }
  }]
};
exports.spotify = spotify;
var telegram = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zM11.931 5.484l-1.313 6.184c-0.091 0.441-0.356 0.544-0.725 0.341l-2-1.478-0.959 0.934c-0.112 0.109-0.2 0.2-0.4 0.2-0.259 0-0.216-0.097-0.303-0.344l-0.681-2.237-1.978-0.616c-0.428-0.131-0.431-0.425 0.097-0.634l7.706-2.975c0.35-0.159 0.691 0.084 0.556 0.625z"
    }
  }]
};
exports.telegram = telegram;
var twitter = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"
    }
  }]
};
exports.twitter = twitter;
var vine = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.012 7.953c-0.412 0.094-0.809 0.137-1.169 0.137-2.019 0-3.572-1.409-3.572-3.862 0-1.203 0.466-1.825 1.122-1.825 0.625 0 1.041 0.559 1.041 1.697 0 0.647-0.172 1.356-0.3 1.775 0 0 0.622 1.084 2.322 0.753 0.363-0.803 0.556-1.841 0.556-2.75 0-2.45-1.25-3.878-3.541-3.878-2.356 0-3.734 1.809-3.734 4.197 0 2.366 1.106 4.394 2.928 5.319-0.766 1.534-1.741 2.884-2.759 3.903-1.844-2.231-3.513-5.206-4.197-11.016h-2.722c1.259 9.675 5.006 12.756 6 13.347 0.559 0.337 1.044 0.322 1.556 0.031 0.806-0.456 3.222-2.875 4.563-5.703 0.563 0 1.238-0.066 1.909-0.219v-1.906z"
    }
  }]
};
exports.vine = vine;
var vk = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM12.959 11.2l-1.463 0.022c0 0-0.316 0.063-0.728-0.222-0.547-0.375-1.063-1.353-1.466-1.225-0.406 0.128-0.394 1.006-0.394 1.006s0.003 0.188-0.091 0.287c-0.1 0.109-0.3 0.131-0.3 0.131h-0.653c0 0-1.444 0.088-2.716-1.238-1.388-1.444-2.612-4.309-2.612-4.309s-0.072-0.188 0.006-0.278c0.087-0.103 0.322-0.109 0.322-0.109l1.566-0.009c0 0 0.147 0.025 0.253 0.103 0.088 0.063 0.134 0.184 0.134 0.184s0.253 0.641 0.588 1.219c0.653 1.128 0.959 1.375 1.181 1.256 0.322-0.175 0.225-1.597 0.225-1.597s0.006-0.516-0.162-0.744c-0.131-0.178-0.378-0.231-0.484-0.244-0.088-0.013 0.056-0.216 0.244-0.309 0.281-0.138 0.778-0.147 1.366-0.141 0.456 0.003 0.591 0.034 0.769 0.075 0.541 0.131 0.356 0.634 0.356 1.841 0 0.388-0.069 0.931 0.209 1.109 0.119 0.078 0.412 0.012 1.147-1.234 0.347-0.591 0.609-1.284 0.609-1.284s0.056-0.125 0.144-0.178c0.091-0.053 0.213-0.037 0.213-0.037l1.647-0.009c0 0 0.494-0.059 0.575 0.166 0.084 0.234-0.184 0.781-0.856 1.678-1.103 1.472-1.228 1.334-0.309 2.184 0.875 0.813 1.056 1.209 1.088 1.259 0.356 0.6-0.406 0.647-0.406 0.647z"
    }
  }]
};
exports.vk = vk;
var renren = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.644 0.166c-3.769 0.634-6.644 3.913-6.644 7.862 0 1.963 0.713 3.759 1.887 5.15 2.791-1.35 4.744-4.406 4.756-7.966v-5.047z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.356 0.166c3.769 0.634 6.644 3.913 6.644 7.862 0 1.963-0.713 3.759-1.887 5.15-2.791-1.35-4.744-4.406-4.756-7.966v-5.047z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.972 10.041c-0.497 2.056-1.981 3.813-3.828 4.981 1.138 0.622 2.441 0.978 3.828 0.978s2.691-0.356 3.828-0.978c-1.847-1.169-3.331-2.925-3.828-4.981z"
    }
  }]
};
exports.renren = renren;
var sinaWeibo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.722 14.031c-2.65 0.262-4.938-0.938-5.109-2.675-0.172-1.741 1.837-3.359 4.484-3.622 2.65-0.263 4.938 0.938 5.106 2.675 0.175 1.741-1.834 3.362-4.481 3.622zM12.019 8.259c-0.225-0.069-0.381-0.113-0.262-0.409 0.256-0.644 0.281-1.197 0.003-1.594-0.519-0.741-1.941-0.703-3.569-0.019 0 0-0.513 0.222-0.381-0.181 0.25-0.806 0.213-1.478-0.178-1.869-0.884-0.884-3.234 0.034-5.25 2.050-1.506 1.503-2.381 3.106-2.381 4.491 0 2.644 3.394 4.253 6.713 4.253 4.35 0 7.247-2.528 7.247-4.534 0-1.216-1.022-1.903-1.941-2.188z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.909 3.416c-1.050-1.166-2.6-1.609-4.031-1.306v0c-0.331 0.072-0.541 0.397-0.469 0.725 0.072 0.331 0.394 0.541 0.725 0.469 1.019-0.216 2.119 0.1 2.866 0.928s0.95 1.956 0.628 2.944v0c-0.103 0.322 0.072 0.666 0.394 0.772 0.322 0.103 0.666-0.072 0.772-0.394v-0.003c0.45-1.381 0.166-2.969-0.884-4.134z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.294 4.875c-0.512-0.569-1.269-0.784-1.963-0.634-0.284 0.059-0.466 0.344-0.406 0.628 0.063 0.284 0.344 0.466 0.625 0.403v0c0.341-0.072 0.709 0.034 0.959 0.309 0.25 0.278 0.319 0.656 0.209 0.987v0c-0.088 0.275 0.063 0.575 0.341 0.666 0.278 0.088 0.575-0.063 0.666-0.341 0.219-0.678 0.081-1.453-0.431-2.019z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.869 10.884c-0.094 0.159-0.297 0.234-0.456 0.169-0.159-0.063-0.206-0.244-0.116-0.397 0.094-0.153 0.291-0.228 0.447-0.169 0.156 0.056 0.213 0.234 0.125 0.397zM6.022 11.966c-0.256 0.409-0.806 0.588-1.219 0.4-0.406-0.184-0.528-0.659-0.272-1.059 0.253-0.397 0.784-0.575 1.194-0.403 0.416 0.178 0.55 0.65 0.297 1.063zM6.984 9.072c-1.259-0.328-2.684 0.3-3.231 1.409-0.559 1.131-0.019 2.391 1.253 2.803 1.319 0.425 2.875-0.228 3.416-1.447 0.534-1.197-0.131-2.425-1.438-2.766z"
    }
  }]
};
exports.sinaWeibo = sinaWeibo;
var rss = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.13 11.733c-1.175 0-2.13 0.958-2.13 2.126 0 1.174 0.955 2.122 2.13 2.122 1.179 0 2.133-0.948 2.133-2.122-0-1.168-0.954-2.126-2.133-2.126zM0.002 5.436v3.067c1.997 0 3.874 0.781 5.288 2.196 1.412 1.411 2.192 3.297 2.192 5.302h3.080c-0-5.825-4.739-10.564-10.56-10.564zM0.006 0v3.068c7.122 0 12.918 5.802 12.918 12.932h3.076c0-8.82-7.176-16-15.994-16z"
    }
  }]
};
exports.rss = rss;
var rss2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM4.359 12.988c-0.75 0-1.359-0.603-1.359-1.353 0-0.744 0.609-1.356 1.359-1.356 0.753 0 1.359 0.613 1.359 1.356 0 0.75-0.609 1.353-1.359 1.353zM7.772 13c0-1.278-0.497-2.481-1.397-3.381-0.903-0.903-2.1-1.4-3.375-1.4v-1.956c3.713 0 6.738 3.022 6.738 6.737h-1.966zM11.244 13c0-4.547-3.697-8.25-8.241-8.25v-1.956c5.625 0 10.203 4.581 10.203 10.206h-1.963z"
    }
  }]
};
exports.rss2 = rss2;
var youtube = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"
    }
  }]
};
exports.youtube = youtube;
var youtube2 = {
  "viewBox": "0 0 40 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.375 2.647c0.003-0.014 0.005-0.023 0.006-0.028l0.016-0.118-0.74-0.004c-0.668-0.004-0.873 0-0.891 0.017-0.009 0.008-0.24 0.885-0.651 2.473-0.196 0.758-0.361 1.363-0.367 1.345s-0.24-0.883-0.522-1.922c-0.281-1.039-0.517-1.894-0.524-1.901-0.010-0.010-0.906-0.014-1.632-0.008-0.105 0.001-0.164-0.205 0.938 3.299 0.152 0.485 0.381 1.172 0.507 1.526 0.146 0.408 0.25 0.724 0.321 0.987 0.126 0.501 0.13 0.815 0.103 1.182-0.032 0.423-0.036 3.413-0.005 3.463 0.024 0.038 1.425 0.056 1.558 0.020 0.021-0.006 0.035-0.026 0.045-0.139 0.033-0.097 0.036-0.484 0.036-2.090v-2.051l0.090-0.283c0.059-0.185 0.206-0.672 0.328-1.082s0.269-0.9 0.327-1.090c0.529-1.724 1.033-3.419 1.047-3.516l0.011-0.079z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.221 5.135l-0 0.107-0.017 0-0.009 2.953-0.009 2.863-0.229 0.233c-0.257 0.261-0.462 0.361-0.648 0.314-0.203-0.051-0.197 0.028-0.214-3.356l-0.016-3.115h-1.474v0.107h-0.017v3.38c0 3.621-0 3.619 0.184 3.982 0.146 0.29 0.36 0.431 0.725 0.479h0c0.481 0.064 1-0.154 1.481-0.622l0.209-0.203v0.351c0 0.303 0.009 0.353 0.064 0.368 0.090 0.025 1.206 0.027 1.326 0.002l0.1-0.021v-0.104l0.017-0.003v-7.736l-1.472 0.020z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.483 6.661c-0.14-0.599-0.401-1.002-0.832-1.28-0.676-0.437-1.449-0.484-2.165-0.13-0.522 0.258-0.859 0.686-1.032 1.314-0.021 0.075-0.036 0.138-0.047 0.231-0.044 0.222-0.049 0.552-0.061 2.093-0.018 2.374 0.010 2.656 0.307 3.195 0.292 0.529 0.897 0.917 1.556 0.997 0.198 0.024 0.6-0.013 0.832-0.078 0.525-0.146 1.029-0.561 1.252-1.032 0.096-0.204 0.154-0.345 0.189-0.604 0.065-0.353 0.070-0.925 0.070-2.381-0-1.857-0.006-2.060-0.068-2.326zM7.802 11.5c-0.124 0.094-0.34 0.135-0.515 0.098-0.135-0.029-0.318-0.241-0.374-0.434-0.070-0.241-0.075-3.594-0.015-4.251 0.1-0.329 0.378-0.501 0.682-0.419 0.237 0.064 0.358 0.212 0.427 0.523 0.051 0.231 0.057 0.518 0.046 2.207-0.007 1.12-0.011 1.668-0.048 1.962-0.037 0.185-0.099 0.235-0.203 0.315z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M35.944 8.346h0.712l-0.011-0.645c-0.011-0.592-0.020-0.659-0.099-0.82-0.125-0.253-0.309-0.366-0.601-0.366-0.351 0-0.573 0.17-0.678 0.518-0.045 0.148-0.092 1.167-0.058 1.255 0.019 0.049 0.121 0.058 0.735 0.058z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M31.184 6.879c-0.095-0.191-0.272-0.286-0.477-0.278-0.16 0.006-0.337 0.073-0.508 0.203l-0.127 0.097v4.634l0.127 0.097c0.288 0.22 0.604 0.266 0.822 0.12 0.086-0.058 0.142-0.137 0.186-0.263 0.057-0.164 0.062-0.375 0.055-2.325-0.008-2.032-0.012-2.152-0.078-2.285z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M40.014 4.791c-0.142-1.701-0.255-2.253-0.605-2.962-0.465-0.939-1.136-1.434-2.092-1.543-0.739-0.084-3.521-0.203-6.094-0.26-4.456-0.099-11.782 0.092-12.718 0.331-0.432 0.111-0.757 0.299-1.094 0.634-0.591 0.588-0.944 1.432-1.085 2.6-0.323 2.666-0.33 5.886-0.019 8.649 0.134 1.188 0.41 1.96 0.928 2.596 0.323 0.397 0.881 0.734 1.379 0.835 0.35 0.071 2.1 0.169 4.65 0.26 0.38 0.014 1.385 0.037 2.235 0.052 1.77 0.031 5.025 0.013 6.886-0.039 1.252-0.035 3.534-0.128 3.961-0.161 0.12-0.009 0.398-0.027 0.618-0.039 0.739-0.042 1.209-0.196 1.65-0.543 0.571-0.449 1.013-1.278 1.2-2.251 0.177-0.92 0.295-2.559 0.319-4.42 0.020-1.555-0.007-2.393-0.119-3.741zM22.27 4.175l-0.828 0.010-0.036 8.83-0.718 0.009c-0.555 0.008-0.724-0.001-0.737-0.036-0.010-0.025-0.021-2.016-0.026-4.424l-0.009-4.379-1.617-0.020v-1.38l4.779 0.019 0.020 1.36-0.828 0.010zM27.347 9.236v3.797h-1.308v-0.4c0-0.301-0.011-0.4-0.047-0.4-0.026 0-0.144 0.099-0.263 0.22-0.259 0.263-0.565 0.474-0.827 0.572-0.542 0.203-1.056 0.084-1.275-0.293-0.201-0.345-0.204-0.423-0.204-4.005v-3.29h1.307l0.010 3.098c0.010 3.044 0.011 3.1 0.084 3.224 0.097 0.164 0.244 0.209 0.478 0.144 0.138-0.038 0.232-0.105 0.455-0.327l0.282-0.28v-5.859h1.308v3.797zM32.449 12.491c-0.115 0.257-0.372 0.508-0.583 0.57-0.549 0.162-0.99 0.030-1.499-0.449-0.158-0.149-0.305-0.269-0.327-0.269-0.027 0-0.041 0.116-0.041 0.345v0.345h-1.308v-10.248h1.308v1.672c0 0.919 0.012 1.672 0.027 1.672s0.153-0.122 0.307-0.27c0.354-0.341 0.649-0.491 1.024-0.519 0.669-0.051 1.068 0.294 1.25 1.080 0.057 0.245 0.062 0.525 0.062 2.798-0 2.768-0 2.78-0.221 3.273zM37.984 10.971c-0.012 0.285-0.046 0.612-0.077 0.727-0.182 0.674-0.666 1.152-1.366 1.348-0.942 0.264-1.98-0.168-2.394-0.997-0.232-0.465-0.241-0.558-0.241-2.831 0-1.853 0.007-2.081 0.066-2.334 0.168-0.715 0.584-1.178 1.289-1.435 0.204-0.074 0.417-0.113 0.63-0.117 0.761-0.016 1.515 0.393 1.832 1.059 0.213 0.449 0.24 0.642 0.261 1.908l0.019 1.136-2.789 0.019-0.010 0.763c-0.015 1.077 0.058 1.408 0.349 1.603 0.244 0.165 0.62 0.152 0.824-0.027 0.192-0.168 0.246-0.349 0.265-0.877l0.017-0.463h1.347l-0.022 0.518z"
    }
  }]
};
exports.youtube2 = youtube2;
var twitch = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.5 0l-1.5 2.5v11.5h4v2h2l2-2h2.5l4.5-4.5v-9.5h-13.5zM13 8.5l-2.5 2.5h-2.5l-2 2v-2h-3v-9h10v6.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.5 4h1.5v4h-1.5v-4z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.5 4h1.5v4h-1.5v-4z"
    }
  }]
};
exports.twitch = twitch;
var vimeo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.994 4.281c-0.072 1.556-1.159 3.691-3.263 6.397-2.175 2.825-4.016 4.241-5.522 4.241-0.931 0-1.722-0.859-2.366-2.581-0.431-1.578-0.859-3.156-1.291-4.734-0.478-1.722-0.991-2.581-1.541-2.581-0.119 0-0.538 0.253-1.256 0.753l-0.753-0.969c0.791-0.694 1.569-1.388 2.334-2.081 1.053-0.909 1.844-1.387 2.372-1.438 1.244-0.119 2.013 0.731 2.3 2.553 0.309 1.966 0.525 3.188 0.647 3.666 0.359 1.631 0.753 2.447 1.184 2.447 0.334 0 0.838-0.528 1.509-1.588 0.669-1.056 1.028-1.862 1.078-2.416 0.097-0.912-0.262-1.372-1.078-1.372-0.384 0-0.778 0.088-1.184 0.263 0.787-2.575 2.287-3.825 4.506-3.753 1.641 0.044 2.416 1.109 2.322 3.194z"
    }
  }]
};
exports.vimeo = vimeo;
var vimeo2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13.463 5.313c-0.050 1.125-0.838 2.666-2.359 4.622-1.572 2.044-2.903 3.066-3.991 3.066-0.675 0-1.244-0.622-1.709-1.866-0.313-1.141-0.622-2.281-0.934-3.422-0.344-1.244-0.716-1.866-1.112-1.866-0.087 0-0.391 0.181-0.906 0.544l-0.544-0.7c0.572-0.5 1.134-1.003 1.687-1.503 0.763-0.656 1.331-1.003 1.712-1.038 0.9-0.087 1.453 0.528 1.662 1.844 0.225 1.422 0.381 2.303 0.469 2.65 0.259 1.178 0.544 1.766 0.856 1.766 0.241 0 0.606-0.381 1.091-1.147s0.744-1.347 0.778-1.747c0.069-0.659-0.191-0.991-0.778-0.991-0.278 0-0.563 0.063-0.856 0.191 0.569-1.859 1.653-2.766 3.256-2.712 1.188 0.034 1.747 0.803 1.678 2.309z"
    }
  }]
};
exports.vimeo2 = vimeo2;
var lanyrd = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM12.85 12.012l-5.444 1.781c-1.244 0.406-1.369 0.341-1.931-1.4l-1.375-4.259c-0.328-1.009-1.328-3.728-1.497-4.25-0.313-0.969-0.313-1.022 1.516-1.616 1.431-0.469 1.491-0.453 2.009 1.163 0.419 1.3 0.688 2.35 1.119 3.678l1.172 3.625 3.744-1.225c0.738-0.244 0.984-0.231 1.194 0.678l0.15 0.688c0.175 0.797-0.228 1-0.656 1.137z"
    }
  }]
};
exports.lanyrd = lanyrd;
var flickr = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5zM9 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5z"
    }
  }]
};
exports.flickr = flickr;
var flickr2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 6.5c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2zM12.5 5v0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5c0-1.933 1.567-3.5 3.5-3.5zM0 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5z"
    }
  }]
};
exports.flickr2 = flickr2;
var flickr3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM4.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM11.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"
    }
  }]
};
exports.flickr3 = flickr3;
var flickr4 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.606-8 8.055s3.582 8.055 8 8.055 8-3.606 8-8.055-3.582-8.055-8-8.055zM4.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5zM11.5 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5c0 1.381-1.119 2.5-2.5 2.5z"
    }
  }]
};
exports.flickr4 = flickr4;
var dribbble = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 16c-4.412 0-8-3.588-8-8s3.587-8 8-8c4.412 0 8 3.587 8 8s-3.588 8-8 8v0zM14.747 9.094c-0.234-0.075-2.116-0.634-4.256-0.291 0.894 2.456 1.256 4.456 1.328 4.872 1.531-1.037 2.625-2.678 2.928-4.581v0zM10.669 14.3c-0.103-0.6-0.497-2.688-1.456-5.181-0.016 0.006-0.031 0.009-0.044 0.016-3.856 1.344-5.241 4.016-5.362 4.266 1.159 0.903 2.616 1.444 4.194 1.444 0.947 0 1.85-0.194 2.669-0.544v0zM2.922 12.578c0.156-0.266 2.031-3.369 5.553-4.509 0.088-0.028 0.178-0.056 0.269-0.081-0.172-0.388-0.359-0.778-0.553-1.159-3.409 1.022-6.722 0.978-7.022 0.975-0.003 0.069-0.003 0.138-0.003 0.209 0 1.753 0.666 3.356 1.756 4.566v0zM1.313 6.609c0.306 0.003 3.122 0.016 6.319-0.831-1.131-2.013-2.353-3.706-2.534-3.953-1.913 0.903-3.344 2.666-3.784 4.784v0zM6.4 1.366c0.188 0.253 1.431 1.944 2.55 4 2.431-0.909 3.459-2.294 3.581-2.469-1.206-1.072-2.794-1.722-4.531-1.722-0.55 0.003-1.088 0.069-1.6 0.191v0zM13.291 3.691c-0.144 0.194-1.291 1.663-3.816 2.694 0.159 0.325 0.313 0.656 0.453 0.991 0.050 0.119 0.1 0.234 0.147 0.353 2.275-0.284 4.534 0.172 4.759 0.219-0.016-1.612-0.594-3.094-1.544-4.256v0z"
    }
  }]
};
exports.dribbble = dribbble;
var behance = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.641 3.206c0.472 0 0.897 0.041 1.284 0.125 0.388 0.081 0.716 0.219 0.994 0.406 0.275 0.188 0.487 0.438 0.644 0.75 0.15 0.309 0.225 0.697 0.225 1.156 0 0.497-0.112 0.909-0.338 1.241-0.228 0.331-0.559 0.6-1.003 0.813 0.606 0.175 1.053 0.481 1.353 0.916 0.3 0.438 0.444 0.963 0.444 1.581 0 0.5-0.097 0.928-0.287 1.291-0.194 0.366-0.456 0.662-0.778 0.891-0.325 0.231-0.7 0.4-1.119 0.509-0.416 0.109-0.844 0.166-1.287 0.166h-4.772v-9.844h4.641zM4.359 7.181c0.384 0 0.703-0.091 0.953-0.275 0.25-0.181 0.369-0.481 0.369-0.894 0-0.228-0.041-0.419-0.122-0.566-0.084-0.147-0.194-0.263-0.334-0.344-0.138-0.084-0.294-0.141-0.478-0.172-0.178-0.034-0.366-0.050-0.556-0.050h-2.025v2.3h2.194zM4.478 11.372c0.213 0 0.416-0.019 0.606-0.063 0.194-0.044 0.366-0.109 0.509-0.209 0.144-0.097 0.266-0.225 0.353-0.394 0.088-0.166 0.128-0.378 0.128-0.637 0-0.506-0.144-0.869-0.428-1.088-0.284-0.216-0.662-0.322-1.131-0.322h-2.35v2.709h2.313z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.331 11.338c0.294 0.287 0.716 0.431 1.266 0.431 0.394 0 0.738-0.1 1.022-0.3s0.456-0.412 0.522-0.631h1.725c-0.278 0.859-0.697 1.469-1.272 1.838-0.566 0.369-1.259 0.556-2.063 0.556-0.563 0-1.066-0.091-1.519-0.269-0.453-0.181-0.831-0.434-1.15-0.766-0.309-0.331-0.553-0.725-0.725-1.188-0.169-0.459-0.256-0.969-0.256-1.519 0-0.534 0.088-1.031 0.262-1.491 0.178-0.463 0.422-0.859 0.747-1.194s0.706-0.6 1.156-0.794c0.447-0.194 0.941-0.291 1.488-0.291 0.603 0 1.131 0.116 1.584 0.353 0.45 0.234 0.822 0.55 1.113 0.944s0.497 0.847 0.625 1.353c0.128 0.506 0.172 1.034 0.137 1.588h-5.147c0 0.559 0.188 1.094 0.484 1.378zM13.578 7.594c-0.231-0.256-0.628-0.397-1.106-0.397-0.313 0-0.572 0.053-0.778 0.159-0.203 0.106-0.369 0.237-0.497 0.394-0.125 0.156-0.213 0.325-0.262 0.503-0.050 0.172-0.081 0.331-0.091 0.469h3.188c-0.047-0.5-0.219-0.869-0.453-1.128z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.444 4h3.991v0.972h-3.991v-0.972z"
    }
  }]
};
exports.behance = behance;
var behance2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.316 7.009c0.203-0.147 0.3-0.391 0.3-0.728 0-0.188-0.031-0.341-0.097-0.459-0.069-0.119-0.156-0.213-0.272-0.278-0.112-0.069-0.241-0.116-0.388-0.141-0.144-0.028-0.297-0.041-0.453-0.041h-1.647v1.869h1.781c0.313 0.003 0.572-0.072 0.775-0.222z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.594 8.697c-0.231-0.175-0.537-0.262-0.919-0.262h-1.916v2.203h1.878c0.175 0 0.338-0.016 0.494-0.050s0.297-0.088 0.416-0.169c0.119-0.078 0.216-0.184 0.287-0.319s0.106-0.309 0.106-0.519c0-0.412-0.116-0.706-0.347-0.884z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM10.488 4.209h3.241v0.791h-3.241v-0.791zM8.463 10.725c-0.156 0.297-0.369 0.537-0.631 0.725-0.266 0.188-0.569 0.325-0.909 0.416-0.338 0.091-0.688 0.134-1.044 0.134h-3.878v-7.997h3.769c0.381 0 0.728 0.034 1.044 0.1 0.313 0.066 0.581 0.178 0.806 0.331 0.222 0.153 0.397 0.356 0.522 0.609 0.122 0.25 0.184 0.566 0.184 0.938 0 0.403-0.091 0.737-0.275 1.006s-0.453 0.487-0.816 0.659c0.494 0.141 0.856 0.391 1.097 0.744 0.244 0.356 0.363 0.784 0.363 1.284 0.003 0.409-0.075 0.759-0.231 1.050zM14.991 9.488h-4.178c0 0.456 0.156 0.891 0.394 1.125 0.238 0.231 0.581 0.35 1.028 0.35 0.322 0 0.597-0.081 0.831-0.244 0.231-0.162 0.372-0.334 0.425-0.512h1.4c-0.225 0.697-0.566 1.194-1.031 1.494-0.459 0.3-1.022 0.45-1.675 0.45-0.456 0-0.866-0.075-1.234-0.219-0.369-0.147-0.675-0.353-0.934-0.622-0.253-0.269-0.447-0.591-0.588-0.966-0.137-0.372-0.209-0.787-0.209-1.234 0-0.434 0.072-0.838 0.213-1.213 0.144-0.375 0.344-0.7 0.606-0.969 0.262-0.272 0.575-0.487 0.938-0.647 0.363-0.156 0.762-0.234 1.206-0.234 0.491 0 0.919 0.094 1.287 0.287 0.366 0.191 0.666 0.447 0.903 0.769s0.403 0.688 0.509 1.1c0.103 0.406 0.137 0.834 0.109 1.284z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.134 7.247c-0.253 0-0.466 0.044-0.631 0.131s-0.3 0.194-0.403 0.319c-0.103 0.128-0.172 0.263-0.213 0.409-0.041 0.141-0.066 0.269-0.072 0.381h2.588c-0.037-0.406-0.178-0.706-0.366-0.916-0.194-0.213-0.512-0.325-0.903-0.325z"
    }
  }]
};
exports.behance2 = behance2;
var deviantart = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.953 2.909v-2.909h-2.909l-0.291 0.294-1.375 2.616-0.431 0.291h-4.9v3.994h2.694l0.241 0.291-2.934 5.606v2.909h2.909l0.291-0.294 1.375-2.616 0.431-0.291h4.9v-3.994h-2.694l-0.241-0.294z"
    }
  }]
};
exports.deviantart = deviantart;
var fiveHundredPX = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M3.953 10.512c0.003 0.009 0.088 0.238 0.134 0.353 0.263 0.622 0.641 1.184 1.122 1.666s1.041 0.859 1.666 1.122c0.647 0.272 1.331 0.412 2.037 0.412s1.394-0.137 2.037-0.412c0.625-0.262 1.184-0.641 1.666-1.122s0.859-1.041 1.122-1.666c0.272-0.647 0.412-1.331 0.412-2.037s-0.137-1.394-0.412-2.037c-0.262-0.625-0.641-1.184-1.122-1.666s-1.041-0.859-1.666-1.122c-0.647-0.272-1.331-0.413-2.037-0.413-0.716 0-1.431 0.144-2.066 0.413-0.509 0.216-1.372 0.769-1.875 1.291l-0.003 0.003v-4.313h7.241c0.262-0.003 0.262-0.372 0.262-0.491 0-0.122 0-0.487-0.266-0.491h-7.828c-0.213 0-0.344 0.178-0.344 0.341v6.066c0 0.197 0.244 0.338 0.472 0.384 0.444 0.094 0.544-0.047 0.653-0.197l0.016-0.019c0.166-0.247 0.681-0.766 0.688-0.772 0.806-0.806 1.884-1.25 3.037-1.25 1.147 0 2.222 0.444 3.028 1.25 0.809 0.809 1.256 1.881 1.256 3.019 0 1.141-0.444 2.216-1.25 3.019-0.794 0.794-1.906 1.25-3.047 1.25-0.772 0-1.519-0.206-2.159-0.597l0.003-3.688c0-0.491 0.213-1.028 0.572-1.431 0.409-0.463 0.972-0.716 1.588-0.716 0.594 0 1.15 0.225 1.566 0.634 0.409 0.406 0.637 0.95 0.637 1.528 0 1.231-0.969 2.197-2.206 2.197-0.238 0-0.672-0.106-0.691-0.109-0.25-0.075-0.356 0.272-0.391 0.387-0.134 0.441 0.069 0.528 0.109 0.541 0.397 0.125 0.659 0.147 1.003 0.147 1.747 0 3.169-1.422 3.169-3.169 0-1.734-1.422-3.144-3.166-3.144-0.856 0-1.659 0.328-2.263 0.919-0.575 0.566-0.903 1.319-0.903 2.069v0.019c-0.003 0.094-0.003 2.306-0.006 3.031l-0.003-0.003c-0.328-0.363-0.653-0.919-0.869-1.488-0.084-0.222-0.275-0.184-0.534-0.103-0.125 0.034-0.469 0.141-0.391 0.394v0zM7.675 9.647c0 0.106 0.097 0.2 0.156 0.253l0.019 0.019c0.1 0.097 0.194 0.147 0.281 0.147 0.072 0 0.116-0.034 0.131-0.050 0.044-0.041 0.537-0.544 0.588-0.591l0.553 0.55c0.050 0.056 0.106 0.088 0.172 0.088 0.088 0 0.184-0.053 0.284-0.156 0.238-0.244 0.119-0.375 0.063-0.438l-0.559-0.559 0.584-0.588c0.128-0.137 0.016-0.284-0.097-0.397-0.162-0.162-0.322-0.206-0.422-0.112l-0.581 0.581-0.588-0.588c-0.031-0.031-0.072-0.047-0.113-0.047-0.078 0-0.172 0.053-0.275 0.156-0.181 0.181-0.219 0.306-0.125 0.406l0.588 0.584-0.584 0.584c-0.053 0.050-0.078 0.103-0.075 0.156zM8.953 1.716c-0.938 0-1.938 0.191-2.669 0.506-0.078 0.031-0.125 0.094-0.134 0.181-0.009 0.084 0.013 0.194 0.069 0.337 0.047 0.116 0.166 0.425 0.4 0.334 0.75-0.288 1.581-0.444 2.334-0.444 0.856 0 1.688 0.169 2.469 0.497 0.622 0.263 1.206 0.644 1.844 1.194 0.047 0.041 0.097 0.059 0.147 0.059 0.125 0 0.244-0.122 0.347-0.237 0.169-0.191 0.287-0.35 0.119-0.509-0.609-0.575-1.275-1.006-2.1-1.356-0.894-0.372-1.847-0.563-2.825-0.563zM14.006 13.3v0c-0.113-0.113-0.209-0.178-0.294-0.203s-0.162-0.006-0.222 0.053l-0.056 0.056c-0.581 0.581-1.259 1.037-2.012 1.356-0.781 0.331-1.609 0.497-2.463 0.497-0.856 0-1.684-0.169-2.463-0.497-0.753-0.319-1.431-0.775-2.013-1.356-0.606-0.606-1.063-1.284-1.356-2.012-0.288-0.713-0.381-1.247-0.413-1.422-0.003-0.016-0.006-0.028-0.006-0.037-0.041-0.206-0.231-0.222-0.503-0.178-0.112 0.019-0.459 0.072-0.428 0.319v0.006c0.091 0.578 0.253 1.144 0.481 1.681 0.366 0.866 0.891 1.644 1.559 2.313s1.447 1.191 2.313 1.559c0.897 0.378 1.85 0.572 2.831 0.572s1.934-0.194 2.831-0.572c0.866-0.366 1.644-0.891 2.313-1.559 0 0 0.037-0.037 0.059-0.059 0.069-0.084 0.134-0.225-0.159-0.516z"
    }
  }]
};
exports.fiveHundredPX = fiveHundredPX;
var steam = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM14.975 2.025c-1.367-1.367-3.583-1.367-4.95 0-0.556 0.556-0.886 1.252-0.989 1.975v0l-3.198 4.847c-0.43 0.022-0.856 0.132-1.249 0.328l-2.467-1.928c-0.571-0.446-1.396-0.345-1.842 0.226s-0.345 1.396 0.226 1.842l2.436 1.905c-0.265 1.043 0.010 2.196 0.827 3.012 1.233 1.233 3.232 1.233 4.465 0 0.757-0.757 1.049-1.804 0.876-2.784l3.891-3.484c0.723-0.104 1.419-0.434 1.975-0.989 1.367-1.367 1.367-3.583 0-4.95zM6 14.105c-1.162 0-2.105-0.942-2.105-2.105 0-0.011 0.001-0.022 0.001-0.033l1.046 0.817c0.24 0.188 0.525 0.278 0.807 0.278 0.39 0 0.776-0.173 1.035-0.504 0.446-0.571 0.345-1.396-0.226-1.842l-0.992-0.776c0.14-0.029 0.285-0.045 0.434-0.045 1.162 0 2.105 0.942 2.105 2.105s-0.942 2.105-2.105 2.105zM12.5 7c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"
    }
  }]
};
exports.steam = steam;
var steam2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.749 13.063c0.424 0 0.84-0.205 1.093-0.585 0.402-0.603 0.239-1.418-0.364-1.82l-1.032-0.688c0.177-0.048 0.362-0.074 0.554-0.074 1.162 0 2.105 0.942 2.105 2.105s-0.942 2.105-2.105 2.105c-1.131 0-2.054-0.893-2.102-2.012l1.124 0.749c0.224 0.149 0.477 0.221 0.727 0.221zM13.333 0c1.467 0 2.667 1.2 2.667 2.667v10.666c0 1.468-1.2 2.667-2.667 2.667h-10.666c-1.467 0-2.667-1.199-2.667-2.667v-3.172l1.896 1.264c-0.182 0.987 0.108 2.044 0.872 2.808 1.233 1.233 3.232 1.233 4.465 0 0.757-0.757 1.049-1.804 0.876-2.784l3.892-3.484c0.723-0.104 1.419-0.433 1.975-0.989 1.367-1.367 1.367-3.583 0-4.95s-3.583-1.367-4.95 0c-0.556 0.556-0.886 1.252-0.989 1.975v0l-3.198 4.847c-0.498 0.025-0.99 0.168-1.433 0.428l-3.404-2.269v-4.339c0-1.467 1.2-2.667 2.667-2.667h10.666zM14 4.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5zM10 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5z"
    }
  }]
};
exports.steam2 = steam2;
var dropbox = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.5 0.5l-3.5 3 4.5 3 3.5-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 3.5l-3.5-3-4.5 3 3.5 3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 6.5l3.5 3-4.5 2.5-3.5-3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 9l-4.5-2.5-3.5 3 4.5 2.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.377 13.212l-3.377-2.895-3.377 2.895-2.123-1.179v1.467l5.5 2.5 5.5-2.5v-1.467z"
    }
  }]
};
exports.dropbox = dropbox;
var onedrive = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.482 12.944c-0.942-0.235-1.466-0.984-1.468-2.095-0-0.355 0.025-0.525 0.114-0.754 0.217-0.56 0.793-0.982 1.55-1.138 0.377-0.077 0.493-0.16 0.493-0.353 0-0.060 0.045-0.24 0.1-0.399 0.249-0.724 0.71-1.327 1.202-1.573 0.515-0.258 0.776-0.316 1.399-0.313 0.886 0.005 1.327 0.197 1.945 0.846l0.34 0.357 0.304-0.105c1.473-0.51 2.942 0.358 3.061 1.809l0.032 0.397 0.29 0.104c0.829 0.297 1.218 0.92 1.148 1.837-0.046 0.599-0.326 1.078-0.77 1.315l-0.209 0.112-4.638 0.009c-3.564 0.007-4.697-0.006-4.893-0.055v0zM1.613 12.281c-0.565-0.142-1.164-0.67-1.445-1.273-0.159-0.342-0.168-0.393-0.168-0.998 0-0.576 0.014-0.668 0.14-0.954 0.267-0.603 0.78-1.038 1.422-1.21 0.136-0.036 0.263-0.094 0.283-0.128s0.043-0.221 0.050-0.415c0.045-1.206 0.794-2.269 1.839-2.61 0.565-0.184 1.306-0.202 1.92 0.058 0.195 0.082 0.173 0.1 0.585-0.471 0.244-0.338 0.705-0.695 1.108-0.909 0.435-0.231 0.887-0.337 1.428-0.336 1.512 0.004 2.815 1.003 3.297 2.529 0.154 0.487 0.146 0.624-0.035 0.628-0.079 0.002-0.306 0.048-0.505 0.102l-0.361 0.099-0.329-0.348c-0.928-0.98-2.441-1.192-3.728-0.522-0.514 0.268-0.927 0.652-1.239 1.153-0.222 0.357-0.506 1.024-0.506 1.189 0 0.117-0.090 0.176-0.474 0.309-1.189 0.412-1.883 1.364-1.882 2.582 0 0.443 0.108 0.986 0.258 1.296 0.057 0.117 0.088 0.228 0.070 0.247-0.046 0.049-1.525 0.032-1.73-0.019v0z"
    }
  }]
};
exports.onedrive = onedrive;
var github = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"
    }
  }]
};
exports.github = github;
var npm = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"
    }
  }]
};
exports.npm = npm;
var basecamp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1.666c-2.919 0-5.169 2.444-6.444 4.838-0.719 1.347-1.222 2.822-1.453 4.331-0.025 0.172-0.050 0.344-0.069 0.519-0.009 0.094-0.019 0.188-0.025 0.281-0.009 0.119-0.003 0.156 0.059 0.256 0.187 0.303 0.409 0.584 0.659 0.838 0.512 0.525 1.134 0.928 1.794 1.241 1.503 0.709 3.2 0.966 4.85 1.022 1.703 0.056 3.453-0.084 5.081-0.616 1.391-0.453 2.731-1.244 3.503-2.522 0.084-0.137 0.025-0.341 0.009-0.5-0.019-0.191-0.044-0.378-0.075-0.566-0.056-0.369-0.131-0.731-0.222-1.094-0.181-0.738-0.428-1.463-0.728-2.159-1.088-2.525-3.1-5.219-5.963-5.775-0.322-0.063-0.65-0.094-0.978-0.094zM8.1 13.909c-1.784 0-3.728-0.159-5.334-1.019-0.625-0.334-1.262-0.819-1.563-1.484-0.087-0.194-0.056-0.269-0.016-0.497 0.028-0.147 0.041-0.291 0.106-0.428 0.091-0.191 0.184-0.378 0.281-0.566 0.328-0.634 0.681-1.262 1.091-1.853 0.203-0.291 0.419-0.578 0.669-0.828 0.175-0.175 0.388-0.362 0.634-0.422 0.756-0.181 1.334 0.694 1.794 1.134 0.222 0.213 0.519 0.453 0.85 0.412 0.228-0.028 0.431-0.206 0.594-0.353 0.553-0.497 0.997-1.112 1.456-1.691 0.228-0.284 0.453-0.572 0.7-0.844 0.166-0.184 0.347-0.394 0.569-0.513 0.397-0.216 0.903 0.228 1.178 0.456 0.469 0.391 0.884 0.847 1.281 1.309 0.378 0.441 0.744 0.888 1.066 1.372 0.497 0.75 0.928 1.55 1.322 2.359 0.084 0.175 0.113 0.294 0.144 0.488 0.019 0.106 0.059 0.228 0.044 0.338-0.022 0.153-0.128 0.319-0.206 0.444-0.188 0.297-0.441 0.553-0.719 0.769-1.166 0.903-2.744 1.203-4.178 1.338-0.588 0.056-1.175 0.078-1.762 0.078z"
    }
  }]
};
exports.basecamp = basecamp;
var trello = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM7 12c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v8zM13 9c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-5c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v5z"
    }
  }]
};
exports.trello = trello;
var wordpress = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2 8c0 2.313 1.38 4.312 3.382 5.259l-2.862-7.637c-0.333 0.727-0.52 1.531-0.52 2.378zM12.050 7.705c0-0.722-0.266-1.222-0.495-1.612-0.304-0.482-0.589-0.889-0.589-1.371 0-0.537 0.418-1.037 1.008-1.037 0.027 0 0.052 0.003 0.078 0.005-1.067-0.953-2.49-1.534-4.052-1.534-2.096 0-3.94 1.048-5.013 2.634 0.141 0.004 0.274 0.007 0.386 0.007 0.627 0 1.599-0.074 1.599-0.074 0.323-0.018 0.361 0.444 0.038 0.482 0 0-0.325 0.037-0.687 0.055l2.185 6.33 1.313-3.835-0.935-2.495c-0.323-0.019-0.629-0.055-0.629-0.055-0.323-0.019-0.285-0.5 0.038-0.482 0 0 0.991 0.074 1.58 0.074 0.627 0 1.599-0.074 1.599-0.074 0.323-0.018 0.362 0.444 0.038 0.482 0 0-0.326 0.037-0.687 0.055l2.168 6.282 0.599-1.947c0.259-0.809 0.457-1.389 0.457-1.889zM8.105 8.511l-1.8 5.095c0.538 0.154 1.106 0.238 1.695 0.238 0.699 0 1.369-0.117 1.992-0.331-0.016-0.025-0.031-0.052-0.043-0.081l-1.844-4.921zM13.265 5.196c0.026 0.186 0.040 0.386 0.040 0.601 0 0.593-0.114 1.259-0.456 2.093l-1.833 5.16c1.784-1.013 2.983-2.895 2.983-5.051 0-1.016-0.267-1.971-0.735-2.803zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z"
    }
  }]
};
exports.wordpress = wordpress;
var joomla = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.156 4.323c0.513-0.513 1.344-0.513 1.856-0l0.122 0.123 1.58-1.581-0.123-0.123c-0.9-0.902-2.164-1.217-3.319-0.946-0.166-1.018-1.048-1.796-2.112-1.796-1.182 0-2.14 0.96-2.14 2.143 0 1.021 0.712 1.875 1.667 2.091-0.362 1.21-0.066 2.576 0.888 3.531l3.56 3.561 1.578-1.581-3.56-3.561c-0.511-0.511-0.512-1.346 0.003-1.861zM15.98 2.143c0-1.184-0.958-2.143-2.14-2.143-1.082 0-1.976 0.804-2.12 1.847-1.204-0.354-2.559-0.055-3.51 0.897l-3.56 3.561 1.58 1.581 3.559-3.56c0.515-0.515 1.344-0.514 1.854-0.003 0.512 0.513 0.512 1.346-0.001 1.859l-0.122 0.122 1.578 1.582 0.123-0.124c0.945-0.946 1.245-2.293 0.9-3.494 1.049-0.138 1.858-1.037 1.858-2.125zM14.16 11.735c0.283-1.163-0.031-2.443-0.939-3.352l-3.555-3.562-1.58 1.58 3.555 3.563c0.515 0.516 0.514 1.345 0.003 1.857-0.513 0.513-1.344 0.513-1.857-0l-0.121-0.122-1.578 1.582 0.121 0.121c0.961 0.962 2.338 1.257 3.553 0.883 0.197 0.979 1.061 1.716 2.098 1.716 1.181 0 2.14-0.959 2.14-2.143 0-1.081-0.8-1.976-1.84-2.122zM9.568 8.261l-3.555 3.562c-0.511 0.512-1.344 0.513-1.859-0.002-0.513-0.514-0.513-1.345-0.001-1.859l0.122-0.121-1.579-1.58-0.121 0.12c-0.918 0.919-1.228 2.216-0.929 3.39-0.944 0.223-1.646 1.072-1.646 2.086-0 1.184 0.958 2.143 2.14 2.143 1.017-0.001 1.869-0.71 2.087-1.662 1.167 0.29 2.453-0.020 3.365-0.934l3.555-3.562-1.578-1.582z"
    }
  }]
};
exports.joomla = joomla;
var ello = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM12.885 9.212c-0.575 2.23-2.584 3.788-4.885 3.788s-4.31-1.558-4.885-3.788c-0.097-0.377 0.131-0.764 0.508-0.861 0.058-0.015 0.118-0.023 0.177-0.023 0.322 0 0.604 0.218 0.684 0.531 0.414 1.605 1.86 2.727 3.516 2.727s3.102-1.121 3.516-2.727c0.081-0.313 0.362-0.531 0.684-0.531 0.060 0 0.12 0.008 0.178 0.023 0.183 0.047 0.336 0.163 0.432 0.326s0.123 0.353 0.075 0.536z"
    }
  }]
};
exports.ello = ello;
var blogger = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.966 6h-0.897c-0.549 0-1.031-0.465-1.069-1v0c0-2.854-2.301-5-5.175-5h-2.622c-2.872 0-5.201 2.313-5.203 5.167v5.669c0 2.854 2.331 5.165 5.203 5.165h5.6c2.874 0 5.197-2.311 5.197-5.165v-3.662c0-0.57-0.46-1.173-1.034-1.173zM5 4h3c0.55 0 1 0.45 1 1s-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1s0.45-1 1-1zM11 12h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1z"
    }
  }]
};
exports.blogger = blogger;
var blogger2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM14 10.125c0 2.141-1.741 3.875-3.897 3.875h-4.2c-2.156 0-3.903-1.734-3.903-3.875v-4.25c0-2.141 1.747-3.875 3.903-3.875h1.966c2.156 0 3.881 1.609 3.881 3.75 0.028 0.4 0.391 0.75 0.8 0.75h0.672c0.431 0 0.775 0.453 0.775 0.881v2.744z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11 10c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v0c0-0.55 0.45-1 1-1h4c0.55 0 1 0.45 1 1v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9 6c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v0c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v0z"
    }
  }]
};
exports.blogger2 = blogger2;
var tumblr = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.001 7l-0 3.659c0 0.928-0.012 1.463 0.086 1.727 0.098 0.262 0.342 0.534 0.609 0.691 0.354 0.212 0.758 0.318 1.214 0.318 0.81 0 1.289-0.107 2.090-0.633v2.405c-0.683 0.321-1.279 0.509-1.833 0.639-0.555 0.129-1.154 0.194-1.798 0.194-0.732 0-1.163-0.092-1.725-0.276-0.562-0.185-1.042-0.45-1.438-0.79-0.398-0.343-0.672-0.706-0.826-1.091s-0.23-0.944-0.23-1.676v-5.611h-2.147v-2.266c0.628-0.204 1.331-0.497 1.778-0.877 0.449-0.382 0.809-0.839 1.080-1.374 0.272-0.534 0.459-1.214 0.561-2.039h2.579l-0 4h3.999v3h-3.999z"
    }
  }]
};
exports.tumblr = tumblr;
var tumblr2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11.434 12.884c-0.472 0.222-0.9 0.378-1.281 0.469-0.381 0.088-0.797 0.134-1.241 0.134-0.506 0-0.803-0.063-1.191-0.191s-0.719-0.309-0.994-0.544c-0.275-0.238-0.463-0.488-0.569-0.753s-0.159-0.65-0.159-1.156v-3.872h-1.5v-1.563c0.434-0.141 0.938-0.344 1.244-0.606 0.309-0.263 0.559-0.578 0.744-0.947 0.188-0.369 0.316-0.837 0.388-1.406h1.569v2.55h2.556v1.972h-2.553v2.831c0 0.641-0.009 1.009 0.059 1.191s0.238 0.369 0.422 0.475c0.244 0.147 0.525 0.219 0.838 0.219 0.559 0 1.116-0.181 1.669-0.544v1.741z"
    }
  }]
};
exports.tumblr2 = tumblr2;
var yahoo = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.878 9.203v0c1.759-3.088 4.666-8.125 5.463-9.203-0.35 0.234-0.887 0.353-1.381 0.466l-0.747-0.466c-0.6 1.119-2.813 4.734-4.222 7.050-1.428-2.366-3.119-5.097-4.222-7.050-0.875 0.188-1.237 0.197-2.109 0v0 0c0 0 0 0 0 0v0c1.731 2.606 4.503 7.572 5.447 9.203v0l-0.128 6.797 1.013-0.466v-0.012l1.012 0.478-0.125-6.797z"
    }
  }]
};
exports.yahoo = yahoo;
var yahoo2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.019 1.087c-2.828 0-5.5-0.372-8.019-1.087 0 5.653 0 14.581 0 16 2.522-0.716 5.194-1.088 8.019-1.088 2.794 0 5.459 0.363 7.981 1.088 0-5.444 0-10.153 0-16-2.522 0.725-5.184 1.087-7.981 1.087zM12.45 2.453l-0.097 0.153c-0.091 0.144-0.172 0.266-0.284 0.438-0.15 0.225-0.431 0.672-0.769 1.247-0.094 0.159-0.209 0.35-0.328 0.556-0.228 0.384-0.484 0.819-0.688 1.162-0.084 0.147-0.169 0.297-0.256 0.447-0.225 0.391-0.456 0.794-0.678 1.181-0.228 0.403-0.453 0.8-0.678 1.194v0.397c0 0.55 0.012 1.15 0.031 1.684 0.009 0.244 0.019 0.678 0.031 1.137 0.012 0.547 0.025 1.113 0.041 1.4l0.003 0.088v0.009l-0.094-0.025c-0.037-0.009-0.072-0.019-0.109-0.028-0.113-0.025-0.234-0.044-0.353-0.056-0.072-0.006-0.147-0.009-0.222-0.009 0 0 0 0 0 0s0 0 0 0c-0.075 0-0.15 0.003-0.222 0.009-0.119 0.012-0.241 0.031-0.353 0.056-0.037 0.009-0.075 0.019-0.109 0.028l-0.094 0.025v-0.009l0.003-0.088c0.013-0.284 0.028-0.853 0.041-1.4 0.009-0.459 0.022-0.894 0.031-1.137 0.022-0.537 0.031-1.134 0.031-1.684v-0.397c-0.225-0.397-0.45-0.791-0.678-1.194-0.222-0.391-0.453-0.791-0.675-1.181-0.088-0.15-0.172-0.3-0.256-0.447-0.2-0.347-0.459-0.781-0.688-1.162-0.122-0.203-0.237-0.397-0.328-0.556-0.338-0.575-0.619-1.019-0.769-1.247-0.112-0.172-0.194-0.294-0.284-0.438l-0.097-0.153 0.175 0.050c0.222 0.063 0.45 0.094 0.694 0.094s0.478-0.031 0.697-0.094l0.053-0.016 0.028 0.047c0.431 0.778 1.591 2.684 2.284 3.825 0.237 0.394 0.428 0.703 0.522 0.862 0 0 0 0 0-0.003 0 0 0 0 0 0.003 0.094-0.156 0.284-0.469 0.522-0.862 0.694-1.138 1.853-3.044 2.284-3.825l0.028-0.047 0.053 0.016c0.219 0.063 0.453 0.094 0.697 0.094s0.472-0.031 0.694-0.094l0.166-0.050z"
    }
  }]
};
exports.yahoo2 = yahoo2;
var tux = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.87 11.514c-1.28 0.596-2.471 0.589-3.271 0.532-0.954-0.069-1.721-0.33-2.058-0.558-0.208-0.141-0.49-0.086-0.631 0.122s-0.086 0.49 0.122 0.631c0.542 0.367 1.501 0.64 2.503 0.712 0.17 0.012 0.356 0.020 0.557 0.020 0.872 0 1.979-0.083 3.163-0.634 0.228-0.106 0.326-0.376 0.22-0.604s-0.376-0.326-0.604-0.22zM13.921 10.841c0.044-3.948 0.449-11.409-7.109-10.806-7.463 0.601-5.484 8.484-5.595 11.124-0.099 1.397-0.562 3.104-1.217 4.841h2.017c0.207-0.736 0.36-1.464 0.425-2.159 0.122 0.085 0.252 0.167 0.391 0.245 0.226 0.133 0.42 0.31 0.626 0.497 0.48 0.438 1.025 0.934 2.089 0.996 0.071 0.004 0.143 0.006 0.214 0.006 1.077 0 1.813-0.471 2.404-0.85 0.283-0.181 0.528-0.338 0.759-0.413 0.655-0.205 1.227-0.536 1.655-0.957 0.067-0.066 0.129-0.133 0.187-0.202 0.238 0.873 0.564 1.856 0.926 2.836h4.307c-1.034-1.597-2.101-3.162-2.079-5.159zM1.939 8.693c0-0 0-0-0-0.001-0.074-1.288 0.542-2.372 1.377-2.421s1.571 0.957 1.645 2.245c0 0 0 0 0 0.001 0.004 0.069 0.006 0.138 0.006 0.206-0.264 0.066-0.503 0.163-0.717 0.275-0.001-0.010-0.001-0.019-0.002-0.029 0-0 0-0 0-0-0.071-0.731-0.462-1.284-0.873-1.234s-0.686 0.684-0.614 1.415c0 0 0 0 0 0 0.031 0.319 0.123 0.604 0.251 0.819-0.032 0.025-0.122 0.091-0.225 0.166-0.078 0.057-0.172 0.126-0.286 0.21-0.311-0.408-0.524-0.993-0.562-1.655zM10.395 11.878c-0.030 0.681-0.92 1.322-1.743 1.579l-0.005 0.002c-0.342 0.111-0.647 0.306-0.97 0.513-0.543 0.347-1.104 0.706-1.914 0.706-0.053 0-0.108-0.002-0.161-0.005-0.742-0.043-1.090-0.36-1.529-0.761-0.232-0.211-0.472-0.43-0.781-0.611l-0.007-0.004c-0.667-0.377-1.081-0.845-1.108-1.253-0.013-0.203 0.077-0.378 0.268-0.522 0.416-0.312 0.695-0.516 0.879-0.651 0.205-0.15 0.267-0.195 0.313-0.239 0.033-0.031 0.068-0.065 0.106-0.103 0.382-0.371 1.021-0.993 2.002-0.993 0.6 0 1.264 0.231 1.971 0.686 0.333 0.217 0.623 0.317 0.99 0.444 0.252 0.087 0.539 0.186 0.922 0.35l0.006 0.003c0.357 0.147 0.78 0.415 0.76 0.858zM10.198 10.278c-0.069-0.035-0.14-0.068-0.215-0.098-0.345-0.148-0.622-0.248-0.852-0.328 0.127-0.248 0.206-0.558 0.213-0.894 0-0 0-0 0-0 0.018-0.818-0.395-1.483-0.922-1.484s-0.968 0.661-0.986 1.479c0 0 0 0 0 0-0.001 0.027-0.001 0.053-0 0.080-0.324-0.149-0.643-0.258-0.956-0.324-0.001-0.031-0.003-0.061-0.004-0.092 0-0 0-0.001 0-0.001-0.030-1.491 0.884-2.725 2.043-2.756s2.122 1.152 2.153 2.642c0 0 0 0.001 0 0.001 0.014 0.674-0.167 1.295-0.475 1.776z"
    }
  }]
};
exports.tux = tux;
var appleinc = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.367 8.501c-0.020-2.026 1.652-2.998 1.727-3.046-0.94-1.375-2.404-1.564-2.926-1.585-1.246-0.126-2.431 0.734-3.064 0.734-0.631 0-1.607-0.715-2.64-0.696-1.358 0.020-2.61 0.79-3.31 2.006-1.411 2.448-0.361 6.076 1.014 8.061 0.672 0.972 1.473 2.064 2.525 2.025 1.013-0.040 1.396-0.656 2.621-0.656s1.569 0.656 2.641 0.635c1.090-0.020 1.781-0.991 2.448-1.966 0.772-1.128 1.089-2.219 1.108-2.275-0.024-0.011-2.126-0.816-2.147-3.236zM10.353 2.555c0.558-0.677 0.935-1.617 0.832-2.555-0.804 0.033-1.779 0.536-2.356 1.212-0.518 0.6-0.971 1.557-0.85 2.476 0.898 0.070 1.815-0.456 2.373-1.132z"
    }
  }]
};
exports.appleinc = appleinc;
var finder = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.894 12.16c-0-0.001-0-0.001-0-0.002 0 0.001 0 0.001 0 0.002z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.916 12.727c-0-0.004-0-0.007-0.001-0.011 0 0.004 0 0.007 0.001 0.011z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.903 12.442c-0-0.003-0-0.006-0-0.008 0 0.003 0 0.006 0 0.008z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 0h-14c-0.55 0-1 0.45-1 1v14c0 0.55 0.45 1 1 1h7.716c0.001 0 0.001 0 0.002 0s0.001-0 0.002-0h6.28c0.55 0 1-0.45 1-1v-14c0-0.55-0.45-1-1-1zM3 3.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1zM15 15h-5.86c-0.105-0.658-0.17-1.336-0.209-1.994 0 0.002 0 0.004 0 0.005-0.308 0.034-0.618 0.051-0.931 0.051-2.088 0-4.1-0.76-5.664-2.141-0.233-0.206-0.255-0.561-0.050-0.794s0.561-0.255 0.794-0.050c1.358 1.199 3.105 1.859 4.919 1.859 0.298 0 0.595-0.018 0.888-0.053-0.034-1.847 0.107-3.311 0.11-3.334 0.014-0.141-0.032-0.28-0.127-0.385s-0.229-0.164-0.371-0.164h-1.487c0.022-0.541 0.079-1.466 0.234-2.503 0.295-1.981 0.812-3.528 1.502-4.497h6.251v14z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.445 13.050c-0.057 0.003-0.114 0.005-0.171 0.007 0.057-0.002 0.114-0.004 0.171-0.007z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 13.063c0.073 0 0.146-0.001 0.22-0.003-0.073 0.002-0.146 0.003-0.22 0.003z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.423 11.925c0.012-0.001 0.024-0.001 0.037-0.002-0.012 0.001-0.024 0.001-0.037 0.002z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.204 11.934c0.017-0 0.034-0.001 0.050-0.002-0.017 0.001-0.034 0.001-0.050 0.002z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.713 10.128c-0.206-0.233-0.561-0.255-0.794-0.050-1.135 1.002-2.542 1.627-4.032 1.806 0.007 0.364 0.020 0.742 0.043 1.127 1.749-0.191 3.403-0.916 4.733-2.090 0.233-0.206 0.255-0.561 0.050-0.794z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.93 13.012c-0.072 0.008-0.144 0.015-0.216 0.021 0.072-0.006 0.144-0.013 0.216-0.021z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.68 13.035c-0.061 0.005-0.122 0.009-0.183 0.013 0.061-0.004 0.122-0.008 0.183-0.013z"
    }
  }]
};
exports.finder = finder;
var android = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14 6c-0.55 0-1 0.45-1 1v4c0 0.55 0.45 1 1 1s1-0.45 1-1v-4c0-0.55-0.45-1-1-1zM2 6c-0.55 0-1 0.45-1 1v4c0 0.55 0.45 1 1 1s1-0.45 1-1v-4c0-0.55-0.45-1-1-1zM3.5 11.5c0 0.828 0.672 1.5 1.5 1.5v0 2c0 0.55 0.45 1 1 1s1-0.45 1-1v-2h2v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-2c0.828 0 1.5-0.672 1.5-1.5v-5.5h-9v5.5z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.472 5c-0.152-1.373-0.922-2.559-2.025-3.276l0.5-1.001c0.123-0.247 0.023-0.547-0.224-0.671s-0.547-0.023-0.671 0.224l-0.502 1.004-0.13-0.052c-0.446-0.148-0.924-0.229-1.42-0.229s-0.974 0.081-1.42 0.229l-0.13 0.052-0.502-1.004c-0.123-0.247-0.424-0.347-0.671-0.224s-0.347 0.424-0.224 0.671l0.5 1.001c-1.103 0.716-1.873 1.903-2.025 3.276v0.5h8.972v-0.5h-0.028zM6.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.223-0.499 0.499-0.5c0 0 0.001 0 0.001 0s0.001-0 0.001-0c0.276 0.001 0.499 0.224 0.499 0.5s-0.224 0.5-0.5 0.5zM9.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.223-0.499 0.499-0.5c0 0 0.001 0 0.001 0s0.001-0 0.002-0c0.276 0.001 0.499 0.224 0.499 0.5s-0.224 0.5-0.5 0.5z"
    }
  }]
};
exports.android = android;
var windows = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.441 7.999c-0.745-0.383-1.47-0.577-2.154-0.577-0.093 0-0.187 0.003-0.28 0.011-0.873 0.072-1.671 0.303-2.184 0.482-0.136 0.050-0.276 0.103-0.419 0.161l-1.403 4.866c0.964-0.357 1.817-0.53 2.598-0.53 1.263 0 2.18 0.472 2.937 0.958 0.359-1.217 1.219-4.158 1.476-5.036-0.187-0.114-0.376-0.228-0.571-0.333zM8.255 9.235l-1.413 4.909c0.419 0.24 1.83 1.001 2.91 1.001 0.872 0 1.848-0.223 2.982-0.684l1.349-4.718c-0.916 0.296-1.795 0.446-2.617 0.446-1.499 0-2.549-0.486-3.211-0.952zM4.575 5.762c1.205 0.012 2.096 0.472 2.835 0.945l1.449-4.958c-0.305-0.175-1.106-0.611-1.685-0.759-0.381-0.089-0.782-0.135-1.206-0.135-0.809 0.015-1.694 0.218-2.701 0.622l-1.382 4.853c1.013-0.382 1.885-0.568 2.689-0.568 0.001 0 0.002 0 0.002 0zM16 3.096c-0.919 0.357-1.816 0.539-2.672 0.539-1.433 0-2.489-0.497-3.173-0.974l-1.437 4.972c0.965 0.62 2.005 0.936 3.096 0.936 0.89 0 1.812-0.214 2.742-0.636l-0.003-0.035 0.058-0.014 1.39-4.788z"
    }
  }]
};
exports.windows = windows;
var windows8 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.005 8l-0.005-4.876 6-0.815v5.691zM7 2.164l7.998-1.164v7h-7.998zM15 9l-0.002 7-7.998-1.125v-5.875zM6 14.747l-5.995-0.822-0-4.926h5.995z"
    }
  }]
};
exports.windows8 = windows8;
var soundcloud = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.937 8.034c-0.283 0-0.552 0.055-0.798 0.154-0.164-1.787-1.723-3.188-3.625-3.188-0.465 0-0.917 0.088-1.317 0.237-0.156 0.058-0.197 0.117-0.197 0.233v6.292c0 0.121 0.098 0.222 0.221 0.234 0.005 0.001 5.68 0.003 5.717 0.003 1.139 0 2.062-0.888 2.062-1.983s-0.924-1.983-2.063-1.983zM6.25 12h0.5l0.25-3.503-0.25-3.497h-0.5l-0.25 3.497zM4.75 12h-0.5l-0.25-2.543 0.25-2.457h0.5l0.25 2.5zM2.25 12h0.5l0.25-2-0.25-2h-0.5l-0.25 2zM0.25 11h0.5l0.25-1-0.25-1h-0.5l-0.25 1z"
    }
  }]
};
exports.soundcloud = soundcloud;
var soundcloud2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM2.75 11h-0.5l-0.25-1.5 0.25-1.5h0.5l0.25 1.5-0.25 1.5zM4.75 11h-0.5l-0.25-2 0.25-2h0.5l0.25 2-0.25 2zM6.75 11h-0.5l-0.25-3 0.25-3h0.5l0.25 3-0.25 3zM12.894 11c-0.031 0-4.706-0.003-4.709-0.003-0.1-0.009-0.181-0.097-0.184-0.2v-5.394c0-0.1 0.034-0.15 0.162-0.2 0.331-0.128 0.703-0.203 1.088-0.203 1.566 0 2.85 1.2 2.987 2.734 0.203-0.084 0.425-0.131 0.656-0.131 0.938 0 1.7 0.762 1.7 1.7s-0.762 1.697-1.7 1.697z"
    }
  }]
};
exports.soundcloud2 = soundcloud2;
var skype = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.65 0.584c-0.025-0.016-0.053-0.028-0.078-0.041-0.028 0.006-0.053 0.009-0.081 0.016l0.159 0.025z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.575 6.578c-0.006 0.028-0.009 0.056-0.012 0.081 0.016 0.025 0.025 0.050 0.041 0.075l-0.028-0.156z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.419 9.416c0.006-0.028 0.009-0.056 0.016-0.084-0.016-0.025-0.025-0.050-0.041-0.075l0.025 0.159z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.25 15.359c0.025 0.016 0.053 0.028 0.078 0.041 0.028-0.006 0.056-0.009 0.084-0.012l-0.162-0.028z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.434 9.331c-0.006 0.028-0.009 0.056-0.016 0.084l-0.028-0.162c0.016 0.028 0.028 0.053 0.044 0.078 0.081-0.45 0.125-0.909 0.125-1.369 0-1.019-0.2-2.009-0.594-2.941-0.381-0.9-0.925-1.709-1.619-2.403s-1.503-1.238-2.4-1.619c-0.931-0.394-1.922-0.594-2.941-0.594-0.481 0-0.963 0.044-1.431 0.134 0 0-0.003 0-0.003 0 0.025 0.012 0.053 0.025 0.078 0.041l-0.159-0.025c0.028-0.006 0.053-0.009 0.081-0.016-0.644-0.341-1.366-0.525-2.097-0.525-1.194 0-2.319 0.466-3.163 1.309s-1.309 1.969-1.309 3.163c0 0.759 0.197 1.509 0.563 2.169 0.006-0.028 0.009-0.056 0.012-0.081l0.028 0.159c-0.016-0.025-0.028-0.050-0.041-0.075-0.075 0.428-0.112 0.866-0.112 1.303 0 1.019 0.2 2.009 0.594 2.941 0.381 0.9 0.925 1.706 1.619 2.4s1.503 1.238 2.403 1.619c0.931 0.394 1.922 0.594 2.941 0.594 0.444 0 0.887-0.041 1.322-0.119-0.025-0.016-0.050-0.028-0.078-0.041l0.162 0.028c-0.028 0.006-0.056 0.009-0.084 0.012 0.669 0.378 1.428 0.581 2.2 0.581 1.194 0 2.319-0.466 3.162-1.309s1.309-1.969 1.309-3.162c-0.003-0.759-0.2-1.509-0.569-2.175zM8.034 12.591c-2.684 0-3.884-1.319-3.884-2.309 0-0.506 0.375-0.863 0.891-0.863 1.15 0 0.85 1.65 2.994 1.65 1.097 0 1.703-0.597 1.703-1.206 0-0.366-0.181-0.772-0.903-0.95l-2.388-0.597c-1.922-0.481-2.272-1.522-2.272-2.5 0-2.028 1.909-2.791 3.703-2.791 1.653 0 3.6 0.913 3.6 2.131 0 0.522-0.453 0.825-0.969 0.825-0.981 0-0.8-1.356-2.775-1.356-0.981 0-1.522 0.444-1.522 1.078s0.775 0.838 1.447 0.991l1.769 0.394c1.934 0.431 2.425 1.563 2.425 2.625 0 1.647-1.266 2.878-3.819 2.878z"
    }
  }]
};
exports.skype = skype;
var reddit = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 10c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 10c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10.049 12.137c0.258-0.203 0.631-0.159 0.834 0.099s0.159 0.631-0.099 0.834c-0.717 0.565-1.81 0.93-2.783 0.93s-2.066-0.365-2.784-0.93c-0.258-0.203-0.302-0.576-0.099-0.834s0.576-0.302 0.834-0.099c0.413 0.325 1.23 0.675 2.049 0.675s1.636-0.35 2.049-0.675zM16 8c0-1.105-0.895-2-2-2-0.752 0-1.406 0.415-1.748 1.028-1.028-0.562-2.28-0.926-3.645-1.010l1.193-2.68 2.284 0.659c0.206 0.583 0.761 1.002 1.415 1.002 0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5c-0.571 0-1.068 0.319-1.321 0.789l-2.545-0.735c-0.285-0.082-0.587 0.058-0.707 0.329l-1.621 3.641c-1.33 0.094-2.551 0.453-3.557 1.004-0.342-0.613-0.996-1.028-1.748-1.028-1.105 0-2 0.895-2 2 0 0.817 0.491 1.52 1.193 1.83-0.126 0.375-0.193 0.767-0.193 1.17 0 2.761 3.134 5 7 5s7-2.239 7-5c0-0.403-0.067-0.795-0.193-1.17 0.703-0.31 1.193-1.013 1.193-1.83zM13.5 2.938c0.311 0 0.563 0.252 0.563 0.563s-0.252 0.563-0.563 0.563-0.563-0.252-0.563-0.563 0.252-0.563 0.563-0.563zM1 8c0-0.551 0.449-1 1-1 0.399 0 0.743 0.234 0.904 0.573-0.523 0.396-0.956 0.854-1.276 1.355-0.368-0.148-0.628-0.508-0.628-0.928zM8 14.813c-3.21 0-5.813-1.707-5.813-3.813s2.602-3.813 5.813-3.813c3.21 0 5.813 1.707 5.813 3.813s-2.602 3.813-5.813 3.813zM14.372 8.928c-0.32-0.502-0.753-0.959-1.276-1.355 0.161-0.338 0.505-0.573 0.904-0.573 0.551 0 1 0.449 1 1 0 0.42-0.26 0.78-0.628 0.928z"
    }
  }]
};
exports.reddit = reddit;
var hackernews = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0v16h16v-16h-16zM8.5 9.125v3.375h-1v-3.375l-2.734-5.125h1.134l2.1 3.938 2.1-3.938h1.134l-2.734 5.125z"
    }
  }]
};
exports.hackernews = hackernews;
var wikipedia = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.106 3.65c0 0.050-0.016 0.097-0.047 0.141-0.031 0.041-0.066 0.063-0.106 0.063-0.313 0.031-0.569 0.131-0.766 0.3-0.2 0.169-0.403 0.497-0.613 0.975l-3.225 7.272c-0.022 0.069-0.081 0.1-0.178 0.1-0.075 0-0.134-0.034-0.178-0.1l-1.809-3.781-2.081 3.781c-0.044 0.069-0.1 0.1-0.178 0.1-0.094 0-0.153-0.034-0.184-0.1l-3.166-7.269c-0.197-0.45-0.406-0.766-0.625-0.944s-0.525-0.291-0.916-0.331c-0.034 0-0.066-0.019-0.094-0.053-0.031-0.034-0.044-0.075-0.044-0.122 0-0.119 0.034-0.178 0.1-0.178 0.281 0 0.578 0.013 0.888 0.038 0.288 0.025 0.556 0.038 0.809 0.038 0.256 0 0.563-0.013 0.913-0.038 0.366-0.025 0.691-0.038 0.975-0.038 0.069 0 0.1 0.059 0.1 0.178s-0.022 0.175-0.063 0.175c-0.281 0.022-0.506 0.094-0.669 0.216s-0.244 0.281-0.244 0.481c0 0.1 0.034 0.228 0.1 0.378l2.616 5.912 1.487-2.806-1.384-2.903c-0.25-0.519-0.453-0.853-0.612-1.003s-0.403-0.241-0.728-0.275c-0.031 0-0.056-0.019-0.084-0.053s-0.041-0.075-0.041-0.122c0-0.119 0.028-0.178 0.088-0.178 0.281 0 0.541 0.013 0.778 0.038 0.228 0.025 0.469 0.038 0.728 0.038 0.253 0 0.519-0.013 0.803-0.038 0.291-0.025 0.578-0.038 0.859-0.038 0.069 0 0.1 0.059 0.1 0.178s-0.019 0.175-0.063 0.175c-0.566 0.038-0.847 0.2-0.847 0.481 0 0.125 0.066 0.322 0.197 0.588l0.916 1.859 0.912-1.7c0.125-0.241 0.191-0.444 0.191-0.606 0-0.388-0.281-0.594-0.847-0.619-0.050 0-0.075-0.059-0.075-0.175 0-0.044 0.012-0.081 0.037-0.119s0.050-0.056 0.075-0.056c0.203 0 0.45 0.013 0.747 0.038 0.281 0.025 0.516 0.038 0.697 0.038 0.131 0 0.322-0.013 0.575-0.031 0.319-0.028 0.588-0.044 0.803-0.044 0.050 0 0.075 0.050 0.075 0.15 0 0.134-0.047 0.203-0.137 0.203-0.328 0.034-0.594 0.125-0.794 0.272s-0.45 0.481-0.75 1.006l-1.222 2.237 1.644 3.35 2.428-5.647c0.084-0.206 0.125-0.397 0.125-0.569 0-0.412-0.281-0.631-0.847-0.659-0.050 0-0.075-0.059-0.075-0.175 0-0.119 0.037-0.178 0.113-0.178 0.206 0 0.45 0.013 0.734 0.038 0.262 0.025 0.481 0.038 0.656 0.038 0.188 0 0.4-0.013 0.644-0.038 0.253-0.025 0.481-0.038 0.684-0.038 0.063 0 0.094 0.050 0.094 0.15z"
    }
  }]
};
exports.wikipedia = wikipedia;
var linkedin = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"
    }
  }]
};
exports.linkedin = linkedin;
var linkedin2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1 6h3v9h-3v-9z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    }
  }]
};
exports.linkedin2 = linkedin2;
var lastfm = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M7.056 11.972l-0.588-1.594c0 0-0.953 1.063-2.381 1.063-1.266 0-2.163-1.1-2.163-2.859 0-2.253 1.137-3.059 2.253-3.059 1.612 0 2.125 1.044 2.566 2.381l0.588 1.831c0.588 1.778 1.688 3.206 4.856 3.206 2.272 0 3.813-0.697 3.813-2.528 0-1.484-0.844-2.253-2.419-2.622l-1.172-0.256c-0.806-0.184-1.044-0.513-1.044-1.063 0-0.622 0.494-0.991 1.3-0.991 0.881 0 1.356 0.331 1.428 1.119l1.831-0.219c-0.147-1.65-1.284-2.328-3.153-2.328-1.65 0-3.262 0.622-3.262 2.622 0 1.247 0.606 2.034 2.125 2.4l1.247 0.294c0.934 0.219 1.247 0.606 1.247 1.137 0 0.678-0.659 0.953-1.906 0.953-1.85 0-2.622-0.972-3.059-2.309l-0.606-1.831c-0.766-2.384-1.994-3.263-4.431-3.263-2.694 0-4.125 1.703-4.125 4.6 0 2.784 1.428 4.287 3.997 4.287 2.069 0 3.059-0.972 3.059-0.972v0z"
    }
  }]
};
exports.lastfm = lastfm;
var lastfm2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11.666 11.887c-2.775 0-3.737-1.25-4.25-2.806l-0.513-1.603c-0.384-1.172-0.834-2.084-2.244-2.084-0.978 0-1.972 0.706-1.972 2.678 0 1.541 0.784 2.503 1.894 2.503 1.25 0 2.084-0.931 2.084-0.931l0.513 1.394c0 0-0.866 0.85-2.678 0.85-2.25 0-3.5-1.313-3.5-3.75 0-2.534 1.25-4.025 3.609-4.025 2.134 0 3.206 0.769 3.881 2.853l0.528 1.603c0.384 1.172 1.059 2.022 2.678 2.022 1.091 0 1.669-0.241 1.669-0.834 0-0.466-0.272-0.803-1.091-0.994l-1.091-0.256c-1.331-0.322-1.859-1.009-1.859-2.1 0-1.747 1.412-2.294 2.853-2.294 1.634 0 2.631 0.594 2.759 2.038l-1.603 0.194c-0.066-0.691-0.481-0.978-1.25-0.978-0.706 0-1.137 0.322-1.137 0.866 0 0.481 0.209 0.769 0.912 0.931l1.025 0.225c1.378 0.322 2.116 0.994 2.116 2.294 0 1.597-1.347 2.206-3.334 2.206z"
    }
  }]
};
exports.lastfm2 = lastfm2;
var delicious = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0 0v16h16v-16h-16zM8 15v-7h-7v-7h7v7h7v7h-7z"
    }
  }]
};
exports.delicious = delicious;
var stumbleupon = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 5c-0.55 0-1 0.45-1 1v4c0 1.653-1.347 3-3 3s-3-1.347-3-3v-2h2v2c0 0.55 0.45 1 1 1s1-0.45 1-1v-4c0-1.653 1.347-3 3-3s3 1.347 3 2.781v0.969l-1.281 0.375-0.719-0.375v-0.969c0-0.331-0.45-0.781-1-0.781z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15 10c0 1.653-1.347 3-3 3s-3-1.347-3-3.219v-1.938l0.719 0.375 1.281-0.375v1.938c0 0.769 0.45 1.219 1 1.219s1-0.45 1-1v-2h2v2z"
    }
  }]
};
exports.stumbleupon = stumbleupon;
var stumbleupon2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.313 0h-10.625c-1.478 0-2.688 1.209-2.688 2.688v10.625c0 1.478 1.209 2.688 2.688 2.688h10.625c1.478 0 2.688-1.209 2.688-2.688v-10.625c0-1.478-1.209-2.688-2.688-2.688zM8 5c-0.551 0-1 0.449-1 1v4c0 1.654-1.346 3-3 3s-3-1.346-3-3v-2h2v2c0 0.551 0.449 1 1 1s1-0.449 1-1v-4c0-1.654 1.346-3 3-3s3 1.346 3 2.781v0.969l-1.281 0.375-0.719-0.375v-0.969c0-0.333-0.449-0.781-1-0.781zM15 10c0 1.654-1.346 3-3 3s-3-1.346-3-3.219v-1.938l0.719 0.375 1.281-0.375v1.938c0 0.77 0.449 1.219 1 1.219s1-0.449 1-1v-2h2v2z"
    }
  }]
};
exports.stumbleupon2 = stumbleupon2;
var stackoverflow = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 10v6h-16v-6h2v4h12v-4zM3 11h10v2h-10zM3.237 8.835l0.433-1.953 9.763 2.164-0.433 1.953zM4.37 4.821l0.845-1.813 9.063 4.226-0.845 1.813zM15.496 5.648l-1.218 1.587-7.934-6.088 0.88-1.147h0.91z"
    }
  }]
};
exports.stackoverflow = stackoverflow;
var pinterest = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 1.069c-3.828 0-6.931 3.103-6.931 6.931 0 2.938 1.828 5.444 4.406 6.453-0.059-0.547-0.116-1.391 0.025-1.988 0.125-0.541 0.813-3.444 0.813-3.444s-0.206-0.416-0.206-1.028c0-0.963 0.559-1.684 1.253-1.684 0.591 0 0.878 0.444 0.878 0.975 0 0.594-0.378 1.484-0.575 2.306-0.166 0.691 0.344 1.253 1.025 1.253 1.231 0 2.178-1.3 2.178-3.175 0-1.659-1.194-2.819-2.894-2.819-1.972 0-3.128 1.478-3.128 3.009 0 0.597 0.228 1.234 0.516 1.581 0.056 0.069 0.066 0.128 0.047 0.2-0.053 0.219-0.169 0.691-0.194 0.787-0.031 0.128-0.1 0.153-0.231 0.094-0.866-0.403-1.406-1.669-1.406-2.684 0-2.188 1.587-4.194 4.578-4.194 2.403 0 4.272 1.712 4.272 4.003 0 2.388-1.506 4.313-3.597 4.313-0.703 0-1.362-0.366-1.588-0.797 0 0-0.347 1.322-0.431 1.647-0.156 0.603-0.578 1.356-0.862 1.816 0.65 0.2 1.337 0.309 2.053 0.309 3.828 0 6.931-3.103 6.931-6.931 0-3.831-3.103-6.934-6.931-6.934z"
    }
  }]
};
exports.pinterest = pinterest;
var pinterest2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.412 0-8 3.587-8 8s3.587 8 8 8 8-3.588 8-8-3.588-8-8-8zM8 14.931c-0.716 0-1.403-0.109-2.053-0.309 0.281-0.459 0.706-1.216 0.862-1.816 0.084-0.325 0.431-1.647 0.431-1.647 0.225 0.431 0.888 0.797 1.587 0.797 2.091 0 3.597-1.922 3.597-4.313 0-2.291-1.869-4.003-4.272-4.003-2.991 0-4.578 2.009-4.578 4.194 0 1.016 0.541 2.281 1.406 2.684 0.131 0.063 0.2 0.034 0.231-0.094 0.022-0.097 0.141-0.566 0.194-0.787 0.016-0.069 0.009-0.131-0.047-0.2-0.287-0.347-0.516-0.988-0.516-1.581 0-1.528 1.156-3.009 3.128-3.009 1.703 0 2.894 1.159 2.894 2.819 0 1.875-0.947 3.175-2.178 3.175-0.681 0-1.191-0.563-1.025-1.253 0.197-0.825 0.575-1.713 0.575-2.306 0-0.531-0.284-0.975-0.878-0.975-0.697 0-1.253 0.719-1.253 1.684 0 0.612 0.206 1.028 0.206 1.028s-0.688 2.903-0.813 3.444c-0.141 0.6-0.084 1.441-0.025 1.988-2.578-1.006-4.406-3.512-4.406-6.45 0-3.828 3.103-6.931 6.931-6.931s6.931 3.103 6.931 6.931c0 3.828-3.103 6.931-6.931 6.931z"
    }
  }]
};
exports.pinterest2 = pinterest2;
var xing = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM4.884 10.406h-1.728c-0.103 0-0.181-0.047-0.225-0.119-0.047-0.075-0.047-0.169 0-0.266l1.838-3.244c0.003-0.003 0.003-0.006 0-0.009l-1.169-2.025c-0.047-0.097-0.056-0.191-0.009-0.266 0.044-0.072 0.131-0.109 0.237-0.109h1.731c0.266 0 0.397 0.172 0.481 0.325 0 0 1.181 2.063 1.191 2.075-0.069 0.125-1.869 3.303-1.869 3.303-0.094 0.162-0.219 0.334-0.478 0.334zM13.069 2.378l-3.831 6.775c-0.003 0.003-0.003 0.009 0 0.012l2.441 4.456c0.047 0.097 0.050 0.194 0.003 0.269-0.044 0.072-0.125 0.109-0.231 0.109h-1.728c-0.266 0-0.397-0.175-0.484-0.328 0 0-2.453-4.5-2.459-4.512 0.122-0.216 3.85-6.828 3.85-6.828 0.094-0.166 0.206-0.328 0.463-0.328h1.753c0.103 0 0.188 0.041 0.231 0.109 0.044 0.072 0.044 0.169-0.006 0.266z"
    }
  }]
};
exports.xing = xing;
var xing2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.431 3.159c-0.138 0-0.256 0.050-0.316 0.144-0.059 0.1-0.050 0.225 0.013 0.353l1.559 2.7c0.003 0.006 0.003 0.009 0 0.013l-2.45 4.331c-0.063 0.128-0.059 0.256 0 0.353 0.059 0.094 0.163 0.156 0.3 0.156h2.306c0.344 0 0.513-0.234 0.628-0.447 0 0 2.397-4.241 2.491-4.406-0.009-0.016-1.588-2.766-1.588-2.766-0.116-0.203-0.287-0.431-0.644-0.431h-2.3z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.125 0c-0.344 0-0.494 0.216-0.619 0.441 0 0-4.972 8.816-5.134 9.106 0.009 0.016 3.278 6.016 3.278 6.016 0.116 0.203 0.291 0.441 0.644 0.441h2.306c0.137 0 0.247-0.053 0.306-0.147 0.063-0.1 0.059-0.228-0.006-0.356l-3.25-5.947c-0.003-0.006-0.003-0.009 0-0.016l5.109-9.034c0.063-0.128 0.066-0.256 0.006-0.356-0.059-0.094-0.169-0.147-0.306-0.147h-2.334z"
    }
  }]
};
exports.xing2 = xing2;
var flattr = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.743 0c-3.802 0-5.743 2.19-5.743 6.279v0 8.579l3.725-3.729v-4.358c0-1.694 0.449-2.772 1.955-3.014v0c0.526-0.103 1.621-0.067 2.317-0.067v0 2.587c0 0.024 0.003 0.066 0.009 0.087v0c0.029 0.105 0.124 0.181 0.236 0.182v0c0.063 0 0.123-0.033 0.184-0.093v0l6.455-6.453-9.139-0.001zM12.275 4.871v4.358c0 1.694-0.449 2.772-1.955 3.014v0c-0.526 0.103-1.621 0.067-2.317 0.067v0-2.587c0-0.023-0.003-0.066-0.009-0.087v0c-0.029-0.105-0.124-0.182-0.236-0.182v0c-0.064-0-0.123 0.033-0.184 0.093v0l-6.455 6.453 9.139 0.001c3.802 0 5.743-2.19 5.743-6.279v0-8.579l-3.725 3.729z"
    }
  }]
};
exports.flattr = flattr;
var foursquare = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.306 1.408c-0.188-0.256-0.488-0.408-0.806-0.408h-9.5c-0.552 0-1 0.448-1 1v12c0 0.404 0.244 0.769 0.617 0.924 0.124 0.051 0.254 0.076 0.382 0.076 0.26 0 0.516-0.102 0.707-0.293l3.707-3.707h2.586c0.437 0 0.824-0.284 0.954-0.702l2.5-8c0.095-0.304 0.040-0.634-0.149-0.891zM10.515 5h-3.515c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.89l-0.625 2h-2.265c-0.265 0-0.52 0.105-0.707 0.293l-2.293 2.293v-8.586h7.14l-0.625 2z"
    }
  }]
};
exports.foursquare = foursquare;
var yelp = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.514 10.21c-0.27 0.272-0.042 0.768-0.042 0.768l2.033 3.394c0 0 0.334 0.447 0.623 0.447 0.29 0 0.577-0.239 0.577-0.239l1.607-2.297c0 0 0.162-0.29 0.166-0.544 0.006-0.361-0.538-0.46-0.538-0.46l-3.805-1.222c-0 0-0.373-0.099-0.621 0.152zM9.321 8.5c0.195 0.33 0.732 0.234 0.732 0.234l3.796-1.109c0 0 0.517-0.21 0.591-0.491 0.072-0.281-0.085-0.619-0.085-0.619l-1.814-2.137c0 0-0.157-0.27-0.483-0.297-0.36-0.031-0.581 0.405-0.581 0.405l-2.145 3.375c0 0-0.19 0.336-0.010 0.64zM7.527 7.184c0.447-0.11 0.518-0.759 0.518-0.759l-0.030-5.404c0 0-0.067-0.667-0.367-0.847-0.47-0.285-0.609-0.136-0.744-0.116l-3.151 1.171c0 0-0.309 0.102-0.469 0.36-0.23 0.365 0.233 0.899 0.233 0.899l3.276 4.465c0 0 0.323 0.334 0.735 0.233zM6.749 9.371c0.011-0.417-0.5-0.667-0.5-0.667l-3.387-1.711c0 0-0.502-0.207-0.746-0.063-0.187 0.11-0.352 0.31-0.368 0.486l-0.221 2.716c0 0-0.033 0.471 0.089 0.685 0.173 0.304 0.741 0.092 0.741 0.092l3.955-0.874c0.154-0.103 0.423-0.113 0.438-0.664zM7.732 10.837c-0.339-0.174-0.746 0.187-0.746 0.187l-2.648 2.915c0 0-0.33 0.446-0.246 0.72 0.079 0.257 0.21 0.384 0.396 0.474l2.659 0.839c0 0 0.322 0.067 0.567-0.004 0.347-0.1 0.283-0.643 0.283-0.643l0.060-3.947c-0 0-0.014-0.38-0.324-0.541z"
    }
  }]
};
exports.yelp = yelp;
var paypal = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.531 4.822c-0.747 3.316-3.053 5.066-6.688 5.066h-1.209l-0.841 5.338h-1.013l-0.053 0.344c-0.034 0.228 0.141 0.431 0.369 0.431h2.588c0.306 0 0.566-0.222 0.616-0.525l0.025-0.131 0.488-3.091 0.031-0.169c0.047-0.303 0.309-0.525 0.616-0.525h0.384c2.506 0 4.469-1.019 5.044-3.963 0.216-1.119 0.134-2.069-0.356-2.775z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M12.984 1.206c-0.741-0.844-2.081-1.206-3.794-1.206h-4.972c-0.35 0-0.65 0.253-0.703 0.6l-2.072 13.131c-0.041 0.259 0.159 0.494 0.422 0.494h3.072l0.772-4.891-0.025 0.153c0.053-0.347 0.35-0.6 0.7-0.6h1.459c2.866 0 5.109-1.162 5.766-4.531 0.019-0.1 0.037-0.197 0.050-0.291 0.194-1.244 0-2.094-0.675-2.859z"
    }
  }]
};
exports.paypal = paypal;
var chrome = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.036 6.977l-2.29-3.966c1.466-1.835 3.722-3.012 6.254-3.012 2.929 0 5.489 1.574 6.883 3.922h-6.528c-0.117-0.010-0.236-0.016-0.356-0.016-1.904 0-3.509 1.307-3.964 3.071zM10.864 5.078h4.585c0.355 0.905 0.551 1.891 0.551 2.922 0 4.388-3.533 7.95-7.909 7.999l3.272-5.667c0.461-0.662 0.731-1.466 0.731-2.332 0-1.143-0.471-2.178-1.23-2.922zM5.094 8c0-1.603 1.304-2.906 2.906-2.906s2.906 1.304 2.906 2.906c0 1.602-1.304 2.906-2.906 2.906s-2.906-1.304-2.906-2.906zM9.097 11.944l-2.29 3.967c-3.852-0.576-6.806-3.899-6.806-7.911 0-1.425 0.373-2.763 1.026-3.922l3.266 5.657c0.654 1.392 2.070 2.359 3.707 2.359 0.38 0 0.747-0.052 1.097-0.149z"
    }
  }]
};
exports.chrome = chrome;
var firefox = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.977 5.221l-0.185 1.189c0 0-0.265-2.201-0.59-3.024-0.498-1.261-0.719-1.251-0.72-1.249 0.333 0.847 0.273 1.302 0.273 1.302s-0.591-1.609-2.152-2.121c-1.729-0.567-2.665-0.412-2.773-0.383-0.016-0-0.032-0-0.047-0 0.013 0.001 0.025 0.002 0.038 0.003-0.001 0-0.001 0.001-0.001 0.001 0.007 0.009 1.911 0.333 2.249 0.797 0 0-0.809 0-1.614 0.232-0.036 0.010 2.961 0.374 3.574 3.37 0 0-0.329-0.686-0.735-0.802 0.267 0.813 0.199 2.356-0.056 3.123-0.033 0.099-0.066-0.426-0.568-0.652 0.161 1.151-0.010 2.976-0.808 3.479-0.062 0.039 0.5-1.802 0.113-1.090-2.23 3.419-4.866 1.578-6.051 0.767 0.607 0.132 1.76-0.021 2.271-0.4 0.001-0 0.001-0.001 0.002-0.001 0.554-0.379 0.882-0.656 1.177-0.59s0.491-0.23 0.262-0.493c-0.229-0.263-0.786-0.625-1.539-0.428-0.531 0.139-1.19 0.727-2.194 0.132-0.771-0.457-0.844-0.837-0.851-1.1 0.019-0.093 0.043-0.18 0.072-0.26 0.089-0.248 0.358-0.323 0.508-0.382 0.254 0.044 0.473 0.123 0.703 0.241 0.003-0.076 0.004-0.178-0-0.293 0.022-0.044 0.008-0.176-0.027-0.337-0.020-0.161-0.053-0.328-0.106-0.48 0-0 0-0 0-0s0.002-0.001 0.002-0.001c0.001-0.001 0.002-0.002 0.003-0.003s0-0.001 0.001-0.001c0.001-0.002 0.002-0.004 0.003-0.007 0.016-0.072 0.188-0.211 0.402-0.361 0.192-0.134 0.417-0.277 0.595-0.387 0.157-0.098 0.277-0.17 0.302-0.189 0.010-0.007 0.021-0.016 0.034-0.026 0.002-0.002 0.005-0.004 0.007-0.006s0.003-0.002 0.004-0.004c0.085-0.067 0.211-0.194 0.237-0.462 0-0.001 0-0.001 0-0.002 0.001-0.008 0.001-0.016 0.002-0.024 0-0.006 0.001-0.011 0.001-0.017 0-0.004 0-0.009 0.001-0.013 0-0.011 0.001-0.021 0.001-0.032 0-0.001 0-0.001 0-0.002 0-0.026-0-0.053-0.002-0.081-0.001-0.016-0.002-0.030-0.005-0.043-0-0.001-0-0.001-0-0.002s-0.001-0.003-0.001-0.004-0.001-0.005-0.002-0.007c-0-0-0-0-0-0.001-0.001-0.003-0.002-0.005-0.003-0.007-0-0-0-0-0-0-0.027-0.064-0.13-0.088-0.554-0.096-0-0-0.001-0-0.001-0v0c-0.173-0.003-0.399-0.003-0.695-0.002-0.52 0.002-0.807-0.508-0.898-0.705 0.126-0.695 0.489-1.19 1.085-1.525 0.011-0.006 0.009-0.012-0.004-0.015 0.117-0.071-1.41-0.002-2.112 0.891-0.623-0.155-1.166-0.144-1.635-0.035-0.090-0.003-0.202-0.014-0.335-0.041-0.311-0.282-0.757-0.803-0.781-1.425 0 0-0.001 0.001-0.004 0.003-0-0.006-0.001-0.012-0.001-0.018 0 0-0.949 0.729-0.807 2.717-0 0.032-0.001 0.062-0.002 0.092-0.257 0.348-0.384 0.641-0.394 0.706-0.228 0.463-0.458 1.16-0.646 2.218 0 0 0.131-0.417 0.395-0.889-0.194 0.594-0.346 1.518-0.257 2.904 0 0 0.024-0.307 0.107-0.75 0.065 0.86 0.352 1.921 1.076 3.169 1.39 2.396 3.526 3.605 5.887 3.791 0.419 0.035 0.845 0.035 1.272 0.003 0.039-0.003 0.079-0.006 0.118-0.009 0.484-0.034 0.971-0.107 1.457-0.224 6.643-1.606 5.921-9.628 5.921-9.628z"
    }
  }]
};
exports.firefox = firefox;
var IE = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.472 9.825h3.688c0.028-0.256 0.040-0.517 0.040-0.784 0-1.253-0.336-2.429-0.924-3.442 0.607-1.614 0.586-2.984-0.227-3.803-0.773-0.77-2.848-0.645-5.194 0.394-0.174-0.013-0.349-0.020-0.526-0.020-3.22 0-5.921 2.216-6.667 5.201 1.010-1.293 2.072-2.231 3.492-2.913-0.129 0.121-0.882 0.87-1.009 0.996-3.743 3.742-4.923 8.63-3.653 9.9 0.965 0.965 2.715 0.802 4.725-0.182 0.934 0.476 1.992 0.744 3.113 0.744 3.018 0 5.575-1.942 6.501-4.648h-3.717c-0.511 0.943-1.512 1.586-2.66 1.586s-2.148-0.642-2.66-1.586c-0.227-0.426-0.358-0.915-0.358-1.432v-0.011h6.035zM5.442 8.013c0.085-1.517 1.347-2.728 2.887-2.728s2.802 1.21 2.887 2.728h-5.774zM14.015 2.559c0.524 0.529 0.511 1.503 0.063 2.719-0.768-1.17-1.883-2.093-3.2-2.619 1.408-0.604 2.553-0.684 3.137-0.1zM1.461 15.113c-0.668-0.669-0.467-2.072 0.394-3.763 0.536 1.504 1.581 2.767 2.927 3.581-1.491 0.677-2.712 0.792-3.321 0.182z"
    }
  }]
};
exports.IE = IE;
var edge = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.241 7.103c0.469-3.7 2.994-7.056 7.519-7.103 2.731 0.053 4.978 1.291 6.316 3.65 0.672 1.231 0.881 2.525 0.925 3.953v1.678h-10.041c0.047 4.141 6.094 4 8.697 2.175v3.372c-1.525 0.916-4.984 1.734-7.662 0.681-2.281-0.856-3.906-3.244-3.897-5.541-0.075-2.978 1.481-4.95 3.897-6.072-0.513 0.634-0.903 1.334-1.106 2.547h5.669c0 0 0.331-3.388-3.209-3.388-3.338 0.116-5.744 2.056-7.106 4.047v0z"
    }
  }]
};
exports.edge = edge;
var safari = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8 0c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zM14.975 7.388l-0.016-0.166c0.003 0.056 0.009 0.109 0.016 0.166zM13.881 4.2l-0.113-0.169c0.037 0.056 0.075 0.112 0.113 0.169zM13.447 3.603l-0.069-0.084c0.025 0.028 0.047 0.056 0.069 0.084zM12.478 2.619l-0.084-0.069c0.031 0.025 0.056 0.047 0.084 0.069zM11.969 2.231l-0.169-0.112c0.056 0.038 0.113 0.075 0.169 0.112zM8.778 1.044l-0.169-0.016c0.056 0.003 0.113 0.009 0.169 0.016zM7.388 1.025l-0.169 0.016c0.056-0.003 0.112-0.009 0.169-0.016zM4.2 2.119l-0.169 0.112c0.056-0.038 0.112-0.075 0.169-0.112zM3.603 2.553l-0.081 0.066c0.028-0.022 0.053-0.044 0.081-0.066zM2.619 3.522l-0.069 0.084c0.025-0.028 0.047-0.056 0.069-0.084zM2.231 4.031l-0.112 0.169c0.038-0.056 0.075-0.112 0.112-0.169zM1.044 7.222l-0.016 0.169c0.003-0.056 0.009-0.112 0.016-0.169zM1.025 8.613l0.016 0.169c-0.003-0.056-0.009-0.113-0.016-0.169zM2.119 11.797l0.112 0.169c-0.038-0.053-0.075-0.109-0.112-0.169zM2.25 11.994l1.247-0.834-0.138-0.209-1.247 0.834c-0.566-0.878-0.938-1.887-1.063-2.975l0.747-0.075-0.025-0.25-0.747 0.075c-0.012-0.144-0.019-0.291-0.022-0.438h1.5v-0.25h-1.5c0.003-0.147 0.009-0.291 0.022-0.438l0.747 0.072 0.025-0.25-0.747-0.072c0.125-1.088 0.5-2.097 1.066-2.975l1.247 0.834 0.138-0.209-1.25-0.828c0.084-0.119 0.169-0.237 0.259-0.35l0.578 0.475 0.159-0.194-0.578-0.475c0.094-0.112 0.194-0.219 0.294-0.325l1.059 1.059 0.178-0.178-1.059-1.059c0.106-0.1 0.212-0.2 0.322-0.294l0.475 0.581 0.194-0.159-0.475-0.578c0.116-0.091 0.231-0.178 0.35-0.263l0.834 1.247 0.209-0.138-0.834-1.247c0.878-0.566 1.888-0.938 2.975-1.063l0.075 0.747 0.25-0.025-0.075-0.747c0.144-0.012 0.291-0.019 0.438-0.022v1.5h0.25v-1.5c0.147 0.003 0.291 0.009 0.438 0.022l-0.072 0.747 0.25 0.025 0.072-0.747c1.088 0.125 2.097 0.5 2.975 1.066l-0.834 1.247 0.209 0.138 0.834-1.247c0.119 0.084 0.238 0.169 0.35 0.259l-0.475 0.578 0.194 0.159 0.475-0.578c0.113 0.094 0.219 0.194 0.325 0.294l-0.4 0.391-5.469 3.647-3.647 5.469-0.391 0.391c-0.1-0.106-0.2-0.213-0.294-0.322l0.578-0.475-0.159-0.194-0.578 0.475c-0.091-0.113-0.175-0.231-0.259-0.35zM2.619 12.478c-0.022-0.028-0.044-0.053-0.066-0.081l0.066 0.081zM3.522 13.381l0.081 0.066c-0.028-0.022-0.053-0.044-0.081-0.066zM4.031 13.766l0.169 0.113c-0.056-0.034-0.112-0.072-0.169-0.113zM7.222 14.956l0.169 0.016c-0.056-0.003-0.112-0.009-0.169-0.016zM8.613 14.975l0.166-0.016c-0.056 0.003-0.109 0.009-0.166 0.016zM11.8 13.881l0.169-0.113c-0.056 0.037-0.113 0.075-0.169 0.113zM12.397 13.447l0.084-0.069c-0.028 0.025-0.056 0.047-0.084 0.069zM12.944 12.956l0.012-0.012c-0.003 0.003-0.009 0.009-0.012 0.012zM13.381 12.478l0.069-0.084c-0.025 0.028-0.047 0.056-0.069 0.084zM13.491 12.344l-0.578-0.475-0.159 0.194 0.578 0.475c-0.094 0.113-0.194 0.219-0.294 0.325l-1.059-1.059-0.178 0.178 1.059 1.059c-0.106 0.1-0.213 0.2-0.322 0.294l-0.475-0.581-0.194 0.159 0.475 0.578c-0.116 0.091-0.231 0.178-0.35 0.262l-0.834-1.247-0.209 0.137 0.834 1.247c-0.878 0.566-1.887 0.938-2.975 1.063l-0.075-0.747-0.25 0.025 0.075 0.747c-0.144 0.012-0.291 0.019-0.438 0.022v-1.5h-0.25v1.5c-0.147-0.003-0.291-0.009-0.438-0.022l0.072-0.747-0.25-0.025-0.072 0.747c-1.088-0.125-2.097-0.5-2.975-1.066l0.834-1.247-0.209-0.137-0.828 1.247c-0.119-0.084-0.237-0.169-0.35-0.259l0.475-0.578-0.194-0.159-0.475 0.578c-0.112-0.094-0.219-0.194-0.325-0.294l0.394-0.391 5.469-3.647 3.647-5.469 0.391-0.391c0.1 0.106 0.2 0.212 0.294 0.322l-0.578 0.475 0.159 0.194 0.578-0.475c0.091 0.116 0.178 0.231 0.262 0.35l-1.247 0.834 0.137 0.209 1.247-0.834c0.566 0.878 0.938 1.888 1.063 2.975l-0.747 0.075 0.025 0.25 0.747-0.075c0.012 0.144 0.019 0.291 0.022 0.438h-1.5v0.25h1.5c-0.003 0.147-0.009 0.291-0.022 0.438l-0.747-0.072-0.025 0.25 0.747 0.072c-0.125 1.088-0.5 2.097-1.066 2.975l-1.247-0.834-0.137 0.209 1.247 0.834c-0.081 0.113-0.169 0.228-0.259 0.344zM14.975 8.609c-0.006 0.056-0.009 0.113-0.016 0.169l0.016-0.169zM13.881 11.8c-0.037 0.056-0.075 0.113-0.113 0.169l0.113-0.169z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.758 1.111l0.293 1.471-0.245 0.049-0.293-1.471 0.245-0.049z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.245 14.89l-0.293-1.471 0.245-0.049 0.293 1.471-0.245 0.049z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.088 1.264l0.218 0.718-0.239 0.073-0.218-0.718 0.239-0.073z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.913 14.733l-0.218-0.718 0.239-0.073 0.218 0.718-0.239 0.073z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.438 1.486l0.574 1.386-0.231 0.096-0.574-1.386 0.231-0.096z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.564 14.515l-0.574-1.386 0.231-0.096 0.574 1.386-0.231 0.096z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.588 1.885l0.22-0.118 0.354 0.661-0.22 0.118-0.354-0.661z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.408 14.114l-0.22 0.118-0.354-0.661 0.22-0.118 0.354 0.661z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.884 4.591l0.662 0.353-0.118 0.221-0.661-0.353 0.118-0.221z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.113 11.409l-0.662-0.353 0.118-0.22 0.662 0.353-0.118 0.22z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.872 6.010l-1.386-0.574 0.096-0.231 1.386 0.574-0.096 0.231z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.13 9.989l1.386 0.574-0.096 0.231-1.386-0.574 0.096-0.231z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.337 5.85l0.718 0.218-0.073 0.239-0.718-0.218 0.073-0.239z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.661 10.151l-0.718-0.218 0.073-0.239 0.718 0.218-0.073 0.239z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.157 6.512l1.471 0.293-0.049 0.245-1.471-0.293 0.049-0.245z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.84 9.488l-1.471-0.293 0.049-0.245 1.471 0.293-0.049 0.245z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.109 9.243l1.471-0.293 0.049 0.245-1.471 0.293-0.049-0.245z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.888 6.757l-1.471 0.293-0.049-0.245 1.471-0.293 0.049 0.245z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.265 9.914l0.718-0.218 0.073 0.239-0.718 0.218-0.073-0.239z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.734 6.089l-0.718 0.218-0.073-0.239 0.718-0.218 0.073 0.239z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.58 10.796l-0.096-0.231 1.386-0.574 0.096 0.231-1.386 0.574z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.419 5.207l0.096 0.231-1.386 0.574-0.096-0.231 1.386-0.574z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M1.888 11.41l-0.118-0.22 0.661-0.354 0.118 0.22-0.661 0.354z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.116 4.59l0.118 0.22-0.661 0.354-0.118-0.22 0.661-0.354z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.811 14.232l-0.22-0.118 0.354-0.661 0.22 0.118-0.354 0.661z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.189 1.767l0.22 0.118-0.353 0.661-0.22-0.118 0.353-0.661z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.207 14.419l0.574-1.386 0.231 0.096-0.574 1.386-0.231-0.096z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.795 1.58l-0.574 1.386-0.231-0.096 0.574-1.386 0.231 0.096z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.088 14.735l-0.239-0.073 0.218-0.718 0.239 0.073-0.218 0.718z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.912 1.264l0.239 0.073-0.218 0.718-0.239-0.073 0.218-0.718z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M6.757 14.888l-0.245-0.049 0.293-1.471 0.245 0.049-0.293 1.471z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.243 1.109l0.245 0.049-0.293 1.471-0.245-0.049 0.293-1.471z"
    }
  }]
};
exports.safari = safari;
var opera = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M16 8v0 0c0 2.369-1.031 4.5-2.669 5.963-2.053 1-3.966 0.3-4.597-0.137 2.016-0.441 3.537-2.878 3.537-5.825s-1.522-5.384-3.537-5.828c0.634-0.438 2.547-1.137 4.597-0.138 1.637 1.466 2.669 3.597 2.669 5.966v0 0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M5.366 3.491c-0.884 1.044-1.456 2.587-1.494 4.322 0 0.003 0 0.372 0 0.378 0.038 1.731 0.613 3.275 1.497 4.319 1.147 1.491 2.853 2.434 4.759 2.434 1.172 0 2.269-0.356 3.206-0.978-1.419 1.266-3.287 2.034-5.334 2.034-0.128 0-0.256-0.003-0.381-0.009-4.241-0.2-7.619-3.7-7.619-7.991 0-4.419 3.581-8 8-8 0.009 0 0.019 0 0.031 0 2.037 0.006 3.894 0.775 5.303 2.038-0.938-0.622-2.034-0.981-3.206-0.981-1.906 0-3.612 0.944-4.763 2.434z"
    }
  }]
};
exports.opera = opera;
var filePdf = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M13.156 9.211c-0.213-0.21-0.686-0.321-1.406-0.331-0.487-0.005-1.073 0.038-1.69 0.124-0.276-0.159-0.561-0.333-0.784-0.542-0.601-0.561-1.103-1.34-1.415-2.197 0.020-0.080 0.038-0.15 0.054-0.222 0 0 0.339-1.923 0.249-2.573-0.012-0.089-0.020-0.115-0.044-0.184l-0.029-0.076c-0.092-0.212-0.273-0.437-0.556-0.425l-0.171-0.005c-0.316 0-0.573 0.161-0.64 0.403-0.205 0.757 0.007 1.889 0.39 3.355l-0.098 0.239c-0.275 0.67-0.619 1.345-0.923 1.94l-0.040 0.077c-0.32 0.626-0.61 1.157-0.873 1.607l-0.271 0.144c-0.020 0.010-0.485 0.257-0.594 0.323-0.926 0.553-1.539 1.18-1.641 1.678-0.032 0.159-0.008 0.362 0.156 0.456l0.263 0.132c0.114 0.057 0.234 0.086 0.357 0.086 0.659 0 1.425-0.821 2.48-2.662 1.218-0.396 2.604-0.726 3.819-0.908 0.926 0.521 2.065 0.883 2.783 0.883 0.128 0 0.238-0.012 0.327-0.036 0.138-0.037 0.254-0.115 0.325-0.222 0.139-0.21 0.168-0.499 0.13-0.795-0.011-0.088-0.081-0.196-0.157-0.271zM3.307 12.72c0.12-0.329 0.596-0.979 1.3-1.556 0.044-0.036 0.153-0.138 0.253-0.233-0.736 1.174-1.229 1.642-1.553 1.788zM7.476 3.12c0.212 0 0.333 0.534 0.343 1.035s-0.107 0.853-0.252 1.113c-0.12-0.385-0.179-0.992-0.179-1.389 0 0-0.009-0.759 0.088-0.759v0zM6.232 9.961c0.148-0.264 0.301-0.543 0.458-0.839 0.383-0.724 0.624-1.29 0.804-1.755 0.358 0.651 0.804 1.205 1.328 1.649 0.065 0.055 0.135 0.111 0.207 0.166-1.066 0.211-1.987 0.467-2.798 0.779v0zM12.952 9.901c-0.065 0.041-0.251 0.064-0.37 0.064-0.386 0-0.864-0.176-1.533-0.464 0.257-0.019 0.493-0.029 0.705-0.029 0.387 0 0.502-0.002 0.88 0.095s0.383 0.293 0.318 0.333v0z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.filePdf = filePdf;
var fileOpenoffice = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M10.785 7.37c-0.948-0.448-2.156-0.538-3.044 0.095 1.080-0.103 2.265 0.076 3.049 0.893 0.75-0.861 1.939-1.022 3.015-0.933-0.898-0.596-2.082-0.516-3.019-0.054v0zM10.401 9.465c-1.068-0.025-2.101 0.362-2.986 0.939-1.675-0.712-3.793-0.58-5.219 0.609 0.411-0.015 0.813-0.116 1.22-0.169 1.487-0.148 3.072 0.221 4.196 1.247 0.465-0.68 1.119-1.223 1.87-1.561 0.986-0.477 2.096-0.526 3.169-0.539-0.651-0.448-1.478-0.531-2.249-0.526z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.fileOpenoffice = fileOpenoffice;
var fileWord = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M9.997 7.436h0.691l-0.797 3.534-1.036-4.969h-1.665l-1.205 4.969-0.903-4.969h-1.741l1.767 7.998h1.701l1.192-4.73 1.066 4.73h1.568l2.025-7.998h-2.663v1.435z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.fileWord = fileWord;
var fileExcel = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M11.61 6h-2.114l-1.496 2.204-1.496-2.204h-2.114l2.534 3.788-2.859 4.212h3.935v-1.431h-0.784l0.784-1.172 1.741 2.603h2.194l-2.859-4.212 2.534-3.788z"
    }
  }, {
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"
    }
  }]
};
exports.fileExcel = fileExcel;
var libreoffice = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M8.354 0.354c-0.194-0.194-0.579-0.354-0.854-0.354h-6c-0.275 0-0.5 0.225-0.5 0.5v15c0 0.275 0.225 0.5 0.5 0.5h12c0.275 0 0.5-0.225 0.5-0.5v-9c0-0.275-0.159-0.659-0.354-0.854l-5.293-5.293zM13 15h-11v-14h5.487c0.046 0.008 0.131 0.043 0.169 0.070l5.274 5.274c0.027 0.038 0.062 0.123 0.070 0.169v8.487zM13.5 0h-3c-0.275 0-0.341 0.159-0.146 0.354l3.293 3.293c0.194 0.194 0.354 0.129 0.354-0.146v-3c0-0.275-0.225-0.5-0.5-0.5z"
    }
  }]
};
exports.libreoffice = libreoffice;
var htmlFive = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.946 0l1.284 14.4 5.762 1.6 5.777-1.602 1.286-14.398h-14.108zM12.26 4.71h-6.758l0.161 1.809h6.437l-0.485 5.422-3.623 1.004-3.618-1.004-0.247-2.774h1.773l0.126 1.41 1.967 0.53 0.004-0.001 1.968-0.531 0.204-2.29h-6.121l-0.476-5.341h8.847l-0.158 1.766z"
    }
  }]
};
exports.htmlFive = htmlFive;
var htmlFive2 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M0.946 0l1.284 14.4 5.762 1.6 5.777-1.602 1.286-14.398h-14.108zM12.668 13.482l-4.644 1.287v0.007l-0.012-0.004-0.012 0.004v-0.007l-4.644-1.287-1.098-12.304h11.508l-1.098 12.304zM10.168 8.284l-0.204 2.29-1.972 0.532-1.967-0.53-0.126-1.41h-1.773l0.247 2.774 3.626 1.003 3.615-1.003 0.485-5.422h-6.437l-0.161-1.809h6.758l0.158-1.766h-8.847l0.477 5.341z"
    }
  }]
};
exports.htmlFive2 = htmlFive2;
var css3 = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M2.381 0.758l-0.537 2.686h10.934l-0.342 1.735h-10.94l-0.53 2.686h10.933l-0.61 3.063-4.406 1.46-3.819-1.46 0.261-1.329h-2.686l-0.639 3.224 6.316 2.417 7.281-2.417 2.403-12.066z"
    }
  }]
};
exports.css3 = css3;
var git = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M15.698 7.287l-6.986-6.986c-0.402-0.402-1.055-0.402-1.457 0l-1.623 1.623 1.221 1.221c0.196-0.094 0.415-0.146 0.647-0.146 0.828 0 1.5 0.672 1.5 1.5 0 0.232-0.053 0.451-0.146 0.647l2 2c0.196-0.094 0.415-0.146 0.647-0.146 0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5c0-0.232 0.053-0.451 0.146-0.647l-2-2c-0.048 0.023-0.097 0.043-0.147 0.061v4.171c0.583 0.206 1 0.761 1 1.414 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.653 0.417-1.208 1-1.414v-4.171c-0.583-0.206-1-0.761-1-1.414 0-0.232 0.053-0.451 0.146-0.647l-1.221-1.221-4.623 4.623c-0.402 0.403-0.402 1.055 0 1.458l6.986 6.986c0.402 0.402 1.054 0.402 1.457 0l6.953-6.953c0.402-0.403 0.402-1.055-0-1.458z"
    }
  }]
};
exports.git = git;
var codepen = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.777 5.751l-7-4.667c-0.168-0.112-0.387-0.112-0.555 0l-7 4.667c-0.139 0.093-0.223 0.249-0.223 0.416v4.667c0 0.167 0.084 0.323 0.223 0.416l7 4.667c0.084 0.056 0.181 0.084 0.277 0.084s0.193-0.028 0.277-0.084l7-4.667c0.139-0.093 0.223-0.249 0.223-0.416v-4.667c0-0.167-0.084-0.323-0.223-0.416zM7.5 10.232l-2.599-1.732 2.599-1.732 2.599 1.732-2.599 1.732zM8 5.899v-3.465l5.599 3.732-2.599 1.732-3-2zM7 5.899l-3 2-2.599-1.732 5.599-3.732v3.465zM3.099 8.5l-2.099 1.399v-2.798l2.099 1.399zM4 9.101l3 2v3.465l-5.599-3.732 2.599-1.732zM8 11.101l3-2 2.599 1.732-5.599 3.732v-3.465zM11.901 8.5l2.099-1.399v2.798l-2.099-1.399z"
    }
  }]
};
exports.codepen = codepen;
var svg = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M14.5 6.5c-0.444 0-0.843 0.193-1.118 0.5h-2.968l2.099-2.099c0.411 0.023 0.83-0.123 1.144-0.437 0.586-0.586 0.586-1.536 0-2.121s-1.536-0.586-2.121 0c-0.314 0.314-0.46 0.733-0.437 1.144l-2.099 2.099v-2.968c0.307-0.275 0.5-0.674 0.5-1.118 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.444 0.193 0.843 0.5 1.118v2.968l-2.099-2.099c0.023-0.411-0.123-0.83-0.437-1.144-0.586-0.586-1.536-0.586-2.121 0s-0.586 1.536 0 2.121c0.314 0.314 0.733 0.46 1.144 0.437l2.099 2.099h-2.968c-0.275-0.307-0.674-0.5-1.118-0.5-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5c0.444 0 0.843-0.193 1.118-0.5h2.968l-2.099 2.099c-0.411-0.023-0.83 0.123-1.144 0.437-0.586 0.586-0.586 1.536 0 2.121s1.536 0.586 2.121 0c0.314-0.314 0.46-0.733 0.437-1.144l2.099-2.099v2.968c-0.307 0.275-0.5 0.674-0.5 1.118 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.444-0.193-0.843-0.5-1.118v-2.968l2.099 2.099c-0.023 0.411 0.123 0.83 0.437 1.144 0.586 0.586 1.536 0.586 2.121 0s0.586-1.536 0-2.121c-0.314-0.314-0.733-0.46-1.144-0.437l-2.099-2.099h2.968c0.275 0.307 0.674 0.5 1.118 0.5 0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5z"
    }
  }]
};
exports.svg = svg;
var IcoMoon = {
  "viewBox": "0 0 16 16",
  "children": [{
    "name": "path",
    "attribs": {
      "fill": "#000000",
      "d": "M4.055 8c0-1.022 0.829-1.851 1.851-1.851s1.851 0.829 1.851 1.851c0 1.022-0.829 1.851-1.851 1.851s-1.851-0.829-1.851-1.851zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM5.928 14.989c-2.406-1.4-4.023-4.005-4.023-6.989s1.617-5.589 4.023-6.989c2.406 1.399 4.025 4.005 4.025 6.989s-1.618 5.589-4.025 6.989z"
    }
  }]
};
exports.IcoMoon = IcoMoon;

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

/***/ }),

/***/ "./node_modules/react-icons-kit/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-icons-kit/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _Icon.Icon;
  }
});
Object.defineProperty(exports, "withBaseIcon", {
  enumerable: true,
  get: function get() {
    return _Icon.withBaseIcon;
  }
});
Object.defineProperty(exports, "horizontalCenter", {
  enumerable: true,
  get: function get() {
    return _horizontalCenter.horizontalCenter;
  }
});
exports.default = void 0;

var _Icon = __webpack_require__(/*! ./Icon */ "./node_modules/react-icons-kit/Icon.js");

var _horizontalCenter = __webpack_require__(/*! ./horizontalCenter */ "./node_modules/react-icons-kit/horizontalCenter.js");

var _default = _Icon.Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-icons-kit/md/ic_menu.js":
/*!****************************************************!*\
  !*** ./node_modules/react-icons-kit/md/ic_menu.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ic_menu = void 0;
var ic_menu = {
  "viewBox": "0 0 24 24",
  "children": [{
    "name": "path",
    "attribs": {
      "d": "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    }
  }]
};
exports.ic_menu = ic_menu;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/upper-case/upper-case.js":
/*!***********************************************!*\
  !*** ./node_modules/upper-case/upper-case.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/elements/alpha-displayer/AlphaDisplayer */ "./components/elements/alpha-displayer/AlphaDisplayer.js");
/* harmony import */ var _components_elements_MakersEntry_MakersEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/elements/MakersEntry/MakersEntry */ "./components/elements/MakersEntry/MakersEntry.js");
/* harmony import */ var _components_elements_RegionsEntry_RegionsEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/RegionsEntry/RegionsEntry */ "./components/elements/RegionsEntry/RegionsEntry.js");
/* harmony import */ var _components_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_widgets_product_ProductGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/widgets/product/ProductGrid */ "./components/widgets/product/ProductGrid.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var images = {
  cover01: "images/Articles/cover-01.jpg",
  cover02: "images/Articles/cover-02.jpg",
  cover1: "images/Articles/cover-1.jpg",
  cover2: "images/Articles/cover-2.jpg",
  cover3: "images/Articles/cover-3.jpg",
  cover4: "images/Articles/cover-4.jpg",
  cover5: "images/Articles/cover-5.jpg",
  cover6: "images/Articles/cover-6.jpg",
  cover7: "images/Articles/cover-7.jpg",
  cover8: "images/Articles/cover-8.jpg",
  cover9: "images/Articles/cover-9.jpg"
};

var hello = function hello(_ref) {
  var _ref$cookies = _ref.cookies,
      cookies = _ref$cookies === void 0 ? {} : _ref$cookies;
  console.log(cookies);

  var contentDOM = __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "HELLO");

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "MorMade"), __jsx("link", {
    rel: "icon",
    href: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: images.cover01,
    title: "Dresses made to last",
    description: "Timeless designs made from recycled materials",
    buttonText: "SHOP NOW",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: images.cover02,
    title: "Dresses made to last",
    description: "Timeless designs made from recycled materials",
    buttonText: "SHOP NOW",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(_components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: images.cover02,
    title: "Dresses made to last",
    description: "Timeless designs made from recycled materials",
    buttonText: "SHOP NOW",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(_components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: images.cover7,
    title: "Dresses made to last",
    description: "Timeless designs made from recycled materials",
    buttonText: "SHOP NOW",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))), __jsx(_components_elements_MakersEntry_MakersEntry__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_components_elements_RegionsEntry_RegionsEntry__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (hello);

/***/ }),

/***/ 1:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5C1337%5CDocuments%5CWorkSpace%5Cecomart%5Cdev%5CmormadeWebSite%5Cpages%5Cindex.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5C1337%5CDocuments%5CWorkSpace%5Cecomart%5Cdev%5CmormadeWebSite%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5C1337%5CDocuments%5CWorkSpace%5Cecomart%5Cdev%5CmormadeWebSite%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map