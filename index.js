import{S as u,a as d,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery"),n=document.querySelector(".loader");function f(o){return o.map(({webformatURL:t,previewURL:l,tags:s,likes:e,views:r,comments:i,downloads:c})=>`
    <li class="gallery-item">
       <a class="gallery-link" href=${t}><img class="gallery-img" src=${l} alt=${s}/></a>
       <ul class="gallery-list">
         <li><p>Likes ${e}</p></li>
         <li><p>Views ${r}</p></li>
         <li><p>Comments ${i}</p></li>
         <li><p>Downloads ${c}</p></li>
       </ul>
    </li>
    `).join("")}function p(){m.innerHTML=""}function y(){n.classList.remove("hidden")}function h(){n.classList.add("hidden")}const g=document.querySelector(".gallery"),L=new u(".gallery a",{captionsData:"alt",captionDelay:250});function S(o){d("https://pixabay.com/api/",{params:{key:"55695379-7a0fca570ad88a67ebcd7aaee",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>{if(t.hits.length>0)g.innerHTML=f(t.hits);else{a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}L.refresh()}).catch(t=>{console.log(t.message)}).finally(()=>{h()})}const b=document.querySelector(".form"),q=document.querySelector('input[name ="search-text"]'),$=document.querySelector(".loader");b.addEventListener("submit",w);function w(o){o.preventDefault(),p(),y();const t=q.value.trim();o.target.reset(),t.length>0?S(t):(a.show({message:"The field is empty",color:"red",position:"topRight"}),$.classList.add("hidden"))}
//# sourceMappingURL=index.js.map
