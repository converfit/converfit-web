function mr_parallax(){"use strict";function a(a){for(var b=0;b<a.length;b++)if("undefined"!=typeof document.body.style[a[b]])return a[b];return null}function b(){var a,b=0;return i()?(b=jQuery(".viu").find("nav:first").outerHeight(!0),a=jQuery(".viu").find("nav:first").css("position"),("absolute"===a||"fixed"===a)&&(b=0)):b=jQuery(document).find("nav:first").outerHeight(!0),b}function c(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)}function d(){l(v),v=k(e),u=!0}function e(){for(var a=j.length,b=g();a--;)f(j[a],b,o,p)}function f(a,b,c,d){var e=i();e?b+q-r>a.elemTop&&b-r<a.elemBottom?(a.visible||(a.section.style.visibility="visible",a.visible=!0),a.isFirstSection?a.imageHolder.style[n]=c+b/2+d:a.imageHolder.style[n]=c+(b-a.elemTop-r)/2+d):a.visible&&(a.section.style.visibility="hidden",a.visible=!1):b+q>a.elemTop&&b<a.elemBottom?(a.visible||(a.section.style.visibility="visible",a.visible=!0),a.isFirstSection?a.imageHolder.style[n]=c+b/2+d:a.imageHolder.style[n]=c+(b+q-a.elemTop)/2+d):a.visible&&(a.section.style.visibility="hidden",a.visible=!1),u=!1}function g(){return t!=window?t.scrollTop:0===document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop}function h(a){var b={};return a&&"[object Function]"===b.toString.call(a)}function i(){return"undefined"==typeof window.mr_variant?!1:!0}var j,k=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,l=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame,m=["transform","msTransform","webkitTransform","mozTransform","oTransform"],n=a(m),o="translate3d(0,",p="px,0)",q=Math.max(document.documentElement.clientHeight,window.innerHeight||0),r=0,s=0,t=window,u=(i(),!1),v=null,w=this;this.mr_scrollAssist=$("body").hasClass("scroll-assist")?!0:!1,jQuery(document).ready(function(){w.documentReady()}),jQuery(window).on("load",function(){w.windowLoad()}),this.getScrollingState=function(){return s>0?!0:!1},this.documentReady=function(a){return q=Math.max(document.documentElement.clientHeight,window.innerHeight||0),jQuery("body").hasClass("parallax-2d")&&(o="translate(0,",p="px)"),/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)?jQuery(".parallax").removeClass("parallax"):k&&(w.profileParallaxElements(),w.setupParallax()),h(a)?void a():void 0},this.windowLoad=function(){q=Math.max(document.documentElement.clientHeight,window.innerHeight||0),r=b(),window.mr_parallax.profileParallaxElements()},this.setupParallax=function(){i()&&(t=jQuery(".viu").get(0),"undefined"!=typeof t&&(t.scrollBy=function(a,b){this.scrollTop+=b,this.scrollLeft+=a})),"undefined"!=typeof t&&(t.addEventListener("scroll",d,!1),window.addEventListener("resize",function(){q=c(),r=b(),w.profileParallaxElements()},!1),e())},this.profileParallaxElements=function(){j=[],q=c(),r=b();var a=i(),d=".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";a&&(d=".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"),jQuery(d).each(function(b){var c=jQuery(this).closest(".parallax"),d=a?c.position().top:c.offset().top;j.push({section:c.get(0),outerHeight:c.outerHeight(),elemTop:d,elemBottom:d+c.outerHeight(),isFirstSection:c.is(":nth-of-type(1)")?!0:!1,imageHolder:jQuery(this).get(0),visible:!0}),a?a&&(c.is(":nth-of-type(1)")?w.mr_setTranslate3DTransform(jQuery(this).get(0),0===g()?0:g()/2):w.mr_setTranslate3DTransform(jQuery(this).get(0),(g()-d-r)/2)):c.is(":nth-of-type(1)")?w.mr_setTranslate3DTransform(jQuery(this).get(0),0===g()?0:g()/2):w.mr_setTranslate3DTransform(jQuery(this).get(0),(g()+q-d)/2)})},this.mr_setTranslate3DTransform=function(a,b){a.style[n]=o+b+p}}window.mr_parallax=new mr_parallax,function(a,b){function c(b,c,g,h){b[d](f+c,"wheel"==e?g:function(b){!b&&(b=a.event);var c={originalEvent:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1}};return"mousewheel"==e?(c.deltaY=-1/40*b.wheelDelta,b.wheelDeltaX&&(c.deltaX=-1/40*b.wheelDeltaX)):c.deltaY=b.detail/3,g(c)},h||!1)}var d,e,f="";a.addEventListener?d="addEventListener":(d="attachEvent",f="on"),e="onwheel"in b.createElement("div")?"wheel":"undefined"!=typeof b.onmousewheel?"mousewheel":"DOMMouseScroll",a.addWheelListener=function(a,b,d){c(a,e,b,d),"DOMMouseScroll"==e&&c(a,"MozMousePixelScroll",b,d)}}(window,document);