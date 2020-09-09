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

  var initSelect = function initSelect() {
    select.current.focus();
  };

  var initList = function initList() {
    if (props.categories.length > 0) {
      var ncl = props.categories.map(function (category, index) {
        console.log(index);

        if (category.lvl < currentLvl) {
          return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__["RemovableTag"], {
            key: category.id,
            category: category,
            onClick: function onClick() {
              props.removeCategory(category.lvl);
              currentLvl = category.lvl;
              setLvl(category.lvl);

              if (currentLvl == 0) {
                parentId = null;
                setParent(parentId);
              } else {
                parentId = props.categories[currentLvl - 1].id;
                setParent(parentId);
              }

              initList();
              forceUpdate();
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }
          });
        }
      }); //ncl.push(<SelectCategory lvl={lvl} parent={parent} csrftoken={props.csrftoken} setCategory={setCategory} />)

      setCategoriesList(ncl);
    } else {
      setCategoriesList(null);
    }
  };

  var content = __jsx("div", {
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Add Product Category"), __jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, categoriesList, __jsx("div", {
    ref: select,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx(_graphics_category_SelectCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lvl: lvl,
    parent: parent,
    csrftoken: props.csrftoken,
    setCategory: setCategory,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (AddCategory);

/***/ })

})
//# sourceMappingURL=maker.js.fecb076e6136067f3ffb.hot-update.js.map