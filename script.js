const burgerMenuBtn = document.querySelector(".burger_menu")
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const burgerMenu = document.querySelector(".burger_menu")

burgerMenuBtn.addEventListener("click",()=>{
    header.classList.toggle("active")
})