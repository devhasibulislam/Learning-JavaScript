function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve")); /* output including an undefined */
console.log(add("adam", "eve")); /* only accurate output */
console.log(add("adam", "eve").length); /* only accurate output length */