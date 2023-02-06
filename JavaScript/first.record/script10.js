// Objects in JavaScript - class one
// var firstObject = {
//     objName : "Bike",
//     company : "TVS",
//     wheels : 2,
//     model : 2010,
//     expired : true

// };



// console.log(firstObject.model);
// console.log(firstObject["company"]); // sTRANGE AND NEVER LIKE to use this thing 

// firstObject.model = 2020;
// console.log(firstObject.model);
// console.table([firstObject]);

// Object-Class two

var firstObject = {
    objName : "Bike",
    company : "TVS",
    wheels : 2,
    model : 2004,
    expired : true,
    probCosts : [],
    calculation: function (modelNumb){
        if(modelNumb > 2005){
            this.probCosts.push("50k");
            this.probCosts.push("60k");
            this.probCosts.push("70k");
        }else{
            this.probCosts.push("40k");        }
    },
    getCost : function (){
        return `${this.company} ${this.objName} can sale for these amount breaks. Are: ${this.probCosts}`;
    }
};
// console.log(firstObject.getCost());
firstObject.calculation(firstObject.model);
console.log(firstObject.getCost());
// console.table([firstObject]);

