
// ALWAYS START WITH USE STRICT 
'use strict'

let A = 100;
let end = true;

// Part 1

while (end){
    if( A > 200){
        end = false;
    } else{
        console.log(A);
        A++;
    };
};



// Part 2
A = 100;
end = true;
while (end){
    if(A%2==0){
        console.log("-");
        A++;
    } else{
        console.log("*");
        A++;
    };

    if (A>200){
        end = false;
    };
};

// part 3 
for ( let i = 1; i<11; i++ ){
    for(let o = 1; o<11; o++){
        console.log(o);
    };
};
// part 4
for (let A = 100; A<200; A++){
    console.log(A);
};
// part 4 part 2
for (let B = 100; B<200; B++){
    if(A%2==0){
        console.log("-");
        A++;
    } else{
        console.log("*");
        A++;
    };
};

// part 5

// pinched this after 
let now = new Date();
let day = now.getDay();

// altered my code
console.log(day);
// switch(day){
//     case 1:
// }
