(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{vasz:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("vDqi"),c=a.n(l),s=a("tH+X"),r=o.a.createElement,i=function(e){return r("div",{className:e.className},r("div",{className:"container h-full w-auto content-center mx-auto flex flex-wrap"},r("h2",{className:"font-sans font-bold text-gray-900"},"MORMADE")))},u=o.a.createElement,f=function(e){return u("div",{className:e.className},u("div",{className:"rounded-full h-full w-full flex items-center justify-center"},u("img",{src:e.src})))},m=o.a.createElement,d=function(e){var t=Object(n.useRef)(null);return m("div",{className:e.className},m("div",{className:"relative m-1"},m("input",{className:"absolute invisible",ref:t,accept:"image/jpeg, image/jpg, image/png",multiple:!0,type:"file",onChange:function(t){e.onChange(Array.from(t.target.files))}}),m("div",{className:"container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200",role:"button",onClick:function(){t.current.click()}},m("span",{className:"text-center h-auto w-full"},"Upload Photo"))))},g=o.a.createElement,v=function(e){return g("div",{className:e.className},g("div",{className:"relative h-full w-full bg-yellow-300"},g("img",{className:"absolute w-full h-full object-cover",src:e.src}),g("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",role:"button",onClick:function(){return e.onRemove(e.index)}},g("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x"))))},p=o.a.createElement,h=function(e){return p("div",{className:e.className},p("div",{className:"h-full w-auto container content-center mx-auto flex flex-wrap"},p(f,{className:"w-5 h-5",src:"/profile.png"}),p("button",{className:"focus:outline-none",type:"button",onClick:e.onClick},p("p",{className:"font-sans font-medium text-sm text-gray-900 text-center ml-2"},e.username))))},b=o.a.createElement,x=function(e){var t=Object(n.useState)(!1),a=t[0],o=t[1],l=!1;return b("div",{className:e.className},b("div",{className:"fixed z-50 h-10 w-full flex bg-white"},b("div",{className:"flex flex-row"},b(i,{className:"h-full w-auto ml-6"})),b("div",{className:"w-full flex flex-row-reverse"},b(h,{className:"h-full w-auto mr-6",username:"ilyass",onClick:function(){l=!0,console.log(l),o(1!=a)}}))),b(y,{className:"z-50",cookies:e.cookies,drop:a,callBack:function(){l?l=!1:(console.log("cancel"),o(!1))}}))},N=a("oD+g");var w=o.a.createElement,y=function(e){var t,a,o=w("div",{className:""},w("div",{className:"hover:bg-xw-100 w-24 border border-gray-900 bg-white"},w("button",{className:"focus:outline-none font-sans font-medium text-gray-900 text-sm ml-2",type:"button",onClick:function(){Object(N.a)({},"logout",e.cookies.csrftoken)}},"logout"))),l=Object(n.useRef)(null);t=l,a=function(t){"keydown"!=t.type?e.callBack():27==t.keyCode&&e.callBack()},Object(n.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&setTimeout((function(){return a(e)}),200)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",e)}}),[t,a]);var c=w("div",{className:e.className},w("div",{className:"fixed z-50 top-0 right-0 mr-4 mt-10"})),s=w("div",{className:e.className},w("div",{ref:l,className:"fixed z-50 top-0 right-0 mr-4 mt-10"},o));return 1==e.drop?s:c},k=a("IOqG"),C=o.a.createElement,O=function(e){var t=Object(n.useState)(e.clicked),a=t[0],o=t[1],l=e.data.map((function(t){return t.id==a?C(k.a,{className:"w-full h-auto",key:t.id,value:t.value,clicked:"true",onClick:function(){o(t.id),e.onClick(t.id)}}):C(k.a,{className:"w-full h-auto",key:t.id,value:t.value,clicked:"false",onClick:function(){o(t.id),e.onClick(t.id)}})}));return C("div",{className:e.className},C("div",{className:"h-full w-full m-4"},l))},j=o.a.createElement,E=function(e){return j("article",{className:e.className},j("div",{className:"container h-auto w-full content-center"},j("div",{className:"relative w-full bg-yellow-300 pb-1/1"},j("img",{className:"absolute w-full h-full object-cover",src:e.data.images[0].path}),j("button",{className:"absolute top-0 right-0 h-10 w-10 m-2"},j("img",{src:"/heart-white.png"}))),j("div",{className:"h-auto w-full"},j("h3",{className:"leading-tight font-sans font-medium text-base text-gray-900 pt-2"},e.data.name),j("strong",{className:"leading-tight font-sans font-normal text-sm text-gray-800"},e.owner),j("p",{className:"leading-tight font-sans font-semibold text-lg text-gray-900"},"MAD "+e.data.price))))},P=o.a.createElement,R=function(e){return P("div",{className:e.className},P("div",{className:"w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1"},e.data))},S=a("o0o1"),D=a.n(S),L=a("6P1G"),T=a("EDLy"),A=o.a.createElement,U=function(e){var t=Object(n.useState)(null),a=t[0],o=t[1],l=function(t){e.removeImage(t),c()},c=function(){e.files.length>0?o(e.files.map((function(e,t){var a=(window.URL?URL:webkitURL).createObjectURL(e);return console.log(t),A(v,{className:"w-32 h-32 m-1",src:a,key:t,index:t,onRemove:l})}))):o(null)};return A("div",{className:e.className},A("div",{className:"w-full"},A("label",{className:"block mb-1 font-sans font-medium"},"Add Product Images"),A("div",{className:"h-auto w-full container flex content-start flex-wrap border py-2 px-3"},a,A(d,{onChange:function(t){t.length>0&&(e.addImage(t),c())}}))))};function _(e,t,a){return new Promise((function(e,n){var o=new FormData;o.append("name",t.name),o.append("image",t,t.name);c.a.post("http://localhost:8000/images/",o,{headers:{"content-type":"multipart/form-data","X-CSRFToken":a}}).then((function(t){e(t)}))}))}var I=a("s4NR"),J=a.n(I);function X(e,t){return new Promise((function(a,n){var o={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t}};e.pics_list=J.a.stringify(e.pics_list),e.tags=J.a.stringify(e.tags);var l={data:J.a.stringify(e)};console.log(l),c.a.defaults.withCredentials=!0,c.a.post("http://localhost:8000/products/",J.a.stringify(l),o).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))}var q=o.a.createElement,z=function(e){o.a.useReducer((function(){return{}}))[1];var t=Object(n.useRef)(),a=Object(n.useState)(),l=a[0],s=a[1],r=null,i=null,u=function(){var t,a,n;s(null),(t=r,a=e.parent,n=e.csrftoken,new Promise((function(e,o){var l={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":n}},s={operation:"get",lvl:t,id:a};c.a.defaults.withCredentials=!0,c.a.post("http://localhost:8000/categories/",J.a.stringify(s),l).then((function(t){e(t.data)})).catch((function(e){o(e)}))}))).then((function(e){s(JSON.stringify(e))}))};if(Object(n.useEffect)((function(){r=e.lvl,e.parent,u()}),[]),l&&JSON.parse(l).length>0){var f=JSON.parse(l).map((function(e){return q("option",{key:e.id,value:e.name})}));i=q("div",{className:e.className},q("div",{className:"h-8 flex"},q("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"},q("b",{className:"text-gray-900 text-sm text-center ml-2 mr-2"},"\u203a")),q("div",null,q("input",{className:"h-8 w-auto font-sans font-medium border text-gray-700 leading-tight hover:outline-none focus:outline-none p-1",ref:t,list:"data",onChange:function(){var a=t.current.value;JSON.parse(l).map((function(t){t.name==a&&(e.setCategory(t),r=t.lvl+1,u())}))}}),q("datalist",{id:"data"},f))))}return i},F=o.a.createElement,B=function(e){return F("div",{className:e.className},F("div",{className:"h-8 flex align-middle"},F("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"},F("b",{className:"text-gray-900 text-sm text-center ml-2 mr-2"},"\u203a")),F("div",{className:"h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center"},F("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},F("h4",{className:"font-sans font-medium text-xw-100 leading-tight mr-2"},e.category.name)),F("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},F("button",{className:"h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",type:"button",onClick:e.onClick},F("b",{className:"font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1"},"X"))))))},M=o.a.createElement,G=function(e){Object(n.useRef)(),o.a.useReducer((function(){return{}}))[1];var t=Object(n.useState)([]),a=t[0],l=t[1],c=Object(n.useState)(0),s=c[0],r=c[1],i=Object(n.useState)(null),u=(i[0],i[1]),f=0,m=null,d=function(t){e.addCategory(t),m=t.id,u(m);var a=t.lvl+1;r(a),f=a,g()},g=function t(){if(e.categories.length>0){var a=e.categories.map((function(a){if(a.lvl<f)return M(B,{className:"w-auto sm:w-full",key:a.id,category:a,onClick:function(){f=a.lvl,r(a.lvl),0==f?u(m=null):(m=e.categories[f-1].id,u(m)),console.log(s),e.removeCategory(a.lvl),console.log(s),t()}})}));a.push(M(z,{lvl:e.categories[e.categories.length-1].id,parent:e.categories[e.categories.length-1],csrftoken:e.csrftoken,setCategory:d})),l(a)}else{M(z,{lvl:0,parent:null,csrftoken:e.csrftoken,setCategory:d});var n=M("div",{className:"h-auto w-auto bg-gray-300"},M(z,{lvl:0,parent:null,csrftoken:e.csrftoken,setCategory:d}));l(n)}};return Object(n.useEffect)((function(){g()}),[]),M("div",{className:e.className},M("div",{className:"w-full"},M("label",{className:"block mb-1 font-sans font-medium"},"Add Product Category"),M("div",{className:"h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3"},M("div",{className:"flex"},M("div",{className:"h-8"}),a))))},H=o.a.createElement,Q=function(e){var t={pics_list:[],tags:[]},a=Object(n.useState)([]),o=a[0],l=(a[1],Object(n.useState)([])),c=l[0],s=(l[1],function(e,a){"name"==a?t.name=e.target.value:"description"==a?t.description=e.target.value:"price"==a?t.price=e.target.value:"quantity"==a&&(t.quantity=e.target.value)});return H("div",{className:"m-4"},H("form",{className:"",action:""},H(L.d,{label:"Product Name",onChange:function(e){return s(e,"name")}}),H(L.c,{label:"Product Description",onChange:function(e){return s(e,"description")}}),H(L.d,{label:"Product Region",onChange:function(e){return s(e,"region")}}),H(L.a,{label:"Price",onChange:function(e){return s(e,"price")}}),H(L.a,{label:"Quantity",onChange:function(e){return s(e,"quantity")}}),H(G,{categories:c,addCategory:function(e){c.splice(e.lvl,0,e)},removeCategory:function(e){c.splice(e,c.length-e)},csrftoken:e.cookies.csrftoken}),H(U,{files:o,addImage:function(e){e.forEach((function(e){return o.push(e)}),void 0)},removeImage:function(e){o.splice(e,1)}}),H(T.a,{className:"w-full h-12 mt-8 mb-4",value:"ADD PRODUCT",onClick:function(a){var n,l,s;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:a.preventDefault(),n=0;case 2:if(!(n<o.length)){r.next=10;break}return r.next=5,D.a.awrap(_(0,o[0],e.cookies.csrftoken).then((function(e){return e})));case 5:l=r.sent,t.pics_list.push(l.data);case 7:n++,r.next=2;break;case 10:for(s=0;s<c.length;s++)t.tags.push(c[s].id);console.log(t),X(t,e.cookies.csrftoken).then((function(e){console.log(e)}));case 13:case"end":return r.stop()}}),null,null,null,Promise)}})))};function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var V=o.a.createElement,W=function(e){return V("div",{className:e.className},V("div",{className:"flex flex-wrap"},V(T.c,{className:"h-10 w-10 mr-2",src:"/icons/text.png",onClick:function(){e.appendContent({state:"edit",data:{type:"text",text:""}})}}),V(T.c,{className:"h-10 w-10",src:"/icons/photo.png",onClick:function(){e.appendContent({state:"edit",data:{type:"image",image:null}})}})))},Y=o.a.createElement,Z=function(e){var t=Object(n.useRef)(null),a=Y("div",{className:"relative m-1"},Y("input",{className:"absolute invisible",ref:t,accept:"image/jpeg, image/jpg, image/png",type:"file",onChange:function(t){var a={state:"valid",data:{type:"image",image:t.target.files[0]}};e.editContent(e.index,a)}}),Y("div",{className:"container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",role:"button",onClick:function(){t.current.click()}},Y("span",{className:"text-center h-auto w-auto m-1"},"Upload Photo"))),o=Y("div",{className:"relative m-1"},Y("div",{className:"container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",role:"button",onClick:function(){e.editContent(e.index,{state:"edit",data:{type:"image",image:null}})}},Y("span",{className:"text-center h-auto w-auto m-1"},"Remove Photo"))),l=Y("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",role:"button",onClick:function(){return e.removeContent(e.index)}},Y("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x"));return Y("div",{className:e.className},Y("div",{className:"relative w-full bg-gray-300 pb-1/2"},Y("img",{className:"absolute w-full h-full object-cover",src:"valid"==e.data.state?(window.URL?URL:webkitURL).createObjectURL(e.data.data.image):null}),"true"==e.close?l:null,Y("div",{className:"absolute bottom-0 left-0 m-2"},"valid"==e.data.state?o:a)))},$=o.a.createElement,ee=function(e){var t=Object(n.useRef)(null),a=e.data.data.text,o=$(T.b,{className:"h-8 w-auto",onClick:function(){var t={state:"valid",data:{type:"text",text:a}};e.editContent(e.index,t)},value:"Save Text"}),l=$(T.b,{className:"h-8 w-auto",onClick:function(){var t={state:"edit",data:{type:"text",text:e.data.data.text}};e.editContent(e.index,t)},value:"Edit Text"});return $("div",{className:e.className},$("div",{className:"relative h-auto w-full border"},$("div",{className:"m-2"},"valid"==e.data.state?$("div",{className:"m-2"},$("p",null,e.data.data.text)):$("textarea",{ref:t,rows:"4",cols:"50",className:"appearance-none border h-full w-full py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"text",onChange:function(e){a=e.target.value}},e.data.data.text),$("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none",role:"button",onClick:function(){return e.removeContent(e.index)}},$("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x")),$("div",{className:"h-auto w-auto mt-2"},"valid"==e.data.state?l:o))))};function te(e,t,a){return new Promise((function(n,o){var l={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t}};c.a.defaults.withCredentials=!0,c.a.post(a,e,l).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))}var ae=o.a.createElement;function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){K(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=function(e){var t=Object(n.useState)({title:null,description:null,cover:{state:"edit",data:{type:"image",image:null}},text:[]}),a=t[0],o=t[1],l=function(e,t){"title"==t?o(oe({},a,{title:e.target.value})):"description"==t&&o(oe({},a,{description:e.target.value}))},c=function(e,t){var n=a.text;n[e]=t,o(oe({},a,{text:n}))},s=function(e){var t=a.text;t.splice(e,1),o(oe({},a,{text:t}))};return ae("div",{className:"m-4"},ae("form",{className:"w-full",action:""},ae(L.d,{label:"Title",onChange:function(e){return l(e,"title")}}),ae(L.c,{label:"Description",onChange:function(e){return l(e,"description")}}),ae("div",{className:"pb-2"},ae("label",{className:"block mb-1 font-sans font-medium"},"Add Cover"),ae(Z,{index:-1,className:"",data:a.cover,close:"false",editContent:function(e,t){o(oe({},a,{cover:t}))},removeContent:function(){}})),ae("div",null,ae("label",{className:"block mb-1 font-sans font-medium"},"Add Article Content"),ae("div",{className:"h-auto w-full border"},a.text.map((function(e,t){return"image"==e.data.type?ae(Z,{index:t,className:"m-2",data:e,close:"true",editContent:c,removeContent:s}):ae(ee,{index:t,className:"m-2",data:e,editContent:c,removeContent:s})})),ae(W,{className:"m-2",appendContent:function(e){var t=a.text;t.push(e),o(oe({},a,{text:t}))}}))),ae(T.a,{className:"w-full h-12 mt-8 mb-4",value:"ADD ARTICLE",onClick:function(t){var n,o,l,c,s;return D.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.next=3,D.a.awrap(_(0,a.cover.data.image,e.cookies.csrftoken).then((function(e){return e.data})));case 3:n=r.sent,o=[],l=0;case 6:if(!(l<a.text.length)){r.next=18;break}if("image"!=a.text[l].data.type){r.next=14;break}return r.next=10,D.a.awrap(_(0,a.text[l].data.image,e.cookies.csrftoken).then((function(e){return e})));case 10:c=r.sent,o.push(J.a.stringify({type:"image",image:c.data})),r.next=15;break;case 14:o.push(J.a.stringify({type:"text",text:a.text[l].data.text}));case 15:l++,r.next=6;break;case 18:s=oe({},a,{cover:n,text:J.a.stringify(o)}),te(J.a.stringify(s),e.cookies.csrftoken,"http://localhost:8000/articles/").then((function(e){console.log(e)}));case 20:case"end":return r.stop()}}),null,null,null,Promise)}})))},ce=o.a.createElement,se=function(e){console.log(e.cookies),console.log(e.data);var t=Object(n.useState)(),a=t[0],o=t[1],l=Object(n.useState)(!1),s=l[0],r=l[1],i=Object(n.useState)(0),u=i[0],f=i[1];Object(n.useEffect)((function(){console.log("useEffect runs"),r(!0),c.a.defaults.withCredentials=!0,null!=e.cookies.utoken?c.a.get("http://localhost:8000/products/").then((function(e){console.log(e.data),o(JSON.stringify(e.data)),r(!1)})):window.location="/maker/auth"}),[]);var m=ce("p",null,"Loading characters...");if(!s&&a&&a.length>0){console.log(a);var d=JSON.parse(a).map((function(e){return ce(E,{className:"h-auto w-auto m-2",key:e.id,data:e,owner:"ilyass"})})),g=[ce(R,{className:"p-2",data:d}),ce(Q,{cookies:e.cookies}),ce(le,{cookies:e.cookies})];m=ce("div",{className:"w-full"},ce(x,{cookies:e.cookies,className:"w-full"}),ce("div",{className:"w-full flex pt-10"},ce("div",{className:"w-64 h-full"},ce(O,{className:"w-full h-full",clicked:u,data:[{id:0,value:"Products"},{id:1,value:"Add Product"},{id:2,value:"Add Article"}],onClick:function(e){return f(e)}})),ce("div",{className:"w-full h-full"},g[u])))}else s||a&&0!==a.length||(m=ce("p",null,"Could not fetch any data."));return m};se.getInitialProps=function(e){var t=e.req;return{cookies:Object(s.a)(t),data:t.data}};t.default=se},"yCN/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maker",function(){return a("vasz")}])}},[["yCN/",0,1,2,3]]]);