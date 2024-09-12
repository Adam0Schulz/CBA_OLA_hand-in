
class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getCatData() {
        return "name: " + this.name + ", color: " + this.color + ", breed: " + this.breed;
    }

    changeCatName(newName) {
        this.name = newName;
    }

}

const floofy = new Cat('floofy', 'grey', 'the best breed');
console.log(floofy.getCatData());

floofy.changeCatName('Mr. Floofy');
console.log(floofy.getCatData());