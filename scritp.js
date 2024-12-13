const bar=document.querySelector("i")
const cross=document.querySelector("#cross")


const tl = gsap.timeline();

tl.from(".menu", {
x: 330,
duration: 0.8
});

tl.from(".menu h5", {
x: 100,
duration:0.4,
opacity: 0,
stagger: 0.2, 
  
});
tl.pause()

bar.addEventListener("click",function () {
tl.play();
})
cross.addEventListener("click",function () {
tl.reverse()    
})