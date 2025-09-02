
const name = 'Rashed'
if(true){
    const data = 55;
    console.log(data, name);
    doMath( 8, 9)
}

// function/local scope
function doMath(a, b){
    const sum = a + b;
    console.log(sum);
    function doubleIt(x){
        return x * 2;
    }
    // console.log('calling double It ',doubleIt(450));
}

    console.log('calling double It ',doubleIt(450));
