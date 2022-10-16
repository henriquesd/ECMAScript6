export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    // Static allow us to create functions where we don't need to create an instance of the class
    // to use the function;
    static return10() {
        return 10;
    }

    // Get method is a property to only return some values;
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

// Inheritance;
export class Cat extends Animal {
    // constructor(type, legs, tail) {
    //     // "super" is used when constructor is being extended from the parent class;
    //     // "super" calls the function from the parent class;
    //     super(type, legs);
    //     this.tail = tail;
    // }

    makeNoise(sound = "meow") {
        console.log(sound);
    }
}