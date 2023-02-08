console.log(this);

let u = {
    u: "I",
    L: "L",
    i: "U",
    full : function(){
        console.log("Line 8",this.u);
        function check(){
            console.log("line 10", this);
        }
        check();
    }
};
u.full();