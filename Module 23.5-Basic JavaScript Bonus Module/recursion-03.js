/*
    let fact = 1;
    for(let i = number; i >= 1; i--)
        fact *= i;
*/

function recursion(number) {
    process.stdout.write(number + ' ');
    if (number == 1) return 1;
    return number * recursion(number - 1);
}

console.log(recursion(5));