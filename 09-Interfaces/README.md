# Interface

- Inferfaces serve almost the exact same purpose as type aliases.
- We can use them to create reusable, modular types that describe the shapes of objects.

```ts
interface Person {
    name: string;
    age: numbers;
}

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}!`;
}

sayHappyBirthday({name: 'Jerry', age: 42});
```

## Read-Only, Optional Properties in Interface
```ts
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
```

## Interface Method Parameters

```ts
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
```

## Multiple Inheritance

```ts
interface Individual {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Individual, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["english", "french"]
};
```