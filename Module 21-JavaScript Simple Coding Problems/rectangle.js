/* find area of a rectangle */
function rectangleArea(height, width) {
    return (height * width);
}
console.log('Area of a rectangle is: ' + rectangleArea(4, 6));

/* find perimeter of a rectangle */
function rectanglePerimeter(height, width) {
    return (2 * (height * width));
}
console.log("Perimeter of a rectangle is: " + rectanglePerimeter(4, 6));

/* find corner of a rectangle */
function rectangleCorner(height, width) {
    return (Math.sqrt(Math.pow(height, 2) * Math.pow(width, 2)));
}
console.log("Corner of a rectangle is: " + rectangleCorner(4, 6));