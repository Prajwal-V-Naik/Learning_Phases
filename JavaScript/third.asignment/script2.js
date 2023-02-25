const obj = { a: 1, b: 2 };
const shallowClone = { 
    ...obj,
    c: 3
};
console.log(shallowClone);