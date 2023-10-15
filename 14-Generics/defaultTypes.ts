function makeEmptyArray<T = number>(): T[]{
    return []
};

const strings = makeEmptyArray<string>();
console.log(strings); // []

const nums = makeEmptyArray();
console.log(nums); // []