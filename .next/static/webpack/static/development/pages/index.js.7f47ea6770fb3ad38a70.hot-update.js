webpackHotUpdate("static\\development\\pages\\index.js",{

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

  var max_shown = _ref.max_shown,
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
    className: "hidden md:block z-50 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center w-full shadow-sm bg-white",
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
      className: "flex-shrink p-4 cursor-pointer text-yantramanav text-sm font-black hover:text-gray-500",
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

/***/ })

})
//# sourceMappingURL=index.js.7f47ea6770fb3ad38a70.hot-update.js.map