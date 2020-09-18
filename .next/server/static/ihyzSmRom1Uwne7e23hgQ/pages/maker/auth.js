module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3UIB");


/***/ }),

/***/ "3UIB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./services/authentication/authentication.js
var authentication = __webpack_require__("oD+g");

// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 3 modules
var buttons = __webpack_require__("EDLy");

// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 4 modules
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
  }, __jsx(textFields["d" /* TxtField */], {
    className: "mb-3 mt-2",
    label: "Email",
    onChange: handleEmailChange
  }), __jsx(textFields["b" /* PwdField */], {
    className: "mb-3 mt-2",
    label: "Password",
    onChange: handlePasswordChange
  }), __jsx(buttons["a" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "SIGN IN",
    onClick: handleSubmit
  }), __jsx(buttons["b" /* BtnBtb */], {
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
  }, SignUp_jsx(textFields["d" /* TxtField */], {
    className: "mb-3 mt-2",
    label: "Username",
    onChange: handleUsernameChange
  }), SignUp_jsx(textFields["d" /* TxtField */], {
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
  }), SignUp_jsx(buttons["a" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "SIGN UP",
    onClick: handleSubmit
  }), SignUp_jsx(buttons["b" /* BtnBtb */], {
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
// CONCATENATED MODULE: ./components/elements/authentication/index.js



// EXTERNAL MODULE: ./lib/parseCookies.js
var parseCookies = __webpack_require__("tH+X");

// CONCATENATED MODULE: ./pages/maker/auth.js
var auth_jsx = external_react_default.a.createElement;




const Auth = ({
  cookies = {}
}) => {
  console.log(cookies);

  let contentDOM = auth_jsx(authentication_Authentication, {
    cookies: cookies
  });

  return contentDOM;
};

Auth.getInitialProps = ({
  req
}) => {
  const cookies = Object(parseCookies["a" /* parseCookies */])(req);
  return {
    cookies: cookies
  };
};

/* harmony default export */ var auth = __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "6P1G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ textFields_TxtField; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ textFields_PwdField; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ textFields_TxtArea; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ textFields_IntField; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/graphics/textFields/TxtField.js

var __jsx = external_react_default.a.createElement;

const TxtField = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), __jsx("input", {
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_TxtField = (TxtField);
// CONCATENATED MODULE: ./components/graphics/textFields/PwdField.js

var PwdField_jsx = external_react_default.a.createElement;

const PwdField = props => {
  let content = PwdField_jsx("div", {
    className: props.className
  }, PwdField_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), PwdField_jsx("input", {
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "password",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_PwdField = (PwdField);
// CONCATENATED MODULE: ./components/graphics/textFields/TxtArea.js

var TxtArea_jsx = external_react_default.a.createElement;

const TxtArea = props => {
  let content = TxtArea_jsx("div", {
    className: props.className
  }, TxtArea_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), TxtArea_jsx("textarea", {
    rows: "4",
    cols: "50",
    className: "appearance-none border w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "text",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_TxtArea = (TxtArea);
// CONCATENATED MODULE: ./components/graphics/textFields/IntField.js

var IntField_jsx = external_react_default.a.createElement;

const IntField = props => {
  let content = IntField_jsx("div", {
    className: props.className
  }, IntField_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, props.label), IntField_jsx("input", {
    min: "0",
    className: "appearance-none border w-32 h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",
    type: "number",
    onChange: props.onChange
  }));

  return content;
};

/* harmony default export */ var textFields_IntField = (IntField);
// CONCATENATED MODULE: ./components/graphics/textFields/index.js





/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

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
  const content = __jsx("div", {
    className: props.className
  }, __jsx("button", {
    className: "w-full h-full bg-gray-900 hover:bg-gray-700 focus:outline-none focus:border-gray-900 font-sans font-medium text-white text-sm py-2 px-4",
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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
      console.log(response); //window.open('/users')

      if (operation == 'logout') {
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });