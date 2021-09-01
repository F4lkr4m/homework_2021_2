'use strict'

/**
 * Flattening objects in one array
 *
 * @param {array} arrays with inner arrays
 * @returns {array | undefined} flattened array or if input is wrong returns undefined
 */
const plain = arrays => {
    if (!Array.isArray(arrays)) {
        return undefined;
    }

    const resultArray = [];

    arrays.forEach((item) => {
        Array.isArray(item) ? Array.prototype.push.apply(resultArray, plain(item)) : resultArray.push(item);
    });

    return resultArray;
}
