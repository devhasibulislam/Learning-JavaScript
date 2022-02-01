/* find second largest element from an array */
function secondLargest(array) {
    let temp, secondLarge, max;
    max = 0;
    for(let i = 1; i < array.length; i++){
        if(array[max] < array[i]){
            max = i;
        }
    }
    temp = array[max]; /* store large value to temp variable */
    array[max] = 0; /* max value is now zero */
    secondLarge = array[0];
    for(let i = 0; i < array.length; i++){
        if(secondLarge < array[i]){
            secondLarge = array[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest([7, 4, 1, 3, 9, -5, 2]));