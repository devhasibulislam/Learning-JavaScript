/* default array printer */
function printArray(array) {
    for (let i = 0; i < array.length; i++)
        process.stdout.write(array[i] + ' ');
    console.log();
}

/* remove duplicate element from an array */
function removeDuplicateElement(array) {
    uniqueArray = []
    for (const iterator of array)
        if (uniqueArray.indexOf(iterator) == -1)
            uniqueArray.push(iterator);
    return uniqueArray;
}

multiValuedArray = [1, 3, 6, -4, 2, 9, 8, 1, 6, -4, 2];
printArray(multiValuedArray);
uniqueValuedArray = removeDuplicateElement(multiValuedArray);
printArray(uniqueValuedArray);

// *---------------------*--*---*--*
// 1, 3, 6, -4, 2, 9, 8, 1, 6, -4, 2
// *---------------------*--*---*--*