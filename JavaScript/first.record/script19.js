// import SomeNew from "./script18";   
const SomeNew = require("./script18.js");
const prajwal = new SomeNew("pRAJWAL","prajwal@gmail.com");
console.log(prajwal.getInfo());
prajwal.enrollCourse("reactJS");
prajwal.enrollCourse("Javascript");
console.log(prajwal.getCourseList());

let courses = prajwal.getCourseList();
courses.forEach((element) => console.log(element));