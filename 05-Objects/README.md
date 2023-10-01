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

# Nested Objects

```ts
type Child = {
    name: string;
    age: number;
    parentNames:  {
        mom: string;
        dad: string;
    }
}

const describeChild = (child: Child) : string => {
    return `Child Name: ${child.name}, age: ${child.age}, Mother Name: ${child.parentNames.mom}, Father Name: ${child.parentNames.dad}`
}

const jimmy = {
    name: 'Jimmy',
    age: 10,
    parentNames: {
        mom: 'Lisa',
        dad: 'Jay'
    }
}
console.log(describeChild(jimmy))
```

# Optional Properties
An optional property in TypeScript is a property that is not required to be present on an object. This is useful for modeling data that may or may not be available, such as a user's profile information or the results of an API call.

To mark a property as optional in TypeScript, simply add a question mark (?) after the property name.

```ts
type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = {x: 1, y: 3};
```

# Read Only Modifier

The readonly modifier in TypeScript allows you to mark properties as immutable. Immutable properties cannot be changed after they are initialized. This can be useful for preventing accidental changes to important data, such as a user's ID or the current time.

To mark a property as readonly, simply add the readonly keyword before the property name.

```ts
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 12837,
    username: 'phoenix13'
}
```