var personNameWithWhitespace = "\t  aName\n";
console.log("Original Name: \"".concat(personNameWithWhitespace, "\""));
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name: \"".concat(strippedName, "\""));
