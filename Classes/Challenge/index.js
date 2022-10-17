export class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi", "Argentina");
messi.introduce();


class TennisPlayer extends Player {
    constructor(name, country, age) {
        // The keywork "super" represents what is inside of the constructor of the parent class; 
        super(name, country);
        this.age = age;
    }

    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger = new TennisPlayer("Roger Federer", "Spain", 38);
roger.introduce();
roger.playTennis();