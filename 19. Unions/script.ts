/*
  Unions:

  Unions are used to declare a type that can have 
  one of several possible types. 
  
  Unions are useful when we want to allow 
  a variable or parameter to accept 
  multiple types.
  
  The syntax for defining a union type in TypeScript 
  uses the pipe symbol "|".
*/

// 1.
/*
  For example, if we want to define a variable 
  that can be either a number or a string, we would write:
*/
// Syntax:
/* 
  type varName : type1 | type2 | type3 = value;
*/

let password: string | number = "Aditya";
password = 12345;
// Error: boolean is not allowed
// password = true;

// 2.
/*
  We can also use unions with function parameters. 
  For example, if we have a function that accepts 
  either a string or an array of strings, 
  we could define its parameter like this:
*/
// Syntax:
/*
  function funcName (param: type1 | type2 | type3) {
    // function body
  }
*/

// # Object Literal Notation:

type UserInfo = {
  name: string;
  age: number;
};

type AccountInfo = {
  id: number;
  isActive: boolean;
};

// We must include all the properties of any one of the "types"
let user: UserInfo | AccountInfo = {
  name: "Aditya",
  age: 19,
  // or
  /*
    id: 123,
    isActive: true
  */
};

console.log(`Name: ${user.name}, Age: ${user.age}`);

// # Arrays:

// array of (number or string)
const items: (number | string)[] = [1, 2, 3, "hello"];
// Error: boolean is not allowed
// const items: (number | string)[] = [true];
console.log(items);

// # Function:

function printAge(userAge: number | string) {
  console.log(`Age: ${userAge}`);
}

printAge(19);
printAge("19");
// Error: boolean is not allowed
// printAge(true);

// # Function Parameters as a Object:

// But in a union type (A | B), you can only
// access properties that exist in both types.

type CourseInfo = {
  courseName: string;
  students: number;
};

type CourseTeacherInfo = {
  courseName: string;
  teacherName: string;
  experience: number;
};

function printName(user: CourseInfo | CourseTeacherInfo) {
  console.log(`Name: ${user.courseName}`);
}

// 3.
/*
  Unions can also be combined with other types in TypeScript, 
  such as interfaces and classes. 
  
  For example, 
  we could define an interface that has a property 
  that can be either a string or a number:
*/
// Syntax:
/*
  interface interfaceName {
    myProp: type1 | type2 | type3;
  }
*/

interface myInterface {
  age: number | string;
}

const myObj: myInterface = {
  age: 19,
};

console.log(`Age: ${myObj.age}`);
