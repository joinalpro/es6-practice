// function declaration
function add(num1, num2) {
  return num1 + num2;
}
// console.log(add(11, 11));

// function expression
const addition = function (num1, num2) {
  return num1 + num2;
};
// const result = addition(3, 4);
// console.log(result);

// arrow function

const sum = (num1, num2) => num1 + num2;
// const result = sum(4, 4);
// console.log(result);

const multiply = (num1, num2) => num1 * num2;
// const result = multiply(4, 4);
// console.log(result);

// multiline arrow function

const doMath = (x, y) => {
  const makeDouble = x * 2;
  const myDouble = y * 2;
  const result = makeDouble + myDouble;
  return result;
};
console.log(doMath(3, 5));
