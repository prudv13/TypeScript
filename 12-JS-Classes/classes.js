class Player {
    // class fields
    score = 0;
    numLives = 10;

    constructor(first, last){
        this.first = first;
        this.last = last;
        console.log("IN CONSTRUCTOR");
    }
    taunt(){
        console.log("BOOYA!")
    }
    loseLife(){
        this.numLives -= 1;
    }
}

const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);

console.log(player1);
