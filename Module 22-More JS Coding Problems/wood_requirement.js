/* calculate wood requirement for bed, table and chair */
function requireWood(quantityForChair, quantityForTable, quantityForBed) {
    /* requirement for each furniture */
    const woodPerChair = 3; // 3 cubic feet
    const woodPerTable = 10; // 10 cubic feet
    const woodPerBed = 50; // 50 cubic feet
    /* multiply quantity for each furniture */
    quantityForChair *= woodPerChair;
    quantityForTable *= woodPerTable;
    quantityForBed *= woodPerBed;
    /* summation of total quantity of whole furniture */
    return (quantityForChair + quantityForTable + quantityForBed);
}
totalWood = requireWood(1, 1, 1);
console.log('Total wood needed: ', totalWood, 'cubic feet.');
