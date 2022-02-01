/* generating random number */
const number1 = Math.random();
console.log(number1);

/* random number within a range between 1 and 6 */
const number2 = Math.random() * 6;
console.log(number2);

/* round figureed random number */
const number3 = Math.round(number2);
console.log(number3);

/* random number getting ceil value */
const number4 = Math.ceil(Math.random() * 10);
console.log(number4);

/* random number getting floor value */
const number5 = Math.floor(Math.random() * 10);
console.log(number5);

console.log();

/* generate random number between 1 & 6 with using a loop */
let count, number6, it;
count = number6 = 0;
it = 10; /* it => iterable */
for (let i = 1; i <= 60; i++) {
    number6 = Math.round(Math.random() * 6);
    process.stdout.write(number6 + ' ');

    if (i == it) {
        console.log();
        it += 10;
    }

    if (number6 == 6)
        count++;
}

console.log();
console.log('6' + " getting " + count + " times.");