/* Find largest number from 3 numbrs */

function large__number(number1, number2, number3) {
    if (number1 > number2) {
        if (number1 > number3) {
            console.log("Large one is: " + number1);
        } else {
            console.log("Large one is: " + number3);
        }
    }

    else if (number2 > number1) {
        if (number2 > number3) {
            console.log("Large one is: " + number2);
        } else {
            console.log("Large one is: " + number3);
        }
    }
}

large__number(55, -43, 12);