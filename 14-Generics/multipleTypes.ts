function merge<T extends object,U extends object>(object1: T, object2: U){
    return {
        ...object1,
        ...object2
    }
}

const comboObject = merge({name: "colt"}, {pets: ["blue", "elton"]});

// ===============================================================

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number{
    return thing.length*2;
}

printDoubleLength("hello");