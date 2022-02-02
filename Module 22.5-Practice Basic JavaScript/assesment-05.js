/* find positive uptill negative found */
function findPositives(mixedArray) {
    let positiveArray = [];
    for(const array of mixedArray){
        if(array >= 0) positiveArray.push(array);
        else break;
    }
    return positiveArray;
}

positiveArray = findPositives([1, 5, 2, 6, 8, 4 -3, 9, 0, -7]);
for(const array of positiveArray)
    process.stdout.write(array + ' ');