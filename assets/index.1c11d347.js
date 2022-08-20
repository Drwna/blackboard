(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();class a{constructor(e=document.querySelector("#canvas"),n=e.width,s=e.height,t=e.getContext("2d"),i=document.createElement("div"),r="#000",c="#fff"){this.el=e,this.width=n,this.height=s,this.app=t,this.btns=i,this.bgColor=r,this.lineColor=c,this.initCanvas(),this.bindEvent(),this.draw()}bindEvent(){const e=this.drawLine.bind(this);this.el.addEventListener("mousedown",()=>{this.app.beginPath(),this.app.strokeStyle=this.lineColor,this.el.addEventListener("mousemove",e)}),document.addEventListener("mouseup",()=>{this.el.removeEventListener("mousemove",e)})}initCanvas(){this.app.fillStyle=this.bgColor,this.app.fillRect(0,0,this.width,this.height),this.btns.classList.add("btns"),this.el.insertAdjacentElement("afterend",this.btns)}drawLine(e){this.app.lineTo(e.offsetX,e.offsetY),this.app.stroke()}setBgColor(e){return this.bgColor=e,this.app.fillStyle=e,this.app.fillRect(0,0,this.width,this.height),this}setLineColor(){const e=[this.lineColor,"#1abc9c","#f1c40f","#9b59b6"],n=document.createElement("div");n.classList.add("color-container"),e.forEach(s=>{const t=document.createElement("div");t.style.cssText=`width: 30px;height:30px;background:${s}`,n.insertAdjacentElement("afterbegin",t),t.addEventListener("click",()=>this.lineColor=s)}),this.btns.insertAdjacentElement("beforeend",n)}clear(){const e=document.createElement("button");return e.innerText="\u6E05\u5C4F",this.btns.insertAdjacentElement("afterbegin",e),e.addEventListener("click",()=>{this.app.fillStyle=this.bgColor,this.app.fillRect(0,0,this.width,this.height)}),this}erase(){const e=document.createElement("button");return e.innerText="\u6A61\u76AE\u64E6",this.btns.insertAdjacentElement("afterbegin",e),e.addEventListener("click",()=>{this.lineColor=this.bgColor,this.app.lineWidth=20}),this}draw(){const e=document.createElement("button");return e.innerText="\u5199\u5B57",this.btns.insertAdjacentElement("afterbegin",e),e.addEventListener("click",()=>{this.lineColor=this.lineColor,this.app.lineWidth=1}),this}short(){const e=document.createElement("button");e.innerText="\u622A\u56FE",this.btns.insertAdjacentElement("afterbegin",e);const n=document.createElement("img");return e.addEventListener("click",()=>{n.src=this.el.toDataURL("image/jpeg"),n.classList.add("img-short")}),this.btns.insertAdjacentElement("afterend",n),this}}const o=new a;o.clear();o.setLineColor();o.erase();o.short();
