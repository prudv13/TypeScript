class Player {
    // class fields
    #score = 0; // private
    numLives = 10;

    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR");
    }
    getScore(){
        return this.#score;
    }

    setScore(newScore){
        this.#score = newScore;
    }

    taunt(){
        console.log("BOOYA!")
    }
    loseLife(){
        this.numLives -= 1;
    }

    // private method
    #secret(){
        console.log("SECRET!!!")
    }

    // getter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}

const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);

console.log(player1);

console.log(player1.getScore());
player1.setScore(20);
console.log(player1.getScore());

// get fullname
console.log(player1.fullName);