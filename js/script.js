
const km = 0.21;

// console.log(km);



let distanza = parseInt(prompt('quanti km devi fare?'));
let eta = parseInt(prompt('quanti anni hai?'));

let biglietto = (distanza * km);

let divBiglietto = document.getElementById('biglietto');

divBiglietto.innerHTML = biglietto;

if (eta < 18){
   biglietto = 'biglietto euro' + (biglietto - ((biglietto / 100) * 20));
} else if (eta > 66){
    biglietto = (biglietto - ((biglietto / 100) * 40));
} else {
   biglietto = (biglietto.toFixed(2));
}

