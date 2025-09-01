class Vehicle{
    constructor(type,brand, price){
        this.type = type
        this.brand = brand
        this.price = price
    }
    getThis(){
        console.log(this);
    }
    getPrice(){
        return this.price;
    }

}

const cart1 = new Vehicle('car','Honda' ,4000000)
const cart2 = new Vehicle('car','Toyota' ,5000000)

// cart1.getThis();
// console.log(cart2.getPrice());

const student = {
    name: 'nasir',
    score: 1000,
    getScore: function(){
        console.log(this);
    },
    getScoreArrow: () =>{
        console.log(this);
    }
}

student.getScore()
student.getScoreArrow()