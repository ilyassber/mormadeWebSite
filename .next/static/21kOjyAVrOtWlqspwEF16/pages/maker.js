(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{vasz:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("vDqi"),c=a.n(l),s=a("tH+X"),r=o.a.createElement,i=function(e){return r("div",{className:e.className},r("div",{className:"container h-full w-auto content-center mx-auto flex flex-wrap"},r("h2",{className:"font-sans font-bold text-gray-900"},"MORMADE")))},u=o.a.createElement,d=function(e){return u("div",{className:e.className},u("div",{className:"rounded-full h-full w-full flex items-center justify-center"},u("img",{src:e.src})))},f=o.a.createElement,m=function(e){var t=Object(n.useRef)(null);return f("div",{className:e.className},f("div",{className:"relative m-1"},f("input",{className:"absolute invisible",ref:t,accept:"image/jpeg, image/jpg, image/png",multiple:!0,type:"file",onChange:function(t){e.onChange(Array.from(t.target.files))}}),f("div",{className:"container flex content-center flex-wrap text-center h-32 w-32 border border-1 border-gray-900 hover:bg-xw-200",role:"button",onClick:function(){t.current.click()}},f("span",{className:"text-center h-auto w-full"},"Upload Photo"))))},g=o.a.createElement,v=function(e){return g("div",{className:e.className},g("div",{className:"relative h-full w-full bg-yellow-300"},g("img",{className:"absolute w-full h-full object-cover",src:e.src}),g("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",role:"button",onClick:function(){return e.onRemove(e.index)}},g("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x"))))},p=o.a.createElement,h=function(e){return p("div",{className:e.className},p("div",{className:"h-full w-auto container content-center mx-auto flex flex-wrap"},p(d,{className:"w-5 h-5",src:"/profile.png"}),p("button",{className:"focus:outline-none",type:"button",onClick:e.onClick},p("p",{className:"font-sans font-medium text-sm text-gray-900 text-center ml-2"},e.username))))},b=o.a.createElement,x=function(e){var t=Object(n.useState)(!1),a=t[0],o=t[1],l=!1;return b("div",{className:e.className},b("div",{className:"fixed z-50 h-10 w-full flex bg-white"},b("div",{className:"flex flex-row"},b(i,{className:"h-full w-auto ml-6"})),b("div",{className:"w-full flex flex-row-reverse"},b(h,{className:"h-full w-auto mr-6",username:"ilyass",onClick:function(){l=!0,console.log(l),o(1!=a)}}))),b(y,{className:"z-50",cookies:e.cookies,drop:a,callBack:function(){l?l=!1:(console.log("cancel"),o(!1))}}))},w=a("oD+g");var N=o.a.createElement,y=function(e){var t,a,o=N("div",{className:""},N("div",{className:"hover:bg-xw-100 w-24 border border-gray-900 bg-white"},N("button",{className:"focus:outline-none font-sans font-medium text-gray-900 text-sm ml-2",type:"button",onClick:function(){Object(w.a)({},"logout",e.cookies.csrftoken)}},"logout"))),l=Object(n.useRef)(null);t=l,a=function(t){"keydown"!=t.type?e.callBack():27==t.keyCode&&e.callBack()},Object(n.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&setTimeout((function(){return a(e)}),200)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("keydown",e)}}),[t,a]);var c=N("div",{className:e.className},N("div",{className:"fixed z-50 top-0 right-0 mr-4 mt-10"})),s=N("div",{className:e.className},N("div",{ref:l,className:"fixed z-50 top-0 right-0 mr-4 mt-10"},o));return 1==e.drop?s:c},k=a("IOqG"),C=o.a.createElement,O=function(e){var t=Object(n.useState)(e.clicked),a=t[0],o=t[1],l=e.data.map((function(t){return t.id==a?C(k.a,{className:"w-full h-auto",key:t.id,value:t.value,clicked:"true",onClick:function(){o(t.id),e.onClick(t.id)}}):C(k.a,{className:"w-full h-auto",key:t.id,value:t.value,clicked:"false",onClick:function(){o(t.id),e.onClick(t.id)}})}));return C("div",{className:e.className},C("div",{className:"h-full w-full m-4"},l))},j=o.a.createElement,E=function(e){return j("div",{className:e.className},j("div",{class:"border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"},j("div",{class:"animate-pulse flex space-x-4"},j("div",{class:"rounded-full bg-gray-400 h-12 w-12"}),j("div",{class:"flex-1 space-y-4 py-1"},j("div",{class:"h-4 bg-gray-400 rounded w-3/4"}),j("div",{class:"space-y-2"},j("div",{class:"h-4 bg-gray-400 rounded"}),j("div",{class:"h-4 bg-gray-400 rounded w-5/6"}))))))},P=o.a.createElement,R=function(e){return P("article",{className:e.className},P("div",{className:"container h-auto w-full content-center"},P("div",{className:"relative w-full bg-yellow-300 pb-1/1"},P("img",{className:"absolute w-full h-full object-cover",src:e.data.images[0].path}),P("button",{className:"absolute top-0 right-0 h-10 w-10 m-2"},P("img",{src:"/heart-white.png"}))),P("div",{className:"h-auto w-full"},P("h3",{className:"leading-tight font-sans font-medium text-base text-gray-900 pt-2"},e.data.name),P("strong",{className:"leading-tight font-sans font-normal text-sm text-gray-800"},e.owner),P("p",{className:"leading-tight font-sans font-semibold text-lg text-gray-900"},"MAD "+e.data.price))))},S=o.a.createElement,D=function(e){return S("div",{className:e.className},S("div",{className:"w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1"},e.data))},L=a("o0o1"),T=a.n(L),A=a("6P1G"),U=a("EDLy"),_=o.a.createElement,I=function(e){var t=Object(n.useState)(null),a=t[0],o=t[1],l=function(t){e.removeImage(t),c()},c=function(){e.files.length>0?o(e.files.map((function(e,t){var a=(window.URL?URL:webkitURL).createObjectURL(e);return console.log(t),_(v,{className:"w-32 h-32 m-1",src:a,key:t,index:t,onRemove:l})}))):o(null)};return _("div",{className:e.className},_("div",{className:"w-full"},_("label",{className:"block mb-1 font-sans font-medium"},"Add Product Images"),_("div",{className:"h-auto w-full container flex content-start flex-wrap border py-2 px-3"},a,_(m,{onChange:function(t){t.length>0&&(e.addImage(t),c())}}))))};function J(e,t,a){return new Promise((function(e,n){var o=new FormData;o.append("name",t.name),o.append("image",t,t.name);c.a.post("https://www.mormade.com/api/images/",o,{headers:{"content-type":"multipart/form-data","X-CSRFToken":a}}).then((function(t){e(t)}))}))}var X=a("s4NR"),q=a.n(X);function z(e,t){return new Promise((function(a,n){var o={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t}};e.pics_list=q.a.stringify(e.pics_list),e.tags=q.a.stringify(e.tags);var l={data:q.a.stringify(e)};console.log(l),c.a.defaults.withCredentials=!0,c.a.post("http://localhost:8000/api/products/",q.a.stringify(l),o).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))}var F=o.a.createElement,B=function(e){o.a.useReducer((function(){return{}}))[1];var t=Object(n.useRef)(),a=Object(n.useState)(),l=a[0],s=a[1],r=null,i=null,u=function(){var t,a,n;s(null),(t=r,a=e.parent,n=e.csrftoken,new Promise((function(e,o){var l={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":n}},s={operation:"get",lvl:t,id:a};c.a.defaults.withCredentials=!0,c.a.post("https://www.mormade.com/api/categories/",q.a.stringify(s),l).then((function(t){e(t.data)})).catch((function(e){o(e)}))}))).then((function(e){s(JSON.stringify(e))}))};if(Object(n.useEffect)((function(){r=e.lvl,e.parent,u()}),[]),l&&JSON.parse(l).length>0){var d=JSON.parse(l).map((function(e){return F("option",{key:e.id,value:e.name})}));i=F("div",{className:e.className},F("div",{className:"h-8 flex"},F("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"},F("b",{className:"text-gray-900 text-sm text-center ml-2 mr-2"},"\u203a")),F("div",null,F("input",{className:"h-8 w-auto font-sans font-medium border text-gray-700 leading-tight hover:outline-none focus:outline-none p-1",ref:t,list:"data",onChange:function(){var a=t.current.value;JSON.parse(l).map((function(t){t.name==a&&(e.setCategory(t),r=t.lvl+1,u())}))}}),F("datalist",{id:"data"},d))))}return i},M=o.a.createElement,G=function(e){return M("div",{className:e.className},M("div",{className:"h-8 flex align-middle"},M("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap font-sans font-bold"},M("b",{className:"text-gray-900 text-sm text-center ml-2 mr-2"},"\u203a")),M("div",{className:"h-full w-auto pl-2 pr-2 bg-gray-900 rounded mx-auto flex content-center"},M("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},M("h4",{className:"font-sans font-medium text-xw-100 leading-tight mr-2"},e.category.name)),M("div",{className:"h-full w-auto content-center mx-auto flex flex-wrap"},M("button",{className:"h-4 w-4 bg-xw-100 rounded content-center mx-auto flex focus:outline-none",type:"button",onClick:e.onClick},M("b",{className:"font-sans font-bold text-gray-900 text-xs text-center ml-1 mr-1"},"X"))))))},H=o.a.createElement,Q=function(e){Object(n.useRef)(),o.a.useReducer((function(){return{}}))[1];var t=Object(n.useState)([]),a=t[0],l=t[1],c=Object(n.useState)(0),s=c[0],r=c[1],i=Object(n.useState)(null),u=(i[0],i[1]),d=0,f=null,m=function(t){e.addCategory(t),f=t.id,u(f);var a=t.lvl+1;r(a),d=a,g()},g=function t(){if(e.categories.length>0){var a=e.categories.map((function(a){if(a.lvl<d)return H(G,{className:"w-auto sm:w-full",key:a.id,category:a,onClick:function(){d=a.lvl,r(a.lvl),0==d?u(f=null):(f=e.categories[d-1].id,u(f)),console.log(s),e.removeCategory(a.lvl),console.log(s),t()}})}));a.push(H(B,{lvl:e.categories[e.categories.length-1].id,parent:e.categories[e.categories.length-1],csrftoken:e.csrftoken,setCategory:m})),l(a)}else{H(B,{lvl:0,parent:null,csrftoken:e.csrftoken,setCategory:m});var n=H("div",{className:"h-auto w-auto bg-gray-300"},H(B,{lvl:0,parent:null,csrftoken:e.csrftoken,setCategory:m}));l(n)}};return Object(n.useEffect)((function(){g()}),[]),H("div",{className:e.className},H("div",{className:"w-full"},H("label",{className:"block mb-1 font-sans font-medium"},"Add Product Category"),H("div",{className:"h-auto w-full container content-start content-center mx-auto flex flex-wrap py-2 px-3"},H("div",{className:"flex"},H("div",{className:"h-8"}),a))))},K=o.a.createElement,V=function(e){var t={pics_list:[],tags:[]},a=Object(n.useState)([]),o=a[0],l=(a[1],Object(n.useState)([])),c=l[0],s=(l[1],function(e,a){"name"==a?t.name=e.target.value:"description"==a?t.description=e.target.value:"price"==a?t.price=e.target.value:"quantity"==a&&(t.quantity=e.target.value)});return K("div",{className:"m-4"},K("form",{className:"",action:""},K(A.d,{label:"Product Name",onChange:function(e){return s(e,"name")}}),K(A.c,{label:"Product Description",onChange:function(e){return s(e,"description")}}),K(A.d,{label:"Product Region",onChange:function(e){return s(e,"region")}}),K(A.a,{label:"Price",onChange:function(e){return s(e,"price")}}),K(A.a,{label:"Quantity",onChange:function(e){return s(e,"quantity")}}),K(Q,{categories:c,addCategory:function(e){c.splice(e.lvl,0,e)},removeCategory:function(e){c.splice(e,c.length-e)},csrftoken:e.cookies.csrftoken}),K(I,{files:o,addImage:function(e){e.forEach((function(e){return o.push(e)}),void 0)},removeImage:function(e){o.splice(e,1)}}),K(U.a,{className:"w-full h-12 mt-8 mb-4",value:"ADD PRODUCT",onClick:function(a){var n,l,s;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:a.preventDefault(),n=0;case 2:if(!(n<o.length)){r.next=10;break}return r.next=5,T.a.awrap(J(0,o[0],e.cookies.csrftoken).then((function(e){return e})));case 5:l=r.sent,t.pics_list.push(l.data);case 7:n++,r.next=2;break;case 10:for(s=0;s<c.length;s++)t.tags.push(c[s].id);console.log(t),z(t,e.cookies.csrftoken).then((function(e){console.log(e)}));case 13:case"end":return r.stop()}}),null,null,null,Promise)}})))};function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Y=o.a.createElement,Z=function(e){return Y("div",{className:e.className},Y("div",{className:"flex flex-wrap"},Y(U.c,{className:"h-10 w-10 mr-2",src:"/icons/text.png",onClick:function(){e.appendContent({state:"edit",data:{type:"text",text:""}})}}),Y(U.c,{className:"h-10 w-10",src:"/icons/photo.png",onClick:function(){e.appendContent({state:"edit",data:{type:"image",image:null}})}})))},$=o.a.createElement,ee=function(e){var t=Object(n.useRef)(null),a=$("div",{className:"relative m-1"},$("input",{className:"absolute invisible",ref:t,accept:"image/jpeg, image/jpg, image/png",type:"file",onChange:function(t){var a={state:"valid",data:{type:"image",image:t.target.files[0]}};e.editContent(e.index,a)}}),$("div",{className:"container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",role:"button",onClick:function(){t.current.click()}},$("span",{className:"text-center h-auto w-auto m-1"},"Upload Photo"))),o=$("div",{className:"relative m-1"},$("div",{className:"container flex content-center flex-wrap text-center h-auto w-auto bg-white bg-opacity-50 border border-1 border-gray-900 hover:bg-opacity-75 m-1",role:"button",onClick:function(){e.editContent(e.index,{state:"edit",data:{type:"image",image:null}})}},$("span",{className:"text-center h-auto w-auto m-1"},"Remove Photo"))),l=$("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none m-1",role:"button",onClick:function(){return e.removeContent(e.index)}},$("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x"));return $("div",{className:e.className},$("div",{className:"relative w-full bg-gray-300 pb-1/2"},$("img",{className:"absolute w-full h-full object-cover",src:"valid"==e.data.state?(window.URL?URL:webkitURL).createObjectURL(e.data.data.image):null}),"true"==e.close?l:null,$("div",{className:"absolute bottom-0 left-0 m-2"},"valid"==e.data.state?o:a)))},te=o.a.createElement,ae=function(e){var t=Object(n.useRef)(null),a=e.data.data.text,o=te(U.b,{className:"h-8 w-auto",onClick:function(){var t={state:"valid",data:{type:"text",text:a}};e.editContent(e.index,t)},value:"Save Text"}),l=te(U.b,{className:"h-8 w-auto",onClick:function(){var t={state:"edit",data:{type:"text",text:e.data.data.text}};e.editContent(e.index,t)},value:"Edit Text"});return te("div",{className:e.className},te("div",{className:"relative h-auto w-full border"},te("div",{className:"m-2"},"valid"==e.data.state?te("div",{className:"m-2"},te("p",null,e.data.data.text)):te("textarea",{ref:t,rows:"4",cols:"50",className:"appearance-none border h-full w-full py-2 px-3 font-sans font-medium text-gray-700 leading-tight focus:outline-none focus:border-black",type:"text",onChange:function(e){a=e.target.value}},e.data.data.text),te("div",{className:"absolute top-0 right-0 container flex content-center flex-wrap text-center h-6 w-6 bg-opacity-50 bg-gray-700 rounded-full hover:bg-gray-900 focus:outline-none",role:"button",onClick:function(){return e.removeContent(e.index)}},te("span",{className:"text-center font-sans font-bold text-xw-100 h-auto w-full"},"x")),te("div",{className:"h-auto w-auto mt-2"},"valid"==e.data.state?l:o))))};function ne(e,t,a){return new Promise((function(n,o){var l={headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":t}};c.a.defaults.withCredentials=!0,c.a.post(a,e,l).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))}var oe=o.a.createElement;function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){W(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se=function(e){var t=Object(n.useState)({title:null,description:null,cover:{state:"edit",data:{type:"image",image:null}},text:[]}),a=t[0],o=t[1],l=function(e,t){"title"==t?o(ce({},a,{title:e.target.value})):"description"==t&&o(ce({},a,{description:e.target.value}))},c=function(e,t){var n=a.text;n[e]=t,o(ce({},a,{text:n}))},s=function(e){var t=a.text;t.splice(e,1),o(ce({},a,{text:t}))};return oe("div",{className:"m-4"},oe("form",{className:"w-full",action:""},oe(A.d,{label:"Title",onChange:function(e){return l(e,"title")}}),oe(A.c,{label:"Description",onChange:function(e){return l(e,"description")}}),oe("div",{className:"pb-2"},oe("label",{className:"block mb-1 font-sans font-medium"},"Add Cover"),oe(ee,{index:-1,className:"",data:a.cover,close:"false",editContent:function(e,t){o(ce({},a,{cover:t}))},removeContent:function(){}})),oe("div",null,oe("label",{className:"block mb-1 font-sans font-medium"},"Add Article Content"),oe("div",{className:"h-auto w-full border"},a.text.map((function(e,t){return"image"==e.data.type?oe(ee,{index:t,className:"m-2",data:e,close:"true",editContent:c,removeContent:s}):oe(ae,{index:t,className:"m-2",data:e,editContent:c,removeContent:s})})),oe(Z,{className:"m-2",appendContent:function(e){var t=a.text;t.push(e),o(ce({},a,{text:t}))}}))),oe(U.a,{className:"w-full h-12 mt-8 mb-4",value:"ADD ARTICLE",onClick:function(t){var n,o,l,c,s;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.next=3,T.a.awrap(J(0,a.cover.data.image,e.cookies.csrftoken).then((function(e){return e.data})));case 3:n=r.sent,o=[],l=0;case 6:if(!(l<a.text.length)){r.next=18;break}if("image"!=a.text[l].data.type){r.next=14;break}return r.next=10,T.a.awrap(J(0,a.text[l].data.image,e.cookies.csrftoken).then((function(e){return e})));case 10:c=r.sent,o.push(q.a.stringify({type:"image",image:c.data})),r.next=15;break;case 14:o.push(q.a.stringify({type:"text",text:a.text[l].data.text}));case 15:l++,r.next=6;break;case 18:s=ce({},a,{cover:n,text:q.a.stringify(o)}),ne(q.a.stringify(s),e.cookies.csrftoken,"http://localhost:8000/articles/").then((function(e){console.log(e)}));case 20:case"end":return r.stop()}}),null,null,null,Promise)}})))},re=o.a.createElement,ie=function(e){console.log(e.cookies),console.log(e.data);var t=Object(n.useState)(),a=t[0],o=t[1],l=Object(n.useState)(!1),s=l[0],r=l[1],i=Object(n.useState)(0),u=i[0],d=i[1];Object(n.useEffect)((function(){console.log("useEffect runs"),r(!0),c.a.defaults.withCredentials=!0,null!=e.cookies.utoken?c.a.get("http://localhost:8000/api/products/").then((function(e){console.log(e.data),o(JSON.stringify(e.data)),r(!1)})):window.location="/maker/auth"}),[]);var f=re("p",null,"Loading characters...");if(!s&&a&&a.length>0){console.log(a);var m=JSON.parse(a).map((function(e){return re(R,{className:"h-auto w-auto m-2",key:e.id,data:e,owner:"ilyass"})})),g=[re(D,{className:"p-2",data:m}),re(V,{cookies:e.cookies}),re(se,{cookies:e.cookies})];f=re("div",{className:"w-full"},re(x,{cookies:e.cookies,className:"w-full"}),re(E,{className:"h-auto w-full pt-10"}),re("div",{className:"w-full flex pt-10"},re("div",{className:"w-64 h-full"},re(O,{className:"w-full h-full",clicked:u,data:[{id:0,value:"Products"},{id:1,value:"Add Product"},{id:2,value:"Add Article"}],onClick:function(e){return d(e)}})),re("div",{className:"w-full h-full"},g[u])))}else s||a&&0!==a.length||(f=re("p",null,"Could not fetch any data."));return f};ie.getInitialProps=function(e){var t=e.req;return{cookies:Object(s.a)(t),data:t.data}};t.default=ie},"yCN/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maker",function(){return a("vasz")}])}},[["yCN/",0,1,2,4]]]);