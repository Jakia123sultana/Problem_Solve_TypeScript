var getUniqueValues = function (arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var exists = false;
        for (var j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = arr1[i];
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        var exists = false;
        for (var j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = arr2[i];
        }
    }
};
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
