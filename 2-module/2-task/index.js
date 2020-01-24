/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let count = 0;

  for (const key in obj) {
    count++;
  }

  return !count;
}
