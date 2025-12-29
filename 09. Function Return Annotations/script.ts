// Return Annotations (Regular)

// REGULAR FUNCTIOON:

// Note:
// if you give any one parameter a type
// then you have to give type to all other parameters

// This will not give error:
/*
    function double(x: number, y: boolean) {
        return y;
    }
*/

// BUT, this will give error:
function double(x: number, y: boolean) : number {
    // Error:
    // return y;    // warning
    return x;
}
console.log(double(2, true));


// ARROW FUNCTIOON:

const checker = (x: number, y: boolean): number => x;

// Error:
// const checker = (x: number, y: boolean): number => y; 

const res = checker(2, true);
console.log(res);




