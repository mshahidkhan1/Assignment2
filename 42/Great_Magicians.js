function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansArray = ["Houdini", "David Copperfield", "Magician3", "Magician4"];
var greatMagiciansArray = make_great(magiciansArray);
show_magicians(greatMagiciansArray);
