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


