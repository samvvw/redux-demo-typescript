"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[898],{890:(r,t,n)=>{n.d(t,{md:()=>h,UY:()=>a,qC:()=>y,MT:()=>p});var e=n(683);function o(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var f="function"===typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(r){if("object"!==typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function p(r,t,n){var e;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(o(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(o(1));return n(p)(r,t)}if("function"!==typeof r)throw new Error(o(2));var i=r,a=t,y=[],h=y,d=!1;function w(){h===y&&(h=y.slice())}function l(){if(d)throw new Error(o(3));return a}function s(r){if("function"!==typeof r)throw new Error(o(4));if(d)throw new Error(o(5));var t=!0;return w(),h.push(r),function(){if(t){if(d)throw new Error(o(6));t=!1,w();var n=h.indexOf(r);h.splice(n,1),y=null}}}function v(r){if(!c(r))throw new Error(o(7));if("undefined"===typeof r.type)throw new Error(o(8));if(d)throw new Error(o(9));try{d=!0,a=i(a,r)}finally{d=!1}for(var t=y=h,n=0;n<t.length;n++){(0,t[n])()}return r}function E(r){if("function"!==typeof r)throw new Error(o(10));i=r,v({type:u.REPLACE})}function b(){var r,t=s;return(r={subscribe:function(r){if("object"!==typeof r||null===r)throw new Error(o(11));function n(){r.next&&r.next(l())}return n(),{unsubscribe:t(n)}}})[f]=function(){return this},r}return v({type:u.INIT}),(e={dispatch:v,subscribe:s,getState:l,replaceReducer:E})[f]=b,e}function a(r){for(var t=Object.keys(r),n={},e=0;e<t.length;e++){var f=t[e];0,"function"===typeof r[f]&&(n[f]=r[f])}var i,c=Object.keys(n);try{!function(r){Object.keys(r).forEach((function(t){var n=r[t];if("undefined"===typeof n(void 0,{type:u.INIT}))throw new Error(o(12));if("undefined"===typeof n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(n)}catch(p){i=p}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var e=!1,f={},u=0;u<c.length;u++){var p=c[u],a=n[p],y=r[p],h=a(y,t);if("undefined"===typeof h){t&&t.type;throw new Error(o(14))}f[p]=h,e=e||h!==y}return(e=e||c.length!==Object.keys(r).length)?f:r}}function y(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function h(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(r){return function(){var n=r.apply(void 0,arguments),f=function(){throw new Error(o(15))},i={getState:n.getState,dispatch:function(){return f.apply(void 0,arguments)}},u=t.map((function(r){return r(i)}));return f=y.apply(void 0,u)(n.dispatch),(0,e.Z)((0,e.Z)({},n),{},{dispatch:f})}}}}}]);