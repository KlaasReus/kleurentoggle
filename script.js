const home = document.querySelector(".white")
const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")


hamburger.addEventListener('click', e => {
    menu.classList.toggle('menu')
})


home.addEventListener('click', e => {
    document.body.style.backgroundColor = "white";
    menu.classList.toggle('menu')
})

red.addEventListener('click', e => {
    document.body.style.backgroundColor = "red";
    menu.classList.toggle('menu')
})

yellow.addEventListener('click', e => {
    document.body.style.backgroundColor = "yellow";
    menu.classList.toggle('menu')
})

green.addEventListener('click', e => {
    document.body.style.backgroundColor = "green";
    menu.classList.toggle('menu')
})

blue.addEventListener('click', e => {
    document.body.style.backgroundColor = "blue";
    menu.classList.toggle('menu')
})

