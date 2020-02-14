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
    this.el.append(this.createTheadElement());

  }

  createTdTemplate(el) {
    return `<td>${el}</td>`;
  }

  createTableRow(elem) {
    let tr = document.createElement('tr');
    tr.innerHTML = elem;
    return tr;
  }

  createTheadElement() {
    let thead = document.createElement('thead');
    let rowTemplate = '';
    for (const it of this.columnTitles) {
      rowTemplate += this.createTdTemplate(it);
    }
    const trElement = this.createTableRow(rowTemplate);
    thead.append(trElement);
    console.log('My log: ', thead);
    return thead;
  }




  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
