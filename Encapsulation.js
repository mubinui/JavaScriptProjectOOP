class Person {
    #name;
    #birthday;
    #noOfMonths;
    #monthlySalary;
    constructor(name, birthday, noOfMonths, monthlySalary) {
        this.#name = name;
        
        this.#birthday = birthday;
        this.#noOfMonths = noOfMonths;
        this.#monthlySalary = monthlySalary;

    }

    calculate_age(){
        const diffMs = Date.now() - new Date(this.#birthday);
        const ageDT = new Date(diffMs);
        return Math.abs(ageDT.getUTCFullYear()-1970);
    }

    getSalary(){
        return (this.#monthlySalary*this.#noOfMonths).toLocaleString();
    }

}

const Mubin = new Person("Mubin", "1998-10-03",2, 2000000);
console.log(Mubin.calculate_age())
console.log(Mubin.getSalary())


// Are Keeping all the properties inside a capsule/ class, this is called encapsulation
// # says those properties are private 