// Interface:
/*
  Interface is a way to define a contract for the shape of an object. 
  It specifies the properties and their types that an object must have. 
  Interfaces are a powerful tool for enforcing a certain structure in your code.
*/

/*
  While interfaces are commonly used to define the structure of objects, 
  they are not limited to just objects. 
  
  Interfaces in TypeScript can also be used to describe the shape 
  of functions and classes.
*/

// Interface definition for object
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Usage
const examplePerson: Person = {
  firstName: "Arjun",
  lastName: "Kumar",
  age: 30,
};

// Interface for function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 6));
console.log(subtract(10, 6));

// Interface for class
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  start() {
    console.log("car started");
  }

  stop() {
    console.log("car stopped");
  }
}

// Usage
const myCar = new Car();

myCar.start();
myCar.stop();
