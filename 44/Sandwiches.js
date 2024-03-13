function sandwichMaker() {
    var condiments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        condiments[_i] = arguments[_i];
    }
    if (condiments.length === 0) {
        console.log("Please add some condiments!");
    }
    else {
        console.log(condiments);
    }
}
sandwichMaker("Ham", "Cheese", "Lettuce", "Tomato");
sandwichMaker("Turkey", "Swiss");
sandwichMaker();
