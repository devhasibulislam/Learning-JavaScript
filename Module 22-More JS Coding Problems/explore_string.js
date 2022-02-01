/* explore string */
cars = ['Tesla', 'BMW', 'Volkswagen', 'Jaguar', 'Ferrari', 'Bugatti', 'Lexus'];
// print string
for (const carSelector of cars)
    process.stdout.write(carSelector + ' ');
// count string
console.log('\nlength of \'cars\' string: ' + cars.length);
// access an index from string
console.log(cars.indexOf('Ferrari'));
// access an element from string
console.log(cars[5]);

// update an element from string
cars[5] = 'Rolls-Royce';
console.log(cars[5]);
// print string
for (const carSelector of cars)
    process.stdout.write(carSelector + ' ');

// --------------***--------------
//      Strings are immutable
// --------------***--------------

const greetings = "Hello JavaScript, a scripting language.";
console.log('\n' + greetings.length);
greetings[1] = 'a';
console.log(greetings[1]);
console.log(greetings);
