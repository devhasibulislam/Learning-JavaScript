/* find factorial of a number */

/* function getFactorial(number) {
    let fact = 1;
    for(var i = 1; i <= number; i++)
        fact *= i;
    return fact;
} */

function getFactorial(number) {
    let fact = 1;
    while (number > 0) {
        fact *= number;
        number--;
    }
    return fact;
}

console.log(getFactorial(7));
