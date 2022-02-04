// Problem 4:

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
