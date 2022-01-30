/* find factorial of a number */
var number = 4;
var factorial = 1;
var temporary = number;

while (number != 0) {
    factorial *= number;
    number--;
}

console.log(temporary + " factorial is: " + factorial);
