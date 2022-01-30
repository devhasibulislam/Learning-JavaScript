/* now we learn about 3 types of declaring variable in javascript */
// 1. var = function scoped.
// 2. let = block scoped.
// 3. const = make fixed a value to a variable.

/* using var */
var friends = ["Mehedi", "Partho", "Laish", "Nabil", "Sabbir", "Shakil"];
console.log(friends);

/* using let */
let fruits = ["Apple", "Apricot", "Almond", "Peanut", "Pineapple"];
console.log(fruits);

/* using const */
const PIE = 3.1416;
console.log('Value of PIE is: ' + PIE);
// PIE = 9.8; /* give an error */

/* ==========> difference between var and let <========== */
console.clear(); /* ----------------------------------------clear console---------------------------------------- */
/* scoping rules */
function var_let__difference() {
    { /* alternative block inside of main block */
        // using var
        var iPhone = {
            modelName: "13 Pro Max",
            screenSize: "6.7 Inch",
            phoneColor: "Sierra Blue",
            phonePrice: "$1099"
        };
        console.log(iPhone);

        // using let
        let tesla = {
            modelName: "Model 3",
            bodyColor: "Neon Red",
            carPrice: "$56, 990"
        };
        console.log(tesla);
    }
    console.log(iPhone);
    // console.log(tesla); /* gives a reference error */
}
var_let__difference();

console.clear(); /* ----------------------------------------clear console---------------------------------------- */
/* hoisting */
function checkHoisting__var() {
    console.log(foo); /* undefined */
    var foo = 'Foo';
    console.log(foo);
}
checkHoisting__var();

function checkHoisting__let() {
    console.log(foo); /* reference error */
    let foo = 'Foo';
    console.log(foo);
}
// checkHoisting__let();

// console.log(foo); /* undefined */
// let Foo = 'foo';
// console.log(Foo);
// var foo = 'Foo';
// console.log(foo);

console.clear(); /* ----------------------------------------clear console---------------------------------------- */
/* global object property & redeclaration */
var foo = 'Foo';
console.log(foo);
var foo = '-Foo-';
let Foo = 'foo';
// let Foo = '-foo-'; /* gives syntex error */
console.log(Foo);

function func() {
    console.log(foo);
    console.log(Foo);
}
func();
