"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var final_form_1 = require("final-form");
var utils_1 = require("./utils");
var useResetSubmitErrors = function () {
    var form = (0, react_final_form_1.useForm)();
    var prevValues = (0, react_1.useRef)(form.getState().values);
    (0, react_1.useEffect)(function () {
        var mutators = form.mutators;
        var _a = mutators, resetSubmitError = _a.resetSubmitError, resetSubmitErrors = _a.resetSubmitErrors;
        var unsubscribe = form.subscribe(function (_a) {
            var values = _a.values, submitError = _a.submitError, submitErrors = _a.submitErrors;
            if (prevValues.current !== values) {
                if (submitError || (submitErrors && submitErrors[final_form_1.FORM_ERROR])) {
                    if (resetSubmitError) {
                        resetSubmitError();
                    }
                    else {
                        console.error('resetSubmitError mutator was not found');
                    }
                }
                if (!(0, utils_1.isObjectEmpty)(submitErrors)) {
                    // Flatten nested errors object for easier comparison
                    var flatErrors = (0, utils_1.flatten)(submitErrors);
                    var changed_1 = [];
                    // Iterate over each error
                    Object.keys(flatErrors).forEach(function (key) {
                        // Compare the value for the error field path
                        if ((0, final_form_1.getIn)(prevValues.current, key) !== (0, final_form_1.getIn)(values, key)) {
                            changed_1.push(key);
                        }
                    });
                    if (changed_1.length) {
                        if (resetSubmitErrors) {
                            resetSubmitErrors(changed_1);
                        }
                        else {
                            console.error('resetSubmitError mutator was not found');
                        }
                    }
                }
            }
            prevValues.current = values;
        }, { values: true, submitError: true, submitErrors: true });
        return unsubscribe;
    }, [form]);
};
exports["default"] = useResetSubmitErrors;
