/* Multiplication Table */
function multiplicationTable(number) {
    var i = 1; /* i => iteration */
    while (!(i > 10)) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
        i++;
    }
}
var number = 12;
multiplicationTable(number);