'use strict'

/**
 * Flattening objects in one array
 *
 * @param {*[]} arrays - Array with inner Arrays
 * @returns {*[] | undefined} flattened array or if input is wrong returns undefined
 */
const plain = (arrays) => {
    if (!Array.isArray(arrays)) {
        return undefined;
    }

    const resultArray = [];

    while (arrays.length) {
        const value = arrays.pop();
        Array.isArray(value) ? arrays.push(...value) : resultArray.push(value);
    }

    return resultArray.reverse();
}
