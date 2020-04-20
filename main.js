var chilometri = prompt('Inserisca il numero di chilometri che intende percorrere.');
console.log('Chilometri che intende percorrere:' + ' ' + chilometri + ' ' + 'km');

var eta = prompt('Inserisca la sua età.');
console.log('età:' + ' ' + eta);

var prezzo_per_chilometro = 0.21;
console.log('Prezzo per chilometro:' + ' ' + prezzo_per_chilometro);

var prezzo_normale_biglietto = (chilometri * prezzo_per_chilometro);
console.log('Prezzo biglietto:' + ' ' + prezzo_normale_biglietto);
