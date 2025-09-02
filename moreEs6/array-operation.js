const arr = [ 10,22, 44, 21, 51, 62, 777, 33, 23];

// for of just loop iterate
for(const item of arr){
    // console.log(item);
}

// for each
// arr.forEach(item => console.log(item));

const updateArray = arr.map(num => num * 2 );
console.log(updateArray);