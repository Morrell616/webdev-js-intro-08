/*

// Prevent us from attempting to use variables
// that are not declared
"use strict"
let grades = [80, 92, 100, 67, 90];
let sum = 0;
for (let i = 0; i< grades.length; i++) {
    sum = sum + grades[i];
}
// or you can use a for...of
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);

let average = sum / grades.length;
console.log(average);

//here is same code with for of
let grades = [85, 90, 78, 92, 88];
let sum = 0;
for (let grade of grades) {
    sum += grade;
}

let average = sum / grades.length;
console.log(average);
[3, 5, 2, 9, 7, 3];
let total = 0;
for (let i = 0; i<numbers.length; i++) {
    total = total + numbers[i];
}
    let answer = total / numbers.length;
    console.log(answer);

let tens = [10, 20, 30, 40, 50, 60]
for (let i= 0; i< tens.length; i++)  {
    tens[i] = tens[i] + 10;
console.log(tens);
}
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
    // this creates a lof of each number in the array.
});

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
    // returns the number it is in the array and the type of fruit
});
*/