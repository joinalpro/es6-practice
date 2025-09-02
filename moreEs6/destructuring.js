const arr = [2, 33, 65, 84, 89, 34, 57, 76]
const [one, two,three, ...rest] = arr;
// console.log(one, two ,three, rest);

const person = {
    name : 'nasir',
    age: 24,
    roll: 1,
    address: {
        city: 'chandpur',
        country: 'Bangladesh'
    }
};
const {name, age:myAge, address:{city, country}} = person
console.log(name, myAge, city, country);