webpackHotUpdate("static\\development\\pages\\makers.js",{

/***/ "./pages/makers/index.js":
/*!*******************************!*\
  !*** ./pages/makers/index.js ***!
  \*******************************/
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
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var _components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/widgets/article/ArticleBanner */ "./components/widgets/article/ArticleBanner.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_elements_discuss_WaitList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/elements/discuss/WaitList */ "./components/elements/discuss/WaitList.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\makers\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Makers = function Makers(props) {
  var content = __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tags: props.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-screen flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    cookies: props.cookies,
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_3__["WelcomeBar"], {
    className: "w-screen pt-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "w-full h-auto flex flew-wrap flex-col items-center pt-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "w-full h-full max-w-screen-sm flex flex-wrap flex-col items-center content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(_components_elements_discuss_WaitList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "w-full px-2",
    csrf: props.cookies['csrftoken'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  })))));

  return content;
};

Makers.getInitialProps = function _callee(_ref) {
  var req, cookies, tags;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req;
          cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_2__["parseCookies"])(req);
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_6__["getRequest"])("http://localhost:8000" + '/api/categories/').then(function (res) {
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

/* harmony default export */ __webpack_exports__["default"] = (Makers);

/***/ })

})
//# sourceMappingURL=makers.js.bc27ed2a8c45e7d013a0.hot-update.js.map