// a group of products with their quantity
const groupOfProducts = [
    { pName: 'Shirt', pColor: 'Neon Red', pPrice: 750, pQuantity: 3 },
    { pName: 'Watch', pColor: 'Serriea Blue', pPrice: 5300, pQuantity: 5 },
    { pName: 'Earbuds', pColor: 'Midnight Black', pPrice: 2399, pQuantity: 8 }
];

const cartForShirt = (groupOfProducts[0].pPrice * groupOfProducts[0].pQuantity);
const cartForWatch = (groupOfProducts[1].pPrice * groupOfProducts[1].pQuantity);
const cartForEarbuds = (groupOfProducts[2].pPrice * groupOfProducts[2].pQuantity);

// individual cart
console.log('Cart for watch: ' + cartForWatch);
console.log('Cart for earbuds: ' + cartForEarbuds);
console.log('Cart for shirt: ' + cartForShirt);

/* cart total */
// method 1
let cartTotal = (cartForShirt + cartForWatch + cartForEarbuds);
console.log('Total cart: ' + cartTotal);
// method 2
cartTotal = 0;
for (const products of groupOfProducts)
    cartTotal += (products.pPrice * products.pQuantity);
console.log('Total cart: ' + cartTotal);