'use sctrict';


// JS object literal notation
// Object       // KEY    // Value    // KEY    // Value
let person = {  firstName:  "James",  lastName:   "Long", age: 19  };

// Can be split any way
let person2 = {  
    firstName:  "Rowan", 
     lastName:   "Whittaker",
    age:  32 };



// create empty object
let richard = new Object();
// adding information to a object ( constructor )
// use '[]'
richard["firstName"] = " Richard";
richard["number"] = " 0121601";
richard["age"] = 30;

console.log(`${person.firstName}'s age is: ${person["age"]}`);

// Expando property
// just adds the property even if it doesnt have it
// will not create a object ( person ) if it doesn't exist if 'strict mode' isnt enabled at the top
person.isAwesome = true;

// for in loop
// lopp through the values of an object
for ( let key in person){
    console.log(`${key}: ${person[key]}`);
}

// for of loop
// this will loop through the values of an object 
for ( let value of Object.values(person)){
    console.log(value);
}