/*
  Objects:

  An object in TypeScript is a structured data type 
  that represents a collection of properties, 
  each with a key and an associated value. 
    
  The properties of an object can have specific types, 
  and the object itself can be annotated with a type, 
  often defined using an interface or a type alias. 
    
  TypeScript uses structural typing, meaning that the 
  shape of an object (its structure or properties) 
  is what matters for type compatibility.
*/

// Object Literal Notation:

// Syntax:
// type varName : {annotions/types} = {property:value}

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Aditya",
  lastName: "Ranawat",
  age: 19,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Object as function return value:

// Syntax:
// function functionName(): returnType { return {property:value} }

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Aditya",
    age: 19,
    // Error: if you add/remove keys less/more than the specified return type 
    location: "Asia",
  };
}

console.log(printUser());
