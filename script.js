
var kilogramInput = document.getElementById('kilogram')
var poundInput = document.getElementById('pound')
var ounceInput = document.getElementById('ounce')

kilogramInput.addEventListener('input', updatePIandOI)

poundInput.addEventListener('input', updateKIandOI)

ounceInput.addEventListener('input', updateKIandPI)

function updatePIandOI() {
    poundInput.value = kilogramInput.value * 2.205
    ounceInput.value = kilogramInput.value * 35.274
}

function updateKIandOI() {
    kilogramInput.value = poundInput.value / 2.205
    ounceInput.value = poundInput.value * 16
}

function updateKIandPI() {
    kilogramInput.value = ounceInput.value / 35.274
    poundInput.value = ounceInput.value / 16
}

















// function updatePandO() {
//     var kilogram = document.getElementById("kilogram")
//     var pound = document.getElementById("pound")
//     var ounce = document.getElementById("ounce")

//     pound.value = kilogram.value * 2.2046;
//     ounce.value = kilogram.value * 35.274;
//     // console.log(ounce.value);
//     // console.log(pound.value);
// }