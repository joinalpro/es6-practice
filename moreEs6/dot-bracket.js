const student = {
    name: 'Nasir',
    1: 50,
    'home-address': 'chariani',
    marks: 50,
    family: {
        title:'prodhania',
        // mother: {
        //     name: 'roshonara',
        //     age: 58
        // }
    }
}
// dot notation
const studentName = student.name
// console.log(student);

// bracket notation
const studentName2 = student['home-address']
// console.log(studentName2);


// loop
for(const key in student){
    const value = student[key]
}

const propName = 'marks';
// console.log(student[propName]);


// Optional chain ? if anything undefined he will stop immediately. when something or an item is not available in nested loop use this ? optional chain.

// console.log(student.name);
console.log(student.family.title);
console.log(student.family.mother?.name);

