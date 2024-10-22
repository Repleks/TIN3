class Animal {
    constructor(name) {
        this.name = name;
    }

    get animalName() {
        return this.name;
    }

    set animalName(newName) {
        this.name = newName;
    }

    describe() {
        return `To jest `+ this.name;
    }
}

class Mammal extends Animal {
    constructor(name, species) {
        super(name);
        this.species = species;
    }

    get mammalSpecies() {
        return this.species;
    }

    set mammalSpecies(newSpecies) {
        this.species = newSpecies;
    }

    describe() {
        return super.describe() + ` rodzaj to ` + this.species;
    }
}

myAnimal = new Animal('Kot');
console.log(myAnimal.describe());
console.log(myAnimal.animalName);
myAnimal.animalName = 'Pies';
console.log(myAnimal.animalName);
myMammal = new Mammal('Kot', 'kotowate');
myDogMammal = new Mammal('Reksio', 'psowate');
console.log(myMammal.describe());
console.log(myMammal.animalName);
console.log(myMammal.mammalSpecies);
myMammal.mammalSpecies = 'ryba';
console.log(myMammal.describe());
console.log(myDogMammal.describe());

