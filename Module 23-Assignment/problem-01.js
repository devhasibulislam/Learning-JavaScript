function anaToVori(ana) {
    const vori = ana / 16;
    const mon = parseFloat(vori.toFixed(2)); /* return as number */
    // const mon = vori.toFixed(2); /* return as string */
    return mon;
}

// console.log(typeof(anaToVori(35))); /* check wheather it is number or string */
console.log(anaToVori(35));
