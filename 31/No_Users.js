var usersBase = [];
console.log(usersBase.length);
for (var i = 0; i < usersBase.length; i++) {
    if (usersBase.length === 0) {
        console.log("The list is empty!");
        break;
    }
    if (usersBase[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hi! ".concat(usersBase[i], ", thank you for logging in again."));
    }
}
