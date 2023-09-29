# Function Paramater Types

- In typescript, we can specify the type of function parameters in a function definition.
- This allows typescript to enforce the types for the values being passed into your function.
- Typing paramaters in just like typing variables.

```ts
const encourageStudent = (name: string) => {
    return `Hey ${name}, you're doing GREAT!`;
}

encourageStudent('Patrick');
```

## Default Paramaters

```ts
function greet (person: string = "stranger") {
    return `Hi there, ${person}`;
}

console.log(greet());
```

## Function Return Types

we can specify the type returned by a function. Even though Typescript can often infer this, I prefer the explicit annotations. Add the type annotation after the function paramater list.

```ts
function greeting(person: string = "stranger"): string {
    return `Hi there, ${person}`;
}

console.log(greeting());
```
