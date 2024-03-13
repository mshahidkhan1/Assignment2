let currentUsers = ["Euclid", "Dionysus", "Beefy", "Rhode", "Classic"];

let newUsers = ["Euclid", "Dionysus", "Beefy1", "Rhode1", "Classic1"];

for (let newUser of newUsers) {
    if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
