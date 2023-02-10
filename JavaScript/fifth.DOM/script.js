var number = document.querySelector(".number");
var state = document.querySelector(".state");
// console.log(number);
// setTimeout(()=>{
//     number = number + 1;
// }, 2000);

let c =1;
setInterval(()=>{
    if(c<15){
        c++;
        number.innerText = c;
    }
},1000);

setTimeout( () =>{
state.innerText="You reached at last number";
},15000);