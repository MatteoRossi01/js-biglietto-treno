
let eta = parseInt(prompt('Quanti anni hai?'));
let km = parseInt(prompt('Quanta distanza vuoi percorrere? (in km)'));

const tariffa = (0.21);    // Costo tariffa
const minorenni = (0.2); // sconto minorenni
const over = (0.4); // sconto over 65


let costo = km * tariffa; // tariffa prezzo pieno
let prezzoScontato;
let costoMinorenni = costo * minorenni; // sconto minorenni
let costoOver = costo * over; // sconto maggiorenni

if (eta < 18) {
    prezzoScontato = costo - costoMinorenni;
    document.getElementById('prezzo').innerHTML = prezzoScontato.toFixed(2);
} else if (eta >= 65) {
    prezzoScontato = costo - costoOver;
    document.getElementById('prezzo').innerHTML = prezzoScontato.toFixed(2);
} else {
    document.getElementById('prezzo').innerHTML = costo.toFixed(2);
}









;
