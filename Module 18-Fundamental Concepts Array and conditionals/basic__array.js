/* declare array */
var vowel = ['a', 'e', 'i', 'o', 'u'];
var evenNumber = [2, 4, 6, 8, 10, 12];

/* print array with variation */
// let the array with 3rd bracket
console.log(vowel);
console.log(evenNumber);
// let not the array with 3rd bracket
console.log("vowel: " + vowel);
console.log("even number: " + evenNumber);

/* length of an array */
var oddNumber = [1, 3, 5, 7, 9]
// console.log(oddNumber.length);
var len = oddNumber.length;
console.log(len);

/* index of an array */
var consonent = ['b', 'c', 'd', 'f', 'g', 'h', 'e.t.c.'];
console.log(consonent);
// index of an element
console.log(consonent.indexOf('d'));
// get by index
console.log(consonent[2]);
// set by index
consonent[2] = 'j';
console.log(consonent);