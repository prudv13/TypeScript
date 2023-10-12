class Player {
    readonly first: string;
    readonly last: string;
    public score: number = 0;
    private gender: string = 'male';

    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void{
        console.log("Secret Method!")
    }
}

const elton = new Player("Elton", "Steele");
console.log(elton);