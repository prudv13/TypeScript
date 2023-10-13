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