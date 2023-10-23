
const nachrichtInput = document.body.querySelector("input:nth-of-type(1)");
const errorfeld = document.body.querySelector("p");
const nachrichtOutput = document.body.querySelector("h3");

let gültig = false

function show() {
    event.preventDefault();
    gültig = nachrichtInput.value.length !== 0 ? true : false;
    if (gültig) {
        nachrichtOutput.textContent = nachrichtInput.value;
    }else {
        errorfeld.textContent = "Gib bitte eine Nachricht ein!"
    }
}