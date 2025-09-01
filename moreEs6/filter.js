const numbers = [3, 4, 2,10, 5, 16, 3, 9];

const greaterTen = numbers.filter(x => x > 100)
// console.log(greaterTen);

// even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);