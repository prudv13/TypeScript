const el = document.getElementById('idk');
if(el){
    console.log(typeof el) // HTMLElement
}
else{
    console.log(typeof el) // null
}

// ==========================================

const printLetters = (word: string | null) => {
    if(!word){
        // if word is null, don't loop over it
        console.log('No word was provided.');
    }
    else {
        // only loop if word exists/is truthy
        for (const letter of word) {
            console.log(letter);
        }
    }
}