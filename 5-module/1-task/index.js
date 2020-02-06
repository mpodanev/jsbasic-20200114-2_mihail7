/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  for (let row of table.rows) {

    if (row.cells[row.cells.length - 1].dataset.available === 'true') {
      row.classList.add('available');
    } else if (row.cells[row.cells.length - 1].dataset.available === 'false') {
      row.classList.add('unavailable');
    } else if (!row.cells[row.cells.length - 1].dataset.available) {
      row.setAttribute('hidden', '');
    }

    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else if (row.cells[2].textContent === 'f') {
      row.classList.add('female');
    }

    if (+row.cells[1].textContent < 18) {
      row.style.textDecoration = 'line-through';
    }

  }
}
