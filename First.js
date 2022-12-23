// Array constructor with a single parameter :
// let myName = new Array("PRAJWAL");
// console.log(myName);

//Array constructor with multiple parameters :
// let myName = new Array('P','R','A','J','W','A','L',1,4,3,true);
// console.log(myName);

// Array literal notation:
// console.log(myName);
// let myName = ['P','R','A','J','W','A','L',1,4,3,true];

// Accessing
// console.log(myName[5]);

//Modifying
// let myName = ['P','R','A','J','W','A','L',1,4,3,true];
// myName[1]='S';
// console.log(myName);

//at()
// let myName = ['P','R','A','J','W','A','L',1,4,3,true];
// console.log(myName.at(3));
// console.log(myName.at(-3));

// concat()
// let vehicles = ['car','bike','auto','lorry','train'];
// let wheels = [4,2,3,6,'infinite'];
// let combine = vehicles.concat(wheels);
// console.log(combine);

//copyWithin()
//let number = [1,2,3,4,5,6,7,8,9,0];
//console.log(number.copyWithin(4));//Output:[1, 2, 3, 4, 1,2, 3, 4, 5, 6]
//Here 4 become targeted index, by default it takes 0th index element to copy in the targeted index.
//console.log(number.copyWithin(2,1));//Output:[1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
//Here 2 become targeted index and 1 is start element means which to be copied at targeted index.
//console.log(number.copyWithin(4,2,6));//Output:[1, 2, 3, 4, 3, 4, 5, 6, 9, 0]

// entries()
// let number = [1,2,3,4,5,6,7,8,9,0];
// let entry = number.entries();
// console.log(entry.next().value,entry.next().value,entry.next().value,entry.next().value,entry.next().value,entry.next().value);
// console.log(entry.next().value);

//fill()
// let message = ['I','really','to','know','that','how','fill','works'];
// console.log(message.fill('want'));//Output: [ 'want', 'want', 'want', 'want', 'want', 'want', 'want', 'want']
// console.log(message.fill(0,1));//Output:['I', 0, 0, 0, 0,   0, 0, 0]
// console.log(message.fill('coder',3,6));//Output:[ 'I','really','to','coder','coder','coder','fill',  'works' ]

// findIndex()
// let numbers = [1,2,3,4,5,6,7,8,9,0,12,23,34,45,56,67,78,89,90,123,234,345,456,567,678,789,890,901,012,1111,2222,3333,4444,5555,6666,7777,8888,9999,0000];
// console.log(numbers.findIndex(678));

//flat()
// let mix = ['1',3,5,[4,6,[5,6]],5];
// console.log(mix.flat());//Output: [ '1', 3, 5, 4, 6, [ 5, 6 ], 5 ]
// console.log(mix.flat(2));//Output:['1', 3, 5, 4, 6,   5, 6, 5 ]

// flatMap()
// let counts = [1,2,3,[4,5,[6,7,8,[9],10]],11,18,19];
// let perfect = counts.flatMap(num => num);
// console.log(perfect);//Output: [ 1, 2, 3, 4, 5, [ 6, 7, 8, [ 9 ], 10 ], 11, 18, 19 ]

//forEach()
// let words = ['iNeuron','HashnodeBlog','blog','coder','IWriteCode'];
// words.forEach(word => console.log(word));
// output:
// iNeuron
// HashnodeBlog
// blog
// coder
// IWriteCode

// indexOf()
// let wordsandnumbers = ['iNeuron','HashnodeBlog','blog','coder','IWriteCode'];
// console.log(wordsandnumbers.indexOf('coder'));//Output:3
// console.log(wordsandnumbers.indexOf('prajwal'));//Output:-1

// join()
// let mine = ['I','Love','Coding'];
// console.log(mine.join(''));//Output:- ILoveCoding
// console.log(mine.join('-'));//Output:- I-Love-Coding

// map
// let cringe = [1,4,5,6,7,8];
// let squares = cringe.map(items => items*items);
// console.log(squares);//Output:-[ 1, 16, 25, 36, 49, 64 ]

// pop()
// let deleteLast = [1,5,3,7,9,6];
// console.log(deleteLast.pop());//Output:-6
// console.log(deleteLast);//Output:-[ 1, 5, 3, 7, 9 ]

// push()
// let addCorrect = [2,4,6];
// addCorrect.push(8);
// console.log(addCorrect);//Output:-[ 2, 4, 6, 8 ]