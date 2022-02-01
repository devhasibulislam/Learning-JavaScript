/* find sum of all elements in an array */
function arraySum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

const array = [1, 2, 3, 4];
const result = arraySum(array);
console.log(result);
