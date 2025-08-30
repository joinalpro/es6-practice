const {price, quantity, tax = 7} = {name: 'shirt', price: 500, quantity: 7}
// console.log(price, quantity, tax);

const device = {name: 'phone', brand: 'samsung', price: 3200}

const {brand} = device;
// console.log(brand);

const numbers = [25, 35, 45, 55]

const [first, second] = numbers;
console.log(first, second);

