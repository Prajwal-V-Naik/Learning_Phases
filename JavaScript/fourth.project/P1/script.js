const btn = document.getElementById("changer");
const rndColor = () => {
    let val = "0123456789ABCDEF";
    let cons = '#';
    for(let i =0 ;i<6; i++ ){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
function change(){
    document.body.style.backgroundColor = rndColor();
}
btn.addEventListener('click',change);


// My try for one color

// function change(){
//     document.body.style.backgroundColor = 'red';
// }