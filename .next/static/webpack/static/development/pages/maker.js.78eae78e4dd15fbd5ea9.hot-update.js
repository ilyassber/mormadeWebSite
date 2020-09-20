webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/elements/product/AddProduct.js":
/*!***************************************************!*\
  !*** ./components/elements/product/AddProduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/textFields */ "./components/graphics/textFields/index.js");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphics/buttons */ "./components/graphics/buttons/index.js");
/* harmony import */ var _widgets_image_AddImageGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/image/AddImageGrid */ "./components/widgets/image/AddImageGrid.js");
/* harmony import */ var _services_api_uploadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/uploadImage */ "./services/api/uploadImage.js");
/* harmony import */ var _services_api_addProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/api/addProduct */ "./services/api/addProduct.js");
/* harmony import */ var _widgets_category_AddCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widgets/category/AddCategory */ "./components/widgets/category/AddCategory.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\elements\\product\\AddProduct.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var AddProduct = function AddProduct(props) {
  var data = {};
  data['pics_list'] = [];
  data['tags'] = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      files = _useState[0],
      setFiles = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var getValue = function getValue(event, access) {
    if (access == 'name') {
      data['name'] = event.target.value;
    } else if (access == 'description') {
      data['description'] = event.target.value;
    } else if (access == 'price') {
      data['price'] = event.target.value;
    } else if (access == 'quantity') {
      data['quantity'] = event.target.value;
    }
  };

  var appendFile = function appendFile(newFiles) {
    newFiles.forEach(function (f) {
      return files.push(f);
    }, _this);
  };

  var removeFile = function removeFile(index) {
    files.splice(index, 1);
  };

  var appendCategory = function appendCategory(category) {
    categories.splice(category.lvl, 0, category);
  };

  var removeCategory = function removeCategory(index) {
    categories.splice(index, categories.length - index);
  };

  var handleSubmit = function handleSubmit(event) {
    var i, response, _i;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            i = 0;

          case 2:
            if (!(i < files.length)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_services_api_uploadImage__WEBPACK_IMPORTED_MODULE_5__["uploadImage"])(event, files[0], props.cookies['csrftoken']).then(function (res) {
              return res;
            }));

          case 5:
            response = _context.sent;
            data['pics_list'].push(response.data);

          case 7:
            i++;
            _context.next = 2;
            break;

          case 10:
            for (_i = 0; _i < categories.length; _i++) {
              data['tags'].push(categories[_i].id);
            }

            console.log(data);
            Object(_services_api_addProduct__WEBPACK_IMPORTED_MODULE_6__["addProduct"])(data, props.cookies['csrftoken']).then(function (res) {
              console.log(res);
            });

          case 13:
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtField"], {
    label: "Product Name",
    onChange: function onChange(event) {
      return getValue(event, 'name');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtArea"], {
    label: "Product Description",
    onChange: function onChange(event) {
      return getValue(event, 'description');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["TxtField"], {
    label: "Product Region",
    onChange: function onChange(event) {
      return getValue(event, 'region');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["IntField"], {
    label: "Price",
    onChange: function onChange(event) {
      return getValue(event, 'price');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_2__["IntField"], {
    label: "Quantity",
    onChange: function onChange(event) {
      return getValue(event, 'quantity');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }), __jsx(_widgets_category_AddCategory__WEBPACK_IMPORTED_MODULE_7__["default"], {
    categories: categories,
    addCategory: appendCategory,
    removeCategory: removeCategory,
    csrftoken: props.cookies['csrftoken'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(_widgets_image_AddImageGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    files: files,
    addImage: appendFile,
    removeImage: removeFile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_3__["BtnBbw"], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD PRODUCT",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ })

})
//# sourceMappingURL=maker.js.78eae78e4dd15fbd5ea9.hot-update.js.map