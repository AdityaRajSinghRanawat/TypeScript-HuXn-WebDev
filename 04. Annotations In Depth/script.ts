/*
    Annotations:
    
    Annotations are used to specify the data type of a variable, 
    parameter, function return value, and other types of values.

    Annotations help developers catch errors early in development 
    by allowing them to specify what types of values can be assigned 
    to a given variable or passed as an argument to a function.
*/

// Syntax:
// let myVar: type = value

// STRING:

let myName: string = "HuXn WebDev";
myName = "Another Name";
console.log(myName);
// Error: if we write some other datatype then it will show error in compile time
// myName = 12;

// NUMBER:

let favNumber: number = 7;
favNumber = 2;
console.log(favNumber);
// Error:
// favNumber = "eleven";

// BOOLEAN:

let tsHard: boolean = true;
tsHard = false;
console.log(tsHard);
// Error:
// tsHard = 100;
// tsHard = "hello";
