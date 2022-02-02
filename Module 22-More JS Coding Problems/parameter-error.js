/* handle parameter error */
function func(params1, params2) {
    const sum = (params1 + params2);
    const storeSecondParams = params2;
    console.log('Parameter:', storeSecondParams);
    // return sum;
    return storeSecondParams;
}

// const total = func(5, 3); /* here parameters sparate by comma(,) but in this line using that */
// const total = func(5 + 3); /* here parameters sparate by comma(,) but in this line not using that */
/* func take (5 + 3) as a single valued parameter for 'params1' where 'params2' undefined */
const total = func('Hello' + 'JavaScript');
console.log(total);