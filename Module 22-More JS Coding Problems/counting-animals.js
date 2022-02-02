/*
    * first 10 miles user can see 10 animals
    * second 10 miles user can see 50 aminals
    * third 10 miles user can see 70 animals
    * rest miles user can see 100 animals
*/

function countAnimals(miles) {
    let f1m = 10; // f1m => first 10 miles
    let s1m = 50; // s1m => second 10 miles
    let t1m = 10; // f1m => third 10 miles
    let rm = 10; // f1m => rest miles
    let ram; // rest animal density
    if (miles <= 10){
        const fad = (miles * f1m);
        return fad; // fad => first animal density
    }
    else if(miles <= 20){
        const fad = (10 * f1m);
        ram = (miles - 10) * s1m;
        return (ram + fad);
    }
    else if(miles <= 30){
        const fad = (10 * f1m); // fad => first animal density
        const sad = (10 * s1m); // sad => second animal density
        ram = (miles - (10 * 2)) * t1m;
        return (ram + (fad + sad));
    }
    else{
        const fad = (10 * f1m); // fad => first animal density
        const sad = (10 * s1m); // sad => second animal density
        const tad = (10 * t1m); // tad => third animal density
        ram = (miles - (10 * 3)) * rm;
        return (ram + (fad + sad + tad));
    }
}

console.log(countAnimals(35));