webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/nav-bar/navbar.js":
/*!***********************************************!*\
  !*** ./components/elements/nav-bar/navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _welcomeBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomeBar */ "./components/elements/nav-bar/welcomeBar.js");
/* harmony import */ var _categoriesBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriesBar */ "./components/elements/nav-bar/categoriesBar.js");
/* harmony import */ var _side_menu_sideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-menu/sideMenu */ "./components/elements/side-menu/sideMenu.js");
/* harmony import */ var _sousCategoriesBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sousCategoriesBar */ "./components/elements/nav-bar/sousCategoriesBar.js");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/navbar.module.css */ "./components/elements/nav-bar/styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/icomoon */ "./node_modules/react-icons-kit/icomoon/index.js");
/* harmony import */ var react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/md/ic_menu */ "./node_modules/react-icons-kit/md/ic_menu.js");
/* harmony import */ var react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/cross */ "./node_modules/react-icons-kit/icomoon/cross.js");
/* harmony import */ var react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\nav-bar\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import './styles/main.css'





 // import { parseBody } from 'next/dist/next-server/server/api-utils'

/*
    categories : json contains our tags
    max_shown : number of tags displayed on NavBar "for others u need to press [more ... ]"
    links : linksss on the right side
    logo : path of the main logo

*/

function NavBar(_ref) {
  var _this = this;

  var categories = _ref.categories,
      max_shown = _ref.max_shown,
      links = _ref.links,
      home = _ref.home,
      logo = _ref.logo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      searchIconClicked = _useState[0],
      setSearchIconClicked = _useState[1];

  var clickSearchIcon = function clickSearchIcon() {
    setSearchIconClicked(!searchIconClicked); // open/close the search component for small screens
  };

  var font_style = {
    fontFamily: "Rubik, sans-serif"
  };
  var input_style = {
    textIndent: '15px'
  };
  var i_size = 15;
  return __jsx("nav", {
    className: "z-10 fixed flex-row w-full  font-sans  bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col justify-between w-full pl-5 pr-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex w-full h-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "".concat(searchIconClicked ? "hidden" : "", " flex items-center justify-start h-full flex-1"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, " ", __jsx("div", {
    className: "m-1 md:hidden cursor-pointer text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    size: 25,
    icon: react_icons_kit_md_ic_menu__WEBPACK_IMPORTED_MODULE_8__["ic_menu"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "".concat(searchIconClicked ? "hidden" : "", " flex justify-center items-center flex-1 h-full"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 123
    }
  }, __jsx("a", {
    className: "text-xl font-bold whitespace-no-wrap text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 142
    }
  }, "Mor Made"))), __jsx("div", {
    className: "flex flex-1 justify-center md:justify-end items-center  h-full w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("form", {
    className: "md:hidden flex justify-end h-8 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "".concat(searchIconClicked ? "order-last" : "", " flex justify-center h-full w-8 outline-none focus:outline-none"),
    onClick: clickSearchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 32
    }
  }, console.log("search icon : ", searchIconClicked ? "clicked" : "not clicked"), __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: searchIconClicked ? react_icons_kit_icomoon_cross__WEBPACK_IMPORTED_MODULE_9__["cross"] : react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  })), __jsx("button", {
    className: searchIconClicked ? "h-full w-8 outline-none focus:outline-none" : "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 128
    }
  })), __jsx("input", {
    className: searchIconClicked ? " h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500" : "transform w-0 transition-all ease-out duration-300",
    type: "text",
    placeholder: "search",
    style: input_style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "hidden md:inline m-1 md:m-2 cursor-pointer text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    size: i_size,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["user"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "hidden lg:inline m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "user"), __jsx("div", {
    className: "hidden md:inline m-1 md:m-2 cursor-pointer text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    size: i_size,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["heart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "hidden lg:inline m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "favorites"), __jsx("div", {
    className: "hidden md:inline m-1 md:m-2 cursor-pointer text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    size: i_size,
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["cart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "hidden lg:inline m-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "cart"))), __jsx("div", {
    className: "hidden md:flex h-12 w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "h-full flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), __jsx("ul", {
    className: "flex flex-1 justify-center items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, links.map(function (link, indx) {
    return __jsx("li", {
      className: "m-8 cursor-pointer text-sm md:text-xl font-bold text-gray-700 hover:text-gray-500",
      key: indx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      href: link.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 138
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 161
      }
    }, link.page)));
  })), __jsx("div", {
    className: "flex flex-1 justify-end items-center h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("form", {
    className: "flex justify-end h-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "h-full w-8 outline-none  border-b border-gray-500 focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: react_icons_kit_icomoon__WEBPACK_IMPORTED_MODULE_7__["search"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 118
    }
  })), __jsx("input", {
    className: "h-full w-24 outline-none border-b border-gray-500  transform transition-all ease-out duration-500 lg:focus:w-56",
    type: "text",
    placeholder: "search",
    style: input_style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }))))), __jsx(_welcomeBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    textToDisplay: "welcome fockers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx(_categoriesBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max_shown: max_shown,
    categories: categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/elements/side-menu/sideMenu.js":
/*!***************************************************!*\
  !*** ./components/elements/side-menu/sideMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/sideMenu.module.css */ "./components/elements/side-menu/styles/sideMenu.module.css");
/* harmony import */ var _styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sideMenu_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\mormadeWebSite\\components\\elements\\side-menu\\sideMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SideMenu() {
  return __jsx("div", {
    className: "absolute top-0 left-0 h-full w-108 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Side Menu"));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/elements/side-menu/styles/sideMenu.module.css":
/*!******************************************************************!*\
  !*** ./components/elements/side-menu/styles/sideMenu.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./sideMenu.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/elements/side-menu/styles/sideMenu.module.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/elements/side-menu/styles/sideMenu.module.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".sideMenu_container__1SxfO {\n  width: 100%;\n  height: 16rem;\n  border-width: 1px;\n  --border-opacity: 1;\n  border-color: #edf2f7;\n  border-color: rgba(237, 242, 247, var(--border-opacity));\n  --bg-opacity: 1;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, var(--bg-opacity));\n}", "",{"version":3,"sources":["C:/Users/Soguma/MorMade_project/mormadeWebSite/components/elements/side-menu/styles/sideMenu.module.css","C:/Users/Soguma/MorMade_project/mormadeWebSite/<no source>"],"names":[],"mappings":"AAAA;ECAA,WAAA;EAAA,aAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,qBAAA;EAAA,wDAAA;EAAA,eAAA;EAAA,sBAAA;EAAA,wDAAA;ADEA","file":"sideMenu.module.css","sourcesContent":[".container {\r\n    @apply  w-full h-64  border border-gray-200 bg-white;\r\n}",null]}]);
// Exports
exports.locals = {
	"container": "sideMenu_container__1SxfO"
};

/***/ })

})
//# sourceMappingURL=index.js.ca3a3e92c9941ae1ee3d.hot-update.js.map