/* check a year is leap year or not */
function isLeapYear(year) {
    if (((year % 400) == 0) || ((year % 4) == 0) && ((year % 100) != 0))
        return true;
    return false;
}

year = 2100;
if (isLeapYear(year) == true)
    console.log("Leap Year!");
else
    console.log("Not a leap year!");