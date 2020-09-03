webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./pages/maker/index.js":
/*!******************************!*\
  !*** ./pages/maker/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var _components_elements_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/bar */ "./components/elements/bar/index.js");
/* harmony import */ var _components_widgets_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/widgets/product */ "./components/widgets/product/index.js");
/* harmony import */ var _components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/elements/list/ProductGridList */ "./components/elements/list/ProductGridList.js");
/* harmony import */ var _components_elements_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/elements/product */ "./components/elements/product/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\maker\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var UserPage = function UserPage(props) {
  console.log(props.cookies);
  console.log(props.data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      clikced = _useState3[0],
      setClicked = _useState3[1];

  var sideBarData = [{
    id: 0,
    value: 'products'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('useEffect runs');
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;

    if (props.cookies.utoken != null) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/products/').then(function (res) {
        console.log(res.data);
        setData(JSON.stringify(res.data));
        setIsLoading(false);
      });
    } else {
      window.location = '/';
    }
  }, []);

  var content = __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Loading characters...");

  if (!isLoading && data && data.length > 0) {
    console.log(data);
    var productsList = JSON.parse(data).map(function (product) {
      return __jsx(_components_widgets_product__WEBPACK_IMPORTED_MODULE_4__["ProductGrid"], {
        className: "h-auto w-auto m-2",
        key: product.id,
        data: product,
        owner: "ilyass",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 14
        }
      });
    });
    content = __jsx("div", {
      className: "w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      cookies: props.cookies,
      className: "w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "w-full flex pt-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "w-64 h-full bg-xw-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["SideBar"], {
      className: "w-full h-full",
      data: sideBarData,
      onClick: function onClick(x) {
        return setClicked(x);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "w-full h-full bg-green-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx(_components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "p-2",
      data: productsList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }), __jsx(_components_elements_product__WEBPACK_IMPORTED_MODULE_6__["AddProduct"], {
      cookies: props.cookies,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }))));
  } else if (!isLoading && (!data || data.length === 0)) {
    content = __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, "Could not fetch any data.");
  }

  return content;
};

UserPage.getInitialProps = function (_ref) {
  var req = _ref.req;
  var cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])(req);
  return {
    cookies: cookies,
    data: req.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (UserPage);

/***/ })

})
//# sourceMappingURL=maker.js.55eee0621822d842e498.hot-update.js.map