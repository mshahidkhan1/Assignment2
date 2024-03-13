var personName = "somename";
console.log("Lowercase: ".concat(personName.toLowerCase()));
console.log("Uppercase: ".concat(personName.toUpperCase()));
var titleCaseName = personName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
console.log("Titlecase: ".concat(titleCaseName));
