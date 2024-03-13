var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var originalArray = ["Houdini", "David Copperfield", "Magician3", "Magician4"];
var copy = __spreadArray([], originalArray, true);
var arrayContainingGreatMagicians = make_great(copy);
console.log("Original Magicians:");
show_magicians(originalArray);
console.log("\nMagicians with 'the Great':");
show_magicians(arrayContainingGreatMagicians);
