/*
    let recursion = 0;
    for(let number = 5; number >= 1; number--)
        recursion += number;
*/

function recursion(number) {
    process.stdout.write(number + ' ');
    if (number == 1) return 1;
    return number + recursion(--number);
}

console.log(recursion(5));