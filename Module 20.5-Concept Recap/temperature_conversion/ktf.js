/* ktf => kelvin to fahrenheit */
function kelvinToFahrenheit(kelvin) {
    return (((kelvin - 273.15) * (9 / 5)) + 32);
}

let kelvin = 5;
console.log(kelvinToFahrenheit(kelvin).toFixed(2) + " degree fahrenheit.");