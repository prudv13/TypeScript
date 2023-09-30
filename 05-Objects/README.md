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

# Type Alias

Instead of writing out object types in an annotation, we can declare them separately in a type alias, which is simply the desired shape of the object.

This allows us to make our code more readable and even reuse the types elsewhere in our code.

```ts
type Person = {
    name: string;
    age: number;
}

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}!`;
}

sayHappyBirthday({name: 'Jerry', age: 42});
```