module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\alpha-displayer\\AlphaDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function AlphaDisplayer({
  image,
  title,
  description,
  buttonText,
  clickAction
}) {
  const textStyle = {
    titleStyle: "font-kumbhsans font-bold text-lg md:text-2xl  text-center break-words text-white",
    descriptionStyle: "mb-2 md:m-2 tracking-tight md:tracking-widest font-medium md:font-extrabold text-xs md:text-base text-center text-white",
    buttonStyle: "tracking-widest font-yantramanav text-sm font-bold "
  };
  return __jsx("div", {
    onClick: clickAction,
    className: "relative flex justify-center my-5 cursor-pointer overflow-hidden",
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
/*!********************************************!*\
  !*** ./components/elements/bar/FromBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logo */ "./components/logo/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\FromBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FromBar = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-gray-900 to-gray-900 flex felx-wrap box-content overflow-hidden pt-1 pb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["Intro"], {
    type: "Black",
    __self: undefined,
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

/***/ "./components/elements/bar/NavMenu.js":
/*!********************************************!*\
  !*** ./components/elements/bar/NavMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/authentication */ "./services/authentication/authentication.js");
/* harmony import */ var _services_hooks_onClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hooks/onClickOutside */ "./services/hooks/onClickOutside.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\NavMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NavMenu = props => {
  let user = props.user ? JSON.parse(props.user) : null; //let user = null

  let object = __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-auto flex flex-col bg-white shadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-32 flex flex-col m-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, user != null ? __jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-900 text-sm text-left hover:underline my-2",
    type: "button",
    onClick: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, user.username) : __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_3__["BtnBbw"], {
    className: "w-auto h-12 mt-2 mb-2",
    value: "SIGN IN",
    onClick: () => {
      window.location = '/auth';
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }), user != null ? __jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-700 text-xs text-left hover:underline my-2",
    type: "button",
    onClick: () => {
      Object(_services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__["authenticate"])({}, "logout", js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('csrftoken'));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Sign out") : null)));

  const focusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const onBlurHandler = event => {
    if (event.type != 'keydown') {
      props.callBack();
    } else if (event.keyCode == 27) {
      props.callBack();
    }
  };

  Object(_services_hooks_onClickOutside__WEBPACK_IMPORTED_MODULE_2__["onClickOutside"])(focusRef, onBlurHandler);

  let contentWithoutMenu = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));

  let contentWithMenu = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: focusRef,
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, object));

  if (props.drop == true) {
    return contentWithMenu;
  } else {
    return contentWithoutMenu;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ }),

/***/ "./components/elements/bar/Navbar.js":
/*!*******************************************!*\
  !*** ./components/elements/bar/Navbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logo/Brand */ "./components/logo/Brand.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user */ "./components/user/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./components/elements/bar/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Navbar = props => {
  const {
    0: menuDrop,
    1: setMenuDrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let status = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let userData = localStorage.getItem('_user');
    console.log(userData);
    setUser(userData);
  }, []);

  const dropMenuOn = () => {
    status = true;
    console.log(status);

    if (menuDrop == true) {
      setMenuDrop(false);
    } else {
      setMenuDrop(true);
    }
  };

  const dropMenuOff = () => {
    if (status) {
      status = false;
    } else {
      console.log('cancel');
      setMenuDrop(false);
    }
  };

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fixed z-50 h-12 w-full flex bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_logo_Brand__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "h-full w-auto ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "w-full flex flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    className: "h-full w-auto mr-6",
    username: "ilyass",
    onClick: dropMenuOn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }))), __jsx(___WEBPACK_IMPORTED_MODULE_3__["NavMenu"], {
    className: "z-50",
    user: user,
    cookies: props.cookies,
    drop: menuDrop,
    callBack: dropMenuOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/elements/bar/SideBar.js":
/*!********************************************!*\
  !*** ./components/elements/bar/SideBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons_BtnTtb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons/BtnTtb */ "./components/graphics/buttons/BtnTtb.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\SideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sidebar = props => {
  const {
    0: clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.clicked);
  const btnsList = props.data.map(function (value) {
    if (value.id == clicked) {
      return __jsx(_graphics_buttons_BtnTtb__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-full h-auto",
        key: value.id,
        value: value.value,
        clicked: "true",
        onClick: () => {
          setClicked(value.id);
          props.onClick(value.id);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 20
        }
      });
    } else {
      return __jsx(_graphics_buttons_BtnTtb__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-full h-auto",
        key: value.id,
        value: value.value,
        clicked: "false",
        onClick: () => {
          setClicked(value.id);
          props.onClick(value.id);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }
      });
    }
  });

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full w-full m-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, btnsList));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/elements/bar/WelcomeBar.js":
/*!***********************************************!*\
  !*** ./components/elements/bar/WelcomeBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\WelcomeBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WelcomeBar = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-xw-300 via-white to-xw-300 border-b border-t border-gray-900 flex felx-wrap box-content overflow-hidden pt-1 pb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none",
    __self: undefined,
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

/***/ "./components/elements/bar/index.js":
/*!******************************************!*\
  !*** ./components/elements/bar/index.js ***!
  \******************************************/
/*! exports provided: Navbar, NavMenu, SideBar, WelcomeBar, FromBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/elements/bar/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMenu */ "./components/elements/bar/NavMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return _NavMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./components/elements/bar/SideBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return _SideBar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _WelcomeBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WelcomeBar */ "./components/elements/bar/WelcomeBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomeBar", function() { return _WelcomeBar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FromBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FromBar */ "./components/elements/bar/FromBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromBar", function() { return _FromBar__WEBPACK_IMPORTED_MODULE_4__["default"]; });







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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\blackFocusScreen\\BlackFocusScreen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function BlackFocusScreen({
  onClick
}) {
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

/***/ "./components/elements/discuss/LeaveMessage.js":
/*!*****************************************************!*\
  !*** ./components/elements/discuss/LeaveMessage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\discuss\\LeaveMessage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const LeaveMessage = props => {
  const {
    0: emailError,
    1: setEmailError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('LEAVE US A MESSAGE');
  const {
    0: reset,
    1: setReset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let email;
  let message;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handleMessageChange = event => {
    message = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email != null && email != '') {
      let data = {
        email: email,
        text: message
      };
      let content = {
        operation: 'register',
        data: querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(data)
      };
      Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(content), js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('csrftoken'), "http://localhost:8000" + '/api/messages/').then(response => {
        console.log(response);

        if (response.status === "error") {
          setWelcome('Something Wrong!');
          console.log('error');
        } else {
          setWelcome('THANK YOU!');
          setReset(true);
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      if (email == null || email == '') {
        setEmailError(true);
      }
    }
  };

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full flex flex-col items-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: " md:whitespace-no-wrap font-roboto font-black text-3xl text-white mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, welcome), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtField"], {
    reset: reset,
    disabled: reset,
    error: emailError,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: 10,
    placeholder: "EMAIL",
    placeholderColor: "white",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtArea"], {
    reset: reset,
    disabled: reset,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: "full",
    placeholder: "Message...",
    placeholderColor: "white",
    onChange: handleMessageChange,
    className: "w-full max-w-64 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "w-full h-auto flex flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], {
    disabled: reset,
    className: "w-full h-auto",
    borderColor: "white",
    bgColor: "transparent",
    textColor: "white",
    textSize: "sm",
    textWeight: "medium",
    hoverColor: "gray-900",
    disableColor: "gray-900",
    height: 10,
    value: "Send",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (LeaveMessage);

/***/ }),

/***/ "./components/elements/discuss/WaitList.js":
/*!*************************************************!*\
  !*** ./components/elements/discuss/WaitList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication/registerUser */ "./services/authentication/registerUser.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\discuss\\WaitList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WaitList = props => {
  const {
    0: emailError,
    1: setEmailError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('JOIN OUR NEWSLETTER');
  const {
    0: reset,
    1: setReset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let email;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email != null && email != '') {
      const data = {
        username: email.split('@')[0],
        email: email,
        role: 'wait_list'
      };
      Object(_services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__["registerUser"])(data, "wait_list", props.csrf).then(response => {
        if (response.status === "error") {
          setWelcome('Go Back Soon!');
          console.log('error');
        } else {
          setWelcome('THANK YOU, GO BACK SOON!');
          setReset(true);
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      if (email == null || email == '') {
        setEmailError(true);
      }

      if (num == null || num == '') {
        setNumError(true);
      }
    }
  };

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative max-w-screen-sm h-auto overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover",
    src: "/street-vendor-b.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "relative w-full h-auto p-6 justify-end text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "h-auto w-full font-roboto font-bold text-3xl text-left align-left mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "SOON"), __jsx("h3", {
    className: "h-auto w-full font-bold text-3xl text-right align-right mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, 'قريبا'), __jsx("span", {
    className: "h-auto w-full font-roboto font-light text-base text-center align-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, welcome), __jsx("div", {
    className: "w-full h-auto flex flex-wrap flex-col items-center mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    reset: reset,
    error: emailError,
    color: "white",
    textColor: "black",
    bgColor: "white",
    borderColor: "gray-500",
    focusColor: "gray-500",
    height: 10,
    placeholder: "ENTER YOUR EMAIL HERE",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-full h-full flex-1 content-end flex-wrap mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-10",
    weight: "bold",
    value: "JOIN US",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (WaitList);

/***/ }),

/***/ "./components/elements/discuss/index.js":
/*!**********************************************!*\
  !*** ./components/elements/discuss/index.js ***!
  \**********************************************/
/*! exports provided: WaitList, LeaveMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaitList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaitList */ "./components/elements/discuss/WaitList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitList", function() { return _WaitList__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LeaveMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveMessage */ "./components/elements/discuss/LeaveMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeaveMessage", function() { return _LeaveMessage__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/elements/footer/footer.js":
/*!**********************************************!*\
  !*** ./components/elements/footer/footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon */ "react-icons-kit/icomoon");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _discuss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discuss */ "./components/elements/discuss/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer({
  categories,
  max_shown,
  links
}) {
  const IconsContainer = () => __jsx("div", {
    className: "flex flex-row mx-2 text-gray-300 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 20,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["facebook2"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 33
    }
  })), __jsx("a", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 20,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["instagram"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  })), __jsx("a", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 20,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["twitter"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  })));

  const CategoriesCard = () => __jsx("div", {
    className: "my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1  flex-col justify-start items-start sm:items-start ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "CATEGORIES"), __jsx("ul", {
    className: "flex flex-col justify-start items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, categories.map((categorie, index) => index < max_shown && __jsx("li", {
    key: index,
    className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 44
    }
  }, categorie.tag.toLowerCase()))));

  const EntriesCard = () => __jsx("div", {
    className: "my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1 flex-col justify-start items-start sm:items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "ENTRIES"), __jsx("ul", {
    className: "flex flex-col justify-start items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, links.map((link, indx) => __jsx("li", {
    className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
    key: indx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 48
    }
  }, link.page.toLowerCase()))))));

  return __jsx("div", {
    className: "flex justify-center w-full bg-black shadow-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-10/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center w-full h-auto mt-24 mb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-white font-bold text-2xl font-kumbhsans cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "MORMADE |"), __jsx("br", {
    className: "md:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 78
    }
  }), " MOROCCO")), __jsx("div", {
    className: "my-10 flex flex-col lg:flex-row justify-start lg:justify-around items-center w-full h-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-5 sm:mb-10 flex flex-1 flex-col sm:flex-row items-start sm:justify-center lg:justify-between  w-full  ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(CategoriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }), __jsx(EntriesCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mx-5 mt-5 w-full flex flex-1 sm:justify-center items-center md:w-auto text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_discuss__WEBPACK_IMPORTED_MODULE_4__["LeaveMessage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 28
    }
  }))), __jsx("div", {
    className: "flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(IconsContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./components/elements/list/ArticleList.js":
/*!*************************************************!*\
  !*** ./components/elements/list/ArticleList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\list\\ArticleList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ArticleList = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto flex flex-col items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, props.data));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sousCategoriesBar */ "./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logo */ "./components/logo/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\categoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SiteNameContainer = ({
  style
}) => __jsx("div", {
  className: style,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx(_logo__WEBPACK_IMPORTED_MODULE_2__["Brand"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}));

function CategoriesBar({
  style,
  max_shown,
  categories,
  brandNameStyle,
  changeWelcomeBarAppearance
}) {
  const {
    0: openCategorie,
    1: setOpenCategorie
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    categorie: null
  }); // open/close + the categorie to be shown in sougategories 

  const categorieRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // reference on "categories list" : to track outside click 

  console.log(" Categorie RENDER"); // load clicked categorie and set sousCategories to open  

  const clickOnCategorie = categorie => {
    changeWelcomeBarAppearance(false);
    setOpenCategorie({
      open: true,
      categorie: categorie
    });
    console.log(" openCategorie : ->  ", openCategorie);
  }; // add eventListener to track clicks : close souscategories bar when an outside click was detected  


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function categorieClickHandler(event) {
      if (categorieRef.current && !categorieRef.current.contains(event.target)) {
        setOpenCategorie({
          open: false,
          categorie: null
        });
        changeWelcomeBarAppearance(true);
      }
    }

    document.addEventListener("mousedown", categorieClickHandler);
    return () => {
      document.removeEventListener("mousedown", categorieClickHandler);
    };
  }, []);
  return __jsx("div", {
    ref: categorieRef,
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row justify-between h-12 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row justify-start items-center h-full flex-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(SiteNameContainer, {
    style: brandNameStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  })), __jsx("ul", {
    className: "flex flex-row justify-center items-center h-full pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, categories.map((category, index) => index < max_shown && __jsx("li", {
    key: index,
    className: `flex px-4 h-full justify-center items-center cursor-pointer font-lato text-sm font-black tracking-widest ${openCategorie.categorie && openCategorie.categorie === category ? "text-gray-900 border-b-2 border-black" : "text-gray-900 border-b-2 border-transparent"}`,
    onClick: () => {
      if (category.type == 'page') {
        window.location = category.link;
      } else {
        clickOnCategorie(category);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 48
    }
  }, category.name.toUpperCase()))), __jsx("div", {
    className: "flex flex-1 h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), openCategorie.open && __jsx(_sousCategoriesBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    closeClickHandler: () => {
      setOpenCategorie({
        open: false,
        categorie: null
      });
      changeWelcomeBarAppearance(true);
    },
    categorie: openCategorie.categorie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 36
    }
  })));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var _upperNav_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upperNav/iconsContainer/iconsContainer */ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ikons/close */ "react-icons-kit/ikons/close");
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\categoriesBar\\sousCategoriesBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function SousCategoriesBar({
  categorie,
  closeClickHandler
}) {
  // close icon
  const CloseIcon = () => __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    className: "cursor-pointer text-gray-800 ",
    onClick: closeClickHandler,
    size: 20,
    icon: react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__["close"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  });

  const SousCategoriesContent = () => __jsx("div", {
    className: "flex justify-center w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col items-center justify-start flex-1 flex-shrink-0 m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: " w-6/12 flex flex-col items-start justify-start ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Sous Categories"), __jsx("li", {
    key: -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), categorie && categorie.sous_tags.map((sous_tag, index) => __jsx("li", {
    className: "ml-2 cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, sous_tag)))), __jsx("div", {
    className: "flex flex-col justify-start items-center flex-1 m-5 border-gray-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "HIGH LIGHT"), __jsx("div", {
    className: " m-5  overflow-hidden shadow-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "no image to be shown"))));

  const BlankContent = () => __jsx("div", {
    className: "relative flex flex-col justify-start items-center w-11/12 max-w-7xl bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-row justify-end items-center w-full px-2 h-12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(CloseIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex flex-col justify-center items-center w-full h-144",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, categorie.tag), __jsx("div", {
    className: "flex flex-col justify-start items-center m-5 h-64 w-10/12 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "No content available"), __jsx("h1", {
    className: "text-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Stay Tuned"))));

  return __jsx("div", {
    className: "absolute flex flex-col items-center w-full  py-5 border-t border-gray-500 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(BlankContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon */ "react-icons-kit/icomoon");
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
    onClick: e => {
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

function MiddleNav({
  style,
  links
}) {
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
  }, links.map((link, indx) => __jsx("li", {
    className: "m-8 cursor-pointer font-lato text-sm font-bold tracking-wide text-gray-900 hover:text-gray-700",
    key: indx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 48
    }
  }, link.page))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upperNav_UpperNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upperNav/UpperNav */ "./components/elements/nav-bar/upperNav/UpperNav.js");
/* harmony import */ var _middleNav_MiddleNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleNav/MiddleNav */ "./components/elements/nav-bar/middleNav/MiddleNav.js");
/* harmony import */ var _categoriesBar_categoriesBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoriesBar/categoriesBar */ "./components/elements/nav-bar/categoriesBar/categoriesBar.js");
/* harmony import */ var _bar_WelcomeBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bar/WelcomeBar */ "./components/elements/bar/WelcomeBar.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const categoriesStyles = {
  fixed: "fixed top-0 hidden md:flex flex-col w-full animate-menuSlideDown border-b border-gray-300 bg-white",
  notFixed: "hidden md:flex flex-col w-full border-b border-gray-300 bg-white",
  showBrandName: "animate-smouthAppearance flex px-4",
  hideBrandName: "hidden"
};

function NavBar({
  changeMenuClicked,
  openSearch,
  openSearchClickHandler,
  categories,
  max_shown,
  links,
  home
}) {
  const {
    0: style,
    1: setStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    categoriesBarStyle: categoriesStyles.notFixed,
    brandNameStyle: categoriesStyles.hideBrandName
  });
  const {
    0: showWelcomeBar,
    1: setShowWelcomeBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const upperNavRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // const middleNavRef = useRef(null)
  // const WelcomeNavRef = useRef(null)
  // const categoriesNavRef = useRef(null)

  const changeWelcomeBarAppearance = value => {
    setShowWelcomeBar(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    return () => {
      document.removeEventListener('scroll', adjustNavsPosition);
    };
  }, [showWelcomeBar]);
  return __jsx("nav", {
    className: "z-10 flex flex-col w-ful",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: upperNavRef,
    className: "fixed md:static z-10 w-full bg-white",
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

/***/ }),

/***/ "./components/elements/nav-bar/upperNav/UpperNav.js":
/*!**********************************************************!*\
  !*** ./components/elements/nav-bar/upperNav/UpperNav.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsContainer/iconsContainer */ "./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/md/ic_menu */ "react-icons-kit/md/ic_menu");
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../logo */ "./components/logo/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\UpperNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function UpperNav({
  style,
  changeMenuClicked,
  openSearch,
  openSearchClickHandler,
  home,
  logo
}) {
  const MenuContainer = ({
    style
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mx-3 md:hidden cursor-pointer text-gray-700",
    onClick: changeMenuClicked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 25,
    icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_3__["ic_menu"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })));

  const SiteNameContainer = ({
    style
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_5__["Brand"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));

  return __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(MenuContainer, {
    style: `flex items-center justify-start h-full md:flex-1 h-full`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(SiteNameContainer, {
    style: `flex md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_iconsContainer_iconsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "flex flex-row md:flex-1 justify-end items-center w-full h-full",
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon */ "react-icons-kit/icomoon");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/cross */ "react-icons-kit/icomoon/cross");
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bar */ "./components/elements/bar/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\nav-bar\\upperNav\\iconsContainer\\iconsContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const IconsContainer = ({
  openSearch,
  openSearchClickHandler,
  style
}) => {
  const {
    0: menuDrop,
    1: setMenuDrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let status = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let userData = localStorage.getItem('_user');
    console.log(userData);
    setUser(userData);
  }, []);

  const dropMenuOn = () => {
    status = true;
    console.log(status);

    if (menuDrop == true) {
      setMenuDrop(false);
    } else {
      setMenuDrop(true);
    }
  };

  const dropMenuOff = () => {
    if (status) {
      status = false;
    } else {
      console.log('cancel');
      setMenuDrop(false);
    }
  };

  const searchIconStyle = {
    openStyle: "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
    closeStyle: "flex justify-center h-full w-8 outline-none focus:outline-none"
  };
  const inputStyle = {
    openStyle: "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
    closeStyle: "transform w-0 transition-all ease-out duration-300"
  };

  const NewIcon = ({
    className,
    src,
    clickHandler
  }) => __jsx("div", {
    className: `inline m-2 md:m-2 flex flex-wrap content-center cursor-pointer text-gray-700`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: className,
    onClick: clickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }))));

  return __jsx("div", {
    className: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `${!openSearch ? "flex" : "hidden"} flex-row h-full`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "http://localhost:3000" + '/icons/loop.svg',
    clickHandler: openSearchClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "http://localhost:3000" + '/icons/avatar.svg',
    clickHandler: dropMenuOn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "http://localhost:3000" + '/icons/heart.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx(NewIcon, {
    className: "h-5 w-5",
    src: "http://localhost:3000" + '/icons/cart.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  })), __jsx(_bar__WEBPACK_IMPORTED_MODULE_4__["NavMenu"], {
    className: "absolute right-0",
    user: user,
    drop: menuDrop,
    callBack: dropMenuOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })));
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alpha-displayer/AlphaDisplayer */ "./components/elements/alpha-displayer/AlphaDisplayer.js");
/* harmony import */ var _widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/search/searchWidget */ "./components/widgets/search/searchWidget.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ikons/close */ "react-icons-kit/ikons/close");
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\searchGate\\searchGate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // history widget : used inside the history component 

function NewHistoryItem({
  title,
  deleteOneHistory
}) {
  const text = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
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

function SearchGate({
  changeOpenSearch,
  searchData,
  setSearchData
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread({}, searchData, {}, {
    inputFocus: true
  })); // searchGate data --> check searchData state in "layout.js"
  // STATE CALLBACKS
  // turn search input focus OFF

  const InputFocusOff = () => {
    setData(_objectSpread({}, data, {
      inputFocus: false
    }));
  }; // submit new target to search for + add to search history + turn off input focus


  const changeSearchTarget = searchTarget => {
    if (searchTarget !== "") {
      setData(_objectSpread({}, data, {
        searchTarget: searchTarget
      }));
      addSearchHistoryItem(searchTarget);
      InputFocusOff();
    }
  }; // track text on search input  "not used for now" 


  const updateTrackInputText = trackedInputText => {
    if (trackedInputText !== "") setData(_objectSpread({}, data, {
      searchTrackedInputText: trackedInputText
    }));
  }; // add item to search history


  const addSearchHistoryItem = historyItem => {
    if (historyItem !== "") {
      let newSearchHistory = data.searchHistory;
      newSearchHistory.push(historyItem);
      setData(_objectSpread({}, data, {
        searchHistory: newSearchHistory
      }));
    }
  }; // delete item from search history


  const deleteSearchHistoryItem = historyItem => {
    let newSearchHistory = [];
    data.searchHistory.forEach(item => {
      if (item !== historyItem) newSearchHistory.push(item);
    });
    setData(_objectSpread({}, data, {
      searchHistory: newSearchHistory
    }));
  }; // clear search history


  const clearSearchHistory = () => {
    setData(_objectSpread({}, data, {
      searchHistory: []
    }));
  }; // saves search data and exit -> updates searchData state in "layout.js" 


  const UpdateAndExit = () => {
    setSearchData(data);
    changeOpenSearch();
  }; // UTILITIES
  // close icon


  const CloseIcon = () => __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    className: "cursor-pointer text-gray-600 hover:text-gray-700",
    onClick: UpdateAndExit,
    size: 40,
    icon: react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_4__["close"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }); // history search component


  const RecentSearchCard = ({
    style,
    maxResultNumber
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Recent Search"), __jsx("ul", {
    className: "w-full flex flex-col justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, data.searchHistory.map((item, indx) => indx < maxResultNumber && __jsx("li", {
    key: indx,
    className: "cursor-pointer whitespace-no-wrap text-md hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 47
    }
  }, __jsx(NewHistoryItem, {
    title: item,
    deleteOneHistory: deleteSearchHistoryItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  })))), data.searchHistory.length > 0 && __jsx("label", {
    className: " text-sm text-gray-600 hover:text-gray-900 whitespace-no-wrap cursor-pointer my-2",
    onClick: clearSearchHistory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 53
    }
  }, "Delete History"), "        ");

  const AnnouceCard = ({
    style,
    cardTitle,
    titleLinks
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, cardTitle), __jsx("ul", {
    className: "flex flex-col justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, titleLinks.map((title, indx) => __jsx("li", {
    key: indx,
    className: "cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, title)))); // left part


  const LeftContentCard = ({
    style
  }) => __jsx("div", {
    className: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(RecentSearchCard, {
    style: "w-full flex flex-col items-start cursor-default",
    maxResultNumber: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), __jsx(AnnouceCard, {
    style: "w-full flex flex-col items-start mt-8 cursor-default",
    cardTitle: "Products",
    titleLinks: ["Leatest products", "Best selling products", "Season products"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx(AnnouceCard, {
    style: "w-full flex flex-col items-start mt-8 cursor-default",
    cardTitle: "Stories",
    titleLinks: ["every stitch.. stitched with love", "braid from atlas mountains", "desert music"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })); // default content displayed in case there is no word to search for  


  const DefaultContentCard = () => __jsx("div", {
    className: "flex flex-col md:flex-row justify-start items-start mt-16 w-full  animate-smouthAppearance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(LeftContentCard, {
    style: "animate-smouthAppearance  flex flex-col justify-center w-4/12 px-4 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex flex-row justify-start w-full md:w-8/12 h-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col justify-start items-start w-2/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-col justify-start items-start md:w-10/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "images/Articles/cover-04.jpg",
    title: "The Lovely Place",
    description: "have u ever been in a place where .. .",
    buttonText: "",
    clickAction: () => console.log(" SHIT CLICKED "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  })))); // content displayed to show search result


  const ResultContentCard = () => __jsx("div", {
    className: "flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start mt-16 w-full h-180 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center w-8/12 h-full ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-5/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "",
    description: "",
    buttonText: "",
    image: "images/Articles/cover-5.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  })))); // the entire default search displayed


  const DefaultBody = () => __jsx("div", {
    className: "flex flex-col items-center justify-start w-9/12 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "w-full h-12 mt-4",
    clickHandler: changeSearchTarget,
    inputFocus: data.inputFocus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }), __jsx(DefaultContentCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  })); // the entire search result displayed


  const ResultBody = () => __jsx("div", {
    className: "flex flex-col items-center justify-start w-10/12 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: "w-full h-12 my-0 bg-white ",
    clickHandler: submitInputText,
    inputFocus: data.inputFocus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }), __jsx(ResultContentCard, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  })); // CONPONENTS
  // upper bar : contains exit button


  const TopBar = () => __jsx("div", {
    className: "flex justify-end w-full p-5 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx(CloseIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  })); // search body : switch between search and default mode


  const MainBody = () => __jsx(DefaultBody, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }) // <SearchResultBody/>
  ; // RENDER THAT SHIT


  return __jsx("div", {
    className: `animate-menuSlideDown fixed top-0 z-50 w-full flex flex-col items-center justify-start bg-white h-full`,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/sideMenu.module.css */ "./components/elements/side-menu/styles/sideMenu.module.css");
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight2 */ "react-icons-kit/icomoon/arrowRight2");
/* harmony import */ var react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FrameSlide({
  children,
  show
}) {
  return __jsx("div", {
    className: `${show ? "transform -translate-x-full transition-all ease-out duration-400" : "transform translate-x-0 transition-all ease-out duration-300"} bg-indigo-400`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
}

function ScrollBlocks({
  children,
  changeSwap
}) {
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

function TitleBlock({
  children,
  color,
  height
}) {
  return __jsx("div", {
    className: `flex justify-between items-center w-full ${height ? height : "h-16"} border-b ${color ? color : "border-gray-300"} bg-gray-100`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " ", children);
}

function Block({
  children,
  changeTitle,
  title,
  changeItems
}) {
  return __jsx("div", {
    className: "flex justify-between items-center w-full h-20 p-5 border-b border-gray-300  hover:bg-blue-200 hover:text-gray-900",
    onClick: () => changeTitle(title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, " ", children);
}

function SideMenu({
  menuClick,
  changeMenuClicked,
  currentPage,
  firstRender,
  changeCurrentPage,
  categories,
  max_shown,
  links
}) {
  const {
    0: initAppearance,
    1: setInitAppearance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: swap,
    1: setSwap
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("CATEGORIES"); // nav title

  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories.reduce((acc, item) => {
    acc.push(item.tag);
    return acc;
  }, []));

  const changeTitle = newTitle => {
    setTitle(newTitle);
    changeItems(newTitle, categories);
  };

  const changeItems = (title, categories) => {
    const listFound = categories.find(item => item.tag === title);
    if (listFound) setItems(listFound.sous_tags);else {
      setTitle("CATEGORIES");
      setItems(categories.reduce((acc, item) => {
        acc.push(item.tag);
        return acc;
      }, []));
    }
  };

  const changeSwap = () => {
    setSwap(!swap);
  };

  return __jsx("nav", {
    className: `${menuClick ? "animate-menuSlideIn left-0" : !firstRender ? " animate-menuSlideOut -left-full" : "-left-full"} fixed flex-row w-11/12 z-30 h-full font-sans bg-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(TitleBlock, {
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
  }, items.map((categorie, indx) => __jsx(Block, {
    key: indx,
    changeTitle: changeTitle,
    title: categorie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, categorie), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    icon: react_icons_kit_icomoon_arrowRight2__WEBPACK_IMPORTED_MODULE_3__["arrowRight2"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/elements/side-menu/styles/sideMenu.module.css":
/*!******************************************************************!*\
  !*** ./components/elements/side-menu/styles/sideMenu.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "sideMenu_container__1SxfO"
};

/***/ }),

/***/ "./components/graphics/buttons/Btn.js":
/*!********************************************!*\
  !*** ./components/graphics/buttons/Btn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\Btn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Btn = props => {
  let borderColor = 'black';
  let textColor = 'white';
  let textSize = 'sm';
  let textWeight = 'medium';
  let hoverColor = 'gray-700';
  let borderHoverColor = 'white';
  let bgColor = 'black';
  let disableColor = 'gray-300';
  let disabled = false;
  let height = 12;
  let shadow = 'border border-';

  if (props.height != null) {
    height = props.height;
  }

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.borderHoverColor != null) {
    borderHoverColor = props.borderHoverColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.textSize != null) {
    textSize = props.textSize;
  }

  if (props.hoverColor != null) {
    hoverColor = props.hoverColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  if (props.textWeight != null) {
    textWeight = props.textWeight;
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: 'w-full h-full bg-' + bgColor + ' ' + shadow + ' hover:bg-' + hoverColor + ' focus:outline-none hover:border-' + borderHoverColor + ' font-roboto font-' + textWeight + ' text-' + textColor + ' text-' + textSize + ' py-2 px-4',
    type: "button",
    disabled: disabled,
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Btn);

/***/ }),

/***/ "./components/graphics/buttons/BtnBbw.js":
/*!***********************************************!*\
  !*** ./components/graphics/buttons/BtnBbw.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\BtnBbw.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BtnBbw = props => {
  let weight = 'medium';

  if (props.weight != null) {
    weight = props.weight;
  }

  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: 'w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 font-roboto font-' + weight + ' text-white text-sm py-2 px-4',
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (BtnBbw);

/***/ }),

/***/ "./components/graphics/buttons/BtnBtb.js":
/*!***********************************************!*\
  !*** ./components/graphics/buttons/BtnBtb.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\BtnBtb.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BtnBtb = props => {
  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "w-full h-full bg-transparent border border-gray-900 hover:text-opacity-75 hover:border-opacity-75 focus:outline-none font-sans font-medium text-gray-900 text-sm",
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (BtnBtb);

/***/ }),

/***/ "./components/graphics/buttons/BtnIcon.js":
/*!************************************************!*\
  !*** ./components/graphics/buttons/BtnIcon.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\BtnIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BtnIcon = props => {
  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 py-2 px-2",
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: props.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (BtnIcon);

/***/ }),

/***/ "./components/graphics/buttons/BtnTtb.js":
/*!***********************************************!*\
  !*** ./components/graphics/buttons/BtnTtb.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\BtnTtb.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BtnTtb = props => {
  let style = "w-full h-full bg-transparent text-left hover:text-opacity-75 focus:outline-none font-sans font-bold text-gray-900 text-sm py-2 px-4";

  if (props.clicked == 'true') {
    style = "w-full h-full bg-transparent text-left focus:outline-none font-sans font-bold text-red-700 text-sm py-2 px-4";
  }

  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: style,
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (BtnTtb);

/***/ }),

/***/ "./components/graphics/buttons/index.js":
/*!**********************************************!*\
  !*** ./components/graphics/buttons/index.js ***!
  \**********************************************/
/*! exports provided: BtnBbw, BtnBtb, BtnTtb, BtnIcon, Btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BtnBbw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnBbw */ "./components/graphics/buttons/BtnBbw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBbw", function() { return _BtnBbw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BtnBtb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnBtb */ "./components/graphics/buttons/BtnBtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBtb", function() { return _BtnBtb__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BtnTtb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnTtb */ "./components/graphics/buttons/BtnTtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnTtb", function() { return _BtnTtb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BtnIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnIcon */ "./components/graphics/buttons/BtnIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnIcon", function() { return _BtnIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Btn */ "./components/graphics/buttons/Btn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return _Btn__WEBPACK_IMPORTED_MODULE_4__["default"]; });







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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\imageCover\\Cover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Cover({
  children,
  image,
  height,
  style,
  imageStyle
}) {
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
    className: `${height} w-full object-cover object-center ${imageStyle}`,
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
function Cover1({
  image,
  title,
  description,
  buttonText
}) {
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

/***/ "./components/graphics/images/AddImage.js":
/*!************************************************!*\
  !*** ./components/graphics/images/AddImage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\images\\AddImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AddImage = props => {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  /*
  const img_pathUrl = (input) => {
      console.log(input.target.files)
      imgRef.current.src = (window.URL ? URL : webkitURL).createObjectURL(input.target.files[0]);
  }
  */

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("input", {
    className: "absolute invisible",
    ref: inputRef,
    accept: "image/jpeg, image/jpg, image/png",
    multiple: true,
    type: "file",
    onChange: input => {
      console.log(input);
      props.onChange(Array.from(input.target.files));
      inputRef.current.value = null;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200",
    role: "button",
    onClick: () => {
      inputRef.current.click();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-center h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Upload Photo"))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

/***/ }),

/***/ "./components/graphics/images/ImgDimDisp.js":
/*!**************************************************!*\
  !*** ./components/graphics/images/ImgDimDisp.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\images\\ImgDimDisp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ImgDimDisp = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: 'relative w-full bg-gray-300 pb-' + props.dim,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ImgDimDisp);

/***/ }),

/***/ "./components/graphics/images/ImgFreeDisp.js":
/*!***************************************************!*\
  !*** ./components/graphics/images/ImgFreeDisp.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\images\\ImgFreeDisp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ImgFreeDisp = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: props.src,
    alt: props.alt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }), props.displayAlt ? __jsx("p", {
    className: "absolute bottom-0 right-0 font-lato font-regular text-xs text-white bg-gray-900 bg-opacity-50 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 24
    }
  }, props.alt) : null));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ImgFreeDisp);

/***/ }),

/***/ "./components/graphics/images/ImgRound.js":
/*!************************************************!*\
  !*** ./components/graphics/images/ImgRound.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\images\\ImgRound.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImgRound = props => {
  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "rounded-full h-full w-full flex items-center justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: props.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ImgRound);

/***/ }),

/***/ "./components/graphics/images/RemovedSquaredImg.js":
/*!*********************************************************!*\
  !*** ./components/graphics/images/RemovedSquaredImg.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\images\\RemovedSquaredImg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RemovedSquaredImg = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-full w-full bg-yellow-300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",
    role: "button",
    onClick: () => props.onRemove(props.index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "x"))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (RemovedSquaredImg);

/***/ }),

/***/ "./components/graphics/images/index.js":
/*!*********************************************!*\
  !*** ./components/graphics/images/index.js ***!
  \*********************************************/
/*! exports provided: ImgRound, AddImage, RemovedSquaredImg, ImgFreeDisp, ImgDimDisp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgRound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgRound */ "./components/graphics/images/ImgRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgRound", function() { return _ImgRound__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AddImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddImage */ "./components/graphics/images/AddImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddImage", function() { return _AddImage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RemovedSquaredImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemovedSquaredImg */ "./components/graphics/images/RemovedSquaredImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovedSquaredImg", function() { return _RemovedSquaredImg__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ImgFreeDisp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImgFreeDisp */ "./components/graphics/images/ImgFreeDisp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgFreeDisp", function() { return _ImgFreeDisp__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ImgDimDisp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImgDimDisp */ "./components/graphics/images/ImgDimDisp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgDimDisp", function() { return _ImgDimDisp__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/graphics/textFields/IntField.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/IntField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\IntField.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const IntField = props => {
  let shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    min: "0",
    className: 'appearance-none ' + shadow + ' w-32 h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "number",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (IntField);

/***/ }),

/***/ "./components/graphics/textFields/PwdField.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/PwdField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\PwdField.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PwdField = props => {
  let shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    className: 'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "password",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (PwdField);

/***/ }),

/***/ "./components/graphics/textFields/TextDisp.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/TextDisp.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TextDisp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const TextDisp = props => {
  let align = "left";

  if (props.align != null) {
    align = props.align;
  }

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: 'font-sans text-base text-gray-900 align-' + align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.text));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TextDisp);

/***/ }),

/***/ "./components/graphics/textFields/TxtArea.js":
/*!***************************************************!*\
  !*** ./components/graphics/textFields/TxtArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtArea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TxtArea = props => {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  let align = 'left';
  let color = 'gray-900';
  let borderColor = 'gray-300';
  let textColor = 'gray-700';
  let focusColor = 'black';
  let bgColor = 'transparent';
  let disableColor = 'gray-300';
  let disabled = false;
  let placeholder = '';
  let placeholderColor = 'gray-500';
  let height = 12;
  let shadow = 'border border-';

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  if (props.height != null) {
    height = props.height;
  }

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.focusColor != null) {
    focusColor = props.focusColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.placeholderColor != null) {
    placeholderColor = props.placeholderColor;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  if (props.reset == true) {
    if (props.color != null) {
      color = props.color;
    } else {
      color = 'white';
    }

    if (props.borderColor != null) {
      borderColor = props.borderColor;
    } else {
      borderColor = 'gray-300';
    }

    if (props.textColor != null) {
      textColor = props.textColor;
    } else {
      textColor = 'gray-700';
    }

    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 16
    }
  }, props.label) : null, __jsx("textarea", {
    ref: inputRef,
    rows: "4",
    cols: "50",
    disabled: disabled,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-' + textColor + ' leading-tight bg-' + bgColor + ' placeholder-' + placeholderColor + ' focus:outline-none focus:border-' + focusColor,
    type: "text",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtArea);

/***/ }),

/***/ "./components/graphics/textFields/TxtField.js":
/*!****************************************************!*\
  !*** ./components/graphics/textFields/TxtField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtField.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TxtField = props => {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  let align = 'left';
  let color = 'gray-900';
  let borderColor = 'gray-300';
  let textColor = 'gray-700';
  let focusColor = 'black';
  let bgColor = 'transparent';
  let disableColor = 'gray-300';
  let disabled = false;
  let placeholder = '';
  let placeholderColor = 'gray-500';
  let height = 12;
  let shadow = 'border border-';

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  if (props.height != null) {
    height = props.height;
  }

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.focusColor != null) {
    focusColor = props.focusColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.placeholderColor != null) {
    placeholderColor = props.placeholderColor;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  if (props.reset == true) {
    if (props.color != null) {
      color = props.color;
    } else {
      color = 'white';
    }

    if (props.borderColor != null) {
      borderColor = props.borderColor;
    } else {
      borderColor = 'gray-300';
    }

    if (props.textColor != null) {
      textColor = props.textColor;
    } else {
      textColor = 'gray-700';
    }

    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 16
    }
  }, props.label) : null, __jsx("input", {
    ref: inputRef,
    disabled: disabled,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-' + textColor + ' leading-tight bg-' + bgColor + ' placeholder-' + placeholderColor + ' focus:outline-none focus:border-' + focusColor,
    type: "text",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (TxtField);

/***/ }),

/***/ "./components/graphics/textFields/index.js":
/*!*************************************************!*\
  !*** ./components/graphics/textFields/index.js ***!
  \*************************************************/
/*! exports provided: TxtField, PwdField, TxtArea, IntField, TextDisp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TxtField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TxtField */ "./components/graphics/textFields/TxtField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxtField", function() { return _TxtField__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PwdField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PwdField */ "./components/graphics/textFields/PwdField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PwdField", function() { return _PwdField__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TxtArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TxtArea */ "./components/graphics/textFields/TxtArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TxtArea", function() { return _TxtArea__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _IntField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IntField */ "./components/graphics/textFields/IntField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntField", function() { return _IntField__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TextDisp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextDisp */ "./components/graphics/textFields/TextDisp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDisp", function() { return _TextDisp__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/utilities/wrapper */ "./components/widgets/utilities/wrapper.js");
/* harmony import */ var _elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/nav-bar/navbar */ "./components/elements/nav-bar/navbar.js");
/* harmony import */ var _elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/side-menu/sideMenu */ "./components/elements/side-menu/sideMenu.js");
/* harmony import */ var _elements_searchGate_searchGate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/searchGate/searchGate */ "./components/elements/searchGate/searchGate.js");
/* harmony import */ var _elements_blackFocusScreen_BlackFocusScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/blackFocusScreen/BlackFocusScreen */ "./components/elements/blackFocusScreen/BlackFocusScreen.js");
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var _elements_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/footer/footer */ "./components/elements/footer/footer.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // fake data 

const categories = [{
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
const links = [{
  page: 'MAKERS',
  path: '/makers'
}, {
  page: 'REGIONS',
  path: '/regions'
}, {
  page: 'STORIES',
  path: '/stories'
}];

const Layout = props => {
  // GLOBAL STATES
  const {
    0: openMenu,
    1: setOpenMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // menu open/close state

  const {
    0: selectedPage,
    1: setSelectedPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    page: "HOME",
    path: "/"
  }); // current selected page

  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // search open/close state

  const {
    0: searchData,
    1: setSearchData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    searchHistory: [],
    searchTarget: "",
    searchTrackedInputText: ""
  }); // saved search DATA 
  // STATE CALLBACKS
  // openSearch callBacks

  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
  }; // openMenu callBacks


  const changeOpenMenu = () => {
    setOpenMenu(!openMenu);
  }; // selectedPage callBacks


  const changeSelectedPage = link => {
    setSelectedPage(link);
  }; // DISPLAYED CONTENT 


  const FooterBar = () => __jsx(_elements_footer_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    categories: categories,
    max_shown: 5,
    links: links,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  });

  const Page = () => !openSearch && props.children;

  const Menu = () => openMenu && __jsx(_elements_side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuClick: openMenu,
    changeMenuClicked: changeOpenMenu,
    currentPage: selectedPage,
    changeCurrentPage: changeSelectedPage,
    categories: categories,
    max_shown: 8,
    links: links,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  });

  const NavigationBar = () => __jsx(_elements_nav_bar_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeMenuClicked: changeOpenMenu,
    openSearch: openSearch,
    openSearchClickHandler: changeOpenSearch,
    logo: "/logo.png",
    categories: props.tags,
    max_shown: 8,
    links: links,
    home: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  });

  const SearchPage = () => openSearch && __jsx(_elements_searchGate_searchGate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeOpenSearch: changeOpenSearch,
    searchData: searchData,
    setSearchData: data => setSearchData(data),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  });

  const BlackFocusOff = () => openMenu && __jsx(_elements_blackFocusScreen_BlackFocusScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: changeOpenMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 23
    }
  });

  const SpacingTop = () => openSearch ? __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: " w-full absolute top-0 bg-blue-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 22
    }
  }) : __jsx(_widgets_utilities_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: "w-full absolute top-0 h-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 79
    }
  }); // RENDER THAT SHIT


  return __jsx("div", {
    className: "relative flex flex-col w-full bg-scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }), __jsx(BlackFocusOff, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }), __jsx(NavigationBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }), __jsx(SpacingTop, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }), __jsx(SearchPage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }), __jsx(Page, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }), __jsx(FooterBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }));
};

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\logo\\Brand.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Brand = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container h-full w-auto content-center mx-auto flex flex-wrap",
    role: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("strong", {
    className: "font-raleway font-bold text-2xl text-gray-900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "MORMADE"))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "./components/logo/Intro.js":
/*!**********************************!*\
  !*** ./components/logo/Intro.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\logo\\Intro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Intro = props => {
  if (props.type == 'white') {
    return __jsx("div", {
      className: props.className,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "icons/morocco.png",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, " to world wide")));
  } else {
    return __jsx("div", {
      className: props.className,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "icons/morocco.png",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1",
      __self: undefined,
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

/***/ "./components/user/Menu.js":
/*!*********************************!*\
  !*** ./components/user/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphics/images */ "./components/graphics/images/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\user\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Menu = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full w-auto container content-center mx-auto flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["ImgRound"], {
    className: "w-5 h-5",
    src: "/profile.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("button", {
    className: "focus:outline-none",
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "font-sans font-medium text-sm text-gray-900 text-center ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, props.username))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/user/index.js":
/*!**********************************!*\
  !*** ./components/user/index.js ***!
  \**********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./components/user/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/widgets/article/ArticleBanner.js":
/*!*****************************************************!*\
  !*** ./components/widgets/article/ArticleBanner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\ArticleBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ArticleBanner = props => {
  let bannerState = props.data.cover == null ? 'relative bg-yellow-300 text-gray-900' : 'absolute bottom-0 text-white';

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.data.cover ? __jsx("img", {
    className: "w-full",
    src: props.data.cover.path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 24
    }
  }) : null, __jsx("div", {
    className: bannerState + ' h-auto w-full flex flex-col items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "font-roboto font-bold text-xl mt-4 mx-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, props.data.title), __jsx("span", {
    className: "mx-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, props.data.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/stories/${props.data.url}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnBbw"], {
    className: "h-auto w-auto m-4",
    value: "READ MORE",
    weight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 28
    }
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleBanner);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\search\\searchWidget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SearchWidget({
  style,
  clickHandler,
  inputFocus
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // ref for input

  const formInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // after every render apply input focus if needed 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (inputFocus) formInput.current.focus();
  }, []); // traked text

  const writeData = event => {
    setData(event.target.value);
  }; // submit tracked text


  const submitdata = () => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\utilities\\wrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Wrapper({
  children,
  style,
  onClick
}) {
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

/***/ "./lib/parseCookies.js":
/*!*****************************!*\
  !*** ./lib/parseCookies.js ***!
  \*****************************/
/*! exports provided: parseCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
}

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

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
  return (href, as) => {
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
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

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

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./pages/stories/index.js":
/*!********************************!*\
  !*** ./pages/stories/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var _components_elements_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/bar */ "./components/elements/bar/index.js");
/* harmony import */ var _components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/list/ArticleList */ "./components/elements/list/ArticleList.js");
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var _components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/widgets/article/ArticleBanner */ "./components/widgets/article/ArticleBanner.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\stories\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Stories = props => {
  console.log(props.cookies);
  console.log(props.data);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_6___default.a.stringify({
      operation: "all"
    }), props.cookies['csrftoken'], "http://localhost:8000" + '/api/articles/').then(res => {
      console.log(res);
      setData(JSON.stringify(res));
      setIsLoading(false);
    });
  }, []);
  let body = null;

  if (!isLoading) {
    const articlesList = data ? JSON.parse(data).map(function (article) {
      return __jsx(_components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "h-auto w-full max-w-screen-md m-4",
        key: article.id,
        data: article,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 20
        }
      });
    }) : null;

    let articles = __jsx(_components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "w-full p-2",
      data: articlesList,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    });

    body = __jsx("div", {
      className: "w-full flex flex-col items-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, articles);
  } else if (!isLoading && (!data || data.length === 0)) {
    body = null;
  }

  let content = __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tags: props.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, body);

  return content;
};

Stories.getInitialProps = async ({
  req
}) => {
  const cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])(req);
  const tags = await Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_7__["getRequest"])("http://localhost:8000" + '/api/categories/').then(res => {
    return res;
  });
  return {
    cookies: cookies,
    tags: tags
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ "./services/api/get/getRequest.js":
/*!****************************************!*\
  !*** ./services/api/get/getRequest.js ***!
  \****************************************/
/*! exports provided: getRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getRequest(url) {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "./services/api/post/postRequest.js":
/*!******************************************!*\
  !*** ./services/api/post/postRequest.js ***!
  \******************************************/
/*! exports provided: postRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRequest", function() { return postRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function postRequest(data, csrftoken, url) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrftoken
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "./services/authentication/authentication.js":
/*!***************************************************!*\
  !*** ./services/authentication/authentication.js ***!
  \***************************************************/
/*! exports provided: authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function authenticate(data, operation, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      operation: operation,
      data: querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:8000" + '/api/users/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      console.log(response.data);
      localStorage.setItem('_user', JSON.stringify(response.data)); //window.open('/users')

      if (operation == 'logout') {
        localStorage.setItem('_user', null);
        window.location = '/';
      } else {
        window.location = '/';
      } //resolve(response.data)

    }).catch(error => {
      console.log(error); //reject(error)
    });
  });
}

/***/ }),

/***/ "./services/authentication/registerUser.js":
/*!*************************************************!*\
  !*** ./services/authentication/registerUser.js ***!
  \*************************************************/
/*! exports provided: registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function registerUser(data, operation, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      operation: operation,
      data: querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:8000" + '/api/users/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      console.log(response.data);
      localStorage.setItem('_maker', JSON.stringify(response.data));
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "./services/hooks/onClickOutside.js":
/*!******************************************!*\
  !*** ./services/hooks/onClickOutside.js ***!
  \******************************************/
/*! exports provided: onClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickOutside", function() { return onClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function onClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      setTimeout(() => handler(event), 200);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('keydown', listener);
    };
  }, [ref, handler]);
}

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/stories/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1337\Documents\WorkSpace\ecomart\dev\mormadeWebSite\pages\stories\index.js */"./pages/stories/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/icomoon":
/*!******************************************!*\
  !*** external "react-icons-kit/icomoon" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon");

/***/ }),

/***/ "react-icons-kit/icomoon/arrowRight2":
/*!******************************************************!*\
  !*** external "react-icons-kit/icomoon/arrowRight2" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/arrowRight2");

/***/ }),

/***/ "react-icons-kit/icomoon/cross":
/*!************************************************!*\
  !*** external "react-icons-kit/icomoon/cross" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/cross");

/***/ }),

/***/ "react-icons-kit/ikons/close":
/*!**********************************************!*\
  !*** external "react-icons-kit/ikons/close" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ikons/close");

/***/ }),

/***/ "react-icons-kit/md/ic_menu":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_menu" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_menu");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=stories.js.map