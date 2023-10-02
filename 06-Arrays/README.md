<h1>Array Types</h1>

Arrays can be typed using a type annotation followed by empty array brackets, like <b>number[]</b> for an array of numbers. These arrays only allow data of that one type inside them.

```ts
let names: string[] = ["patrick", "ben"];
let names: Array<string> = ["hello", "world"];

let ages: number[] = [24, 32, 19, 29];
let ages: Array<number> = [24, 32, 19, 29];
```

```ts
// object array

type Point = {
    x: number;
    y: number;
}

const coords: Array<Point> = [];
coords.push({x: 23, y: 18});
```

# Multi-Dimensional Array

```ts
// two dimensional array
const board: string[][] = [
    ["X", "0", "X"],
    ["X", "0", "X"],
    ["X", "0", "X"]
]

// three dimensional array
const demo: number[][][] = [[[1]]]
```
