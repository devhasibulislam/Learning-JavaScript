/* find largest element of an array */
function findLargestElement(array) {
    let largest = array[0];
    for (let index = 1; index < array.length; index++) {
        if(largest < array[index])
            largest = array[index];
    }
    return largest;
}

console.log(findLargestElement([1, 3, 5, 4, 9, 2, 7]));

/* find lowest element of an array */
function findLowestElement(array) {
    let lowest = array[0];
    for (let index = 1; index < array.length; index++) {
        if(lowest > array[index])
            lowest = array[index];
    }
    return lowest;
}

console.log(findLowestElement([1, 3, 5, 4, 9, 2, 7]));