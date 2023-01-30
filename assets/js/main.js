console.log("test");

const select = document.querySelector("#my-select");
let output = document.querySelector("#option-selected");
let abfrage = ""; 

const auswahl = (event) => {

    event.preventDefault(); // lädt die Seite nicht neu, so wie onsubmit="return false" im html

    // ob hier oder außerhalb ist egal, nur zum weiterabeiten 
    // wichtig, wenn hier drin, let dann kann nur hier drin weitergearbeitet werden
    // let außerhalb, dann global und es kann außerhalb weiter gearbeitet werden 
    // mit dem Ergebnis 
    let output = document.querySelector("#option-selected");


    console.log(event);
    console.log(event.target);
    console.log(event.target.value);

    abfrage = event.target.value;

    output.innerHTML = abfrage;
    console.log(abfrage);

};

console.log(abfrage);  // keine anzeige :-(



select.addEventListener("change", auswahl);