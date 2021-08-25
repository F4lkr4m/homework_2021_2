'use strict'

const plain = arrays => [].concat(...arrays.flat(Infinity));

// function plain(...arrays) {
//     return result.concat(arrays.flat(Infinity));
// }

// function plain(...arrays) {
//     let result = [];
//     for (let i = 0; i < arrays.length; i++) {
//         if (arrays[i] === undefined) {
//             continue;
//         }
//
//         result = result.concat(arrays[i].flat(Infinity));
//     }
//     return result;
// }