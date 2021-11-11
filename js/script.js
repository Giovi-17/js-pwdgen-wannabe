// Dichiarazioni variabili e inserimento dati da parte dell'utente
const userName = prompt('Qual é il tuo nome?');
const userSurname = prompt('Qual é il tuo cognome?');
const userColor = prompt('Qual é il tuo colore preferito?');
const userPassword = `${userName}${userSurname}${userColor}21`;

// Password utente
document.getElementById('password').innerHTML = userPassword;
