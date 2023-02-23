// Spread or Rest
// ... this is spread or rest operator which changes automatically as per the situation 
// Then move towards behind the scene

function someOne(a,b){
    return a+b;
}
var myS = [3,6];
//console.log(someOne(myS)); // This going to do the function but can't return the value because it is not able to do 
// Now spread operator comes here to help us
console.log(someOne(...myS)); // Actually spread operator

function someTwo(...args){
// Above three dots behind args in parameter section leads to the rest operator , here  we have to consider those args as the object which should go under loop through
// here args convert individual number to an array
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(someTwo(4,5,7,4,4,6,3,5,45,3,6,4));


// More about these operator
function someThree(a, b, ...args){
    // Above three dots behind args in parameter section leads to the rest operator , here  we have to consider those args as the object which should go under loop through
    // here args convert individual number to an array
        let multi = a*b;
        let sum = 0;
        for (const arg of args) {
            sum += arg;
        }
        return [sum,multi];
    }
    
    console.log(someThree(4,5,7,4,4,6,3,5,45,3,6,4));