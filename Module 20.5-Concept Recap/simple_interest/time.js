/*
    a = amount
    p = principal
    r = rate of interest
    t = time
*/
// t = ((1 / (r / 100)) * ((a / p) - 1))
function getTime(a, p, r) {
    return ((1 / (r / 100)) * ((a / p) - 1)).toFixed(2);
}

let a = 50000;
let p = 45000;
let r = 5; /* in percentage */
console.log(getTime(a, p, r) + " years.");