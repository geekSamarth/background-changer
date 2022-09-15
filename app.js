const button = document.querySelector('.btn')
const h1= document.querySelector('.heading')

button.addEventListener('click',function(){
    const newColor = makeRandomcolor();
    document.body.style.backgroundColor = newColor
    h1.innerHTML = newColor
})

function makeRandomcolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`
}