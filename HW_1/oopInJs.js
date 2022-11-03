class Animal {
    constructor(name, pet, vaccination){
        this.name = name;
        this.pet = pet;
        this.vaccination = vaccination;
    }

    getName(){console.log(this.name);
    }

    checkIfPet(){
      console.log(`${this.name} ${this.pet ? 'has an owner' : 'lives on the street'}`);
    }

    checkVaccination(){
      this.vaccination ? console.log(`Can be contacted with ${this.name}`) : console.log(`${this.name} is dangerous for people`);
    }

    sound(){
        console.log(`The ${this.name} can make sounds`);
    }
}

class Dog extends Animal{
    constructor(name, pet, vaccination){
        super(name, pet, vaccination)
    }

    sound(){
        console.log("Gaff");
    }

    dogCommand(command){
        switch(command){
            case 'Sit':
                console.log(`${this.name} is sitting`);
                break;
            case 'GivePaw':
                console.log(`${this.name} is giving a paw`);
                break;
            case 'Howl':
                console.log(`${this.name} is howls`);
                break;
            default:
                console.log("Unknown command!");
                break;
        }
    }  
}

class Rabbit extends Animal{
    constructor(name, pet, vaccination, color){
        super(name, pet, vaccination);
        this.color = color;
    }

    sound(){
        console.log("Piii-Piii");
    }

    getColor(){
        console.log(`${this.name} is ${this.color}`);
    }
}

class Mouse extends Animal{
    constructor(name, pet, vaccination){
        super(name, pet, vaccination)
    }

    sound(){
        console.log("Piiiiii");
    }

    favoriteFood(){
        console.log(`${this.name} loves eat chease`);
    }
}

function Cat(name, yearBith) {
    this.name = name;
    this.yearBith = yearBith;

    this.getName = () => this.name;
    this.getYearBith = () => this.yearBith;
}

Cat.prototype.info = function () {
    console.log(`The cat name is ${this.name}. He was born in ${this.yearBith} year`)
}
