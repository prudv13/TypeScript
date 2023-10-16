const someFunc = (x: string | boolean, y: string | number) => {
    if(x === y){
        // x and y are strings in this case
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}