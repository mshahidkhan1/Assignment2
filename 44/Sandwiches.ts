function sandwichMaker(...condiments: string[]): void {
    if (condiments.length === 0) {
        console.log("Please add some condiments!");
    } else {
        console.log(condiments);
    }
}

sandwichMaker("Ham", "Cheese", "Lettuce", "Tomato");
sandwichMaker("Turkey", "Swiss");
sandwichMaker();
