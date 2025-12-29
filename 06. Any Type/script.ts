/*
    Any Type:

    TypeScript has a special any type that can be 
    used to represent any type. 

    When a variable is annotated with the any type, 
    TypeScript will allow it to have any value and 
    disable all type checking for that variable and 
    its properties.
*/

/*
    Any Type (WARNING):

    While the any type can be useful in certain situations, 
    it should be used sparingly. Overuse of any can lead to 
    untyped code and make it harder to catch 
    type-related bugs during development. 
    
    It's generally better to use more specific types 
    whenever possible to get the benefits of 
    TypeScript's type checking.
*/

// ANY:
// Syntax: let myVar: any = value;

let color: any = "red";
color = 20;
color = true;
console.log(color);

// Error: these will not show error in compile time but in run time
// color.toUpperCase()
// color()

// that is why in some situation the any type is good 
// but sometimes it can cause the error