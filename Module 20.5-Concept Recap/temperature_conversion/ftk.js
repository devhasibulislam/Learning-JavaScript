/* fahrenheit to kelvin */
function fahrenheitToKelvin(fahrenheit) {
    return (((fahrenheit - 32) * (5 / 9)) + 273.15);
}

let fahrenheit = 5;
console.log(fahrenheitToKelvin(fahrenheit) + " degree kelvin.");