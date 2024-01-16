var rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(dets){
    var val = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth-100-rect.getBoundingClientRect().width/2,
        dets.clientX
        )
    gsap.to('#rect',{
        left:val,
        ease: Power3
    })
})