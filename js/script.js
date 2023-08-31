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
user_uno_number = prompt('Adesso scegli un numero da 1 a 5')
console.log(user_uno_number);

//il pc genera un numero random da 1 a 5
user_pc = Math.floor((Math.random() * 5) + 1);
console.log(user_pc);

//sommiamo i numeri dati/generati
somma = Number(user_uno_number += user_pc)
console.log(somma);
//stabiliamo se il risultato è pari o dispari

//se la scelta iniziale (pari/dispari) dell'utente è uguale al risultato l'utente vince

//altrimenti perde

