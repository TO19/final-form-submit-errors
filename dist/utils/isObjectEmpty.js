"use strict";
exports.__esModule = true;
var isObjectEmpty = function (obj) {
    if (!obj) {
        return true;
    }
    return Object.entries(obj).length === 0 && obj.constructor === Object;
};
exports["default"] = isObjectEmpty;
