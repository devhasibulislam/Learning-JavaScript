/* multiplication table */
var it = 1; /* it => iteration */
var number = 12;

while (it <= 10) {
    if (number < 100) {
        if ((number * it) < 100)
            console.log(('0' + number).slice(-2) + " x " + ('0' + it).slice(-2) + " = " + ('0' + (number * it)).slice(-2));
        else
            console.log(('0' + number).slice(-2) + " x " + ('0' + it).slice(-2) + " = " + (number * it));
    } else
        console.log(number + " x " + ('0' + it).slice(-2) + " = " + (number * it));
    it++;
}

/* even numbers and odd numbers within a range */
var startRange = 13;
var stopRange = 100;
var oddCount, evenCount;
oddCount = evenCount = 0;

it = startRange;
while (it <= stopRange) {
    if(it % 2 == 0){
        process.stdout.write(it + ' ');
        evenCount++;
    }
    it++;
}
console.log("-- There are " + evenCount + " even numbers.");

it = startRange;
while(it <= stopRange){
    if(it % 2 != 0){
        process.stdout.write(it + ' ');
        oddCount++;
    }
    it++;
}
console.log("-- There are " + oddCount + " odd numbers.");
