// ALWAYS USE USE STRICT 
'use Strict';

// does work but please dont put the function above where its defined 
myFunc(8,2,3);
console.log(myFuncWithReturn(2,3,5));

// function declaration
function myFunc(num1, num2, num3){
    console.log(num1 + num2 + num3);
};

function myFuncWithReturn(num1,num2,num3){
    return (num1+num2+num3);
}
