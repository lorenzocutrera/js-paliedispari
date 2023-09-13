/* Pari e Dispari
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/


let user_uno;
let user_pc; 
let user_uno_number;
let somma;

// domandare all'utente di scegliere un numero pari o dispari
user_uno = prompt('Scegli tra pari o dispari');
console.log(user_uno);
//domandare all'utente un numero da 1 a 5 
user_uno_number = Number(prompt('Adesso scegli un numero da 1 a 5'))
console.log(user_uno_number);

//il pc genera un numero random da 1 a 5
user_pc = randomNumber(5);
console.log(user_pc);

//sommiamo i numeri dati/generati
somma = user_uno_number + user_pc
console.log(somma);
//stabiliamo se il risultato è pari o dispari
if(somma % 2 == 0){
    somma = 'pari'
} else{
    somma = 'dispari'
}
console.log(somma);
//se la scelta iniziale (pari/dispari) dell'utente è uguale al risultato l'utente vince

//altrimenti perde

if(user_uno == somma){
    console.log('HAI VINTO');
} else{
    console.log('Hai perso');
}

/**
 * Generate a random number of maximum: max
 * @param {integer} max Maximum number generated
 */
function randomNumber(max){
    let number = Number(Math.floor((Math.random() * max) + 1));

    return number;
}