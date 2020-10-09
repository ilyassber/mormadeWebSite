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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\discuss\\LeaveMessage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var LeaveMessage = function LeaveMessage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      emailError = _useState[0],
      setEmailError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('LEAVE US A MESSAGE'),
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
        email: email,
        text: message
      };
      var _content = {
        operation: 'register',
        data: querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(data)
      };
      Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_4__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_5___default.a.stringify(_content), js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('csrftoken'), "http://localhost:8000" + '/api/messages/').then(function (response) {
        console.log(response);

        if (response.status === "error") {
          setWelcome('Something Wrong!');
          console.log('error');
        } else {
          setWelcome('THANK YOU!');
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
    }
  };

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-full flex flex-col items-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("strong", {
    className: "font-roboto font-black text-3xl text-white mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, welcome), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtField"], {
    reset: reset,
    disabled: reset,
    error: emailError,
    borderColor: "gray-100",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: 10,
    placeholder: "EMAIL",
    placeholderColor: "white",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtArea"], {
    reset: reset,
    disabled: reset,
    borderColor: "gray-600",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: "full",
    placeholder: "Message...",
    placeholderColor: "white",
    onChange: handleMessageChange,
    className: "w-full max-w-64 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "w-full h-auto flex flex-row-reverse",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (LeaveMessage);

/***/ })

})
//# sourceMappingURL=index.js.a384011a35eda5137af9.hot-update.js.map