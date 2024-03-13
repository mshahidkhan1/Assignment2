function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

const firstLocation = city_country("Karachi", "Pakistan");
const secondLocation = city_country("London", "United Kingdom");
const thirdLocation = city_country("Sydney", "Australia");

console.log(firstLocation);
console.log(secondLocation);
console.log(thirdLocation);
