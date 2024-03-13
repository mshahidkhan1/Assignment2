interface Car {
    manufacturer: string;
    model: string;
    [property: string]: any;
}

function createCar(manufacturer: string, model: string, ...properties: { [property: string]: any }[]): Car {
    const car: Car = { manufacturer, model };

    for (const extra of properties) {
        Object.assign(car, extra);
    }

    return car;
}

const myCar = createCar("BMW", "M3", { color: "Black", yearOfManufacturing: 2000 });

console.log(myCar);
