# Objects

Objects can be typed by declaring what thae object should look like in the annotation.

Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!

```ts
function printName(person: {first: string, last: string}): string{
    return `Person Name : ${person.first} ${person.last}`
}

printName({first: "Thomas", last: "Jenkins"})
```

```ts
let coordinate: {
    x: number;
    y: number
} = {
    x: 34,
    y: 2,
}
```

```ts
function randomCoordinate(): {x: number, y: number} {
    return {
        x: Math.random(),
        y: Math.random()
    }
}

randomCoordinate();
```