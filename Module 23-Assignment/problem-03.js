function picnicBudget(numberOfMembers) {
    const moneyForFirst100 = 5000;
    const moneyForSecond100 = 4000;
    const moneyForRest = 3000;
    let leviedMoney, budgetForFirst100, budgetForSecond100, budgetForRest;

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

// console.log(typeof(picnicBudget(100))); /* check wheather it is number or string */
console.log(picnicBudget(300));
