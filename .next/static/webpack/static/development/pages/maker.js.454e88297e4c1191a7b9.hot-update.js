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
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var content = __jsx("div", {
    className: "m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "w-full",
    action: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_3__["TxtField"], {
    label: "Title",
    onChange: function onChange(event) {
      return getValue(event, 'title');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_3__["TxtArea"], {
    label: "Description",
    onChange: function onChange(event) {
      return getValue(event, 'description');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
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
      lineNumber: 82,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Add Article Content"), __jsx("div", {
    className: "h-auto w-full border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
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
          lineNumber: 89,
          columnNumber: 41
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
          lineNumber: 91,
          columnNumber: 41
        }
      });
    }
  }), __jsx(_widgets_article__WEBPACK_IMPORTED_MODULE_6__["AddContent"], {
    className: "m-2",
    appendContent: appendContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }))), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_4__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD ARTICLE",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddArticle);

/***/ })

})
//# sourceMappingURL=maker.js.454e88297e4c1191a7b9.hot-update.js.map