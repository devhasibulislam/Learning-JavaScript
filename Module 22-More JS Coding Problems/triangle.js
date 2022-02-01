/* area of a triangle */
function triangleArea(ground, height) {
    return ((1 / 2) * (ground * height))
}
console.log('Triangle area: ' + triangleArea(2, 3));

/* area of right triangel */
function rightTriangleArea(height, width) {
    return ((1 / 2) * (height * width));
}
console.log('Right triangel area: ' + rightTriangleArea(5, 3));

/* Area of ​​an isosceles triangle */
function isoscelesTriangleArea(height, ground) {
    return ((ground / 4) * (Math.sqrt((4 * Math.pow(height, 2)) - Math.pow(ground, 2))));
}
console.log("Isosceles triangle area: " + isoscelesTriangleArea(5, 4));

/* Area of ​​an equilateral triangle */
function equilateralTriangleArea(height) {
    return ((Math.sqrt(3) / 4) * Math.pow(height, 2));
}
console.log('Equilateral triangle area: ' + equilateralTriangleArea(5));
