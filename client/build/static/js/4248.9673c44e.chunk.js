/*! For license information please see 4248.9673c44e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4248],{4248:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(4165),o=r(5861),i=r(885),a=r(2791),c=r(4569),u=r.n(c),s="styles_container__cl6vy",l="styles_form_container__GkZzG",h="styles_input__Aug9l",f="styles_green_btn__DAUj4",p="styles_error_msg__c40e2",d="styles_success_msg__FpFei",y=r(3458),v=r(184),m=function(){var t=(0,a.useState)(""),e=(0,i.Z)(t,2),r=e[0],c=e[1],m=(0,a.useState)(""),g=(0,i.Z)(m,2),w=g[0],b=g[1],x=(0,a.useState)(""),_=(0,i.Z)(x,2),L=_[0],E=_[1],N=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,u().post(y.Bu,{email:r});case 4:o=t.sent,i=o.data,b(i.message),E(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&t.t0.response.status>=400&&t.t0.response.status<=500&&(E(t.t0.response.data.message),b(""));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,v.jsx)("div",{className:s,children:(0,v.jsxs)("form",{className:l,onSubmit:N,children:[(0,v.jsx)("h1",{children:"Forgot Password"}),(0,v.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:function(t){return c(t.target.value)},value:r,required:!0,className:h}),L&&(0,v.jsx)("div",{className:p,children:L}),w&&(0,v.jsx)("div",{className:d,children:w}),(0,v.jsx)("button",{type:"submit",className:f,children:"Submit"})]})})}},3458:function(t,e,r){r.d(e,{AZ:function(){return _},B9:function(){return v},Bp:function(){return G},Bu:function(){return E},DV:function(){return d},Jq:function(){return h},MN:function(){return k},NW:function(){return S},Np:function(){return O},Ny:function(){return b},S9:function(){return p},T0:function(){return m},Uk:function(){return j},VG:function(){return c},X6:function(){return i},XH:function(){return n},Xf:function(){return a},_A:function(){return u},bP:function(){return g},bw:function(){return Z},gK:function(){return N},ib:function(){return s},nb:function(){return L},ok:function(){return y},p:function(){return o},qF:function(){return w},rB:function(){return x},u9:function(){return f},xt:function(){return l}});var n="http://localhost:5000/api/getData",o="http://localhost:5000/api/createData",i="http://localhost:5000/api/deleteData",a="http://localhost:5000/api/updateData",c="http://localhost:5000/api/createCourse",u="http://localhost:5000/api/deleteCourse",s="   http://localhost:5000/api/getCourse",l="http://localhost:5000/api/updateCourse",h="   http://localhost:5000/api/getJobs",f="http://localhost:5000/api/createJobs",p="http://localhost:5000/api/deleteJobs",d="   http://localhost:5000/api/getFavJobs",y="  http://localhost:5000/api/postNewsTicker",v="  http://localhost:5000/api/postTestimonial",m="   http://localhost:5000/api/getTestimonial",g="http://localhost:5000/api/deleteTestimonial",w="   http://localhost:5000/api/getNewsTicker",b="http://localhost:5000/api/setRole",x="http://localhost:5000/api/getAllusers",_=" http://localhost:5000/api/deleteUser",L="http://localhost:5000/api/users",E="http://localhost:5000/api/password-reset",N="http://localhost:5000/api/openAi",j="http://localhost:5000/api/analyzeResume",k="http://localhost:5000/api/getComments",S="http://localhost:5000/api/postComment",O="http://localhost:5000",Z="http://localhost:5000/api/googlelogin",G="http://localhost:5000/api/auth"},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function p(){}function d(){}function y(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,a)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=y,s(w,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}},1002:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=4248.9673c44e.chunk.js.map