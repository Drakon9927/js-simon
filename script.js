numeriDaMemorizzare = [];

while (numeriDaMemorizzare.length < 5) {
    let numero = Math.floor(Math.random() * 100);
    if (!numeriDaMemorizzare.includes(numero)) { 
        numeriDaMemorizzare.push(numero); 
    }
}
console.log(numeriDaMemorizzare);

document.querySelector("header").innerHTML = `<div>${numeriDaMemorizzare}</div>`;

// Creare il timer che aggiunge display none

let seconds = 5

let messaggio = "Numeri scomparsi, riscrivili!"

setTimeout(function() {

  document.querySelector("header").classList.add("displaynone");
}, seconds * 1000);


  // Chiede all'utente i 5 numeri
  
  let numeriUtente = [];

  setTimeout(function() {
    for (let i = 0; i < 5; i++) {
      let elemento = prompt("Inserisci i numeri in ordine");
      numeriUtente.push(parseInt(elemento));
    }
    if (numeriDaMemorizzare.toString() === numeriUtente.toString()) {
      alert("Bravo, hai vinto!");
    } else {
      alert("Sbagliato.");
    }
  }, seconds * 1500);

    console.log(numeriUtente);

