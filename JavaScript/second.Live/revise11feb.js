// map => iterate over array and perform a action
// filter => iterate over array and filter out the element
//  reduce => do operation but out put should be a single value.

// const numbers = [1,2,3,4,5,6,7,8];
// const num = numbers.map((ele)=>{
//   return  (ele * ele * ele) / 2;
// });
// console.log(num);

// const count = ["india","finland","holland","badland","poland"];
// const counter = count.filter((val)=> val.includes("and"));
// console.log(counter);

// const numbers = [1,2,3,4,5,6,7,8];
// const num = numbers.reduce((acc,cur)=> cur+acc );
// console.log(num);

// Promise


// Fetch api
const url = "https://restcountries.com/v2/all";
fetch(url)
.then((response)=> response.json() )
.then((data)=> console.log(data))
.catch((err)=>console.log(err));