
var chilometri = prompt('Inserisca il numero di chilometri che intende percorrere.');
console.log('Chilometri che intende percorrere:' + ' ' + chilometri + ' ' + 'km');

var eta = prompt('Inserisca la sua età.');
console.log('età:' + ' ' + eta);

var prezzo_per_chilometro = 0.21;
console.log('Prezzo per chilometro:' + ' ' + prezzo_per_chilometro);

var prezzo_normale_biglietto = (chilometri * prezzo_per_chilometro);
console.log('Prezzo biglietto:' + ' ' + prezzo_normale_biglietto);


if (eta < 18) {

    var prezzo_biglietto_minorenne = (prezzo_normale_biglietto - ((prezzo_normale_biglietto/100)*20));
    console.log(prezzo_biglietto_minorenne);

} else if (eta >= 65) {

        var prezzo_biglietto_over = (prezzo_normale_biglietto - ((prezzo_normale_biglietto/100)*40));
        console.log(prezzo_biglietto_over);

} else {

    console.log(prezzo_normale_biglietto);

}
