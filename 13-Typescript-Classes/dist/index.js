"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.gender = 'male';
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method!");
    }
}
const elton = new Player("Elton", "Steele");
console.log(elton);
