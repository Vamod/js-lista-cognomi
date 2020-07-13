// creazione array cognomi
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// chiedere il cognome
var cognomeUtente = prompt('inserisci il tuo cognome');

//capitalize
var primoCarattere = cognomeUtente.charAt(0).toUpperCase();
var restoParola = cognomeUtente.slice(1).toLowerCase();
var capitalize = primoCarattere + restoParola;

//inserire il cognome nel array
cognomi.push(capitalize);

// ordinare la lista in ordine alfabetico
cognomi.sort();

//stampare la lista
for(i = 0; i < cognomi.length; i++){
    document.getElementById('lista-cognomi').innerHTML += '<li>' + cognomi[i] + ' è di indice ' + (i + 1) + '</li>';
}

// posizione cognomeUtente nel array
var posizione = cognomi.indexOf(capitalize) + 1;
console.log(posizione);
