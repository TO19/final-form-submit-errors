import isObjectEmpty from './isObjectEmpty';
// Recursively clean an object from empty values
var clean = function (obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] && typeof obj[key] === 'object') {
            var newVal = clean(obj[key]);
            if (!isObjectEmpty(newVal) && newVal.length !== 0) {
                newObj[key] = newVal;
            }
        }
        else if (obj[key] !== null) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};
export default clean;
