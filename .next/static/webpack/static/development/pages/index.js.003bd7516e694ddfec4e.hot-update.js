webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/bar/NavMenu.js":
/*!********************************************!*\
  !*** ./components/elements/bar/NavMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/authentication */ "./services/authentication/authentication.js");
/* harmony import */ var _services_hooks_onClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/hooks/onClickOutside */ "./services/hooks/onClickOutside.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\bar\\NavMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var NavMenu = function NavMenu(props) {
  var user = props.user ? JSON.parse(props.user) : null; //let user = null

  var object = __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-auto flex flex-col bg-white shadow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-32 flex flex-col m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, user != null ? __jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-900 text-sm text-left hover:underline my-2",
    type: "button",
    onClick: function onClick() {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, user.username) : __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_3__["BtnBbw"], {
    className: "w-auto h-12 mt-2 mb-2",
    value: "SIGN IN",
    onClick: function onClick() {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }), user != null ? __jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-700 text-xs text-left hover:underline my-2",
    type: "button",
    onClick: function onClick() {
      Object(_services_authentication_authentication__WEBPACK_IMPORTED_MODULE_1__["authenticate"])({}, "logout", js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('csrftoken'));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Sign out") : null)));

  var focusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var onBlurHandler = function onBlurHandler(event) {
    if (event.type != 'keydown') {
      props.callBack();
    } else if (event.keyCode == 27) {
      props.callBack();
    }
  };

  Object(_services_hooks_onClickOutside__WEBPACK_IMPORTED_MODULE_2__["onClickOutside"])(focusRef, onBlurHandler);

  var contentWithoutMenu = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));

  var contentWithMenu = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: focusRef,
    className: "",
    __self: _this,
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

/***/ })

})
//# sourceMappingURL=index.js.003bd7516e694ddfec4e.hot-update.js.map