/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione.
*/




let userword;

//Chiedere all’utente di inserire una parola
userword = prompt('Inserisci qui una parola')
console.log(userword);

//Creare una funzione per capire se la parola inserita è palindroma
//FUNZIONE CHE INVERTE LA PAROLA
function inverti(userword) {
    let parolaDivisa = userword.split('');
    console.log(parolaDivisa);

    parolaDivisa = parolaDivisa.reverse();
    console.log(parolaDivisa);

    let parolaInvertita = parolaDivisa.join('');
    console.log(parolaInvertita);

    return parolaInvertita;
}

parolaInvertita = inverti(userword);


if (userword === parolaInvertita) {
    alert('Latua parola è palindoma');
} else {
    alert('la tua parola non è palindroma')
}



