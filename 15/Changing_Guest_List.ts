const dinnerGuests = ["Zayan", "Masharib", "Sadia"];

console.log("Guests before:");
for (const guest of dinnerGuests) {
  console.log(`${guest}`);
}

dinnerGuests.pop()
console.log(`\nUnfortunately, Sadia is unable to make it to dinner.`);

const newGuest = "Shahid Khan";
dinnerGuests.push(newGuest);

console.log("Guest list now:");
for (const guest of dinnerGuests) {
  console.log(`${guest}`);
}

for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, You are invited to the dinner party.`);
}
