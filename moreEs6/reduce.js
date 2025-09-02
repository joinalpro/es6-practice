// Reduce

const arr = [ 10,22, 44, 21, 51, 62, 777, 33, 20];

const summ = arr.reduce((acc, curr)=> {
    return acc + curr;
}, 0)

console.log(summ);