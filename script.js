let menuBtn = document.querySelector(".edik1");
let dropdown = document.querySelector(".menu-mobile");
let closebtn = document.querySelector(".close")
let edik = document.querySelector(".edik");
let second = document.querySelector(".second");
let first = document.querySelector(".first");
let third = document.querySelector(".third")
let menu = document.querySelector(".menuu-png");
let close = document.querySelector(".close");
let body = document.querySelector("body")
let about = document.querySelector('.open')
let aboutDropdown = document.querySelector('.about-dropdown')
menuBtn.addEventListener("click",function(){
    dropdown.classList.toggle("open")
    menu.classList.toggle("menu-img")
    document.body.classList.toggle("body")
})

about.addEventListener('click',function(){
    aboutDropdown.classList.toggle('bac-dropdown')
    about.classList.toggle('transform')
})