numeriDaMemorizzare = [];

while (numeriDaMemorizzare.length < 5) {
    let numero = Math.floor(Math.random() * 100);
    if (!numeriDaMemorizzare.includes(numero)) { 
        numeriDaMemorizzare.push(numero); 
    }
}

document.querySelector("header").innerHTML = `<div>${numeriDaMemorizzare}</div>`;

// Creare il timer che aggiunge display none

let seconds = 5

let messaggio = "Numeri scomparsi, riscrivili!"

setTimeout(function() {
  document.querySelector("header").classList.add("displaynone");

},seconds * 1000);

console.log(setTimeout)

