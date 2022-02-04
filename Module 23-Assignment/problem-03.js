function picnicBudget(numberOfMembers) {
    const moneyForFirst100 = 5000;
    const moneyForSecond100 = 4000;
    const moneyForRest = 3000;
    let leviedMoney, budgetForFirst100, budgetForSecond100, budgetForRest;

    if (numberOfMembers <= 0){
        return 'Zero or Negative input no allow';
    }

    else if (numberOfMembers > 0) {
        if (numberOfMembers <= 100) {
            budgetForFirst100 = numberOfMembers * moneyForFirst100;
            leviedMoney = budgetForFirst100;
        }
        else if (numberOfMembers <= 200) {
            budgetForFirst100 = 100 * moneyForFirst100;
            budgetForSecond100 = (numberOfMembers - 100) * moneyForSecond100;
            leviedMoney = budgetForFirst100 + budgetForSecond100;
        }
        else {
            budgetForFirst100 = 100 * moneyForFirst100;
            budgetForSecond100 = (200 - 100) * moneyForSecond100;
            budgetForRest = (numberOfMembers - 200) * moneyForRest;
            leviedMoney = budgetForFirst100 + budgetForSecond100 + budgetForRest;
        }
        return leviedMoney; /* return as number */
    }

    else{
        return 'String or Symbol not allow';
    }
}

// console.log(typeof(picnicBudget(100))); /* check wheather it is number or string */

/* handling errors */
// console.log(picnicBudget('hello'));
// console.log(picnicBudget('&'));
// console.log(picnicBudget(-1));
// console.log(picnicBudget(0));

console.log(picnicBudget(350));
