// Classes and modules
// Private props Getters And Setters
class SomeNew{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return {
            name: this.name,
            email: this.email
        }
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    login(){
        return "Hello logged in";
    }
}
// Inheritance
class SubAdmin extends SomeNew{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am sub admin";
    }
}

module.exports = SomeNew;

const rock = new SomeNew("rock","rock@Gamil.com");
// console.log(rock.getInfo());;
rock.enrollCourse("FSJS");
// console.log(rock.getCourseList());
// console.log(rock.courseList);


const tom = new SubAdmin("tom","tom@tom");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
