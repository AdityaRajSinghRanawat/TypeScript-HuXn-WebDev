// Object Oriented Programming (OOP)

/*
  Class Properties Annotations:
  
  You can annotate class properties with a type. 
  This allows you to define the data type of the property 
  and ensure that it is always consistent
*/

// Class:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Objects:

let user1 = new Person("Aditya", 19);
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log();

let user2 = new Person("Rohan", 22);
// Error: we must pass all the constructor arguments
// let user2 = new Person("Rohan");
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log();

// Inheritance and Super Keyword:

class Employee extends Person {
  id: number;
  email: string;
  constructor(name: string, age: number, id: number, email: string) {
    // Error: 'super' must be called before accessing 'this' in the constructor of a derived class.
    super(name, age); // super keyword is used to call the constructor of the parent class
    this.id = id;
    this.email = email;
  }
}

let employee1 = new Employee("Aditya", 19, 123, "alpha@example.com");
// Error: we can not shuffle the arguments
// let employee1 = new Employee("Aditya", 19, "alpha@example.com", 123);
console.log(employee1);
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.id);
console.log(employee1.email);
console.log();

// Updation:

employee1.name = "Rohan";
console.log(employee1.name);
console.log();

// Read Only Properties:

class Vehicle {
  readonly name: string;
  readonly wheels: number;

  constructor(name: string, wheels: number) {
    this.name = name;
    this.wheels = wheels;
  }
}

let vehicle1 = new Vehicle("Bike", 2);
console.log(vehicle1);
console.log(vehicle1.name);
console.log(vehicle1.wheels);
console.log();
// Error: Cannot assign to 'name' because it is a read-only property.
// vehicle1.name = "Car";

// Access Modifiers:

/*
  In TypeScript, you can use access modifiers to control the 
  visibility of class members (properties and methods). 
  
  Access modifiers determine the ways in which class members 
  can be accessed from within and outside the class.
*/

/*
  There are three types of access modifiers in TypeScript:

  - Public
  - Private
  - Protected
*/

/*
  Public:

  Members marked as public can be accessed from anywhere, 
  both inside and outside the class.
*/
/*
  Private:

  Members marked as private can only be accessed from 
  within the class they are defined in.
*/
/*
  Protected:

  Members marked as protected can be accessed from 
  within the class they are defined in, as well as 
  any subclasses that extend the class.
*/

class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  // allowing export of "age" while its private
  protected getAge(): number {
    return this.age;
  }

  private getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    // we need to pass all the arguments required by the parent class constructor
    // becaus "Animal" class cannot be constructed without these values
    super(name, age, "Labrador");
  }

  // Error: {this.age} is private and cannot be accessed outside the Animal class
  // `${this.name} is a ${this.species} and is ${this.age} years old.`;

  // Solution: use the "getAge()" method which is protected and can be accessed in the subclass
  // `${this.name} is a ${this.species} and is ${this.getAge()} years old.`;
  public getNameAndSpecies(): string {
    return `${this.name} is a ${this.species}.`;
  }

  public getNameAndAge(): string {
    return `${this.name} is ${this.getAge()} years old.`;
  }
}

let dog1 = new Dog("Tommy", 2);

// member: name (public)
console.log(dog1.name);

// member: age (private)
// Error: age property is private
// console.log(dog1.age);
// Solution:
console.log(dog1.getNameAndAge());

// member: species (protected)
// Error: species property is protected, can not be accessed outside class or subclass
// console.log(dog1.species);

// function: getName (public)
console.log(dog1.getName());

// function: getSpecies (private)
// Error: getSpecies() is private, can not be accessed outside the Animal class
// console.log(dog1.getSpecies());

// function: getAge (protected)
// Error: getAge() is protected, can not be accessed outside class or subclass
// console.log(dog1.getAge());
// Solution: print member = species (protected) from subclass method
console.log(dog1.getNameAndSpecies());
console.log();

// Getters and Setters:

/*
  Getters and setters are used to access and modify class properties.

  Getters and setters allow you to define a property in a class that looks 
  like a simple variable from the outside but internally has additional logic 
  for getting and setting the value.
*/

class MyClass {
  // this "_" at start ensure that we do not confuse the member with the setter/getter method
  // Eg: this._myProperty vs this.myProperty
  // or calling recursion by mistake
  /*
    get myProperty() {
      return this.myProperty; // calls getter again -> infinite loop
    }
  */

  // In-Class Member Initializer (C++) / Class Field Declaration (JS)
  private _myProperty: number = 0; // set every new object value to be 0 by default

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}

let house1 = new MyClass();
console.log(house1.myProperty); // calls getter, output: 0
// Error:
// Because getters and setters are NOT functions.
// From the outside, they behave like properties, not methods.
// console.log(house1.myProperty(100));
// Solution:
house1.myProperty = 100; // calls setter
console.log(house1.myProperty); // calls getter, output: 100
