var getLength = function (input) {
    if (typeof input === "string") {
        return input.length;
    }
    if (Array.isArray(input)) {
        return input.length;
    }
    return 0;
};
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
