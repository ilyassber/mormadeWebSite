module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/elements/article/ArticleDisplayer.js":
/*!*********************************************************!*\
  !*** ./components/elements/article/ArticleDisplayer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/images */ "./components/graphics/images/index.js");
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _widgets_category_DisplayCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/category/DisplayCategories */ "./components/widgets/category/DisplayCategories.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\article\\ArticleDisplayer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ArticleDisplayer = props => {
  let data = props.story;

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-full flex flex-col items-center bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative md:w-3/4 lg:w-3/5 h-auto min-h-24 flex flex-col items-center mx-6 mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, data.cover != null ? __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["ImgFreeDisp"], {
    className: "w-full h-auto",
    src: data.cover.path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 28
    }
  }) : null, __jsx("div", {
    className: "h-auto w-auto max-w-screen flex flex-col items-center bg-white mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "font-roboto font-bold text-3xl text-center leading-snug mt-6 mx-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, data.title), __jsx("h3", {
    className: "font-roboto font-medium text-base text-center mx-6 mb-6 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, data.description))), __jsx("div", {
    className: "h-auto md:w-3/4 lg:w-3/5 flex flex-col items-center mx-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, data.text.map((content, index) => {
    if (content.type == 'image') {
      return __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["ImgFreeDisp"], {
        key: index,
        className: "w-full h-auto mt-4 mb-8",
        src: content.image.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 41
        }
      });
    } else if (content.type == 'text') {
      return __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TextDisp"], {
        key: index,
        className: "w-full lg:w-3/4 h-auto mb-4",
        align: "left",
        text: content.text,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 41
        }
      });
    }

    return null;
  })), __jsx("hr", {
    className: "w-full md:w-3/4 lg:w-3/5 bg-gray-900 m-2 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(_widgets_category_DisplayCategories__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-full md:w-3/4 lg:w-3/5 h-auto mb-4 m-2",
    tags: data.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleDisplayer);

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
    className: "w-full h-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("img", {
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

/***/ "./components/graphics/tags/BlackTag.js":
/*!**********************************************!*\
  !*** ./components/graphics/tags/BlackTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\tags\\BlackTag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BlackTag = props => {
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
    }, props.tag.name)));
  } else {
    return __jsx("div", {
      className: props.className,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, props.tag.name)));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BlackTag);

/***/ }),

/***/ "./components/graphics/tags/RemovableTag.js":
/*!**************************************************!*\
  !*** ./components/graphics/tags/RemovableTag.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\tags\\RemovableTag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RemovableTag = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-8 flex align-middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: "text-gray-900 text-sm text-center ml-2 mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, props.separator)), __jsx("div", {
    className: "h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: "font-sans font-medium text-xw-100 leading-tight mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, props.category.name)), __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",
    type: "button",
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("b", {
    className: "font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "X"))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (RemovableTag);

/***/ }),

/***/ "./components/graphics/tags/index.js":
/*!*******************************************!*\
  !*** ./components/graphics/tags/index.js ***!
  \*******************************************/
/*! exports provided: RemovableTag, BlackTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemovableTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemovableTag */ "./components/graphics/tags/RemovableTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovableTag", function() { return _RemovableTag__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BlackTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlackTag */ "./components/graphics/tags/BlackTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlackTag", function() { return _BlackTag__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
  }, props.label), __jsx("textarea", {
    rows: "4",
    cols: "50",
    className: 'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
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
  let placeholder = '';
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

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.reset == true) {
    color = 'white';
    borderColor = 'gray-300';
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }
  }, props.label) : null, __jsx("input", {
    ref: inputRef,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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

/***/ "./components/widgets/category/DisplayCategories.js":
/*!**********************************************************!*\
  !*** ./components/widgets/category/DisplayCategories.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/fetch/getCategories */ "./services/api/fetch/getCategories.js");
/* harmony import */ var _graphics_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/tags */ "./components/graphics/tags/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\category\\DisplayCategories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DisplayCategories = props => {
  console.log(props.tags);

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-full flex flex-wrap items-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, props.tags.map((tag, index) => {
    return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__["BlackTag"], {
      className: "mr-1",
      key: index,
      tag: tag,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    });
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayCategories);

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

/***/ "./pages/stories/[story].js":
/*!**********************************!*\
  !*** ./pages/stories/[story].js ***!
  \**********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_article_ArticleDisplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/article/ArticleDisplayer */ "./components/elements/article/ArticleDisplayer.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\stories\\[story].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Story = props => {
  let content = __jsx("div", {
    className: "w-full h-screen bg-xw-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_components_elements_article_ArticleDisplayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    story: props.story,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));

  return content;
};

async function getStaticPaths() {
  const stories = await Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__["getRequest"])("http://localhost:8000" + '/api/articles/').then(res => {
    return res;
  });
  const paths = stories.map(story => `/stories/${story.url}`);
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  console.log(context);
  let current = context.params.story;
  let id = current.split('-')[0];
  const story = await Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__["getRequest"])("http://localhost:8000" + '/api/articles/' + id).then(res => {
    console.log(res);
    return res;
  }).catch(err => {
    return null;
  });
  return {
    props: {
      story: story
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ }),

/***/ "./services/api/fetch/getCategories.js":
/*!*********************************************!*\
  !*** ./services/api/fetch/getCategories.js ***!
  \*********************************************/
/*! exports provided: getCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function getCategories(id, lvl, parent, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      id: id,
      operation: 'get',
      lvl: lvl,
      parent: parent
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:8000" + '/api/categories/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

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

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/stories/[story].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1337\Documents\WorkSpace\ecomart\dev\mormadeWebSite\pages\stories\[story].js */"./pages/stories/[story].js");


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=[story].js.map