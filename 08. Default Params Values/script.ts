// This also works in JS:
// function greet(person = "Anonymous")

// Default Parameter Values:

function greet(person: string = "Anonymous") {
  return `Hello!, ${person}`;
}

console.log(greet());
console.log(greet("Aditya"));

// Error:
// console.log(greet(12));