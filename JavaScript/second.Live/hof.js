// Higher Order Function

// function a(){
//     console.log('Haiiiiii');
// }
// function b(){
//     a();
// }
// b();

//  mini program

// const callback = (n) => {
//     return n * 2;
// };

// function cube(callback , n) {
//     return callback(n) * n;
// }

// console.log(cube(callback , 2));


// For Each

// const arr =  ['Hey','hello','dd','hhh','ooo'];
// arr.forEach( (val) => {
//     console.log(val);
// });
// forEach() is HOF, the () => {}inside it is callback 


// Another way
// arr.forEach(my);
// function my(v){
//     console.log(v);
// }


// SetTimeOut
// NewMethod
// setTimeout( () => {
//     console.log("Hello")
// }, 3000);


// Old methods
// function huu(){
//     console.log("loo");
// }
// setTimeout(huu , 3000);


// SetInterval
// setInterval(()=>{
//     console.log("❤️");
// },1000 );

// map

// const numbers = [1,2,3,4,5,6,7,8];
// const numsqu = numbers.map((num) => num * num);
// console.log(numsqu);

// numbers.map((num)=>{
//         squ = num*num;
//         console.log(squ);
//     });

// Filter
// const cc = ["USA","UAE","Japan","India","Maldives",'scotland','span',"man","lan","van","can"];
// const bc = cc.filter((v) => v.includes("ia"));
// console.log(bc);

// Reduce

// const nnn = [1,2,3,4,5,6,7,8,9];
// const sum = nnn.reduce((acc, curr) => acc + curr, 0);
// console.log(sum)



// Sort
// const dctnry =  ['kroger','fsd','greed','refs','reads','weeds','Ewes','elds','redes','weds'];

// console.log(dctnry.sort());
// console.log(dctnry.reverse());


// Destructuring and Spread and Rest

const sci = [2.72, 3.14, 9.81, 37, 100];
let [e , pi, gravity, bodytemp, boiltemp] = sci;

console.log(sci);
console.log(e , pi, gravity, bodytemp, boiltemp);


