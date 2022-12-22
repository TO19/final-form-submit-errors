import { useEffect, useRef } from 'react';
import { useForm } from 'react-final-form';
import { FORM_ERROR, getIn } from 'final-form';
import { isObjectEmpty, flatten } from './utils';
var useResetSubmitErrors = function () {
    var form = useForm();
    var prevValues = useRef(form.getState().values);
    useEffect(function () {
        var mutators = form.mutators;
        var _a = mutators, resetSubmitError = _a.resetSubmitError, resetSubmitErrors = _a.resetSubmitErrors;
        var unsubscribe = form.subscribe(function (_a) {
            var values = _a.values, submitError = _a.submitError, submitErrors = _a.submitErrors;
            if (prevValues.current !== values) {
                if (submitError || (submitErrors && submitErrors[FORM_ERROR])) {
                    if (resetSubmitError) {
                        resetSubmitError();
                    }
                    else {
                        console.error('resetSubmitError mutator was not found');
                    }
                }
                if (!isObjectEmpty(submitErrors)) {
                    // Flatten nested errors object for easier comparison
                    var flatErrors = flatten(submitErrors);
                    var changed_1 = [];
                    // Iterate over each error
                    Object.keys(flatErrors).forEach(function (key) {
                        // Compare the value for the error field path
                        if (getIn(prevValues.current, key) !== getIn(values, key)) {
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
export default useResetSubmitErrors;
