class Player {
    protected score: number = 0;
    private _gender: string = 'male';

    constructor(public first: string, public last: string){
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void{
        console.log("Secret Method!")
    }

    get getGender(): string {
        return this._gender;
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

}

const elton = new Player("Elton", "Steele");
console.log(elton);
console.log(elton.fullName);
console.log(elton.getGender);


class SuperPlayer  extends Player{
    public isAdmin: boolean = true;
    maxScore(){
        this.score = 999;
    }
}

const adminPlayer = new SuperPlayer("Admin", "Player");
console.log(adminPlayer);

// classes and interfaces

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable {
    constructor(public brand:string, public color: string){}
    print(){
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red");
console.log(bike1);

const jacket1 = new Jacket("Prada", "Black");
console.log(jacket1);
jacket1.print();

// abstract classes ====================================


abstract class Employee {
    constructor(public first: string, public last: string){}
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number){
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private hourlyPay: number, private hoursWorked: number){
        super(first, last);
    }
    getPay(): number {
        return this.hourlyPay*this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());