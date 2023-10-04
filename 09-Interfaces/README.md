# Interface

- Inferfaces serve almost the exact same purpose as type aliases.
- We can use them to create reusable, modular types that describe the shapes of objects.

```ts
interface Person {
    name: string;
    age: numbers;
}

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}!`;
}

sayHappyBirthday({name: 'Jerry', age: 42});
```