function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
    const totalSingaraPrice = singaraQuantity * 7;
    const totaSamosaPrice = samosaQuantity * 10;
    const totalJalebiPrice = jalebiQuantity * 15;

    const totalPrice = totalSingaraPrice + totaSamosaPrice + totalJalebiPrice;
    return totalPrice; /* return as number */
}

// console.log(typeof(pandaCost(3, 5, 2))); /* check wheather it is number or string */
console.log(pandaCost(3, 5, 2));
