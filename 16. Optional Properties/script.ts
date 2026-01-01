/*
  Optional Properties:
    
  You can make a certain property optional in an object type 
  by adding a question mark (?) after the property name.

  For example, let's say you have an object type for a person 
  with name, age, and email properties, but you want to 
  make the email property optional. You can do this by 
  adding a question mark after the email property:
*/

/*
  Now, when you create an object of type Person, you can choose whether or not to include the email property.
  1 const alice: Person { name: "Alice", age: 30 };
  2 const bob: Person = { name: "Bob", age: 25, email: "bob@example.com" };
  In this example, the alice object does not include the email property, while the bob object does. Because the email property is marked as optional in the Person type definition, it is valid to create objects with or without it.
*/

type Person = {
  name: string;
  age: number;
  email?: string;
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
};

// 1 (without "email")
printPerson(myPerson);

// 2 (with "email")
printPerson({ name: "Aditya", age: 19, email: "xyz@example.com" });


// Note:
/*
  2 Space Tab = for Web Dev      (since too nested)     [JS/TS/HTML/CSS]
  4 Space Tab = for AI/ML/Python (since python default) [Python/Java/C++/C]
*/