// Arrays in JavaScript

// () -> Parenthesis
// [] -> Bracket
// {} -> Curly bracket or Braces
// var countries = ["India","USA","Japan","Russia"]; /* Normal array declaration method used from olden days.  */

// var states = new Array("Karnataka","Rajasthan","Maharashtra","Assam"); /* Now days frequently used array declaration method.*/
// console.log(states[0]);

// console.log(states.length);

// states[4] = "Punjab";
// console.log(states);

// var user = ["Prajwal","pj@gmail.com",3,6,true]; /* it csn hold any type of data inside array but it is not right  way to store */
// console.log(user);

// user.pop();
// console.log(user);

// user.unshift("NEW value");
// console.log(user);

// user.shift();
// console.log(user);

// console.log(user.indexOf(1))

// console.log(Array.from("PRAJWAL"));

// Arrow function

// function isEven (element){
    // Okay 
    // if(element % 2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    // better means in term of shorter
    // return element % 2 === 0;
// }
// console.log(isEven(9));

// Arrow function

// var isEven = (e) => {
//     return e % 2 === 0;
// }
// console.log(isEven(2));

// Callback function

// var result = [2,6,4,8].every((e) => (e % 2 === 0));
// console.log(result);

// Fill and Filter
// fill

// var arr = [1,5,6,9,8,9,5,6,8,4,5,8,5,2];
// fill
// console.log(arr.fill("p",2,6));
// filter
// const numbers = [23,56,78,89,23,45,6,778,9,23,56,78,2,3];
// console.log(numbers.filter((number) =>number>56 ));


// Slice And Splice

var use = ["tim","tem","ttm","tom","tgm","tfm","tdm","tfm","twm"];
// console.log(use.slice(use.length - 1));
console.log(use.length);
use.splice(1,5,"hi","bye");
console.log(use);
console.log(use.length);
