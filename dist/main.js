!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}var o,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function c(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],i=0;i<n.length;i++){var a=n[i],s=e.base?a[0]+e.base:a[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:b(p,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var a=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}function m(n,e,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function b(n,e){var t,r,i;if(e.singleton){var a=h++;t=f||(f=d(e)),r=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=d(e),r=m.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=c(t[r]);o[i].references--}for(var a=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=a}}}},function(n,e,t){var r=t(1),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r)()(!1);i.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\na,\nabbr,\nacronym,\naddress,\napplet,\narticle,\naside,\naudio,\nb,\nbig,\nblockquote,\nbody,\ncanvas,\ncaption,\ncenter,\ncite,\ncode,\ndd,\ndel,\ndetails,\ndfn,\ndiv,\ndl,\ndt,\nem,\nembed,\nfieldset,\nfigcaption,\nfigure,\nfooter,\nform,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nheader,\nhgroup,\nhtml,\ni,\niframe,\nimg,\nins,\nkbd,\nlabel,\nlegend,\nli,\nmark,\nmenu,\nnav,\nobject,\nol,\noutput,\np,\npre,\nq,\nruby,\ns,\nsamp,\nsection,\nsmall,\nspan,\nstrike,\nstrong,\nsub,\nsummary,\nsup,\ntable,\ntbody,\ntd,\ntfoot,\nth,\nthead,\ntime,\ntr,\ntt,\nu,\nul,\nvar,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  font-family: 'Roboto', serif;\n  font-size: 16px;\n  line-height: 1;\n  margin: 0 auto;\n  max-width: 1310px;\n  position: relative;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nq::after,\nq::before,\nblockquote::after,\nblockquote::before {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]),e.default=i},function(n,e,t){var r=t(1),i=t(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r)()(!1);i.push([n.i,'#search {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 1.5rem 2rem;\n  width: 80%;\n}\n\n#container1 {\n  margin: 0 auto;\n  padding: 1.5rem 2rem 0.5rem;\n  width: 80%;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n#container {\n  background-color: #f7f7f7;\n  border: solid #dfdfdf 0.3rem;\n  border-radius: 0.5rem;\n  opacity: 0.8;\n  padding: 0.5rem 1rem;\n  width: 12rem;\n}\n\n.icon {\n  height: 7rem;\n  width: 7rem;\n}\n\np {\n  font-size: 1.2rem;\n  line-height: 2rem;\n}\n\n.tag {\n  font-weight: 700;\n}\n\n.change {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 6.5rem;\n}\n\n.switch {\n  display: inline-block;\n  height: 1.5rem;\n  position: relative;\n  width: 3rem;\n}\n\n.switch input {\n  height: 0;\n  opacity: 0;\n  width: 0;\n}\n\n.slider {\n  background-color: #ccc;\n  bottom: 0;\n  cursor: pointer;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.4s;\n  -webkit-transition: 0.4s;\n}\n\n.slider::before {\n  background-color: white;\n  bottom: 0.03rem;\n  content: "";\n  height: 1.4rem;\n  left: 0.03rem;\n  position: absolute;\n  transition: 0.4s;\n  width: 1.4rem;\n  -webkit-transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider::before {\n  transform: translateX(1.4rem);\n  -ms-transform: translateX(1.4rem);\n  -webkit-transform: translateX(1.4rem);\n}\n\n.slider.round {\n  border-radius: 2rem;\n}\n\n.slider.round::before {\n  border-radius: 50%;\n}\n',""]),e.default=i},function(n,e,t){"use strict";t.r(e);t(2),t(4);var r=n=>{document.body.innerHTML="";const e=document.createElement("div");e.id="search";const t=document.createElement("input");t.setAttribute("placeholder","City Name"),t.setAttribute("type","text"),t.id="txtSearch",e.appendChild(t);const r=document.createElement("button");r.innerHTML='Search <i class="fas fa-search"></i>',r.setAttribute("onclick",'window.changeCity(document.getElementById("txtSearch").value)'),e.appendChild(r),document.body.appendChild(e);const i=document.createElement("div");let a="";switch(n.city){case"Beijing":case"Guadalajara":case"London":case"Mexico City":case"Monterrey":case"Moscow":case"Paris":case"Puebla":case"Sydney":case"Tijuana":case"Tokyo":case"Toronto":case"Washington":a=`../src/img/${n.city}.jpg`;break;default:a="../src/img/default.jpg"}i.style.background=`url("${a}") no-repeat`,i.id="container1";const o=document.createElement("h1");o.id="city",o.innerText=`${n.city}, ${n.country}`,i.appendChild(o),document.body.appendChild(i);const c=document.createElement("div");c.id="container";const s=document.createElement("div");s.classList.add("icon");const d=`http://openweathermap.org/img/w/${n.icon}.png`;s.style.background=`url("${d}") center/cover no-repeat`,c.appendChild(s);const l=document.createElement("p");l.innerHTML=`<span class='tag'>Temp:</span> ${n.temp}&deg; <i class="fas fa-temperature-low"></i>`,c.appendChild(l);const u=document.createElement("p");u.innerHTML=`<span class='tag'>Feels Like:</span> ${n.feelsLike}&deg;`,c.appendChild(u);const p=document.createElement("p");p.innerHTML=`<span class='tag'>Temp Max:</span> ${n.tempMax}&deg; <i class="fas fa-thermometer-three-quarters"></i>`,c.appendChild(p);const m=document.createElement("p");m.innerHTML=`<span class='tag'>Temp Min:</span> ${n.tempMin}&deg; <i class="fas fa-thermometer-quarter"></i>`,c.appendChild(m);const f=document.createElement("p");f.innerHTML="<span class='tag'>Weather:</span> "+n.weather,c.appendChild(f);const h=document.createElement("p");h.innerHTML=`<span class='tag'>Humidity:</span> ${n.humidity}% <i class="fas fa-tint"></i>`,c.appendChild(h);const b=document.createElement("p");"imperial"===n.units?b.innerHTML=`<span class='tag'>Wind:</span> ${n.wind}mph <i class="fas fa-wind"></i>`:b.innerHTML=`<span class='tag'>Wind:</span> ${n.wind}m/s <i class="fas fa-wind"></i>`,c.appendChild(b);const g=document.createElement("p");g.classList.add("change"),g.innerHTML="<span class='tag'>C&deg;</span>";const y=document.createElement("label");y.classList.add("switch");const v=document.createElement("input");v.id="checkbox",v.setAttribute("type","checkbox"),v.setAttribute("onclick","window.changeUnits(this.checked)"),"imperial"===n.units&&v.setAttribute("checked","true");const w=document.createElement("span");w.classList.add("slider","round"),y.appendChild(v),y.appendChild(w),g.appendChild(y),g.innerHTML+="<span class='tag'>F&deg;</span>",c.appendChild(g),i.appendChild(c)};var i=async(n,e="imperial")=>{const t=await n,i={city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),feelsLike:Math.round(t.main.feels_like),tempMax:Math.round(t.main.temp_max),tempMin:Math.round(t.main.temp_min),weather:t.weather[0].main,icon:t.weather[0].icon,humidity:t.main.humidity,wind:t.wind.speed,units:e};r(i)};var a=async(n,e="metric")=>{try{const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&units=${e}&APPID=601f07ca111a8579d6efec14591e21a7`,{mode:"cors"});return await t.json()}catch(n){alert(n)}return!1};let o="Mexico City";i(a(o),"metric"),window.changeUnits=function(n){n?i(a(o,"imperial")):i(a(o),"metric")},window.changeCity=function(n){o=n,i(a(o),"metric")}}]);