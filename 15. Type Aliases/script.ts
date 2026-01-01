/*
  Type Aliases:

  A type alias is a way to create a new name for an existing type. 
  It allows you to define a custom type that refers to another type 
  and give it a more meaningful or descriptive name.
      
  Type aliases are defined using the type keyword, 
  followed by the name of the alias, an equal sign (=),
  and the type it refers to.
*/

// convention is to start the type name with a Capital Letter
type Person = {
  name: string;
  age: number;
};

function printPerson(myPerson: Person) {
  console.log(`Name: ${myPerson.name} , Age: ${myPerson.age}`);
}

// define object to insert in the function
const myPerson: Person = {
  name: "Aditya",
  age: 19,
};

printPerson(myPerson);

// Error: it needs all the properties (key of objects)
// printPerson({ name: "Aditya" });
