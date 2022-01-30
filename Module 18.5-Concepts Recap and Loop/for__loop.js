/* create a triangle */
var num = 5; /* num => number */
var it1, it2; /* it => iteration */

for (it1 = 1; it1 <= num; it1++) {
    for (it2 = num; it2 >= it1; it2--)
        process.stdout.write('*');

    console.log();
}

/* control array through for loop */
var arr = [1, 3, 5];
console.log(arr);
for (var i = 7; i <= 11; i += 2) {
    arr.push(i);
    // console.log(arr);
}
console.log(arr);
