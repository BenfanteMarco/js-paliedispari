// Chiedo la parola all'utente
let userWord = prompt('Inserisci una parola');
console.log(userWord);



// Creo funzione rovescio
function revert(word){
    let revertWord = word.split('').reverse().join('');
    console.log(revertWord);
    return revertWord;
}

// Creo funzione per capire se la parola è palindroma o no
function palindroma(word){
    if(word == revert(word)){
        return true;
    } else{
        return false;
    }
}

// Verifico parola palindroma
if(palindroma(userWord)){
    console.log('La parola è palindroma');
} else{
    console.log('La parola non è palindroma');
}