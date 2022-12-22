"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var isObjectEmpty_1 = __importDefault(require("./isObjectEmpty"));
// Recursively clean an object from empty values
var clean = function (obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] && typeof obj[key] === 'object') {
            var newVal = clean(obj[key]);
            if (!(0, isObjectEmpty_1["default"])(newVal) && newVal.length !== 0) {
                newObj[key] = newVal;
            }
        }
        else if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};
exports["default"] = clean;
