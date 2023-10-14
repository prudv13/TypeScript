// in-built generics

const nums: Array<number> = [1,2,3,4];
const colors: Array<string> = ["hello", "world"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// =====================================================================

function identity<T>(item: T): T{
    return item;
};

console.log(identity<string>("Magician"));
console.log(identity<number>(13));
console.log(identity<boolean>(true));