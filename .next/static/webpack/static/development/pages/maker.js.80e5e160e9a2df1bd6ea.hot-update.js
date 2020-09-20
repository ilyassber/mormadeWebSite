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
/* harmony import */ var _components_elements_article_AddArticle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/elements/article/AddArticle */ "./components/elements/article/AddArticle.js");
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('useEffect runs');
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;

    if (props.cookies.utoken != null) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:8000" + '/api/products/').then(function (res) {
        console.log(res.data);
        setData(JSON.stringify(res.data));
        setIsLoading(false);
      });
    } else {
      window.location = '/maker/auth';
    }
  }, []);

  var content = __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
          lineNumber: 40,
          columnNumber: 14
        }
      });
    });
    var sideBarData = [{
      id: 0,
      value: 'Products'
    }, {
      id: 1,
      value: 'Add Product'
    }, {
      id: 2,
      value: 'Add Article'
    }];

    var comp1 = __jsx(_components_elements_list_ProductGridList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "w-full p-2",
      data: productsList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 18
      }
    });

    var comp2 = __jsx(_components_elements_product__WEBPACK_IMPORTED_MODULE_6__["AddProduct"], {
      className: "w-full p-2",
      cookies: props.cookies,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 18
      }
    });

    var comp3 = __jsx(_components_elements_article_AddArticle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "w-full p-2",
      cookies: props.cookies,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 18
      }
    });

    var componentsList = [comp1, comp2, comp3];
    content = __jsx("div", {
      className: "w-screen bg-teal-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "w-full h-auto",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      cookies: props.cookies,
      className: "w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }), __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["WelcomeBar"], {
      className: "w-screen pt-12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "w-screen flex pt-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "w-auto h-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["SideBar"], {
      className: "w-full h-full",
      clicked: clikced,
      data: sideBarData,
      onClick: function onClick(x) {
        return setClicked(x);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "w-screen h-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, componentsList[clikced]))));
  } else if (!isLoading && (!data || data.length === 0)) {
    content = __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=maker.js.80e5e160e9a2df1bd6ea.hot-update.js.map