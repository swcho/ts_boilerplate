!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="//swcho.github.io/ts_playground/dist/client/assets/",n(n.s=1047)}({1047:function(t,n,e){"use strict";(function(t){function o(){for(var t=0;t<=s.x/h+p;t++)for(var n=0;n<=s.y/h+p;n++)g[t][n]=noise.simplex2((m+t)/l,1.25*m)}function r(t){d.fillStyle="rgb("+(c[0]+t)+","+(c[1]+t)+","+(c[2]+t)+")",d.fillRect(0,80*u,1*u,-80*u)}function i(){var t=(new Date).getTime();m=(t-y)/1e4,d.clearRect(0,0,s.x*u,s.y*u),d.fillRect(M.x,M.y,2,2),o();for(var n=0;n<=w.length;n++)w[n]&&w[n].draw(M);a(i)}Object.defineProperty(n,"__esModule",{value:!0}),e(1048),e(1049),console.log(t),console.log("hi");var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),s={x:$("body").width(),y:$("body").height()},c=[157,208,136],u=1,h=20,l=50,p=4,f=$("<canvas/>").attr({width:s.x*u,height:s.y*u}).appendTo("body"),d=f.get(0).getContext("2d"),y=(new Date).getTime(),m=0,g=[];!function(){for(var t=0;t<=s.x/h+p;t++){g.push([]);for(var n=0;n<=s.y/h+p;n++)g[t].push([])}}();for(var w=[],x=function(){function t(t,n,e){this.position=t,this.drawShape=n,this.shade=e,this.id=w.length,w.push(this)}return t.prototype.draw=function(t){var n=this.position,e=n.x,o=n.y,r=g[Math.floor(e/h)][Math.floor(o/h)];r||(r=0),d.save(),d.translate((this.position.x-20)*u,(this.position.y-20)*u);var i=Math.pow(e-t.x,2)+Math.pow(o-t.y,2),a=i>1e4?0:1e4-i/1e4;d.rotate(r*(Math.PI/2+a/1e4));var s=Math.floor(40*(1+r))+this.shade;this.drawShape(s),d.restore()},t}(),v=0;v<s.x/10+p;v++)for(var b=0;b<s.y/10+p;b++)new x({x:10*v+Math.floor(10*Math.random()),y:10*b+Math.floor(10*Math.random())},r,Math.floor(30*Math.random()));var M={x:0,y:0};window.onmousemove=function(t){var n=t.clientX,e=t.clientY;M={x:n,y:e}},i()}).call(n,"canvas/fur/app.ts")},1048:function(t,n,e){"use strict";var o={level:"prd"};t.exports=o},1049:function(t,n){t.exports='<html>\n    <head>\n        <title>Main App</title>\n        <script\n        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"\n        integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="\n        crossorigin="anonymous"><\/script>\n        \x3c!-- <script\n        src="https://raw.githubusercontent.com/josephg/noisejs/master/perlin.js"\n        ><\/script> --\x3e\n        <script\n        src="https://codepen.io/darrylhuffman/pen/zogYQW.js"\n        ><\/script>\n        <style>\n            body {\n                margin: 0;\n                padding: 0;\n            }\n        </style>\n    </head>\n    <body>\n    </body>\n</html>'}});