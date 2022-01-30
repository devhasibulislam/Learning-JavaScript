/*
    a = amount
    p = principal
    r = rate of interest
    t = time
*/
// r = ((1 / t) * (a / (p - 1)))
function getRate(a, p, t) {
    return (((1 / t) * ((a / p) - 1)) * 100).toFixed(5);
}

let a = 50000;
let p = 45000;
let t = 3; /* in year */
console.log(getRate(a, p, t) + "% per year.");