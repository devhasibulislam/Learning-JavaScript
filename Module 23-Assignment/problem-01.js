function anaToVori(ana) {
    const vori = parseFloat((ana / 16).toFixed(2));
    return vori; /* return as number */
}

// console.log(typeof(anaToVori(35))); /* check wheather it is number or string */
console.log(anaToVori(35));
