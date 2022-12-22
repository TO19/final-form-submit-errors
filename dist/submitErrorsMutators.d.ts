import type { Mutator } from 'final-form';
export interface SubmitErrorsMutators<FormValues = any> {
    resetSubmitError: Mutator<FormValues>;
    resetSubmitErrors: Mutator<FormValues>;
}
export declare type UnwrappedSubmitErrorsMutators = {
    resetSubmitError: () => void;
    resetSubmitErrors: (fields: string[]) => void;
};
export declare const resetSubmitError: Mutator;
export declare const resetSubmitErrors: Mutator;
declare const submitErrorsMutators: SubmitErrorsMutators;
export default submitErrorsMutators;
