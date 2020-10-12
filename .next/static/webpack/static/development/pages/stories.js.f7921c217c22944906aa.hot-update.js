webpackHotUpdate("static\\development\\pages\\stories.js",{

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
/* harmony import */ var _upperNav_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upperNav/iconsContainer/iconsContainer */ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ikons/close */ "./node_modules/react-icons-kit/ikons/close.js");
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\webweb\\components\\elements\\nav-bar\\categoriesBar\\sousCategoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SousCategoriesBar(_ref) {
  var _this = this;

  var categorie = _ref.categorie,
      closeClickHandler = _ref.closeClickHandler;

  // close icon
  var CloseIcon = function CloseIcon() {
    return __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      className: "cursor-pointer text-gray-800 ",
      onClick: closeClickHandler,
      size: 20,
      icon: react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__["close"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    });
  };

  var SousCategoriesContent = function SousCategoriesContent() {
    return __jsx("div", {
      className: "flex justify-center w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "flex flex-col items-center justify-start flex-1 flex-shrink-0 m-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("ul", {
      className: " w-6/12 flex flex-col items-start justify-start ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Sous Categories"), __jsx("li", {
      key: -1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }), categorie && categorie.sous_tags.map(function (sous_tag, index) {
      return __jsx("li", {
        className: "ml-2 cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, sous_tag);
    }))), __jsx("div", {
      className: "flex flex-col justify-start items-center flex-1 m-5 border-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "HIGH LIGHT"), __jsx("div", {
      className: " m-5  overflow-hidden shadow-2xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, "no image to be shown"))));
  };

  var BlankContent = function BlankContent() {
    return __jsx("div", {
      className: "relative flex flex-col justify-start items-center w-11/12 max-w-7xl bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "flex flex-row justify-end items-center w-full px-2 h-12 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(CloseIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "flex flex-row justify-center items-center w-full px-2 h-12 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: " animate-smouthAppearanceS font-lato text-sm font-black tracking-widest",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, categorie.name.toUpperCase())), __jsx("div", {
      className: "flex flex-col justify-center items-center w-full h-120",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, categorie.tag), __jsx("div", {
      className: "flex flex-col justify-start items-center m-5 h-64 w-10/12 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "m-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "No content available"), __jsx("h1", {
      className: "text-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "Stay Tuned"))));
  };

  return __jsx("div", {
    className: " animate-smouthAppearance absolute flex flex-col items-center w-full  py-5 border-t border-gray-500 bg-white overflow-y-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(BlankContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SousCategoriesBar);

/***/ })

})
//# sourceMappingURL=stories.js.f7921c217c22944906aa.hot-update.js.map