# Union Types

Union types allow us to give a value a few different possible types. If the eventual value's type is included, Typescript will be happy.

We can create a union type by using the single " | " (pipe character) to separate the types we want to include. Typescript will enforce it.

```ts
const guessAge = (age: number | string) => {
    return "Your age is: " + age;
};

guessAge(30);
guessAge("28");
```

```ts
type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {
    x: 1,
    y: 34
};

coordinates = {
    lat: 321.213,
    long: 23.331
}
```

# Type Narrowing

Narrowing the type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number.

Since unions allow multiple types for a value, it's good to check what came through before working with it.

```ts
const isTeenager = (age: number | string) => {
    if(typeof age === "string") {
        age = parseInt(age);
        console.log(age > 12 && age < 20);
    }
    if(typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
}

isTeenager('20'); // false
isTeenager(13); // true
```

# Literal Types with Unions

Literal types are not just types - but the values themselves too! Combine it with something like unions and you can have fine-tuned type options for typescript to enforce.

```ts
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}.`;
}

giveAnswer("no");
giveAnswer("yes");
giveAnswer("maybe");
```