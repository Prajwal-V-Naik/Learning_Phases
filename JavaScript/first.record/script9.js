// Arrays in JavaScript

// () -> Parenthesis
// [] -> Bracket
// {} -> Curly bracket or Braces
var countries = ["India","USA","Japan","Russia"]; /* Normal array declaration method used from olden days.  */

var states = new Array("Karnataka","Rajasthan","Maharashtra","Assam"); /* Now days frequently used array declaration method.*/
// console.log(states[0]);

// console.log(states.length);

// states[4] = "Punjab";
// console.log(states);

var user = ["Prajwal","pj@gmail.com",3,6,true]; /* it csn hold any type of data inside array but it is not right  way to store */
// console.log(user);

user.pop();
// console.log(user);

user.unshift("NEW value");
// console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf(1))

console.log(Array.from("PRAJWAL"));
