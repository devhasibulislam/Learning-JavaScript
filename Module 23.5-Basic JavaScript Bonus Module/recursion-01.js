function recursion(number){
    if(number > 5) return;
    process.stdout.write(number + ' '); // maintain ascending order
    recursion(++number);
    // process.stdout.write(number + ' '); // maintain descending order
}

recursion(1);

/* before recursion statement the flow maintain ascending order */
/* after recursion statement the flow maintain descending order */
