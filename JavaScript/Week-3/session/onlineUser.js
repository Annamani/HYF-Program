const whosOnline = (friends) => {
    const statusList = {
        online: [],
        offline: [],
        away: []
    };

    for (let i = 0; i < friends.length; i++) {

        const friend = friends[i];

        if (friend.lastActivity > 10 && friend.status == "online") {
            statusList.away.push(friend.username)
        } else if (friend.status == "online") {
            statusList.online.push(friend.username);
        }
        else if (friend.status == "offline") {
            statusList.offline.push(friend.username);
        }
    }
    if (statusList.online.length == 0) {
        delete statusList.online;
    }
    if (statusList.away.length == 0) {
        delete statusList.away;
    }
    if (statusList.offline.length == 0) {
        delete statusList.offline;
    }


    return statusList;
}

const friends = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    },
    {
        username: 'jonas',
        status: 'away',
        lastActivity: 14
    }
];
console.log(whosOnline(friends));
