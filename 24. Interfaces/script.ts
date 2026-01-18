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

// 1. Interface definition for object
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

// 2. Interface for function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 6));
console.log(subtract(10, 6));

// Example:

// object interface
interface Movie {
  name: string;
  year: number;
  introduce(): void;
}

// object implementation
const deamonSlayer: Movie = {
  name: "Demon Slayer",
  year: 2019,
  introduce() {
    console.log("Welcome to Demon Slayer!");
  },
};

// interface function usage
function introduceMovie(movie: Movie) {
  console.log(`${movie.name} was released in ${movie.year}`);
  movie.introduce();
}

introduceMovie(deamonSlayer);

// Example:

interface Song {
  name: string;
  artist: string;
  play(name: string, artist: string): string;
}

const song1: Song = {
  name: "Shape of You",
  artist: "Ed Sheeran",
  play: (name, artist) => {
    return `Playing ${name} by ${artist}`;
  },
};

console.log(song1.play(song1.name, "Ed Sheeran"));

// 3. Interface for class
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

// Example:

// interface
interface Place {
  name: string;
  location: string;
  printDetails(
    name: string,
    location: string,
    population: number,
    gdp: number,
  ): number | string;
}

// interface extending another interface
interface Country extends Place {
  population: number;
  gdp: number;
}

// object
const india: Country = {
  name: "India",
  location: "South Asia",
  population: 140, // in crores
  gdp: 4, // trillion USD
  printDetails(
    name: string,
    location: string,
    population: number,
    gdp: number,
  ): number | string {
    return `${name} is located in ${location} with a population of ${this.population} crores and a GDP of ${this.gdp} trillion USD.`;
  },
};

console.log(
  india.printDetails(india.name, india.location, india.population, india.gdp),
);

// Declaration merging:
/*
  Once an interface is declared, it cannot be directly modified. 
  
  However, TypeScript allows what is informally referred to as 
  "declaration merging" or "interface extension," which is often 
  misconstrued as "re-opening."

  Declaration merging in TypeScript refers to the ability to 
  extend or augment an existing declaration, including interfaces. 
  
  This can be useful when you want to add new properties or methods 
  to an existing interface without modifying the original declaration.
*/

// Original interface
interface Bike {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Bike {
  year: number;
  stop(): void;
}

// Usage of extended interface
const myBike: Bike = {
  brand: "Honda",
  year: 2020,
  start() {
    console.log("Bike started");
  },
  stop() {
    console.log("Bike stopped");
  },
};

myBike.start();
myBike.stop();
