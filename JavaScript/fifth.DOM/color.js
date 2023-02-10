const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBackground = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor
}
// getBackground(pink);
// violet.addEventListener("mouseenter", ()=>{
//     center.style.background =  getBackground(violet);
// });
// red.addEventListener("click", () => {
//     center.style.background = getBackground(red);
// });
// pink.addEventListener("mouseleave", () => {
//     center.style.background = getBackground(pink);
// });
// var color = getBackground(orange); 
// Color changer
const changer = (e,color) => {
    return e.addEventListener("mouseenter", () => {
            center.style.background = color;
        });
}
changer(red,getBackground(red));
changer(cyan,getBackground(cyan));
changer(violet,getBackground(violet));
changer(orange,getBackground(orange));
changer(pink,getBackground(pink));