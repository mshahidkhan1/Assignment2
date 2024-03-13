let visitingLocations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

console.log("Original Order:", visitingLocations);

console.log("Alphabetical Order:", [...visitingLocations].sort());

console.log("Original Order (unchanged):", visitingLocations);

console.log("Reverse Alphabetical Order:", [...visitingLocations].sort().reverse());

console.log("Original Order (unchanged):", visitingLocations);

visitingLocations.reverse();
console.log("Reversed Order:", visitingLocations);

visitingLocations.reverse();
console.log("Original Order (reversed again):", visitingLocations);

visitingLocations.sort();
console.log("Alphabetical Order:", visitingLocations);

visitingLocations.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", visitingLocations);
