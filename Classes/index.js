import { Animal, Cat } from './animal.js';

let cat = new Animal('Cat', 4);

console.log(cat.type);
console.log(cat.legs);

cat.legs = 3;
console.log(cat.legs);

cat.makeNoise();
cat.makeNoise('Meouw');

// return10 is static, so it's not necessary to create an instance of Animal class to call this function;
console.log(Animal.return10());

// using get method;
console.log(cat.metaData);

let newCat = new Cat('Cat', 4);
newCat.makeNoise();

console.log(newCat.metaData);