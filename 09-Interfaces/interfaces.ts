interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 123, y: 1234};


// readonly, optional properties
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickName?: string;
    sayHi: () => string;
    sayHello(): string;
}

const thomas: Person = {
    id: 2134,
    first: "Thomas",
    last: "Hardy",
    sayHi: () => "Hi",
    sayHello: () => "Hello"
};