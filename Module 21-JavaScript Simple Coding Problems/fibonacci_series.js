/* create a fibonacci series */
function lucas(endRange) {
    fiboArray = [0, 1];
    let i = 2; /* i => iteration */
    while (i < endRange) {
        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
        i++;
    }
    return fiboArray;
}

const fibonacci = lucas(13);
for (let index = 0; index < fibonacci.length; index++)
    process.stdout.write(fibonacci[index] + ' ');
