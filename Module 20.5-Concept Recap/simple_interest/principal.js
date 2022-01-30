/*
    a = amount
    p = principal
    r = rate of interest
    t = time
*/
// p = a / (1 + ((r / 100) * t))
function getPrincipal(a, r, t) {
    return (a / (1 + ((r / 100) * t)));
}

let a = 50000;
let r = 12; /* in percentage */
let t = 3; /* in year */
console.log(getPrincipal(a, r, t).toFixed(2) + " BDT.");