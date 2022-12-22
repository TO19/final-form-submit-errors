import { FORM_ERROR } from 'final-form';
import { clean } from './utils';
export var resetSubmitError = function (_, state) {
    // Reset the general submit error on any value change
    if (state.formState.submitError) {
        delete state.formState.submitError;
    }
    if (state.formState.submitErrors) {
        delete state.formState.submitErrors[FORM_ERROR];
    }
};
export var resetSubmitErrors = function (args, state, _a) {
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
        var cleanErrors = clean(newErrors_1);
        state.formState.submitErrors = cleanErrors;
    }
};
var submitErrorsMutators = {
    resetSubmitError: resetSubmitError,
    resetSubmitErrors: resetSubmitErrors
};
export default submitErrorsMutators;
