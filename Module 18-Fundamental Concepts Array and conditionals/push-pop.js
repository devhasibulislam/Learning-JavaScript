/* add an element to the end */
var evenNumber = [2, 4, 6, 8];
console.log(evenNumber);
evenNumber.push(10);
console.log(evenNumber);

/* remove an element from the end */
var oddNumber = [1, 3, 5, 7, 9, 11];
console.log(oddNumber);
// oddNumber.pop();
// console.log(oddNumber);
var reserveItem = oddNumber.pop()
console.log(reserveItem);
console.log(oddNumber);

/* add an element to the first */
var vowel = ['e', 'i', 'o', 'u'];
console.log(vowel);
vowel.unshift('a');
console.log(vowel);

/* remove an element from the first */
var consonent = ['b', 'c', 'd', 'f', 'g', 'e.t.c.'];
console.log(consonent);
// consonent.shift();
reserveItem = consonent.shift();
console.log(consonent);
console.log(reserveItem);

/* add an element to a specific index */
var favouriteFruits = ["Apple", "Graps", "Guava", "Avocado", "Banana"];
console.log(favouriteFruits);
favouriteFruits.splice(3, 0, "Apricot"); /* zero means delete no element */
// favouriteFruits.splice(3, 1, "Apricot"); /* one means delete one element */
// favouriteFruits.splice(3, 2, "Apricot"); /* two or other digit means delete that digit amount of element */
console.log(favouriteFruits);
console.log(reserveItem);

/* remove an element from a specific index */
var favouriteFlowers = ["Rose", "Lotus", "Jasmine", "Sunflower", "Daisy"];
console.log(favouriteFlowers);
// favouriteFlowers.splice(2, 1);
reserveItem = favouriteFlowers.splice(2, 1);
console.log(favouriteFlowers);
console.log(reserveItem);