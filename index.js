window.addEventListener("scroll", function(){
    let navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

let menubtn = document.querySelector(".menu-btn")
let listitems = document.querySelector(".list-items")
menubtn.addEventListener("click", function(){
    listitems.classList.toggle("active")
    menubtn.classList.toggle("active")
})

var typed = new Typed(".auto-type", {
    strings : ["Web Developer", "FreeLancer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true 
})

var typed2 = new Typed(".auto-type2", {
    strings : ["Web Developer", "FreeLancer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true 
})


