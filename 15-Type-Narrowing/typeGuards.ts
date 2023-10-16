function triple(value: number | string){
    if(typeof value === 'number') return value*3;
    if(typeof value === 'string') return value.repeat(3);
};

console.log(triple("hi"));
console.log(triple(2));