webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/list/ArticleList.js":
/*!*************************************************!*\
  !*** ./components/elements/list/ArticleList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\list\\ArticleList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ArticleList = function ArticleList(props) {
  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto flex flex-col items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, props.data));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./components/widgets/article/ArticleBanner.js":
/*!*****************************************************!*\
  !*** ./components/widgets/article/ArticleBanner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\article\\ArticleBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ArticleBanner = function ArticleBanner(props) {
  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto w-full flex flex-col items-center bg-purple-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "font-roboto font-bold text-xl mt-4 mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, props.data.title), __jsx("span", {
    className: "mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, props.data.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/stories/".concat(props.data.url),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__["BtnBbw"], {
    className: "h-auto w-auto m-4",
    value: "READ MORE",
    weight: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 24
    }
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleBanner);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_elements_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/elements/alpha-displayer/AlphaDisplayer */ "./components/elements/alpha-displayer/AlphaDisplayer.js");
/* harmony import */ var _components_elements_MakersEntry_MakersEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/MakersEntry/MakersEntry */ "./components/elements/MakersEntry/MakersEntry.js");
/* harmony import */ var _components_elements_RegionsEntry_RegionsEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/RegionsEntry/RegionsEntry */ "./components/elements/RegionsEntry/RegionsEntry.js");
/* harmony import */ var _components_graphics_imageCover_Cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/graphics/imageCover/Cover */ "./components/graphics/imageCover/Cover.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_widgets_product_ProductGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/widgets/product/ProductGrid */ "./components/widgets/product/ProductGrid.js");
/* harmony import */ var _lib_parseCookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/parseCookies */ "./lib/parseCookies.js");
/* harmony import */ var _services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/api/get/getRequest */ "./services/api/get/getRequest.js");
/* harmony import */ var _services_authentication_authentication__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/authentication/authentication */ "./services/authentication/authentication.js");
/* harmony import */ var _services_authentication_checkUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authentication/checkUser */ "./services/authentication/checkUser.js");
/* harmony import */ var _components_elements_authentication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/elements/authentication */ "./components/elements/authentication/index.js");
/* harmony import */ var _components_elements_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/elements/bar */ "./components/elements/bar/index.js");
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/api/post/postRequest */ "./services/api/post/postRequest.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/elements/list/ArticleList */ "./components/elements/list/ArticleList.js");
/* harmony import */ var _components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/widgets/article/ArticleBanner */ "./components/widgets/article/ArticleBanner.js");


var _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\pages\\index.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



















var images = {
  cover01: "images/Articles/cover-01.jpg",
  cover02: "images/Articles/cover-02.jpg",
  cover1: "images/Articles/cover-1.jpg",
  cover2: "images/Articles/cover-2.jpg",
  cover3: "images/Articles/cover-3.jpg",
  cover4: "images/Articles/cover-4.jpg",
  cover5: "images/Articles/cover-5.jpg",
  cover6: "images/Articles/cover-6.jpg",
  cover7: "images/Articles/cover-7.jpg",
  cover8: "images/Articles/cover-8.jpg",
  cover9: "images/Articles/cover-9.jpg"
};
var articlesList = props.trending.map(function (article) {
  return __jsx(_components_widgets_article_ArticleBanner__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: "h-auto w-full max-w-screen-md m-4",
    key: article.id,
    data: article,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  });
});

var Hello = function Hello(props) {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tags: props.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "MorMade"), __jsx("link", {
    rel: "icon",
    href: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full flex flex-col bg-white items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_elements_bar__WEBPACK_IMPORTED_MODULE_15__["WelcomeBar"], {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "w-full max-w-screen-md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_elements_list_ArticleList__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: "w-full p-2",
    data: articlesList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(_components_elements_authentication__WEBPACK_IMPORTED_MODULE_14__["MakerRegist"], {
    className: "w-full my-4",
    csrf: props.cookies['csrftoken'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))));
};

Hello.getInitialProps = function _callee(_ref) {
  var req, cookies, tags, trending;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req;
          cookies = Object(_lib_parseCookies__WEBPACK_IMPORTED_MODULE_10__["parseCookies"])(req);
          console.log(cookies);
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_get_getRequest__WEBPACK_IMPORTED_MODULE_11__["getRequest"])("http://localhost:8000" + '/api/categories/').then(function (res) {
            return res;
          }));

        case 5:
          tags = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_16__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_17___default.a.stringify({
            operation: 'trending'
          }), cookies['csrftoken'], "http://localhost:8000" + '/api/articles/').then(function (res) {
            return res;
          }));

        case 8:
          trending = _context.sent;
          console.log(trending[0].text[0]);
          return _context.abrupt("return", {
            cookies: cookies,
            tags: tags,
            trending: trending
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ })

})
//# sourceMappingURL=index.js.efa41dfa3461406618db.hot-update.js.map