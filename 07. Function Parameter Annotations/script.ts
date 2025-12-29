/*
    Function Parameters Annotations:
    
    Function parameter annotations in TypeScript are 
    used to specify the expected types of the parameters 
    that a function takes.
*/

// REGULAR FUNCTIOON:

function addNum(num: number) {
  return num + 1;
}

let result = addNum(10);
console.log(result);

// Error:
// let result = addNum("10");

// ARROW FUNCTIOON:

const double = (x: number, y: number) => x * y;
// direct way to retun value
// Note: do not use "{ }" in arrow function while not using return keyword

const res = double(2, 3);
console.log(res);

// Error:
// console.log(double(2, "3"));

// Note:
/* 
    TypeScript will give you warning if you provide 
    more or less than what you specified in your 
    parameter area.

    e.g.

    double(2, 3, 5);    // warning
    double(2);          // warning
*/
