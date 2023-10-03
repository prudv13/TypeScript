# Tuples

- Tuples are a special type exclusive to typescript.
- Tuples are arrays of fixed length and ordered with specific types like super rigid arrays.

```ts
let myTuple: [number, string];

myTuple = [10, 'Typescript is fun!'];
```

```ts
type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, 'OK'];
const badResponse: HTTPResponse = [404, 'Not Found'];

const httpResponses: HTTPResponse[] = [[200, 'OK'], [404, 'Not Found']];
```