const links=document.querySelectorAll("h2");
links.forEach((link) =>{
    link.addEventListener("mouseenter", () =>{
        link.style.cssText= "padding: 1%; background-color: cyan; border-radius: 10px"
    })
    link.addEventListener("mouseleave", () =>{
        link.style.cssText= "padding: 1%; background-color: white; border-radius: 10px"
    })
})