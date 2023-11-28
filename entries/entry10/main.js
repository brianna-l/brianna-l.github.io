
let nav = document.querySelector(".nav");
nav.addEventListener("click", normal)

function normal() {
    nav.classList.toggle("normal");
    console.log("sink");
}


let body = document.body;

function turnOnLight() {
    body.classList.toggle("light");
    button.classList.toggle("buttonOn");
    console.log("light")
}
  
  let button = document.querySelector(".button");
  button.addEventListener("click", turnOnLight);
