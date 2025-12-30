/*
    Never:

    The never keyword is used to indicate that a function 
    will not return anything, or that a variable can 
    never have a value. 
    
    The never type is useful for indicating that 
    certain code paths should never be reached, or that 
    certain values are impossible. 
    
    It can help catch errors at compile-time instead of runtime.
*/

/*
    Used for:

    - A function that always throws an error
    - A function that has an infinite loop
    - A variable that can never have a value
*/

// 1. A function that always throws an error

function throwError(msg: string): never {
  // Wrong syntax:
  // return throw new Error(msg);
  throw new Error(msg);
}

// 2. A function that has an infinite loop

function infiniteLoop(): never {
  while (true) {
    // code
  }
}

// 3. A variable that can never have a value

let x: never;

/*

*/

function neverReturns(): never {
  throw new Error("Error");
}

// Error:
/*
    Editor will not show error but when this line will run
    then it will cause the compile time error
    because the function never returns.
*/
// x = neverReturns();
