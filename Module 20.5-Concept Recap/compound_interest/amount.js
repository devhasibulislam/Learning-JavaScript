/*
    a = amount
    p = principal
    r = rate of interest
    t = time
    i = interest
    n = number of periods per time
*/
// a = (p * (1 + ((r / 100) / n))^(n * t))
function getAmount(p, r, n, t) {
    return (p * (Math.pow((1 + ((r / 100) / n)), (n * t)))).toFixed(2);
}

let p = 10000;
let r = 3.875;
let n = 12;
let t = 7.5;
console.log('$ ' + getAmount(p, r, n, t));