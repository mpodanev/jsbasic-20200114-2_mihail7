/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let finalString = '';
  let flag = false;
  const arr = str.split('');

  for (const el of arr) {
    if (el === '-') {
      flag = true;
      continue;
    }

    if (flag === true) {
      finalString += el.toUpperCase();
      flag = false;
      continue;
    }

    if (el !== '-') {
      finalString += el;
    }
  }

  return finalString;
}
