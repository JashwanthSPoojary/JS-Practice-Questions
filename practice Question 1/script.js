var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(dets){
    var rectlocation = rect.getBoundingClientRect();
    var insiderectval = dets.clientX - rectlocation.left;

    if(insiderectval<rectlocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectlocation.width/2,0,255,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease: Power4
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,0,255,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease: Power4
        })
    }

})

