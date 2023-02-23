// Scope

// {} -> Empty scope but JS doesn't consider it as SCOPE
// JS consider functions as the scope 



/* console.log(name);
var name = "PJ"; --> obviously it gave undefined as the Output But we need to no what is the problem when we doing this means we need to know about error In case of backend let is more useful to know the actual error of the code */

/* console.log(first);
let first = "PPPPP";  this is going to gave a actual error which is happened before declaring a variable which is logged or called */


// Coming to scop
// if(true){
//     var first = "pppp";
//     console.log(first);
// }
// console.log(first);

// Whenever we going to use var it's going to act like global element which if you call outside of {} also get executed, like in above example it also logs the statement which is outside of if{} as pppp

// if(true){
//     let second = "ssss";
//     console.log(second);
// }
// console.log(second);
// When you use let the if you try to call or log it out side of {} then it shows the error, consider above example it gives output only which is inside of the if{} not outside , it shows error





// Template literal 
// ``
// var name = `Prajwal`;
// var full = `${name} V Naik`;
// console.log(full.includes("V"));



// Map() in JS

// var myMap = new Map();

// myMap.set(0, "Hai Hai Hai");
// myMap.set(1, "cuds");
// myMap.set(2, "tres");

// console.log(myMap);

// for (let key of myMap.keys()){
//     console.log(`${key} is key`);
// }

// for (let [key , value] of myMap){
//     console.log(`Key is ${key} and value is ${value}`);
// }
// In for of loop key first
// In for each loop value first


// Destructure The Data
// for Array
const user = ["Prajwal",8,"good"];
var [name,count,feel] = user;
console.log(count); // It gives 8 as answer by calling similar to both left hand and right hand side of array.

// For Object
const log = {
    userName: "you",
    logCount: 6,
    feels: "okay"
}

var {userName,logCount,feels}=log;
console.log(feels);// In object while destructuring the data the object name should be match with the created variable 
