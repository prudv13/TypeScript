function printAge( age: number | string): void {
    console.log(`You are ${age} years old`);
}

printAge(23);
printAge("87");


function calculateTax(price: number | string, tax: number){
    if(typeof price === 'string'){
        price = parseFloat(price.replace("$", ""))
        return price*tax;
    }
    else {
        return price*tax;
    }
}

// ----------------------------------------------------

const isTeenager = (age: number | string) => {
    if(typeof age === "string") {
        age = parseInt(age);
        console.log(age > 12 && age < 20);
    }
    if(typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
}

isTeenager('20'); // false
isTeenager(13); // true
