const findMax = (...rest)=>{
    // console.log(rest);
    const maxNumber = Math.max(...rest)
    // console.log(maxNumber);
    return maxNumber;
}

// const arr = [22, 44, 22, 66, 88, 55]
console.log(findMax(22, 44, 22, 66, 88, 55));
