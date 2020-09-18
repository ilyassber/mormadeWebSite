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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vasz");


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

/***/ "vasz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./lib/parseCookies.js
var parseCookies = __webpack_require__("tH+X");

// CONCATENATED MODULE: ./components/logo/Brand.js
var __jsx = external_react_default.a.createElement;


const Brand = props => {
  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "container h-full w-auto content-center mx-auto flex flex-wrap"
  }, __jsx("h2", {
    className: "font-sans font-bold text-gray-900"
  }, "MORMADE")));

  return content;
};

/* harmony default export */ var logo_Brand = (Brand);
// CONCATENATED MODULE: ./components/graphics/images/ImgRound.js
var ImgRound_jsx = external_react_default.a.createElement;


const ImgRound = props => {
  const content = ImgRound_jsx("div", {
    className: props.className
  }, ImgRound_jsx("div", {
    className: "rounded-full h-full w-full flex items-center justify-center"
  }, ImgRound_jsx("img", {
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
      props.onChange(Array.from(input.target.files));
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
// CONCATENATED MODULE: ./components/graphics/images/index.js



// CONCATENATED MODULE: ./components/user/Menu.js
var Menu_jsx = external_react_default.a.createElement;



const Menu = props => {
  let content = Menu_jsx("div", {
    className: props.className
  }, Menu_jsx("div", {
    className: "h-full w-auto container content-center mx-auto flex flex-wrap"
  }, Menu_jsx(images_ImgRound, {
    className: "w-5 h-5",
    src: "/profile.png"
  }), Menu_jsx("button", {
    className: "focus:outline-none",
    type: "button",
    onClick: props.onClick
  }, Menu_jsx("p", {
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
  let status = false;

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
    className: "fixed z-50 h-10 w-full flex bg-white"
  }, Navbar_jsx("div", {
    className: "flex flex-row"
  }, Navbar_jsx(logo_Brand, {
    className: "h-full w-auto ml-6"
  })), Navbar_jsx("div", {
    className: "w-full flex flex-row-reverse"
  }, Navbar_jsx(user_Menu, {
    className: "h-full w-auto mr-6",
    username: "ilyass",
    onClick: dropMenuOn
  }))), Navbar_jsx(bar_NavMenu, {
    className: "z-50",
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
// CONCATENATED MODULE: ./components/elements/bar/NavMenu.js
var NavMenu_jsx = external_react_default.a.createElement;




const NavMenu = props => {
  let object = NavMenu_jsx("div", {
    className: ""
  }, NavMenu_jsx("div", {
    className: "hover:bg-xw-100 w-24 border border-gray-900 bg-white"
  }, NavMenu_jsx("button", {
    className: "focus:outline-none font-sans font-medium text-gray-900 text-sm ml-2",
    type: "button",
    onClick: () => {
      Object(authentication["a" /* authenticate */])({}, "logout", props.cookies['csrftoken']);
    }
  }, "logout")));

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
// CONCATENATED MODULE: ./components/elements/bar/WelcomeBar.js
var WelcomeBar_jsx = external_react_default.a.createElement;


const WelcomeBar = props => {
  let content = WelcomeBar_jsx("div", {
    className: props.className
  }, WelcomeBar_jsx("div", {
    class: "border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
  }, WelcomeBar_jsx("div", {
    class: "animate-pulse flex space-x-4"
  }, WelcomeBar_jsx("div", {
    class: "rounded-full bg-gray-400 h-12 w-12"
  }), WelcomeBar_jsx("div", {
    class: "flex-1 space-y-4 py-1"
  }, WelcomeBar_jsx("div", {
    class: "h-4 bg-gray-400 rounded w-3/4"
  }), WelcomeBar_jsx("div", {
    class: "space-y-2"
  }, WelcomeBar_jsx("div", {
    class: "h-4 bg-gray-400 rounded"
  }), WelcomeBar_jsx("div", {
    class: "h-4 bg-gray-400 rounded w-5/6"
  }))))));

  return content;
};

/* harmony default export */ var bar_WelcomeBar = (WelcomeBar);
// CONCATENATED MODULE: ./components/elements/bar/index.js




// CONCATENATED MODULE: ./components/widgets/product/ProductGrid.js
var ProductGrid_jsx = external_react_default.a.createElement;


const ProductGrid = props => {
  let content = ProductGrid_jsx("article", {
    className: props.className
  }, ProductGrid_jsx("div", {
    className: "container h-auto w-full content-center"
  }, ProductGrid_jsx("div", {
    className: "relative w-full bg-yellow-300 pb-1/1"
  }, ProductGrid_jsx("img", {
    className: "absolute w-full h-full object-cover",
    src: props.data.images[0].path
  }), ProductGrid_jsx("button", {
    className: "absolute top-0 right-0 h-10 w-10 m-2"
  }, ProductGrid_jsx("img", {
    src: "/heart-white.png"
  }))), ProductGrid_jsx("div", {
    className: "h-auto w-full"
  }, ProductGrid_jsx("h3", {
    className: "leading-tight font-sans font-medium text-base text-gray-900 pt-2"
  }, props.data.name), ProductGrid_jsx("strong", {
    className: "leading-tight font-sans font-normal text-sm text-gray-800"
  }, props.owner), ProductGrid_jsx("p", {
    className: "leading-tight font-sans font-semibold text-lg text-gray-900"
  }, "MAD " + props.data.price))));

  return content;
};

/* harmony default export */ var product_ProductGrid = (ProductGrid);
// CONCATENATED MODULE: ./components/widgets/product/index.js

// CONCATENATED MODULE: ./components/elements/list/ProductGridList.js
var ProductGridList_jsx = external_react_default.a.createElement;


const ProductGridList = props => {
  let content = ProductGridList_jsx("div", {
    className: props.className
  }, ProductGridList_jsx("div", {
    className: "w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1"
  }, props.data));

  return content;
};

/* harmony default export */ var list_ProductGridList = (ProductGridList);
// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 4 modules
var textFields = __webpack_require__("6P1G");

// EXTERNAL MODULE: ./components/graphics/buttons/index.js + 3 modules
var buttons = __webpack_require__("EDLy");

// CONCATENATED MODULE: ./components/widgets/image/AddImageGrid.js
var AddImageGrid_jsx = external_react_default.a.createElement;



const AddImageGrid = props => {
  const {
    0: imagesList,
    1: setImagesList
  } = Object(external_react_["useState"])(null);

  const appendFile = newFiles => {
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
        return AddImageGrid_jsx(images_RemovedSquaredImg, {
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
  }, imagesList, AddImageGrid_jsx(images_AddImage, {
    onChange: appendFile
  }))));

  return content;
};

/* harmony default export */ var image_AddImageGrid = (AddImageGrid);
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
    const url = 'https://www.mormade.com/api/images/';
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
// CONCATENATED MODULE: ./services/api/fetch/getCategories.js


function getCategories(lvl, id, csrttoken) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    let content = {
      operation: 'get',
      lvl: lvl,
      id: id
    };
    external_axios_default.a.defaults.withCredentials = true;
    external_axios_default.a.post('https://www.mormade.com/api/categories/', external_querystring_default.a.stringify(content), axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
// CONCATENATED MODULE: ./components/graphics/category/SelectCategory.js
var SelectCategory_jsx = external_react_default.a.createElement;



const SelectCategory = props => {
  const forceUpdate = external_react_default.a.useReducer(() => ({}))[1];
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
    getCategories(currentLvl, props.parent, props.csrftoken).then(res => {
      setData(JSON.stringify(res));
    });
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
          getData(); //selectedRef.current.value = ''
          //forceUpdate()
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
    }, "\u203A")), SelectCategory_jsx("div", null, SelectCategory_jsx("input", {
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
// CONCATENATED MODULE: ./components/graphics/tags/RemovableTag.js
var RemovableTag_jsx = external_react_default.a.createElement;


const RemovableTag = props => {
  let content = RemovableTag_jsx("div", {
    className: props.className
  }, RemovableTag_jsx("div", {
    className: "h-8 flex align-middle"
  }, RemovableTag_jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"
  }, RemovableTag_jsx("b", {
    className: "text-gray-900 text-sm text-center ml-2 mr-2"
  }, "\u203A")), RemovableTag_jsx("div", {
    className: "h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center"
  }, RemovableTag_jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap"
  }, RemovableTag_jsx("h4", {
    className: "font-sans font-medium text-xw-100 leading-tight mr-2"
  }, props.category.name)), RemovableTag_jsx("div", {
    className: "h-full w-auto content-center mx-auto flex flex-wrap"
  }, RemovableTag_jsx("button", {
    className: "h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",
    type: "button",
    onClick: props.onClick
  }, RemovableTag_jsx("b", {
    className: "font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1"
  }, "X"))))));

  return content;
};

/* harmony default export */ var tags_RemovableTag = (RemovableTag);
// CONCATENATED MODULE: ./components/graphics/tags/index.js

// CONCATENATED MODULE: ./components/widgets/category/AddCategory.js
var AddCategory_jsx = external_react_default.a.createElement;




const AddCategory = props => {
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
          return AddCategory_jsx(tags_RemovableTag, {
            className: "w-auto sm:w-full",
            key: category.id,
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
      ncl.push(AddCategory_jsx(category_SelectCategory, {
        lvl: props.categories[props.categories.length - 1].id,
        parent: props.categories[props.categories.length - 1],
        csrftoken: props.csrftoken,
        setCategory: setCategory
      }));
      setCategoriesList(ncl);
    } else {
      let select = AddCategory_jsx(category_SelectCategory, {
        lvl: 0,
        parent: null,
        csrftoken: props.csrftoken,
        setCategory: setCategory
      });

      let d = AddCategory_jsx("div", {
        className: "h-auto w-auto bg-gray-300"
      }, AddCategory_jsx(category_SelectCategory, {
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

  let content = AddCategory_jsx("div", {
    className: props.className
  }, AddCategory_jsx("div", {
    className: "w-full"
  }, AddCategory_jsx("label", {
    className: "block mb-1 font-sans font-medium"
  }, "Add Product Category"), AddCategory_jsx("div", {
    className: "h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3"
  }, AddCategory_jsx("div", {
    className: "flex"
  }, AddCategory_jsx("div", {
    className: "h-8"
  }), categoriesList))));

  return content;
};

/* harmony default export */ var category_AddCategory = (AddCategory);
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
  }, AddProduct_jsx(textFields["d" /* TxtField */], {
    label: "Product Name",
    onChange: event => getValue(event, 'name')
  }), AddProduct_jsx(textFields["c" /* TxtArea */], {
    label: "Product Description",
    onChange: event => getValue(event, 'description')
  }), AddProduct_jsx(textFields["d" /* TxtField */], {
    label: "Product Region",
    onChange: event => getValue(event, 'region')
  }), AddProduct_jsx(textFields["a" /* IntField */], {
    label: "Price",
    onChange: event => getValue(event, 'price')
  }), AddProduct_jsx(textFields["a" /* IntField */], {
    label: "Quantity",
    onChange: event => getValue(event, 'quantity')
  }), AddProduct_jsx(category_AddCategory, {
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
// CONCATENATED MODULE: ./services/api/post/postRequest.js

function postRequest(data, csrttoken, url) {
  return new Promise((resolve, reject) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrttoken
      }
    };
    external_axios_default.a.defaults.withCredentials = true;
    external_axios_default.a.post(url, data, axiosConfig).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
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
    text: []
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
    let coverId = await uploadImage(event, data.cover.data.image, props.cookies['csrftoken']).then(res => res.data);
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

    let newData = _objectSpread({}, data, {
      cover: coverId,
      text: external_querystring_default.a.stringify(textList)
    });

    postRequest(external_querystring_default.a.stringify(newData), props.cookies['csrftoken'], 'http://localhost:8000/articles/').then(res => {
      console.log(res);
    });
  };

  let content = AddArticle_jsx("div", {
    className: "m-4"
  }, AddArticle_jsx("form", {
    className: "w-full",
    action: ""
  }, AddArticle_jsx(textFields["d" /* TxtField */], {
    label: "Title",
    onChange: event => getValue(event, 'title')
  }), AddArticle_jsx(textFields["c" /* TxtArea */], {
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
  }))), AddArticle_jsx(buttons["a" /* BtnBbw */], {
    className: "w-full h-12 mt-8 mb-4",
    value: "ADD ARTICLE",
    onClick: handleSubmit
  })));

  return content;
};

/* harmony default export */ var article_AddArticle = (AddArticle);
// CONCATENATED MODULE: ./pages/maker/index.js
var maker_jsx = external_react_default.a.createElement;









const UserPage = props => {
  console.log(props.cookies);
  console.log(props.data);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: clikced,
    1: setClicked
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    console.log('useEffect runs');
    setIsLoading(true);
    external_axios_default.a.defaults.withCredentials = true;

    if (props.cookies.utoken != null) {
      external_axios_default.a.get("http://localhost:8000" + '/api/products/').then(res => {
        console.log(res.data);
        setData(JSON.stringify(res.data));
        setIsLoading(false);
      });
    } else {
      window.location = '/maker/auth';
    }
  }, []);

  let content = maker_jsx("p", null, "Loading characters...");

  if (!isLoading && data && data.length > 0) {
    console.log(data);
    const productsList = JSON.parse(data).map(function (product) {
      return maker_jsx(product_ProductGrid, {
        className: "h-auto w-auto m-2",
        key: product.id,
        data: product,
        owner: "ilyass"
      });
    });
    const sideBarData = [{
      id: 0,
      value: 'Products'
    }, {
      id: 1,
      value: 'Add Product'
    }, {
      id: 2,
      value: 'Add Article'
    }];

    let comp1 = maker_jsx(list_ProductGridList, {
      className: "p-2",
      data: productsList
    });

    let comp2 = maker_jsx(product_AddProduct, {
      cookies: props.cookies
    });

    let comp3 = maker_jsx(article_AddArticle, {
      cookies: props.cookies
    });

    const componentsList = [comp1, comp2, comp3];
    content = maker_jsx("div", {
      className: "w-full"
    }, maker_jsx(bar_Navbar, {
      cookies: props.cookies,
      className: "w-full"
    }), maker_jsx(bar_WelcomeBar, {
      className: "h-auto w-full pt-10"
    }), maker_jsx("div", {
      className: "w-full flex pt-10"
    }, maker_jsx("div", {
      className: "w-64 h-full"
    }, maker_jsx(SideBar, {
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

UserPage.getInitialProps = ({
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });