const number1 = 3.1416, number2 = 9.8, number3 = 6.67103;

/* find max of two values */
if (number1 > number2)
    console.log(number1 + " is greater than " + number2);
else
    console.log(number2 + " is greater than " + number1);

/* find max of three values */
if ((number1 > number2) && (number1 > number3))
    console.log(number1 + " is greater than " + number2 + ' & ' + number3);
else if ((number2 > number3) && (number2 > number1))
    console.log(number2 + " is greater than " + number1 + ' & ' + number3);
else
    console.log(number3 + " is greater than " + number2 + ' & ' + number1);

/* find min of two values */
if (number1 < number2)
    console.log(number1 + " is less than " + number2);
else
    console.log(number2 + " is less than " + number1);

/* find min of three values */
if ((number1 < number2) && (number1 < number3))
    console.log(number1 + " is less than " + number2 + ' & ' + number3);
else if ((number2 < number3) && (number2 < number1))
    console.log(number2 + " is less than " + number1 + ' & ' + number3);
else
    console.log(number3 + " is less than " + number2 + ' & ' + number1);

console.log(Math.max(number1, number2, number3));