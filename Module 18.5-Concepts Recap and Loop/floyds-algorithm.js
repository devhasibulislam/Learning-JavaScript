/* Floyds Algorithm */
var number = 4;
var k = 1; /* iteration */
for (var i = 1; i <= number; i++) {
    for (var j = 0; j < i; j++) {
        process.stdout.write(k + ' ');
        k++;
    }
    console.log();
}
