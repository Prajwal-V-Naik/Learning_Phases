// Coercion And Falsy Values And Truthy Values

// Falsy values
// Example
var you;

if(you){
    console.log('true');
}
else{
    console.log('false');
}
// Some other falsy are
// undefined
// null
// 0
// ''
// NaN

// Anything apart from this are truthy value



// Coercion
// '==' -> it checks whether given two values are equal or not but,
// '===' -> it checks strictly checks whether given numbers are equal and with their types are same
// Let example

var num = '3';
3 == num ? console.log('Yeah fine') : console.log("Yuck not fine");
3 === num ? console.log('Yeah fine') : console.log("Yuck not fine");