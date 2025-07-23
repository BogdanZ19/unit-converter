/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBtn = document.getElementById("input-btn")
const inputField = document.getElementById("get-number")
const lengthSection = document.getElementById("length-section")
const volumeSection = document.getElementById("volume-section")
const massSection = document.getElementById("mass-section")


inputBtn.addEventListener("click", () => {
    let num = Number(inputField.value)
    render(num)
})


function render(num) {
    lengthSection.innerHTML += `
        <p class="sub-text">
            ${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = 
            ${(num / 3.281).toFixed(3)} meters
        </p>
    `
    volumeSection.innerHTML += `
        <p class="sub-text">
            ${num} liters = ${(num / 3.785).toFixed(3)} gallons | ${num} gallons 
            = ${(num * 3.785).toFixed(3)} liters
        </p>
    `
    massSection.innerHTML += `
        <p class="sub-text">
            ${num} kilos = ${(num * 2.205).toFixed(3)} pounds | ${num} pounds =
            ${(num / 2.205).toFixed(3)} kilos
        </p>    
    `
}
