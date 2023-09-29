// ============ void return type ============

const annoyUser = (num: number): void => {
    for(let i=0; i<num; i++){
        alert('Hiiiiiiiiii !');
    }
}

// ============ never return type ============

function makeError(msg: string) : never {
    throw new Error(msg);
}

const neverStop = (): never => {
    while(true) {
        console.log("I'm still going!");
    }
}