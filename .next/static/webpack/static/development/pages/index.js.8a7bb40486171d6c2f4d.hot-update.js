webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/authentication/MakerRegist.js":
/*!***********************************************************!*\
  !*** ./components/elements/authentication/MakerRegist.js ***!
  \***********************************************************/
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
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\authentication\\MakerRegist.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MakerRegist = function MakerRegist(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      emailError = _useState[0],
      setEmailError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      numError = _useState2[0],
      setNumError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('صانع ؟ إنضم إلينا'),
      welcome = _useState3[0],
      setWelcome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      reset = _useState4[0],
      setReset = _useState4[1];

  var email;
  var num;

  var handleEmailChange = function handleEmailChange(event) {
    email = event.target.value;
  };

  var handleNumChange = function handleNumChange(event) {
    num = event.target.value;
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (email != null && email != '' && num != null && num != '') {
      var data = {
        username: email.split('@')[0],
        email: email,
        phone: num,
        is_maker: true
      };
      Object(_services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__["registerUser"])(data, "signup_maker", props.csrf).then(function (response) {
        if (response.status === "error") {
          setWelcome('لقد تعذر تسجيل هذا البريد الإلكتروني!');
          console.log('error');
        } else {
          setWelcome('شكرا، سنقوم بالتواصل معك قريبا');
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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-auto overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover",
    src: "/wheel-pot.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "relative w-full h-auto p-6 justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "h-auto w-full font-roboto font-bold text-white text-2xl text-right align-right mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, welcome), __jsx("div", {
    className: "w-full h-auto flex flex-wrap flex-col md:flex-row-reverse items-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    reset: reset,
    error: numError,
    align: "right",
    color: "white",
    className: "w-full flex-2 mt-2",
    label: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
    placeholder: "xxxxxxxxxx",
    onChange: handleNumChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__["TxtField"], {
    reset: reset,
    error: emailError,
    align: "right",
    color: "white",
    className: "w-full flex-2 mt-2 md:mr-2",
    label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    placeholder: "example@email.com",
    onChange: handleEmailChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "w-full h-full flex-1 content-end flex-wrap mt-4 md:mr-2 md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-12",
    weight: "bold",
    value: "\u0625\u0646\u0636\u0645",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (MakerRegist);

/***/ })

})
//# sourceMappingURL=index.js.8a7bb40486171d6c2f4d.hot-update.js.map