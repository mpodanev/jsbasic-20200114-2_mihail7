/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.filter((el) => el.age <= age).reduce((acc, it) => {
    if (acc === '') {
      return acc += it.name + ', ' + it.balance;
    }
    return acc += '\n' + it.name + ', ' + it.balance;
  }, '');
}
