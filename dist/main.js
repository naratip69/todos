(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,"body{\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 16px;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    padding: 10px;\n}\n\n.content{\n    border: 1px solid black;\n    border-radius: 8px;\n    box-shadow: 5px 5px 3px gray;\n    padding: 14px;\n    display: grid;\n    grid-template-rows: 50px 1fr 225px;\n    width: 600px;\n    justify-items:start;\n}\n\n.add{\n    border: 0;\n    font-size: 24px;\n    color: antiquewhite;\n    background-color: cornflowerblue;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    justify-self: end;\n    align-self: end;\n    margin: 10px;\n    cursor: pointer;\n}\n\n.from{\n    display: grid;\n    grid-row: 1fr 1fr 1fr 2fr 25px;\n    padding: 5px;\n    margin: 5px;\n    border: 0px solid cornflowerblue;\n    background-color: rgba(100, 149, 237, .5);\n    border-radius: 5px;\n    width: 95%;\n    row-gap: 3px;\n}\n\n.from-item{\n    padding: 4px;\n    display: grid;\n    grid-template-columns: 125px 1fr;\n    justify-items: start;\n    align-items: start;\n}\n\n.from-item:last-child{\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: end;\n}\n\n#des{\n    resize: none;\n    height: 50px;\n}\n\n#add{\n    font-size: 20px;\n    border: 1px solid gray;\n    border-radius: 5px;\n    width: 40px;\n    margin-right: 10px;\n}\n\n.container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));\n    padding: 10px;\n    margin: 10px;\n    gap: 3px;\n    width: 100%;\n}\n\n.item{\n    display: grid;\n    padding: 5px;\n    padding-left: 8px;\n    background-color: rgba(100, 149, 237, .5);\n    border-radius: 10px;\n    grid-template-columns: 1fr 40px;\n    grid-template-rows: 50px 20px 1fr;\n    row-gap: 3px;\n    height: 200px;\n    width: 250px;\n}\n\n.title{\n    align-self: center;\n}\n\n.item button{\n    text-align: center;\n    border: 0;\n    width: 30px;\n    height: 30px;\n    align-self: center;\n    cursor: pointer;\n    color: red;\n    border-radius: 50%;\n    font-weight: 700;\n}\n\n.date{\n    grid-column: 1/3;\n    color: crimson;\n    font-size: 18px;\n    align-self: center;\n}\n\n.des{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    overflow: auto;\n    width: 100%;\n}",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=r.base?c[0]+r.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),d=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=[];const v=(e,t,n,r,o)=>{const i={add(){h.push(this)},remove(){h=h.filter((e=>e!==this))}};return Object.assign(Object.create(i),{title:e,descrip:t,dueDate:n,priority:r,div:o})};function x(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("from");const n=document.createElement("div");n.classList.add("from-item");const r=document.createElement("label");r.setAttribute("for","title"),r.textContent="Title:";const o=document.createElement("input");o.setAttribute("id","title"),n.appendChild(r),n.appendChild(o);const i=document.createElement("div");i.classList.add("from-item");const d=document.createElement("label");d.setAttribute("for","des"),d.textContent="Description:";const a=document.createElement("textarea");a.setAttribute("id","des"),i.appendChild(d),i.appendChild(a);const c=document.createElement("div");c.classList.add("from-item");const s=document.createElement("label");s.setAttribute("for","priority"),s.textContent="Priority:";const l=document.createElement("input");l.setAttribute("id","priority"),l.setAttribute("type","number"),l.setAttribute("min","0"),l.setAttribute("max","10"),l.setAttribute("value","0"),c.appendChild(s),c.appendChild(l);const p=document.createElement("div");p.classList.add("from-item");const u=document.createElement("label");u.setAttribute("for","date"),u.textContent="Due Date:";const m=document.createElement("input");m.setAttribute("id","date"),m.setAttribute("type","date"),p.appendChild(u),p.appendChild(m);const f=document.createElement("div");f.classList.add("from-item");const g=document.createElement("button");g.setAttribute("id","add"),g.textContent=">",f.appendChild(g),g.addEventListener("click",(t=>{!function(e,t,n,r){const o=document.createElement("div");o.classList.add("item");const i=v(e,t,n,r,o),d=document.createElement("h2");d.classList.add("title"),d.textContent=i.title,o.appendChild(d);const a=document.createElement("button");a.setAttribute("type","button"),a.textContent="X",o.appendChild(a);const c=document.createElement("div");c.classList.add("date"),c.textContent=i.dueDate,o.appendChild(c);const s=document.createElement("div");s.classList.add("des"),s.textContent=i.descrip,o.appendChild(s),a.addEventListener("click",(e=>{const t=document.querySelector(".container");i.remove(),t.removeChild(o)})),i.add()}(o.value,a.value,m.value,+l.value),function(){const e=document.querySelector(".container"),t=document.querySelector(".content");h.sort(((e,t)=>t.priority-e.priority));const n=document.createElement("div");n.classList.add("container"),h.forEach((e=>{n.appendChild(e.div)})),t.removeChild(e),t.appendChild(n)}();const n=document.createElement("button");n.classList.add("add"),n.textContent="+",n.addEventListener("click",x),e.removeChild(document.querySelector(".from")),e.appendChild(n)})),t.appendChild(n),t.appendChild(p),t.appendChild(c),t.appendChild(i),t.appendChild(f),e.removeChild(e.querySelector(".add")),e.appendChild(t)}!function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("content");const n=document.createElement("h1");n.classList.add("header"),n.textContent="What to do..";const r=document.createElement("div");r.classList.add("container");const o=document.createElement("button");o.classList.add("add"),o.textContent="+",o.addEventListener("click",x),t.appendChild(n),t.appendChild(r),t.appendChild(o),e.append(t)}()})()})();