var product = {
    brand: "HP",
};
var getPropertyFromObj = function (obj, key) {
    return obj[key];
};
var result2 = getPropertyFromObj(product, "brand");
console.log(result2);
