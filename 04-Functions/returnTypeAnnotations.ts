// ============ functions return type ============

function greeting(person: string = "stranger"): string {
    return `Hi there, ${person}`;
}
console.log(greeting());



const add = (x: number, y: number): number => {
    return x+y;
}
console.log(add(15,22));