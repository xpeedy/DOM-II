// Your code goes here
let navbutton = document.querySelector(".nav")

navbutton.addEventListener("mouseover", function(event){
    event.target.style.color = "red"
})

navbutton.addEventListener("mouseout", function(event){
    event.target.style = navbutton 
})

let images = document.querySelectorAll(".img-content")

images.forEach((element)=>{
    element.addEventListener('dblclick', (event =>{
       event.target.style.transform = "scale(1.5)"
       event.target.style.transition = "all 0.3s"
    }))
})

images.forEach((element) => {
    element.addEventListener("click", (event => {
        event.target.style.transform = "scale(1.0)"    
    }))
})

let funBus = document.querySelector("h1")
document.addEventListener("keydown", function(){
    funBus.textContent = "hello World"
})

document.addEventListener("keyup", (event) => {
    funBus.textContent = "Fun Bus";
})


let h2 = document.querySelectorAll("h2")
h2.forEach((element) => {
    document.addEventListener("scroll", function(){
    element.textContent = "GO GO GO!!"
    })
})

h2.forEach(() => {
    document.addEventListener("copy", (event) => {
        event.target.style.color = "white"
    })
})

document.addEventListener("drag", function(event) {
    event.target.style.opacity = .5;
}, false);



const button = document.querySelectorAll(".btn")
button.forEach((btn) => {
    btn.addEventListener("wheel", (event) => {
        event.target.style.background = "red"
    })
})




