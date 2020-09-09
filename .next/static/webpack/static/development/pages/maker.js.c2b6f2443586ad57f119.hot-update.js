webpackHotUpdate("static\\development\\pages\\maker.js",{

/***/ "./components/widgets/category/AddCategory.js":
/*!****************************************************!*\
  !*** ./components/widgets/category/AddCategory.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphics/category/SelectCategory */ "./components/graphics/category/SelectCategory.js");
/* harmony import */ var _graphics_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphics/tags */ "./components/graphics/tags/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\1337\\Documents\\WorkSpace\\ecomart\\dev\\mormadeWebSite\\components\\widgets\\category\\AddCategory.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AddCategory = function AddCategory(props) {
  var select = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var forceUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(function () {
    return {};
  })[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      categoriesList = _useState[0],
      setCategoriesList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      lvl = _useState2[0],
      setLvl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      parent = _useState3[0],
      setParent = _useState3[1];

  var setCategory = function setCategory(category) {
    props.addCategory(category);
    setParent(category.id);
    setLvl(category.lvl + 1);
    initList();
  };

  var initList = function initList() {
    if (props.categories.length > 0) {
      console.log('+');
      var ncl = props.categories.map(function (category) {
        if (category.lvl < lvl) {
          return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__["RemovableTag"], {
            key: category.id,
            category: category,
            onClick: function onClick() {
              props.removeCategory(category.lvl);
              setLvl(category.lvl);

              if (currentLvl == 0) {
                setParent(null);
              } else {
                setParent(props.categories[currentLvl - 1].id);
              }

              initList();
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 25
            }
          });
        }
      });
      ncl.push(__jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: props.categories[props.categories.length - 1].id,
        parent: props.categories[props.categories.length - 1],
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 22
        }
      }));
      setCategoriesList(ncl);
    } else {
      console.log('-');

      var _select = __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 27
        }
      });

      setCategoriesList(_select);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initList();
  }, []);

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Add Product Category"), __jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, categoriesList)));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

/***/ })

})
//# sourceMappingURL=maker.js.c2b6f2443586ad57f119.hot-update.js.map