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

class Dog extends Mammal {
    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }

    get dogBreed() {
        return this.breed;
    }

    set dogBreed(newBreed) {
        this.breed = newBreed;
    }

    describe() {
        return super.describe() + ` rasa to ` + this.breed;
    }
}


myMammal = new Mammal('Kot', 'kotowate');
myDog = new Dog('Nero', 'pies', 'owczarek');
myDogMammal = new Mammal('Reksio', 'pies');
console.log(myDog.describe());

myDog.animalName = 'Drops';
myDog.dogBreed = 'Labrador';
console.log(myDog.describe());
console.log(myMammal.describe());
console.log(myMammal.animalName);
console.log(myMammal.mammalSpecies);
console.log(myDogMammal.describe());

