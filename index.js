import{S as f,a as h,i as n}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-img" src="${o}" alt="${e}" />
        </a>
        <ul class="gallery-list">
          <li><p>Likes ${t}</p></li>
          <li><p>Views ${s}</p></li>
          <li><p>Comments ${d}</p></li>
          <li><p>Downloads ${m}</p></li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function y(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}function S(i){return h("https://pixabay.com/api/",{params:{key:"55695379-7a0fca570ad88a67ebcd7aaee",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const b=document.querySelector(".form");document.querySelector(".gallery");const q=document.querySelector('input[name="search-text"]');document.querySelector(".loader");b.addEventListener("submit",w);function w(i){i.preventDefault(),y(),L();const r=q.value.trim();if(i.target.reset(),r.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),l();return}S(r).then(o=>{if(console.log(o),o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}g(o.hits)}).catch(o=>{n.show({message:"Something went wrong!",color:"red"}),console.log(o)}).finally(()=>{l()})}
//# sourceMappingURL=index.js.map
