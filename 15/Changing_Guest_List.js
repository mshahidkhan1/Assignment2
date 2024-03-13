var dinnerGuests = ["Zayan", "Masharib", "Sadia"];
console.log("Guests before:");
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("".concat(guest));
}
dinnerGuests.pop();
console.log("\nUnfortunately, Sadia is unable to make it to dinner.");
var newGuest = "Shahid Khan";
dinnerGuests.push(newGuest);
console.log("Guest list now:");
for (var _a = 0, dinnerGuests_2 = dinnerGuests; _a < dinnerGuests_2.length; _a++) {
    var guest = dinnerGuests_2[_a];
    console.log("".concat(guest));
}
for (var _b = 0, dinnerGuests_3 = dinnerGuests; _b < dinnerGuests_3.length; _b++) {
    var guest = dinnerGuests_3[_b];
    console.log("Dear ".concat(guest, ", You are invited to the dinner party."));
}
