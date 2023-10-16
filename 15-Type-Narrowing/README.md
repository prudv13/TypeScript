# Type Guards

typeof Type guards involve simply doing a type check before working with a value. Since unions allow multiple types for a value, we can first check what came through before working with it.

```ts
function triple(value: number | string){
    if(typeof value === 'number') return value*3;
    if(typeof value === 'string') return value.repeat(3);
};

console.log(triple("hi"));
console.log(triple(2));
```