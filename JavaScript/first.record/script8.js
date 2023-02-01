// This key word

console.log(this);

var game = "BasketBall";
function sayName(){
    var name = "PP";
    console.log(this);
} 
sayName();

// This gives access two global context and global context differ in cases, in case of node it gives empty scope, in the case of browser it gives access to  window object.

// Here in above example we get only empty scope because it is running on node