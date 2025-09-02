const obj = {
    name: 'nasir',
    age: 23
};

const obj2 = {...obj}
obj2.name = 'patwary'
console.log(obj2);
console.log(obj);