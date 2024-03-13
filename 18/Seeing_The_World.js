var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitingLocations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Original Order:", visitingLocations);
console.log("Alphabetical Order:", __spreadArray([], visitingLocations, true).sort());
console.log("Original Order (unchanged):", visitingLocations);
console.log("Reverse Alphabetical Order:", __spreadArray([], visitingLocations, true).sort().reverse());
console.log("Original Order (unchanged):", visitingLocations);
visitingLocations.reverse();
console.log("Reversed Order:", visitingLocations);
visitingLocations.reverse();
console.log("Original Order (reversed again):", visitingLocations);
visitingLocations.sort();
console.log("Alphabetical Order:", visitingLocations);
visitingLocations.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", visitingLocations);
