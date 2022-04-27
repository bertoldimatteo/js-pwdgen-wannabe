// chiedi all'utente il suo nome
// chiedi all'utente il suo cognome
// chiedi all'utente il suo colore preferito

const userName = prompt("qual'è il tuo nome?");
const userSurname = prompt("qual'è il tuo cognome?");
const userFavColor = prompt("qual'è il tuo colore preferito?");

document.getElementById("pwd").innerHTML = 
userName + userSurname + userFavColor + 21;

function img() {
    document.getElementById("seagul").innerHTML = '<img src="img/1.png">';
}

function change() {
    document.getElementById("title").innerHTML = "Password generator per rubarti l'account";
    document.getElementById("claim").innerHTML = 'noiosa';
}