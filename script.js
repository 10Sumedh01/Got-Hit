




var tl = gsap.timeline()

tl.to("nav ul",{
    delay:0,
    backgroundColor:"#f0f8ff",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"bottom 20%",
        end:"bottom 50%",
        // scrub:2,
        // pin:true
    }
})

tl.from(".logo",{
    scale:6,
    y:"50vh",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})

tl.from(".container-left h2",{
    y:100,
    opacity:0,
    // duration:.6,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"50% 80%",
        end:"100% 100%",
        scrub:2
    }
},'x')
.from(".container-right img",{
    y:400,
    // duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"50% 80%",
        end:"100% 100%",
        scrub:2
    }
},'x')







tl.from(".container-left img",{
    y:300,
    duration:.6,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"50% 100%",
        end:"100% 70%",
        scrub:2
    }
})

tl.from(".container-right h2",{
    x:400,
    duration:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"50% 100%",
        end:"50% 50%",
        scrub:2
    }
})

// <-- REVEAL ANIMATION HERER-->

var tl1=gsap.timeline({scrollTrigger:{
    trigger:".page4-in",
    start:"50% 55%",
    // markers:true,
    end:"80% 50%",
    scrub:2,
    // pin:true
}})

tl1.to(".page4-in .top",{
    y: "-50vh",
},'a')
.to(".page4-in .top h1",{
    // y: "20vh",
    transform:"rotate(-90deg)",
    scale:1.5
},'a')
.to(".page4-in .bottom",{
    y:"100vh"
},'a')
.to(".page4-in .bottom h1",{
    // y:"-10vh"
    transform:"rotate(-90deg)",
    scale:1.5
},'a')
.to("body",{
    backgroundColor:"#171717",
},'b')
.to("nav ul",{
    // delay:1,
    // duration:1,
    backgroundColor:"#171717",
    color:"#f0f8ff"
},'b')
.to(".page5",{
    color:"#f0f8ff"
},'a')



// gsap.from(".page4 .center ",{
//     x:1500,
//     delay:1,
//     // backgroundColor:"red",
//     scrollTrigger:{
//         trigger:".page4",
//         scroller:"body",
//         markers:true,
//         start:"60% 50%",
//         end:"100% 70%",
//         scrub:1
//     }
// })
