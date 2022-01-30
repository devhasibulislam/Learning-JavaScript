/* string to number */
// var var1 = "3.1416"; /* consider as a string */
// var var2 = "49"; /* consider as a string */
// var total = var1 + var2; /* gives string as a result */
// var total = parseFloat(var1) + parseInt(var2);
// console.log(total);
// console.log(parseFloat(var1) + parseFloat(var2));
// console.log(parseInt(var1) + parseInt(var2));
// console.log(parseInt(var2) + 1);

/* number to string */
var var1 = 3.1416;
var var2 = 25;
// var total = var1.toString(var1) + var2.toString(var2); /* approach binary base result */
var total = '' + var1 + var2;
console.log(total);