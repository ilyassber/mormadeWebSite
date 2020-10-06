module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2mnT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function postRequest(data, csrftoken, url) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrftoken
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vasz");


/***/ }),

/***/ "6P1G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ textFields_TxtField; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ textFields_PwdField; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ textFields_TxtArea; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ textFields_IntField; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ textFields_TextDisp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/graphics/textFields/TxtField.js

var __jsx = external_react_default.a.createElement;


const TxtField = props => {
  const inputRef = Object(external_react_["useRef"])();
  let align = 'left';
  let color = 'gray-900';
  let borderColor = 'gray-300';
  let placeholder = '';
  let height = 12;
  let shadow = 'border border-';

  if (props.align != null) {
    align = props.align;
  }

  if (props.color != null) {
    color = props.color;
  }

  if (props.height != null) {
    height = props.height;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.reset == true) {
    color = 'white';
    borderColor = 'gray-300';
    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  let content = __jsx("div", {
    className: props.className
  }, props.label != null ? __jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align
  }, props.label) : null, __jsx("input", {
    ref: inputRef,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_TxtField = (TxtField);
// CONCATENATED MODULE: ./components/graphics/textFields/PwdField.js

var PwdField_jsx = external_react_default.a.createElement;

const PwdField = props => {
  let shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  let content = PwdField_jsx("div", {
    className: props.className
  }, PwdField_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), PwdField_jsx("input", {
    className: 'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "password",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_PwdField = (PwdField);
// CONCATENATED MODULE: ./components/graphics/textFields/TxtArea.js

var TxtArea_jsx = external_react_default.a.createElement;

const TxtArea = props => {
  let shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  let content = TxtArea_jsx("div", {
    className: props.className
  }, TxtArea_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), TxtArea_jsx("textarea", {
    rows: "4",
    cols: "50",
    className: 'appearance-none ' + shadow + ' w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "text",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_TxtArea = (TxtArea);
// CONCATENATED MODULE: ./components/graphics/textFields/IntField.js

var IntField_jsx = external_react_default.a.createElement;

const IntField = props => {
  let shadow = 'border';

  if (props.shadow == true) {
    shadow = 'shadow';
  }

  let content = IntField_jsx("div", {
    className: props.className
  }, IntField_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), IntField_jsx("input", {
    min: "0",
    className: 'appearance-none ' + shadow + ' w-32 h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black',
    type: "number",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_IntField = (IntField);
// CONCATENATED MODULE: ./components/graphics/textFields/TextDisp.js

var TextDisp_jsx = external_react_default.a.createElement;

const TextDisp = props => {
  let align = "left";

  if (props.align != null) {
    align = props.align;
  }

  let content = TextDisp_jsx("div", {
    className: props.className
  }, TextDisp_jsx("span", {
    className: 'font-sans text-base text-gray-900 align-' + align
  }, props.text));

  return content;
};

/* harmony default export */ var textFields_TextDisp = (TextDisp);
// CONCATENATED MODULE: ./components/graphics/textFields/index.js






/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "9n/q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProductGrid = props => {
  let content = __jsx("article", {
    className: props.className
  }, __jsx("div", {
    className: "container h-auto w-full content-center"
  }, __jsx("div", {
    className: "relative w-full bg-yellow-300 pb-1/1"
  }, __jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.images[0].path
  }), __jsx("button", {
    className: "absolute top-0 right-0 h-10 w-10 m-2"
  }, __jsx("img", {
    src: "/heart-white.png"
  }))), __jsx("div", {
    className: "h-auto w-full"
  }, __jsx("h3", {
    className: "leading-tight font-sans font-medium text-base text-gray-900 pt-2"
  }, props.data.name), __jsx("strong", {
    className: "leading-tight font-sans font-normal text-sm text-gray-800"
  }, props.owner), __jsx("p", {
    className: "leading-tight font-sans font-semibold text-lg text-gray-900"
  }, "MAD " + props.data.price))));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (ProductGrid);

/***/ }),

/***/ "Dk97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRequest; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function getRequest(url) {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "EDLy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ buttons_BtnBbw; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ buttons_BtnBtb; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ buttons_BtnIcon; });

// UNUSED EXPORTS: BtnTtb

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/graphics/buttons/BtnBbw.js
var __jsx = external_react_default.a.createElement;


const BtnBbw = props => {
  let weight = 'medium';

  if (props.weight != null) {
    weight = props.weight;
  }

  const content = __jsx("div", {
    className: props.className
  }, __jsx("button", {
    className: 'w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 font-roboto font-' + weight + ' text-white text-sm py-2 px-4',
    type: "button",
    onClick: props.onClick
  }, props.value));

  return content;
};

/* harmony default export */ var buttons_BtnBbw = (BtnBbw);
// CONCATENATED MODULE: ./components/graphics/buttons/BtnBtb.js
var BtnBtb_jsx = external_react_default.a.createElement;


const BtnBtb = props => {
  const content = BtnBtb_jsx("div", {
    className: props.className
  }, BtnBtb_jsx("button", {
    className: "w-full h-full bg-transparent border border-gray-900 hover:text-opacity-75 hover:border-opacity-75 focus:outline-none font-sans font-medium text-gray-900 text-sm",
    type: "button",
    onClick: props.onClick
  }, props.value));

  return content;
};

/* harmony default export */ var buttons_BtnBtb = (BtnBtb);
// EXTERNAL MODULE: ./components/graphics/buttons/BtnTtb.js
var BtnTtb = __webpack_require__("IOqG");

// CONCATENATED MODULE: ./components/graphics/buttons/BtnIcon.js
var BtnIcon_jsx = external_react_default.a.createElement;


const BtnIcon = props => {
  const content = BtnIcon_jsx("div", {
    className: props.className
  }, BtnIcon_jsx("button", {
    className: "w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 py-2 px-2",
    type: "button",
    onClick: props.onClick
  }, BtnIcon_jsx("img", {
    src: props.src
  })));

  return content;
};

/* harmony default export */ var buttons_BtnIcon = (BtnIcon);
// CONCATENATED MODULE: ./components/graphics/buttons/index.js





/***/ }),

/***/ "GazF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Brand = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "container h-full w-auto content-center mx-auto flex flex-wrap"
  }, __jsx("strong", {
    className: "font-raleway font-bold text-2xl text-gray-900"
  }, "MORMADE")));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (Brand);

/***/ }),

/***/ "IOqG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BtnTtb = props => {
  let style = "w-full h-full bg-transparent text-left hover:text-opacity-75 focus:outline-none font-sans font-bold text-gray-900 text-sm py-2 px-4";

  if (props.clicked == 'true') {
    style = "w-full h-full bg-transparent text-left focus:outline-none font-sans font-bold text-red-700 text-sm py-2 px-4";
  }

  const content = __jsx("div", {
    className: props.className
  }, __jsx("button", {
    className: style,
    type: "button",
    onClick: props.onClick
  }, props.value));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (BtnTtb);

/***/ }),

/***/ "LE7W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EDLy");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ArticleBanner = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "h-auto w-full flex flex-col items-center bg-purple-200"
  }, __jsx("h2", {
    className: "font-roboto font-bold text-xl mt-4 mx-4"
  }, props.data.title), __jsx("span", {
    className: "mx-4"
  }, props.data.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/stories/${props.data.url}`
  }, __jsx("a", null, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_1__[/* BtnBbw */ "a"], {
    className: "h-auto w-auto m-4",
    value: "READ MORE",
    weight: "bold"
  })))));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (ArticleBanner);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RC9J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ArticleList = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "w-full h-auto flex flex-col items-center"
  }, props.data));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (ArticleList);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "djej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const WelcomeBar = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-orange-200 to-yellow-200 flex felx-wrap box-content overflow-hidden pt-1 pb-1"
  }, __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 ")), __jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welcome to Morocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenue au Maroc \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Bienvenido a marruecos \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u6B61\u8FCE\u4F86\u5230\u6469\u6D1B\u54E5 \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Benvenuto in Marocco \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 Welkom in Marokko \u2009\u2009\u2009\u2009 "), __jsx("label", {
    className: "h-auto w-auto inline-block whitespace-no-wrap font-sans font-medium outline-none"
  }, "\u22C5 \u2009\u2009\u2009\u2009 \u092E\u094B\u0930\u0915\u094D\u0915\u094B \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948 \u2009\u2009\u2009\u2009 "))));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (WelcomeBar);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iApb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ images_ImgRound; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ images_AddImage; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ images_RemovedSquaredImg; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ images_ImgFreeDisp; });

// UNUSED EXPORTS: ImgDimDisp

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/graphics/images/ImgRound.js
var __jsx = external_react_default.a.createElement;


const ImgRound = props => {
  const content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "rounded-full h-full w-full flex items-center justify-center"
  }, __jsx("img", {
    src: props.src
  })));

  return content;
};

/* harmony default export */ var images_ImgRound = (ImgRound);
// CONCATENATED MODULE: ./components/graphics/images/AddImage.js
var AddImage_jsx = external_react_default.a.createElement;


const AddImage = props => {
  const inputRef = Object(external_react_["useRef"])(null);
  /*
  const img_pathUrl = (input) => {
      console.log(input.target.files)
      imgRef.current.src = (window.URL ? URL : webkitURL).createObjectURL(input.target.files[0]);
  }
  */

  let content = AddImage_jsx("div", {
    className: props.className
  }, AddImage_jsx("div", {
    className: "relative m-1"
  }, AddImage_jsx("input", {
    className: "absolute invisible",
    ref: inputRef,
    accept: "image/jpeg, image/jpg, image/png",
    multiple: true,
    type: "file",
    onChange: input => {
      console.log(input);
      props.onChange(Array.from(input.target.files));
      inputRef.current.value = null;
    }
  }), AddImage_jsx("div", {
    className: "container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200",
    role: "button",
    onClick: () => {
      inputRef.current.click();
    }
  }, AddImage_jsx("span", {
    className: "text-center h-auto w-full"
  }, "Upload Photo"))));

  return content;
};

/* harmony default export */ var images_AddImage = (AddImage);
// CONCATENATED MODULE: ./components/graphics/images/RemovedSquaredImg.js
var RemovedSquaredImg_jsx = external_react_default.a.createElement;


const RemovedSquaredImg = props => {
  let content = RemovedSquaredImg_jsx("div", {
    className: props.className
  }, RemovedSquaredImg_jsx("div", {
    className: "relative h-full w-full bg-yellow-300"
  }, RemovedSquaredImg_jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.src
  }), RemovedSquaredImg_jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",
    role: "button",
    onClick: () => props.onRemove(props.index)
  }, RemovedSquaredImg_jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full"
  }, "x"))));

  return content;
};

/* harmony default export */ var images_RemovedSquaredImg = (RemovedSquaredImg);
// CONCATENATED MODULE: ./components/graphics/images/ImgFreeDisp.js

var ImgFreeDisp_jsx = external_react_default.a.createElement;

const ImgFreeDisp = props => {
  let content = ImgFreeDisp_jsx("div", {
    className: props.className
  }, ImgFreeDisp_jsx("div", {
    className: "w-full h-auto"
  }, ImgFreeDisp_jsx("img", {
    src: props.src
  })));

  return content;
};

/* harmony default export */ var images_ImgFreeDisp = (ImgFreeDisp);
// CONCATENATED MODULE: ./components/graphics/images/ImgDimDisp.js

var ImgDimDisp_jsx = external_react_default.a.createElement;

const ImgDimDisp = props => {
  let content = ImgDimDisp_jsx("div", {
    className: props.className
  }, ImgDimDisp_jsx("div", {
    className: 'relative w-full bg-gray-300 pb-' + props.dim
  }, ImgDimDisp_jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.src
  })));

  return content;
};

/* harmony default export */ var images_ImgDimDisp = (ImgDimDisp);
// CONCATENATED MODULE: ./components/graphics/images/index.js






/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "m2H8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ tags_RemovableTag; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ tags_BlackTag; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/graphics/tags/RemovableTag.js
var __jsx = external_react_default.a.createElement;


const RemovableTag = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "h-8 flex align-middle"
  }, __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"
  }, __jsx("b", {
    className: "text-gray-900 text-sm text-center ml-2 mr-2"
  }, props.separator)), __jsx("div", {
    className: "h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center"
  }, __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap"
  }, __jsx("h4", {
    className: "font-sans font-medium text-xw-100 leading-tight mr-2"
  }, props.category.name)), __jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap"
  }, __jsx("button", {
    className: "h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",
    type: "button",
    onClick: props.onClick
  }, __jsx("b", {
    className: "font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1"
  }, "X"))))));

  return content;
};

/* harmony default export */ var tags_RemovableTag = (RemovableTag);
// CONCATENATED MODULE: ./components/graphics/tags/BlackTag.js
var BlackTag_jsx = external_react_default.a.createElement;


const BlackTag = props => {
  if (props.type == 'white') {
    return BlackTag_jsx("div", {
      className: props.className
    }, BlackTag_jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white"
    }, BlackTag_jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1"
    }, props.tag.name)));
  } else {
    return BlackTag_jsx("div", {
      className: props.className
    }, BlackTag_jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900"
    }, BlackTag_jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1"
    }, props.tag.name)));
  }
};

/* harmony default export */ var tags_BlackTag = (BlackTag);
// CONCATENATED MODULE: ./components/graphics/tags/index.js



/***/ }),

/***/ "m8lf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Brand["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ logo_Intro; });

// EXTERNAL MODULE: ./components/logo/Brand.js
var Brand = __webpack_require__("GazF");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/logo/Intro.js
var __jsx = external_react_default.a.createElement;


const Intro = props => {
  if (props.type == 'white') {
    return __jsx("div", {
      className: props.className
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white"
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1"
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1"
    }, __jsx("img", {
      src: "icons/morocco.png"
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-gray-900 m-1"
    }, " to world wide")));
  } else {
    return __jsx("div", {
      className: props.className
    }, __jsx("div", {
      className: "container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900"
    }, __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1"
    }, "from "), __jsx("div", {
      className: "h-auto w-4 flex flex-wrap content-center items-center justify-center m-1"
    }, __jsx("img", {
      src: "icons/morocco.png"
    })), __jsx("span", {
      className: "h-auto font-sans font-light text-xs align-middle text-white m-1"
    }, " to world wide")));
  }
};

/* harmony default export */ var logo_Intro = (Intro);
// CONCATENATED MODULE: ./components/logo/index.js



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oD+g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticate; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8xkj");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function authenticate(data, operation, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      operation: operation,
      data: querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:8000" + '/api/users/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      console.log(response.data);
      localStorage.setItem('_user', JSON.stringify(response.data)); //window.open('/users')

      if (operation == 'logout') {
        localStorage.setItem('_user', null);
        window.location = '/maker/auth';
      } else {
        window.location = '/maker';
      } //resolve(response.data)

    }).catch(error => {
      console.log(error); //reject(error)
    });
  });
}

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "tH+X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
}

/***/ }),

/***/ "tTTj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_fetch_getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wQog");
/* harmony import */ var _graphics_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("m2H8");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DisplayCategories = props => {
  console.log(props.tags);

  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "h-auto w-full flex flex-wrap items-left"
  }, props.tags.map((tag, index) => {
    return __jsx(_graphics_tags__WEBPACK_IMPORTED_MODULE_2__[/* BlackTag */ "a"], {
      className: "mr-1",
      key: index,
      tag: tag
    });
  })));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (DisplayCategories);

/***/ }),

/***/ "vasz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./lib/parseCookies.js
var parseCookies = __webpack_require__("tH+X");

// EXTERNAL MODULE: ./components/elements/bar/index.js + 7 modules
var bar = __webpack_require__("ymdN");

// EXTERNAL MODULE: ./components/widgets/product/ProductGrid.js
var ProductGrid = __webpack_require__("9n/q");

// CONCATENATED MODULE: ./components/widgets/product/index.js

// CONCATENATED MODULE: ./components/elements/list/ProductGridList.js
var __jsx = external_react_default.a.createElement;


const ProductGridList = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1"
  }, props.data));

  return content;
};

/* harmony default export */ var list_ProductGridList = (ProductGridList);
// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 5 modules
var textFields = __webpack_require__("6P1G");

// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 3 modules
var buttons = __webpack_require__("EDLy");

// EXTERNAL MODULE: ./components/graphics/images/index.js + 5 modules
var graphics_images = __webpack_require__("iApb");

// CONCATENATED MODULE: ./components/widgets/image/AddImageGrid.js
var AddImageGrid_jsx = external_react_default.a.createElement;



const AddImageGrid = props => {
  const {
    0: imagesList,
    1: setImagesList
  } = Object(external_react_["useState"])(null);

  const appendFile = newFiles => {
    console.log(newFiles);

    if (newFiles.length > 0) {
      props.addImage(newFiles);
      initList();
    }
  };

  const removeFile = index => {
    props.removeImage(index);
    initList();
  };

  const initList = () => {
    if (props.files.length > 0) {
      setImagesList(props.files.map(function (file, index) {
        const imgSrc = (window.URL ? URL : webkitURL).createObjectURL(file);
        console.log(index);
        return AddImageGrid_jsx(graphics_images["d" /* RemovedSquaredImg */], {
          className: "w-32 h-32 m-1",
          src: imgSrc,
          key: index,
          index: index,
          onRemove: removeFile
        });
      }));
    } else {
      setImagesList(null);
    }
  };

  let content = AddImageGrid_jsx("div", {
    className: props.className
  }, AddImageGrid_jsx("div", {
    className: "w-full"
  }, AddImageGrid_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Product Images"), AddImageGrid_jsx("div", {
    className: "h-auto w-full container flex content-start flex-wrap border py-2 px-3"
  }, imagesList, AddImageGrid_jsx(graphics_images["a" /* AddImage */], {
    onChange: appendFile
  }))));

  return content;
};

/* harmony default export */ var image_AddImageGrid = (AddImageGrid);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/api/uploadImage.js
//import useSWR from 'swr'

/*
const fetcher = (params) => axios.post(params.url, params.form_data, {
    headers: {
        'content-type': 'multipart/form-data'
    }
}).then(res => res.json())
*/

function uploadImage(e, file, csrttoken) {
  return new Promise((resolve, reject) => {
    let form_data = new FormData();
    form_data.append('name', file.name);
    form_data.append('image', file, file.name);
    const url = "http://localhost:8000" + '/api/images/';
    external_axios_default.a.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'X-CSRFToken': csrttoken
      }
    }).then(response => {
      resolve(response);
    });
    /*
    const { data, error } = useSWR({url: url, form_data: form_data}, fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
    */
  });
}
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__("8xkj");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_);

// CONCATENATED MODULE: ./services/api/addProduct.js


function addProduct(data, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    data['pics_list'] = external_querystring_default.a.stringify(data['pics_list']);
    data['tags'] = external_querystring_default.a.stringify(data['tags']);
    let content = {
      data: external_querystring_default.a.stringify(data)
    };
    console.log(content);
    external_axios_default.a.defaults.withCredentials = true;
    external_axios_default.a.post("http://localhost:8000" + '/api/products/', external_querystring_default.a.stringify(content), axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
// EXTERNAL MODULE: ./services/api/fetch/getCategories.js
var getCategories = __webpack_require__("wQog");

// CONCATENATED MODULE: ./components/graphics/category/SelectCategory.js
var SelectCategory_jsx = external_react_default.a.createElement;



const SelectCategory = props => {
  const selectedRef = Object(external_react_["useRef"])();
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])();
  let currentLvl = null;
  let currentParent = null;
  let content = null;

  const getData = () => {
    setData(null);

    if (props.all == true) {
      let tags = localStorage.getItem('_tags');

      if (tags == null) {
        Object(getCategories["a" /* getCategories */])(null, null, null, props.csrftoken).then(res => {
          localStorage.setItem('_tags', JSON.stringify(res));
          setData(JSON.stringify(res));
        });
      } else {
        setData(tags);
      }
    } else {
      Object(getCategories["a" /* getCategories */])(null, currentLvl, props.parent, props.csrftoken).then(res => {
        setData(JSON.stringify(res));
      });
    }
  };

  Object(external_react_["useEffect"])(() => {
    currentLvl = props.lvl;
    currentParent = props.parent;
    getData();
  }, []);

  if (data && JSON.parse(data).length > 0) {
    const options = JSON.parse(data).map(option => {
      return SelectCategory_jsx("option", {
        key: option.id,
        value: option.name
      });
    });

    const getOption = () => {
      let value = selectedRef.current.value;
      JSON.parse(data).map(option => {
        if (option.name == value) {
          props.setCategory(option);
          currentLvl = option.lvl + 1;
          getData();
        }
      });
    };

    content = SelectCategory_jsx("div", {
      className: props.className
    }, SelectCategory_jsx("div", {
      className: "h-8 flex"
    }, SelectCategory_jsx("div", {
      className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"
    }, SelectCategory_jsx("b", {
      className: "text-gray-900 text-sm text-center ml-2 mr-2"
    }, props.separator)), SelectCategory_jsx("div", null, SelectCategory_jsx("input", {
      className: "h-8 w-auto font-sans font-medium border text-gray-700 leading-tight hover:outline-none focus:outline-none p-1",
      ref: selectedRef,
      list: "data",
      onChange: getOption
    }), SelectCategory_jsx("datalist", {
      id: "data"
    }, options))));
  }

  return content;
};

/* harmony default export */ var category_SelectCategory = (SelectCategory);
// EXTERNAL MODULE: ./components/graphics/tags/index.js + 2 modules
var graphics_tags = __webpack_require__("m2H8");

// CONCATENATED MODULE: ./components/widgets/category/AddProductCategory.js
var AddProductCategory_jsx = external_react_default.a.createElement;




const AddProductCategory = props => {
  const select = Object(external_react_["useRef"])();
  const forceUpdate = external_react_default.a.useReducer(() => ({}))[1];
  const {
    0: categoriesList,
    1: setCategoriesList
  } = Object(external_react_["useState"])([]);
  const {
    0: lvl,
    1: setLvl
  } = Object(external_react_["useState"])(0);
  const {
    0: parent,
    1: setParent
  } = Object(external_react_["useState"])(null);
  let currentLvl = 0;
  let parentId = null;

  const setCategory = category => {
    props.addCategory(category);
    parentId = category.id;
    setParent(parentId);
    let newLvl = category.lvl + 1;
    setLvl(newLvl);
    currentLvl = newLvl;
    initList();
  };

  const initList = () => {
    if (props.categories.length > 0) {
      let ncl = props.categories.map(function (category) {
        if (category.lvl < currentLvl) {
          return AddProductCategory_jsx(graphics_tags["b" /* RemovableTag */], {
            className: "w-auto sm:w-full",
            key: category.id,
            separator: "\u203A",
            category: category,
            onClick: () => {
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
            }
          });
        }
      });
      ncl.push(AddProductCategory_jsx(category_SelectCategory, {
        separator: "\u203A",
        lvl: props.categories[props.categories.length - 1].id,
        parent: props.categories[props.categories.length - 1],
        csrftoken: props.csrftoken,
        setCategory: setCategory
      }));
      setCategoriesList(ncl);
    } else {
      let select = AddProductCategory_jsx(category_SelectCategory, {
        separator: "\u203A",
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory
      });

      let d = AddProductCategory_jsx("div", {
        className: "h-auto w-auto bg-gray-300"
      }, AddProductCategory_jsx(category_SelectCategory, {
        separator: "\u203A",
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory
      }));

      setCategoriesList(d);
    }
  };

  Object(external_react_["useEffect"])(() => {
    initList();
  }, []);

  let content = AddProductCategory_jsx("div", {
    className: props.className
  }, AddProductCategory_jsx("div", {
    className: "w-full"
  }, AddProductCategory_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Product Category"), AddProductCategory_jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3"
  }, AddProductCategory_jsx("div", {
    className: "flex"
  }, AddProductCategory_jsx("div", {
    className: "h-8"
  }), categoriesList))));

  return content;
};

/* harmony default export */ var category_AddProductCategory = (AddProductCategory);
// CONCATENATED MODULE: ./components/widgets/category/AddArticleCategory.js
var AddArticleCategory_jsx = external_react_default.a.createElement;




const AddArticleCategory = props => {
  const {
    0: categoriesList,
    1: setCategoriesList
  } = Object(external_react_["useState"])([]);

  const setCategory = category => {
    props.addCategory(category);
    initList();
  };

  const initList = () => {
    if (props.categories.length > 0) {
      let ncl = props.categories.map(function (category, index) {
        return AddArticleCategory_jsx(graphics_tags["b" /* RemovableTag */], {
          className: "w-auto sm:w-full",
          key: index,
          separator: "",
          category: category,
          onClick: () => {
            props.removeCategory(index);
            initList();
          }
        });
      });
      ncl.push(AddArticleCategory_jsx(category_SelectCategory, {
        separator: "\u203A",
        all: true,
        csrftoken: props.csrftoken,
        setCategory: setCategory
      }));
      setCategoriesList(ncl);
    } else {
      let d = AddArticleCategory_jsx("div", {
        className: "h-auto w-auto bg-gray-300"
      }, AddArticleCategory_jsx(category_SelectCategory, {
        separator: "\u203A",
        all: true,
        csrftoken: props.csrftoken,
        setCategory: setCategory
      }));

      setCategoriesList(d);
    }
  };

  Object(external_react_["useEffect"])(() => {
    initList();
  }, []);

  let content = AddArticleCategory_jsx("div", {
    className: props.className
  }, AddArticleCategory_jsx("div", {
    className: "w-full"
  }, AddArticleCategory_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Article Tags"), AddArticleCategory_jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3"
  }, AddArticleCategory_jsx("div", {
    className: "flex"
  }, AddArticleCategory_jsx("div", {
    className: "h-8"
  }), categoriesList))));

  return content;
};

/* harmony default export */ var category_AddArticleCategory = (AddArticleCategory);
// EXTERNAL MODULE: ./components/widgets/category/DisplayCategories.js
var DisplayCategories = __webpack_require__("tTTj");

// CONCATENATED MODULE: ./components/widgets/category/index.js



// CONCATENATED MODULE: ./components/elements/product/AddProduct.js
var AddProduct_jsx = external_react_default.a.createElement;








const AddProduct = props => {
  let data = {};
  data['pics_list'] = [];
  data['tags'] = [];
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])([]);
  const {
    0: categories,
    1: setCategories
  } = Object(external_react_["useState"])([]);

  const getValue = (event, access) => {
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

  const appendFile = newFiles => {
    newFiles.forEach(f => files.push(f), undefined);
  };

  const removeFile = index => {
    files.splice(index, 1);
  };

  const appendCategory = category => {
    categories.splice(category.lvl, 0, category);
  };

  const removeCategory = index => {
    categories.splice(index, categories.length - index);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    for (let i = 0; i < files.length; i++) {
      let response = await uploadImage(event, files[0], props.cookies['csrftoken']).then(res => res);
      data['pics_list'].push(response.data);
    }

    for (let i = 0; i < categories.length; i++) {
      data['tags'].push(categories[i].id);
    }

    console.log(data);
    addProduct(data, props.cookies['csrftoken']).then(res => {
      console.log(res);
    });
  };

  let content = AddProduct_jsx("div", {
    className: "m-4"
  }, AddProduct_jsx("form", {
    className: "",
    action: ""
  }, AddProduct_jsx(textFields["e" /* TxtField */], {
    label: "Product Name",
    onChange: event => getValue(event, 'name')
  }), AddProduct_jsx(textFields["d" /* TxtArea */], {
    label: "Product Description",
    onChange: event => getValue(event, 'description')
  }), AddProduct_jsx(textFields["e" /* TxtField */], {
    label: "Product Region",
    onChange: event => getValue(event, 'region')
  }), AddProduct_jsx(textFields["a" /* IntField */], {
    label: "Price",
    onChange: event => getValue(event, 'price')
  }), AddProduct_jsx(textFields["a" /* IntField */], {
    label: "Quantity",
    onChange: event => getValue(event, 'quantity')
  }), AddProduct_jsx(category_AddProductCategory, {
    categories: categories,
    addCategory: appendCategory,
    removeCategory: removeCategory,
    csrftoken: props.cookies['csrftoken']
  }), AddProduct_jsx(image_AddImageGrid, {
    files: files,
    addImage: appendFile,
    removeImage: removeFile
  }), AddProduct_jsx(buttons["a" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD PRODUCT",
    onClick: handleSubmit
  })));

  return content;
};

/* harmony default export */ var product_AddProduct = (AddProduct);
// CONCATENATED MODULE: ./components/elements/product/index.js

// CONCATENATED MODULE: ./components/widgets/article/AddContent.js
var AddContent_jsx = external_react_default.a.createElement;



const AddContent = props => {
  let content = AddContent_jsx("div", {
    className: props.className
  }, AddContent_jsx("div", {
    className: "flex flex-wrap"
  }, AddContent_jsx(buttons["c" /* BtnIcon */], {
    className: "h-10 w-10 mr-2",
    src: "/icons/text.png",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "text",
          text: ""
        }
      };
      props.appendContent(data);
    }
  }), AddContent_jsx(buttons["c" /* BtnIcon */], {
    className: "h-10 w-10",
    src: "/icons/photo.png",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "image",
          image: null
        }
      };
      props.appendContent(data);
    }
  })));

  return content;
};

/* harmony default export */ var article_AddContent = (AddContent);
// CONCATENATED MODULE: ./components/widgets/article/index.js

// CONCATENATED MODULE: ./components/widgets/image/AddSingleImage.js
var AddSingleImage_jsx = external_react_default.a.createElement;


const AddSingleImage = props => {
  const inputRef = Object(external_react_["useRef"])(null);

  let uploadBtn = AddSingleImage_jsx("div", {
    className: "relative m-1"
  }, AddSingleImage_jsx("input", {
    className: "absolute invisible",
    ref: inputRef,
    accept: "image/jpeg, image/jpg, image/png",
    type: "file",
    onChange: input => {
      let data = {
        state: "valid",
        data: {
          type: "image",
          image: input.target.files[0]
        }
      };
      props.editContent(props.index, data);
    }
  }), AddSingleImage_jsx("div", {
    className: "container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",
    role: "button",
    onClick: () => {
      inputRef.current.click();
    }
  }, AddSingleImage_jsx("span", {
    className: "text-center h-auto w-auto m-1"
  }, "Upload Photo")));

  let removeBtn = AddSingleImage_jsx("div", {
    className: "relative m-1"
  }, AddSingleImage_jsx("div", {
    className: "container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",
    role: "button",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "image",
          image: null
        }
      };
      props.editContent(props.index, data);
    }
  }, AddSingleImage_jsx("span", {
    className: "text-center h-auto w-auto m-1"
  }, "Remove Photo")));

  let closeBtn = AddSingleImage_jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",
    role: "button",
    onClick: () => props.removeContent(props.index)
  }, AddSingleImage_jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full"
  }, "x"));

  let content = AddSingleImage_jsx("div", {
    className: props.className
  }, AddSingleImage_jsx("div", {
    className: "relative w-full bg-gray-300 pb-1/2"
  }, AddSingleImage_jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.state == "valid" ? (window.URL ? URL : webkitURL).createObjectURL(props.data.data.image) : null
  }), props.close == "true" ? closeBtn : null, AddSingleImage_jsx("div", {
    className: "absolute bottom-0 left-0 m-2"
  }, props.data.state == 'valid' ? removeBtn : uploadBtn)));

  return content;
};

/* harmony default export */ var image_AddSingleImage = (AddSingleImage);
// CONCATENATED MODULE: ./components/widgets/article/AddText.js
var AddText_jsx = external_react_default.a.createElement;



const AddText = props => {
  const inputRef = Object(external_react_["useRef"])(null);
  let text = props.data.data.text;

  let saveBtn = AddText_jsx(buttons["b" /* BtnBtb */], {
    className: "h-8 w-auto",
    onClick: () => {
      let data = {
        state: "valid",
        data: {
          type: "text",
          text: text
        }
      };
      props.editContent(props.index, data);
    },
    value: "Save Text"
  });

  let editBtn = AddText_jsx(buttons["b" /* BtnBtb */], {
    className: "h-8 w-auto",
    onClick: () => {
      let data = {
        state: "edit",
        data: {
          type: "text",
          text: props.data.data.text
        }
      };
      props.editContent(props.index, data);
    },
    value: "Edit Text"
  });

  let content = AddText_jsx("div", {
    className: props.className
  }, AddText_jsx("div", {
    className: "relative h-auto w-full border"
  }, AddText_jsx("div", {
    className: "m-2"
  }, props.data.state == "valid" ? AddText_jsx("div", {
    className: "m-2"
  }, AddText_jsx("p", null, props.data.data.text)) : AddText_jsx("textarea", {
    ref: inputRef,
    rows: "4",
    cols: "50",
    className: "appearance-none border h-full w-full py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: e => {
      text = e.target.value;
    }
  }, props.data.data.text), AddText_jsx("div", {
    className: "absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none",
    role: "button",
    onClick: () => props.removeContent(props.index)
  }, AddText_jsx("span", {
    className: "text-center font-sans font-bold text-xw-100 h-auto w-full"
  }, "x")), AddText_jsx("div", {
    className: "h-auto w-auto mt-2"
  }, props.data.state == 'valid' ? editBtn : saveBtn))));

  return content;
};

/* harmony default export */ var article_AddText = (AddText);
// EXTERNAL MODULE: ./services/api/post/postRequest.js
var postRequest = __webpack_require__("2mnT");

// CONCATENATED MODULE: ./components/elements/article/AddArticle.js
var AddArticle_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const AddArticle = props => {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])({
    title: null,
    description: null,
    cover: {
      state: "edit",
      data: {
        type: "image",
        image: null
      }
    },
    text: [],
    tags: []
  });

  const getValue = (event, access) => {
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

  const addCover = file => {
    setData(_objectSpread({}, data, {
      cover: file
    }));
  };

  const removeCover = () => {
    setData(_objectSpread({}, data, {
      cover: null
    }));
  };

  const appendCategory = category => {
    let categories = data.tags;
    categories.push(category);
    setData(_objectSpread({}, data, {
      tags: categories
    }));
  };

  const removeCategory = index => {
    let categories = data.tags;
    categories.splice(index, 1);
    setData(_objectSpread({}, data, {
      tags: categories
    }));
  };

  const appendContent = content => {
    let contentList = data.text;
    contentList.push(content);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const editContent = (index, content) => {
    let contentList = data.text;
    contentList[index] = content;
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const removeContent = index => {
    let contentList = data.text;
    contentList.splice(index, 1);
    setData(_objectSpread({}, data, {
      text: contentList
    }));
  };

  const editCoverContent = (index, content) => {
    setData(_objectSpread({}, data, {
      cover: content
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let coverId = -1;
    if (data.cover.data.image != null) coverId = await uploadImage(event, data.cover.data.image, props.cookies['csrftoken']).then(res => res.data);
    let textList = [];

    for (let i = 0; i < data.text.length; i++) {
      if (data.text[i].data.type == 'image') {
        let response = await uploadImage(event, data.text[i].data.image, props.cookies['csrftoken']).then(res => res);
        textList.push(external_querystring_default.a.stringify({
          type: 'image',
          image: response.data
        }));
      } else {
        textList.push(external_querystring_default.a.stringify({
          type: 'text',
          text: data.text[i].data.text
        }));
      }
    }

    let newTags = [];

    for (let i = 0; i < data.tags.length; i++) {
      newTags.push(data.tags[i].id);
    }

    let newData = _objectSpread({}, data, {
      cover: coverId,
      text: external_querystring_default.a.stringify(textList),
      tags: newTags
    });

    Object(postRequest["a" /* postRequest */])(external_querystring_default.a.stringify({
      operation: "register",
      data: external_querystring_default.a.stringify(newData)
    }), props.cookies['csrftoken'], "http://localhost:8000" + '/api/articles/').then(res => {
      console.log(res);
    });
  };

  let content = AddArticle_jsx("div", {
    className: "m-4"
  }, AddArticle_jsx("form", {
    className: "w-full",
    action: ""
  }, AddArticle_jsx(textFields["e" /* TxtField */], {
    label: "Title",
    onChange: event => getValue(event, 'title')
  }), AddArticle_jsx(textFields["d" /* TxtArea */], {
    label: "Description",
    onChange: event => getValue(event, 'description')
  }), AddArticle_jsx("div", {
    className: "pb-2"
  }, AddArticle_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Cover"), AddArticle_jsx(image_AddSingleImage, {
    index: -1,
    className: "",
    data: data.cover,
    close: "false",
    editContent: editCoverContent,
    removeContent: () => {}
  })), AddArticle_jsx("div", null, AddArticle_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Article Content"), AddArticle_jsx("div", {
    className: "h-auto w-full border"
  }, data.text.map((content, index) => {
    if (content.data.type == "image") {
      return AddArticle_jsx(image_AddSingleImage, {
        index: index,
        className: "m-2",
        data: content,
        close: "true",
        editContent: editContent,
        removeContent: removeContent
      });
    } else {
      return AddArticle_jsx(article_AddText, {
        index: index,
        className: "m-2",
        data: content,
        editContent: editContent,
        removeContent: removeContent
      });
    }
  }), AddArticle_jsx(article_AddContent, {
    className: "m-2",
    appendContent: appendContent
  }))), AddArticle_jsx(category_AddArticleCategory, {
    categories: data.tags,
    addCategory: appendCategory,
    removeCategory: removeCategory,
    csrftoken: props.cookies['csrftoken']
  }), AddArticle_jsx(buttons["a" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD ARTICLE",
    onClick: handleSubmit
  })));

  return content;
};

/* harmony default export */ var article_AddArticle = (AddArticle);
// EXTERNAL MODULE: ./components/elements/list/ArticleList.js
var ArticleList = __webpack_require__("RC9J");

// EXTERNAL MODULE: ./services/api/get/getRequest.js
var getRequest = __webpack_require__("Dk97");

// EXTERNAL MODULE: ./components/widgets/article/ArticleBanner.js
var ArticleBanner = __webpack_require__("LE7W");

// CONCATENATED MODULE: ./pages/maker/index.js
var maker_jsx = external_react_default.a.createElement;













const UserPage = props => {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])({
    products: null,
    articles: null
  });
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: clikced,
    1: setClicked
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    let user = localStorage.getItem('_user');
    console.log(user);
    setIsLoading(true);

    if (props.cookies.utoken != null) {
      Object(getRequest["a" /* getRequest */])("http://localhost:8000" + '/api/products/').then(res => {
        let products = res; //setData({...data , products: JSON.stringify(res)});
        //setIsLoading(false);

        Object(postRequest["a" /* postRequest */])(external_querystring_default.a.stringify({
          operation: "all"
        }), props.cookies['csrftoken'], "http://localhost:8000" + '/api/articles/').then(res => {
          setData({
            products: JSON.stringify(products),
            articles: JSON.stringify(res)
          });
          setIsLoading(false);
        });
      });
    } else {
      window.location = '/maker/auth';
    }
  }, []);

  let content = maker_jsx("p", null, "Loading characters...");

  if (!isLoading) {
    const productsList = data.products ? JSON.parse(data.products).map(function (product) {
      return maker_jsx(ProductGrid["a" /* default */], {
        className: "h-auto w-auto m-2",
        key: product.id,
        data: product,
        owner: "ilyass"
      });
    }) : null;
    const articlesList = data.articles ? JSON.parse(data.articles).map(function (article) {
      localStorage.setItem(article.url, JSON.stringify(article));
      return maker_jsx(ArticleBanner["a" /* default */], {
        className: "h-auto w-full max-w-screen-md m-4",
        key: article.id,
        data: article
      });
    }) : null;
    const sideBarData = [{
      id: 0,
      value: 'Products'
    }, {
      id: 1,
      value: 'Stories'
    }, {
      id: 2,
      value: 'Add Product'
    }, {
      id: 3,
      value: 'Add Story'
    }];

    let comp1 = maker_jsx(list_ProductGridList, {
      className: "p-2",
      data: productsList
    });

    let comp2 = maker_jsx(ArticleList["a" /* default */], {
      className: "p-2",
      data: articlesList
    });

    let comp3 = maker_jsx(product_AddProduct, {
      className: "p-2",
      cookies: props.cookies
    });

    let comp4 = maker_jsx(article_AddArticle, {
      className: "p-2",
      cookies: props.cookies
    });

    const componentsList = [comp1, comp2, comp3, comp4];
    content = maker_jsx("div", {
      className: "w-full"
    }, maker_jsx(bar["b" /* Navbar */], {
      cookies: props.cookies,
      className: "w-full"
    }), maker_jsx(bar["d" /* WelcomeBar */], {
      className: "pt-12"
    }), maker_jsx("div", {
      className: "w-full flex pt-10"
    }, maker_jsx("div", {
      className: "w-64 h-full"
    }, maker_jsx(bar["c" /* SideBar */], {
      className: "w-full h-full",
      clicked: clikced,
      data: sideBarData,
      onClick: x => setClicked(x)
    })), maker_jsx("div", {
      className: "w-full h-full"
    }, componentsList[clikced])));
  } else if (!isLoading && (!data || data.length === 0)) {
    content = maker_jsx("p", null, "Could not fetch any data.");
  }

  return content;
};

UserPage.getInitialProps = async ({
  req
}) => {
  const cookies = Object(parseCookies["a" /* parseCookies */])(req);
  return {
    cookies: cookies,
    data: req.data
  };
};

/* harmony default export */ var maker = __webpack_exports__["default"] = (UserPage);

/***/ }),

/***/ "wQog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategories; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8xkj");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function getCategories(id, lvl, parent, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      id: id,
      operation: 'get',
      lvl: lvl,
      parent: parent
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:8000" + '/api/categories/', querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(content), axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

/***/ }),

/***/ "ymdN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ bar_Navbar; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ bar_NavMenu; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ SideBar; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ WelcomeBar["a" /* default */]; });

// UNUSED EXPORTS: FromBar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/logo/Brand.js
var Brand = __webpack_require__("GazF");

// EXTERNAL MODULE: ./components/graphics/images/index.js + 5 modules
var graphics_images = __webpack_require__("iApb");

// CONCATENATED MODULE: ./components/user/Menu.js
var __jsx = external_react_default.a.createElement;



const Menu = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "h-full w-auto container content-center mx-auto flex flex-wrap"
  }, __jsx(graphics_images["c" /* ImgRound */], {
    className: "w-5 h-5",
    src: "/profile.png"
  }), __jsx("button", {
    className: "focus:outline-none",
    type: "button",
    onClick: props.onClick
  }, __jsx("p", {
    className: "font-sans font-medium text-sm text-gray-900 text-center ml-2"
  }, props.username))));

  return content;
};

/* harmony default export */ var user_Menu = (Menu);
// CONCATENATED MODULE: ./components/user/index.js

// CONCATENATED MODULE: ./components/elements/bar/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;





const Navbar = props => {
  const {
    0: menuDrop,
    1: setMenuDrop
  } = Object(external_react_["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);
  let status = false;
  Object(external_react_["useEffect"])(() => {
    let userData = localStorage.getItem('_user');
    console.log(userData);
    setUser(userData);
  }, []);

  const dropMenuOn = () => {
    status = true;
    console.log(status);

    if (menuDrop == true) {
      setMenuDrop(false);
    } else {
      setMenuDrop(true);
    }
  };

  const dropMenuOff = () => {
    if (status) {
      status = false;
    } else {
      console.log('cancel');
      setMenuDrop(false);
    }
  };

  let content = Navbar_jsx("div", {
    className: props.className
  }, Navbar_jsx("div", {
    className: "fixed z-50 h-12 w-full flex bg-white"
  }, Navbar_jsx("div", {
    className: "flex flex-row"
  }, Navbar_jsx(Brand["a" /* default */], {
    className: "h-full w-auto ml-6"
  })), Navbar_jsx("div", {
    className: "w-full flex flex-row-reverse"
  }, Navbar_jsx(user_Menu, {
    className: "h-full w-auto mr-6",
    username: "ilyass",
    onClick: dropMenuOn
  }))), Navbar_jsx(bar_NavMenu, {
    className: "z-50",
    user: user,
    cookies: props.cookies,
    drop: menuDrop,
    callBack: dropMenuOff
  }));

  return content;
};

/* harmony default export */ var bar_Navbar = (Navbar);
// EXTERNAL MODULE: ./services/authentication/authentication.js
var authentication = __webpack_require__("oD+g");

// CONCATENATED MODULE: ./services/hooks/onClickOutside.js

function onClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      setTimeout(() => handler(event), 200);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('keydown', listener);
    };
  }, [ref, handler]);
}
// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 3 modules
var buttons = __webpack_require__("EDLy");

// CONCATENATED MODULE: ./components/elements/bar/NavMenu.js
var NavMenu_jsx = external_react_default.a.createElement;





const NavMenu = props => {
  let user = props.user ? JSON.parse(props.user) : null; //let user = null

  let object = NavMenu_jsx("div", {
    className: ""
  }, NavMenu_jsx("div", {
    className: "w-auto flex flex-col bg-white shadow"
  }, NavMenu_jsx("div", {
    className: "w-32 flex flex-col m-4"
  }, user != null ? NavMenu_jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-900 text-sm text-left hover:underline my-2",
    type: "button",
    onClick: () => {}
  }, user.username) : NavMenu_jsx(buttons["a" /* BtnBbw */], {
    className: "w-auto h-12 mt-2 mb-2",
    value: "SIGN IN",
    onClick: () => {}
  }), user != null ? NavMenu_jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-700 text-xs text-left hover:underline my-2",
    type: "button",
    onClick: () => {
      Object(authentication["a" /* authenticate */])({}, "logout", props.cookies['csrftoken']);
    }
  }, "Sign out") : null)));

  const focusRef = Object(external_react_["useRef"])(null);

  const onBlurHandler = event => {
    if (event.type != 'keydown') {
      props.callBack();
    } else if (event.keyCode == 27) {
      props.callBack();
    }
  };

  onClickOutside(focusRef, onBlurHandler);

  let contentWithoutMenu = NavMenu_jsx("div", {
    className: props.className
  }, NavMenu_jsx("div", {
    className: "fixed z-50 top-0 right-0 mr-4 mt-10"
  }));

  let contentWithMenu = NavMenu_jsx("div", {
    className: props.className
  }, NavMenu_jsx("div", {
    ref: focusRef,
    className: "fixed z-50 top-0 right-0 mr-4 mt-10"
  }, object));

  if (props.drop == true) {
    return contentWithMenu;
  } else {
    return contentWithoutMenu;
  }
};

/* harmony default export */ var bar_NavMenu = (NavMenu);
// EXTERNAL MODULE: ./components/graphics/buttons/BtnTtb.js
var BtnTtb = __webpack_require__("IOqG");

// CONCATENATED MODULE: ./components/elements/bar/SideBar.js
var SideBar_jsx = external_react_default.a.createElement;



const Sidebar = props => {
  const {
    0: clicked,
    1: setClicked
  } = Object(external_react_["useState"])(props.clicked);
  const btnsList = props.data.map(function (value) {
    if (value.id == clicked) {
      return SideBar_jsx(BtnTtb["a" /* default */], {
        className: "w-full h-auto",
        key: value.id,
        value: value.value,
        clicked: "true",
        onClick: () => {
          setClicked(value.id);
          props.onClick(value.id);
        }
      });
    } else {
      return SideBar_jsx(BtnTtb["a" /* default */], {
        className: "w-full h-auto",
        key: value.id,
        value: value.value,
        clicked: "false",
        onClick: () => {
          setClicked(value.id);
          props.onClick(value.id);
        }
      });
    }
  });

  let content = SideBar_jsx("div", {
    className: props.className
  }, SideBar_jsx("div", {
    className: "h-full w-full m-4"
  }, btnsList));

  return content;
};

/* harmony default export */ var SideBar = (Sidebar);
// EXTERNAL MODULE: ./components/elements/bar/WelcomeBar.js
var WelcomeBar = __webpack_require__("djej");

// EXTERNAL MODULE: ./components/logo/index.js + 1 modules
var logo = __webpack_require__("m8lf");

// CONCATENATED MODULE: ./components/elements/bar/FromBar.js
var FromBar_jsx = external_react_default.a.createElement;



const FromBar = props => {
  let content = FromBar_jsx("div", {
    className: props.className
  }, FromBar_jsx("div", {
    className: "w-full h-auto bg-gradient-to-r from-gray-900 to-gray-900 flex felx-wrap box-content overflow-hidden pt-1 pb-1"
  }, FromBar_jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  })), FromBar_jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  })), FromBar_jsx("div", {
    className: "animate-ticker w-auto h-auto box-content flex felx-wrap"
  }, FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "white"
  }), FromBar_jsx(logo["b" /* Intro */], {
    type: "Black"
  }))));

  return content;
};

/* harmony default export */ var bar_FromBar = (FromBar);
// CONCATENATED MODULE: ./components/elements/bar/index.js






/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });