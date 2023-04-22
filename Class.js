class Cat {
    constructor(
        numberOfPaws,
        numberOfHead,
        numberOfTails,
        color,
        race,
        species
    ) {
        this.numberOfPaws = 0;
        this.numberOfHead = 0;
        this.numberOfTails = 0;
        this.color = "";
        this.race = "";
        this.species = "";
    }

    dropCupFroTable() {
        console.log("Pow!!!")
    };
    sayMew(situation) {
        console.log("meow x" + this.numberOfHead)
    };
    sleep();
    hunt();
    sleepButNot();
    tigidik();
}

let vasya = new Cat(4,3, 19, "хаки", "vasyan", "catButNot")

/*
class Cat {
    constructor(
        numberOfPaws,
        numberOfHead,
        numberOfTails,
        race,
        species
    ) {
        this.numberOfPaws = numberOfPaws;
        this.numberOfHead = numberOfHead;
        this.numberOfTails = numberOfTails;
        this.color = " Black";
        this.race = race;
        this.species = species;
    }

    dropCupFroTable() {
        console.log("Pow!!!")
    };
    sayMew(situation) {
        console.log("meow x" + this.numberOfHead)
    };
    sleep();
    hunt();
    sleepButNot();
    tigidik();
}

let vasya = new Cat(4,3, 19, "vasyan", "catButNot")
 */