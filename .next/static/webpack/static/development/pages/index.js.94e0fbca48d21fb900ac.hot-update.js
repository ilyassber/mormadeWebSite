webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/discuss/LeaveMessage.js":
/*!*****************************************************!*\
  !*** ./components/elements/discuss/LeaveMessage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\discuss\\LeaveMessage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LeaveMessage = function LeaveMessage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      emailError = _useState[0],
      setEmailError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('JOIN OUR NEWSLETTER'),
      welcome = _useState2[0],
      setWelcome = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      reset = _useState3[0],
      setReset = _useState3[1];

  var email;
  var message;

  var handleEmailChange = function handleEmailChange(event) {
    email = event.target.value;
  };

  var handleMessageChange = function handleMessageChange(event) {
    message = event.target.value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (email != null && email != '') {
      var data = {
        username: email.split('@')[0],
        email: email,
        role: 'wait_list'
      };
      registerUser(data, "wait_list", props.csrf).then(function (response) {
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
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full flex flex-col items-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "font-roboto font-black text-3xl text-white mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "LEAVE US A MESSAGE"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtField"], {
    reset: reset,
    error: emailError,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    height: 10,
    placeholder: "EMAIL",
    placeholderColor: "white",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtArea"], {
    reset: reset,
    error: emailError,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    height: "full",
    placeholder: "Message...",
    placeholderColor: "white",
    onChange: handleEmailChange,
    className: "w-full max-w-64 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "w-full h-auto flex flex-wrap items-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["Btn"], {
    className: "w-auto h-auto",
    borderColor: "white",
    bgColor: "white",
    textColor: "white",
    textSize: "sm",
    textWeight: "medium",
    height: 10,
    value: "Send",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (LeaveMessage);

/***/ })

})
//# sourceMappingURL=index.js.94e0fbca48d21fb900ac.hot-update.js.map