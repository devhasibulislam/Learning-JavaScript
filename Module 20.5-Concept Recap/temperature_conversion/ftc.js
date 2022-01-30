/* ftc => fahrenheit to celsius */
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9));
}

let fahrenheit = 5;
console.log(fahrenheitToCelsius(fahrenheit) + " degree celsius.");