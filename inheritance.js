class Parent{
    constructor (){
        this.fatherName = "Bashar"
    }
}

class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
    getFullName (){
        return this.name + " "+this.fatherName;
    }
}
const baby = new Child("Joinal");
const baby2 = new Child("Abdullah");
console.log(baby.getFullName());
console.log (baby2.getFullName());