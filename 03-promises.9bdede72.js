!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("6JpON"),u={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function i(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}u.form.addEventListener("input",(function(e){e.preventDefault();var t={delay:u.delay.value,step:u.step.value,amount:u.amount.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),u.form.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,o=n.delay,r=n.step,u=n.amount,l=parseInt(o.value),c=parseInt(r.value),d=parseInt(u.value),s=0;s<d;s+=1){i(s,s*c+l).then((function(t){var n=t.position,o=t.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(a).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.9bdede72.js.map
