webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/elements/searchGate/searchGate.js":
/*!******************************************************!*\
  !*** ./components/elements/searchGate/searchGate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchGate; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alpha-displayer/AlphaDisplayer */ "./components/elements/alpha-displayer/AlphaDisplayer.js");
/* harmony import */ var _widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/search/searchWidget */ "./components/widgets/search/searchWidget.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ikons/close */ "./node_modules/react-icons-kit/ikons/close.js");
/* harmony import */ var react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Soguma\\MorMade_project\\webweb\\components\\elements\\searchGate\\searchGate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // history widget : used inside the history component 

function NewHistoryItem(_ref) {
  var title = _ref.title,
      deleteOneHistory = _ref.deleteOneHistory;
  var text = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return __jsx("div", {
    className: "flex flex-row items-center justify-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("p", {
    ref: text,
    className: " text-md ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, title));
}

function SearchGate(_ref2) {
  var _this = this;

  var changeOpenSearch = _ref2.changeOpenSearch,
      searchData = _ref2.searchData,
      setSearchData = _ref2.setSearchData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_objectSpread({}, searchData, {}, {
    inputFocus: true
  })),
      data = _useState[0],
      setData = _useState[1]; // searchGate data --> check searchData state in "layout.js"
  // STATE CALLBACKS
  // turn search input focus OFF


  var InputFocusOff = function InputFocusOff() {
    setData(_objectSpread({}, data, {
      inputFocus: false
    }));
  }; // submit new target to search for + add to search history + turn off input focus


  var changeSearchTarget = function changeSearchTarget(searchTarget) {
    if (searchTarget !== "") {
      setData(_objectSpread({}, data, {
        searchTarget: searchTarget
      }));
      addSearchHistoryItem(searchTarget);
      InputFocusOff();
    }
  }; // track text on search input  "not used for now" 


  var updateTrackInputText = function updateTrackInputText(trackedInputText) {
    if (trackedInputText !== "") setData(_objectSpread({}, data, {
      searchTrackedInputText: trackedInputText
    }));
  }; // add item to search history


  var addSearchHistoryItem = function addSearchHistoryItem(historyItem) {
    if (historyItem !== "") {
      var newSearchHistory = data.searchHistory;
      newSearchHistory.push(historyItem);
      setData(_objectSpread({}, data, {
        searchHistory: newSearchHistory
      }));
    }
  }; // delete item from search history


  var deleteSearchHistoryItem = function deleteSearchHistoryItem(historyItem) {
    var newSearchHistory = [];
    data.searchHistory.forEach(function (item) {
      if (item !== historyItem) newSearchHistory.push(item);
    });
    setData(_objectSpread({}, data, {
      searchHistory: newSearchHistory
    }));
  }; // clear search history


  var clearSearchHistory = function clearSearchHistory() {
    setData(_objectSpread({}, data, {
      searchHistory: []
    }));
  }; // saves search data and exit -> updates searchData state in "layout.js" 


  var UpdateAndExit = function UpdateAndExit() {
    setSearchData(data);
    changeOpenSearch();
  }; // UTILITIES
  // close icon


  var CloseIcon = function CloseIcon() {
    return __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      className: "cursor-pointer text-gray-600 hover:text-gray-700",
      onClick: UpdateAndExit,
      size: 40,
      icon: react_icons_kit_ikons_close__WEBPACK_IMPORTED_MODULE_5__["close"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    });
  }; // history search component


  var RecentSearchCard = function RecentSearchCard(_ref3) {
    var style = _ref3.style,
        maxResultNumber = _ref3.maxResultNumber;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, "Recent Search"), __jsx("ul", {
      className: "w-full flex flex-col justify-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, data.searchHistory.map(function (item, indx) {
      return indx < maxResultNumber && __jsx("li", {
        key: indx,
        className: "cursor-pointer whitespace-no-wrap text-md hover:underline",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 47
        }
      }, __jsx(NewHistoryItem, {
        title: item,
        deleteOneHistory: deleteSearchHistoryItem,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }
      }));
    })), data.searchHistory.length > 0 && __jsx("label", {
      className: " text-sm text-gray-600 hover:text-gray-900 whitespace-no-wrap cursor-pointer my-2",
      onClick: clearSearchHistory,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 53
      }
    }, "Delete History"), "        ");
  };

  var AnnouceCard = function AnnouceCard(_ref4) {
    var style = _ref4.style,
        cardTitle = _ref4.cardTitle,
        titleLinks = _ref4.titleLinks;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, __jsx("h2", {
      className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, cardTitle), __jsx("ul", {
      className: "flex flex-col justify-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, titleLinks.map(function (title, indx) {
      return __jsx("li", {
        key: indx,
        className: "cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, title);
    })));
  }; // left part


  var LeftContentCard = function LeftContentCard(_ref5) {
    var style = _ref5.style;
    return __jsx("div", {
      className: style,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, __jsx(RecentSearchCard, {
      style: "w-full flex flex-col items-start cursor-default",
      maxResultNumber: 8,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }), __jsx(AnnouceCard, {
      style: "w-full flex flex-col items-start mt-8 cursor-default",
      cardTitle: "Products",
      titleLinks: ["Leatest products", "Best selling products", "Season products"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }), __jsx(AnnouceCard, {
      style: "w-full flex flex-col items-start mt-8 cursor-default",
      cardTitle: "Stories",
      titleLinks: ["every stitch.. stitched with love", "braid from atlas mountains", "desert music"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }));
  }; // default content displayed in case there is no word to search for  


  var DefaultContentCard = function DefaultContentCard() {
    return __jsx("div", {
      className: "flex flex-col md:flex-row justify-start items-start mt-16 w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, __jsx(LeftContentCard, {
      style: "animate-smouthAppearance  flex flex-col justify-center w-4/12 px-4 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "flex flex-row justify-start w-full md:w-8/12 h-full ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex flex-col justify-start items-start w-2/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-col justify-start items-start md:w-10/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "images/Articles/cover-04.jpg",
      title: "The Lovely Place",
      description: "have u ever been in a place where .. .",
      buttonText: "",
      clickAction: function clickAction() {
        return console.log(" SHIT CLICKED ");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }))));
  }; // content displayed to show search result


  var ResultContentCard = function ResultContentCard() {
    return __jsx("div", {
      className: "flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start mt-16 w-full h-180 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "flex justify-center w-8/12 h-full ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "w-5/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, __jsx(_alpha_displayer_AlphaDisplayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "",
      description: "",
      buttonText: "",
      image: "images/Articles/cover-5.jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }))));
  }; // the entire default search displayed


  var DefaultBody = function DefaultBody() {
    return __jsx("div", {
      className: "flex flex-col items-center justify-start w-9/12",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: "w-full h-12 mt-4",
      clickHandler: changeSearchTarget,
      inputFocus: data.inputFocus,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }), __jsx(DefaultContentCard, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }));
  }; // the entire search result displayed


  var ResultBody = function ResultBody() {
    return __jsx("div", {
      className: "flex flex-col items-center justify-start w-10/12 bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, __jsx(_widgets_search_searchWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: "w-full h-12 my-0 bg-white ",
      clickHandler: submitInputText,
      inputFocus: data.inputFocus,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }), __jsx(ResultContentCard, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }));
  }; // CONPONENTS
  // upper bar : contains exit button


  var TopBar = function TopBar() {
    return __jsx("div", {
      className: "flex justify-end w-full p-5 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }
    }, __jsx(CloseIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }
    }));
  }; // search body : switch between search and default mode


  var MainBody = function MainBody() {
    return __jsx(DefaultBody, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }
    }) // <SearchResultBody/>
    ;
  }; // RENDER THAT SHIT


  return __jsx("div", {
    className: " animate-menuSlideUp fixed top-0 z-50 w-full flex flex-col items-center justify-start bg-white h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, __jsx(TopBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }), __jsx(MainBody, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e747737a11b8d48846fe.hot-update.js.map