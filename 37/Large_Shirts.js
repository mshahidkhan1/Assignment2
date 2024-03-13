function make_shirt(size, message) {
    if (size === void 0) { size = "Medium"; }
    if (message === void 0) { message = "Some message"; }
    console.log("Shirt size: ".concat(size));
    console.log("Message on the shirt: \"".concat(message, "\""));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "This is an argument message and has overriden the default value!");
