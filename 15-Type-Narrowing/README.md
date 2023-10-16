## Type Guards

typeof Type guards involve simply doing a type check before working with a value. Since unions allow multiple types for a value, we can first check what came through before working with it.

```ts
function triple(value: number | string){
    if(typeof value === 'number') return value*3;
    if(typeof value === 'string') return value.repeat(3);
};

console.log(triple("hi"));
console.log(triple(2));
```

## Truthiness Guards

Truthiness type guards involve checking a value for being truthy or falsy before working with it. This is helpful in avoiding errors when values might be null or undefined.

```ts
const printLetters = (word: string | null) => {
    if(!word){
        // if word is null, don't loop over it
        console.log('No word was provided.');
    }
    else {
        // only loop if word exists/is truthy
        for (const letter of word) {
            console.log(letter);
        }
    }
}
```

## Equality Narrowing

Wquality type gaurds involve comparing types to each other before doing certain operations with values. By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.

```ts
const someFunc = (x: string | boolean, y: string | number) => {
    if(x === y){
        // x and y are strings in this case
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}
```