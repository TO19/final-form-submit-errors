"use strict";
exports.__esModule = true;
exports.resetSubmitErrors = exports.resetSubmitError = void 0;
var final_form_1 = require("final-form");
var utils_1 = require("./utils");
var resetSubmitError = function (_, state) {
    // Reset the general submit error on any value change
    if (state.formState.submitError) {
        delete state.formState.submitError;
    }
    if (state.formState.submitErrors) {
        delete state.formState.submitErrors[final_form_1.FORM_ERROR];
    }
};
exports.resetSubmitError = resetSubmitError;
var resetSubmitErrors = function (args, state, _a) {
    var setIn = _a.setIn;
    var fields = args[0];
    // Reset the error on value change
    if (fields.length) {
        var newErrors_1 = state.formState.submitErrors;
        fields.forEach(function (key) {
            if (newErrors_1) {
                newErrors_1 = setIn(newErrors_1, key, null);
            }
        });
        // Clear submit errors from empty objects and arrays
        var cleanErrors = (0, utils_1.clean)(newErrors_1);
        state.formState.submitErrors = cleanErrors;
    }
};
exports.resetSubmitErrors = resetSubmitErrors;
var submitErrorsMutators = {
    resetSubmitError: exports.resetSubmitError,
    resetSubmitErrors: exports.resetSubmitErrors
};
exports["default"] = submitErrorsMutators;
