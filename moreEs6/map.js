// const numbers = [ 4, 6, 8, 2, 5, 8];
// const doubled = []

// for(const num of numbers){
//     const result = num * 2;
//     doubled.push(result)
// }

// const doubleIt = x => x * 2;
// const doubled = numbers.map(doubleIt)

// using arrow function inside map
// const doubled = numbers.map(x => x * 3);
// console.log(doubled);

// const fiveTimes = numbers.map( num => num * 5);
// console.log(fiveTimes);   

// const friends = ['nasir', 'rayhan', 'forhad'];
// const nameLengths = friends.map(name => name.length)
// const nameLetters = friends.map(name => name[0].toUpperCase())
// const result = numbers.map((num, i) =>{
//     console.log(num * i);
//     return num * i;
// })
// console.log(result);

const numbers = [ 5, 3, 7, 9, 1, 5, 3, 7];
const num = numbers.map(x=> x * 2);
// console.log(...num);

const threeTimes = numbers.map(num => num * 3);
// console.log(threeTimes);

const friends = ['nasir', 'rayhan', 'forhad'];
const allFnd = friends.map(name => name[0].toLocaleUpperCase())
console.log(allFnd);
