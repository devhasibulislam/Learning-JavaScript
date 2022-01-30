/* check a number wheather even or odd */
function isEven(number) {
    if (number % 2 == 0)
        return true;
    return false;
}

const number = 142;
if (isEven(number) == true)
    console.log("Even Number!");
else
    console.log("Odd Number!");