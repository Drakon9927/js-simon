numeriDaIndovinare = [];

while (numeriDaIndovinare.length < 5) {
    let numero = Math.floor(Math.random() * 100);
    if (!numeriDaIndovinare.includes(numero)) { 
        numeriDaIndovinare.push(numero); 
    }
}

  document.querySelector("header").innerHTML = `<div>${numeriDaIndovinare}</div>`;

//   Sabato si continua

