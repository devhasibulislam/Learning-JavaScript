// Problem 1:

function anaToVori(ana) {
    if (typeof ana === 'string') {
        return 'String or Symbol not allow';
    }

    else if (ana > 0) {
        const vori = parseFloat((ana / 16).toFixed(2));
        return vori; /* return as number */
    }
    
    else if (ana <= 0) {
        return 'Zero or Negative not allow';
    }
}

// console.log(typeof(anaToVori(35))); /* check wheather it is number or string */

/* handling errors */
// console.log(anaToVori('35'));
// console.log(anaToVori('&'));
// console.log(anaToVori(-35));
// console.log(anaToVori(0));

console.log(anaToVori(35));
