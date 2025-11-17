var anything;
anything = "Mezba";
var kgToGMConverter = function (input) {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        var value = input.split(" ")[0];
        console.log(value);
        // return `Converted output is: ${Number(value)*1000}`;
    }
};
var result2 = kgToGMConverter("kg  3");
console.log({ result2: result2 });
