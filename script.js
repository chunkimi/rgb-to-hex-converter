const wrap = document.querySelector(".converter-wrap");
const hexValue = document.getElementById("hex-value");

const basicInputs = document.querySelectorAll("[data-mode = 'basic']")
const sliders = document.querySelectorAll("[data-mode = 'slider']")
const colorDisplay = document.querySelectorAll("[data-display]")

let isMouse = false
let allRGBValue = []



function colorInit() {
    allRGBValue = []
    wrap.style.backgroundColor = '#000000'
    hexValue.textContent = '#000000'

    basicInputs.forEach((input) => input.value = 0);
    sliders.forEach((slider) => slider.value = 0);

    renderDisplay('r', 0);
    renderDisplay('g', 0);
    renderDisplay('b', 0);
}

function rgbToHexColor() {
    const [rHex, gHex, bHex] = allRGBValue.map((color) => Number(color).toString(16).padStart(2, 0)); //補0
    const hexColor = `#${rHex}${gHex}${bHex}`;
    hexValue.textContent = hexColor;
    wrap.style.backgroundColor = hexColor;

}

function renderDisplay(colorType, colorValue) {
    const colorDisplays = Array.from(colorDisplay).filter((display) => display.dataset.display === colorType)
    const rgbTemplate = { r: [colorValue, 0, 0], g: [0, colorValue, 0], b: [0, 0, colorValue] };
    const [r, g, b] = rgbTemplate[colorType] || [0, 0, 0];
    colorDisplays.forEach((item) => {
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        item.textContent = colorValue
    })
    const specifyBasic = Array.from(basicInputs).find((element) => element.id === `${colorType}-basic`)
    const specifSlider = Array.from(sliders).find((element) => element.id === `${colorType}-slider`)
    specifyBasic.value = colorValue
    specifSlider.value = colorValue
}

function validateInputRange(colorNum) {
    if (colorNum.includes('.')) {
        alert("Please enter an integer value without a decimal point.");
        return false
    }
    color = Number(colorNum)
    if (colorNum < 0 || colorNum > 255) {
        alert("Please ensure that the entered number is between 0 and 255.");
        return false
    }
    return true
}

function updateColorValue(mode) {
    const colorTypes = ["r", "g", "b"];
    allRGBValue = colorTypes.map((color) => {
        const element = document.querySelector(`#${color}-${mode}`);
        return element ? Number(element.value) : 0;
    });

}

function handleColor(e) {
    const mode = e.target.dataset.mode
    const colorType = e.target.dataset.color
    const colorValue = e.target.value


    const isValid = validateInputRange(colorValue)
    if (!isValid) {
        e.target.vale = 0
        colorInit()
        return
    }

    renderDisplay(colorType, colorValue)
    updateColorValue(mode)
    rgbToHexColor()
}

basicInputs.forEach((input) => input.addEventListener('input', handleColor))

sliders.forEach((input) => input.addEventListener('mousedown', () => isMouse = true))
sliders.forEach((input) => input.addEventListener('mousemove', (e) => {
    if (isMouse) {
        handleColor(e)
    }
}))

sliders.forEach((input) => input.addEventListener('mouseup', () => isMouse = false))



colorInit()