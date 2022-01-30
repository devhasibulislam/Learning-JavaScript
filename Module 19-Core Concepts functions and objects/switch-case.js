/* operate a simple calculation */
var op = '*'; /* op => operator */
var number1 = 25, number2 = 21;
switch (op) {
    case '+':
        console.log("addition: " + (number1 + number2));
        break;
    case '-':
        console.log("subtraction: " + (number1 - number2));
        break;
    case '*':
        console.log("multiplicaiton: " + (number1 * number2));
        break;
    case '/':
        console.log("division: " + (number1 / number2));
        break;
    case '%':
        console.log("modulous: " + (number1 % number2));
        break;

    default:
        console.log("wrong, arithmatic operator!");
        break;
}
