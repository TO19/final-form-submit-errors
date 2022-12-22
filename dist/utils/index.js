"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.isObjectEmpty = exports.flatten = exports.clean = void 0;
var clean_1 = require("./clean");
__createBinding(exports, clean_1, "default", "clean");
var flatten_1 = require("./flatten");
__createBinding(exports, flatten_1, "default", "flatten");
var isObjectEmpty_1 = require("./isObjectEmpty");
__createBinding(exports, isObjectEmpty_1, "default", "isObjectEmpty");
