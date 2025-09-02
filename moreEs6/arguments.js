function add(a, b){
    console.log(arguments);
    const para = [...arguments]
    console.log(para);
}
add(44, 66, 34, 87)