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