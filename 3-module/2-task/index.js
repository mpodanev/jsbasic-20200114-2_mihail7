/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arr = str
    .split(' ')
    .reduce((acc, item) => acc.concat(item.split(',')), [])
    .map(it => parseFloat(it))
    .filter(it => !isNaN(it))
    .sort((a, b) => a - b);

  return {
    min: arr[0],
    max: arr[arr.length - 1],
  };
}
