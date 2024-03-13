function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray = ["Houdini", "David Copperfield", "Magician3", "Magician4"];

const greatMagiciansArray = make_great(magiciansArray);

show_magicians(greatMagiciansArray);
