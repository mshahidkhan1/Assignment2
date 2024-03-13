function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const originalArray = ["Houdini", "David Copperfield", "Magician3", "Magician4"];

const copy = [...originalArray];

const arrayContainingGreatMagicians = make_great(copy);

console.log("Original Magicians:");
show_magicians(originalArray);

console.log("\nMagicians with 'the Great':");
show_magicians(arrayContainingGreatMagicians);
