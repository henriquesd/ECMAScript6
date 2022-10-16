// padStart/padEnd add values to the start/end of string, depending on how long the string is;

let exampleName = 'Henrique';
console.log(exampleName.padStart(10, 'a'));
console.log(exampleName.padEnd(10, 'a'));

// In the example below, there is no room available to add value, so will not add any value;
let exampleFullName = 'Henrique Siebert Domareski';
console.log(exampleFullName.padStart(10, 'a'));
console.log(exampleFullName.padEnd(10, 'a'));