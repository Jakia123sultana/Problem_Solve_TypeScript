var formatValue = function (input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    if (typeof input === "boolean") {
        return !input;
    }
    return input;
};
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
