/*
    a = amount
    p = principal
    r = rate of interest
    t = time
    i = interest
    n = number of periods per time
*/
// p = (i / (1 + ((r / 100) / n))^(n * t))
function getPrincipalInterest(i, r, n, t) {
    return (i / ((Math.pow((1 + ((r / 100) / n)), (n * t))) - 1)).toFixed(2);
}

let i = 45000;
let r = 12.33;
let n = 12;
let t = 5;
console.log('$ ' + getPrincipalInterest(i, r, n, t));