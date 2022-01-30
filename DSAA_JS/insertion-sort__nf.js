/* Insertion Sort */
// nf => no funciton using here!
var data = [5, 4, -10, 1, 6, 2];
var i, j; /* i & j => iteration */
var temp; /* temp => temporary */

for(i = 1; i < data.length; i++){
    temp = data[i];
    j = i - 1;
    while ((j >= 0) && (data[j] > temp)) {
        data[j + 1] = data[j];
        j--;
    }
    data[j + 1] = temp;
}

// alternatively
/* var k;
for (i = 1; i < data.length; i++) {
    temp = data[i];
    k = i;
    for (j = i; j >= 0; j--) {
        if (temp < data[j - 1]) {
            data[j] = data[j - 1];
            k--;
        }
    }
    data[k] = temp;
} */

for (i = 0; i < data.length; i++)
    process.stdout.write(data[i] + ' ');