function oddFriend(myFriends) {
    for (const friend of myFriends) {
        if((friend.length % 2) != 0)
            return friend; /* return as string */
    }
}

// console.log(typeof(oddFriend(['Rakib', 'Dibos', 'Laish', 'Sabbir', 'Hasib']))); /* check wheather it is number or string */
console.log(oddFriend(['Sabbir', 'Dibos', 'Rakib', 'Laish', 'Hasib']));
