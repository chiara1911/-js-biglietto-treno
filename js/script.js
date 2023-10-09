
const km = 0.21;

let distanza = parseInt(prompt('quanti km devi fare?'));
let eta = parseInt(prompt('quanti anni hai?'));



let divBiglietto = document.getElementById('biglietto');

 let ticket = distanza * km;


if (eta < 18){
    ticket = (ticket - (ticket / 100) * 20);
} else if (eta > 65){
    ticket =  (ticket - (ticket / 100) * 40);

}

 divBiglietto.innerHTML = ' totale euro ' + ticket.toFixed(2);


