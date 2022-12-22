"use strict";
exports.__esModule = true;
var flatten = function (obj) {
    var toReturn = {};
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
            continue;
        }
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            var flatObject = flatten(obj[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {
                    continue;
                }
                // Make a bracket array notation like some[1].array[0]
                var key = "".concat(i, ".").concat(x).split('.').reduce(function (str, value) {
                    if (/^\[\d\]/.test(value)) {
                        return "".concat(str).concat(value);
                    }
                    if (!isNaN(Number(value))) {
                        return "".concat(str, "[").concat(value, "]");
                    }
                    if (str) {
                        return "".concat(str, ".").concat(value);
                    }
                    return value;
                }, '');
                toReturn[key] = flatObject[x];
            }
        }
        else {
            toReturn[i] = obj[i];
        }
    }
    return toReturn;
};
exports["default"] = flatten;
