function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // Adding additional properties to the car object
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        Object.assign(car, extra);
    }
    return car;
}
// Example usage
var myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022, features: ["GPS", "Sunroof"] });
// Print the object
console.log(myCar);
