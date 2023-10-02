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