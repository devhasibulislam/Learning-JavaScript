/*
    a = amount
    p = principal
    r = rate of interest
    t = time
    i = interest
    n = number of periods per time
*/
// p = (a / (1 + ((r / 100) / n))^(n * t))
function getPrincipalAmount(a, r, n, t) {
    return (a / (Math.pow((1 + ((r / 100) / n)), (n * t)))).toFixed(2);
}

let a = 50000;
let r = 2.85;
let n = 12;
let t = 1.4;
console.log('$ ' + getPrincipalAmount(a, r, n, t));