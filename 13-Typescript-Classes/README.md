# Annotaing Classes

```ts
class Player {
    first: string;
    last: string;

    score: number = 0;

    constructor(first: string, last: string){
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton", "Steele");
console.log(elton.score);
```

## Public Private Access specifiers

```ts
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
```

## Parameter Properties shorthand

```ts
class Player {
    public score: number = 0;
    private gender: string = 'male';

    constructor(public first: string, public last: string){}

    private secretMethod(): void{
        console.log("Secret Method!")
    }
}

const elton = new Player("Elton", "Steele");
console.log(elton);
```