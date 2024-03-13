function make_shirt(size: string = "Medium", message: string = "Some message"): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message on the shirt: "${message}"`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is an argument message and has overriden the default value!");
