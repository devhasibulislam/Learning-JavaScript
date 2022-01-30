var num1 = 33;
var num2 = 47;

console.log(num1 > num2); /* false */
console.log(num1 >= num2); /*  false */
console.log(num1 < num2); /* true */
console.log(num1 <= num2); /* true */
console.log(num1 == num2); /* false */
console.log(num1 != num2); /* true */

console.log((num1 <= num2) && (num2 >= num1)); /* true */
console.log((num1 == num2) || (num2 != num1)); /* ture */
