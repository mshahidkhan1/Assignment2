let personNameWithWhitespace = "\t  aName\n";
console.log(`Original Name: "${personNameWithWhitespace}"`);

let strippedName = personNameWithWhitespace.trim();
console.log(`Stripped Name: "${strippedName}"`);
