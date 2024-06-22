import "./style.css";
import clearWeatherData from "./clearWeatherData";
import handleRequest from "./handleRequest";

const input = document.querySelector('input');
const unit = document.querySelector('button');

const units = ['Celsius', 'Fahrenheit'];
let selectedUnitIndex = 0;

input.value = '';

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {

        clearWeatherData();

        const location = input.value;
        input.value = '';

        handleRequest(location, units[selectedUnitIndex]);
    }
})

unit.addEventListener('click', () => {
    selectedUnitIndex = (selectedUnitIndex + 1) % units.length;
    unit.textContent = units[selectedUnitIndex];
});