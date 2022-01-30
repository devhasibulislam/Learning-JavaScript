/* Check a number is prime or not */
function primeNumber(number) {
    var flag = true;

    for (var i = 2; i <= Math.ceil(Math.sqrt(23)); i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag == true)
        console.log("Prime Number!");
    else
        console.log("Not a prime number!");
}

primeNumber(7);