// Borrowing a method using bind

const PJ = {
    nickName : "PJ",
    firstName : "Prajwal",
    middleName : " V ",
    lastName : "Naik",
    role : "Admin",
    count : 3,
    getInfo : function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        His Login count ${this.count}
        `)
    } 
}

const rj = {
    firstName : "Radio",
    lastName : "Jayram",
    role: "Sub-ADmin",
    count: 15,
}
// PJ.getInfo();
// rj.getInfo();

// PJ.getInfo.bind(rj)();
var binds = PJ.getInfo.bind(rj);
// binds();



// call
 PJ.getInfo.call(rj);