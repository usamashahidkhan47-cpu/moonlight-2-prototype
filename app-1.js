
  (function(){
    const embeddedAssets={city:"assets/moonlight-1.webp",coast:"assets/moonlight-2.webp",studio:"assets/moonlight-3.webp"};
    const images=[...document.querySelectorAll("img[data-asset]")]; let settled=0;
    const reveal=function(){settled++;if(settled>=images.length)document.documentElement.classList.add("assets-ready")};
    images.forEach(function(img){img.addEventListener("load",reveal,{once:true});img.addEventListener("error",reveal,{once:true});img.src=embeddedAssets[img.dataset.asset]});
    setTimeout(function(){document.documentElement.classList.add("assets-ready")},900);
  })();
