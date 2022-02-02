/* array within an object */
const flowerPronounce = {
    common_name: 'Butterfly Weed',
    species_derivation: 'Tuberous Roots',
    genus_derivation: 'Greek god of healing -Asklepios',
    botanical_name: 'Asclepias tuberosa',
    // implemented with array objects
    fruitPronounce: [
        {
            s_no: 1,
            common_name: 'Tulsi',
            scientific_name: 'Ocimum sanctum'
        },
        {
            s_no: 2,
            common_name: 'Cotton',
            scientific_name: 'Gossypium herbaceum'
        },
        {
            s_no: 3,
            common_name: 'Banyan',
            scientific_name: 'Ficus benghalensis'
        }
    ]
};

// console.log(flowerPronounce);
// console.log(flowerPronounce.fruitPronounce);
// console.log(flowerPronounce.fruitPronounce[0]);

/* object within an array */
const foodVocabulary = [
    { // 0
        a1: 'asparagus',
        a2: 'apples',
        a3: 'avoacado',
        a4: 'alfalfa',
        a5: 'acorn squash',
        a6: 'almond',
        a7: 'arugala',
        a8: 'applesauce'
    },
    { // 1
        b1: 'bruscetta',
        b2: 'bacon',
        b3: 'black beans',
        b4: 'bagels',
        b5: 'baked beans',
        b6: 'bbq',
        b7: 'bison'
    },
    { // 2
        c1: 'cabbage',
        c2: 'cake',
        c3: 'carrots',
        c4: 'carne asada',
        c5: 'celery',
        c6: 'cheese'
    },
    { // 3
        d1: 'dates',
        d2: 'dips',
        d3: 'duck',
        d4: 'dumplings',
        d5: 'donuts'
    },
    { // 4
        e1: 'eggs',
        e2: 'enchilada',
        e3: 'eggrolls',
        e4: 'english muffins'
    }
];

for(const food of foodVocabulary)
    // console.log(food);
    console.log(food.a1);
    // console.log(foodVocabulary);
