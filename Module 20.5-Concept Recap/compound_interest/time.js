/*
    a = amount
    p = principal
    r = rate of interest
    t = time
    i = interest
    n = number of periods per time
*/
// t = ((log(a / p) / n) * (log(1 + ((r / 100) / n))))
function getTime(a, p, r, n) {
    return (Math.log(a / p) / (n * (Math.log(1 + ((r / 100) / n))))).toFixed(3);
}

let a = 40000;
let p = 35000;
let r = 4.123;
let n = 12;
console.log(getTime(a, p, r, n) + " years.");