const mainBtn =document.querySelector("button");
// console.log(mainBtn)
const body = document.body;
const currentColor= document.querySelector(".current-color")

function generateRandomColor(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;


}

mainBtn.addEventListener("click",()=>{
    const randomColor=generateRandomColor();
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
})