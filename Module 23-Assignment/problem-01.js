function anaToVori(ana) {
    const vori = ana / 16;
    const mon = parseFloat(vori.toFixed(2));
    return mon; /* return as number */
}

// console.log(typeof(anaToVori(35))); /* check wheather it is number or string */
console.log(anaToVori(35));
