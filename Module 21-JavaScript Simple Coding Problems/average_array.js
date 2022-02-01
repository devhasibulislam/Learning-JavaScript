/* find average from an array */
function findAverage(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++)
        sum += array[index];
    return sum / (array.length);
}

console.log(findAverage([1, 2, 4, 5, 3, 6, 9, 7]));