/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  return arr.reduce((acc, el) => el >= a && el <= b ? [...acc, el] : [...acc], []);
}
