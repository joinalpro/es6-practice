function counter(){
    let count = 10;

    return function(){
        count += 1;
        console.log('Inside the inner function',count);
    }
}
const inF = counter()
console.log(inF());
console.log(inF());