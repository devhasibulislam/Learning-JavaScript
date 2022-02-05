const appleWatch = [
    {
        model: 'series 3',
        color: 'green',
        price: 299,
        sku: 's3-aw001'
    },
    {
        model: 'series 4',
        color: 'blue',
        price: 399,
        sku: 's4-aw010'
    },
    {
        model: 'series 5',
        color: 'red',
        price: 499,
        sku: 's5-aw110'
    },
    {
        model: 'series 6',
        color: 'starlight',
        price: 599,
        sku: 's6-aw110'
    },
    {
        model: 'series 7',
        color: 'black',
        price: 699,
        sku: 's7-aw111'
    }
];

function recursion(product, keyword) {
    let match = [];
    for(const upshot of product){
        if(upshot.sku.includes(keyword)){
            match.push(upshot);
        }
    }
    return match;
}

console.log(recursion(appleWatch, 'aw110'))