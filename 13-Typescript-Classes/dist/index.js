"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.gender = 'male';
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method!");
    }
    get getGender() {
        return this.gender;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
const elton = new Player("Elton", "Steele");
console.log(elton);
console.log(elton.fullName);
console.log(elton.getGender);
