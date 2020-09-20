webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/elements/article/AddArticle.js":
/*!***************************************************!*\
  !*** ./components/elements/article/AddArticle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _services_api_uploadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/uploadImage */ "./services/api/uploadImage.js");
/* harmony import */ var _widgets_article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/article */ "./components/widgets/article/index.js");
/* harmony import */ var _widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/image/AddSingleImage */ "./components/widgets/image/AddSingleImage.js");
/* harmony import */ var _widgets_article_AddText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/article/AddText */ "./components/widgets/article/AddText.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/post/postRequest */ "./services/api/post/postRequest.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\article\\AddArticle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var AddArticle = function AddArticle(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: null,
    description: null,
    cover: {
      state: "edit",
      data: {
        type: "image",
        image: null
      }
    },
    text: []
  }),
      data = _useState[0],
      setData = _useState[1];

  var getValue = function getValue(event, access) {
    if (access == 'title') {
      setData(_objectSpread({}, data, {
        title: event.target.value
      }));
    } else if (access == 'description') {
      setData(_objectSpread({}, data, {
        description: event.target.value
      }));
    }
  };

  var addCover = function addCover(file) {
    setData(_objectSpread({}, data, {
      cover: file
    }));
  };

  var removeCover = function removeCover() {
    setData(_objectSpread({}, data, {
      cover: null
    }));
  };

  var appendContent = function appendContent(content) {
    var contentList = data.text;
    contentList.push(content);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  var editContent = function editContent(index, content) {
    var contentList = data.text;
    contentList[index] = content;
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  var removeContent = function removeContent(index) {
    var contentList = data.text;
    contentList.splice(index, 1);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  var editCoverContent = function editCoverContent(index, content) {
    setData(_objectSpread({}, data, {
      cover: content
    }));
  };

  var handleSubmit = function handleSubmit(event) {
    var coverId, textList, i, response, newData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_5__["uploadImage"])(event, data.cover.data.image, props.cookies['csrftoken']).then(function (res) {
              return res.data;
            }));

          case 3:
            coverId = _context.sent;
            textList = [];
            i = 0;

          case 6:
            if (!(i < data.text.length)) {
              _context.next = 18;
              break;
            }

            if (!(data.text[i].data.type == 'image')) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_5__["uploadImage"])(event, data.text[i].data.image, props.cookies['csrftoken']).then(function (res) {
              return res;
            }));

          case 10:
            response = _context.sent;
            textList.push(querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
              type: 'image',
              image: response.data
            }));
            _context.next = 15;
            break;

          case 14:
            textList.push(querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify({
              type: 'text',
              text: data.text[i].data.text
            }));

          case 15:
            i++;
            _context.next = 6;
            break;

          case 18:
            newData = _objectSpread({}, data, {
              cover: coverId,
              text: querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify(textList)
            });
            Object(_services_api_post_postRequest__WEBPACK_IMPORTED_MODULE_10__["postRequest"])(querystring__WEBPACK_IMPORTED_MODULE_9___default.a.stringify(newData), props.cookies['csrftoken'], 'http://localhost:8000/articles/').then(function (res) {
              console.log(res);
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full h-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "w-full m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_3__["TxtField"], {
    className: "w-full",
    label: "Title",
    onChange: function onChange(event) {
      return getValue(event, 'title');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_3__["TxtArea"], {
    className: "w-full",
    label: "Description",
    onChange: function onChange(event) {
      return getValue(event, 'description');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "w-full mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, "Add Cover"), __jsx(_widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    index: -1,
    className: "",
    data: data.cover,
    close: "false",
    editContent: editCoverContent,
    removeContent: function removeContent() {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "w-full pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Add Article Content"), __jsx("div", {
    className: "h-auto w-full border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, data.text.map(function (content, index) {
    if (content.data.type == "image") {
      return __jsx(_widgets_image_AddSingleImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        index: index,
        className: "m-2",
        data: content,
        close: "true",
        editContent: editContent,
        removeContent: removeContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 45
        }
      });
    } else {
      return __jsx(_widgets_article_AddText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        index: index,
        className: "m-2",
        data: content,
        editContent: editContent,
        removeContent: removeContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 45
        }
      });
    }
  }), __jsx(_widgets_article__WEBPACK_IMPORTED_MODULE_6__["AddContent"], {
    className: "m-2",
    appendContent: appendContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }))), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_4__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD ARTICLE",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddArticle);

/***/ })

})
//# sourceMappingURL=maker.js.a4190edce9ea57c0983f.hot-update.js.map