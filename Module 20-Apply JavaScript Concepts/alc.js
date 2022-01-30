/* alc => area and length conversion */
/* length conversion */
// inch to foot
function inchToFoot(inch) {
    return (inch / 12);
}

inch = 1;
console.log(inch + " inch is equal to: " + inchToFoot(inch).toFixed(4) + " foot.");

// foot to inch
function footToInch(foot) {
    return (foot * 12);
}

foot = 1;
console.log(foot + " foot is equal to: " + footToInch(foot) + " inch.");

/* area conversion */
// mile to kilometer
function mileToKilometer(mile) {
    return (mile * 2.59);
}

mile = 1;
console.log(mile + " mile is equal to: " + mileToKilometer(mile).toFixed(4) + " kilometer.");

// kilometer to mile
function kilometerToMile(kilometer) {
    return (kilometer / 2.59).toFixed(4);
}

kilometer = 1;
console.log(kilometer + " kilometer is equal to: " + kilometerToMile(kilometer) + " mile.");