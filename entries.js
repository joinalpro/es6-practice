const employee = {
    name: 'nasir',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

const keys = Object.keys(employee)
const values = Object.values(employee)
const entries = Object.entries(employee)

// console.log(keys);
// console.log(values);
// console.log(entries);

// freeze
Object.freeze(employee)

delete employee.experience
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
// console.log(employee);

// seal
Object.seal(employee)
console.log(employee);