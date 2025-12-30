/*
    Arrays Types:

    Arrays are a type of object that can store 
    multiple values of the same data type. 
    
    Arrays in TypeScript are typed, which means you can 
    specify the type of values that an array can hold.
*/

/*
    2 Types Of Arrays:

    - Using the square bracket notation [] to indicate an array of a specific type
    - Using the generic Array<type> notation to indicate an array of a specific type
*/

// 1. [] Notation: MODERN SYNTAX

// Syntax:
// let myArray: type[] = [value1, value2, value3];

const num: number[] = [1, 3, 4];
// Error:
// const num: number[] = [1, true, "hello"];
console.log(num);

const arr: number[] = [];
arr.push(40);
arr.push(38);
arr.push(21);
// Error:
// arr.push("eleven");
console.log(arr);
// 2. Array<type> Notation: OLD SYNTAX

// Sybtax:
// let myArray: Array<type> = [value1, value2, value3];

const nums: Array<string> = ["Aditya", "Aryan", "Rahul"];
// Error:
// const nums : Array<number> = [1, true, "hello"];
console.log(nums);

// Note:

// number:  type
/* 
    "number" is a primitive type in TypeScript (and JavaScript).
    This is how 99% of TypeScript codebases write their code.
*/

// Number:  class
/*
    "Number" is equivalent to => new Number(1)
    JavaScript almost never uses Number objects explicitly
    It can cause bugs since it confuses the JS engine.
*/
