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
