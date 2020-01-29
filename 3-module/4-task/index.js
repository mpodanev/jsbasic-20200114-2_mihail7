/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  const namifyArr = [];

  for (const el of users) {
    namifyArr.push(el.name);
  }

  return namifyArr;
}
