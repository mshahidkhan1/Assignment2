function describe_city(city, country) {
    if (country === void 0) { country = "some country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi", "Pakistan");
describe_city("Marsielle", "France");
describe_city("Lahore");
