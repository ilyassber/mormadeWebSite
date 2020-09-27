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
  }, description), __jsx("div", {
    className: "hidden md:flex justify-center items-center px-5 py-2 mb-10 mt-2 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: textStyle.buttonStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 107
    }
  }, buttonText))));
}

/***/ }),

/***/ "./components/elements/bar/FromBar.js":
/*!********************************************!*\
  !*** ./components/elements/bar/FromBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logo */ "./components/logo/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\FromBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FromBar = function FromBar(props) {
  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-gray-900 to-gray-900 flex felx-wrap box-content overflow-hidden pt-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (FromBar);

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
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
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
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
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
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 "))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomeBar);

/***/ }),

/***/ "./components/elements/blackFocusScreen/BlackFocusScreen.js":
false,

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
/* harmony import */ var _bar_FromBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bar/FromBar */ "./components/elements/bar/FromBar.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function NavBar(_ref) {
  var changeMenuClicked = _ref.changeMenuClicked,
      categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links,
      home = _ref.home;
  return __jsx("nav", {
    className: "z-10 fixed flex flex-col w-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "relative flex w-4/5 mx-auto content-center h-12 px-2 mt-4 mb-2",
    changeMenuClicked: changeMenuClicked,
    home: home,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "hidden md:flex h-12 w-full px-2",
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
    max_shown: max_shown,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }));
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
      home = _ref.home,
      logo = _ref.logo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openSearch = _useState[0],
      setOpenSearch = _useState[1]; // search icon for small screens -> expanded or closed


  var openSearchClickHandler = function openSearchClickHandler() {
    setOpenSearch(!openSearch); // open/close the search component for small screens
  };

  var MenuContainer = function MenuContainer(_ref2) {
    var style = _ref2.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "m-1 md:hidden cursor-pointer text-gray-700",
      onClick: changeMenuClicked,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__["ic_menu"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
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
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_5__["Brand"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }));
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "absolute h-full flex flex-wrap content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_5__["Intro"], {
    className: "h-auto invisible md:visible ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx(MenuContainer, {
    style: "".concat(openSearch ? "hidden" : "flex", " flex items-center justify-start h-full md:flex-1 h-full"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(SiteNameContainer, {
    style: "".concat(openSearch ? "hidden" : "flex", " md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex flex-row md:flex-1 justify-center md:justify-end items-center w-full h-full",
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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

  var SearchIcon = function SearchIcon() {
    return __jsx("form", {
      className: "md:hidden flex justify-end h-8 w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: openSearch ? searchIconStyle.openStyle : searchIconStyle.closeStyle,
      onClick: openSearchClickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: openSearch ? react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__["cross"] : react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    })), openSearch && __jsx("button", {
      className: "h-full w-8 outline-none focus:outline-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 28
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__["search"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 91
      }
    })), __jsx("input", {
      className: openSearch ? inputStyle.openStyle : inputStyle.closeStyle,
      type: "text",
      placeholder: "search",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }));
  };

  var NewIcon = function NewIcon(_ref2) {
    var className = _ref2.className,
        src = _ref2.src;
    return __jsx("div", {
      className: "inline m-2 md:m-2 flex flex-wrap content-center cursor-pointer text-gray-700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: className,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "h-full w-full flex items-center justify-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }))));
  };

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(SearchIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "".concat(!openSearch ? "flex" : "hidden", " flex-row h-full"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/loop.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/avatar.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/heart.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/cart.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IconsContainer);

/***/ }),

/***/ "./components/elements/searchGate/searchGate.js":
false,

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

function BlackFocusScreen(_ref) {
  var display = _ref.display,
      onClick = _ref.onClick;
  return __jsx("div", {
    className: display ? "absolute z-20 top-0 left-0 w-full h-full transition ease-out duration-500 bg-gray-900 bg-opacity-50" : "z-20 bg-opacity-0 bg-gray-900",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  });
}

function Layout(_ref2) {
  var children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuClicked = _useState[0],
      setMenuClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    page: "HOME",
    path: "/"
  }),
      selectedPage = _useState2[0],
      setSelectedPage = _useState2[1];

  var clickMenuIcon = function clickMenuIcon() {
    setMenuClicked(!menuClicked);
  };

  var selectPage = function selectPage(link) {
    setSelectedPage(link);
  };

  return __jsx("div", {
    className: "flex flex-col w-full bg-xw-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, menuClicked && __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuClick: menuClicked,
    changeMenuClicked: clickMenuIcon,
    currentPage: selectedPage,
    changeCurrentPage: selectPage,
    categories: categories,
    max_shown: 8,
    links: links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }), menuClicked && __jsx(BlackFocusScreen, {
    display: menuClicked,
    onClick: clickMenuIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }), __jsx(_elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeMenuClicked: clickMenuIcon,
    logo: "/logo.png",
    categories: categories,
    max_shown: 8,
    links: links,
    home: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "w-full h-48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/logo/Intro.js":
/*!**********************************!*\
  !*** ./components/logo/Intro.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\logo\\Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Intro = function Intro(props) {
  if (props.type == 'white') {
    return __jsx("div", {
      className: props.className,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "icons/morocco.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, " to world wide")));
  } else {
    return __jsx("div", {
      className: props.className,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "icons/morocco.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, " to world wide")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./components/logo/index.js":
/*!**********************************!*\
  !*** ./components/logo/index.js ***!
  \**********************************/
/*! exports provided: Brand, Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand */ "./components/logo/Brand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return _Brand__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro */ "./components/logo/Intro.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return _Intro__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/widgets/search/searchWidget.js":
false,

/***/ "./node_modules/react-icons-kit/ikons/close.js":
false

})
//# sourceMappingURL=index.js.891fd757a46ac2428803.hot-update.js.map