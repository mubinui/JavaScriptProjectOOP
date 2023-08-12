class Player {
    #name;
    #age;
    constructor(name,age) {
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails(){
        return `${this.#name} is this ${this.#age} years old `
    }

}


class Cricketer extends Player {
    #centuries;
    constructor(name, age, centuries) {
        super(name, age);
        this.#centuries = centuries;
    }

    getPlayerDetails() {
        return super.getPlayerDetails()+ `and he has ${this.#centuries}`;
    }
}


const Mubin = new Cricketer("Mubin",24, 1000);
console.log(Mubin.getPlayerDetails())
