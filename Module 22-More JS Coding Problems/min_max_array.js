/* default array printer */
function printArray(array) {
    for (let index = 0; index < array.length; index++)
        process.stdout.write(array[index] + ' ');
    console.log();
}

/* find max element from an array */
function findMaxElement(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++)
        if (max < array[i])
            max = array[i];
    return max;
}
var array = [7, 3, 5, 1, 9, -4, 6, 2];
printArray(array);
console.log('largest element: ' + findMaxElement(array));

/* find minimum element from an array */
function findMinElement(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++)
        if (min < array[i])
            min = array[i];
    return min;
}
var array = [5, 2, 1, -7, 9, 6];
printArray(array);
console.log('lowest element: ' + findMinElement(array));