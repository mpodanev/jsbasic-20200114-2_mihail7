/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const arr = str.split(' ');
  let arr2 = [3];
  for (const it of arr) {
    arr2 = arr2.concat(it.split(','));
  }
  const arr3 = arr2.map(it => parseFloat(it)).filter(it => !isNaN(it)).sort((a, b) => a - b);
  const obj = {};
  obj.min = arr3[0];
  obj.max = arr3[arr3.length - 1];
  return obj;
}
