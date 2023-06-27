// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram - 2.204 pound
let input = Number("")
const meterToFootRate = 3.281
const literToGallonRate = 0.264
const kiloToPoundRate = 2.204
const convertBtnEl = document.getElementById("convertBtn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtnEl.addEventListener("click", function() {
    input = inputEl.value
    convert(input, meterToFootRate, lengthEl, "meters", "feet")
    convert(input, literToGallonRate, volumeEl, "liters", "gallons")
    convert(input, kiloToPoundRate, massEl, "kilos", "pounds")
})

function convert(input, converstionRate, displayElement, firstUnit, secondUnit) {
    let firstCalc = (input * converstionRate).toFixed(3)
    let secondCalc = (input / converstionRate).toFixed(3)
    displayElement.textContent = `${input} ${firstUnit} = ${firstCalc} ${secondUnit} | ${input} ${secondUnit} = ${secondCalc} ${firstUnit}
    `
}