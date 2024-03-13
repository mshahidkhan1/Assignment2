const dinnergs = ["Zayan", "Masharib", "Sadia"];

console.log("Guests before:");
for (const g of dinnergs) {
    console.log(`${g}`);
}

console.log("I wish to inform that we now have a bigger table!");

const newg1 = "Ahmed";
const newg2 = "Maham";
const newg3 = "Ramsha";

dinnergs.unshift(newg1);
dinnergs.splice(Math.floor(dinnergs.length / 2), 0, newg2);

dinnergs.push(newg3);

console.log("Updated Invitation Messages:");
for (const g of dinnergs) {
    console.log(`${g}`);
}
