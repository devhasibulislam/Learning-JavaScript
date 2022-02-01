/* default prime checker */
function isPrime(number) {
    let flag = false;
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0)
            return flag;
        else
            flag = true;
    }
    return flag;
}

/* check if a number is prime or not */
const number = 4;
if (isPrime(number) == true)
    console.log(number + " is Prime.");
else
    console.log(number + " is not Prime.");

/* check prime number with in a range */
startRange = 5;
endRange = 73;
for (let i = startRange; i <= endRange; i++)
    if (isPrime(i) == true)
        process.stdout.write(i + ' ');