/* create a lucas series */
function lucas(endRange) {
    lucasArray = [2, 1];
    let i = 2; /* i => iteration */
    while (i < endRange) {
        lucasArray[i] = lucasArray[i - 1] + lucasArray[i - 2];
        i++;
    }
    return lucasArray;
}

const lucasSeries = lucas(13);
for (let index = 0; index < lucasSeries.length; index++)
    process.stdout.write(lucasSeries[index] + ' ');
