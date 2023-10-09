
const km = 0.21;





let distanza = parseInt(prompt('quanti km devi fare?'));
let eta = parseInt(prompt('quanti anni hai?'));



let divBiglietto = document.getElementById('biglietto');

let biglietto = (distanza * km);



 if (eta < 18){
    biglietto = 'ticket euro' + '' + (biglietto - ((biglietto / 100) * 20));
    divBiglietto.innerHTML = biglietto;
} else if (eta > 66){
    
    biglietto = (biglietto- ((biglietto / 100) * 40));
    divBiglietto.innerHTML = biglietto;
 } else {
    
    biglietto = (biglietto.toFixed(2));
    divBiglietto.innerHTML = biglietto;
 }

