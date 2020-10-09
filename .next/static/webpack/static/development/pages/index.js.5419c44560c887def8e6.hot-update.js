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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sousCategoriesBar */ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logo */ "./components/logo/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\categoriesBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SiteNameContainer = function SiteNameContainer(_ref) {
  var style = _ref.style;
  return __jsx("div", {
    className: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_2__["Brand"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }));
};

function CategoriesBar(_ref2) {
  var _this2 = this;

  var style = _ref2.style,
      max_shown = _ref2.max_shown,
      categories = _ref2.categories,
      brandNameStyle = _ref2.brandNameStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    categorie: null
  }),
      openCategorie = _useState[0],
      setOpenCategorie = _useState[1]; // open/close + the categorie to be shown in sougategories 


  var categorieRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // reference on "categories list" : to track outside click 

  console.log(" Categorie RENDER"); // load clicked categorie and set sousCategories to open  

  var clickOnCategorie = function clickOnCategorie(categorie) {
    setOpenCategorie({
      open: true,
      categorie: categorie
    });
    console.log(" openCategorie : ->  ", openCategorie);
  }; // add eventListener to track clicks : close souscategories bar when an outside click was detected  


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function categorieClickHandler(event) {
      if (categorieRef.current && !categorieRef.current.contains(event.target)) setOpenCategorie({
        open: false,
        categorie: null
      });
    }

    document.addEventListener("mousedown", categorieClickHandler);
    return function () {
      document.removeEventListener("mousedown", categorieClickHandler);
    };
  }, []);
  return __jsx("div", {
    ref: categorieRef,
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between h-13 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row justify-start items-center h-full flex-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(SiteNameContainer, {
    style: brandNameStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  })), __jsx("ul", {
    className: "flex flex-row justify-center items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, categories.map(function (categorie, index) {
    return index < max_shown && __jsx("li", {
      key: index,
      className: "flex px-4 h-full justify-center items-center cursor-pointer font-lato text-base font-black ".concat(openCategorie.categorie && openCategorie.categorie === categorie ? "text-yellow-600" : "text-gray-900 hover:text-gray-700"),
      onClick: function onClick() {
        return clickOnCategorie(categorie);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 48
      }
    }, categorie.name.toUpperCase());
  })), __jsx("div", {
    className: "flex flex-1 h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), openCategorie.open && __jsx(_sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeClickHandler: function closeClickHandler() {
      return setOpenCategorie({
        open: false,
        categorie: null
      });
    },
    categorie: openCategorie.categorie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 36
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.5419c44560c887def8e6.hot-update.js.map