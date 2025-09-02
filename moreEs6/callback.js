
const greet =(name, greetingMsg, callback)=> {
    console.log(`Hi, ${name}`);
    callback(greetingMsg)
}

const sayGreetings =(greetMsg)=>{
    console.log(greetMsg);
};


greet('Joinal', 'Good Evening', sayGreetings)