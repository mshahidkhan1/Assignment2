function describe_city(city: string, country: string = "some country"): void {
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("Marsielle", "France");
describe_city("Lahore");
