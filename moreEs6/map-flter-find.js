const students = [
    {id: 1, name: 'nasir', marks: 99},
    {id: 1, name: 'rayhan', marks: 85},
    {id: 1, name: 'forhad', marks: 48},
    {id: 1, name: 'green', marks: 30},
]

const names = students.map(student => student.marks * .75)
const goodStd = students.filter(student => student.marks > 80)
const goodStdFirst = students.find(student => student.marks > 80)
console.log(goodStdFirst);