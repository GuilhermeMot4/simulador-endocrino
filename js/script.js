const doseInput = document.getElementById("dose");

const doseValueSpan = document.getElementById("dose-value");
const orgao1ValueSpan = document.getElementById("orgao1-value");
const orgao2ValueSpan = document.getElementById("orgao2-value");
const orgao3ValueSpan = document.getElementById("orgao3-value");
const orgao4ValueSpan = document.getElementById("orgao4-value");
const orgao5ValueSpan = document.getElementById("orgao5-value");
const orgao6ValueSpan = document.getElementById("orgao6-value");
const orgao7ValueSpan = document.getElementById("orgao7-value");
const orgao8ValueSpan = document.getElementById("orgao8-value");



doseInput.addEventListener("input", () => {
    const selectedValue = doseInput.value;
    doseValueSpan.textContent = selectedValue;
    orgao1ValueSpan.textContent = selectedValue;
    orgao2ValueSpan.textContent = selectedValue;
    orgao3ValueSpan.textContent = selectedValue;
    orgao4ValueSpan.textContent = selectedValue;
    orgao5ValueSpan.textContent = selectedValue;
    orgao6ValueSpan.textContent = selectedValue;
    orgao7ValueSpan.textContent = selectedValue;
    orgao8ValueSpan.textContent = selectedValue;

});