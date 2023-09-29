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
## Anonymous Functions

When Typescript can infer how an unnamed function is going to be called, it can automatically infer its parameters types.

```ts
const numbers = [1,2,3];

// Contextual typing on an arrow function
numbers.forEach(num => 
    return num.toUppercase(); // Error
    // toUpperCase() doesn't work for nums
)
```

## Void Type

- Void is a return type for functions that don't return anything. It means just that - this function is void of any data.
- Typescript can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explicitly.

```ts
const annoyUser = (num: number): void => {
    for(let i=0; i<num; i++){
        alert('Hiiiiiiiiii !');
    }
}
```

## Never Type

- The never type represents values that NEVER occur.
- We might us it to annotate a function that always throws an exception, or a function that never finishes executing.
- With never, a function doesn't even finish executing

```ts
// A function that doesn't finish running
const neverStop = (): never => {
    while(true) {
        console.log("I'm still going!");
    }
}

// A function that throws an exception
const giveError = (msg: string) => {
    throw new Error(msg);
}
```