/* swap with temporary variable */
let temp, number1 = 3.1416, number2 = 9.8;
console.log(number1 + ' ' + number2);
temp = number1;
number1 = number2;
number2 = temp;
console.log(number1 + ' ' + number2);

/* swap without temporary variable */
number1 -= number2;
number2 += number1;
number1 -= number2;
console.log(Math.abs(number1) + ' ' + number2.toFixed(4));

/* swap with distructing */
[number1, number2] = [number2, number1];
console.log(number1 + ' ' + number2);
