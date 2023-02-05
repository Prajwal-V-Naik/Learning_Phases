// Some concept about hoisting. 

tipper("80");
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
// If we declaring above type function then we can call anywhere of js file 
// Above is normal function


// Bellow is variable function
var bigtipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigtipper("400");
// But in this above type of function declaration we should call the function after the function declaration.

console.log(name);
var name  = "Prajwal";
// This some part of hoisting where a log find the variable name but it says 'Undefined' where because it can't find the assigned variable.


function sayName(){
    var name = "Mr.P";
    console.log(name)
}
sayName();
console.log(name);

// 85
// 415
// undefined
// Mr.P
// Prajwal

// We get above this output when we run it but as usual we get that two numbers from function tipper and bigtipper but when it came to line number 18 console then it returns undefined, because reason provided above, but when comes to 27 and 28 it says perfect console log which should be shown as perfect. 