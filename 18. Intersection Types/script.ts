/*
  Intersection Types:

  An intersection type is a way to combine multiple types 
  into a single type that includes all the properties 
  and methods of each constituent type. 
  
  An intersection type is denoted by the "&"" symbol.
*/

type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  role: string;
};

type PersonAndEmployee = Person & Employee;

// Rohan vs rohan:-
/*
  Rohan: for Class
  rohan: for Object
*/
// this is a object instance
const rohan: PersonAndEmployee = {
  name: "Rohan",
  age: 23,
  id: 983,
  role: "Developer",
};

console.log(`Name: ${rohan.name}, Age: ${rohan.age}, ID: ${rohan.id}, Role: ${rohan.role}`)