// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)  // Tesla
// console.log(otherRandomCar) // Mercedes

// // #2

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// //console.log(name); // Error
// console.log(otherName); // Elon

// // # 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
console.log(hashedPassword);  // Undefined

// #4 

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; // numbers = (first)2
// const [,,,second] = numbers; // numbers = (second)5 
// const [,,,,,,,,third] = numbers; // numbers = (third) 2
// //Predict the output
// console.log(first == second); // false
// console.log(first == third);  // true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;  // value
const { secondKey } = lastTest; // contents of the array secondKey[1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; // 5
//Predict the output
console.log(key); // value
console.log(secondKey); // contents of the array secondKey[1,5,1,8,3,3]
console.log(secondKey[0]); //1
console.log(willThisWork); // 5