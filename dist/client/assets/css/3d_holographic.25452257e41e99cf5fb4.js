!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="//swcho.github.io/ts_playground/dist/client/assets/",e(e.s=1100)}({1100:function(t,e,n){"use strict";(function(t){function r(t){var e=t.clientX,n=t.clientY,r=window.innerWidth,a=window.innerHeight,p=r/2,s=a/2,o=e-p,f=n-s,l=o/p*20,c=f/s*20;document.getElementById("card").style.transform="perspective(550px) rotateY("+l+"deg) rotateX("+c+"deg)";for(var m=1;m<i.length;++m){var x=i[m];x.style="transform: perspective(550px) translateZ("+x.getAttribute("data-depth")/x.clientHeight*5e3+"px); left: "+l*x.getAttribute("data-depth")*-1/20+"%; top: "+c*x.getAttribute("data-depth")/20+"%;"}}Object.defineProperty(e,"__esModule",{value:!0}),n(1101),n(1102),console.log(t),n(1103);var a=document.getElementById("autoToggle"),p=document.getElementById("instructions"),s=document.getElementById("cardWrapper"),o=document.getElementById("card"),i=o.getElementsByTagName("img");document.addEventListener("mousemove",function(t){s.classList.contains("auto")||r(t)},!1),document.getElementById("autoToggle").addEventListener("click",function(){s.classList.contains("auto")?(s.classList.remove("auto"),a.innerHTML="Click for auto animation",p.innerHTML="POINTER CONTROL"):(s.classList.add("auto"),a.innerHTML="Click for pointer control",p.innerHTML="AUTO ANIMATION")})}).call(e,"css/3d_holographic/app.ts")},1101:function(t,e,n){"use strict";var r={level:"prd"};t.exports=r},1102:function(t,e){t.exports='<html>\n    <head>\n        <title></title>\n    </head>\n    <body>\n        <div id="cardWrapper" class="auto">\n            <div id="card" class=\'orig\'>\n                <img src="https://massivepenguin.com/pens/hb3d/01_bg.png" data-depth="18" />\n                <img class="layer1" src="https://massivepenguin.com/pens/hb3d/02_trees.png" data-depth="12" />\n                <img class="layer2" src="https://massivepenguin.com/pens/hb3d/03_gruffalo_body.png" data-depth="8" />\n                <img class="layer3" src="https://massivepenguin.com/pens/hb3d/04_mist.png" data-depth="6" />\n                <img class="layer4" src="https://massivepenguin.com/pens/hb3d/05_head.png" data-depth="5" />\n                <img class="layer4" src="https://massivepenguin.com/pens/hb3d/06_jaw.png" data-depth="5" />\n                <img class="layer5" src="https://massivepenguin.com/pens/hb3d/07_tail.png" data-depth="3" />\n                <img class="layer6" src="https://massivepenguin.com/pens/hb3d/08_hellboy.png" data-depth="2" />\n                <div id="border">&nbsp;</div>\n            </div>\n            <div id="card" class=\'test\'>\n                <img src="https://massivepenguin.com/pens/hb3d/01_bg.png" data-depth="18" />\n                <img class="layer1" src="https://massivepenguin.com/pens/hb3d/02_trees.png" data-depth="12" />\n                <img class="layer2" src="https://massivepenguin.com/pens/hb3d/03_gruffalo_body.png" data-depth="8" />\n                <img class="layer3" src="https://massivepenguin.com/pens/hb3d/04_mist.png" data-depth="6" />\n                <img class="layer4" src="https://massivepenguin.com/pens/hb3d/05_head.png" data-depth="5" />\n                <img class="layer4" src="https://massivepenguin.com/pens/hb3d/06_jaw.png" data-depth="5" />\n                <img class="layer5" src="https://massivepenguin.com/pens/hb3d/07_tail.png" data-depth="3" />\n                <img class="layer6" src="https://massivepenguin.com/pens/hb3d/08_hellboy.png" data-depth="2" />\n                <div id="border">&nbsp;</div>\n            </div>\n        </div>\n        \n        <button id="autoToggle">Click for pointer control</button>\n        <div id="instructions">Auto animation</div>\n    </body>\n</html>'},1103:function(t,e,n){var r=n(1104);"string"==typeof r&&(r=[[t.i,r,""]]);var a={};a.transform=void 0;n(5)(r,a);r.locals&&(t.exports=r.locals)},1104:function(t,e,n){e=t.exports=n(4)(),e.push([t.i,"/* these animations are hard-coded to demonstrate the effect - not prtable in the slightest! */\n@-webkit-keyframes rotate-card-base {\n  0% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); }\n  10% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); }\n  30% {\n    -webkit-transform: perspective(550px) rotateX(20deg) rotateY(-20deg);\n            transform: perspective(550px) rotateX(20deg) rotateY(-20deg); }\n  50% {\n    -webkit-transform: perspective(550px) rotateX(20deg) rotateY(20deg);\n            transform: perspective(550px) rotateX(20deg) rotateY(20deg); }\n  70% {\n    -webkit-transform: perspective(550px) rotateX(-20deg) rotateY(20deg);\n            transform: perspective(550px) rotateX(-20deg) rotateY(20deg); }\n  90% {\n    -webkit-transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);\n            transform: perspective(550px) rotateX(-20deg) rotateY(-20deg); }\n  100% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); } }\n\n@keyframes rotate-card-base {\n  0% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); }\n  10% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); }\n  30% {\n    -webkit-transform: perspective(550px) rotateX(20deg) rotateY(-20deg);\n            transform: perspective(550px) rotateX(20deg) rotateY(-20deg); }\n  50% {\n    -webkit-transform: perspective(550px) rotateX(20deg) rotateY(20deg);\n            transform: perspective(550px) rotateX(20deg) rotateY(20deg); }\n  70% {\n    -webkit-transform: perspective(550px) rotateX(-20deg) rotateY(20deg);\n            transform: perspective(550px) rotateX(-20deg) rotateY(20deg); }\n  90% {\n    -webkit-transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);\n            transform: perspective(550px) rotateX(-20deg) rotateY(-20deg); }\n  100% {\n    -webkit-transform: perspective(550px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(550px) rotateX(0deg) rotateY(0deg); } }\n\n@-webkit-keyframes rotate-trees {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 12%;\n    top: 12%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: -12%;\n    top: 12%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: -12%;\n    top: -12%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 12%;\n    top: -12%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-trees {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 12%;\n    top: 12%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: -12%;\n    top: 12%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: -12%;\n    top: -12%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 12%;\n    top: -12%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(90px);\n            transform: perspective(550px) translateZ(90px);\n    left: 0%;\n    top: 0%; } }\n\n@-webkit-keyframes rotate-gruffalo-body {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 8%;\n    top: 8%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: -8%;\n    top: 8%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: -8%;\n    top: -8%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 8%;\n    top: -8%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-gruffalo-body {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 8%;\n    top: 8%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: -8%;\n    top: 8%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: -8%;\n    top: -8%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 8%;\n    top: -8%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(60px);\n            transform: perspective(550px) translateZ(60px);\n    left: 0%;\n    top: 0%; } }\n\n@-webkit-keyframes rotate-mist {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 6%;\n    top: 6%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: -6%;\n    top: 6%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: -6%;\n    top: -6%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 6%;\n    top: -6%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-mist {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 6%;\n    top: 6%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: -6%;\n    top: 6%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: -6%;\n    top: -6%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 6%;\n    top: -6%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(43px);\n            transform: perspective(550px) translateZ(43px);\n    left: 0%;\n    top: 0%; } }\n\n@-webkit-keyframes rotate-gruffalo-head {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 5%;\n    top: 5%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: -5%;\n    top: 5%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: -5%;\n    top: -5%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 5%;\n    top: -5%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-gruffalo-head {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 5%;\n    top: 5%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: -5%;\n    top: 5%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: -5%;\n    top: -5%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 5%;\n    top: -5%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(36px);\n            transform: perspective(550px) translateZ(36px);\n    left: 0%;\n    top: 0%; } }\n\n@-webkit-keyframes rotate-hellboy-bg {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 3%;\n    top: 3%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: -3%;\n    top: 3%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: -3%;\n    top: -3%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 3%;\n    top: -3%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-hellboy-bg {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 3%;\n    top: 3%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: -3%;\n    top: 3%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: -3%;\n    top: -3%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 3%;\n    top: -3%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(22px);\n            transform: perspective(550px) translateZ(22px);\n    left: 0%;\n    top: 0%; } }\n\n@-webkit-keyframes rotate-hellboy-fg {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 2%;\n    top: 2%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: -2%;\n    top: 2%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: -2%;\n    top: -2%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 2%;\n    top: -2%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; } }\n\n@keyframes rotate-hellboy-fg {\n  0% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; }\n  10% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; }\n  30% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 2%;\n    top: 2%; }\n  50% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: -2%;\n    top: 2%; }\n  70% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: -2%;\n    top: -2%; }\n  90% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 2%;\n    top: -2%; }\n  100% {\n    -webkit-transform: perspective(550px) translateZ(15px);\n            transform: perspective(550px) translateZ(15px);\n    left: 0%;\n    top: 0%; } }\n\nhtml,\nbody {\n  height: 100%; }\n\nbody {\n  background-color: #000; }\n\n#cardWrapper {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-perspective: 550px;\n          perspective: 550px;\n  white-space: nowrap; }\n\n#card {\n  position: relative;\n  width: calc(70vh * 0.70756062767475);\n  height: 70vh;\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap; }\n  #card img {\n    width: 100%;\n    height: 100%;\n    position: absolute; }\n  #card .layer1 {\n    z-index: 1; }\n  #card .layer2 {\n    z-index: 2; }\n  #card .layer3 {\n    z-index: 3; }\n  #card .layer4 {\n    z-index: 4; }\n  #card .layer5 {\n    z-index: 5; }\n  #card .layer6 {\n    z-index: 6; }\n\n#border {\n  position: absolute;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: 20px solid white;\n  display: block;\n  z-index: 7; }\n\n#autoToggle {\n  border: none;\n  background-color: #0275d8;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 120%;\n  padding: 1em;\n  cursor: pointer; }\n  #autoToggle:hover, #autoToggle:focus, #autoToggle:active {\n    background-color: #108ffd; }\n\n#instructions {\n  position: absolute;\n  right: 10px;\n  bottom: 0;\n  color: #fff;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 300%;\n  opacity: 0.3; }\n\n.auto #card.orig {\n  -webkit-animation: rotate-card-base 5s infinite;\n  animation: rotate-card-base 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer1 {\n  -webkit-animation: rotate-trees 5s infinite;\n  animation: rotate-trees 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer2 {\n  -webkit-animation: rotate-gruffalo-body 5s infinite;\n  animation: rotate-gruffalo-body 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer3 {\n  -webkit-animation: rotate-mist 5s infinite;\n  animation: rotate-mist 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer4 {\n  -webkit-animation: rotate-gruffalo-head 5s infinite;\n  animation: rotate-gruffalo-head 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer5 {\n  -webkit-animation: rotate-hellboy-bg 5s infinite;\n  animation: rotate-hellboy-bg 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.auto .orig .layer5 {\n  -webkit-animation: rotate-hellboy-fg 5s infinite;\n  animation: rotate-hellboy-fg 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes rotate-card-base-test {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); }\n  10% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); }\n  30% {\n    -webkit-transform: rotateX(20deg) rotateY(-20deg);\n            transform: rotateX(20deg) rotateY(-20deg); }\n  50% {\n    -webkit-transform: rotateX(20deg) rotateY(20deg);\n            transform: rotateX(20deg) rotateY(20deg); }\n  70% {\n    -webkit-transform: rotateX(-20deg) rotateY(20deg);\n            transform: rotateX(-20deg) rotateY(20deg); }\n  90% {\n    -webkit-transform: rotateX(-20deg) rotateY(-20deg);\n            transform: rotateX(-20deg) rotateY(-20deg); }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); } }\n\n@keyframes rotate-card-base-test {\n  0% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); }\n  10% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); }\n  30% {\n    -webkit-transform: rotateX(20deg) rotateY(-20deg);\n            transform: rotateX(20deg) rotateY(-20deg); }\n  50% {\n    -webkit-transform: rotateX(20deg) rotateY(20deg);\n            transform: rotateX(20deg) rotateY(20deg); }\n  70% {\n    -webkit-transform: rotateX(-20deg) rotateY(20deg);\n            transform: rotateX(-20deg) rotateY(20deg); }\n  90% {\n    -webkit-transform: rotateX(-20deg) rotateY(-20deg);\n            transform: rotateX(-20deg) rotateY(-20deg); }\n  100% {\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n            transform: rotateX(0deg) rotateY(0deg); } }\n\n#card.test {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: center center 0px;\n          transform-origin: center center 0px;\n  -webkit-animation: rotate-card-base-test 5s infinite;\n          animation: rotate-card-base-test 5s infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: visible; }\n  #card.test .layer1 {\n    -webkit-transform: translateZ(10px);\n            transform: translateZ(10px); }\n  #card.test .layer2 {\n    -webkit-transform: translateZ(20px);\n            transform: translateZ(20px); }\n  #card.test .layer3 {\n    -webkit-transform: translateZ(30px);\n            transform: translateZ(30px); }\n  #card.test .layer4 {\n    -webkit-transform: translateZ(40px);\n            transform: translateZ(40px); }\n  #card.test .layer5 {\n    -webkit-transform: translateZ(50px);\n            transform: translateZ(50px); }\n  #card.test .layer6 {\n    -webkit-transform: translateZ(60px);\n            transform: translateZ(60px); }\n",""])},4:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var p=this[a][0];"number"==typeof p&&(r[p]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},5:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=d[r.id];if(a){a.refs++;for(var p=0;p<a.parts.length;p++)a.parts[p](r.parts[p]);for(;p<r.parts.length;p++)a.parts.push(l(r.parts[p],e))}else{for(var s=[],p=0;p<r.parts.length;p++)s.push(l(r.parts[p],e));d[r.id]={id:r.id,refs:1,parts:s}}}}function a(t,e){for(var n=[],r={},a=0;a<t.length;a++){var p=t[a],s=e.base?p[0]+e.base:p[0],o=p[1],i=p[2],f=p[3],l={css:o,media:i,sourceMap:f};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}function p(t,e){var n=b(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function o(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),p(t,e),e}function i(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),p(t,e),e}function f(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,r,a,p;if(e.transform&&t.css){if(!(p=e.transform(t.css)))return function(){};t.css=p}if(e.singleton){var f=u++;n=g||(g=o(e)),r=c.bind(null,n,f,!1),a=c.bind(null,n,f,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(e),r=x.bind(null,n,e),a=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(e),r=m.bind(null,n),a=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}function c(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=k(e,a);else{var p=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(p,s[e]):t.appendChild(p)}}function m(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function x(t,e,n){var r=n.css,a=n.sourceMap,p=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||p)&&(r=Z(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var s=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}var d={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,u=0,w=[],Z=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=a(t,e);return r(n,e),function(t){for(var p=[],s=0;s<n.length;s++){var o=n[s],i=d[o.id];i.refs--,p.push(i)}if(t){r(a(t,e),e)}for(var s=0;s<p.length;s++){var i=p[s];if(0===i.refs){for(var f=0;f<i.parts.length;f++)i.parts[f]();delete d[i.id]}}}};var k=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return t;var p;return p=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(p)+")"})}}});