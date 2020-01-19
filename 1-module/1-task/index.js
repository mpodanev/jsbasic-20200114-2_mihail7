/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  if (n === 0 || n === 1) {
    return 1;
  }

  let acc = n;

  while (n - 1) {
    acc *= --n;
  }

  return acc;
}
