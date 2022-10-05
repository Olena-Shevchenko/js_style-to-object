'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS
 * properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arr = sourceString.split(';');

  arr = arr.map(row => row.trim('\n'));
  arr = arr.filter(row => row.length > 0);
  arr = arr.map(row => row.split(':'));
  arr = arr.map(miniArr => miniArr.map(item => item.trim()));

  const obj = {};

  arr.forEach(miniArr => {
    obj[miniArr[0]] = miniArr[1];
  });

  return obj;
}

module.exports = convertToObject;
