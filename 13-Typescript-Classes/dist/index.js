"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this._gender = 'male';
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method!");
    }
    get getGender() {
        return this._gender;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
const elton = new Player("Elton", "Steele");
console.log(elton);
console.log(elton.fullName);
console.log(elton.getGender);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 999;
    }
}
const adminPlayer = new SuperPlayer("Admin", "Player");
console.log(adminPlayer);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
console.log(bike1);
const jacket1 = new Jacket("Prada", "Black");
console.log(jacket1);
jacket1.print();
// abstract classes ====================================
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyPay, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyPay = hourlyPay;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyPay * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
