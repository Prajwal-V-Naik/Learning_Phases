// Spread And Rest 
// This all are denoted by ... 
// When you sending dat is spreading data
// When accumulating data is called as rest.
// Both like same ...spread or ...rest
// Example

// Spread use case
function sumone(x,y){
    return x + y;
}
let vari = [5,7];
console.log(sumone(...vari)); // Spread sends all data to method here

// Rest use case
function sum(...args){ // Rest accumulate all data taken
    console.log(args); 
    let sum = 0;
    for(const x of args){
        sum = sum + x;
    }
    return sum;
}

console.log(sum(1,2,4,5,6,7,43,3,5,5,4,74,5,7,5,3,7,6,5,4,6,7,5,4,5,5));


// Try and Catch
try{
    console.log(first);
}catch (err){
    console.error(err.name);
}


// Different types of errors 
/*  - reference error
    - syntax error
    - type error
*/


// Promise
/*  -pending 
    -fulfilled
    -rejected
*/

// Event Loop
const userOne = () => {
    console.log("hello one");
};
const userTwo = () => {
    setTimeout(()=>{
    console.log("hello heeeeeeeee joke");
    }, 100000);
    console.log("hello two");

};
const userThree = () => {
    console.log("hello three");
};
userOne();
userTwo();
userThree();

