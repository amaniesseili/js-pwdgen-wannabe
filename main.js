const firstName = prompt("inserici il tuo nome");
const lasttName = prompt("inserici il tuo cognome");
const favoriteColor = prompt("inserici il tuo colore preferito");


document.getElementById("welcome-title").innerHTML = ` Benvenuto ${firstName} ${lasttName}`;
document.getElementById("color").innerHTML = `${favoriteColor}`;
document.getElementById("pass").innerHTML = `${firstName}${lasttName}`;

