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

/***/ "./components/elements/NavMenu.js":
/*!****************************************!*\
  !*** ./components/elements/NavMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/authentication */ "./services/authentication/authentication.js");
/* harmony import */ var _services_hooks_onClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hooks/onClickOutside */ "./services/hooks/onClickOutside.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\NavMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavMenu = props => {
  let object = __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "hover:bg-xw-100 w-24 border border-gray-900 bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "focus:outline-none font-sans font-medium text-gray-900 text-sm ml-2",
    type: "button",
    onClick: () => {
      Object(_services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__["authenticate"])({}, "logout", props.cookies['csrftoken']);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "logout")));

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
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fixed z-50 top-0 right-0 mr-4 mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));

  let contentWithMenu = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: focusRef,
    className: "fixed z-50 top-0 right-0 mr-4 mt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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

/***/ "./components/elements/Navbar.js":
/*!***************************************!*\
  !*** ./components/elements/Navbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/Brand */ "./components/logo/Brand.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./components/user/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./components/elements/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Navbar = props => {
  const {
    0: menuDrop,
    1: setMenuDrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let status = false;

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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fixed z-50 h-10 w-full flex bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_logo_Brand__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "h-full w-auto ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "w-full flex flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    className: "h-full w-auto mr-6",
    username: "ilyass",
    onClick: dropMenuOn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))), __jsx(___WEBPACK_IMPORTED_MODULE_3__["NavMenu"], {
    className: "z-50",
    cookies: props.cookies,
    drop: menuDrop,
    callBack: dropMenuOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/elements/index.js":
/*!**************************************!*\
  !*** ./components/elements/index.js ***!
  \**************************************/
/*! exports provided: Navbar, NavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/elements/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMenu */ "./components/elements/NavMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return _NavMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/elements/list/ProductGridList.js":
/*!*****************************************************!*\
  !*** ./components/elements/list/ProductGridList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\list\\ProductGridList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProductGridList = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, props.data));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridList);

/***/ }),

/***/ "./components/elements/product/AddProduct.js":
/*!***************************************************!*\
  !*** ./components/elements/product/AddProduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _widgets_image_AddImageGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/image/AddImageGrid */ "./components/widgets/image/AddImageGrid.js");
/* harmony import */ var _services_api_uploadImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/uploadImage */ "./services/api/uploadImage.js");
/* harmony import */ var _services_api_addProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/addProduct */ "./services/api/addProduct.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\product\\AddProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AddProduct = props => {
  let data = {};
  data['pics_list'] = [];
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getValue = (event, access) => {
    if (access == 'name') {
      data['name'] = event.target.value;
    } else if (access == 'description') {
      data['description'] = event.target.value;
    } else if (access == 'price') {
      data['price'] = event.target.value;
    } else if (access == 'quantity') {
      data['quantity'] = event.target.value;
    }
  };

  const appendFile = newFiles => {
    newFiles.forEach(f => files.push(f), undefined);
  };

  const removeFile = index => {
    files.splice(index, 1);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    for (let i = 0; i < files.length; i++) {
      let response = await Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_4__["uploadImage"])(event, files[0], props.cookies['csrftoken']).then(res => res);
      data['pics_list'].push(response.data);
    }

    console.log(data);
    Object(_services_api_addProduct__WEBPACK_IMPORTED_MODULE_5__["addProduct"])(data, props.cookies['csrftoken']).then(res => {
      console.log(res);
    });
  };

  let content = __jsx("div", {
    className: "m-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "",
    action: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Product Name",
    onChange: event => getValue(event, 'name'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtArea"], {
    label: "Product Description",
    onChange: event => getValue(event, 'description'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Product Region",
    onChange: event => getValue(event, 'region'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Price",
    onChange: event => getValue(event, 'price'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Quantity",
    onChange: event => getValue(event, 'quantity'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(_widgets_image_AddImageGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    files: files,
    addImage: appendFile,
    removeImage: removeFile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD PRODUCT",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ }),

/***/ "./components/elements/product/index.js":
/*!**********************************************!*\
  !*** ./components/elements/product/index.js ***!
  \**********************************************/
/*! exports provided: AddProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct */ "./components/elements/product/AddProduct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return _AddProduct__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
  const content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 font-sans font-medium text-white text-sm py-2 px-4",
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
    className: "w-full h-full bg-transparent border border-gray-900 hover:text-opacity-75 hover:border-opacity-75 focus:outline-none font-sans font-medium text-gray-900 text-sm py-2 px-4",
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

/***/ "./components/graphics/buttons/index.js":
/*!**********************************************!*\
  !*** ./components/graphics/buttons/index.js ***!
  \**********************************************/
/*! exports provided: BtnBbw, BtnBtb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BtnBbw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnBbw */ "./components/graphics/buttons/BtnBbw.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBbw", function() { return _BtnBbw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BtnBtb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnBtb */ "./components/graphics/buttons/BtnBtb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BtnBtb", function() { return _BtnBtb__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
      props.onChange(Array.from(input.target.files));
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
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-center h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Upload Photo"))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

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
/*! exports provided: ImgRound, AddImage, RemovedSquaredImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgRound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgRound */ "./components/graphics/images/ImgRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgRound", function() { return _ImgRound__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AddImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddImage */ "./components/graphics/images/AddImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddImage", function() { return _AddImage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RemovedSquaredImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemovedSquaredImg */ "./components/graphics/images/RemovedSquaredImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovedSquaredImg", function() { return _RemovedSquaredImg__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    min: "0",
    className: "appearance-none border w-32 h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "number",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
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
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "password",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (PwdField);

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
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, props.label), __jsx("textarea", {
    rows: "4",
    cols: "50",
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
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
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, props.label), __jsx("input", {
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
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
/*! exports provided: TxtField, PwdField, TxtArea, IntField */
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






/***/ }),

/***/ "./components/logo/Brand.js":
/*!**********************************!*\
  !*** ./components/logo/Brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\logo\\Brand.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Brand = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container h-full w-auto content-center mx-auto flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "font-sans font-bold text-gray-900",
    __self: undefined,
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

/***/ "./components/widgets/image/AddImageGrid.js":
/*!**************************************************!*\
  !*** ./components/widgets/image/AddImageGrid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/images */ "./components/graphics/images/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\image\\AddImageGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddImageGrid = props => {
  const {
    0: imagesList,
    1: setImagesList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const appendFile = newFiles => {
    if (newFiles.length > 0) {
      props.addImage(newFiles);
      initList();
    }
  };

  const removeFile = index => {
    props.removeImage(index);
    initList();
  };

  const initList = () => {
    if (props.files.length > 0) {
      setImagesList(props.files.map(function (file, index) {
        const imgSrc = (window.URL ? URL : webkitURL).createObjectURL(file);
        console.log(index);
        return __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["RemovedSquaredImg"], {
          className: "w-32 h-32 m-1",
          src: imgSrc,
          key: index,
          index: index,
          onRemove: removeFile,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 24
          }
        });
      }));
    } else {
      setImagesList(null);
    }
  };

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Add Product Images"), __jsx("div", {
    className: "h-auto w-full container flex content-start flex-wrap border py-2 px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, imagesList, __jsx(_graphics_images__WEBPACK_IMPORTED_MODULE_1__["AddImage"], {
    onChange: appendFile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddImageGrid);

/***/ }),

/***/ "./components/widgets/product/ProductGrid.js":
/*!***************************************************!*\
  !*** ./components/widgets/product/ProductGrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\product\\ProductGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProductGrid = props => {
  let content = __jsx("article", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container h-auto w-full content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full bg-yellow-300 pb-1/1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.images[0].path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "absolute top-0 right-0 h-10 w-10 m-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/heart-white.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 78
    }
  }))), __jsx("div", {
    className: "h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "leading-tight font-sans font-medium text-base text-gray-900 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, props.data.name), __jsx("strong", {
    className: "leading-tight font-sans font-normal text-sm text-gray-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.owner), __jsx("p", {
    className: "leading-tight font-sans font-semibold text-lg text-gray-900",
    __self: undefined,
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

/***/ "./components/widgets/product/index.js":
/*!*********************************************!*\
  !*** ./components/widgets/product/index.js ***!
  \*********************************************/
/*! exports provided: ProductGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGrid */ "./components/widgets/product/ProductGrid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGrid", function() { return _ProductGrid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./pages/maker/index.js":
/*!******************************!*\
  !*** ./pages/maker/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements */ "./components/elements/index.js");
/* harmony import */ var _components_widgets_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/widgets/product */ "./components/widgets/product/index.js");
/* harmony import */ var _components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/elements/list/ProductGridList */ "./components/elements/list/ProductGridList.js");
/* harmony import */ var _components_elements_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/elements/product */ "./components/elements/product/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\maker\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const UserPage = props => {
  console.log(props.cookies);
  console.log(props.data);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;

    if (props.cookies.utoken != null) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/products/').then(res => {
        console.log(res.data);
        setData(JSON.stringify(res.data));
        setIsLoading(false);
      });
    } else {
      window.location = '/';
    }
  }, []);

  let content = __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Loading characters...");

  if (!isLoading && data && data.length > 0) {
    console.log(data);
    const productsList = JSON.parse(data).map(function (product) {
      return __jsx(_components_widgets_product__WEBPACK_IMPORTED_MODULE_4__["ProductGrid"], {
        className: "h-auto w-auto m-2",
        key: product.id,
        data: product,
        owner: "ilyass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      });
    });
    content = __jsx("div", {
      className: "w-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx(_components_elements__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      cookies: props.cookies,
      className: "w-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }), __jsx(_components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "p-2 pt-10",
      data: productsList,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }), __jsx(_components_elements_product__WEBPACK_IMPORTED_MODULE_6__["AddProduct"], {
      cookies: props.cookies,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }));
  } else if (!isLoading && (!data || data.length === 0)) {
    content = __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, "Could not fetch any data.");
  }

  return content;
};

UserPage.getInitialProps = ({
  req
}) => {
  const cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])(req);
  return {
    cookies: cookies,
    data: req.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (UserPage);

/***/ }),

/***/ "./services/api/addProduct.js":
/*!************************************!*\
  !*** ./services/api/addProduct.js ***!
  \************************************/
/*! exports provided: addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function addProduct(data, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    data['pics_list'] = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data['pics_list']);
    let content = {
      data: querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)
    };
    console.log(content);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/products/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "./services/api/uploadImage.js":
/*!*************************************!*\
  !*** ./services/api/uploadImage.js ***!
  \*************************************/
/*! exports provided: uploadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//import useSWR from 'swr'

/*
const fetcher = (params) => axios.post(params.url, params.form_data, {
    headers: {
        'content-type': 'multipart/form-data'
    }
}).then(res => res.json())
*/

function uploadImage(e, file, csrttoken) {
  return new Promise((resolve, reject) => {
    let form_data = new FormData();
    form_data.append('name', file.name);
    form_data.append('image', file, file.name);
    const url = 'http://localhost:8000/images/';
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'X-CSRFToken': csrttoken
      }
    }).then(response => {
      resolve(response);
    });
    /*
    const { data, error } = useSWR({url: url, form_data: form_data}, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
    */
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
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/users/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      console.log(response); //window.open('/users')

      if (operation == 'logout') {
        window.location = '/';
      } else {
        window.location = '/maker';
      } //resolve(response.data)

    }).catch(error => {
      console.log(error); //reject(error)
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
/*!************************************!*\
  !*** multi ./pages/maker/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\1337\Documents\WorkSpace\ecomart\dev\mormadeWebSite\pages\maker\index.js */"./pages/maker/index.js");


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
//# sourceMappingURL=maker.js.map