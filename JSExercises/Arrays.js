// ALWAYS USE
'use strict'


// part 1 and 2 
let darthVader = new Object();

darthVader = { 
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true,
    Jedi: false
};

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.Jedi}`);


// part 3
// creating the array
let myArray = ["hello", "everyone"];
console.log(myArray.length);
// adds to the end of the array
myArray.push("GoodBye");
console.log(myArray.length);
// removes the first element of a array
myArray.shift();
for(let element of myArray) {
    console.log(element);
};