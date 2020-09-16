/*-----------Chunk-----------------*/
var chunk = function (array, s) {
    var newArr = [];
    for (var i = 0; i < array.length; i += s) {
        newArr.push(array.slice(i, i + s));
    }
    return newArr;
};
/*-----------reduce-----------------*/
// reducer takes an array, reducer() and initialValue as argument
function reduce(arr, reducer, initialValue) {
    var accumulator = initialValue === undefined ? 0 : initialValue; // loop though array    
    for (var i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
/*-----------Filter-----------------*/
var filter = function (array, condition) {
    var a = [];
    for (var _i = 0, _a = array.length; _i < _a.length; _i++) {
        var i = _a[_i];
        if (array[i].condition === true) {
            a.push(array[i]);
        }
    }
};
/*-----------Find-----------------*/
var find = function (collection, condition) {
    for (var _i = 0, _a = collection.length; _i < _a.length; _i++) {
        var i = _a[_i];
        if (condition(collection[i]) === condition) {
            return collection[i];
        }
    }
};
/*-----------Sum-----------------*/
var sum = function (array) {
    var total = 0;
    for (var _i = 0, _a = array.length; _i < _a.length; _i++) {
        var i = _a[_i];
        total += array[i];
    }
    return total;
};
