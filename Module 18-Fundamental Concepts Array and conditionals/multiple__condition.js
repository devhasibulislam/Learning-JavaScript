var num1 = -53;
var num2 = -72;
var reserve_num;

if(num1 > num2)
    reserve_num = num1;
else
    reserve_num = num2;

if((reserve_num % 2 == 0) && (reserve_num > 0))
    console.log(reserve_num + " is Positive & Even");
else if((reserve_num % 2 != 0) && (reserve_num > 0))
    console.log(reserve_num + " is Positive & Odd");
else if((reserve_num % 2 == 0) && ((reserve_num < 0) || (reserve_num == 0)))
    console.log(reserve_num + " is Negative or Zero & Even");
else if((reserve_num % 2 != 0) && ((reserve_num < 0) || (reserve_num == 0)))
    console.log(reserve_num + " is Negative or Zero & Odd");