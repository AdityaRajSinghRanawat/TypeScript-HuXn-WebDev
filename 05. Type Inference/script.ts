/*
    Type Inference:
    
    Type inference is a feature in TypeScript that allows 
    the compiler to automatically determine the type of 
    a variable based on its value. 
    
    In other words, if you declare a variable without 
    explicitly specifying its type, 
    TypeScript will try to infer the type based on 
    the value you assign to it.
*/

// INFERRING:

// here we are inferring the type!
let tech = "TypeScript";
let favNumber = 2;
let isHard = false;

console.log(tech, favNumber, isHard); // auto spaced

// Error: this will work fine with "js" and values will be changed but not in "ts"
// tech = true;
// favNumber = "eleven";
// isHard = 30;

console.log(typeof tech);
console.log(typeof favNumber);
console.log(typeof isHard);
