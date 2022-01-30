/*
    a = amount
    p = principal
    r = rate of interest
    t = time
*/
// a = p * (1 + ((r / 100) * t))
function getAmount(p, r, t) {
    return (p * (1 + ((r / 100) * t)));
}

let p = 50000;
let r = 13; /* in percentage */
let t = 5; /* in year */
console.log(getAmount(p, r, t).toFixed(2) + " BDT.");