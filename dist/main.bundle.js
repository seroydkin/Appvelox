!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(2),n(3),n(4);function r(){var t=this.src;this.src=t.substr(0,t.length-9)+".svg"}function i(){var t=this.src;this.src=t.substr(0,t.length-4)+"-grey.svg"}function o(){document.querySelectorAll(".js-social-icon").forEach(function(t){t.addEventListener("mouseover",r),t.addEventListener("mouseout",i)})}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(m(r.parts[s],e))}else{for(var a=[];s<r.parts.length;s++)a.push(m(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var i=s(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function v(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=v.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t,e);return c(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o],u=i[s.id];u&&(u.refs--,r.push(u))}t&&c(a(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(t,e,n){t.exports=n.p+"images/fb.svg"},function(t,e,n){t.exports=n.p+"images/vk.svg"},function(t,e,n){t.exports=n.p+"images/ig.svg"},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(1)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);n(5);function r(t,e,n,r){r.circles[t].classList.remove("js-slider__circle_active"),r.prevButton.classList.toggle("js-slider__button_disabled",0===e),r.nextButton.classList.toggle("js-slider__button_disabled",e===n),r.circles[e].classList.add("js-slider__circle_active"),r.leftCoordinate=r.leftCoordinate+100*(t-e),r.list.style.left="".concat(r.leftCoordinate,"%")}var i,o,s,a,c,u,l,d,f=n(0);i=document.querySelector(".js-situation"),o=i.querySelector(".situation__nav"),s=o.querySelector(".situation__wrap"),a=s.querySelectorAll(".situation__item"),c=i.querySelectorAll(".situation__content"),u=0,l=!1,d=0,o.addEventListener("click",function(t){var e=t.target;"LI"===e.tagName&&(a[u].classList.remove("situation__item_active"),c[u].classList.remove("situation__content_visible"),u=e.dataset.index,e.classList.add("situation__item_active"),c[u].classList.add("situation__content_visible"))}),s.addEventListener("mousedown",function(t){l=!0,d=t.clientX}),s.addEventListener("mousemove",function(t){if(l){var e=parseInt(s.style.left)+t.clientX-d;e=(e=e<-381?-380:e)>54?53:e,s.style.left="".concat(e,"px"),d=t.clientX}}),s.addEventListener("mouseup",function(){l=!1}),s.addEventListener("touchstart",function(t){l=!0,d=t.touches[0].clientX}),s.addEventListener("touchmove",function(t){if(l){var e=parseInt(s.style.left)+t.touches[0].clientX-d;e=(e=e<-381?-380:e)>54?53:e,s.style.left="".concat(e,"px"),d=t.touches[0].clientX}}),s.addEventListener("touchend",function(){l=!1}),document.querySelectorAll(".js-slider").forEach(function(t){var e={list:t.querySelector(".js-slider__list"),prevButton:t.querySelector(".js-slider__button_prev"),nextButton:t.querySelector(".js-slider__button_next"),circles:t.querySelectorAll(".js-slider__circle"),leftCoordinate:0},n=0,i=Number(e.list.dataset.pages)-1,o=0,s=!1;e.prevButton.addEventListener("click",function(){n>0&&r(n,--n,i,e)}),e.nextButton.addEventListener("click",function(){n<i&&r(n,++n,i,e)}),e.list.addEventListener("touchstart",function(t){o=t.touches[0].clientX,s=!0}),e.list.addEventListener("touchmove",function(t){if(s){var a=t.touches[0].clientX-o;a>100&&n>0?(r(n,--n,i,e),s=!1):a<-100&&n<i&&(r(n,++n,i,e),s=!1)}}),e.list.addEventListener("touchend",function(){s=!1})}),Object(f.a)()}]);