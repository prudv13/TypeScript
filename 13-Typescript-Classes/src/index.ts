class Player {
    public score: number = 0;
    private gender: string = 'male';

    constructor(public first: string, public last: string){
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void{
        console.log("Secret Method!")
    }

    get getGender(): string {
        return this.gender;
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

}

const elton = new Player("Elton", "Steele");
console.log(elton);
console.log(elton.fullName);
console.log(elton.getGender);