const dog = {
    name: 'Elton',
    breed: "Australian Shepherd",
    age: 0.5,
}

function printName(person: {first: string, last: string}): string{
    return `Person Name : ${person.first} ${person.last}`
}

printName({first: "Thomas", last: "Jenkins"})

// ------------------------------------------------

let coordinate: {
    x: number;
    y: number
} = {
    x: 34,
    y: 2,
}

// ------------------------------------------------

function randomCoordinate(): {x: number, y: number} {
    return {
        x: Math.random(),
        y: Math.random()
    }
}

randomCoordinate();

// ------------------------------------------------
// excess properties

const singer = {first: "Mick", last: "Jagger", age: 473, isAlive: true}
printName(singer)