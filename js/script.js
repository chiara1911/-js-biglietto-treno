
const km = 0.21;

// console.log(km);

let distanza = prompt('quanti km devi fare?');
let eta = prompt( 'quanti anni hai?');

let biglietto = (distanza * km);



if (eta < 18){
    console.log(biglietto - (biglietto / 100) * 20);
} else if (eta > 66){
    console.log(biglietto - (biglietto / 100) * 40);
} else {
    console.log(biglietto)
}

