const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";
        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1682685797818-c9dc151d241e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D");
        document.body.appendChild(div);
        div.appendChild(img);
        gsap.to(img,{
            y:"0",
            ease:Power1,
            duration:.6
        })
        gsap.to(img,{
            y:"100%",
            delay:.6,
            ease:Power2
        })
        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 500));