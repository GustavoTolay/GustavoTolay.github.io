(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();function i(e){e==1&&(document.getElementById("circle-1").className="circle-active",document.getElementById("circle-2").className="circle",document.getElementById("circle-3").className="circle"),e==2&&(document.getElementById("circle-1").className="circle",document.getElementById("circle-2").className="circle-active",document.getElementById("circle-3").className="circle"),e==3&&(document.getElementById("circle-1").className="circle",document.getElementById("circle-2").className="circle",document.getElementById("circle-3").className="circle-active")}document.getElementById("right-button").addEventListener("click",()=>{const e=document.getElementById("carousel-ul"),t=e.style.marginLeft;t=="-200%"&&(e.style.marginLeft="0px",e.style.animation="from-3-to-1 0.5s ease-in-out",i(1)),t=="-100%"&&(e.style.marginLeft="-200%",e.style.animation="from-2-to-3 0.5s ease-in-out",i(3)),(!t||t=="0px")&&(e.style.marginLeft="-100%",e.style.animation="from-1-to-2 0.5s ease-in-out",i(2))});document.getElementById("left-button").addEventListener("click",()=>{const e=document.getElementById("carousel-ul"),t=e.style.marginLeft;t=="-200%"&&(e.style.marginLeft="-100%",e.style.animation="from-3-to-2 0.5s ease-in-out",i(2)),t=="-100%"&&(e.style.marginLeft="0px",e.style.animation="from-2-to-1 0.5s ease-in-out",i(1)),(!t||t=="0px")&&(e.style.marginLeft="-200%",e.style.animation="from-1-to-3 0.5s ease-in-out",i(3))});const a=document.getElementById("input-3");a.addEventListener("invalid",e=>{e.target.setCustomValidity("Sólo números y espacios")});a.addEventListener("input",e=>{e.target.setCustomValidity("")});const m=document.getElementById("carousel-div");let o;function d(e){o=e.changedTouches[0].clientX}function u(e){if(o||o==0){let t=e.changedTouches[0].clientX-o;if(Math.abs(t)<40)return;const s=new Event("click");t<0&&document.getElementById("right-button").dispatchEvent(s),t>0&&document.getElementById("left-button").dispatchEvent(s)}}m.addEventListener("touchstart",d,!1);m.addEventListener("touchend",u,!1);
