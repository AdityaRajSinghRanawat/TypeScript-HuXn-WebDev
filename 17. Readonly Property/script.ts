/*
  Readonly Properties:
    
  You can make a certain property readonly in an object type 
  by adding a readonly keyword before the property name.

  For example, let's say you have an object type for a person 
  with name, age, and email properties, but you want to 
  make the email property readonly. You can do this by 
  adding a readonly keyword before the email property.

  Now, when you create an object of type Person, 
  but you can't modify the email property.
*/

type Person = {
  name: string;
  age: number;
  readonly email: string;
};

function printPerson(myPerson: Person) {
  console.log(
    `Name: ${myPerson.name} , Age: ${myPerson.age}, Email: ${myPerson.email}`
  );
}

// define object to insert in the function
const myPerson: Person = {
  name: "Aditya",
  age: 19,
  email: "xyz@example.com",
};

// 1 (without "email")
printPerson(myPerson);

// Error: Can NOT modify
// myPerson.email = "pqr@example.com";

// Why this work then?
/*
  This line works because you are not modifying anything.
  You are creating a new object and passing it to the function.
*/
printPerson({ name: "Aditya", age: 19, email: "pqr@example.com" });
