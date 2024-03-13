let personName = "somename";

console.log(`Lowercase: ${personName.toLowerCase()}`);

console.log(`Uppercase: ${personName.toUpperCase()}`);

const titleCaseName = personName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log(`Titlecase: ${titleCaseName}`);
