/*
  Literal Types:
  
  Literal types allow you to specify a value that 
  can only be one specific literal value. 
  
  This means that a variable with a literal type 
  can only have one specific value and no other.
*/

// 1. String Literal Type:

let color: "red" | "green" | "blue";
color = "red"; // valid
// Error:
// color = "pink";

let password: "secretPassword" = "secretPassword";
// Error:
// password = "newPassword";

// 2. Boolean Literal Type:

let isTrue: true;
isTrue = true; // valid

// Error:
// isTrue = false;
// isTrue = "eleven";

// 3. Numeric Literal Type:

let number: 1 | 2 | 3;
number = 1; // valid

// Error:
// number = 5;
