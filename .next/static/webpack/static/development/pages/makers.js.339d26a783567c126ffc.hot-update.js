webpackHotUpdate("static\\development\\pages\\makers.js",{

/***/ "./components/elements/discuss/WaitList.js":
/*!*************************************************!*\
  !*** ./components/elements/discuss/WaitList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication/registerUser */ "./services/authentication/registerUser.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\discuss\\WaitList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WaitList = function WaitList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      emailError = _useState[0],
      setEmailError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('>> JOIN OUR NEWSLETTER'),
      welcome = _useState2[0],
      setWelcome = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      reset = _useState3[0],
      setReset = _useState3[1];

  var email;

  var handleEmailChange = function handleEmailChange(event) {
    email = event.target.value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (email != null && email != '') {
      var data = {
        username: email.split('@')[0],
        email: email,
        role: 'wait_list'
      };
      Object(_services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__["registerUser"])(data, "wait_list", props.csrf).then(function (response) {
        if (response.status === "error") {
          setWelcome('Go Back Soon!');
          console.log('error');
        } else {
          setWelcome('THANK YOU, GO BACK SOON!');
          setReset(true);
          console.log('success');
        }
      })["catch"](function (error) {
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

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative max-w-screen-sm h-auto overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover",
    src: "/street-vendor-b.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "relative w-full h-auto p-6 justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "h-auto w-full font-roboto font-bold text-white text-3xl text-left align-left mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "SOON"), __jsx("h3", {
    className: "h-auto w-full font-bold text-white text-3xl text-right align-right mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, 'قريبا'), __jsx("span", {
    className: "h-auto w-full font-roboto font-light text-white text-base text-center align-center mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, welcome), __jsx("div", {
    className: "w-full h-auto flex flex-wrap flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    reset: reset,
    error: emailError,
    color: "white",
    placeholder: "ENTER YOUR EMAIL HERE",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-full h-full flex-1 content-end flex-wrap mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-12",
    weight: "bold",
    value: "JOIN US",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (WaitList);

/***/ })

})
//# sourceMappingURL=makers.js.339d26a783567c126ffc.hot-update.js.map