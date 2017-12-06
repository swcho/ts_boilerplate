!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="//swcho.github.io/ts_playground/dist/client/assets/",e(e.s=1065)}({1065:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),n(1066),n(1067),console.log(t),n(1068);var r=document.querySelector(".js-canvas"),i=r.getContext("2d"),o=document.querySelector(".js-duplicate"),s=o.getContext("2d"),a=.95*Math.min(window.innerWidth,window.innerHeight),c=a,u=a,l=c>>1,h=u>>1,f=Math.PI,d=f/180,p=90*d,v=!0,g=.5,b=45*d,m=0,y=0;r.width=o.width=c,r.height=o.height=u;var w=function(){function t(t,e,n,r,i,o){void 0===t&&(t={x:0,y:0}),void 0===e&&(e=100),void 0===n&&(n=.5),void 0===r&&(r=0),void 0===i&&(i=0),void 0===o&&(o=45*d),this.position=t,this.length=e,this.divergeAt=n,this.angle=r,this.depth=i,this.color="#000",this.spread=o,this.branches=[],this.grow()}return t.prototype.grow=function(){if(this.canBranch){this.branches=[];var e=.75*this.length,n=this.depth+1;this.branches.push(new t(this.growPosition,e,this.divergeAt,this.angle+this.spread,n,this.spread),new t(this.growPosition,e,this.divergeAt,this.angle-this.spread,n,this.spread))}},t.prototype.update=function(t,e){this.spread=t,this.divergeAt=e,this.grow()},Object.defineProperty(t.prototype,"growPosition",{get:function(){var t=this.length*this.divergeAt;return{x:this.position.x+Math.cos(this.angle)*t,y:this.position.y+Math.sin(this.angle)*t}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canBranch",{get:function(){return this.depth<5},enumerable:!0,configurable:!0}),t}(),x=new w({x:l,y:h},.5*h,g,-90*d,0,b),j=function(t,e){var n=~~(200+160*e),r=50+~~(t.depth/6*50),o=t.length;i.save(),i.strokeStyle="hsl("+n+", 100%, "+r+"%)",i.translate(t.position.x,t.position.y),i.rotate(t.angle),i.beginPath(),i.moveTo(0,0),i.lineTo(o,0),i.stroke(),i.closePath(),i.beginPath(),i.fillStyle="hsl("+n+", 100%, 50%)",i.arc(o,0,2,0,2*f,!1),i.fill(),i.closePath(),i.restore(),t.branches.forEach(function(t){j(t,e)})},U=function(t,e,n,r,i){return(t-e)/(n-e)*(i-r)+r},O=function(){i.clearRect(0,0,i.canvas.width,i.canvas.height),s.clearRect(0,0,s.canvas.width,s.canvas.height)},L=function(){var t=x.spread/p;O(),v&&(t=U(Math.sin(y),-1,1,0,1),b=t*p,g=U(Math.sin(y),-1,1,0,.5),y+=.004),x.update(b,g),j(x,t);for(var e=2*f/12,n=m,i=0;i<12;i++)s.save(),s.translate(l,h),s.rotate(n),s.drawImage(r,-c/2,-u/2),s.restore(),n+=e;m+=.002,requestAnimationFrame(L)},A=function(t){if(!v){var e=t.touches&&t.touches.length?t.touches[0]:t,n=e.clientX,r=e.clientY,i=window.innerWidth,o=window.innerHeight;b=n/i*p,g=r/o}};document.body.addEventListener("mousemove",A),document.body.addEventListener("touchmove",A),document.addEventListener("mouseenter",function(){v=!1}),document.addEventListener("mouseleave",function(){v=!0}),L()}).call(e,"canvas/tree_mirror/app.ts")},1066:function(t,e,n){"use strict";var r={level:"prd"};t.exports=r},1067:function(t,e){t.exports='<html>\n\n<head>\n    <title>Canvas: </title>\n</head>\n\n<body>\n    <canvas class="canvas canvas-pattern js-canvas" width="500" height="500"></canvas>\n    <canvas class="canvas js-duplicate" width="500" height="500"></canvas>\n</body>\n\n</html>'},1068:function(t,e,n){var r=n(1069);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(5)(r,i);r.locals&&(t.exports=r.locals)},1069:function(t,e,n){e=t.exports=n(4)(),e.push([t.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\nbody {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.canvas {\n  display: block;\n  border-radius: 50%; }\n\n.canvas-pattern {\n  display: none; }\n",""])},4:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},5:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],e))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(l(r.parts[o],e));p[r.id]={id:r.id,refs:1,parts:s}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a=o[1],c=o[2],u=o[3],l={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function o(t,e){var n=g(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),o(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),o(t,e),e}function u(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var u=m++;n=b||(b=a(e)),r=h.bind(null,n,u,!1),i=h.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n,e),i=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=f.bind(null,n),i=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function h(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function f(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=w(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),b=null,m=0,y=[],w=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=p[a.id];c.refs--,o.push(c)}if(t){r(i(t,e),e)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}});