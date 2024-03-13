var currentUsers = ["Euclid", "Dionysus", "Beefy", "Rhode", "Classic"];
var newUsers = ["Euclid", "Dionysus", "Beefy", "Rhode", "Classic"];
var _loop_1 = function (newUser) {
    if (currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("The username '".concat(newUser, "' is not available. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
