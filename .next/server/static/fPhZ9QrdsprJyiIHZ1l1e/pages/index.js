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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "4Ijd":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon");

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
  let textColor = 'gray-700';
  let focusColor = 'black';
  let bgColor = 'transparent';
  let disableColor = 'gray-300';
  let disabled = false;
  let placeholder = '';
  let placeholderColor = 'gray-500';
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

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.focusColor != null) {
    focusColor = props.focusColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.placeholderColor != null) {
    placeholderColor = props.placeholderColor;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  if (props.reset == true) {
    if (props.color != null) {
      color = props.color;
    } else {
      color = 'white';
    }

    if (props.borderColor != null) {
      borderColor = props.borderColor;
    } else {
      borderColor = 'gray-300';
    }

    if (props.textColor != null) {
      textColor = props.textColor;
    } else {
      textColor = 'gray-700';
    }

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
    disabled: disabled,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-' + textColor + ' leading-tight bg-' + bgColor + ' placeholder-' + placeholderColor + ' focus:outline-none focus:border-' + focusColor,
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
  const inputRef = Object(external_react_["useRef"])();
  let align = 'left';
  let color = 'gray-900';
  let borderColor = 'gray-300';
  let textColor = 'gray-700';
  let focusColor = 'black';
  let bgColor = 'transparent';
  let disableColor = 'gray-300';
  let disabled = false;
  let placeholder = '';
  let placeholderColor = 'gray-500';
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

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.focusColor != null) {
    focusColor = props.focusColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.placeholderColor != null) {
    placeholderColor = props.placeholderColor;
  }

  if (props.error == true) {
    borderColor = 'red-600';
    color = 'red-600';
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  if (props.reset == true) {
    if (props.color != null) {
      color = props.color;
    } else {
      color = 'white';
    }

    if (props.borderColor != null) {
      borderColor = props.borderColor;
    } else {
      borderColor = 'gray-300';
    }

    if (props.textColor != null) {
      textColor = props.textColor;
    } else {
      textColor = 'gray-700';
    }

    inputRef.current.value = '';
  }

  if (props.placeholder != null) {
    placeholder = props.placeholder;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  let content = TxtArea_jsx("div", {
    className: props.className
  }, props.label != null ? TxtArea_jsx("label", {
    className: 'w-full block mb-1 font-sans font-medium' + ' text-' + color + ' text-' + align
  }, props.label) : null, TxtArea_jsx("textarea", {
    ref: inputRef,
    rows: "4",
    cols: "50",
    disabled: disabled,
    placeholder: placeholder,
    className: 'appearance-none ' + shadow + borderColor + ' w-full h-' + height + ' py-2 px-3 font-sans font-medium text-' + textColor + ' leading-tight bg-' + bgColor + ' placeholder-' + placeholderColor + ' focus:outline-none focus:border-' + focusColor,
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

/***/ "8h1l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphics_textFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6P1G");
/* harmony import */ var _graphics_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EDLy");
/* harmony import */ var _services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BbnH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const WaitList = props => {
  const {
    0: emailError,
    1: setEmailError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('JOIN OUR NEWSLETTER');
  const {
    0: reset,
    1: setReset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let email;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email != null && email != '') {
      const data = {
        username: email.split('@')[0],
        email: email,
        role: 'wait_list'
      };
      Object(_services_authentication_registerUser__WEBPACK_IMPORTED_MODULE_3__[/* registerUser */ "a"])(data, "wait_list", props.csrf).then(response => {
        if (response.status === "error") {
          setWelcome('Go Back Soon!');
          console.log('error');
        } else {
          setWelcome('THANK YOU, GO BACK SOON!');
          setReset(true);
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      if (email == null || email == '') {
        setEmailError(true);
      }

      if (num == null || num == '') {
        setNumError(true);
      }
    }
  };

  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "relative max-w-screen-sm h-auto overflow-hidden"
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover",
    src: "/street-vendor-b.jpg"
  }), __jsx("div", {
    className: "relative w-full h-auto p-6 justify-end"
  }, __jsx("h3", {
    className: "h-auto w-full font-roboto font-bold text-white text-3xl text-left align-left mb-6"
  }, "SOON"), __jsx("h3", {
    className: "h-auto w-full font-bold text-white text-3xl text-right align-right mb-6"
  }, 'قريبا'), __jsx("span", {
    className: "h-auto w-full font-roboto font-light text-white text-base text-center align-center mb-6"
  }, welcome), __jsx("div", {
    className: "w-full h-auto flex flex-wrap flex-col items-center mt-2"
  }, __jsx(_graphics_textFields__WEBPACK_IMPORTED_MODULE_1__[/* TxtField */ "e"], {
    reset: reset,
    error: emailError,
    color: "white",
    height: 10,
    placeholder: "ENTER YOUR EMAIL HERE",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange
  }), __jsx("div", {
    className: "w-full h-full flex-1 content-end flex-wrap mt-4"
  }, __jsx(_graphics_buttons__WEBPACK_IMPORTED_MODULE_2__[/* BtnBbw */ "b"], {
    className: "w-full h-10",
    weight: "bold",
    value: "JOIN US",
    onClick: handleSubmit
  }))))));

  return content;
};

/* harmony default export */ __webpack_exports__["a"] = (WaitList);

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

/***/ "BSzL":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_menu");

/***/ }),

/***/ "BbnH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8xkj");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);


function registerUser(data, operation, csrttoken) {
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
      localStorage.setItem('_maker', JSON.stringify(response.data));
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}

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
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ buttons_BtnBbw; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ buttons_BtnBtb; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ buttons_BtnIcon; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ buttons_Btn; });

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
// CONCATENATED MODULE: ./components/graphics/buttons/Btn.js
var Btn_jsx = external_react_default.a.createElement;


const Btn = props => {
  let borderColor = 'black';
  let textColor = 'white';
  let textSize = 'sm';
  let textWeight = 'medium';
  let hoverColor = 'gray-700';
  let borderHoverColor = 'white';
  let bgColor = 'black';
  let disableColor = 'gray-300';
  let disabled = false;
  let height = 12;
  let shadow = 'border border-';

  if (props.height != null) {
    height = props.height;
  }

  if (props.borderColor != null) {
    borderColor = props.borderColor;
  }

  if (props.borderHoverColor != null) {
    borderHoverColor = props.borderHoverColor;
  }

  if (props.textColor != null) {
    textColor = props.textColor;
  }

  if (props.textSize != null) {
    textSize = props.textSize;
  }

  if (props.hoverColor != null) {
    hoverColor = props.hoverColor;
  }

  if (props.bgColor != null) {
    bgColor = props.bgColor;
  }

  if (props.disableColor != null) {
    disableColor = props.disableColor;
  }

  if (props.shadow == true) {
    shadow = 'shadow';
    borderColor = '';
  }

  if (props.textWeight != null) {
    textWeight = props.textWeight;
  }

  if (props.disabled != null) {
    disabled = props.disabled;
  }

  if (props.disabled == true) {
    bgColor = disableColor;
  }

  const content = Btn_jsx("div", {
    className: props.className
  }, Btn_jsx("button", {
    className: 'w-full h-full bg-' + bgColor + ' ' + shadow + ' hover:bg-' + hoverColor + ' focus:outline-none hover:border-' + borderHoverColor + ' font-roboto font-' + textWeight + ' text-' + textColor + ' text-' + textSize + ' py-2 px-4',
    type: "button",
    disabled: disabled,
    onClick: props.onClick
  }, props.value));

  return content;
};

/* harmony default export */ var buttons_Btn = (Btn);
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

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QWpc":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ikons/close");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/widgets/utilities/wrapper.js

var __jsx = external_react_default.a.createElement;
function Wrapper({
  children,
  style,
  onClick
}) {
  return __jsx("div", {
    className: style,
    onClick: onClick
  }, children);
}
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/icomoon"
var icomoon_ = __webpack_require__("4Ijd");

// EXTERNAL MODULE: external "react-icons-kit/icomoon/cross"
var cross_ = __webpack_require__("kzen");

// EXTERNAL MODULE: ./components/elements/bar/index.js + 7 modules
var bar = __webpack_require__("ymdN");

// CONCATENATED MODULE: ./components/elements/nav-bar/upperNav/iconsContainer/iconsContainer.js

var iconsContainer_jsx = external_react_default.a.createElement;






const iconsContainer_IconsContainer = ({
  openSearch,
  openSearchClickHandler,
  style
}) => {
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

  const searchIconStyle = {
    openStyle: "order-last flex justify-center h-full w-8 outline-none focus:outline-none",
    closeStyle: "flex justify-center h-full w-8 outline-none focus:outline-none"
  };
  const inputStyle = {
    openStyle: "h-full transform w-full transition-all ease-out duration-300  outline-none border-b border-gray-500",
    closeStyle: "transform w-0 transition-all ease-out duration-300"
  };

  const NewIcon = ({
    className,
    src,
    clickHandler
  }) => iconsContainer_jsx("div", {
    className: `inline m-2 md:m-2 flex flex-wrap content-center cursor-pointer text-gray-700`
  }, iconsContainer_jsx("div", {
    className: className,
    onClick: clickHandler
  }, iconsContainer_jsx("div", {
    className: "h-full w-full flex items-center justify-center"
  }, iconsContainer_jsx("img", {
    src: src
  }))));

  return iconsContainer_jsx("div", {
    className: style
  }, iconsContainer_jsx("div", {
    className: "relative"
  }, iconsContainer_jsx("div", {
    className: `${!openSearch ? "flex" : "hidden"} flex-row h-full`
  }, iconsContainer_jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/loop.svg",
    clickHandler: openSearchClickHandler
  }), iconsContainer_jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/avatar.svg",
    clickHandler: dropMenuOn
  }), iconsContainer_jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/heart.svg"
  }), iconsContainer_jsx(NewIcon, {
    className: "h-5 w-5",
    src: "icons/cart.svg"
  })), iconsContainer_jsx(bar["a" /* NavMenu */], {
    className: "absolute right-0",
    user: user,
    drop: menuDrop,
    callBack: dropMenuOff
  })));
};

/* harmony default export */ var iconsContainer = (iconsContainer_IconsContainer);
// EXTERNAL MODULE: external "react-icons-kit/md/ic_menu"
var ic_menu_ = __webpack_require__("BSzL");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/logo/index.js + 1 modules
var components_logo = __webpack_require__("m8lf");

// CONCATENATED MODULE: ./components/elements/nav-bar/upperNav/UpperNav.js
var UpperNav_jsx = external_react_default.a.createElement;







function UpperNav({
  style,
  changeMenuClicked,
  openSearch,
  openSearchClickHandler,
  home,
  logo
}) {
  const MenuContainer = ({
    style
  }) => UpperNav_jsx("div", {
    className: style
  }, UpperNav_jsx("div", {
    className: "mx-3 md:hidden cursor-pointer text-gray-700",
    onClick: changeMenuClicked
  }, UpperNav_jsx(external_react_icons_kit_["Icon"], {
    size: 25,
    icon: ic_menu_["ic_menu"]
  })));

  const SiteNameContainer = ({
    style
  }) => UpperNav_jsx("div", {
    className: style
  }, UpperNav_jsx(components_logo["a" /* Brand */], null));

  return UpperNav_jsx("div", {
    className: style
  }, UpperNav_jsx(MenuContainer, {
    style: `flex items-center justify-start h-full md:flex-1 h-full`
  }), UpperNav_jsx(SiteNameContainer, {
    style: `flex md:flex  justify-start md:justify-center items-center  w-full md:flex-1 h-full`
  }), UpperNav_jsx(iconsContainer, {
    style: "flex flex-row md:flex-1 justify-end items-center w-full h-full",
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler
  }));
}

/* harmony default export */ var upperNav_UpperNav = (UpperNav);
// CONCATENATED MODULE: ./components/elements/nav-bar/middleNav/MiddleNav.js
var MiddleNav_jsx = external_react_default.a.createElement;





function SearchWidget() {
  return MiddleNav_jsx("form", {
    className: "flex justify-end h-8 px-2"
  }, MiddleNav_jsx("button", {
    className: "h-full w-8 outline-none  border-gray-500 focus:outline-none",
    onClick: e => {
      e.preventDefault();
    }
  }, MiddleNav_jsx(external_react_icons_kit_["Icon"], {
    icon: icomoon_["search"]
  })), MiddleNav_jsx("input", {
    className: "h-full w-16 lg:w-24 outline-none border-b text-gray-900 border-gray-500 text-lg text-center transform transition-all ease-out duration-500 lg:focus:w-40",
    type: "text",
    placeholder: "search"
  }));
}

function MiddleNav({
  style,
  links
}) {
  return MiddleNav_jsx("div", {
    className: style
  }, MiddleNav_jsx("div", {
    className: "h-full flex content-center"
  }), " ", MiddleNav_jsx("ul", {
    className: "flex flex-1 justify-center items-center h-full"
  }, links.map((link, indx) => MiddleNav_jsx("li", {
    className: "m-8 cursor-pointer font-lato text-sm font-bold tracking-wide text-gray-900 hover:text-gray-700",
    key: indx
  }, MiddleNav_jsx(link_default.a, {
    href: link.path
  }, MiddleNav_jsx("a", null, link.page))))));
}

/* harmony default export */ var middleNav_MiddleNav = (MiddleNav);
// CONCATENATED MODULE: ./components/graphics/imageCover/Cover.js

var Cover_jsx = external_react_default.a.createElement;
function Cover({
  children,
  image,
  height,
  style,
  imageStyle
}) {
  return Cover_jsx("div", {
    className: "relative " + style
  }, Cover_jsx("div", {
    className: "z-10 " + style
  }, children), Cover_jsx("div", {
    className: "z-0 absolute top-0 left-0 w-full h-full overflow-hidden "
  }, Cover_jsx("img", {
    className: `${height} w-full object-cover object-center ${imageStyle}`,
    src: image,
    alt: "image cover"
  })));
}
function Cover1({
  image,
  title,
  description,
  buttonText
}) {
  return Cover_jsx("div", {
    className: "relative flex overflow-hidden my-4 mx-4 bg-gray-900"
  }, Cover_jsx("img", {
    className: "object-cover object-center",
    src: image,
    alt: "image cover"
  }), Cover_jsx("div", {
    className: "absolute flex justify-center items-end w-full h-full b"
  }, Cover_jsx("div", {
    className: "flex flex-col justify-center items-center  w-10/12 h-4/12"
  }, Cover_jsx("h2", {
    className: "text-white text-7xl font-bold"
  }, title), Cover_jsx("p", {
    className: "text-white"
  }, description), Cover_jsx("div", {
    className: "flex justify-center items-center m-5 bg-white w-4/12 h-2/12 "
  }, Cover_jsx("p", null, buttonText)))));
}
// EXTERNAL MODULE: external "react-icons-kit/ikons/close"
var close_ = __webpack_require__("QWpc");

// CONCATENATED MODULE: ./components/elements/nav-bar/categoriesBar/sousCategoriesBar.js
var sousCategoriesBar_jsx = external_react_default.a.createElement;






function SousCategoriesBar({
  categorie,
  closeClickHandler
}) {
  // close icon
  const CloseIcon = () => sousCategoriesBar_jsx(external_react_icons_kit_["Icon"], {
    className: "cursor-pointer text-gray-800 ",
    onClick: closeClickHandler,
    size: 20,
    icon: close_["close"]
  });

  const SousCategoriesContent = () => sousCategoriesBar_jsx("div", {
    className: "flex justify-center w-full"
  }, sousCategoriesBar_jsx("div", {
    className: "flex flex-col items-center justify-start flex-1 flex-shrink-0 m-5"
  }, sousCategoriesBar_jsx("ul", {
    className: " w-6/12 flex flex-col items-start justify-start "
  }, sousCategoriesBar_jsx("h2", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default"
  }, "Sous Categories"), sousCategoriesBar_jsx("li", {
    key: -1
  }), categorie && categorie.sous_tags.map((sous_tag, index) => sousCategoriesBar_jsx("li", {
    className: "ml-2 cursor-pointer whitespace-no-wrap text-md hover:underline text-justify",
    key: index
  }, sous_tag)))), sousCategoriesBar_jsx("div", {
    className: "flex flex-col justify-start items-center flex-1 m-5 border-gray-200"
  }, sousCategoriesBar_jsx("h2", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default"
  }, "HIGH LIGHT"), sousCategoriesBar_jsx("div", {
    className: " m-5  overflow-hidden shadow-2xl"
  }, sousCategoriesBar_jsx("p", null, "no image to be shown"))));

  const BlankContent = () => sousCategoriesBar_jsx("div", {
    className: "relative flex flex-col justify-start items-center w-11/12 max-w-7xl bg-white"
  }, sousCategoriesBar_jsx("div", {
    className: "flex flex-row justify-end items-center w-full px-2 h-12 "
  }, sousCategoriesBar_jsx(CloseIcon, null)), sousCategoriesBar_jsx("div", {
    className: "flex flex-col justify-center items-center w-full h-144"
  }, sousCategoriesBar_jsx("h1", {
    className: "my-2 font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap cursor-default"
  }, categorie.tag), sousCategoriesBar_jsx("div", {
    className: "flex flex-col justify-start items-center m-5 h-64 w-10/12 "
  }, sousCategoriesBar_jsx("p", {
    className: "m-2"
  }, "No content available"), sousCategoriesBar_jsx("h1", {
    className: "text-lg"
  }, "Stay Tuned"))));

  return sousCategoriesBar_jsx("div", {
    className: "absolute flex flex-col items-center w-full  py-5 border-t border-gray-500 bg-white"
  }, sousCategoriesBar_jsx(BlankContent, null));
}

/* harmony default export */ var sousCategoriesBar = (SousCategoriesBar);
// CONCATENATED MODULE: ./components/elements/nav-bar/categoriesBar/categoriesBar.js
var categoriesBar_jsx = external_react_default.a.createElement;




const categoriesBar_SiteNameContainer = ({
  style
}) => categoriesBar_jsx("div", {
  className: style
}, categoriesBar_jsx(components_logo["a" /* Brand */], null));

function CategoriesBar({
  style,
  max_shown,
  categories,
  brandNameStyle,
  changeWelcomeBarAppearance
}) {
  const {
    0: openCategorie,
    1: setOpenCategorie
  } = Object(external_react_["useState"])({
    open: false,
    categorie: null
  }); // open/close + the categorie to be shown in sougategories 

  const categorieRef = Object(external_react_["useRef"])(null); // reference on "categories list" : to track outside click 

  console.log(" Categorie RENDER"); // load clicked categorie and set sousCategories to open  

  const clickOnCategorie = categorie => {
    changeWelcomeBarAppearance(false);
    setOpenCategorie({
      open: true,
      categorie: categorie
    });
    console.log(" openCategorie : ->  ", openCategorie);
  }; // add eventListener to track clicks : close souscategories bar when an outside click was detected  


  Object(external_react_["useEffect"])(() => {
    function categorieClickHandler(event) {
      if (categorieRef.current && !categorieRef.current.contains(event.target)) {
        setOpenCategorie({
          open: false,
          categorie: null
        });
        changeWelcomeBarAppearance(true);
      }
    }

    document.addEventListener("mousedown", categorieClickHandler);
    return () => {
      document.removeEventListener("mousedown", categorieClickHandler);
    };
  }, []);
  return categoriesBar_jsx("div", {
    ref: categorieRef,
    className: style
  }, categoriesBar_jsx("div", {
    className: "relative w-full h-auto"
  }, categoriesBar_jsx("div", {
    className: "flex flex-row justify-between h-12 w-full"
  }, categoriesBar_jsx("div", {
    className: "flex flex-row justify-start items-center h-full flex-1 "
  }, categoriesBar_jsx(categoriesBar_SiteNameContainer, {
    style: brandNameStyle
  })), categoriesBar_jsx("ul", {
    className: "flex flex-row justify-center items-center h-full"
  }, categories.map((categorie, index) => index < max_shown && categoriesBar_jsx("li", {
    key: index,
    className: `flex px-4 h-full justify-center items-center cursor-pointer font-lato text-base font-black ${openCategorie.categorie && openCategorie.categorie === categorie ? "text-yellow-600" : "text-gray-900 hover:text-gray-700"}`,
    onClick: () => clickOnCategorie(categorie)
  }, categorie.name.toUpperCase()))), categoriesBar_jsx("div", {
    className: "flex flex-1 h-full"
  })), openCategorie.open && categoriesBar_jsx(sousCategoriesBar, {
    closeClickHandler: () => {
      setOpenCategorie({
        open: false,
        categorie: null
      });
      changeWelcomeBarAppearance(true);
    },
    categorie: openCategorie.categorie
  })));
}
// EXTERNAL MODULE: ./components/elements/bar/WelcomeBar.js
var WelcomeBar = __webpack_require__("djej");

// CONCATENATED MODULE: ./components/elements/nav-bar/navbar.js

var navbar_jsx = external_react_default.a.createElement;





const categoriesStyles = {
  fixed: "fixed top-0 hidden md:flex flex-col w-full animate-menuSlideDown border-b border-gray-300 bg-white",
  notFixed: "hidden md:flex flex-col w-full border-b border-gray-500 bg-white",
  showBrandName: "animate-smouthAppearance flex px-4",
  hideBrandName: "hidden"
};

function NavBar({
  changeMenuClicked,
  openSearch,
  openSearchClickHandler,
  categories,
  max_shown,
  links,
  home
}) {
  const {
    0: style,
    1: setStyle
  } = Object(external_react_["useState"])({
    categoriesBarStyle: categoriesStyles.notFixed,
    brandNameStyle: categoriesStyles.hideBrandName
  });
  const {
    0: showWelcomeBar,
    1: setShowWelcomeBar
  } = Object(external_react_["useState"])(true);
  const upperNavRef = Object(external_react_["useRef"])(null); // const middleNavRef = useRef(null)
  // const WelcomeNavRef = useRef(null)
  // const categoriesNavRef = useRef(null)

  const changeWelcomeBarAppearance = value => {
    setShowWelcomeBar(value);
  };

  Object(external_react_["useEffect"])(() => {
    function adjustNavsPosition(event) {
      if (upperNavRef.current) {
        if (upperNavRef.current.getBoundingClientRect().y >= -upperNavRef.current.getBoundingClientRect().height) setStyle({
          categoriesBarStyle: categoriesStyles.notFixed,
          brandNameStyle: categoriesStyles.hideBrandName
        });else setStyle({
          categoriesBarStyle: categoriesStyles.fixed,
          brandNameStyle: categoriesStyles.showBrandName
        });
      }
    }

    document.addEventListener('scroll', adjustNavsPosition);
    return () => {
      document.removeEventListener('scroll', adjustNavsPosition);
    };
  }, [showWelcomeBar]);
  return navbar_jsx("nav", {
    className: "z-10 flex flex-col w-ful"
  }, navbar_jsx("div", {
    ref: upperNavRef,
    className: "fixed md:static z-10 w-full bg-white"
  }, navbar_jsx(upperNav_UpperNav, {
    style: " flex w-full md:w-4/5 mx-auto content-center h-12 py-5/12  pt-4 pb-2 bg-white",
    changeMenuClicked: changeMenuClicked,
    openSearch: openSearch,
    openSearchClickHandler: openSearchClickHandler,
    home: home,
    links: links
  }), navbar_jsx(CategoriesBar, {
    style: style.categoriesBarStyle,
    max_shown: max_shown,
    categories: categories,
    brandNameStyle: style.brandNameStyle,
    changeWelcomeBarAppearance: changeWelcomeBarAppearance
  })));
}

/* harmony default export */ var navbar = (NavBar);
// EXTERNAL MODULE: external "react-icons-kit/icomoon/arrowRight2"
var arrowRight2_ = __webpack_require__("fdPU");

// CONCATENATED MODULE: ./components/elements/side-menu/sideMenu.js

var sideMenu_jsx = external_react_default.a.createElement;





function FrameSlide({
  children,
  show
}) {
  return sideMenu_jsx("div", {
    className: `${show ? "transform -translate-x-full transition-all ease-out duration-400" : "transform translate-x-0 transition-all ease-out duration-300"} bg-indigo-400`
  }, children);
}

function ScrollBlocks({
  children,
  changeSwap
}) {
  return sideMenu_jsx("div", {
    className: "flex-row justify-between items-center w-full h-full overflow-scroll",
    onClick: changeSwap
  }, " ", children);
}

function TitleBlock({
  children,
  color,
  height
}) {
  return sideMenu_jsx("div", {
    className: `flex justify-between items-center w-full ${height ? height : "h-16"} border-b ${color ? color : "border-gray-300"} bg-gray-100`
  }, " ", children);
}

function Block({
  children,
  changeTitle,
  title,
  changeItems
}) {
  return sideMenu_jsx("div", {
    className: "flex justify-between items-center w-full h-20 p-5 border-b border-gray-300  hover:bg-blue-200 hover:text-gray-900",
    onClick: () => changeTitle(title)
  }, " ", children);
}

function SideMenu({
  menuClick,
  changeMenuClicked,
  currentPage,
  firstRender,
  changeCurrentPage,
  categories,
  max_shown,
  links
}) {
  const {
    0: initAppearance,
    1: setInitAppearance
  } = Object(external_react_["useState"])(false);
  const {
    0: swap,
    1: setSwap
  } = Object(external_react_["useState"])(true);
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("CATEGORIES"); // nav title

  const {
    0: items,
    1: setItems
  } = Object(external_react_["useState"])(categories.reduce((acc, item) => {
    acc.push(item.tag);
    return acc;
  }, []));

  const changeTitle = newTitle => {
    setTitle(newTitle);
    changeItems(newTitle, categories);
  };

  const changeItems = (title, categories) => {
    const listFound = categories.find(item => item.tag === title);
    if (listFound) setItems(listFound.sous_tags);else {
      setTitle("CATEGORIES");
      setItems(categories.reduce((acc, item) => {
        acc.push(item.tag);
        return acc;
      }, []));
    }
  };

  const changeSwap = () => {
    setSwap(!swap);
  };

  return sideMenu_jsx("nav", {
    className: `${menuClick ? "animate-menuSlideIn left-0" : !firstRender ? " animate-menuSlideOut -left-full" : "-left-full"} fixed flex-row w-11/12 z-30 h-full font-sans bg-white`
  }, sideMenu_jsx(TitleBlock, null, sideMenu_jsx("div", {
    className: "flex justify-center items-center h-full p-5 cursor-pointer"
  }, sideMenu_jsx("h1", {
    className: "text-xl font-bold"
  }, currentPage.page)), sideMenu_jsx("div", {
    className: "flex justify-center items-center p-5 h-full cursor-pointer",
    onClick: changeMenuClicked
  }, sideMenu_jsx("h1", null, "close"))), sideMenu_jsx(TitleBlock, {
    color: "bg-white",
    height: "h-12"
  }, sideMenu_jsx("div", {
    className: "flex justify-center items-center h-full w-full p-5 cursor-pointer"
  }, sideMenu_jsx("h1", {
    className: "text-xl font-bold"
  }, title))), sideMenu_jsx(ScrollBlocks, {
    changeSwap: changeSwap
  }, items.map((categorie, indx) => sideMenu_jsx(Block, {
    key: indx,
    changeTitle: changeTitle,
    title: categorie
  }, sideMenu_jsx("h1", null, categorie), sideMenu_jsx(external_react_icons_kit_["Icon"], {
    icon: arrowRight2_["arrowRight2"]
  })))));
}

/* harmony default export */ var sideMenu = (SideMenu);
// CONCATENATED MODULE: ./components/elements/alpha-displayer/AlphaDisplayer.js

var AlphaDisplayer_jsx = external_react_default.a.createElement;

function AlphaDisplayer({
  image,
  title,
  description,
  buttonText,
  clickAction
}) {
  const textStyle = {
    titleStyle: "font-kumbhsans font-bold text-lg md:text-2xl  text-center break-words text-white",
    descriptionStyle: "mb-2 md:m-2 tracking-tight md:tracking-widest font-medium md:font-extrabold text-xs md:text-base text-center text-white",
    buttonStyle: "tracking-widest font-yantramanav text-sm font-bold "
  };
  return AlphaDisplayer_jsx("div", {
    onClick: clickAction,
    className: "relative flex justify-center my-5 cursor-pointer overflow-hidden"
  }, AlphaDisplayer_jsx("img", {
    className: "w-full object-cover object-center",
    src: image,
    alt: "image cover"
  }), AlphaDisplayer_jsx("div", {
    className: "absolute flex flex-col justify-end items-center p-2 w-full h-full "
  }, AlphaDisplayer_jsx("h2", {
    className: textStyle.titleStyle
  }, title), AlphaDisplayer_jsx("p", {
    className: textStyle.descriptionStyle
  }, description), buttonText && buttonText !== "" && AlphaDisplayer_jsx("div", {
    className: "hidden md:flex justify-center items-center px-5 py-2 mb-10 mt-2 bg-white"
  }, AlphaDisplayer_jsx("p", {
    className: textStyle.buttonStyle
  }, buttonText))));
}
// CONCATENATED MODULE: ./components/widgets/search/searchWidget.js

var searchWidget_jsx = external_react_default.a.createElement;

function searchWidget_SearchWidget({
  style,
  clickHandler,
  inputFocus
}) {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(""); // ref for input

  const formInput = Object(external_react_["useRef"])(null); // after every render apply input focus if needed 

  Object(external_react_["useEffect"])(() => {
    if (inputFocus) formInput.current.focus();
  }, []); // traked text

  const writeData = event => {
    setData(event.target.value);
  }; // submit tracked text


  const submitdata = () => {
    setData("");
    clickHandler(data);
    event.preventDefault();
  };

  return searchWidget_jsx("div", {
    className: style
  }, searchWidget_jsx("form", {
    className: "flex justify-center items-center border-gray-800 border-b-2",
    onSubmit: submitdata
  }, searchWidget_jsx("div", {
    className: "w-8 h-8 mx-2"
  }), searchWidget_jsx("input", {
    ref: formInput,
    className: " h-full w-full trasform transition-all ease-out duration-700 focus:placeholder-gray-500 placeholder-gray-600 text-3xl  text-center outline-none ",
    value: data,
    onChange: writeData,
    type: "text",
    placeholder: "SEARCH"
  }), searchWidget_jsx("button", {
    className: "flex justify-center items-center h-8 w-8 mx-2 overflow-hidden focus:outline-none cursor-pointer"
  }, searchWidget_jsx("img", {
    className: "w-full object-cover object-center",
    src: "icons/loop.svg"
  }))));
}
// CONCATENATED MODULE: ./components/elements/searchGate/searchGate.js

var searchGate_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // history widget : used inside the history component 

function NewHistoryItem({
  title,
  deleteOneHistory
}) {
  const text = Object(external_react_["useRef"])(null);
  return searchGate_jsx("div", {
    className: "flex flex-row items-center justify-start"
  }, searchGate_jsx("p", {
    ref: text,
    className: " text-md "
  }, title));
}

function SearchGate({
  changeOpenSearch,
  searchData,
  setSearchData
}) {
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])(_objectSpread({}, searchData, {}, {
    inputFocus: true
  })); // searchGate data --> check searchData state in "layout.js"
  // STATE CALLBACKS
  // turn search input focus OFF

  const InputFocusOff = () => {
    setData(_objectSpread({}, data, {
      inputFocus: false
    }));
  }; // submit new target to search for + add to search history + turn off input focus


  const changeSearchTarget = searchTarget => {
    if (searchTarget !== "") {
      setData(_objectSpread({}, data, {
        searchTarget: searchTarget
      }));
      addSearchHistoryItem(searchTarget);
      InputFocusOff();
    }
  }; // track text on search input  "not used for now" 


  const updateTrackInputText = trackedInputText => {
    if (trackedInputText !== "") setData(_objectSpread({}, data, {
      searchTrackedInputText: trackedInputText
    }));
  }; // add item to search history


  const addSearchHistoryItem = historyItem => {
    if (historyItem !== "") {
      let newSearchHistory = data.searchHistory;
      newSearchHistory.push(historyItem);
      setData(_objectSpread({}, data, {
        searchHistory: newSearchHistory
      }));
    }
  }; // delete item from search history


  const deleteSearchHistoryItem = historyItem => {
    let newSearchHistory = [];
    data.searchHistory.forEach(item => {
      if (item !== historyItem) newSearchHistory.push(item);
    });
    setData(_objectSpread({}, data, {
      searchHistory: newSearchHistory
    }));
  }; // clear search history


  const clearSearchHistory = () => {
    setData(_objectSpread({}, data, {
      searchHistory: []
    }));
  }; // saves search data and exit -> updates searchData state in "layout.js" 


  const UpdateAndExit = () => {
    setSearchData(data);
    changeOpenSearch();
  }; // UTILITIES
  // close icon


  const CloseIcon = () => searchGate_jsx(external_react_icons_kit_["Icon"], {
    className: "cursor-pointer text-gray-600 hover:text-gray-700",
    onClick: UpdateAndExit,
    size: 40,
    icon: close_["close"]
  }); // history search component


  const RecentSearchCard = ({
    style,
    maxResultNumber
  }) => searchGate_jsx("div", {
    className: style
  }, searchGate_jsx("h2", {
    className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap"
  }, "Recent Search"), searchGate_jsx("ul", {
    className: "w-full flex flex-col justify-start"
  }, data.searchHistory.map((item, indx) => indx < maxResultNumber && searchGate_jsx("li", {
    key: indx,
    className: "cursor-pointer whitespace-no-wrap text-md hover:underline"
  }, searchGate_jsx(NewHistoryItem, {
    title: item,
    deleteOneHistory: deleteSearchHistoryItem
  })))), data.searchHistory.length > 0 && searchGate_jsx("label", {
    className: " text-sm text-gray-600 hover:text-gray-900 whitespace-no-wrap cursor-pointer my-2",
    onClick: clearSearchHistory
  }, "Delete History"), "        ");

  const AnnouceCard = ({
    style,
    cardTitle,
    titleLinks
  }) => searchGate_jsx("div", {
    className: style
  }, searchGate_jsx("h2", {
    className: "font-bold text-lg text-gray-900 font-kumbhsans my-2  whitespace-no-wrap"
  }, cardTitle), searchGate_jsx("ul", {
    className: "flex flex-col justify-start"
  }, titleLinks.map((title, indx) => searchGate_jsx("li", {
    key: indx,
    className: "cursor-pointer whitespace-no-wrap text-md hover:underline text-justify"
  }, title)))); // left part


  const LeftContentCard = ({
    style
  }) => searchGate_jsx("div", {
    className: style
  }, searchGate_jsx(RecentSearchCard, {
    style: "w-full flex flex-col items-start cursor-default",
    maxResultNumber: 8
  }), searchGate_jsx(AnnouceCard, {
    style: "w-full flex flex-col items-start mt-8 cursor-default",
    cardTitle: "Products",
    titleLinks: ["Leatest products", "Best selling products", "Season products"]
  }), searchGate_jsx(AnnouceCard, {
    style: "w-full flex flex-col items-start mt-8 cursor-default",
    cardTitle: "Stories",
    titleLinks: ["every stitch.. stitched with love", "braid from atlas mountains", "desert music"]
  })); // default content displayed in case there is no word to search for  


  const DefaultContentCard = () => searchGate_jsx("div", {
    className: "flex flex-col md:flex-row justify-start items-start mt-16 w-full  animate-smouthAppearance"
  }, searchGate_jsx(LeftContentCard, {
    style: "animate-smouthAppearance  flex flex-col justify-center w-4/12 px-4 "
  }), searchGate_jsx("div", {
    className: "flex flex-row justify-start w-full md:w-8/12 h-full "
  }, searchGate_jsx("div", {
    className: "flex flex-col justify-start items-start w-2/12"
  }), searchGate_jsx("div", {
    className: "flex flex-col justify-start items-start md:w-10/12"
  }, searchGate_jsx(AlphaDisplayer, {
    image: "images/Articles/cover-04.jpg",
    title: "The Lovely Place",
    description: "have u ever been in a place where .. .",
    buttonText: "",
    clickAction: () => console.log(" SHIT CLICKED ")
  })))); // content displayed to show search result


  const ResultContentCard = () => searchGate_jsx("div", {
    className: "flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start mt-16 w-full h-180 "
  }, searchGate_jsx("div", {
    className: "flex justify-center w-8/12 h-full "
  }, searchGate_jsx("div", {
    className: "w-5/12"
  }, searchGate_jsx(AlphaDisplayer, {
    title: "",
    description: "",
    buttonText: "",
    image: "images/Articles/cover-5.jpg"
  })))); // the entire default search displayed


  const DefaultBody = () => searchGate_jsx("div", {
    className: "flex flex-col items-center justify-start w-9/12 bg-white"
  }, searchGate_jsx(searchWidget_SearchWidget, {
    style: "w-full h-12 mt-4",
    clickHandler: changeSearchTarget,
    inputFocus: data.inputFocus
  }), searchGate_jsx(DefaultContentCard, null)); // the entire search result displayed


  const ResultBody = () => searchGate_jsx("div", {
    className: "flex flex-col items-center justify-start w-10/12 bg-white"
  }, searchGate_jsx(searchWidget_SearchWidget, {
    style: "w-full h-12 my-0 bg-white ",
    clickHandler: submitInputText,
    inputFocus: data.inputFocus
  }), searchGate_jsx(ResultContentCard, null)); // CONPONENTS
  // upper bar : contains exit button


  const TopBar = () => searchGate_jsx("div", {
    className: "flex justify-end w-full p-5 "
  }, searchGate_jsx(CloseIcon, null)); // search body : switch between search and default mode


  const MainBody = () => searchGate_jsx(DefaultBody, null) // <SearchResultBody/>
  ; // RENDER THAT SHIT


  return searchGate_jsx("div", {
    className: `animate-menuSlideDown fixed top-0 z-50 w-full flex flex-col items-center justify-start bg-white h-full`
  }, searchGate_jsx(TopBar, null), searchGate_jsx(MainBody, null));
}
// CONCATENATED MODULE: ./components/elements/blackFocusScreen/BlackFocusScreen.js

var BlackFocusScreen_jsx = external_react_default.a.createElement;
function BlackFocusScreen({
  onClick
}) {
  return BlackFocusScreen_jsx("div", {
    className: "absolute z-20 top-0 left-0 w-full h-full  bg-gray-900 bg-opacity-50",
    onClick: onClick
  });
}
// EXTERNAL MODULE: ./services/api/get/getRequest.js
var getRequest = __webpack_require__("Dk97");

// EXTERNAL MODULE: ./components/elements/discuss/WaitList.js
var WaitList = __webpack_require__("8h1l");

// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 4 modules
var buttons = __webpack_require__("EDLy");

// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 5 modules
var textFields = __webpack_require__("6P1G");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./services/api/post/postRequest.js
var postRequest = __webpack_require__("2mnT");

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__("8xkj");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_);

// CONCATENATED MODULE: ./components/elements/discuss/LeaveMessage.js

var LeaveMessage_jsx = external_react_default.a.createElement;







const LeaveMessage = props => {
  const {
    0: emailError,
    1: setEmailError
  } = Object(external_react_["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(external_react_["useState"])('LEAVE US A MESSAGE');
  const {
    0: reset,
    1: setReset
  } = Object(external_react_["useState"])(false);
  let email;
  let message;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handleMessageChange = event => {
    message = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email != null && email != '') {
      let data = {
        email: email,
        text: message
      };
      let content = {
        operation: 'register',
        data: external_querystring_default.a.stringify(data)
      };
      Object(postRequest["a" /* postRequest */])(external_querystring_default.a.stringify(content), external_js_cookie_default.a.get('csrftoken'), "http://localhost:8000" + '/api/messages/').then(response => {
        console.log(response);

        if (response.status === "error") {
          setWelcome('Something Wrong!');
          console.log('error');
        } else {
          setWelcome('THANK YOU!');
          setReset(true);
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      if (email == null || email == '') {
        setEmailError(true);
      }
    }
  };

  let content = LeaveMessage_jsx("div", {
    className: props.className
  }, LeaveMessage_jsx("div", {
    className: "w-full h-full flex flex-col items-left"
  }, LeaveMessage_jsx("strong", {
    className: " md:whitespace-no-wrap font-roboto font-black text-3xl text-white mb-4"
  }, welcome), LeaveMessage_jsx("div", null, LeaveMessage_jsx(textFields["e" /* TxtField */], {
    reset: reset,
    disabled: reset,
    error: emailError,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: 10,
    placeholder: "EMAIL",
    placeholderColor: "white",
    className: "w-full max-w-64 mt-2",
    onChange: handleEmailChange
  }), LeaveMessage_jsx(textFields["d" /* TxtArea */], {
    reset: reset,
    disabled: reset,
    borderColor: "white",
    textColor: "white",
    focusColor: "white",
    bgColor: "transparent",
    disableColor: "gray-900",
    height: "full",
    placeholder: "Message...",
    placeholderColor: "white",
    onChange: handleMessageChange,
    className: "w-full max-w-64 mt-2"
  }), LeaveMessage_jsx("div", {
    className: "w-full h-auto flex flex-row-reverse"
  }, LeaveMessage_jsx(buttons["a" /* Btn */], {
    disabled: reset,
    className: "w-full h-auto",
    borderColor: "white",
    bgColor: "transparent",
    textColor: "white",
    textSize: "sm",
    textWeight: "medium",
    hoverColor: "gray-900",
    disableColor: "gray-900",
    height: 10,
    value: "Send",
    onClick: handleSubmit
  })))));

  return content;
};

/* harmony default export */ var discuss_LeaveMessage = (LeaveMessage);
// CONCATENATED MODULE: ./components/elements/discuss/index.js


// CONCATENATED MODULE: ./components/elements/footer/footer.js

var footer_jsx = external_react_default.a.createElement;




function Footer({
  categories,
  max_shown,
  links
}) {
  const IconsContainer = () => footer_jsx("div", {
    className: "flex flex-row mx-2 text-gray-300 "
  }, footer_jsx("a", {
    className: "mx-4"
  }, footer_jsx(external_react_icons_kit_["Icon"], {
    size: 20,
    icon: icomoon_["facebook2"]
  })), footer_jsx("a", {
    className: "mx-4"
  }, footer_jsx(external_react_icons_kit_["Icon"], {
    size: 20,
    icon: icomoon_["instagram"]
  })), footer_jsx("a", {
    className: "mx-4"
  }, footer_jsx(external_react_icons_kit_["Icon"], {
    size: 20,
    icon: icomoon_["twitter"]
  })));

  const CategoriesCard = () => footer_jsx("div", {
    className: "my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1  flex-col justify-start items-start sm:items-center "
  }, footer_jsx("h2", {
    className: "tracking-widest my-4  text-lg text-white font-kumbhsans cursor-default"
  }, "CATEGORIES"), footer_jsx("ul", {
    className: "flex flex-col justify-start items-start"
  }, categories.map((categorie, index) => index < max_shown && footer_jsx("li", {
    key: index,
    className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400"
  }, categorie.tag.toLowerCase()))));

  const EntriesCard = () => footer_jsx("div", {
    className: "my-2 sm:mx-8 md:mx-10 lg:mx-5 flex lg:flex-1 flex-col justify-start items-start sm:items-center"
  }, footer_jsx("h2", {
    className: "tracking-widest my-4 text-lg text-white font-kumbhsans cursor-default"
  }, "ENTRIES"), footer_jsx("ul", {
    className: "flex flex-col justify-start items-start"
  }, links.map((link, indx) => footer_jsx("li", {
    className: "my-1 cursor-pointer tracking-widest whitespace-no-wrap text-sm hover:underline text-justify text-gray-400",
    key: indx
  }, footer_jsx(link_default.a, {
    href: link.path
  }, footer_jsx("a", null, link.page.toLowerCase()))))));

  return footer_jsx("div", {
    className: "flex justify-center w-full bg-black shadow-2xl"
  }, footer_jsx("div", {
    className: "flex flex-col w-10/12"
  }, footer_jsx("div", {
    className: "flex justify-center items-center w-full h-auto mt-24 mb-16"
  }, footer_jsx("h1", {
    className: "text-white font-bold text-2xl font-kumbhsans cursor-default"
  }, footer_jsx("span", {
    className: "whitespace-no-wrap"
  }, "MORMADE |"), footer_jsx("br", {
    className: "md:hidden"
  }), " MOROCCO")), footer_jsx("div", {
    className: "my-10 flex flex-col lg:flex-row justify-start lg:justify-around items-center w-full h-auto"
  }, footer_jsx("div", {
    className: "mb-5 sm:mb-10 flex flex-1 flex-col sm:flex-row items-start sm:justify-center lg:justify-between  w-full  "
  }, footer_jsx(CategoriesCard, null), footer_jsx(EntriesCard, null)), footer_jsx("div", {
    className: "mx-5 mt-5 w-full flex flex-1 sm:justify-center items-center md:w-auto text-gray-500"
  }, footer_jsx(discuss_LeaveMessage, null))), footer_jsx("div", {
    className: "flex flex-row justify-end items-center w-full h-16 border-t border-gray-800 text-gray-500"
  }, footer_jsx(IconsContainer, null))));
}
// CONCATENATED MODULE: ./components/layout.js
var layout_jsx = external_react_default.a.createElement;







 // fake data 

const layout_categories = [{
  tag: "clothes",
  sous_tags: ["shoes", "t-shirts", "jeans", "socks"],
  tag_image: "images/tags/clothes/clothes-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}, {
  tag: "jewlery",
  sous_tags: ["neckchains", "rings", "bracelets", "earrings", "watches"],
  tag_image: "images/tags/jewlery/jewlery-1.jpg"
}, {
  tag: "furniture",
  sous_tags: ["tables", "beds", "chair", "sofa", "wardrobes"],
  tag_image: "images/tags/furniture/furniture-1.jpg"
}, {
  tag: "gifts",
  sous_tags: ["parfum", "braclet", "socks", "backpack", "necklace", "wallet"],
  tag_image: "images/tags/gifts/gifts-1.jpg"
}];
const layout_links = [{
  page: 'MAKERS',
  path: '/makers'
}, {
  page: 'REGIONS',
  path: '/regions'
}, {
  page: 'STORIES',
  path: '/stories'
}];

const Layout = props => {
  // GLOBAL STATES
  const {
    0: openMenu,
    1: setOpenMenu
  } = Object(external_react_["useState"])(false); // menu open/close state

  const {
    0: selectedPage,
    1: setSelectedPage
  } = Object(external_react_["useState"])({
    page: "HOME",
    path: "/"
  }); // current selected page

  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(external_react_["useState"])(false); // search open/close state

  const {
    0: searchData,
    1: setSearchData
  } = Object(external_react_["useState"])({
    searchHistory: [],
    searchTarget: "",
    searchTrackedInputText: ""
  }); // saved search DATA 
  // STATE CALLBACKS
  // openSearch callBacks

  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
  }; // openMenu callBacks


  const changeOpenMenu = () => {
    setOpenMenu(!openMenu);
  }; // selectedPage callBacks


  const changeSelectedPage = link => {
    setSelectedPage(link);
  }; // DISPLAYED CONTENT 


  const FooterBar = () => layout_jsx(Footer, {
    categories: layout_categories,
    max_shown: 5,
    links: layout_links
  });

  const Page = () => !openSearch && props.children;

  const Menu = () => openMenu && layout_jsx(sideMenu, {
    menuClick: openMenu,
    changeMenuClicked: changeOpenMenu,
    currentPage: selectedPage,
    changeCurrentPage: changeSelectedPage,
    categories: layout_categories,
    max_shown: 8,
    links: layout_links
  });

  const NavigationBar = () => layout_jsx(navbar, {
    changeMenuClicked: changeOpenMenu,
    openSearch: openSearch,
    openSearchClickHandler: changeOpenSearch,
    logo: "/logo.png",
    categories: props.tags,
    max_shown: 8,
    links: layout_links,
    home: "/"
  });

  const SearchPage = () => openSearch && layout_jsx(SearchGate, {
    changeOpenSearch: changeOpenSearch,
    searchData: searchData,
    setSearchData: data => setSearchData(data)
  });

  const BlackFocusOff = () => openMenu && layout_jsx(BlackFocusScreen, {
    onClick: changeOpenMenu
  });

  const SpacingTop = () => openSearch ? layout_jsx(Wrapper, {
    style: " w-full absolute top-0 bg-blue-600"
  }) : layout_jsx(Wrapper, {
    style: "w-full absolute top-0 h-48"
  }); // RENDER THAT SHIT


  return layout_jsx("div", {
    className: "relative flex flex-col w-full bg-scroll"
  }, layout_jsx(Menu, null), layout_jsx(BlackFocusOff, null), layout_jsx(NavigationBar, null), layout_jsx(SpacingTop, null), layout_jsx(SearchPage, null), layout_jsx(Page, null), layout_jsx(FooterBar, null));
};

/* harmony default export */ var layout = (Layout);
// CONCATENATED MODULE: ./components/elements/MakersEntry/MakersEntry.js

var MakersEntry_jsx = external_react_default.a.createElement;
function MakersEntry() {
  return MakersEntry_jsx("div", null, "Makers Entry");
}
// CONCATENATED MODULE: ./components/elements/RegionsEntry/RegionsEntry.js

var RegionsEntry_jsx = external_react_default.a.createElement;
function RegionsEntry() {
  return RegionsEntry_jsx("div", null, "Regions Entry");
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/widgets/product/ProductGrid.js
var ProductGrid = __webpack_require__("9n/q");

// EXTERNAL MODULE: ./lib/parseCookies.js
var parseCookies = __webpack_require__("tH+X");

// EXTERNAL MODULE: ./services/authentication/authentication.js
var authentication = __webpack_require__("oD+g");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/authentication/checkUser.js


async function checkUser(operation, csrttoken) {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-CSRFToken': csrttoken
    }
  };
  let content = {
    operation: operation,
    data: 'None'
  };
  external_axios_default.a.defaults.withCredentials = true;
  external_axios_default.a.post("http://localhost:8000" + '/api/users/', external_querystring_default.a.stringify(content), axiosConfig).then(response => {
    return response;
  }).catch(error => {
    return null;
  });
}
// EXTERNAL MODULE: ./components/elements/authentication/index.js + 4 modules
var elements_authentication = __webpack_require__("vZAx");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;















const pages_images = {
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

const Hello = props => {
  return pages_jsx(layout, {
    tags: props.tags
  }, pages_jsx(head_default.a, null, pages_jsx("title", null, "MorMade"), pages_jsx("link", {
    rel: "icon",
    href: "/logo.png"
  })), pages_jsx("div", {
    className: "w-full flex flex-col bg-white items-center"
  }, pages_jsx(bar["d" /* WelcomeBar */], {
    className: "w-full"
  }), pages_jsx("div", {
    className: "w-full max-w-screen-md"
  }, pages_jsx(elements_authentication["c" /* MakerRegist */], {
    className: "w-full my-4",
    csrf: props.cookies['csrftoken']
  }))));
};

Hello.getInitialProps = async ({
  req
}) => {
  const cookies = Object(parseCookies["a" /* parseCookies */])(req);
  console.log(cookies);
  const tags = await Object(getRequest["a" /* getRequest */])("http://localhost:8000" + '/api/categories/').then(res => {
    return res;
  });
  return {
    cookies: cookies,
    tags: tags
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Hello);

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
    className: "w-full h-auto bg-gradient-to-r from-gray-700 via-gray-100 to-gray-700 border-b border-gray-500 flex felx-wrap box-content overflow-hidden pt-1 pb-1"
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

/***/ "fdPU":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/arrowRight2");

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

/***/ "kzen":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/cross");

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

/***/ "vZAx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ authentication_Login; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ authentication_SignUp; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ authentication_Authentication; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ authentication_MakerRegist; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./services/authentication/authentication.js
var authentication = __webpack_require__("oD+g");

// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 4 modules
var buttons = __webpack_require__("EDLy");

// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 5 modules
var textFields = __webpack_require__("6P1G");

// CONCATENATED MODULE: ./components/elements/authentication/Login.js

var __jsx = external_react_default.a.createElement;




const Login = props => {
  console.log('enter login');
  let email;
  let password;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handlePasswordChange = event => {
    password = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('********');
    const data = {
      email: email,
      password: password
    };
    console.log('__________');
    Object(authentication["a" /* authenticate */])(data, "login", props.csrf).then(response => {
      if (response.status === "error") {
        console.log('error');
      } else {
        console.log('success');
      }
    }).catch(error => {
      console.log(error);
    });
  };

  let content = __jsx("div", {
    className: "container mx-auto w-full max-w-lg bg-xw-100"
  }, __jsx("div", {
    className: "p-12 w-full"
  }, __jsx("h3", {
    className: "w-full font-sans font-bold text-xl text-gray-900 text-center mb-2"
  }, "Sign in"), __jsx("h4", {
    className: "w-full font-sans font-medium text-sm text-gray-800 text-center mt-3 mb-10"
  }, "Welcome dear maker"), __jsx("div", {
    className: ""
  }, __jsx("form", {
    className: "",
    action: ""
  }, __jsx(textFields["e" /* TxtField */], {
    className: "mb-3 mt-2",
    label: "Email",
    onChange: handleEmailChange
  }), __jsx(textFields["b" /* PwdField */], {
    className: "mb-3 mt-2",
    label: "Password",
    onChange: handlePasswordChange
  }), __jsx(buttons["b" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "SIGN IN",
    onClick: handleSubmit
  }), __jsx(buttons["c" /* BtnBtb */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "REGISTER AS MAKER",
    onClick: props.switch
  })))));

  return content;
};

/* harmony default export */ var authentication_Login = (Login);
// CONCATENATED MODULE: ./components/elements/authentication/SignUp.js

var SignUp_jsx = external_react_default.a.createElement;




const SignUp = props => {
  console.log('enter sign up');
  let username;
  let email;
  let password;
  let rePassword;

  const handleUsernameChange = event => {
    username = event.target.value;
    console.log(username);
  };

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handlePasswordChange = event => {
    password = event.target.value;
  };

  const handleRePasswordChange = event => {
    rePassword = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('********');

    if (password === rePassword) {
      const data = {
        username: username,
        email: email,
        password: password
      };
      console.log('__________');
      Object(authentication["a" /* authenticate */])(data, "signup", props.csrf).then(response => {
        if (response.status === "error") {
          console.log('error');
        } else {
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    }
  };

  let content = SignUp_jsx("div", {
    className: "container mx-auto w-full max-w-lg bg-xw-100"
  }, SignUp_jsx("div", {
    className: "p-12 w-full"
  }, SignUp_jsx("h3", {
    className: "w-full font-sans font-bold text-xl text-gray-900 text-center mb-2"
  }, "Sign up"), SignUp_jsx("h4", {
    className: "w-full font-sans font-medium text-sm text-gray-800 text-center mt-3 mb-10"
  }, "Welcome dear maker"), SignUp_jsx("div", {
    className: ""
  }, SignUp_jsx("form", {
    className: "",
    action: ""
  }, SignUp_jsx(textFields["e" /* TxtField */], {
    className: "mb-3 mt-2",
    label: "Username",
    onChange: handleUsernameChange
  }), SignUp_jsx(textFields["e" /* TxtField */], {
    className: "mb-3 mt-2",
    label: "Email",
    onChange: handleEmailChange
  }), SignUp_jsx(textFields["b" /* PwdField */], {
    className: "mb-3 mt-2",
    label: "Password",
    onChange: handlePasswordChange
  }), SignUp_jsx(textFields["b" /* PwdField */], {
    className: "mb-3 mt-2",
    label: "Retype password",
    onChange: handleRePasswordChange
  }), SignUp_jsx(buttons["b" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "SIGN UP",
    onClick: handleSubmit
  }), SignUp_jsx(buttons["c" /* BtnBtb */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "BACK TO SIGN IN",
    onClick: props.switch
  })))));

  return content;
};

/* harmony default export */ var authentication_SignUp = (SignUp);
// CONCATENATED MODULE: ./components/elements/authentication/Authentication.js
var Authentication_jsx = external_react_default.a.createElement;



const Authentication = props => {
  const {
    0: box,
    1: setBox
  } = Object(external_react_["useState"])();

  let attr1 = Authentication_jsx("div", null);

  let attr2 = Authentication_jsx("div", null);

  Object(external_react_["useEffect"])(() => {
    console.log(props.cookies['csrftoken']);
    attr1 = Authentication_jsx(authentication_Login, {
      csrf: props.cookies['csrftoken'],
      switch: () => setBox(attr2)
    });
    attr2 = Authentication_jsx(authentication_SignUp, {
      csrf: props.cookies['csrftoken'],
      switch: () => setBox(attr1)
    });
    setBox(attr1);
  }, []);

  const content = Authentication_jsx("div", {
    className: "bg-xw-500 w-full h-screen flex content-center flex-wrap"
  }, box);

  return content;
};

/* harmony default export */ var authentication_Authentication = (Authentication);
// EXTERNAL MODULE: ./services/authentication/registerUser.js
var registerUser = __webpack_require__("BbnH");

// CONCATENATED MODULE: ./components/elements/authentication/MakerRegist.js
var MakerRegist_jsx = external_react_default.a.createElement;





const MakerRegist = props => {
  const {
    0: emailError,
    1: setEmailError
  } = Object(external_react_["useState"])(false);
  const {
    0: numError,
    1: setNumError
  } = Object(external_react_["useState"])(false);
  const {
    0: welcome,
    1: setWelcome
  } = Object(external_react_["useState"])('Maker | Join us');
  const {
    0: reset,
    1: setReset
  } = Object(external_react_["useState"])(false);
  let email;
  let num;

  const handleEmailChange = event => {
    email = event.target.value;
  };

  const handleNumChange = event => {
    num = event.target.value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email != null && email != '' && num != null && num != '') {
      const data = {
        username: email.split('@')[0],
        email: email,
        phone: num,
        is_maker: true
      };
      Object(registerUser["a" /* registerUser */])(data, "signup_maker", props.csrf).then(response => {
        if (response.status === "error") {
          setWelcome('Someting wrong! .. Try again');
          console.log('error');
        } else {
          setWelcome('Thank you! we will reach you soon');
          setReset(true);
          console.log('success');
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      if (email == null || email == '') {
        setEmailError(true);
      }

      if (num == null || num == '') {
        setNumError(true);
      }
    }
  };

  let content = MakerRegist_jsx("div", {
    className: props.className
  }, MakerRegist_jsx("div", {
    className: "w-full h-auto border rounded-sm bg-white overflow-hidden"
  }, MakerRegist_jsx("div", {
    className: "w-full h-auto p-6 justify-end"
  }, MakerRegist_jsx("h3", {
    className: "h-auto w-full font-roboto font-bold text-gray-900 text-2xl text-left align-left mb-6"
  }, welcome), MakerRegist_jsx("div", {
    className: "w-full h-auto flex flex-wrap flex-col md:flex-row items-end"
  }, MakerRegist_jsx(textFields["e" /* TxtField */], {
    reset: reset,
    error: numError,
    align: "left",
    color: "gray-900",
    className: "w-full flex-2 mt-2 md:mr-2",
    label: "Phone number",
    placeholder: "xxxxxxxxxx",
    height: 10,
    onChange: handleNumChange
  }), MakerRegist_jsx(textFields["e" /* TxtField */], {
    reset: reset,
    error: emailError,
    align: "left",
    color: "gray-900",
    className: "w-full flex-2 mt-2 md:mr-2",
    label: "E-mail",
    placeholder: "example@email.com",
    height: 10,
    onChange: handleEmailChange
  }), MakerRegist_jsx("div", {
    className: "w-full h-full flex-1 content-end flex-wrap mt-4 md:mr-2 md:mt-0"
  }, MakerRegist_jsx(buttons["b" /* BtnBbw */], {
    className: "w-full h-10",
    weight: "bold",
    value: "JOIN",
    onClick: handleSubmit
  }))))));

  return content;
};

/* harmony default export */ var authentication_MakerRegist = (MakerRegist);
// CONCATENATED MODULE: ./components/elements/authentication/index.js





/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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
// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 4 modules
var buttons = __webpack_require__("EDLy");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

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
  }, user.username) : NavMenu_jsx(buttons["b" /* BtnBbw */], {
    className: "w-auto h-12 mt-2 mb-2",
    value: "SIGN IN",
    onClick: () => {
      window.location = '/auth';
    }
  }), user != null ? NavMenu_jsx("button", {
    className: "focus:outline-none font-sans font-semibold text-gray-700 text-xs text-left hover:underline my-2",
    type: "button",
    onClick: () => {
      Object(authentication["a" /* authenticate */])({}, "logout", external_js_cookie_default.a.get('csrftoken'));
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
    className: ""
  }));

  let contentWithMenu = NavMenu_jsx("div", {
    className: props.className
  }, NavMenu_jsx("div", {
    ref: focusRef,
    className: ""
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