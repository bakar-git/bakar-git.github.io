window.onload=()=>{gsap.registerPlugin(ScrollTrigger);function a(){gsap.set("#navbar",{"pointer-events":"all"});gsap.to("#navbar",{opacity:1});gsap.to("#navbar a",{y:0,stagger:0.05})}function b(){gsap.set("#navbar",{"pointer-events":"none"});gsap.to("#navbar a",{y:-200,stagger:0.05});gsap.to("#navbar",{opacity:0})}b();document.getElementById("nav-opener").onclick=()=>a();document.getElementById("nav-closer").onclick=()=>b();for(const A of document.querySelectorAll("nav > a"))A.onclick=()=>b();gsap.to('#navbar',{scrollTrigger:{onUpdate:()=>{var A=document.querySelectorAll("nav > a"),_=document.querySelectorAll("#main-wrapper > div"),B="bg-lime-100 outline outline-2 outline-lime-50 outline-offset-4 rounded-2xl text-center w-full py-3 text-sm mb-5",d="bg-lime-50 hover:bg-lime-100 outline outline-2 outline-lime-50 outline-offset-0 transition-[outline-offset] hover:outline-offset-4 rounded-2xl text-center py-3 w-full text-sm mb-5";for(const[i,C] of _.entries())C.getBoundingClientRect().top<=0&&C.getBoundingClientRect().bottom>=0?A[i].setAttribute("class",B):A[i].setAttribute("class",d)}}});for(const A of document.querySelectorAll(".flex > .card, .project"))gsap.to(A,{scrollTrigger:{scrub:!0,trigger:A,start:"top center",toggleClass:'fill'}});let c=document.getElementById("screen-switcher");c.onclick=()=>document.location.href="pindex.html"};
