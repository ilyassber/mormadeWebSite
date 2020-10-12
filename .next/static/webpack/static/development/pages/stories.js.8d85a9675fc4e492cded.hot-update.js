webpackHotUpdate("static\\development\\pages\\stories.js",{

/***/ "./pages/stories/index.js":
/*!********************************!*\
  !*** ./pages/stories/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var _components_elements_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/bar */ "./components/elements/bar/index.js");
/* harmony import */ var _components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/elements/list/ArticleList */ "./components/elements/list/ArticleList.js");
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var _components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/widgets/article/ArticleBanner */ "./components/widgets/article/ArticleBanner.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\stories\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Stories = function Stories(props) {
  console.log(props.cookies);
  console.log(props.data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('useEffect runs');
    setIsLoading(true);
    Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_5__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify({
      operation: "all"
    }), props.cookies['csrftoken'], "http://localhost:8000" + '/api/articles/').then(function (res) {
      console.log(res);
      setData(JSON.stringify(res));
      setIsLoading(false);
    });
  }, []);
  var body = null;

  if (!isLoading) {
    var articlesList = data ? JSON.parse(data).map(function (article) {
      return __jsx(_components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "h-auto w-full max-w-screen-md m-4",
        key: article.id,
        data: article,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 20
        }
      });
    }) : null;

    var articles = __jsx(_components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "w-full p-2",
      data: articlesList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    });

    body = __jsx("div", {
      className: "w-screen flex flex-col items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "w-full h-auto flex pt-10",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "w-full h-auto flex flex-col items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, articles)));
  } else if (!isLoading && (!data || data.length === 0)) {
    body = null;
  }

  var content = __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    tags: props.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, body);

  return content;
};

Stories.getInitialProps = function _callee(_ref) {
  var req, cookies, tags;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req;
          cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])(req);
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_8__["getRequest"])("http://localhost:8000" + '/api/categories/').then(function (res) {
            return res;
          }));

        case 4:
          tags = _context.sent;
          return _context.abrupt("return", {
            cookies: cookies,
            tags: tags
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ })

})
//# sourceMappingURL=stories.js.8d85a9675fc4e492cded.hot-update.js.map