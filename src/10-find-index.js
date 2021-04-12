/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let index = -1;
  let found = false;
  let average;
  while (found === false && start <= end) {
    average = Math.floor((start + end) / 2);
    if (array[average] === value) {
      found = true;
      index = average;
    } else if (array[average] > value) {
      end = average - 1;
    } else {
      start = average + 1;
    }
  }
  return index;
}

module.exports = findIndex;
