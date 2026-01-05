/*
  Tuples:
  
  Tuple is a type that represents an array with a fixed number
  of elements, where each element can have a different type. 
  
  The order of the types in the tuple definition corresponds 
  to the order of the values in the actual array. 
  
  Tuples are similar to arrays, but they have a specific structure 
  and can be used to model finite sequences with known lengths.
*/

// Tuples:

let myTuple: [string, number] = ["hello", 42];
// Error:
// let myTuple: [string, number] = [42, "hello"];

console.log(myTuple[0]);
console.log(myTuple[1]);

// Destructuring Individual Elements:

let newTuple: [number, boolean, string] = [232, true, "hello"];

let [first, second, third] = newTuple;

console.log(first);
console.log(second);
console.log(third);

// Destructuring Arrays:

let myArray: (number | string)[] = [1, "hello", 37, "world", "bye"];
console.log(myArray);

let [firstItem, secondItem, ...rest] = myArray;
console.log(firstItem);
console.log(secondItem);
console.log(rest);
