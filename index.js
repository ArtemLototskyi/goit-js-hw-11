import{a as m,S as f,i as n}from"./assets/vendor-uqksYwm8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function p(o){const i=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-img" src="${r}" alt="${e}" />
        </a>
        <ul class="gallery-list">
          <li><p>Likes ${t}</p></li>
          <li><p>Views ${s}</p></li>
          <li><p>Comments ${u}</p></li>
          <li><p>Downloads ${d}</p></li>
        </ul>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",i)}function y(){l.innerHTML=""}function h(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}function L(o){return m("https://pixabay.com/api/",{params:{key:"55695379-7a0fca570ad88a67ebcd7aaee",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const S=document.querySelector(".form");document.querySelector(".gallery");const b=document.querySelector('input[name="search-text"]');document.querySelector(".loader");const q=new f(".gallery a",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",w);function w(o){o.preventDefault(),y(),h();const i=b.value.trim();o.target.reset(),L(i).then(({data:r})=>{if(r.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}p(r.hits),q.refresh()}).catch(r=>{n.show({message:"Something went wrong!",color:"red"}),console.log(r)}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
