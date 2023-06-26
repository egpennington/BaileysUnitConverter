// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram - 2.204 pound
const feetConv = 3.281
const gallonConv = 0.264
const poundConv = 2.204
const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
    lengthNumFeet = (20 * feetConv).toFixed(3)
    lengthNumMeter = (20 / feetConv).toFixed(3)
    lengthEl.textContent = "20 feet = " + lengthNumMeter + "meters | 20 meters = " + lengthNumFeet + " feet"

    VolumeNumGallon = (0.264 / gallonConv).toFixed(3)
    VolumeNumLiter = (0.264 * gallonConv).toFixed(3)
    volumeEl.textContent = "20 gallons = " + VolumeNumGallon + "liters | 20 liters = " + VolumeNumLiter + " gallons"

    VolumeNumPound = (20 / poundConv).toFixed(3)
    VolumeNumKilo = (20 * poundConv).toFixed(3)
    massEl.textContent = "20 pounds = " + VolumeNumPound + "kilos | 20 kilos = " + VolumeNumKilo + " pounds"
})