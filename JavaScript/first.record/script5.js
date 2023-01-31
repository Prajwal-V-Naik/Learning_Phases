// Function
function helloJS(name){
    console.log("Hello I'm learning functions()");
    console.log(`Hello I'm learning ${name}`);

}
let n="callBackfunction";
helloJS(n);

function add(a,b,c){
    return a + b + c;
}
console.log(add(1,2,3));

var addition = add(4,5,6);
console.log(addition);


var  getUserRole = function(name , role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin with some access`;
        case "testrep":
            return `${name} is testrep will test the thing`;
        case "user":
            return `${name} is only a normal user`;
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("prajwal","testrep"));

