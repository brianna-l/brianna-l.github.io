let body = document.body;

function turnOnLight() {
    body.classList.toggle("light");
    button.classList.toggle("buttonOn");
    console.log("light")
}
  
  let button = document.querySelector(".button");
  button.addEventListener("click", turnOnLight);

//

let X = Y = 0;
const Light = document.getElementById('flashlight')
document.addEventListener('mousemove',(e)=>{
    X = e.clientX
    Y = e.clientY
    Light.style.setProperty('--x',`${X}px`)
    Light.style.setProperty('--y',`${Y}px`)
})

const [min,max] = [5,20]
document.addEventListener('keyup',(e)=>{
    let R = Light.style.getPropertyValue('--r').replace(/\D/g,'')
    if(e.key == '[' && R > min){
        Light.style.setProperty('--r',`${--R}em`)
    }
    if(e.key == ']' && R < max){
        Light.style.setProperty('--r',`${++R}em`)
    }
    if(e.key === 'l'){
        Light.style.setProperty('--r',`-${min-1}`)
    }
})