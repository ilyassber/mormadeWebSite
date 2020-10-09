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
    __self: _this,
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

/***/ }),

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('JOIN OUR NEWSLETTER'),
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
    className: "w-full h-auto flex flex-wrap flex-col items-center mt-2",
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
    height: 10,
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
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__["BtnBbw"], {
    className: "w-full h-10",
    weight: "bold",
    value: "JOIN US",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/icomoon */ "./node_modules/react-icons-kit/icomoon/index.js");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _discuss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discuss */ "./components/elements/discuss/index.js");
var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Footer(_ref) {
  var _this = this;

  var categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links;

  var IconsContainer = function IconsContainer() {
    return __jsx("div", {
      className: "flex flex-row mx-2 text-gray-500 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["facebook2"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 33
      }
    })), __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["instagram"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }
    })), __jsx("a", {
      className: "mx-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      size: 25,
      icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_3__["twitter"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 33
      }
    })));
  };

  var CategoriesCard = function CategoriesCard() {
    return __jsx("div", {
      className: "flex flex-1  flex-col justify-start items-center md:items-start md:pl-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "CATEGORIES"), __jsx("ul", {
      className: "ml-2 flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, categories.map(function (categorie, index) {
      return index < max_shown && __jsx("li", {
        key: index,
        className: "my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 44
        }
      }, categorie.tag.toLowerCase());
    })));
  };

  var EntriesCard = function EntriesCard() {
    return __jsx("div", {
      className: "flex flex-1 flex-col justify-start items-center md:items-start pl-10 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, "ENTRIES"), __jsx("ul", {
      className: "ml-2 flex flex-col justify-start items-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, links.map(function (link, indx) {
      return __jsx("li", {
        className: "my-2 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
        key: indx,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: link.path,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 48
        }
      }, link.page.toLowerCase())));
    })));
  };

  return __jsx("div", {
    className: "flex justify-center w-full bg-black shadow-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-9/12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center items-center w-full h-72",
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
    className: "flex flex-col md:flex-row justify-start md:justify-around items-center w-full h-96",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex flex-1 flex-row justify-between  w-full md:w-auto",
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
    className: "w-full h-full flex flex-1 justify-center items-center md:w-auto text-gray-500",
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

/***/ "./components/graphics/buttons/Btn.js":
/*!********************************************!*\
  !*** ./components/graphics/buttons/Btn.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\buttons\\Btn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Btn = function Btn(props) {
  var borderColor = 'black';
  var textColor = 'white';
  var textSize = 'sm';
  var textWeight = 'medium';
  var hoverColor = 'gray-700';
  var borderHoverColor = 'white';
  var bgColor = 'black';
  var disableColor = 'gray-300';
  var disabled = false;
  var height = 12;
  var shadow = 'border border-';

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

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
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
    __self: _this,
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

/***/ "./components/graphics/textFields/TxtArea.js":
/*!***************************************************!*\
  !*** ./components/graphics/textFields/TxtArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TxtArea = function TxtArea(props) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var align = 'left';
  var color = 'gray-900';
  var borderColor = 'gray-300';
  var textColor = 'gray-700';
  var focusColor = 'black';
  var bgColor = 'transparent';
  var disableColor = 'gray-300';
  var disabled = false;
  var placeholder = '';
  var placeholderColor = 'gray-500';
  var height = 12;
  var shadow = 'border border-';

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

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: _this,
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
    __self: _this,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\textFields\\TxtField.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TxtField = function TxtField(props) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var align = 'left';
  var color = 'gray-900';
  var borderColor = 'gray-300';
  var textColor = 'gray-700';
  var focusColor = 'black';
  var bgColor = 'transparent';
  var disableColor = 'gray-300';
  var disabled = false;
  var placeholder = '';
  var placeholderColor = 'gray-500';
  var height = 12;
  var shadow = 'border border-';

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

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align,
    __self: _this,
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
    __self: _this,
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

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })

})
//# sourceMappingURL=index.js.eacaa8948538a8772472.hot-update.js.map