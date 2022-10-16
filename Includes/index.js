let numArray = [1,2,3,4,5];

// Includes will return a boolean value;
// It returns true when the value exists, and will return false when the value does not exist;
console.log(numArray.includes(0))
console.log(numArray.includes(2))
// ps: This is not supported by Internet Explorer;


// Old way using "indexOf":
// let numArray = [1,2,3,4,5];
// console.log(numArray.indexOf(0)) // return -1 because the value does not exist;
// console.log(numArrayOldWay.indexOf(2)) // return 1 because the value exists;