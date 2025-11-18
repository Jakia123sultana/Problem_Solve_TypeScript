var calculateTotalPrice = function (products) {
    var total = products
        .map(function (product) {
        var _a;
        var base = product.price * product.quantity;
        var discountPercent = (_a = product.discount) !== null && _a !== void 0 ? _a : 0;
        if (discountPercent < 0) {
            discountPercent = 0;
        }
        else if (discountPercent > 100) {
            discountPercent = 100;
        }
        var finalPrice = base * (1 - discountPercent / 100);
        return finalPrice;
    });
    return total.reduce(function (sum, val) {
        return sum + val;
    }, 0);
};
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
