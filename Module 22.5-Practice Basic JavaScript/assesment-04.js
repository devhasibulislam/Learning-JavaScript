/* large name, one of my friends */
function bestFriends(firends) {
    let maxLength = 0, maxLenFd;
    for (const friend of firends)
        if (maxLength < friend.length) {
            maxLength = friend.length;
            maxLenFd = friend;
        }
    // for(const friend of firends)
    //     if(maxLength == friend.length)
    //         return friend;
    return maxLenFd;
}

const firends = ['sabbir', 'shakil', 'laish', 'rakib', 'monir', 'sobuj', 'subrina'];
console.log(bestFriends(firends));