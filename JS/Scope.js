//ALWAYS USE 
'use strict'

// let and const are block scopre
// only available in the block they're defined in

let age = 10;

let myFunction= () => {
    let adjustment = 5;
    age += adjustment;
};

myFunction();
console.log(age);

// will return adjustment is not defined because its not in the correct scope usage
// console.log(adjustment);

const numArray = [ 1,2,3,4,5,6,7,8,9];
const [a,b,c, ...theRest] = numArray;
console.log(a,b,c);
console.log(theRest);

const [x,,,y,z, ...theRest2] = numArray
console.log(x,y,z);
console.log(theRest2);