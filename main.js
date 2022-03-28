(()=>{"use strict";class e{constructor(e,t){this.name=e,this.url=t}init(){this.bindToDOM()}static template(e,t){return`\n    <div class="image-box">\n      <h3 class="image__title">${e}</h3>\n      <div class="image-card empty" data-url="${t}">\n        \n    </div>\n      <button class="image-card__del">X</button>\n  </div>\n\n`}bindToDOM(){const e=document.querySelector(".gallery-wrapper"),t=this.addTask(this.name,this.url);e.insertAdjacentHTML("beforeend",t)}addTask(){if(this.name&&this.url){return this.constructor.template(this.name,this.url)}return!1}}const t=document.querySelector("#gallery-container"),n=new class{constructor(e){this.container=e,this.board=null}createGallery(){this.gallery=document.createElement("div"),this.gallery.classList.add("gallery"),this.bindToDOM()}static get markup(){return'\n    \n\t\t  <div class="dnd__box">\n        <input class="overlapped" type=\'file\' accept="image/*" multiple>\n        \n        <h3 class="dnd__title">Drag and Drop files here or Click to select</h3>\n      </div>\n\t\t  <div class="gallery-wrapper"></div>\n\t\t'}bindToDOM(){this.container.insertAdjacentHTML("afterbegin",this.constructor.markup)}}(t),i=new class{constructor(e){this.gallery=e,this.state=[]}init(){this.gallery.createGallery(),this.container=document.querySelector(".dnd__box"),this.cardsBox=document.querySelector(".gallery-wrapper"),this.input=document.querySelector(".overlapped"),this.addDropElEventListener(),this.addSubscribe(this.container),this.galleryListeners(this.cardsBox)}addSubscribe(e){e.addEventListener("click",this.onClick.bind(this)),e.addEventListener("change",this.onUpload.bind(this))}galleryListeners(e){e.addEventListener("click",this.onClickDeleteCard.bind(this))}addDropElEventListener(){const e=document.querySelector(".dnd__box");e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);t=t.filter((e=>e.type.match(/image\/./))),t.forEach((t=>{this.onUpload({target:e.dataTransfer})}))}))}onClick(e){console.log("onclick"),e.preventDefault(),this.input.dispatchEvent(new MouseEvent("click"))}onUpload(e){console.log("upload");const{target:t}=e;this.file=t.files&&t.files[0],this.url=URL.createObjectURL(this.file);const n=new FileReader;n.readAsDataURL(this.file),n.onload=()=>{this.addCard(this.file.name,n.result);const e=[...document.querySelectorAll(".picture")].find((e=>e.src===n.result));setTimeout((()=>URL.revokeObjectURL(this.file)),6e3),setTimeout((()=>e.dispatchEvent(new MouseEvent("click")))),this.input.value=""}}static templateImg(e,t){return`\n    <img class="picture" alt="${e}" src="${t}">\n    `}addCard(t,n){const i=new e(t,n);i.init();const r=[...document.querySelectorAll(".image-card")].find((e=>e.classList.contains("empty"))),s=this.constructor.templateImg(t,n);return r.insertAdjacentHTML("beforeend",s),r.classList.remove("empty"),i}onClickDeleteCard(e){e.target.classList.contains("image-card__del")&&(e.preventDefault(),e.target.parentElement.remove())}}(n);i.init()})();