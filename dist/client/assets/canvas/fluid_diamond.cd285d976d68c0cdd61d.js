!function(t){function i(h){if(s[h])return s[h].exports;var e=s[h]={i:h,l:!1,exports:{}};return t[h].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var s={};i.m=t,i.c=s,i.d=function(t,s,h){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:h})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="//swcho.github.io/ts_playground/dist/client/assets/",i(i.s=1039)}({1039:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),s(1040),s(1041),console.log(t),console.log("Device Pixel Ratio",window.devicePixelRatio);var h=Math.PI/180,e=1e-4,n=.995,o=.15,a=function(){function t(){this.handleMousedown=this.handleMousedown.bind(this),this.handleMouseup=this.handleMouseup.bind(this),this.handleMouse=this.handleMouse.bind(this),this.render=this.render.bind(this),this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas),this.dpr=1,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.dpr,this.dpr),this.setCanvasSize=this.setCanvasSize.bind(this),this.mouse={x:window.innerWidth*this.dpr/2,y:window.innerHeight*this.dpr/2,mousedown:!1},this.setCanvasSize(),this.setupListeners(),this.layoutGrid(),this.tick=0,this.render()}return t.prototype.setupListeners=function(){window.addEventListener("resize",this.setCanvasSize),window.addEventListener("mousedown",this.handleMousedown),window.addEventListener("mouseup",this.handleMouseup),window.addEventListener("mousemove",this.handleMouse)},t.prototype.setCanvasSize=function(){this.canvas.width=window.innerWidth*this.dpr,this.canvas.height=window.innerHeight*this.dpr,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.layoutGrid()},t.prototype.layoutGrid=function(){var t=this.canvas,i=t.width,s=t.height,h=i-100*this.dpr,e=s-100*this.dpr,n=Math.floor(Math.max(h,e)/22);this.diamond=new d;var o=Math.floor(h/n),a=Math.floor(e/n),c=(i-h)/2,u=(s-n*a)/2;this.grid=[];for(var l=1;l<=a;l++)for(var p=1;p<=o;p++){var x=(p-1)*n+c,v=(l-1)*n+u,y=new r(this.ctx,x,v,n,n);this.grid.push(y)}},t.prototype.handleMousedown=function(t){this.mouse.mousedown=!0},t.prototype.handleMouseup=function(t){this.mouse.mousedown=!1},t.prototype.handleMouse=function(t){var i=t.clientX*this.dpr,s=t.clientY*this.dpr;this.mouse.x=i,this.mouse.y=s,this.applyForce()},t.prototype.applyForce=function(){for(var t=this.mouse,i=t.mousedown,s=t.x,h=t.y,e=this.grid.length,n=0;n<e;n++){var o=this.grid[n],a=o.cx-s,r=o.cy-h,d=Math.atan2(r,a),c=4/Math.sqrt(a*a+r*r);i&&(c*=-1);var u=Math.cos(d)*c,l=Math.sin(d)*c;o.applyForce(u,l)}},t.prototype.drawBackground=function(){var t=this.canvas,i=t.width,s=t.height,h=this.ctx.createLinearGradient(0,0,0,s);h.addColorStop(0,"#fff1ce"),h.addColorStop(1,"#8ec5fc"),this.ctx.fillStyle=h,this.ctx.fillRect(0,0,i,s)},t.prototype.drawMouse=function(){var t=this.mouse,i=t.mousedown,s=t.x,h=t.y;this.ctx.lineWidth=2*this.dpr,this.ctx.strokeStyle=i?"#FFFFFF":"#537895",this.ctx.beginPath(),this.ctx.arc(s,h,16*this.dpr,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke()},t.prototype.render=function(){this.drawBackground(),this.drawMouse();for(var t=this.grid.length,i=this.diamond.canvas,s=0;s<t;s++){var h=this.grid[s];h.draw(i),h.update()}this.diamond.update(),this.diamond.draw(),this.tick<=120&&this.applyForce(),this.tick++,window.requestAnimationFrame(this.render)},t}(),r=function(){function t(t,i,s,h,a){void 0===i&&(i=0),void 0===s&&(s=0),void 0===h&&(h=50),void 0===a&&(a=50),this.ctx=t,this.x=i,this.y=s,this.w=h,this.h=a,this.ctx=t,this.ox=i,this.oy=s,this.x=i,this.y=s,this.w=h,this.h=a,this.hw=h/2,this.hh=a/2,this.cx=i+this.hw,this.cy=s+this.hh,this.vx=0,this.vy=0,this.fx=0,this.fy=0,this.mass=o,this.elasticity=e,this.damping=n}return t.prototype.update=function(){var t=(this.ox-this.x)*this.elasticity,i=(this.oy-this.y)*this.elasticity,s=this.fx+t,h=this.fy+i,e=s/this.mass,n=h/this.mass;this.vx=this.damping*this.vx+e,this.vy=this.damping*this.vy+n,this.x+=this.vx,this.y+=this.vy,this.cx+=this.vx,this.cy+=this.vy,this.fx=0,this.fy=0},t.prototype.applyForce=function(t,i){this.fx=t,this.fy=i},t.prototype.draw=function(t){var i=this,s=i.x,h=i.y,e=i.w,n=i.h;this.ctx.drawImage(t,s,h,e,n)},t}(),d=function(){function t(t,i){void 0===t&&(t=50),void 0===i&&(i=50),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=t,this.canvas.height=i,this.x=0,this.y=0,this.w=t,this.h=i,this.hw=t/2,this.hh=i/2,this.cx=this.x+this.hw,this.cy=this.y+this.hh,this.theta=0,this.draw()}return t.prototype.getGradient=function(t,i,s,h){var e=this,n=(e.w,e.h),o=h+n,a=this.ctx.createLinearGradient(s,h,s,o);return a.addColorStop(0,t),a.addColorStop(1,i),a},t.prototype.update=function(){this.theta>=360&&(this.theta=0),this.theta+=1.5},t.prototype.draw=function(){this.ctx.save();var t=this,i=t.x,s=t.y,e=t.cx,n=t.cy,o=t.w,a=t.h,r=t.hw,d=t.hh,c=t.theta;this.ctx.clearRect(i,s,a,o),this.ctx.translate(e,n),this.ctx.rotate(c*h),this.ctx.fillStyle=this.getGradient("#ffecd2","#fbc2eb",-r,-d),this.ctx.beginPath(),this.ctx.moveTo(0,-d),this.ctx.lineTo(r,0),this.ctx.lineTo(-r,0),this.ctx.closePath(),this.ctx.rotate(-c*h),this.ctx.fill(),this.ctx.fillStyle=this.getGradient("#667eea","#8fd3f4",-r,-d),this.ctx.rotate(c*h),this.ctx.beginPath(),this.ctx.moveTo(r,0),this.ctx.lineTo(0,d),this.ctx.lineTo(-r,0),this.ctx.closePath(),this.ctx.rotate(-c*h),this.ctx.fill(),this.ctx.restore()},t}();new a}).call(i,"canvas/fluid_diamond/app.ts")},1040:function(t,i,s){"use strict";var h={level:"prd"};t.exports=h},1041:function(t,i){t.exports="<html>\n\n<head>\n    <title>fluid diamond</title>\n    <style>\n        html,\n        body {\n            margin: 0;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n        }\n        canvas {\n            cursor: none;\n        }\n    </style>\n</head>\n\n<body>\n</body>\n\n</html>"}});