/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.columnTitles = ['Name', 'Age', 'Salary', 'City'];
    this.el.insertAdjacentElement('beforeend', this.createTheadElement());

  }

  createTdTemplate = function(el) {
    return `<td>${el}</td>`;
  };

  createTheadElement = function() {
    let thead = document.createElement('thead');
    for (const it of this.columnTitles) {
      thead.innerHTML += this.createTdTemplate(it);
    }
    return thead;
  };




  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
