/* print the 'toppings' segment */
const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

console.log(pizza.toppings);
for(var i = 0; i < pizza.toppings.length; i++)
    console.log(pizza.toppings[i]);