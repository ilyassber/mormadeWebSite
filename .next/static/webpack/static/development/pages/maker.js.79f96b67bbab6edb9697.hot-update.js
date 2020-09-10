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

  var currentLvl = 0;
  var parentId = null;

  var setCategory = function setCategory(category) {
    props.addCategory(category);
    parentId = category.id;
    setParent(parentId);
    var newLvl = category.lvl + 1;
    setLvl(newLvl);
    currentLvl = newLvl;
    initList();
  };

  var initList = function initList() {
    if (props.categories.length > 0) {
      var ncl = props.categories.map(function (category) {
        if (category.lvl < currentLvl) {
          return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__["RemovableTag"], {
            className: "w-auto sm:w-full",
            key: category.id,
            category: category,
            onClick: function onClick() {
              currentLvl = category.lvl;
              setLvl(category.lvl);

              if (currentLvl == 0) {
                parentId = null;
                setParent(parentId);
              } else {
                parentId = props.categories[currentLvl - 1].id;
                setParent(parentId);
              }

              console.log(lvl);
              props.removeCategory(category.lvl);
              console.log(lvl);
              initList();
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
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
          lineNumber: 52,
          columnNumber: 22
        }
      }));
      setCategoriesList(ncl);
    } else {
      var _select = __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 27
        }
      });

      var d = __jsx("div", {
        className: "h-auto w-auto bg-gray-300",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }));

      setCategoriesList(d);
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
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Add Product Category"), __jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }), categoriesList))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

/***/ })

})
//# sourceMappingURL=maker.js.79f96b67bbab6edb9697.hot-update.js.map