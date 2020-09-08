webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/graphics/category/SelectCategory.js":
/*!********************************************************!*\
  !*** ./components/graphics/category/SelectCategory.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api/fetch/getCategories */ "./services/api/fetch/getCategories.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\graphics\\category\\SelectCategory.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SelectCategory = function SelectCategory(props) {
  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {
    return {};
  })[1];
  var selectedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var currentLvl = null;
  var content = null;

  var getData = function getData() {
    setData(null);
    console.log(currentLvl);
    Object(_services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__["getCategories"])(currentLvl, props.parent, props.csrftoken).then(function (res) {
      console.log(res);
      setData(JSON.stringify(res));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    currentLvl = props.lvl;
    getData();
  }, []);

  if (data && JSON.parse(data).length > 0) {
    var options = JSON.parse(data).map(function (option) {
      return __jsx("option", {
        key: option.id,
        value: option.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }
      });
    });

    var getOption = function getOption() {
      var value = selectedRef.current.value;
      JSON.parse(data).map(function (option) {
        if (option.name == value) {
          props.setCategory(option);
          currentLvl = option.lvl + 1;
          getData();
          selectedRef.current.value = '';
          forceUpdate();
        }
      });
    };

    content = __jsx("div", {
      className: props.className,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "h-8 flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("b", {
      className: "text-gray-900 text-sm text-center ml-2 mr-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "\u203A")), __jsx("div", {
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }), __jsx("datalist", {
      id: "data",
      __self: _this,
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

/***/ })

})
//# sourceMappingURL=maker.js.ccbf688762b7cd17fabf.hot-update.js.map