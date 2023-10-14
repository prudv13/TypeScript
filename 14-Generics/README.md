# Generics

Generics allow us to define reusable functions and classes that work with multiple types rather than a single type.

```ts
function wrapInArray<T>(element: T): T[] {
    return [element];
}
```

## Genrics Example
```ts
function identity<T>(item: T): T{
    return item;
};

console.log(identity<string>("Magician"));
console.log(identity<number>(13));
console.log(identity<boolean>(true));
```

## Genric Function Example
```ts
function getRandomElement<T>(list: Array<T>): T{
    const randIdx = Math.floor(Math.random()*list.length);
    return list[randIdx];
}

getRandomElement<string>(['hello', 'world']);
```