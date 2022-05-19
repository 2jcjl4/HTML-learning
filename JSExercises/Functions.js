// ALWAYS USE
'use strict'

// Part 1
let subCal = (num1 ,num2) => num1-num2;
console.log(subCal(26,23));

// Part 2
let welcome = function(name,age,gender){
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
};
welcome("James",19,"Male");
// Part 3 
let powerUp = (n1,n2) => Math.pow(n1,n2);
console.log(powerUp(2,8));