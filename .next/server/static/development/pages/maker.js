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

/***/ "./components/elements/article/AddArticle.js":
/*!***************************************************!*\
  !*** ./components/elements/article/AddArticle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _services_api_uploadImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/uploadImage */ "./services/api/uploadImage.js");
/* harmony import */ var _widgets_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/article */ "./components/widgets/article/index.js");
/* harmony import */ var _widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets/image/AddSingleImage */ "./components/widgets/image/AddSingleImage.js");
/* harmony import */ var _widgets_article_AddText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/article/AddText */ "./components/widgets/article/AddText.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\article\\AddArticle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const AddArticle = props => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: null,
    description: null,
    cover: {
      state: "edit",
      data: {
        type: "image",
        image: null
      }
    },
    text: []
  });

  const getValue = (event, access) => {
    if (access == 'title') {
      setData(_objectSpread({}, data, {
        title: event.target.value
      }));
    } else if (access == 'description') {
      setData(_objectSpread({}, data, {
        description: event.target.value
      }));
    }
  };

  const addCover = file => {
    setData(_objectSpread({}, data, {
      cover: file
    }));
  };

  const removeCover = () => {
    setData(_objectSpread({}, data, {
      cover: null
    }));
  };

  const appendContent = content => {
    let contentList = data.text;
    contentList.push(content);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const editContent = (index, content) => {
    let contentList = data.text;
    contentList[index] = content;
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const removeContent = index => {
    let contentList = data.text;
    contentList.splice(index, 1);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const editCoverContent = (index, content) => {
    setData(_objectSpread({}, data, {
      cover: content
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let coverId = await Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_3__["uploadImage"])(event, data.cover.data.image, props.cookies['csrftoken']).then(res => res.data);
    let textList = [];

    for (let i = 0; i < data.text.length; i++) {
      if (data.text[i].data.type == 'image') {
        let response = await Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_3__["uploadImage"])(event, data.text[i].data.image, props.cookies['csrftoken']).then(res => res);
        textList.push(querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify({
          type: 'image',
          image: response.data
        }));
      } else {
        textList.push(querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify({
          type: 'text',
          text: data.text[i].data.text
        }));
      }
    }

    let newData = _objectSpread({}, data, {
      cover: coverId,
      text: querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify(textList)
    });

    Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_8__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify(newData), props.cookies['csrftoken'], 'http://localhost:8000/articles/').then(res => {
      console.log(res);
    });
  };

  let content = __jsx("div", {
    className: "m-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "w-full",
    action: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Title",
    onChange: event => getValue(event, 'title'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtArea"], {
    label: "Description",
    onChange: event => getValue(event, 'description'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "pb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "Add Cover"), __jsx(_widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    index: -1,
    className: "",
    data: data.cover,
    close: "false",
    editContent: editCoverContent,
    removeContent: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Add Article Content"), __jsx("div", {
    className: "h-auto w-full border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, data.text.map((content, index) => {
    if (content.data.type == "image") {
      return __jsx(_widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        index: index,
        className: "m-2",
        data: content,
        close: "true",
        editContent: editContent,
        removeContent: removeContent,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 41
        }
      });
    } else {
      return __jsx(_widgets_article_AddText__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: index,
        className: "m-2",
        data: content,
        editContent: editContent,
        removeContent: removeContent,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 41
        }
      });
    }
  }), __jsx(_widgets_article__WEBPACK_IMPORTED_MODULE_4__["AddContent"], {
    className: "m-2",
    appendContent: appendContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }))), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD ARTICLE",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddArticle);

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
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\NavMenu.js";
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

/***/ "./components/elements/bar/index.js":
/*!******************************************!*\
  !*** ./components/elements/bar/index.js ***!
  \******************************************/
/*! exports provided: Navbar, NavMenu, SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/elements/bar/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMenu */ "./components/elements/bar/NavMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return _NavMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./components/elements/bar/SideBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return _SideBar__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
/* harmony import */ var _widgets_category_AddCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/category/AddCategory */ "./components/widgets/category/AddCategory.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\product\\AddProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AddProduct = props => {
  let data = {};
  data['pics_list'] = [];
  data['tags'] = [];
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: categories,
    1: setCategories
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

  const appendCategory = category => {
    categories.splice(category.lvl, 0, category);
  };

  const removeCategory = index => {
    categories.splice(index, categories.length - index);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    for (let i = 0; i < files.length; i++) {
      let response = await Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_4__["uploadImage"])(event, files[0], props.cookies['csrftoken']).then(res => res);
      data['pics_list'].push(response.data);
    }

    for (let i = 0; i < categories.length; i++) {
      data['tags'].push(categories[i].id);
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "",
    action: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Product Name",
    onChange: event => getValue(event, 'name'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtArea"], {
    label: "Product Description",
    onChange: event => getValue(event, 'description'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    label: "Product Region",
    onChange: event => getValue(event, 'region'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Price",
    onChange: event => getValue(event, 'price'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["IntField"], {
    label: "Quantity",
    onChange: event => getValue(event, 'quantity'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(_widgets_category_AddCategory__WEBPACK_IMPORTED_MODULE_6__["default"], {
    categories: categories,
    addCategory: appendCategory,
    removeCategory: removeCategory,
    csrftoken: props.cookies['csrftoken'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx(_widgets_image_AddImageGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    files: files,
    addImage: appendFile,
    removeImage: removeFile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD PRODUCT",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
/*! exports provided: BtnBbw, BtnBtb, BtnTtb, BtnIcon */
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






/***/ }),

/***/ "./components/graphics/category/SelectCategory.js":
/*!********************************************************!*\
  !*** ./components/graphics/category/SelectCategory.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/fetch/getCategories */ "./services/api/fetch/getCategories.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\category\\SelectCategory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SelectCategory = props => {
  const forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(() => ({}))[1];
  const selectedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let currentLvl = null;
  let currentParent = null;
  let content = null;

  const getData = () => {
    setData(null);
    Object(_services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__["getCategories"])(currentLvl, props.parent, props.csrftoken).then(res => {
      setData(JSON.stringify(res));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    currentLvl = props.lvl;
    currentParent = props.parent;
    getData();
  }, []);

  if (data && JSON.parse(data).length > 0) {
    const options = JSON.parse(data).map(option => {
      return __jsx("option", {
        key: option.id,
        value: option.name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }
      });
    });

    const getOption = () => {
      let value = selectedRef.current.value;
      JSON.parse(data).map(option => {
        if (option.name == value) {
          props.setCategory(option);
          currentLvl = option.lvl + 1;
          getData(); //selectedRef.current.value = ''
          //forceUpdate()
        }
      });
    };

    content = __jsx("div", {
      className: props.className,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "h-8 flex",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("b", {
      className: "text-gray-900 text-sm text-center ml-2 mr-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "\u203A")), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("input", {
      className: "h-8 w-auto font-sans font-medium border text-gray-700 leading-tight hover:outline-none focus:outline-none p-1",
      ref: selectedRef,
      list: "data",
      onChange: getOption,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }), __jsx("datalist", {
      id: "data",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, options))));
  }

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (SelectCategory);

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
  }, "\u203A")), __jsx("div", {
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
/*! exports provided: RemovableTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemovableTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemovableTag */ "./components/graphics/tags/RemovableTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovableTag", function() { return _RemovableTag__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./components/widgets/article/AddContent.js":
/*!**************************************************!*\
  !*** ./components/widgets/article/AddContent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\AddContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddContent = props => {
  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnIcon"], {
    className: "h-10 w-10 mr-2",
    src: "/icons/text.png",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "text",
          text: ""
        }
      };
      props.appendContent(data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnIcon"], {
    className: "h-10 w-10",
    src: "/icons/photo.png",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "image",
          image: null
        }
      };
      props.appendContent(data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddContent);

/***/ }),

/***/ "./components/widgets/article/AddText.js":
/*!***********************************************!*\
  !*** ./components/widgets/article/AddText.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\AddText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddText = props => {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let text = props.data.data.text;

  let saveBtn = __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnBtb"], {
    className: "h-8 w-auto",
    onClick: () => {
      let data = {
        state: "valid",
        data: {
          type: "text",
          text: text
        }
      };
      props.editContent(props.index, data);
    },
    value: "Save Text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  });

  let editBtn = __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnBtb"], {
    className: "h-8 w-auto",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "text",
          text: props.data.data.text
        }
      };
      props.editContent(props.index, data);
    },
    value: "Edit Text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  });

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-auto w-full border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "m-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, props.data.state == "valid" ? __jsx("div", {
    className: "m-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 46
    }
  }, props.data.data.text)) : __jsx("textarea", {
    ref: inputRef,
    rows: "4",
    cols: "50",
    className: "appearance-none border h-full w-full py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: e => {
      text = e.target.value;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, props.data.data.text), __jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none",
    role: "button",
    onClick: () => props.removeContent(props.index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "x")), __jsx("div", {
    className: "h-auto w-auto mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, props.data.state == 'valid' ? editBtn : saveBtn))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddText);

/***/ }),

/***/ "./components/widgets/article/index.js":
/*!*********************************************!*\
  !*** ./components/widgets/article/index.js ***!
  \*********************************************/
/*! exports provided: AddContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddContent */ "./components/widgets/article/AddContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddContent", function() { return _AddContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/widgets/category/AddCategory.js":
/*!****************************************************!*\
  !*** ./components/widgets/category/AddCategory.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/category/SelectCategory */ "./components/graphics/category/SelectCategory.js");
/* harmony import */ var _graphics_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/tags */ "./components/graphics/tags/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\category\\AddCategory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AddCategory = props => {
  const select = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(() => ({}))[1];
  const {
    0: categoriesList,
    1: setCategoriesList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: lvl,
    1: setLvl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: parent,
    1: setParent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let currentLvl = 0;
  let parentId = null;

  const setCategory = category => {
    props.addCategory(category);
    parentId = category.id;
    setParent(parentId);
    let newLvl = category.lvl + 1;
    setLvl(newLvl);
    currentLvl = newLvl;
    initList();
  };

  const initList = () => {
    if (props.categories.length > 0) {
      let ncl = props.categories.map(function (category) {
        if (category.lvl < currentLvl) {
          return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__["RemovableTag"], {
            className: "w-auto sm:w-full",
            key: category.id,
            category: category,
            onClick: () => {
              currentLvl = category.lvl;
              setLvl(category.lvl);

              if (currentLvl == 0) {
                parentId = null;
                setParent(parentId);
              } else {
                parentId = props.categories[currentLvl - 1].id;
                setParent(parentId);
              }

              console.log(lvl);
              props.removeCategory(category.lvl);
              console.log(lvl);
              initList();
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }
          });
        }
      });
      ncl.push(__jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: props.categories[props.categories.length - 1].id,
        parent: props.categories[props.categories.length - 1],
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 22
        }
      }));
      setCategoriesList(ncl);
    } else {
      let select = __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 27
        }
      });

      let d = __jsx("div", {
        className: "h-auto w-auto bg-gray-300",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }));

      setCategoriesList(d);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    initList();
  }, []);

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Add Product Category"), __jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), categoriesList))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

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

/***/ "./components/widgets/image/AddSingleImage.js":
/*!****************************************************!*\
  !*** ./components/widgets/image/AddSingleImage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\image\\AddSingleImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AddSingleImage = props => {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  let uploadBtn = __jsx("div", {
    className: "relative m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("input", {
    className: "absolute invisible",
    ref: inputRef,
    accept: "image/jpeg, image/jpg, image/png",
    type: "file",
    onChange: input => {
      let data = {
        state: "valid",
        data: {
          type: "image",
          image: input.target.files[0]
        }
      };
      props.editContent(props.index, data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",
    role: "button",
    onClick: () => {
      inputRef.current.click();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-center h-auto w-auto m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Upload Photo")));

  let removeBtn = __jsx("div", {
    className: "relative m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",
    role: "button",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "image",
          image: null
        }
      };
      props.editContent(props.index, data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-center h-auto w-auto m-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Remove Photo")));

  let closeBtn = __jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",
    role: "button",
    onClick: () => props.removeContent(props.index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "x"));

  let content = __jsx("div", {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full bg-gray-300 pb-1/2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.state == "valid" ? (window.URL ? URL : webkitURL).createObjectURL(props.data.data.image) : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), props.close == "true" ? closeBtn : null, __jsx("div", {
    className: "absolute bottom-0 left-0 m-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, props.data.state == 'valid' ? removeBtn : uploadBtn)));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddSingleImage);

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
/* harmony import */ var _components_elements_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/bar */ "./components/elements/bar/index.js");
/* harmony import */ var _components_widgets_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/widgets/product */ "./components/widgets/product/index.js");
/* harmony import */ var _components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/elements/list/ProductGridList */ "./components/elements/list/ProductGridList.js");
/* harmony import */ var _components_elements_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/elements/product */ "./components/elements/product/index.js");
/* harmony import */ var _components_elements_article_AddArticle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/elements/article/AddArticle */ "./components/elements/article/AddArticle.js");
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
  const {
    0: clikced,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
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
      window.location = '/maker/auth';
    }
  }, []);

  let content = __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
          lineNumber: 40,
          columnNumber: 14
        }
      });
    });
    const sideBarData = [{
      id: 0,
      value: 'Products'
    }, {
      id: 1,
      value: 'Add Product'
    }, {
      id: 2,
      value: 'Add Article'
    }];

    let comp1 = __jsx(_components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "p-2",
      data: productsList,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 18
      }
    });

    let comp2 = __jsx(_components_elements_product__WEBPACK_IMPORTED_MODULE_6__["AddProduct"], {
      cookies: props.cookies,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 18
      }
    });

    let comp3 = __jsx(_components_elements_article_AddArticle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      cookies: props.cookies,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 18
      }
    });

    const componentsList = [comp1, comp2, comp3];
    content = __jsx("div", {
      className: "w-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      cookies: props.cookies,
      className: "w-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "w-full flex pt-10",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "w-64 h-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["SideBar"], {
      className: "w-full h-full",
      clicked: clikced,
      data: sideBarData,
      onClick: x => setClicked(x),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "w-full h-full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, componentsList[clikced])));
  } else if (!isLoading && (!data || data.length === 0)) {
    content = __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
    data['tags'] = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data['tags']);
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


function getCategories(lvl, id, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      operation: 'get',
      lvl: lvl,
      id: id
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/categories/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
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

function postRequest(data, csrttoken, url) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
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
        window.location = '/maker/auth';
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