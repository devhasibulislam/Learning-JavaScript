const iPhone = [
    {
        model: 'Apple iPhone 13 Pro Max',
        storage: '512 gb',
        price: 162999
    },
    {
        model: 'Apple iPhone 13 Pro',
        storage: '256 gb',
        price: 147999
    },
    {
        model: 'Apple iPhone 13',
        storage: '128 gb',
        price: 118999
    },
    {
        model: 'Apple iPhone 13 Mini',
        storage: '64 gb',
        price: 103999
    },
    {
        model: 'Apple iPhone 12 Pro Max',
        storage: '128 gb',
        price: 161999
    },
    {
        model: 'Apple iPhone 12 Pro',
        storage: '64 gb',
        price: 109999
    },
    {
        model: 'Apple iPhone 12',
        storage: '32 gb',
        price: 107999
    },
    {
        model: 'Apple iPhone 12 Mini',
        storage: '16 gb',
        price: 102999
    }
];

// find cheapest iPhone now
let iPhoneCheapest = iPhone[0];
for(const phone of iPhone)
    if(iPhoneCheapest.price > phone.price)
        iPhoneCheapest = phone;
console.log(iPhoneCheapest);