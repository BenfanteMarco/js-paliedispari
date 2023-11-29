// Funzione che genera un numero tra 1 e 5
function randomNum(){
    return Math.floor(Math.random() * 5 + 1 );
}

// Numero PC
let pcNum = randomNum();
console.log('Il numero del pc è: ' + pcNum);

// Funzione per valutare se un numero è pari o dispari
function check(num) {
    if(num % 2 == 0) {
        // il numero è pari
        return true;
    } else {
        // il numero è dispari
        return false;
    }
}

// Chiedo all'utente se vuole pari o dispari
let choice = prompt('Vuoi pari o dispari?');
console.log('Hai scelto: ' + choice);

// Chiedo all'utente un numero tra 1 e 5
let userNum= parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log('Il tuo numero è: '+ userNum);

// Somma i due numeri
let somma = userNum + pcNum;

// Risulato
let result = check(somma);

// If per capire chi ha vinto
if(result == choice){
    console.log('Hai perso');
} else{
    console.log('Hai vinto');
}
