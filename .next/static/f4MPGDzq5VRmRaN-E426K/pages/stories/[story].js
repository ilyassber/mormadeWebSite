(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2mnT":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("vDqi"),o=n.n(r);function a(e,t,n){return new Promise((function(r,a){var i={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t}};o.a.defaults.withCredentials=!0,o.a.post(n,e,i).then((function(e){r(e.data)})).catch((function(e){a(e)}))}))}},"6P1G":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=function(e){var t=Object(r.useRef)(),n="left",o="gray-900",i="gray-300",c="",u=12,l="border border-";return null!=e.align&&(n=e.align),null!=e.color&&(o=e.color),null!=e.height&&(u=e.height),1==e.error&&(i="red-600",o="red-600"),1==e.reset&&(o="white",i="gray-300",t.current.value=""),null!=e.placeholder&&(c=e.placeholder),1==e.shadow&&(l="shadow",i=""),a("div",{className:e.className},null!=e.label?a("label",{className:"w-full block mb-1 font-sans font-medium text-"+o+" text-"+n},e.label):null,a("input",{ref:t,placeholder:c,className:"appearance-none "+l+i+" w-full h-"+u+" py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"text",onChange:e.onChange}))},c=o.a.createElement,u=function(e){var t="border";return 1==e.shadow&&(t="shadow"),c("div",{className:e.className},c("label",{className:"block mb-1 font-sans font-medium"},e.label),c("input",{className:"appearance-none "+t+" w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"password",onChange:e.onChange}))},l=o.a.createElement,s=function(e){var t="border";return 1==e.shadow&&(t="shadow"),l("div",{className:e.className},l("label",{className:"block mb-1 font-sans font-medium"},e.label),l("textarea",{rows:"4",cols:"50",className:"appearance-none "+t+" w-full h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"text",onChange:e.onChange}))},f=o.a.createElement,p=function(e){var t="border";return 1==e.shadow&&(t="shadow"),f("div",{className:e.className},f("label",{className:"block mb-1 font-sans font-medium"},e.label),f("input",{min:"0",className:"appearance-none "+t+" w-32 h-12 py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"number",onChange:e.onChange}))},m=o.a.createElement,d=function(e){var t="left";return null!=e.align&&(t=e.align),m("div",{className:e.className},m("span",{className:"font-sans text-base text-gray-900 align-"+t},e.text))}},"7tlc":function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,i=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),u=r[n];n<a;u=r[++n])g(u)||!x(u)?i+=" "+u:i+=" "+c(u);return i},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var a,i={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),s(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"\x1b["+c.colors[n][0]+"m"+e+"\x1b["+c.colors[n][1]+"m":e}function l(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return h(o)||(o=s(e,o,r)),o}var a=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(g(t))return e.stylize("null","null")}(e,n);if(a)return a;var i=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),N(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(n);if(0===i.length){if(E(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(w(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(v(n))return e.stylize(Date.prototype.toString.call(n),"date");if(N(n))return f(n)}var l,x="",j=!1,O=["{","}"];(m(n)&&(j=!0,O=["[","]"]),E(n))&&(x=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(x=" "+RegExp.prototype.toString.call(n)),v(n)&&(x=" "+Date.prototype.toUTCString.call(n)),N(n)&&(x=" "+f(n)),0!==i.length||j&&0!=n.length?r<0?w(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=j?function(e,t,n,r,o){for(var a=[],i=0,c=t.length;i<c;++i)P(t,String(i))?a.push(p(e,t,n,r,String(i),!0)):a.push("");return o.forEach((function(o){o.match(/^\d+$/)||a.push(p(e,t,n,r,o,!0))})),a}(e,n,r,c,i):i.map((function(t){return p(e,n,r,c,t,j)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,x,O)):O[0]+x+O[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,a){var i,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),P(r,o)||(i="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=g(n)?s(e,u.value,null):s(e,u.value,n-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),b(i)){if(a&&o.match(/^\d+$/))return c;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+c}function m(e){return Array.isArray(e)}function d(e){return"boolean"===typeof e}function g(e){return null===e}function y(e){return"number"===typeof e}function h(e){return"string"===typeof e}function b(e){return void 0===e}function w(e){return x(e)&&"[object RegExp]"===j(e)}function x(e){return"object"===typeof e&&null!==e}function v(e){return x(e)&&"[object Date]"===j(e)}function N(e){return x(e)&&("[object Error]"===j(e)||e instanceof Error)}function E(e){return"function"===typeof e}function j(e){return Object.prototype.toString.call(e)}function O(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(b(a)&&(a=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!i[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var r=e.pid;i[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else i[n]=function(){};return i[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=m,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=h,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=b,t.isRegExp=w,t.isObject=x,t.isDate=v,t.isError=N,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=n("j/1Z");var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[O(e.getHours()),O(e.getMinutes()),O(e.getSeconds())].join(":");return[e.getDate(),S[e.getMonth()],t].join(" ")}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",k(),t.format.apply(t,arguments))},t.inherits=n("FfBw"),t._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var T="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function q(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(T&&e[T]){var t;if("function"!==typeof(t=e[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],a=0;a<arguments.length;a++)o.push(arguments[a]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(i){n(i)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=T,t.callbackify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var a=this,i=function(){return o.apply(a,arguments)};t.apply(this,n).then((function(t){e.nextTick(i,null,t)}),(function(t){e.nextTick(q,t,i)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},"9lTW":function(e,t,n){"use strict";(function(t){function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,a=Math.min(n,r);o<a;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"===typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=n("7tlc"),i=Object.prototype.hasOwnProperty,c=Array.prototype.slice,u="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function s(e){return!o(e)&&("function"===typeof t.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=h,p=/\s*function\s+([^\(\s]*)\s*/;function m(e){if(a.isFunction(e)){if(u)return e.name;var t=e.toString().match(p);return t&&t[1]}}function d(e,t){return"string"===typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(u||!a.isFunction(e))return a.inspect(e);var t=m(e);return"[Function"+(t?": "+t:"")+"]"}function y(e,t,n,r,o){throw new f.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function h(e,t){e||y(e,!0,t,"==",f.ok)}function b(e,t,n,i){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime();if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===typeof e||null!==t&&"object"===typeof t){if(s(e)&&s(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var u=(i=i||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===i.expected.indexOf(t)||(i.actual.push(e),i.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(a.isPrimitive(e)||a.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=w(e),i=w(t);if(o&&!i||!o&&i)return!1;if(o)return e=c.call(e),t=c.call(t),b(e,t,n);var u,l,s=N(e),f=N(t);if(s.length!==f.length)return!1;for(s.sort(),f.sort(),l=s.length-1;l>=0;l--)if(s[l]!==f[l])return!1;for(l=s.length-1;l>=0;l--)if(u=s[l],!b(e[u],t[u],n,r))return!1;return!0}(e,t,n,i))}return n?e===t:e==t}function w(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function x(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function v(e,t,n,r){var o;if("function"!==typeof t)throw new TypeError('"block" argument must be a function');"string"===typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(n){t=n}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&y(o,n,"Missing expected exception"+r);var i="string"===typeof r,c=!e&&o&&!n;if((!e&&a.isError(o)&&i&&x(o,n)||c)&&y(o,n,"Got unwanted exception"+r),e&&o&&n&&!x(o,n)||!e&&o)throw o}f.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=d(g((t=this).actual),128)+" "+t.operator+" "+d(g(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,a=m(n),i=o.indexOf("\n"+a);if(i>=0){var c=o.indexOf("\n",i+1);o=o.substring(c+1)}this.stack=o}}},a.inherits(f.AssertionError,Error),f.fail=y,f.ok=h,f.equal=function(e,t,n){e!=t&&y(e,t,n,"==",f.equal)},f.notEqual=function(e,t,n){e==t&&y(e,t,n,"!=",f.notEqual)},f.deepEqual=function(e,t,n){b(e,t,!1)||y(e,t,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,n){b(e,t,!0)||y(e,t,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,n){b(e,t,!1)&&y(e,t,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(t,n,r){b(t,n,!0)&&y(t,n,r,"notDeepStrictEqual",e)},f.strictEqual=function(e,t,n){e!==t&&y(e,t,n,"===",f.strictEqual)},f.notStrictEqual=function(e,t,n){e===t&&y(e,t,n,"!==",f.notStrictEqual)},f.throws=function(e,t,n){v(!0,e,t,n)},f.doesNotThrow=function(e,t,n){v(!1,e,t,n)},f.ifError=function(e){if(e)throw e};var N=Object.keys||function(e){var t=[];for(var n in e)i.call(e,n)&&t.push(n);return t}}).call(this,n("yLpj"))},FfBw:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},PsLj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stories/[story]",function(){return n("s4mF")}])},iApb:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=function(e){return a("div",{className:e.className},a("div",{className:"rounded-full h-full w-full flex items-center justify-center"},a("img",{src:e.src})))},c=o.a.createElement,u=function(e){var t=Object(r.useRef)(null);return c("div",{className:e.className},c("div",{className:"relative m-1"},c("input",{className:"absolute invisible",ref:t,accept:"image/jpeg, image/jpg, image/png",multiple:!0,type:"file",onChange:function(n){console.log(n),e.onChange(Array.from(n.target.files)),t.current.value=null}}),c("div",{className:"container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200",role:"button",onClick:function(){t.current.click()}},c("span",{className:"text-center h-auto w-full"},"Upload Photo"))))},l=o.a.createElement,s=function(e){return l("div",{className:e.className},l("div",{className:"relative h-full w-full bg-yellow-300"},l("img",{className:"absolute w-full h-full object-cover",src:e.src}),l("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",role:"button",onClick:function(){return e.onRemove(e.index)}},l("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x"))))},f=o.a.createElement,p=function(e){return f("div",{className:e.className},f("div",{className:"w-full h-auto"},f("img",{src:e.src})))};o.a.createElement},"j/1Z":function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},m2H8:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=function(e){return a("div",{className:e.className},a("div",{className:"h-8 flex align-middle"},a("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"},a("b",{className:"text-gray-900 text-sm text-center ml-2 mr-2"},e.separator)),a("div",{className:"h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center"},a("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},a("h4",{className:"font-sans font-medium text-xw-100 leading-tight mr-2"},e.category.name)),a("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},a("button",{className:"h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",type:"button",onClick:e.onClick},a("b",{className:"font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1"},"X"))))))},c=o.a.createElement,u=function(e){return"white"==e.type?c("div",{className:e.className},c("div",{className:"container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-white"},c("span",{className:"h-auto font-sans font-light text-xs align-middle text-gray-900 m-1"},e.tag.name))):c("div",{className:e.className},c("div",{className:"container rounded h-full w-auto flex flex-row content-center mx-auto leading-none inline-block whitespace-no-wrap bg-gray-900"},c("span",{className:"h-auto font-sans font-light text-xs align-middle text-white m-1"},e.tag.name)))}},s4mF:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=(n("tH+X"),n("nOHt"),n("iApb")),i=n("6P1G"),c=n("tTTj"),u=o.a.createElement,l=function(e){var t=e.story;return u("div",{className:e.className},u("div",{className:"h-auto w-full flex flex-col items-center bg-white"},u("div",{className:"relative md:w-3/4 lg:w-3/5 h-auto min-h-24 flex flex-col items-center mx-6 mb-6"},null!=t.cover?u(a.b,{className:"w-full h-auto",src:t.cover.path}):null,u("div",{className:"h-auto w-auto max-w-screen flex flex-col items-center bg-white mt-6"},u("h1",{className:"font-roboto font-bold text-3xl text-center leading-snug mt-6 mx-6"},t.title),u("h3",{className:"font-roboto font-medium text-base text-center mx-6 mb-6 mt-4"},t.description))),u("div",{className:"h-auto md:w-3/4 lg:w-3/5 flex flex-col items-center mx-6"},t.text.map((function(e,t){return"image"==e.type?u(a.b,{key:t,className:"w-full h-auto mt-4 mb-8",src:e.image.path}):"text"==e.type?u(i.c,{key:t,className:"w-full lg:w-3/4 h-auto mb-4",align:"left",text:e.text}):null}))),u("hr",{className:"w-full md:w-3/4 lg:w-3/5 bg-gray-900 m-2 mt-4"}),u(c.a,{className:"w-full md:w-3/4 lg:w-3/5 h-auto mb-4 m-2",tags:t.tags})))},s=(n("s4NR"),n("2mnT"),n("9lTW"),o.a.createElement),f=!0;t.default=function(e){return s("div",{className:"w-full h-screen bg-xw-100"},s(l,{story:e.story}))}},tTTj:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("wQog"),n("m2H8")),i=o.a.createElement;t.a=function(e){return console.log(e.tags),i("div",{className:e.className},i("div",{className:"h-auto w-full flex flex-wrap items-left"},e.tags.map((function(e,t){return i(a.a,{className:"mr-1",key:t,tag:e})}))))}},wQog:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("vDqi"),o=n.n(r),a=n("s4NR"),i=n.n(a);function c(e,t,n,r){return new Promise((function(a,c){var u={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":r}},l={id:e,operation:"get",lvl:t,parent:n};o.a.defaults.withCredentials=!0,o.a.post("http://localhost:8000/api/categories/",i.a.stringify(l),u).then((function(e){a(e.data)})).catch((function(e){c(e)}))}))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["PsLj",0,1,2,3]]]);