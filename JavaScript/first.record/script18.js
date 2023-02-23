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
}

module.exports = SomeNew;

const rock = new SomeNew("rock","rock@Gamil.com");
console.log(rock.getInfo());;
rock.enrollCourse("FSJS");
console.log(rock.getCourseList());
console.log(rock.courseList);