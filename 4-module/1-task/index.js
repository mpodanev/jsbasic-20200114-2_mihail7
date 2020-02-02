/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const list = document.createElement('ul');
  let itemsStr = '';
  for (const el of friends) {
    itemsStr += `<li>${el.firstName} ${el.lastName}</li>`;
  }
  list.innerHTML = itemsStr;
  return list;
}
