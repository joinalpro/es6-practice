// const myArray = [2, 3, 5, 3, 2]
// const newArray = [...myArray, 99]
// console.log(newArray);

const person = {name: 'joinal', age: 37}
const newPerson = {designation: 'dev', ...person}
// console.log(newPerson);


const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21)
const digits = [10, 10, 5, 5]
// console.log(total(...digits));

const myArray = [2, 3, 5, 33, 2]
const myMax = Math.max(...myArray)
console.log(myMax);