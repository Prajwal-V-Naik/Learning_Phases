// Hoisting
// Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Call stack:-
// console.log(sum(b,c));
// var a = 10;
// console.log(a);
// var b = 12;
// var c = 15;
// function sum(a,b){
//     return d = a+b;
// }
// function sub(a,b){
//     return d = a-b;
// }
// console.log(sum(b,c));
// console.log(sub(a,b));


// function sum(){
//     var a = 10;
//     function sub(){
//         console.log(a);
//     }
//     sub();
// }
// sum();

// 
let sum = () =>{
    let a = 10;
    let sub = (parameter) =>{
        let c = parameter + a;
        let result = () =>{
            console.log(c);
        }
        result();
    }
    sub(a);
}
sum();

// Callback: a function which can act as parameter to other function.
const arr = [
    "Shive",
    "male",
    "Gun",
    "hun",
    "sun",
    "done"
];
const arr2 = new Array;
arr.forEach((e)=>{
    arr2.push(e);
});
console.log(arr2);

const arr3 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

const num = arr3.map((e)=>{
    return (e-(e*(e+e+e/e)/e))+e;
    });
console.log(arr3);
console.log(num);

const world =[
    "ind",
    "usa",
    "tsa",
    "can",
    "jpn"
];
const count = world.filter((world)=> world.includes("a"));
console.log(world.pop(count));

