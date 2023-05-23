// primitive data type
let word = 'javascript';
console.log(word[2]);  
word[0] = 'J'; // it will be no replaced
console.log(word);  

let num1 = 1;
let num2 = 1;
console.log(num1 == num2);

let str1 = 'javascript';
let str2 = 'python';
console.log(str1 == str2);

// non-primitive 
let arr = [1, 2, 3];
console.log('arr length is = ' + arr.length);
console.log(arr[1]);
console.log(arr);

let userOne =  {
    name: 'Sagar',
    age: 22,
    country: 'Bangladesh'
}
console.log(userOne);

// const Pi = 3.14;
// console.log(Pi);
// this will give an error const variable can not be changed
// Pi = 9.14;
// console.log(Pi);

// Math Object
const pi = Math.PI;
console.log(pi);
console.log(Math.round(pi));
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.min(1,10,-2, -5, 100, 5));
console.log(Math.max(1,10,-2, -5, 100, 5));

// random function
const randomValue = Math.random();
console.log(randomValue);

const randomValue1 = Math.floor(Math.random() * 10); // random between 0 to 10
console.log(randomValue1);

console.log(Math.sin(0));

let firstName = 'sagar', space ='', lastName = 'Karmoker';
console.log(firstName, space, lastName);

// Literal 
let n1 = 1;
let n2 = 2;
console.log(`Sum = ${n1 + n2}`); // different syntax for `${expression}`

// Example
let pName = 'sagar';
let age = 22;
let country = 'Bangladesh';
let city = 'Patuakhali';

let all = `My Name is ${pName} and my age is ${age}. I live in ${city} and my country is ${country}`;
console.log(all);

let a = 1;
let b = 2;
console.log(`Here a = ${a} and b = ${b} and check for a > b ==> ${a > b}`);