const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(function(o){e.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(function(t){r.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(d)})),r.disabled=!0;
//# sourceMappingURL=01-color-switcher.7aa678ab.js.map