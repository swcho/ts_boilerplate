!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="//swcho.github.io/ts_playground/dist/client/assets/",n(n.s=1283)}({1283:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),e(1284),e(1285),console.log(t),e(1286),$(".gallery-link").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(t){return t.el.find("figcaption").text()||t.el.attr("title")}},zoom:{enabled:!0},gallery:{enabled:!0,navigateByImgClick:!1,tCounter:""},disableOn:function(){return!($(window).width()<640)}})}).call(n,"css/layout_magnific_gallery/app.ts")},1284:function(t,n,e){"use strict";var i={level:"prd"};t.exports=i},1285:function(t,n){t.exports="<html>\n    <head>\n        <title>magnific galler</title>\n         \x3c!-- https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js --\x3e\n         <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"><\/script>\n         <script src=\"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js\"><\/script>\n    </head>\n    <body>\n        <article class='gallery'>\n            <a class='gallery-link' href='https://unsplash.it/1600/1400?image=1081'>\n                <figure class='gallery-image'>\n                    <img height='1400' src='https://unsplash.it/1600/1400?image=1081' width='1600'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1600/1000?image=1014'>\n                <figure class='gallery-image'>\n                    <img height='1000' src='https://unsplash.it/1600/1000?image=1014' width='1600'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1200/1400?image=267'>\n                <figure class='gallery-image'>\n                    <img height='1400' src='https://unsplash.it/1200/1400?image=267' width='1200'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1000/1400?image=266'>\n                <figure class='gallery-image'>\n                    <img height='1400' src='https://unsplash.it/1000/1400?image=266' width='1000'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1200/1000?image=634'>\n                <figure class='gallery-image'>\n                    <img height='1000' src='https://unsplash.it/1200/1000?image=634' width='1200'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1600/1400?image=923'>\n                <figure class='gallery-image'>\n                    <img height='1400' src='https://unsplash.it/1600/1400?image=923' width='1600'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1400/1200?image=682'>\n                <figure class='gallery-image'>\n                    <img height='1200' src='https://unsplash.it/1400/1200?image=682' width='1400'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1000/1200?image=173'>\n                <figure class='gallery-image'>\n                    <img height='1200' src='https://unsplash.it/1000/1200?image=173' width='1000'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n            <a class='gallery-link' href='https://unsplash.it/1200/1200?image=943'>\n                <figure class='gallery-image'>\n                    <img height='1200' src='https://unsplash.it/1200/1200?image=943' width='1200'>\n                    <figcaption>Photo caption</figcaption>\n                </figure>\n            </a>\n        </article>\n        <footer id='footer' role='contentinfo'>\n            <div class='container'>\n                <a class='logo' href='https://codepen.io/collection/XRoxGR' rel='home'>Calibration theme</a>\n                <a class='copy' href='https://mobilemarkup.com'>&copy; mobileMarkup.com</a>\n            </div>\n        </footer>\n    </body>\n</html>"},1286:function(t,n,e){var i=e(1287);"string"==typeof i&&(i=[[t.i,i,""]]);var o={};o.transform=void 0;e(5)(i,o);i.locals&&(t.exports=i.locals)},1287:function(t,n,e){n=t.exports=e(4)(),n.push([t.i,"html:not(.touch) .gallery-image figcaption, .touch .gallery-image figcaption, .mfp-with-zoom .mfp-title {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0);\n  padding: 1em;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n  font-weight: 600;\n  max-width: calc(100% - 9em);\n  line-height: 1.25;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  html:not(.touch) .gallery-image figcaption:before, .touch .gallery-image figcaption:before, .mfp-with-zoom .mfp-title:before, html:not(.touch) .gallery-image figcaption:after, .touch .gallery-image figcaption:after, .mfp-with-zoom .mfp-title:after {\n    content: '';\n    position: absolute;\n    background: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    padding: 1em;\n    -webkit-transition: all .3s ease-in-out;\n    transition: all .3s ease-in-out;\n    opacity: 0;\n    z-index: -1; }\n  html:not(.touch) .gallery-image figcaption:before, .touch .gallery-image figcaption:before, .mfp-with-zoom .mfp-title:before, html:not(.touch) .gallery-image figcaption:after, .touch .gallery-image figcaption:after, .mfp-with-zoom .mfp-title:after {\n    right: 100%;\n    bottom: 100%; }\n  html:not(.touch) .gallery-image figcaption:after, .touch .gallery-image figcaption:after, .mfp-with-zoom .mfp-title:after {\n    left: 100%;\n    top: 100%; }\n  html:not(.touch) .gallery-image figcaption.visible, html:not(.touch) .gallery-image:hover figcaption, .touch .gallery-image figcaption, .mfp-with-zoom .visible.mfp-title, .mfp-with-zoom.mfp-ready .mfp-title {\n    color: white;\n    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n    -webkit-transition: all .2s ease .3s;\n    transition: all .2s ease .3s; }\n    html:not(.touch) .gallery-image figcaption.visible:before, html:not(.touch) .gallery-image:hover figcaption:before, .touch .gallery-image figcaption:before, .mfp-with-zoom .visible.mfp-title:before, .mfp-with-zoom.mfp-ready .mfp-title:before, html:not(.touch) .gallery-image figcaption.visible:after, html:not(.touch) .gallery-image:hover figcaption:after, .touch .gallery-image figcaption:after, .mfp-with-zoom .visible.mfp-title:after, .mfp-with-zoom.mfp-ready .mfp-title:after {\n      opacity: 1; }\n    html:not(.touch) .gallery-image figcaption.visible:before, html:not(.touch) .gallery-image:hover figcaption:before, .touch .gallery-image figcaption:before, .mfp-with-zoom .visible.mfp-title:before, .mfp-with-zoom.mfp-ready .mfp-title:before {\n      right: -1.5em;\n      bottom: -1.5em; }\n    html:not(.touch) .gallery-image figcaption.visible:after, html:not(.touch) .gallery-image:hover figcaption:after, .touch .gallery-image figcaption:after, .mfp-with-zoom .visible.mfp-title:after, .mfp-with-zoom.mfp-ready .mfp-title:after {\n      left: -1.5em;\n      top: -1.5em; }\n\nhtml {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizelegibility; }\n\nbody {\n  font-family: 'Montserrat', sans-serif; }\n\n.gallery {\n  -webkit-column-gap: 0;\n          column-gap: 0; }\n  @media (min-width: 480px) {\n    .gallery {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 1260px) {\n    .gallery {\n      -webkit-column-count: 3;\n              column-count: 3; } }\n\n.gallery-image {\n  position: relative;\n  margin: 0;\n  padding: 0; }\n  .gallery-image:before, .gallery-image:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border: 16px solid rgba(0, 0, 0, 0.1);\n    -webkit-transition: all .2s;\n    transition: all .2s;\n    will-change: border; }\n  .gallery-image:after {\n    border-width: 0; }\n  .gallery-image img {\n    display: block;\n    max-width: 100%;\n    height: auto; }\n  html:not(.touch) .gallery-image {\n    overflow: hidden; }\n    html:not(.touch) .gallery-image:hover:before {\n      border-width: 16px; }\n    html:not(.touch) .gallery-image:hover:after {\n      border-width: 32px; }\n  .touch .gallery-image figcaption {\n    top: auto;\n    bottom: 2em; }\n\n.mfp-with-zoom .mfp-container, .mfp-with-zoom.mfp-bg {\n  opacity: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n\n.mfp-with-zoom.mfp-bg {\n  background-color: rgba(0, 0, 0, 0.9); }\n\n.mfp-with-zoom.mfp-ready .mfp-container {\n  opacity: 1; }\n\n.mfp-with-zoom.mfp-ready.mfp-bg {\n  opacity: 1; }\n\n.mfp-with-zoom.mfp-removing .mfp-container, .mfp-with-zoom.mfp-removing.mfp-bg {\n  opacity: 0; }\n\n.mfp-with-zoom img.mfp-img {\n  padding: 0; }\n\n.mfp-with-zoom .mfp-figure:after {\n  top: 0;\n  bottom: 0; }\n\n.mfp-with-zoom .mfp-container {\n  padding: 0; }\n\n.mfp-with-zoom .mfp-content {\n  overflow: hidden; }\n\n.mfp-with-zoom .mfp-bottom-bar {\n  top: auto;\n  bottom: 0;\n  margin-top: 0; }\n\n.mfp-with-zoom .mfp-title {\n  top: auto;\n  bottom: 2em; }\n\n.mfp-arrow {\n  opacity: 1;\n  margin-top: 0 !important;\n  width: 20%;\n  height: 30%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .mfp-arrow:before, .mfp-arrow:after {\n    margin: 0;\n    border: none;\n    width: 2rem;\n    height: 2rem;\n    -webkit-transform: rotate(-45deg) translate(-50%, -100%);\n            transform: rotate(-45deg) translate(-50%, -100%);\n    opacity: 1;\n    top: 50%;\n    left: 50%;\n    -webkit-transition: all .15s;\n    transition: all .15s; }\n  .mfp-arrow:active {\n    -webkit-transform: translateY(-50%) scale(0.95);\n            transform: translateY(-50%) scale(0.95); }\n\n.mfp-arrow-left {\n  left: 0; }\n  .mfp-arrow-left:before, .mfp-arrow-left:after {\n    border-top: 2px solid white;\n    border-left: 2px solid white; }\n  .mfp-arrow-left:after {\n    margin-left: 2rem; }\n  .mfp-arrow-left:hover:before, .mfp-arrow-left:active:before {\n    margin-left: 2rem; }\n  .mfp-arrow-left:hover:after, .mfp-arrow-left:active:after {\n    margin-left: 0; }\n\n.mfp-arrow-right {\n  right: 0; }\n  .mfp-arrow-right:before, .mfp-arrow-right:after {\n    border-right: 2px solid white;\n    border-bottom: 2px solid white; }\n  .mfp-arrow-right:after {\n    margin-left: 2rem; }\n  .mfp-arrow-right:hover:before {\n    margin-left: 2rem; }\n  .mfp-arrow-right:hover:after {\n    margin-left: 0; }\n\nbutton.mfp-close {\n  opacity: 1;\n  margin-top: 0 !important;\n  width: 20%;\n  height: 30%;\n  font: 0/0 serif;\n  text-shadow: none;\n  color: transparent; }\n  button.mfp-close:before, button.mfp-close:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: 0;\n    border: none;\n    width: 2rem;\n    height: 2rem;\n    opacity: 1;\n    -webkit-transition: all .15s;\n    transition: all .15s;\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n    border-top: 2px solid white;\n    border-left: 2px solid white; }\n  button.mfp-close:before {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  button.mfp-close:after {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  button.mfp-close:hover:before {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  button.mfp-close:hover:after {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg); }\n  button.mfp-close:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\n[id=footer] {\n  margin-top: 10vh;\n  padding: 10vh 0;\n  text-align: center; }\n  [id=footer] .container {\n    position: relative; }\n    [id=footer] .container:before, [id=footer] .container:after {\n      content: '';\n      position: absolute;\n      bottom: 100%;\n      left: 20px;\n      z-index: 10;\n      border-top: 2px solid;\n      width: 10%;\n      margin-bottom: 10vh; }\n    [id=footer] .container:after {\n      left: auto;\n      right: 20px; }\n  [id=footer] * {\n    display: block; }\n    [id=footer] * + * {\n      margin-top: 5vh; }\n  [id=footer] .logo {\n    font-weight: 600;\n    font-size: 1.5em; }\n  [id=footer] .copy {\n    text-transform: uppercase;\n    font-size: .75em;\n    font-weight: 600; }\n",""])},4:function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},5:function(t,n,e){function i(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=h[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(p(i.parts[r],n))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(p(i.parts[r],n));h[i.id]={id:i.id,refs:1,parts:a}}}}function o(t,n){for(var e=[],i={},o=0;o<t.length;o++){var r=t[o],a=n.base?r[0]+n.base:r[0],l=r[1],f=r[2],s=r[3],p={css:l,media:f,sourceMap:s};i[a]?i[a].parts.push(p):e.push(i[a]={id:a,parts:[p]})}return e}function r(t,n){var e=d(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),w.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=w.indexOf(t);n>=0&&w.splice(n,1)}function l(t){var n=document.createElement("style");return t.attrs.type="text/css",s(n,t.attrs),r(t,n),n}function f(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",s(n,t.attrs),r(t,n),n}function s(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function p(t,n){var e,i,o,r;if(n.transform&&t.css){if(!(r=n.transform(t.css)))return function(){};t.css=r}if(n.singleton){var s=y++;e=b||(b=l(n)),i=m.bind(null,e,s,!1),o=m.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(n),i=g.bind(null,e,n),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=l(n),i=c.bind(null,e),o=function(){a(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}function m(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function c(t,n){var e=n.css,i=n.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function g(t,n,e){var i=e.css,o=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=v(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var h={},u=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),d=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),b=null,y=0,w=[],v=e(6);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=u()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=o(t,n);return i(e,n),function(t){for(var r=[],a=0;a<e.length;a++){var l=e[a],f=h[l.id];f.refs--,r.push(f)}if(t){i(o(t,n),n)}for(var a=0;a<r.length;a++){var f=r[a];if(0===f.refs){for(var s=0;s<f.parts.length;s++)f.parts[s]();delete h[f.id]}}}};var x=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},6:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}});