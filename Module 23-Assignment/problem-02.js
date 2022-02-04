// Problem 2:

function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
    if ((singaraQuantity < 0) || (samosaQuantity < 0) || (jalebiQuantity < 0)) {
        return 'Negative input not allow';
    }

    else if ((singaraQuantity >= 0) && (samosaQuantity >= 0) && (jalebiQuantity >= 0)) {
        const totalSingaraPrice = singaraQuantity * 7;
        const totaSamosaPrice = samosaQuantity * 10;
        const totalJalebiPrice = jalebiQuantity * 15;

        const totalPrice = totalSingaraPrice + totaSamosaPrice + totalJalebiPrice;
        return totalPrice; /* return as number */
    }

    else {
        if ((typeof singaraQuantity) === 'string')
            return 'String or Symbol not allow';
        else if ((typeof samosaQuantity) === 'string')
            return 'String or Symbol not allow';
        else if ((typeof jalebiQuantity) === 'string')
            return 'String or Symbol not allow';
    }
}

// console.log(typeof(pandaCost(3, 5, 2))); /* check wheather it is number or string */

/* handling errors */
// console.log(pandaCost(3, 5, -2));
// console.log(pandaCost(-3, 5, -2));
// console.log(pandaCost(-3, 5.1, -2));
// console.log(pandaCost(3, 'Hello', 2));
// console.log(pandaCost('3', 'Hello', 2));
// console.log(pandaCost('3', 'Hello', '2'));

console.log(pandaCost(3, 5.1, 0));
