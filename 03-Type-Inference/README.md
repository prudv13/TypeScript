# Type Inference

- refers to typescript compiler's ability to infer types from certain values in your code.
- Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.

## String
```ts
let tvShow: string;
tvShow = "The Chef's Table";
tvShow = "The Witcher";

let myName = 'prudhvi';
myName = '';
```
## Numbers
```ts
let cost = 2000;
cost = 5000;
```

## Boolean
```ts
let isFunny: boolean;
isFunny = true;
isFunny = false;

let isMovie = false;
isMovie = true;
```

## Any Type
- is an escape hatch!
- It turns off type checking for this variable so you can do your thing.

```ts
const myComplicatedData: any = "I'm going to be complicated!";
```