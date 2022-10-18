// The Set object lets you store unique values of any type, whether primitive values or object references.
// Creating a unique list;
const exampleSet = new Set([1,1,1,1,2,2,2,2,3]);

console.log(exampleSet); // Result is Set;
console.log(exampleSet.size); // Result is 3;

exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.size); // Result is 5;

console.log(exampleSet.delete(5)); // Result is true, because 5 exists in the variable value;
console.log(exampleSet.size); // Result is 4;

console.log(exampleSet.has(1)); // Result is true, cause 1 exists in the variable value;

exampleSet.clear();
console.log(exampleSet.size); // Result is 0;