/*
    a = amount
    p = principal
    r = rate of interest
    t = time
    i = interest
    n = number of periods per time
*/  
// r = n * ((a / p)^(1 / (n * t)) - 1)
function getRate(a, p, n, t) {
    return (100 * (n * ((Math.pow((a / p), (1 / (n * t))) - 1))).toFixed(5));
}

let a = 50000;
let p = 45000;
let n = 12;
let t = 6;
console.log(getRate(a, p, n, t) + "% per year.");