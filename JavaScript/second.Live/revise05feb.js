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