/* an example with brak and continue statement */
var fruits = ['Apple', "Apricot", 'Banana', "\'Java Palm\'", 'Black Berry', "Cherry", 'Coconut', "Custard Apple", 'Date'];
var it = 0; /* it => iteration */

while (it <= fruits.length) {
    if ((it % 2) != 0) {
        process.stdout.write(fruits[it] + ' ');
        it++;
        continue;
    }
    if (it == (fruits.length - 1))
        break;
    it++;
}
