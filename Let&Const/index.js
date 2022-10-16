
if (false) {
    var exampleVar = 5;
}
// This will print "null":
console.log(exampleVar);
// This is how JS understands:
/*
var example;

if (false) {
    example = 5;
}
*/



// "let" is a structure version of "var", in which it is uses block scope;
if (false) {
    let exampleLet = 5;
}
// this will not work because let is not defined here:
// console.log(exampleLet)

// This is how JS understands:
/*
if (false) {
    let example = 5;
}
*/



const exampleConst = 5;
// exampleConst = 10; // this does not work cause const value cannot be changed;
console.log(exampleConst);

const exampleArray = [];
exampleArray.push(5);   // this works, the value will be added in the array;
// exampleArray = 3;    // this does not work;
console.log(exampleArray);

const exampleObject = {};
exampleObject.firstName = 'Henrique'; // this works, the value will be added in the array;
console.log(exampleObject);

// With "const" we can modify objects and arrays, but we cannot override the data types
// and cannot change the primitive values (numbers, strings, booleans);