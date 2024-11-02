var tl = gsap.timeline();
var menu = document.querySelector("#main div");
var cross = document.querySelector("#box div");

menu.addEventListener("click",function(){
        tl.to("#box",{
                right:0,
                duration:0.9
        })
        
        tl.from("#box h4",{
                x:300,
                opacity:0,
                duration:0.7,
                stagger:0.25
        })
        tl.from("#box div",{
                opacity:0
        })
});


cross.addEventListener("click",function(){
        gsap.to("#box",{
                right:"-40%",
                duration:1
        })
});


