// annotating the function paramters

function square(num: number){
    return num*num;
}
console.log(square(3));


const encourageStudent = (name: string) => {
    return `Hey ${name}, you're doing GREAT!`;
}
console.log(encourageStudent('Patrick'));

const doSomething = (person: string, age: number, isFunny: boolean) =>{
    if(isFunny) return `${person} ${age}`;
}

console.log(doSomething('ChickenFace', 76, true))


// ============ default parameters ============

function greet (person: string = "stranger") {
    return `Hi there, ${person}`;
}

console.log(greet());