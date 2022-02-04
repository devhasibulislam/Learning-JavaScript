// ---------- Problem 1: ----------

function anaToVori(ana) {
    if (typeof ana === 'string') {
        return 'String or Symbol not allow';
    }

    else if (ana > 0) {
        const vori = parseFloat((ana / 16).toFixed(2));
        return vori; /* return as number */
    }
    
    else if (ana <= 0) {
        return 'Zero or Negative not allow';
    }
}

// console.log(typeof(anaToVori(35))); /* check wheather it is number or string */

/* handling errors */
// console.log(anaToVori('35'));
// console.log(anaToVori('&'));
// console.log(anaToVori(-35));
// console.log(anaToVori(0));

console.log(anaToVori(35));

// ---------- Problem 2: ----------

function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
    if ((singaraQuantity < 0) || (samosaQuantity < 0) || (jalebiQuantity < 0)) {
        return 'Negative input not allow';
    }

    else if ((singaraQuantity >= 0) && (samosaQuantity >= 0) && (jalebiQuantity >= 0)) {
        const totalSingaraPrice = singaraQuantity * 7;
        const totaSamosaPrice = samosaQuantity * 10;
        const totalJalebiPrice = jalebiQuantity * 15;

        const totalPrice = totalSingaraPrice + totaSamosaPrice + totalJalebiPrice;
        return totalPrice; /* return as number */
    }

    else {
        if ((typeof singaraQuantity) === 'string')
            return 'String or Symbol not allow';
        else if ((typeof samosaQuantity) === 'string')
            return 'String or Symbol not allow';
        else if ((typeof jalebiQuantity) === 'string')
            return 'String or Symbol not allow';
    }
}

// console.log(typeof(pandaCost(3, 5, 2))); /* check wheather it is number or string */

/* handling errors */
// console.log(pandaCost(3, 5, -2));
// console.log(pandaCost(-3, 5, -2));
// console.log(pandaCost(-3, 5.1, -2));
// console.log(pandaCost(3, 'Hello', 2));
// console.log(pandaCost('3', 'Hello', 2));
// console.log(pandaCost('3', 'Hello', '2'));

console.log(pandaCost(3, 5.1, 0));

// ---------- Problem 3: ----------

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

// ---------- Problem 4: ----------

function oddFriend(myFriends) {
    let flag = false;
    for (const friend of myFriends) {
        if ((friend.length % 2) == 0) {
            flag = true;
        }

        else if ((friend.length % 2) != 0) {
            return friend; /* return as string */
        }
    }

    if (flag == true) {
        return 'All names are even number of letters';
    }
}

// console.log(typeof(oddFriend(['Rakib', 'Dibos', 'Laish', 'Sabbir', 'Hasib']))); /* check wheather it is number or string */

/* handling errors */
// console.log(oddFriend(['Sabbir', 'Dibos1', 'Rakib2', 'Laish3', 'Hasib4']));
// console.log(oddFriend(['Sabbir', 'Dibos1', 'Rakib2', 'Laish3']));
// console.log(oddFriend(['Sabbir', 'Dibos1', 'Rakib2']));


console.log(oddFriend(['Sabbir', 'Rakib', 'Dibos', 'Laish', 'Hasib']));
