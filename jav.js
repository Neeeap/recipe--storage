const links=document.querySelectorAll("h2");
links.forEach((link) =>{
    link.addEventListener("mouseenter", () =>{
        link.style.cssText= "background-color: cyan; border-radius: 10px"
    })
    link.addEventListener("mouseleave", () =>{
        link.style.cssText= "background-color: white; border-radius: 10px"
    })
})