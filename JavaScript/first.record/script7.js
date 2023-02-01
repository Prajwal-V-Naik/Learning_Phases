// Scope chaining

var name =  "Prajwal";

console.log('Line 5',name);

function sayName(){
    var name = "hhhhh"
    console.log('line  9',name);
    sayNameTwo();
    function sayNameTwo(){
        var name = 'pppp'
        console.log('line 12', name);
    }
}
sayName();

// Where scope chaining means it takes the variable from its upper declaration part rather than it's lower it means consider a function which is inside another function and variable is declared at top most like first line , then calling that in that every function which sided by in-side then it takes upper most like by asking it's primary function whether you have any value to this called variable, if their it get from there otherwise that primary say catch that from upper one where it had declared.

// This is normally scope chaining.