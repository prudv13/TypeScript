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


// --------------------------------------------

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    }
}

shoes.applyDiscount(0.4);

// --------------------------------------------

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};

// extending interfaces
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb finder" | "guide dog"
}


const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!"
    },
    job: "guide dog",
}