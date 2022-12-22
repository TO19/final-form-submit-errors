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
exports.SubmitErrorsSpy = exports.useResetSubmitErrors = exports.submitErrorsMutators = void 0;
var submitErrorsMutators_1 = require("./submitErrorsMutators");
__createBinding(exports, submitErrorsMutators_1, "default", "submitErrorsMutators");
var useResetSubmitErrors_1 = require("./useResetSubmitErrors");
__createBinding(exports, useResetSubmitErrors_1, "default", "useResetSubmitErrors");
var SubmitErrorsSpy_1 = require("./SubmitErrorsSpy");
__createBinding(exports, SubmitErrorsSpy_1, "default", "SubmitErrorsSpy");
