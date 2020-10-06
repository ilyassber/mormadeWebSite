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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s4mF");


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

/***/ "Qs3B":
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "s4mF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./lib/parseCookies.js
var parseCookies = __webpack_require__("tH+X");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/graphics/images/index.js + 5 modules
var graphics_images = __webpack_require__("iApb");

// EXTERNAL MODULE: ./components/graphics/textFields/index.js + 5 modules
var textFields = __webpack_require__("6P1G");

// EXTERNAL MODULE: ./components/widgets/category/DisplayCategories.js
var DisplayCategories = __webpack_require__("tTTj");

// CONCATENATED MODULE: ./components/elements/article/ArticleDisplayer.js
var __jsx = external_react_default.a.createElement;





const ArticleDisplayer = props => {
  let data = props.story;

  let content = __jsx("div", {
    className: props.className
  }, __jsx("div", {
    className: "h-auto w-full flex flex-col items-center bg-white"
  }, __jsx("div", {
    className: "relative md:w-3/4 lg:w-3/5 h-auto min-h-24 flex flex-col items-center mx-6 mb-6"
  }, data.cover != null ? __jsx(graphics_images["b" /* ImgFreeDisp */], {
    className: "w-full h-auto",
    src: data.cover.path
  }) : null, __jsx("div", {
    className: "h-auto w-auto max-w-screen flex flex-col items-center bg-white mt-6"
  }, __jsx("h1", {
    className: "font-roboto font-bold text-3xl text-center leading-snug mt-6 mx-6"
  }, data.title), __jsx("h3", {
    className: "font-roboto font-medium text-base text-center mx-6 mb-6 mt-4"
  }, data.description))), __jsx("div", {
    className: "h-auto md:w-3/4 lg:w-3/5 flex flex-col items-center mx-6"
  }, data.text.map((content, index) => {
    if (content.type == 'image') {
      return __jsx(graphics_images["b" /* ImgFreeDisp */], {
        key: index,
        className: "w-full h-auto mt-4 mb-8",
        src: content.image.path
      });
    } else if (content.type == 'text') {
      return __jsx(textFields["c" /* TextDisp */], {
        key: index,
        className: "w-full lg:w-3/4 h-auto mb-4",
        align: "left",
        text: content.text
      });
    }

    return null;
  })), __jsx("hr", {
    className: "w-full md:w-3/4 lg:w-3/5 bg-gray-900 m-2 mt-4"
  }), __jsx(DisplayCategories["a" /* default */], {
    className: "w-full md:w-3/4 lg:w-3/5 h-auto mb-4 m-2",
    tags: data.tags
  })));

  return content;
};

/* harmony default export */ var article_ArticleDisplayer = (ArticleDisplayer);
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__("8xkj");

// EXTERNAL MODULE: ./services/api/post/postRequest.js
var postRequest = __webpack_require__("2mnT");

// EXTERNAL MODULE: ./services/api/get/getRequest.js
var getRequest = __webpack_require__("Dk97");

// EXTERNAL MODULE: external "assert"
var external_assert_ = __webpack_require__("Qs3B");

// CONCATENATED MODULE: ./pages/stories/[story].js
var _story_jsx = external_react_default.a.createElement;









const Story = props => {
  let content = _story_jsx("div", {
    className: "w-full h-screen bg-xw-100"
  }, _story_jsx(article_ArticleDisplayer, {
    story: props.story
  }));

  return content;
};

async function getStaticPaths() {
  const stories = await Object(getRequest["a" /* getRequest */])("http://localhost:8000" + '/api/articles/').then(res => {
    return res;
  });
  const paths = stories.map(story => `/stories/${story.url}`);
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  console.log(context);
  let current = context.params.story;
  let id = current.split('-')[0];
  const story = await Object(getRequest["a" /* getRequest */])("http://localhost:8000" + '/api/articles/' + id).then(res => {
    console.log(res);
    return res;
  }).catch(err => {
    return null;
  });
  return {
    props: {
      story: story
    }
  };
}
/* harmony default export */ var _story_ = __webpack_exports__["default"] = (Story);

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });