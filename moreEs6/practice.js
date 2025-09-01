// default parameter
function add(num1, num2 = 9){

}
const tax = 5000;
const student = {
    name:'nasir',
    marks: 50
}
const friends = ['nasir', 'rayhan', 'forhad']
// template string
const dynamicText = `My tax ${tax} and marks ${student.marks * 1.2} has friend: ${friends[0]}`

// console.log(dynamicText);

const innerHTML = `
    <div>
        <h1>Hello: ${friends.length} friends. </h1>
        <p>Say hello to your friends.</p>
    </div>
`
// console.log(innerHTML);

// arrow function
const add2 = (num1, num2 = 0) => num1 + num2;

const tenTimes = () => console.log('okay');
const fiveTimes = (x) => x * 10;
// console.log(fiveTimes(5));

// spread operator
const newFriends = [...friends, 'a.kadir']
console.log(newFriends);

// destructuring

const {marks: totalMarks, age = 0} = student
// console.log(totalMarks, age);

const [firstFriend] = friends
console.log(firstFriend);