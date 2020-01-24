/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;

  for (const prop in salaries) {

    if (typeof salaries[prop] === 'number') {
      sum += salaries[prop];

    }

  }

  return sum;
}
