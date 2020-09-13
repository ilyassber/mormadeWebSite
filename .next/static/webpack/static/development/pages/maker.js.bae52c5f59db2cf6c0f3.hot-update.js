webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/widgets/article/AddText.js":
/*!***********************************************!*\
  !*** ./components/widgets/article/AddText.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\AddText.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AddText = function AddText(props) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var text = "";

  var saveBtn = __jsx("div", {
    className: "h-auto w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-auto flex flex-wrap text-center bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75",
    role: "button",
    onClick: function onClick() {
      var data = {
        state: "valid",
        data: {
          type: "text",
          text: text
        }
      };
      props.editContent(props.index, data);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-center h-auto w-auto m-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Save Text")));

  var editBtn = __jsx("div", {
    className: "h-auto w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-auto flex flex-wrap text-center bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75",
    role: "button",
    onClick: function onClick() {
      var data = {
        state: "edit",
        data: {
          type: "text",
          text: props.data.data.text
        }
      };
      props.editContent(props.index, data);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-center h-auto w-auto m-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Edit Text")));

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    text = props.data.data.text;
    /*if (props.data.state == "edit") {
        inputRef.current.value = props.data.data.text
    }*/
  }, []);

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-auto w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, props.data.state == "valid" ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 26
    }
  }, props.data.data.text)) : __jsx("textarea", {
    ref: inputRef,
    rows: "4",
    cols: "50",
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: function onChange(e) {
      text = e.target.value;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, props.data.data.text), __jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",
    role: "button",
    onClick: function onClick() {
      return props.removeContent(props.index);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "x"))), __jsx("div", {
    className: "h-auto w-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, props.data.state == 'valid' ? editBtn : saveBtn));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddText);

/***/ })

})
//# sourceMappingURL=maker.js.bae52c5f59db2cf6c0f3.hot-update.js.map